import { Resend } from "resend";
import { type NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting: max 3 requests per IP per hour
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

// Cap each uploaded data file at 15 MB and the whole email at 30 MB
// (Resend allows up to 40 MB per email), with at most 5 files.
const MAX_FILE_BYTES = 15 * 1024 * 1024;
const MAX_TOTAL_BYTES = 30 * 1024 * 1024;
const MAX_FILES = 5;

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
    attachments.push({
      filename: `${prefix}-${filename}`,
      content: Buffer.from(await file.arrayBuffer()),
    });
  }

  // Only use the contact as a reply-to if it's a valid email address;
  // otherwise it's a phone number and we surface it in the body instead.
  const replyTo = contact && EMAIL_RE.test(contact) ? contact : undefined;

  try {
    await resend.emails.send({
      from: "GetBayes Stats <contact@getbayes.me>",
      to: "info@getbayes.me",
      replyTo,
      subject: `Analysis Request: ${title}${fullName ? ` — ${fullName}` : ""}`,
      text: [
        fullName ? `Name: ${fullName}` : null,
        `Study title: ${title}`,
        `Contact: ${contact}`,
        `Data files (${dataNames.length}): ${
          dataNames.length ? dataNames.join(", ") : "(none)"
        }`,
        `Documents (${docNames.length}): ${
          docNames.length ? docNames.join(", ") : "(none)"
        }`,
        ``,
        `Goal:`,
        purpose,
      ]
        .filter((line) => line !== null)
        .join("\n"),
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
