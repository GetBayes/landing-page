import { Resend } from "resend";
import { type NextRequest } from "next/server";
import {
  runAssessment,
  formatAssessment,
  priceHeadline,
  type AssessmentInput,
} from "./assess";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where the request (and its preliminary assessment) is sent.
const RECIPIENT = "kutay@getbayes.me";

// In-memory rate limiting: max 3 requests per IP per hour. This also caps how
// often the assessment model runs, so spam can't run up the API bill.
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

// Cap each uploaded data file at 15 MB and the whole email at 30 MB
// (Resend allows up to 40 MB per email), with at most 5 files.
const MAX_FILE_BYTES = 15 * 1024 * 1024;
const MAX_TOTAL_BYTES = 30 * 1024 * 1024;
const MAX_FILES = 5;

// Limits for what we hand to the assessment model (keeps latency + cost down).
const MAX_PREVIEW_CHARS = 6000; // per text-like data file
const MAX_PDF_BYTES = 10 * 1024 * 1024; // skip larger PDFs
const MAX_PDFS = 3; // at most this many PDFs to the model
const TEXT_PREVIEW_EXTS = new Set([
  "csv",
  "tsv",
  "txt",
  "json",
  "md",
  "rtf",
]);

setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateMap) {
    const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
    if (recent.length === 0) {
      rateMap.delete(ip);
    } else {
      rateMap.set(ip, recent);
    }
  }
}, 10 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);

  if (recent.length >= RATE_LIMIT) {
    return true;
  }

  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function extOf(name: string): string {
  const dot = name.lastIndexOf(".");
  return dot === -1 ? "" : name.slice(dot + 1).toLowerCase();
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = (form.get("fullName") as string | null)?.trim();
  const title = (form.get("title") as string | null)?.trim();
  const contact = (form.get("contact") as string | null)?.trim();
  const purpose = (form.get("purpose") as string | null)?.trim();

  const asFiles = (key: string) =>
    form.getAll(key).filter((f): f is File => f instanceof File && f.size > 0);
  const dataFiles = asFiles("file");
  const docFiles = asFiles("document");

  if (!title || !contact || !purpose) {
    return Response.json(
      { error: "Title, contact, and purpose are required." },
      { status: 400 }
    );
  }

  if (dataFiles.length > MAX_FILES || docFiles.length > MAX_FILES) {
    return Response.json(
      { error: "Too many files. Maximum is 5 per field." },
      { status: 400 }
    );
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  const dataNames: string[] = [];
  const docNames: string[] = [];
  let totalBytes = 0;

  // Assessment inputs, gathered from the same buffers we read for attachments.
  const dataPreviews: AssessmentInput["dataPreviews"] = [];
  const pdfDocs: AssessmentInput["pdfDocs"] = [];
  const otherFiles: AssessmentInput["otherFiles"] = [];

  // Prefix filenames so data and documents stay distinguishable in the inbox.
  for (const [file, prefix, names] of [
    ...dataFiles.map((f) => [f, "data", dataNames] as const),
    ...docFiles.map((f) => [f, "doc", docNames] as const),
  ]) {
    if (file.size > MAX_FILE_BYTES) {
      return Response.json(
        { error: "File is too large. Maximum size is 15 MB per file." },
        { status: 413 }
      );
    }
    totalBytes += file.size;
    if (totalBytes > MAX_TOTAL_BYTES) {
      return Response.json(
        { error: "Attachments are too large. Maximum total is 30 MB." },
        { status: 413 }
      );
    }
    const filename = file.name || `${prefix}-file`;
    names.push(filename);
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: `${prefix}-${filename}`, content: buffer });

    // Feed the assessment model: text preview, native PDF, or a note.
    const ext = extOf(filename);
    const label = prefix === "data" ? "veri" : "doküman";
    if (ext === "pdf") {
      if (file.size <= MAX_PDF_BYTES && pdfDocs.length < MAX_PDFS) {
        pdfDocs.push({
          name: `[${label}] ${filename}`,
          base64: buffer.toString("base64"),
        });
      } else {
        otherFiles.push({
          name: `[${label}] ${filename}`,
          note: "PDF, model için fazla büyük — önizlenmedi",
        });
      }
    } else if (TEXT_PREVIEW_EXTS.has(ext)) {
      const text = buffer.toString("utf8").slice(0, MAX_PREVIEW_CHARS);
      dataPreviews.push({ name: `[${label}] ${filename}`, text });
    } else {
      otherFiles.push({
        name: `[${label}] ${filename}`,
        note: `${ext || "bilinmeyen"} dosyası, ${(file.size / 1024).toFixed(0)} KB — önizlenemedi`,
      });
    }
  }

  // Run the preliminary assessment. Never let a failure here block the email.
  const assessment = await runAssessment({
    title,
    purpose,
    fullName: fullName || undefined,
    contact,
    dataPreviews,
    pdfDocs,
    otherFiles,
  });

  // Only use the contact as a reply-to if it's a valid email address;
  // otherwise it's a phone number and we surface it in the body instead.
  const replyTo = contact && EMAIL_RE.test(contact) ? contact : undefined;

  const subject = assessment
    ? `Analiz Talebi: ${title} — ~${priceHeadline(assessment)}${
        fullName ? ` — ${fullName}` : ""
      }`
    : `Analiz Talebi: ${title}${fullName ? ` — ${fullName}` : ""}`;

  const body = [
    fullName ? `Ad Soyad: ${fullName}` : null,
    `Çalışma başlığı: ${title}`,
    `İletişim: ${contact}`,
    `Veri dosyaları (${dataNames.length}): ${
      dataNames.length ? dataNames.join(", ") : "(yok)"
    }`,
    `Dokümanlar (${docNames.length}): ${
      docNames.length ? docNames.join(", ") : "(yok)"
    }`,
    ``,
    `Amaç:`,
    purpose,
    ``,
    assessment
      ? formatAssessment(assessment)
      : "(Ön değerlendirme bu talep için oluşturulamadı — talebi elle inceleyin.)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await resend.emails.send({
      from: "GetBayes Stats <contact@getbayes.me>",
      to: RECIPIENT,
      replyTo,
      subject,
      text: body,
      attachments: attachments.length ? attachments : undefined,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
