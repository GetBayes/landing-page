import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";

// ---------------------------------------------------------------------------
// Preliminary assessment engine for the /api/stats analysis-request form.
//
// Runs a fast, cheap model over the request (study title, goal text, data-file
// previews, and any PDF documents) to produce a rough scope + price estimate
// and a short internal report for the team. This never reaches the requester —
// it is only included in the email that goes to kutay@getbayes.me.
//
// Provider is switchable via env (STATS_ASSESS_PROVIDER=anthropic|openai).
// Everything here is server-only; API keys never touch the client.
// ---------------------------------------------------------------------------

export type AssessmentInput = {
  title: string;
  purpose: string;
  fullName?: string;
  contact: string;
  // Decoded text previews of text-like data files (csv/txt/json/…).
  dataPreviews: { name: string; text: string }[];
  // PDF documents passed to the model natively (raw base64, no data-URI prefix).
  pdfDocs: { name: string; base64: string }[];
  // Everything else we couldn't preview — the model still knows it exists.
  otherFiles: { name: string; note: string }[];
};

export type Assessment = {
  studyType: "tez" | "basit" | "hoca" | "diger";
  studyTypeReason: string;
  goalCount: number;
  goalsClear: boolean;
  hypothesisTests: string[];
  extraTests: {
    name: string;
    complexity: "dusuk" | "orta" | "yuksek";
    addTRY: number;
  }[];
  includesPowerAnalysis: boolean;
  dataQualityScore: number; // 0–10 (10 = tertemiz)
  dataCleanliness: "temiz" | "az_kirli" | "orta_kirli" | "cok_kirli";
  dataNotes: string;
  documentationCompleteness: "tam" | "kucuk_eksik" | "orta_eksik" | "cok_eksik";
  documentationNotes: string;
  missingItems: string[];
  priceMinTRY: number;
  priceMaxTRY: number;
  priceBreakdown: string;
  confidence: "dusuk" | "orta" | "yuksek";
  internalSummary: string;
};

// JSON Schema shared by both providers. All properties are required and objects
// set additionalProperties:false so it satisfies OpenAI strict mode as well as
// Anthropic structured outputs.
const ASSESSMENT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    studyType: { type: "string", enum: ["tez", "basit", "hoca", "diger"] },
    studyTypeReason: { type: "string" },
    goalCount: { type: "integer" },
    goalsClear: { type: "boolean" },
    hypothesisTests: { type: "array", items: { type: "string" } },
    extraTests: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          name: { type: "string" },
          complexity: { type: "string", enum: ["dusuk", "orta", "yuksek"] },
          addTRY: { type: "integer" },
        },
        required: ["name", "complexity", "addTRY"],
      },
    },
    includesPowerAnalysis: { type: "boolean" },
    dataQualityScore: { type: "integer" },
    dataCleanliness: {
      type: "string",
      enum: ["temiz", "az_kirli", "orta_kirli", "cok_kirli"],
    },
    dataNotes: { type: "string" },
    documentationCompleteness: {
      type: "string",
      enum: ["tam", "kucuk_eksik", "orta_eksik", "cok_eksik"],
    },
    documentationNotes: { type: "string" },
    missingItems: { type: "array", items: { type: "string" } },
    priceMinTRY: { type: "integer" },
    priceMaxTRY: { type: "integer" },
    priceBreakdown: { type: "string" },
    confidence: { type: "string", enum: ["dusuk", "orta", "yuksek"] },
    internalSummary: { type: "string" },
  },
  required: [
    "studyType",
    "studyTypeReason",
    "goalCount",
    "goalsClear",
    "hypothesisTests",
    "extraTests",
    "includesPowerAnalysis",
    "dataQualityScore",
    "dataCleanliness",
    "dataNotes",
    "documentationCompleteness",
    "documentationNotes",
    "missingItems",
    "priceMinTRY",
    "priceMaxTRY",
    "priceBreakdown",
    "confidence",
    "internalSummary",
  ],
} as const;

// Generic, number-free fallback. The authoritative numeric playbook lives in the
// STATS_PRICING_PROMPT env var (gitignored) so exact pricing never enters the repo.
const DEFAULT_PRICING_RULES = `Fiyatı TL cinsinden, çalışmanın zorluğuna göre adil biçimde tahmin et:
- Daha zor / daha kapsamlı / akademisyen (hoca) çalışmaları daha pahalıdır; basit işler daha ucuzdur.
- Veri ne kadar kirliyse (temizlenmesi gereken iş çoksa) fiyat o kadar artar.
- Dokümanlar eksik/belirsiz/yanlışsa fiyat artar.
- Betimsel istatistik ve normallik testleri pakete dahildir; bunun ötesindeki her ek/özel test fiyatı artırır.
- Güç analizi / örneklem büyüklüğü hesabı ÜCRETSİZDİR.
Fiyatı bir min–max TL aralığı olarak ver.`;

function pricingRules(): string {
  const fromEnv = process.env.STATS_PRICING_PROMPT?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_PRICING_RULES;
}

function systemPrompt(): string {
  return `Sen GetBayes'in istatistik danışmanlık ekibi için çalışan bir ön değerlendirme asistanısın. GetBayes; tez, makale ve akademik çalışmalar için istatistik analizi yapar (SPSS, R, Jamovi vb.).

Sana bir müşteri talebi verilecek: çalışma başlığı, amaç/istek metni, veri dosyası önizlemeleri ve varsa doküman/PDF'ler. Görevin ÇOK HIZLI bir ön tarama yapmak:
- Dokümanları ve amaç metnini incele; amaçların net olup olmadığına ve özellikle AMAÇ/HİPOTEZ SAYISINA bak (çok önemli: basit bir iş bile çok sayıda ölçüm/amaç içeriyorsa kompleks hale gelir ve fiyatı artırır).
- Veriye hızlıca bak ve KALİTESİNİ ölç (0–10 arası puan; 10 = tertemiz). Veriyi TEMİZLEME, sadece değerlendir — kirlilik, eksik gözlem, tutarsızlık, kodlama sorunları vb.
- Dokümanların yeterli/eksik olup olmadığını değerlendir.
- Ölçek güvenilirliği, faktör analizi gibi ek testlere ihtiyaç olup olmadığını tespit et.
- Güç analizi / örneklem büyüklüğü hesabı isteniyorsa bunu işaretle.
- Bir FİYAT TAHMİNİ (min–max TL) üret ve ekip için kısa bir Türkçe ön rapor (internalSummary) yaz.

${pricingRules()}

Tüm metinsel çıktı Türkçe olsun. Yalnızca istenen JSON şemasına uygun yanıt ver; başka açıklama ekleme.`;
}

// Human-readable brief that both providers receive as the primary text input.
function briefText(input: AssessmentInput): string {
  const lines: string[] = [];
  lines.push("=== MÜŞTERİ TALEBİ ===");
  if (input.fullName) lines.push(`Ad Soyad: ${input.fullName}`);
  lines.push(`Çalışma başlığı: ${input.title}`);
  lines.push(`İletişim: ${input.contact}`);
  lines.push("");
  lines.push("Amaç / istek metni:");
  lines.push(input.purpose);
  lines.push("");

  if (input.pdfDocs.length > 0) {
    lines.push(
      `Ekli PDF doküman(lar) (içerik ayrıca iletildi): ${input.pdfDocs
        .map((d) => d.name)
        .join(", ")}`
    );
  }
  if (input.otherFiles.length > 0) {
    lines.push("Önizlenemeyen diğer dosyalar:");
    for (const f of input.otherFiles) lines.push(`- ${f.name} (${f.note})`);
  }
  if (input.dataPreviews.length > 0) {
    lines.push("");
    lines.push("=== VERİ DOSYASI ÖNİZLEMELERİ ===");
    for (const d of input.dataPreviews) {
      lines.push(`--- ${d.name} ---`);
      lines.push(d.text);
      lines.push("");
    }
  }
  if (
    input.pdfDocs.length === 0 &&
    input.dataPreviews.length === 0 &&
    input.otherFiles.length === 0
  ) {
    lines.push("(Dosya eklenmemiş.)");
  }
  return lines.join("\n");
}

function resolveProvider(): "anthropic" | "openai" {
  return (process.env.STATS_ASSESS_PROVIDER || "anthropic").toLowerCase() ===
    "openai"
    ? "openai"
    : "anthropic";
}

async function assessWithAnthropic(
  input: AssessmentInput
): Promise<Assessment> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const model = process.env.STATS_ANTHROPIC_MODEL || "claude-haiku-4-5";

  const content: Anthropic.ContentBlockParam[] = [
    { type: "text", text: briefText(input) },
  ];
  for (const doc of input.pdfDocs) {
    content.push({
      type: "document",
      source: {
        type: "base64",
        media_type: "application/pdf",
        data: doc.base64,
      },
      title: doc.name,
    });
  }
  content.push({
    type: "text",
    text: "Yukarıdaki çalışmayı değerlendir ve JSON şemasına göre yanıt ver.",
  });

  const response = await client.messages.create({
    model,
    max_tokens: 2048,
    system: systemPrompt(),
    // Structured outputs — guarantees schema-valid JSON. Supported on Haiku 4.5.
    output_config: {
      format: { type: "json_schema", schema: ASSESSMENT_SCHEMA },
    },
    messages: [{ role: "user", content }],
  } as Anthropic.MessageCreateParamsNonStreaming);

  const textBlock = response.content.find(
    (b): b is Anthropic.TextBlock => b.type === "text"
  );
  if (!textBlock) throw new Error("Anthropic: no text block in response");
  return JSON.parse(textBlock.text) as Assessment;
}

async function assessWithOpenAI(input: AssessmentInput): Promise<Assessment> {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const model = process.env.STATS_OPENAI_MODEL || "gpt-5-mini";

  const content: OpenAI.Chat.Completions.ChatCompletionContentPart[] = [
    { type: "text", text: briefText(input) },
  ];
  for (const doc of input.pdfDocs) {
    content.push({
      type: "file",
      file: {
        filename: doc.name,
        file_data: `data:application/pdf;base64,${doc.base64}`,
      },
    });
  }
  content.push({
    type: "text",
    text: "Yukarıdaki çalışmayı değerlendir ve JSON şemasına göre yanıt ver.",
  });

  const response = await client.chat.completions.create({
    model,
    // Reasoning models (gpt-5 family) require max_completion_tokens, not max_tokens.
    max_completion_tokens: 4000,
    // Keep this a fast, cheap scan rather than a deep reasoning pass.
    reasoning_effort: "low",
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "assessment",
        strict: true,
        schema: ASSESSMENT_SCHEMA,
      },
    },
    messages: [
      { role: "system", content: systemPrompt() },
      { role: "user", content },
    ],
  });

  const text = response.choices[0]?.message?.content;
  if (!text) throw new Error("OpenAI: empty response");
  return JSON.parse(text) as Assessment;
}

// Returns the assessment, or null on any failure — the caller must still send
// the email so a lead is never lost to a model/API hiccup.
export async function runAssessment(
  input: AssessmentInput
): Promise<Assessment | null> {
  try {
    return resolveProvider() === "openai"
      ? await assessWithOpenAI(input)
      : await assessWithAnthropic(input);
  } catch (err) {
    console.error("[stats] preliminary assessment failed:", err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Email rendering
// ---------------------------------------------------------------------------

const TRY = (n: number) => `${n.toLocaleString("tr-TR")} TL`;

const CLEANLINESS_TR: Record<Assessment["dataCleanliness"], string> = {
  temiz: "Temiz",
  az_kirli: "Az kirli",
  orta_kirli: "Orta kirli",
  cok_kirli: "Çok kirli",
};
const DOC_TR: Record<Assessment["documentationCompleteness"], string> = {
  tam: "Tam / yeterli",
  kucuk_eksik: "Küçük eksikler",
  orta_eksik: "Orta düzey eksik",
  cok_eksik: "Çok eksik / belirsiz",
};
const STUDY_TR: Record<Assessment["studyType"], string> = {
  tez: "Tez",
  basit: "Basit iş",
  hoca: "Hoca / akademisyen çalışması",
  diger: "Diğer",
};
const COMPLEXITY_TR: Record<
  Assessment["extraTests"][number]["complexity"],
  string
> = { dusuk: "düşük", orta: "orta", yuksek: "yüksek" };

// Short one-line price summary for the email subject.
export function priceHeadline(a: Assessment): string {
  return a.priceMinTRY === a.priceMaxTRY
    ? TRY(a.priceMinTRY)
    : `${TRY(a.priceMinTRY)}–${TRY(a.priceMaxTRY)}`;
}

export function formatAssessment(a: Assessment): string {
  const lines: string[] = [];
  lines.push("========================================");
  lines.push("  OTOMATİK ÖN DEĞERLENDİRME");
  lines.push("========================================");
  lines.push("");
  lines.push(`Tahmini fiyat: ${priceHeadline(a)}`);
  lines.push(`Güven düzeyi: ${a.confidence}`);
  lines.push("");
  lines.push(`Çalışma türü: ${STUDY_TR[a.studyType]} — ${a.studyTypeReason}`);
  lines.push(`Amaç/hipotez sayısı: ${a.goalCount}`);
  lines.push(`Amaçlar net mi: ${a.goalsClear ? "Evet" : "Hayır"}`);
  if (a.hypothesisTests.length > 0) {
    lines.push(`Öngörülen testler: ${a.hypothesisTests.join(", ")}`);
  }
  lines.push("");
  lines.push(
    `Veri kalitesi: ${a.dataQualityScore}/10 (${CLEANLINESS_TR[a.dataCleanliness]})`
  );
  if (a.dataNotes) lines.push(`Veri notları: ${a.dataNotes}`);
  lines.push("");
  lines.push(`Doküman durumu: ${DOC_TR[a.documentationCompleteness]}`);
  if (a.documentationNotes)
    lines.push(`Doküman notları: ${a.documentationNotes}`);
  lines.push("");
  if (a.extraTests.length > 0) {
    lines.push("Ek testler:");
    for (const t of a.extraTests) {
      lines.push(
        `- ${t.name} (${COMPLEXITY_TR[t.complexity]}, +${TRY(t.addTRY)})`
      );
    }
  } else {
    lines.push("Ek test: yok (pakete dahil testler yeterli).");
  }
  lines.push(
    `Güç analizi / örneklem hesabı: ${
      a.includesPowerAnalysis ? "VAR → ÜCRETSİZ olarak sunulacak" : "yok"
    }`
  );
  lines.push("");
  if (a.missingItems.length > 0) {
    lines.push("Eksik / netleştirilmesi gerekenler:");
    for (const m of a.missingItems) lines.push(`- ${m}`);
    lines.push("");
  }
  lines.push("Fiyat gerekçesi:");
  lines.push(a.priceBreakdown);
  lines.push("");
  lines.push("Ön rapor:");
  lines.push(a.internalSummary);
  lines.push("");
  lines.push("— Bu değerlendirme otomatiktir; nihai fiyat ekip onayı gerektirir.");
  return lines.join("\n");
}
