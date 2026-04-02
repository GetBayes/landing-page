# Animations, Fonts & Resend Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace generic fonts with Source Serif 4 + Plus Jakarta Sans + JetBrains Mono, add scroll-triggered animations and an animated hero card, wire up the contact form to Resend with rate limiting, and update AGENTS.md.

**Architecture:** CSS keyframes + IntersectionObserver for all animations (no external animation library). Resend API route at `app/api/contact/route.ts` with in-memory rate limiting. Fonts loaded via `next/font/google` with CSS custom properties.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Resend, next/font/google

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `app/[lang]/layout.tsx` | Modify | Replace font imports |
| `app/globals.css` | Modify | Update CSS variables, add animation keyframes |
| `app/[lang]/components/HeroAnimation.tsx` | Create | Animated data-flow preview card (client component) |
| `app/[lang]/components/Hero.tsx` | Modify | Use HeroAnimation, add CountUp to trust bar |
| `app/[lang]/components/CountUp.tsx` | Create | Count-up number animation (client component) |
| `app/[lang]/components/ScrollReveal.tsx` | Create | IntersectionObserver fade-in wrapper (client component) |
| `app/[lang]/components/HowItWorks.tsx` | Modify | Replace timeline with pipeline animation |
| `app/[lang]/components/Services.tsx` | Modify | Wrap cards in ScrollReveal |
| `app/[lang]/components/FAQ.tsx` | Modify | Wrap in ScrollReveal |
| `app/[lang]/components/Testimonials.tsx` | Modify | Wrap in ScrollReveal |
| `app/[lang]/components/Contact.tsx` | Modify | Add form submission + ScrollReveal |
| `app/api/contact/route.ts` | Create | Resend email endpoint with rate limiting |
| `.env.local` | Create | RESEND_API_KEY placeholder |
| `AGENTS.md` | Modify | Update with current tech decisions |
| `package.json` | Modify (via pnpm) | Add `resend` dependency |

---

### Task 1: Replace Fonts

**Files:**
- Modify: `app/[lang]/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Update layout.tsx font imports**

Replace the entire file content:

```tsx
import type { Metadata } from "next";
import { Source_Serif_4, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import "../globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

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
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${sourceSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Update globals.css font variables**

Replace the `@theme inline` block:

```css
@import "tailwindcss";

:root {
  --background: #fafaf9;
  --background-warm: #f5f0eb;
  --foreground: #292524;
  --foreground-muted: #78716c;
  --border: #e7e5e4;
  --border-dark: #d6d3d1;
  --accent: #292524;
  --accent-foreground: #fafaf9;
}

@theme inline {
  --color-background: var(--background);
  --color-background-warm: var(--background-warm);
  --color-foreground: var(--foreground);
  --color-foreground-muted: var(--foreground-muted);
  --color-border: var(--border);
  --color-border-dark: var(--border-dark);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 3: Verify fonts load**

Run: `pnpm dev`

Open browser, inspect elements — headings should show Source Serif 4, body text Plus Jakarta Sans, mono elements JetBrains Mono.

- [ ] **Step 4: Commit**

```bash
git add app/[lang]/layout.tsx app/globals.css
git commit -m "feat: replace fonts with Source Serif 4, Plus Jakarta Sans, JetBrains Mono"
```

---

### Task 2: Create ScrollReveal Component

**Files:**
- Create: `app/[lang]/components/ScrollReveal.tsx`

- [ ] **Step 1: Create ScrollReveal.tsx**

```tsx
"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("scroll-revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Add scroll-reveal CSS to globals.css**

Append to the end of `globals.css`:

```css
/* Scroll reveal animations */
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-revealed {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 3: Commit**

```bash
git add app/[lang]/components/ScrollReveal.tsx app/globals.css
git commit -m "feat: add ScrollReveal component with IntersectionObserver"
```

---

### Task 3: Create CountUp Component

**Files:**
- Create: `app/[lang]/components/CountUp.tsx`

- [ ] **Step 1: Create CountUp.tsx**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export default function CountUp({ end, suffix = "", prefix = "", duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/[lang]/components/CountUp.tsx
git commit -m "feat: add CountUp component with scroll-triggered animation"
```

---

### Task 4: Create HeroAnimation Component

**Files:**
- Create: `app/[lang]/components/HeroAnimation.tsx`

- [ ] **Step 1: Add hero animation keyframes to globals.css**

Append to `globals.css`:

```css
/* Hero data flow animation */
@keyframes fadeFlow {
  0%, 100% { opacity: 0.3; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(6px); }
}

@keyframes dotFlow {
  0% { opacity: 0; transform: translateX(-8px); }
  50% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(8px); }
}

@keyframes fillLine {
  0% { width: 0%; }
  60% { width: 100%; }
  100% { width: 100%; }
}

@keyframes growBar {
  0% { height: 0; }
  50% { height: var(--target-height); }
  100% { height: var(--target-height); }
}

@keyframes reportGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(41,37,36,0); }
  50% { box-shadow: 0 0 20px 2px rgba(41,37,36,0.05); }
}
```

- [ ] **Step 2: Create HeroAnimation.tsx**

```tsx
"use client";

export default function HeroAnimation() {
  const dataRows = [
    "id, age, score, group",
    "1, 24, 87.3, control",
    "2, 31, 92.1, treatment",
    "3, 28, 78.5, control",
    "4, 35, 95.0, treatment",
  ];

  const bars = [
    { height: "40%" },
    { height: "65%" },
    { height: "85%" },
    { height: "55%" },
    { height: "100%" },
  ];

  return (
    <div className="flex-shrink-0 w-full md:w-[420px]">
      <div className="flex items-center gap-4 md:gap-6">
        {/* Data side */}
        <div className="hidden sm:flex flex-col gap-1.5 flex-shrink-0">
          {dataRows.map((row, i) => (
            <div
              key={i}
              className="font-mono text-[11px] text-foreground-muted whitespace-nowrap"
              style={{
                animation: "fadeFlow 3s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {row}
            </div>
          ))}
        </div>

        {/* Flow dots */}
        <div className="hidden sm:flex flex-col items-center gap-1.5 flex-shrink-0">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-foreground"
              style={{
                animation: "dotFlow 2s ease-in-out infinite",
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* Report card */}
        <div
          className="bg-background-warm border border-border rounded-xl p-6 shadow-sm flex-1 min-w-0"
          style={{ animation: "reportGlow 3s ease-in-out infinite" }}
        >
          <p className="text-xs font-sans uppercase tracking-[0.15em] text-foreground-muted mb-4">
            Analysis Output
          </p>

          {/* Filling text lines */}
          <div className="space-y-2 mb-4">
            {[80, 60, 90].map((width, i) => (
              <div key={i} className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground/40 rounded-full"
                  style={{
                    animation: "fillLine 3.5s ease-in-out infinite",
                    animationDelay: `${i * 0.4}s`,
                    maxWidth: `${width}%`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Growing bar chart */}
          <div className="flex items-end gap-2 h-16">
            {bars.map((bar, i) => (
              <div
                key={i}
                className="flex-1 bg-foreground/30 rounded-t"
                style={{
                  animation: "growBar 3.5s ease-out infinite",
                  animationDelay: `${0.8 + i * 0.15}s`,
                  ["--target-height" as string]: bar.height,
                }}
              />
            ))}
          </div>

          <p className="mt-3 text-xs font-sans text-foreground-muted text-center">
            Analysis Complete
          </p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/[lang]/components/HeroAnimation.tsx app/globals.css
git commit -m "feat: add animated hero data-flow preview card"
```

---

### Task 5: Update Hero with HeroAnimation and CountUp

**Files:**
- Modify: `app/[lang]/components/Hero.tsx`

- [ ] **Step 1: Rewrite Hero.tsx**

Replace the entire file:

```tsx
import type { Dictionary } from "../dictionaries";
import HeroAnimation from "./HeroAnimation";
import CountUp from "./CountUp";

type HeroProps = {
  hero: Dictionary["hero"];
  heroPreview: Dictionary["heroPreview"];
  trustBar: Dictionary["trustBar"];
};

export default function Hero({ hero, trustBar }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-background to-background-warm">
      {/* Split hero */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left column - text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-4">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg font-sans text-foreground-muted leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            {hero.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {hero.cta}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3 border border-border-dark text-foreground font-sans font-medium rounded-lg hover:bg-background-warm transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right column - animated preview */}
        <HeroAnimation />
      </div>

      {/* Trust bar with count-up */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">
              <CountUp end={500} suffix="+" />
            </p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.analyses}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border-dark" />
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">
              <CountUp end={15} suffix=" min" />
            </p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.delivery}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border-dark" />
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">
              <CountUp end={98} suffix="%" />
            </p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.satisfaction}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Note: `heroPreview` prop is kept in the type but no longer used in the template. The parent (`page.tsx`) still passes it — we leave `page.tsx` unchanged to avoid breaking the Dictionary type. The prop is simply ignored.

- [ ] **Step 2: Verify hero renders correctly**

Run dev server, check:
- Animated data flow card appears on the right
- CSV rows pulse, dots flow, report card assembles
- Trust bar numbers count up from 0 on scroll

- [ ] **Step 3: Commit**

```bash
git add app/[lang]/components/Hero.tsx
git commit -m "feat: integrate animated hero card and count-up trust bar"
```

---

### Task 6: Replace HowItWorks Timeline with Pipeline Animation

**Files:**
- Modify: `app/[lang]/components/HowItWorks.tsx`

- [ ] **Step 1: Add pipeline animation keyframes to globals.css**

Append to `globals.css`:

```css
/* Pipeline animation */
@keyframes stageHighlight {
  0%, 100% { border-color: var(--border); background: white; }
  25% { border-color: var(--foreground); background: var(--background-warm); }
  50% { border-color: var(--border); background: white; }
}

@keyframes arrowPulse {
  0%, 100% { color: var(--border-dark); }
  30% { color: var(--foreground); }
  60% { color: var(--border-dark); }
}

@keyframes spinGear {
  to { transform: rotate(360deg); }
}
```

- [ ] **Step 2: Rewrite HowItWorks.tsx**

Replace the entire file:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "../dictionaries";
import ScrollReveal from "./ScrollReveal";

type HowItWorksProps = {
  howItWorks: Dictionary["howItWorks"];
};

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
  const [animating, setAnimating] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pipelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimating(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {howItWorks.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {howItWorks.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Pipeline animation */}
        <div
          ref={pipelineRef}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
        >
          {/* Stage 1: Upload */}
          <div className="text-center">
            <div
              className="w-28 h-24 border rounded-xl flex flex-col items-center justify-center bg-background"
              style={animating ? {
                animation: "stageHighlight 4s ease-in-out infinite",
              } : { borderColor: "var(--border)" }}
            >
              <div className="font-mono text-[9px] text-foreground-muted leading-relaxed">
                id,age,score<br />1,24,87.3<br />2,31,92.1
              </div>
            </div>
            <p className="text-xs font-sans text-foreground-muted mt-2">{howItWorks.steps[0].title}</p>
          </div>

          {/* Arrow */}
          <span
            className="text-xl text-border-dark rotate-90 md:rotate-0"
            style={animating ? { animation: "arrowPulse 4s ease-in-out infinite 0.8s" } : {}}
          >
            →
          </span>

          {/* Stage 2: Analyze */}
          <div className="text-center">
            <div
              className="w-28 h-24 border rounded-xl flex items-center justify-center bg-background"
              style={animating ? {
                animation: "stageHighlight 4s ease-in-out infinite 1.5s",
              } : { borderColor: "var(--border)" }}
            >
              <span
                className="text-2xl inline-block"
                style={animating ? { animation: "spinGear 3s linear infinite" } : {}}
              >
                ⚙
              </span>
            </div>
            <p className="text-xs font-sans text-foreground-muted mt-2">{howItWorks.steps[1].title}</p>
          </div>

          {/* Arrow */}
          <span
            className="text-xl text-border-dark rotate-90 md:rotate-0"
            style={animating ? { animation: "arrowPulse 4s ease-in-out infinite 2.3s" } : {}}
          >
            →
          </span>

          {/* Stage 3: Report */}
          <div className="text-center">
            <div
              className="w-28 h-24 border rounded-xl flex flex-col items-center justify-center gap-1 bg-background"
              style={animating ? {
                animation: "stageHighlight 4s ease-in-out infinite 3s",
              } : { borderColor: "var(--border)" }}
            >
              <div className="flex flex-col gap-1 items-center">
                <div className="h-[2px] w-10 bg-foreground rounded" />
                <div className="h-[2px] w-7 bg-foreground/60 rounded" />
                <div className="h-[2px] w-11 bg-foreground/40 rounded" />
                <div className="h-[2px] w-6 bg-foreground/60 rounded" />
              </div>
            </div>
            <p className="text-xs font-sans text-foreground-muted mt-2">{howItWorks.steps[3].title}</p>
          </div>
        </div>

        {/* Step descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {howItWorks.steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center">
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-sans text-sm font-semibold mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="text-sm font-serif font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-sans text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify pipeline renders**

Check desktop: 3 stages horizontal with arrows, animation plays on scroll.
Check mobile: stages stack vertically with downward arrows.

- [ ] **Step 4: Commit**

```bash
git add app/[lang]/components/HowItWorks.tsx app/globals.css
git commit -m "feat: replace HowItWorks timeline with animated pipeline"
```

---

### Task 7: Add ScrollReveal to Services, FAQ, Testimonials

**Files:**
- Modify: `app/[lang]/components/Services.tsx`
- Modify: `app/[lang]/components/FAQ.tsx`
- Modify: `app/[lang]/components/Testimonials.tsx`

- [ ] **Step 1: Update Services.tsx**

Add import at top:
```tsx
import ScrollReveal from "./ScrollReveal";
```

Wrap the heading `<div className="text-center mb-16">` with `<ScrollReveal>...</ScrollReveal>`.

Wrap the featured card `<div className="bg-background border...">` with `<ScrollReveal>...</ScrollReveal>`.

Wrap each supporting card inside the `.map()`. Change the return to:
```tsx
return (
  <ScrollReveal key={index} delay={index * 100}>
    <div
      className={`bg-background border border-border rounded-xl p-6 text-center ${
        isComingSoon ? "opacity-60" : ""
      }`}
    >
      {/* ... existing card content unchanged ... */}
    </div>
  </ScrollReveal>
);
```

Remove the `key={index}` from the inner `<div>` since it's now on `<ScrollReveal>`.

- [ ] **Step 2: Update FAQ.tsx**

Add import at top:
```tsx
import ScrollReveal from "./ScrollReveal";
```

Wrap the heading `<div className="text-center mb-16">` with `<ScrollReveal>...</ScrollReveal>`.

Wrap the accordion container `<div className="space-y-3">` with `<ScrollReveal>...</ScrollReveal>`.

- [ ] **Step 3: Update Testimonials.tsx**

Add import at top:
```tsx
import ScrollReveal from "./ScrollReveal";
```

Wrap the heading `<div className="text-center mb-16">` with `<ScrollReveal>...</ScrollReveal>`.

Wrap each card in the `.map()`. Change:
```tsx
{[0, 1, 2].map((i) => (
  <ScrollReveal key={i} delay={i * 100}>
    <div
      className="bg-background border border-border rounded-xl p-8 flex flex-col items-center text-center h-full"
    >
      {/* ... existing card content unchanged ... */}
    </div>
  </ScrollReveal>
))}
```

Remove `key={i}` from the inner `<div>` since it's now on `<ScrollReveal>`. Add `h-full` to the inner div so cards remain equal height.

- [ ] **Step 4: Verify scroll animations**

Scroll through the page — each section heading and cards should fade-in and slide-up as they enter the viewport.

- [ ] **Step 5: Commit**

```bash
git add app/[lang]/components/Services.tsx app/[lang]/components/FAQ.tsx app/[lang]/components/Testimonials.tsx
git commit -m "feat: add scroll reveal animations to Services, FAQ, Testimonials"
```

---

### Task 8: Resend API Route with Rate Limiting

**Files:**
- Create: `app/api/contact/route.ts`
- Create: `.env.local`

- [ ] **Step 1: Install resend**

```bash
pnpm add resend
```

- [ ] **Step 2: Create .env.local**

```
RESEND_API_KEY=re_your_api_key_here
```

- [ ] **Step 3: Create app/api/contact/route.ts**

First create the directory, then the file:

```ts
import { Resend } from "resend";
import { type NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting: max 3 requests per IP per hour
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

// Cleanup stale entries every 10 minutes
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
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "GetBayes Contact <onboarding@resend.dev>",
      to: "info@getbayes.me",
      replyTo: email,
      subject: subject || `Contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        subject ? `Subject: ${subject}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add app/api/contact/route.ts .env.local
git commit -m "feat: add Resend contact form API route with rate limiting"
```

---

### Task 9: Wire Contact Form to API

**Files:**
- Modify: `app/[lang]/components/Contact.tsx`

- [ ] **Step 1: Rewrite Contact.tsx with form submission**

Replace the entire file:

```tsx
"use client";

import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { Mail, Loader2 } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import ScrollReveal from "./ScrollReveal";

type ContactProps = {
  contact: Dictionary["contact"];
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact({ contact }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {contact.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              {contact.headline}
            </h2>
            <p className="text-base font-sans text-foreground-muted">
              {contact.subtext}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={contact.form.namePlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder={contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {contact.form.submit}
              </button>

              {status === "success" && (
                <p className="text-sm font-sans text-green-600 text-center">
                  {contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-sans text-red-600 text-center">
                  {errorMessage}
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{contact.info.emailLabel}</p>
                  <a
                    href="mailto:info@getbayes.me"
                    className="text-sm font-sans text-foreground-muted hover:text-foreground transition-colors"
                  >
                    info@getbayes.me
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{contact.info.instagramLabel}</p>
                  <a
                    href="https://instagram.com/getbayes.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-foreground-muted hover:text-foreground transition-colors"
                  >
                    @getbayes.me
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify form submission**

With `RESEND_API_KEY` set in `.env.local`, submit the form. Check:
- Loading spinner appears on button
- Success message shows after send
- Email arrives at info@getbayes.me
- Rate limiting works (4th submit within an hour returns 429)

- [ ] **Step 3: Commit**

```bash
git add app/[lang]/components/Contact.tsx
git commit -m "feat: wire contact form to Resend API with loading states"
```

---

### Task 10: Update AGENTS.md

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Rewrite AGENTS.md**

```markdown
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
```

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs: update AGENTS.md with current tech stack and patterns"
```

---

### Task 11: Final Verification

- [ ] **Step 1: Run build**

```bash
pnpm build
```

Should complete with no errors.

- [ ] **Step 2: Visual check**

Run `pnpm dev` and verify:
- Fonts: Source Serif 4 on headings, Plus Jakarta Sans on body, JetBrains Mono on code
- Hero: animated data flow card with pulsing CSV rows, flowing dots, assembling report
- Trust bar: numbers count up from 0 on scroll
- How It Works: pipeline animation with sequential stage highlighting
- Services, FAQ, Testimonials: fade-in + slide-up on scroll
- Contact form: loading state, success/error messages, sends email via Resend
- Mobile: responsive layout, pipeline stacks vertically

- [ ] **Step 3: Commit any fixes if needed**

Plan complete and saved to `docs/superpowers/plans/2026-04-02-animations-fonts-resend.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?