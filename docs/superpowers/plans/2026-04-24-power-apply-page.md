# Power Analysis Apply Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a minimal apply page at `/power` where customers can request an a priori power analysis, collecting email (required), Instagram handle (optional), and a brief description (optional), with Resend email notification.

**Architecture:** A new `app/[lang]/power/page.tsx` server component renders a client `PowerForm` component. A new `app/api/power/route.ts` handles POST submissions via Resend. All strings are i18n'd in the existing dictionary files.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Resend, lucide-react

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `app/[lang]/dictionaries/en.json` | Add `power` key with EN strings |
| Modify | `app/[lang]/dictionaries/tr.json` | Add `power` key with TR strings |
| Create | `app/api/power/route.ts` | POST handler: validate, rate-limit, send email via Resend |
| Create | `app/[lang]/power/page.tsx` | Server component: load dictionary, render page shell with logo + context strip |
| Create | `app/[lang]/power/PowerForm.tsx` | Client component: form with email, instagram, description, submit to `/api/power` |

---

### Task 1: Add i18n dictionary entries

**Files:**
- Modify: `app/[lang]/dictionaries/en.json`
- Modify: `app/[lang]/dictionaries/tr.json`

- [ ] **Step 1: Add `power` key to `en.json`**

Open `app/[lang]/dictionaries/en.json` and add this key after `contact` and before `footer`:

```json
"power": {
  "logoText": "GetBayes",
  "backToHome": "Back to Home",
  "headline": "A Priori Power Analysis",
  "subtext": "Whether you're planning your study or working with existing data — we'll determine the right sample size and validate your statistical power.",
  "features": [
    "Optimal sample size calculation",
    "Power validation with your existing data",
    "Delivered in 15 minutes"
  ],
  "form": {
    "email": "Email",
    "emailPlaceholder": "your@email.com",
    "instagram": "Instagram Handle",
    "instagramPlaceholder": "@yourhandle",
    "description": "Brief Description",
    "descriptionPlaceholder": "Tell us about your research...",
    "submit": "Request Power Analysis",
    "success": "Request submitted! We'll get back to you soon.",
    "error": "Something went wrong. Please try again."
  }
},
```

- [ ] **Step 2: Add `power` key to `tr.json`**

Open `app/[lang]/dictionaries/tr.json` and add this key after `contact` and before `footer`:

```json
"power": {
  "logoText": "GetBayes",
  "backToHome": "Ana Sayfaya Dön",
  "headline": "A Priori Güç Analizi",
  "subtext": "İster çalışmanızı planlıyor olun ister mevcut verilerle çalışıyor olun — doğru örneklem büyüklüğünü belirleyip istatistiksel gücünüzü doğrulayacağız.",
  "features": [
    "Optimal örneklem büyüklüğü hesaplama",
    "Mevcut verilerinizle güç doğrulama",
    "15 dakikada teslim"
  ],
  "form": {
    "email": "E-posta",
    "emailPlaceholder": "email@adresiniz.com",
    "instagram": "Instagram Kullanıcı Adı",
    "instagramPlaceholder": "@kullaniciadi",
    "description": "Kısa Açıklama",
    "descriptionPlaceholder": "Araştırmanız hakkında bilgi verin...",
    "submit": "Güç Analizi Talep Et",
    "success": "Talebiniz gönderildi! En kısa sürede size dönüş yapacağız.",
    "error": "Bir hata oluştu. Lütfen tekrar deneyin."
  }
},
```

- [ ] **Step 3: Verify JSON is valid**

Run: `node -e "JSON.parse(require('fs').readFileSync('app/[lang]/dictionaries/en.json','utf8')); console.log('en.json OK')" && node -e "JSON.parse(require('fs').readFileSync('app/[lang]/dictionaries/tr.json','utf8')); console.log('tr.json OK')"`

Expected: Both print OK with no parse errors.

- [ ] **Step 4: Commit**

```bash
git add app/[lang]/dictionaries/en.json app/[lang]/dictionaries/tr.json
git commit -m "feat: add power analysis i18n dictionary entries (EN/TR)"
```

---

### Task 2: Create the API route

**Files:**
- Create: `app/api/power/route.ts`
- Reference: `app/api/contact/route.ts` (same pattern)

- [ ] **Step 1: Create `app/api/power/route.ts`**

```typescript
import { Resend } from "resend";
import { type NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000;

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

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { email?: string; instagram?: string; description?: string };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, instagram, description } = body;

  if (!email) {
    return Response.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "GetBayes Power <contact@getbayes.me>",
      to: "info@getbayes.me",
      replyTo: email,
      subject: `Power Analysis Request: ${email}`,
      text: [
        `Email: ${email}`,
        instagram ? `Instagram: ${instagram}` : null,
        description ? `\nDescription:\n${description}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit app/api/power/route.ts 2>&1 || echo "Check errors above"`

Expected: No type errors.

- [ ] **Step 3: Commit**

```bash
git add app/api/power/route.ts
git commit -m "feat: add power analysis API route with Resend + rate limiting"
```

---

### Task 3: Create the PowerForm client component

**Files:**
- Create: `app/[lang]/power/PowerForm.tsx`
- Reference: `app/[lang]/components/Contact.tsx` (same form pattern)

- [ ] **Step 1: Create `app/[lang]/power/PowerForm.tsx`**

```tsx
"use client";

import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { Loader2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

type PowerFormProps = {
  form: Dictionary["power"]["form"];
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function PowerForm({ form }: PowerFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch("/api/power", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          instagram: formData.get("instagram") || undefined,
          description: formData.get("description") || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || form.error);
      }

      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : form.error);
    }
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={form.emailPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.instagram}
          </label>
          <input
            type="text"
            name="instagram"
            placeholder={form.instagramPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.description}
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder={form.descriptionPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === "loading" && (
            <Loader2 size={16} className="animate-spin" />
          )}
          {form.submit}
        </button>

        {status === "success" && (
          <p className="text-sm font-sans text-green-600 text-center">
            {form.success}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-sans text-red-600 text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </ScrollReveal>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/[lang]/power/PowerForm.tsx
git commit -m "feat: add PowerForm client component"
```

---

### Task 4: Create the power page

**Files:**
- Create: `app/[lang]/power/page.tsx`

- [ ] **Step 1: Create `app/[lang]/power/page.tsx`**

```tsx
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { Target, TrendingUp, Clock } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import PowerForm from "./PowerForm";
import type { Metadata } from "next";

const featureIcons = [Target, TrendingUp, Clock];

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: `${dict.power.headline} — GetBayes`,
    description: dict.power.subtext,
  };
}

export default async function PowerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const { power } = dict;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar with logo */}
      <header className="px-6 py-5">
        <a
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
        >
          <span className="text-lg font-serif font-semibold">
            {power.logoText}
          </span>
          <span className="text-xs font-sans text-foreground-muted">
            ← {power.backToHome}
          </span>
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          {/* Context strip */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                {power.headline}
              </h1>
              <p className="text-base font-sans text-foreground-muted leading-relaxed">
                {power.subtext}
              </p>
            </div>
          </ScrollReveal>

          {/* Feature bullets */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {power.features.map((text: string, index: number) => {
                const Icon = featureIcons[index];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-foreground" />
                    </div>
                    <p className="text-sm font-sans text-foreground-muted">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Form */}
          <PowerForm form={power.form} />
        </div>
      </main>
    </div>
  );
}
```

- [ ] **Step 2: Start dev server and verify the page renders**

Run: `npm run dev`

Open `http://localhost:3000/en/power` and `http://localhost:3000/tr/power` in a browser. Verify:
- Logo links back to home
- Headline, subtext, and feature bullets render correctly in both languages
- Form fields appear with correct labels and placeholders
- Submit button is styled correctly
- ScrollReveal animations trigger on scroll/load

- [ ] **Step 3: Test form submission**

Fill in the form with a test email and submit. Verify:
- Loading spinner appears on button
- Success message shows after submission (requires valid `RESEND_API_KEY` in `.env`)
- If no API key, verify the error state renders correctly (red error text)

- [ ] **Step 4: Commit**

```bash
git add app/[lang]/power/page.tsx
git commit -m "feat: add power analysis apply page"
```

---

### Task 5: Final verification and type check

**Files:**
- All files from previous tasks

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`

Expected: No type errors.

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected: Build succeeds with no errors. The `/en/power` and `/tr/power` pages should appear in the build output.

- [ ] **Step 3: Test both language routes**

Open `http://localhost:3000/en/power` — verify English strings.
Open `http://localhost:3000/tr/power` — verify Turkish strings.
Click the logo on both — verify it navigates to the correct language home page.

- [ ] **Step 4: Final commit (if any fixes were needed)**

```bash
git add -A
git commit -m "fix: resolve any issues found during verification"
```
