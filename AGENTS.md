# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript
- **Tailwind CSS 4** with `@theme inline` for design tokens
- **Fonts:** Source Serif 4 (serif headings), Plus Jakarta Sans (body), JetBrains Mono (mono/stats) — loaded via `next/font/google` with CSS variables `--font-serif`, `--font-sans`, `--font-mono`
- **Animations:** Pure CSS `@keyframes` + `IntersectionObserver` — no framer-motion or GSAP
- **Email:** Resend (contact form at `app/api/contact/route.ts`, rate-limited)
- **i18n:** `app/[lang]/` with JSON dictionaries (EN/TR), `proxy.ts` for detection

## Key Patterns

- Scroll animations use `ScrollReveal` wrapper component (`app/[lang]/components/ScrollReveal.tsx`)
- Hero animation is a continuous CSS loop in `HeroAnimation.tsx`
- Trust bar numbers use `CountUp` component with `IntersectionObserver` trigger
- All animation keyframes live in `app/globals.css`
- Contact form POSTs to `/api/contact` — in-memory rate limit (3/IP/hour)

## Content Guidelines

- **Never mention AI** in user-facing copy
- Tone: professional, warm, collaborative — "your research companion"
