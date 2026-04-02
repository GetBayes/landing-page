# GetBayes Landing Page — Animations, Fonts & Resend Integration

## Overview

Visual overhaul of the existing GetBayes landing page: replace generic fonts with Source Serif 4 + Plus Jakarta Sans, add scroll-triggered animations throughout, replace the static hero preview with an animated data-to-report visualization, and wire up the contact form to Resend for email delivery with rate limiting.

---

## 1. Font Replacement

### Fonts

| Role | Current | New |
|------|---------|-----|
| Headings (serif) | Georgia (system) | Source Serif 4 (Google Fonts, weights 400/600/700) |
| Body (sans) | Geist Sans | Plus Jakarta Sans (Google Fonts, weights 400/500/600/700) |
| Mono (stats/code) | Geist Mono | JetBrains Mono (Google Fonts, weights 400/500) |

### Implementation

- Load all three via `next/font/google` in `app/[lang]/layout.tsx`
- Set CSS variables: `--font-serif`, `--font-sans`, `--font-mono`
- Update `globals.css` `@theme inline` block to reference new variables
- Remove Geist imports
- All existing Tailwind classes (`font-serif`, `font-sans`, `font-mono`) continue to work — no component changes needed for font application

---

## 2. Animations

### 2a. Hero Preview Card — Data Flow Animation

**Replaces** the current static preview card in `Hero.tsx` right column.

**New client component:** `HeroAnimation.tsx`

**Visual:**
- Left side: CSV data rows (monospace) that pulse/flow with staggered timing
- Center: Animated dots flowing left-to-right, bridging data to report
- Right side: Report card that assembles — lines fill in, bar chart bars grow from zero

**Technical:**
- Pure CSS `@keyframes` animations — no JS animation library
- Continuous loop (not scroll-triggered — it's above the fold)
- Responsive: on mobile, stack vertically or simplify to just the report card assembling
- Uses the same warm stone color palette

### 2b. Trust Bar — Count-Up Numbers

**Enhances** the trust bar in `Hero.tsx`.

**New client component:** `CountUp.tsx`

**Behavior:**
- Numbers start at 0 and count up to their target (500+, 15, 98%)
- Triggered once when the trust bar enters viewport via IntersectionObserver
- Duration ~2 seconds with easing
- Uses `requestAnimationFrame` for smooth counting

### 2c. How It Works — Pipeline Animation

**Replaces** the current vertical timeline in `HowItWorks.tsx`.

**Updated component:** `HowItWorks.tsx` (becomes client component)

**Visual:**
- Three-stage horizontal pipeline: Upload → Analyze → Report
- Each stage is a card with an icon/visual inside
- Upload: CSV data lines
- Analyze: Spinning gear icon
- Report: Mini document lines
- Arrows between stages pulse in sequence
- Each stage highlights (border darkens, subtle background shift) in sequence
- Below the pipeline: the 4 step descriptions from the current content remain as text

**Responsive:** On mobile, pipeline stacks vertically with downward arrows.

**Technical:**
- CSS animations with `animation-delay` for sequencing
- Triggered on scroll via IntersectionObserver (plays once)

### 2d. Global Scroll Reveal

**New wrapper component:** `ScrollReveal.tsx`

**Behavior:**
- Wraps any section/element
- On viewport entry (IntersectionObserver, threshold ~0.1): applies fade-in + slide-up
- CSS transition: `opacity 0→1`, `translateY(20px→0)`, duration 600ms, ease-out
- Optional `delay` prop for staggering grid items
- Triggers once (no re-animation on scroll back up)

**Applied to:**
- Each section heading (eyebrow + headline)
- Service cards (staggered)
- FAQ items
- Testimonial cards
- Contact section columns

---

## 3. Resend Contact Form Integration

### Setup

- Install `resend` npm package
- API route: `app/api/contact/route.ts`
- Environment variable: `RESEND_API_KEY` in `.env.local`

### API Route Logic

```
POST /api/contact
Body: { name, email, subject, message }
```

1. Validate required fields (name, email, message)
2. Rate limit check: max 3 requests per IP per hour (in-memory Map with TTL cleanup)
3. Send email via Resend to `info@getbayes.me`
   - From: `onboarding@resend.dev` (or custom domain later)
   - Reply-To: sender's email
   - Subject: form subject or default
   - Body: formatted text with name, email, message
4. Return 200 on success, 429 on rate limit, 400 on validation, 500 on send failure

### Form Updates (`Contact.tsx`)

- Add form state management (loading, success, error)
- POST to `/api/contact` on submit
- Show loading spinner on button during send
- Show success message on completion
- Show error message on failure
- Clear form on success
- Disable submit button while loading

### Rate Limiting

Simple in-memory approach:
- `Map<string, number[]>` keyed by IP
- Store timestamps of requests
- On each request, filter to last hour, check count < 3
- Periodic cleanup of stale entries (every 10 minutes)

Note: In-memory rate limiting resets on server restart. Acceptable for a landing page contact form.

---

## 4. AGENTS.md Update

Update to reflect:
- Font stack (Source Serif 4, Plus Jakarta Sans, JetBrains Mono via next/font/google)
- Animation approach (CSS keyframes + IntersectionObserver, no external animation library)
- Resend integration for contact form
- Next.js 16 conventions reminder (read docs in node_modules before modifying)

---

## 5. Files Changed

| File | Action |
|------|--------|
| `app/[lang]/layout.tsx` | Replace font imports |
| `app/globals.css` | Update CSS variables for new fonts |
| `app/[lang]/components/HeroAnimation.tsx` | New — animated data flow card |
| `app/[lang]/components/Hero.tsx` | Import HeroAnimation, replace static card |
| `app/[lang]/components/CountUp.tsx` | New — count-up number component |
| `app/[lang]/components/ScrollReveal.tsx` | New — scroll reveal wrapper |
| `app/[lang]/components/HowItWorks.tsx` | Replace timeline with pipeline animation |
| `app/[lang]/components/Services.tsx` | Wrap cards in ScrollReveal |
| `app/[lang]/components/FAQ.tsx` | Wrap in ScrollReveal |
| `app/[lang]/components/Testimonials.tsx` | Wrap in ScrollReveal |
| `app/[lang]/components/Contact.tsx` | Add Resend form submission + ScrollReveal |
| `app/api/contact/route.ts` | New — Resend API route with rate limiting |
| `.env.local` | New — RESEND_API_KEY placeholder |
| `AGENTS.md` | Update with current tech decisions |
| `package.json` | Add `resend` dependency |

---

## Out of Scope

- Framer Motion or GSAP (CSS animations are sufficient)
- Backend for Privacy/Terms pages
- Real testimonial content
- Custom email domain setup (uses resend.dev default sender)
- SEO enhancements beyond existing meta tags
