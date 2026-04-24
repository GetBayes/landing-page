# Power Analysis Apply Page — Design Spec

## Overview

A minimal apply page at `/power` where customers can request an a priori power analysis. Collects minimum information (email required, Instagram handle and description optional) and notifies the team via Resend email.

## Route

`app/[lang]/power/page.tsx` — nested under `[lang]` for EN/TR i18n support.

## Page Layout

Minimal standalone page — no shared navbar or footer.

### Top Bar
- GetBayes logo (text or SVG), links back to `/{lang}` (home)
- No other navigation

### Context Strip
Centered section with headline, subtext, and three bullet points.

**Headline (serif):** "A Priori Power Analysis"

**Subtext (sans):** "Whether you're planning your study or working with existing data — we'll determine the right sample size and validate your statistical power."

**Bullets (horizontal on desktop, stacked on mobile):**
| Icon (lucide-react) | Text |
|---|---|
| Target | Optimal sample size calculation |
| TrendingUp | Power validation with your existing data |
| Clock | Delivered in 15 minutes |

Icons use the same 10x10 accent/10 rounded-lg box pattern from Services.

### Form Section
Centered below the context strip, max-width matching the contact form (~`max-w-lg`).

**Fields:**
1. **Email** — `type="email"`, required
2. **Instagram Handle** — `type="text"`, optional, placeholder: `@yourhandle`
3. **Brief Description** — `<textarea>`, 3 rows, optional, placeholder: "Tell us about your research..."

**Submit button:** "Request Power Analysis" — full-width, accent bg, same style as contact form.

**States:**
- `idle` — default
- `loading` — spinner + disabled button (Loader2 icon)
- `success` — green confirmation text
- `error` — red error text

Input styling matches the contact form: `bg-background border border-border rounded-lg`, focus ring with `accent/20`.

### Visual Style
- Same design tokens as the rest of the site (stone palette, warm backgrounds)
- ScrollReveal animations on context strip and form
- Serif font for headline, sans-serif for everything else
- Page background: `bg-background`

## API Route

`app/api/power/route.ts`

- **Method:** POST
- **Body:** `{ email: string, instagram?: string, description?: string }`
- **Validation:** email is required
- **Rate limiting:** Same in-memory pattern as contact route (3 requests/IP/hour)
- **Email delivery:** Resend, sends to `info@getbayes.me`
  - From: `GetBayes Power <contact@getbayes.me>`
  - Subject: `Power Analysis Request: {email}`
  - Body: plain text with email, instagram (if provided), description (if provided)
- **Responses:** `{ success: true }` on 200, error messages on 400/429/500

## i18n

New `power` key added to both `en.json` and `tr.json` dictionary files containing all user-facing strings: headline, subtext, bullet texts, form labels, placeholders, button text, success/error messages.

## Out of Scope

- Authentication
- Database storage
- File upload
- Phone number field
- Full navbar/footer
