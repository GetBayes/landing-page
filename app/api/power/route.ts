import { Resend } from "resend";
import { type NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB per file

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

function str(form: FormData, key: string): string | undefined {
  const v = form.get(key);
  if (typeof v !== "string") return undefined;
  const trimmed = v.trim();
  return trimmed.length > 0 ? trimmed : undefined;
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

  const email = str(form, "email");
  if (!email) {
    return Response.json({ error: "Email is required." }, { status: 400 });
  }

  const contact = str(form, "contact");
  const summary = str(form, "summary");
  const comparison = str(form, "comparison");
  const primary = str(form, "primary");
  const secondary = str(form, "secondary");

  // Expected effect: either a qualitative bucket (small/medium/large) or free text.
  const effectSizeMap: Record<string, string> = {
    small: "Küçük",
    medium: "Orta",
    large: "Büyük",
  };
  const effectSize = str(form, "effectSize");
  const effect =
    effectSize === "custom"
      ? str(form, "effectText")
      : effectSize
        ? effectSizeMap[effectSize] ?? effectSize
        : undefined;

  // Optional uploads → email attachments: reference documents + data files.
  // Each field is capped at 5 files.
  const isFile = (f: FormDataEntryValue): f is File =>
    f instanceof File && f.size > 0;
  const refFiles = form.getAll("referenceFiles").filter(isFile);
  const dataFiles = form.getAll("data").filter(isFile);

  if (refFiles.length > 5 || dataFiles.length > 5) {
    return Response.json(
      { error: "You can upload at most 5 files per field." },
      { status: 400 }
    );
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  const files: File[] = [...refFiles, ...dataFiles];

  for (const file of files) {
    if (file.size > MAX_FILE_BYTES) {
      return Response.json(
        { error: "A file is too large (max 10 MB each)." },
        { status: 400 }
      );
    }
    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name || "attachment", content: buf });
  }

  const section = (label: string, value?: string) =>
    value ? `${label}:\n${value}\n` : null;

  try {
    await resend.emails.send({
      from: "GetBayes Power <contact@getbayes.me>",
      to: "info@getbayes.me",
      replyTo: email,
      subject: `Power Analysis Request: ${email}`,
      text: [
        `Email: ${email}`,
        contact ? `Contact: ${contact}` : null,
        "",
        section("Neyi araştırıyorsunuz? (summary)", summary),
        section("Karşılaştırma (comparison)", comparison),
        section("Ana sonuç (primary outcome)", primary),
        section("Beklenen etki (expected effect)", effect),
        section("Yan sonuçlar (secondary)", secondary),
        attachments.length > 0
          ? `Ekli dosyalar (attachments): ${attachments
              .map((a) => a.filename)
              .join(", ")}`
          : null,
      ]
        .filter((line) => line !== null)
        .join("\n"),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
