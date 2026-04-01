# GetBayes Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page scroll landing page for GetBayes with EN/TR internationalization, warm minimal design, and lead generation focus.

**Architecture:** Next.js 16 App Router with `[lang]` dynamic segment for i18n. `proxy.ts` handles browser language detection and redirects. JSON dictionary files provide translations. All sections are server components composed on a single page. Tailwind CSS 4 for styling.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, `@formatjs/intl-localematcher`, `negotiator`, `lucide-react`

**Spec:** `docs/superpowers/specs/2026-04-01-getbayes-landing-page-design.md`

---

### Task 1: Install Dependencies and Configure Project

**Files:**
- Modify: `package.json`
- Modify: `app/globals.css`
- Modify: `next.config.ts`

- [ ] **Step 1: Install required packages**

Run:
```bash
pnpm add @formatjs/intl-localematcher negotiator server-only lucide-react
pnpm add -D @types/negotiator
```

- [ ] **Step 2: Update globals.css with warm minimal theme**

Replace the contents of `app/globals.css` with:

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
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-serif: Georgia, "Times New Roman", serif;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 3: Verify dev server starts**

Run:
```bash
pnpm dev
```
Expected: Dev server starts on http://localhost:3000 without errors.

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml app/globals.css
git commit -m "chore: install dependencies and configure warm minimal theme"
```

---

### Task 2: Set Up i18n Infrastructure

**Files:**
- Create: `proxy.ts`
- Create: `app/[lang]/layout.tsx`
- Create: `app/[lang]/page.tsx`
- Create: `app/[lang]/dictionaries.ts`
- Create: `app/[lang]/dictionaries/en.json`
- Create: `app/[lang]/dictionaries/tr.json`
- Delete: `app/layout.tsx` (moved into `app/[lang]/layout.tsx`)
- Delete: `app/page.tsx` (moved into `app/[lang]/page.tsx`)

- [ ] **Step 1: Create the English dictionary**

Create `app/[lang]/dictionaries/en.json`:

```json
{
  "meta": {
    "title": "GetBayes - Your Academic Research Companion",
    "description": "Professional statistical analysis for academic research. Publication-ready results in 15 minutes."
  },
  "nav": {
    "howItWorks": "How It Works",
    "services": "Services",
    "faq": "FAQ",
    "contact": "Contact"
  },
  "hero": {
    "eyebrow": "Your Academic Research Companion",
    "headline": "Professional Statistical Analysis for Your Research",
    "subtext": "From data to publication-ready results. Comprehensive statistical analysis, tables, charts, and reports — delivered in 15 minutes.",
    "cta": "Get Started",
    "ctaSecondary": "Learn More"
  },
  "heroPreview": {
    "label": "Sample Output",
    "pValue": "p-value: 0.003",
    "effectSize": "Effect size: 0.82",
    "power": "Power: 0.95",
    "status": "Analysis Complete"
  },
  "trustBar": {
    "analyses": "Analyses Completed",
    "analysesCount": "500+",
    "delivery": "Average Delivery",
    "deliveryTime": "15 min",
    "satisfaction": "Satisfaction Rate",
    "satisfactionRate": "98%"
  },
  "howItWorks": {
    "eyebrow": "How It Works",
    "headline": "From Data to Publication",
    "steps": [
      {
        "title": "Upload Your Data",
        "description": "Share your research papers, datasets, and any relevant documents with us."
      },
      {
        "title": "Triage & Review",
        "description": "We identify gaps, issues, and determine the best statistical approach for your research."
      },
      {
        "title": "Full Analysis",
        "description": "Complete statistical analysis with tables, charts, and detailed interpretations."
      },
      {
        "title": "Publication-Ready Report",
        "description": "Receive a polished, academic report ready for your publication."
      }
    ]
  },
  "services": {
    "eyebrow": "Our Services",
    "headline": "Everything Your Research Needs",
    "featured": {
      "title": "Statistical Analysis",
      "description": "Complete analysis pipeline: triage to identify issues, full statistical analysis, and publication-ready reports with tables and charts."
    },
    "items": [
      {
        "title": "A Priori Power Analysis",
        "description": "Determine optimal sample sizes before you begin data collection."
      },
      {
        "title": "QA Agent",
        "description": "Ask anything about your results, methods, and statistical process. Get instant, knowledgeable answers."
      },
      {
        "title": "ResearchMate",
        "description": "Guided research planning — methods, surveys, data collection formats.",
        "badge": "Coming Soon"
      }
    ]
  },
  "faq": {
    "eyebrow": "Frequently Asked Questions",
    "headline": "Got Questions?",
    "items": [
      {
        "question": "What data formats do you accept?",
        "answer": "We accept all common data formats including SPSS (.sav), Excel (.xlsx, .csv), Stata (.dta), R datasets, and raw text files. Simply upload your files and we'll handle the rest."
      },
      {
        "question": "How long does the analysis take?",
        "answer": "Most analyses are completed within 15 minutes. Complex datasets or specialized analyses may take slightly longer, but we always aim for the fastest turnaround possible."
      },
      {
        "question": "What's included in the statistical report?",
        "answer": "Your report includes descriptive statistics, inferential analyses, publication-quality tables and charts, effect sizes, confidence intervals, and detailed interpretations — all formatted and ready for academic publication."
      },
      {
        "question": "How does the QA Agent work?",
        "answer": "After your analysis is complete, you get access to a knowledgeable assistant that understands your specific research, data, and results. Ask any question about your statistical methods, interpretations, or next steps."
      },
      {
        "question": "Do you support different statistical methods?",
        "answer": "Yes. We support a wide range of methods including t-tests, ANOVA, regression analysis, chi-square tests, correlation analyses, factor analysis, and many more. The appropriate method is selected based on your research design and data."
      },
      {
        "question": "What languages do you support?",
        "answer": "Our platform and reports are available in English and Turkish. We're working on adding more languages in the future."
      },
      {
        "question": "How do I get started?",
        "answer": "Simply fill out the contact form below or reach out to us via email or Instagram. We'll guide you through the process and get your analysis started right away."
      }
    ]
  },
  "testimonials": {
    "eyebrow": "Trusted by Researchers",
    "headline": "What Researchers Say",
    "placeholder": "Testimonials coming soon"
  },
  "contact": {
    "eyebrow": "Get In Touch",
    "headline": "Ready to Accelerate Your Research?",
    "subtext": "We'd love to hear about your research.",
    "form": {
      "name": "Name",
      "email": "Email",
      "subject": "Subject",
      "message": "Message",
      "submit": "Send Message",
      "success": "Message sent! We'll get back to you soon.",
      "namePlaceholder": "Your name",
      "emailPlaceholder": "your@email.com",
      "subjectPlaceholder": "How can we help?",
      "messagePlaceholder": "Tell us about your research..."
    },
    "info": {
      "emailLabel": "Email",
      "instagramLabel": "Instagram"
    }
  },
  "footer": {
    "tagline": "Your Academic Research Companion",
    "copyright": "© 2026 GetBayes. All rights reserved.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service"
  }
}
```

- [ ] **Step 2: Create the Turkish dictionary**

Create `app/[lang]/dictionaries/tr.json`:

```json
{
  "meta": {
    "title": "GetBayes - Akademik Araştırma Yol Arkadaşınız",
    "description": "Akademik araştırmalar için profesyonel istatistiksel analiz. 15 dakikada yayına hazır sonuçlar."
  },
  "nav": {
    "howItWorks": "Nasıl Çalışır",
    "services": "Hizmetler",
    "faq": "SSS",
    "contact": "İletişim"
  },
  "hero": {
    "eyebrow": "Akademik Araştırma Yol Arkadaşınız",
    "headline": "Araştırmanız İçin Profesyonel İstatistiksel Analiz",
    "subtext": "Veriden yayına hazır sonuçlara. Kapsamlı istatistiksel analiz, tablolar, grafikler ve raporlar — 15 dakikada teslim.",
    "cta": "Hemen Başla",
    "ctaSecondary": "Daha Fazla Öğren"
  },
  "heroPreview": {
    "label": "Örnek Çıktı",
    "pValue": "p-değeri: 0.003",
    "effectSize": "Etki büyüklüğü: 0.82",
    "power": "Güç: 0.95",
    "status": "Analiz Tamamlandı"
  },
  "trustBar": {
    "analyses": "Tamamlanan Analiz",
    "analysesCount": "500+",
    "delivery": "Ortalama Teslimat",
    "deliveryTime": "15 dk",
    "satisfaction": "Memnuniyet Oranı",
    "satisfactionRate": "%98"
  },
  "howItWorks": {
    "eyebrow": "Nasıl Çalışır",
    "headline": "Veriden Yayına",
    "steps": [
      {
        "title": "Verilerinizi Yükleyin",
        "description": "Araştırma makalelerinizi, veri setlerinizi ve ilgili belgelerinizi bizimle paylaşın."
      },
      {
        "title": "Triyaj ve İnceleme",
        "description": "Eksiklikleri, sorunları tespit eder ve araştırmanız için en uygun istatistiksel yaklaşımı belirleriz."
      },
      {
        "title": "Kapsamlı Analiz",
        "description": "Tablolar, grafikler ve detaylı yorumlarla eksiksiz istatistiksel analiz."
      },
      {
        "title": "Yayına Hazır Rapor",
        "description": "Yayınınız için hazır, akademik standartta düzenlenmiş bir rapor alın."
      }
    ]
  },
  "services": {
    "eyebrow": "Hizmetlerimiz",
    "headline": "Araştırmanızın İhtiyacı Olan Her Şey",
    "featured": {
      "title": "İstatistiksel Analiz",
      "description": "Eksiksiz analiz süreci: sorunları tespit eden triyaj, kapsamlı istatistiksel analiz ve tablolar ile grafikler içeren yayına hazır raporlar."
    },
    "items": [
      {
        "title": "A Priori Güç Analizi",
        "description": "Veri toplamaya başlamadan önce optimal örneklem büyüklüğünü belirleyin."
      },
      {
        "title": "Soru-Cevap Asistanı",
        "description": "Sonuçlarınız, yöntemleriniz ve istatistiksel süreciniz hakkında her şeyi sorun. Anında, bilgili yanıtlar alın."
      },
      {
        "title": "ResearchMate",
        "description": "Araştırma planlaması rehberliği — yöntemler, anketler, veri toplama formatları.",
        "badge": "Yakında"
      }
    ]
  },
  "faq": {
    "eyebrow": "Sıkça Sorulan Sorular",
    "headline": "Sorularınız mı Var?",
    "items": [
      {
        "question": "Hangi veri formatlarını kabul ediyorsunuz?",
        "answer": "SPSS (.sav), Excel (.xlsx, .csv), Stata (.dta), R veri setleri ve ham metin dosyaları dahil tüm yaygın veri formatlarını kabul ediyoruz. Dosyalarınızı yükleyin, gerisini biz halledelim."
      },
      {
        "question": "Analiz ne kadar sürer?",
        "answer": "Çoğu analiz 15 dakika içinde tamamlanır. Karmaşık veri setleri veya özel analizler biraz daha uzun sürebilir, ancak her zaman en hızlı teslim süresini hedefliyoruz."
      },
      {
        "question": "İstatistiksel raporda neler yer alır?",
        "answer": "Raporunuz tanımlayıcı istatistikler, çıkarımsal analizler, yayın kalitesinde tablolar ve grafikler, etki büyüklükleri, güven aralıkları ve detaylı yorumlar içerir — hepsi akademik yayın için formatlanmış ve hazır."
      },
      {
        "question": "Soru-Cevap Asistanı nasıl çalışır?",
        "answer": "Analiziniz tamamlandıktan sonra, araştırmanızı, verilerinizi ve sonuçlarınızı anlayan bilgili bir asistana erişim kazanırsınız. İstatistiksel yöntemler, yorumlar veya sonraki adımlar hakkında istediğiniz soruyu sorabilirsiniz."
      },
      {
        "question": "Farklı istatistiksel yöntemleri destekliyor musunuz?",
        "answer": "Evet. t-testi, ANOVA, regresyon analizi, ki-kare testi, korelasyon analizi, faktör analizi ve daha birçok yöntemi destekliyoruz. Uygun yöntem, araştırma tasarımınıza ve verilerinize göre seçilir."
      },
      {
        "question": "Hangi dilleri destekliyorsunuz?",
        "answer": "Platformumuz ve raporlarımız Türkçe ve İngilizce olarak mevcuttur. Gelecekte daha fazla dil eklemeye çalışıyoruz."
      },
      {
        "question": "Nasıl başlarım?",
        "answer": "Aşağıdaki iletişim formunu doldurun veya e-posta ya da Instagram üzerinden bize ulaşın. Süreci sizinle birlikte yürüteceğiz ve analizinize hemen başlayacağız."
      }
    ]
  },
  "testimonials": {
    "eyebrow": "Araştırmacıların Güveni",
    "headline": "Araştırmacılar Ne Diyor",
    "placeholder": "Referanslar yakında eklenecek"
  },
  "contact": {
    "eyebrow": "Bize Ulaşın",
    "headline": "Araştırmanızı Hızlandırmaya Hazır mısınız?",
    "subtext": "Araştırmanız hakkında bilgi almak isteriz.",
    "form": {
      "name": "İsim",
      "email": "E-posta",
      "subject": "Konu",
      "message": "Mesaj",
      "submit": "Mesaj Gönder",
      "success": "Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.",
      "namePlaceholder": "Adınız",
      "emailPlaceholder": "email@adresiniz.com",
      "subjectPlaceholder": "Size nasıl yardımcı olabiliriz?",
      "messagePlaceholder": "Araştırmanız hakkında bilgi verin..."
    },
    "info": {
      "emailLabel": "E-posta",
      "instagramLabel": "Instagram"
    }
  },
  "footer": {
    "tagline": "Akademik Araştırma Yol Arkadaşınız",
    "copyright": "© 2026 GetBayes. Tüm hakları saklıdır.",
    "privacy": "Gizlilik Politikası",
    "terms": "Kullanım Koşulları"
  }
}
```

- [ ] **Step 3: Create the dictionaries helper**

Create `app/[lang]/dictionaries.ts`:

```ts
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const locales: Locale[] = ["en", "tr"];
export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
```

- [ ] **Step 4: Create the i18n proxy**

Create `proxy.ts` in the project root:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "tr"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
```

- [ ] **Step 5: Create the root layout under [lang]**

Create `app/[lang]/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Create the placeholder page**

Create `app/[lang]/page.tsx`:

```tsx
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-serif font-semibold text-foreground">
        {dict.hero.headline}
      </h1>
      <p className="mt-4 text-foreground-muted">{dict.hero.subtext}</p>
    </main>
  );
}
```

- [ ] **Step 7: Delete old layout and page files**

```bash
rm app/layout.tsx app/page.tsx
```

- [ ] **Step 8: Verify i18n routing works**

Run:
```bash
pnpm dev
```

Test:
- Visit `http://localhost:3000` → should redirect to `/en`
- Visit `http://localhost:3000/en` → shows English content
- Visit `http://localhost:3000/tr` → shows Turkish content

- [ ] **Step 9: Commit**

```bash
git add proxy.ts app/
git commit -m "feat: set up i18n with EN/TR dictionaries and proxy routing"
```

---

### Task 3: Build Navbar Component

**Files:**
- Create: `app/[lang]/components/Navbar.tsx`
- Create: `app/[lang]/components/LanguageToggle.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the LanguageToggle component**

Create `app/[lang]/components/LanguageToggle.tsx`:

```tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "../dictionaries";

export default function LanguageToggle({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 text-sm font-sans">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "en"
            ? "text-foreground font-semibold"
            : "text-foreground-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-border-dark">|</span>
      <button
        onClick={() => switchLocale("tr")}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "tr"
            ? "text-foreground font-semibold"
            : "text-foreground-muted hover:text-foreground"
        }`}
      >
        TR
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Create the Navbar component**

Create `app/[lang]/components/Navbar.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import type { Locale } from "../dictionaries";

type NavbarProps = {
  lang: Locale;
  nav: {
    howItWorks: string;
    services: string;
    faq: string;
    contact: string;
  };
};

const navLinks = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "services", href: "#services" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar({ lang, nav }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${lang}`} className="text-xl font-bold font-sans tracking-tight">
          GetBayes
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-sans text-foreground-muted hover:text-foreground transition-colors"
            >
              {nav[link.key]}
            </a>
          ))}
          <LanguageToggle currentLang={lang} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-sans text-foreground-muted hover:text-foreground transition-colors"
              >
                {nav[link.key]}
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <LanguageToggle currentLang={lang} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Add Navbar to the page**

Update `app/[lang]/page.tsx`:

```tsx
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang as Locale} nav={dict.nav} />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-serif font-semibold text-foreground">
          {dict.hero.headline}
        </h1>
      </main>
    </>
  );
}
```

- [ ] **Step 4: Verify navbar renders and language toggle works**

Run `pnpm dev`, visit `/en` and `/tr`. Verify:
- Logo shows "GetBayes"
- Nav links display in correct language
- EN/TR toggle switches languages
- Hamburger menu works on mobile viewport

- [ ] **Step 5: Commit**

```bash
git add app/[lang]/components/ app/[lang]/page.tsx
git commit -m "feat: add Navbar with language toggle and mobile menu"
```

---

### Task 4: Build Hero Section

**Files:**
- Create: `app/[lang]/components/Hero.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the Hero component**

Create `app/[lang]/components/Hero.tsx`:

```tsx
import type { Dictionary } from "../dictionaries";
import { CheckCircle } from "lucide-react";

type HeroProps = {
  hero: Dictionary["hero"];
  heroPreview: Dictionary["heroPreview"];
  trustBar: Dictionary["trustBar"];
};

export default function Hero({ hero, heroPreview, trustBar }: HeroProps) {
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

        {/* Right column - preview card */}
        <div className="flex-shrink-0 w-full md:w-[380px]">
          <div className="bg-background-warm border border-border rounded-xl p-6 shadow-sm">
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-foreground-muted mb-4">
              {heroPreview.label}
            </p>
            <div className="space-y-3 font-mono text-sm text-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>{heroPreview.pValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>{heroPreview.effectSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>{heroPreview.power}</span>
              </div>
            </div>
            {/* Mini bar chart representation */}
            <div className="mt-5 flex items-end gap-2 h-16">
              <div className="w-8 bg-foreground/20 rounded-t" style={{ height: "40%" }} />
              <div className="w-8 bg-foreground/30 rounded-t" style={{ height: "65%" }} />
              <div className="w-8 bg-foreground/50 rounded-t" style={{ height: "85%" }} />
              <div className="w-8 bg-foreground/40 rounded-t" style={{ height: "55%" }} />
              <div className="w-8 bg-foreground/60 rounded-t" style={{ height: "100%" }} />
              <div className="w-8 bg-foreground/35 rounded-t" style={{ height: "70%" }} />
            </div>
            <p className="mt-3 text-xs font-sans text-foreground-muted text-center">
              {heroPreview.status}
            </p>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">{trustBar.analysesCount}</p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.analyses}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border-dark" />
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">{trustBar.deliveryTime}</p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.delivery}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border-dark" />
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">{trustBar.satisfactionRate}</p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.satisfaction}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to page**

Update `app/[lang]/page.tsx` — add import and render Hero below Navbar:

```tsx
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang as Locale} nav={dict.nav} />
      <main>
        <Hero
          hero={dict.hero}
          heroPreview={dict.heroPreview}
          trustBar={dict.trustBar}
        />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify hero renders correctly**

Run `pnpm dev`, check both `/en` and `/tr`. Verify split layout, preview card, trust bar, and CTAs.

- [ ] **Step 4: Commit**

```bash
git add app/[lang]/components/Hero.tsx app/[lang]/page.tsx
git commit -m "feat: add Hero section with split layout and trust bar"
```

---

### Task 5: Build How It Works Section

**Files:**
- Create: `app/[lang]/components/HowItWorks.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the HowItWorks component**

Create `app/[lang]/components/HowItWorks.tsx`:

```tsx
import type { Dictionary } from "../dictionaries";

type HowItWorksProps = {
  howItWorks: Dictionary["howItWorks"];
};

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {howItWorks.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {howItWorks.headline}
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-xl mx-auto pl-12">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-border-dark" />

          {howItWorks.steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Number circle */}
              <div className="absolute -left-12 w-9 h-9 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-sans text-sm font-semibold">
                {index + 1}
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base font-sans text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add HowItWorks to page**

In `app/[lang]/page.tsx`, add import and render after Hero:

```tsx
import HowItWorks from "./components/HowItWorks";
```

Add inside `<main>` after `<Hero />`:

```tsx
<HowItWorks howItWorks={dict.howItWorks} />
```

- [ ] **Step 3: Verify and commit**

Run `pnpm dev`, check the timeline renders with 4 steps on both `/en` and `/tr`.

```bash
git add app/[lang]/components/HowItWorks.tsx app/[lang]/page.tsx
git commit -m "feat: add How It Works section with vertical timeline"
```

---

### Task 6: Build Services Section

**Files:**
- Create: `app/[lang]/components/Services.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the Services component**

Create `app/[lang]/components/Services.tsx`:

```tsx
import type { Dictionary } from "../dictionaries";
import { BarChart3, MessageCircle, Compass, FlaskConical } from "lucide-react";

type ServicesProps = {
  services: Dictionary["services"];
};

const supportIcons = [BarChart3, MessageCircle, Compass];

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {services.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {services.headline}
          </h2>
        </div>

        {/* Featured card */}
        <div className="bg-background border border-border rounded-xl p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FlaskConical size={24} className="text-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {services.featured.title}
              </h3>
              <p className="text-base font-sans text-foreground-muted leading-relaxed">
                {services.featured.description}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.items.map((item, index) => {
            const Icon = supportIcons[index];
            const isComingSoon = "badge" in item && item.badge;

            return (
              <div
                key={index}
                className={`bg-background border border-border rounded-xl p-6 text-center ${
                  isComingSoon ? "opacity-60" : ""
                }`}
              >
                {isComingSoon && (
                  <div className="flex justify-end mb-2">
                    <span className="text-[10px] font-sans font-medium bg-accent text-accent-foreground px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                )}
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-foreground" />
                </div>
                <h3 className="text-base font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Services to page**

In `app/[lang]/page.tsx`, add import and render after HowItWorks:

```tsx
import Services from "./components/Services";
```

Add inside `<main>`:

```tsx
<Services services={dict.services} />
```

- [ ] **Step 3: Verify and commit**

Check featured card, 3 supporting cards, "Coming Soon" badge on ResearchMate.

```bash
git add app/[lang]/components/Services.tsx app/[lang]/page.tsx
git commit -m "feat: add Services section with featured and supporting cards"
```

---

### Task 7: Build FAQ Section

**Files:**
- Create: `app/[lang]/components/FAQ.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the FAQ component**

Create `app/[lang]/components/FAQ.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Dictionary } from "../dictionaries";

type FAQProps = {
  faq: Dictionary["faq"];
};

export default function FAQ({ faq }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {faq.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {faq.headline}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-background-warm/50 transition-colors"
                >
                  <span className="text-base font-sans font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="text-foreground-muted flex-shrink-0" />
                  ) : (
                    <Plus size={18} className="text-foreground-muted flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add FAQ to page**

In `app/[lang]/page.tsx`, add import and render after Services:

```tsx
import FAQ from "./components/FAQ";
```

```tsx
<FAQ faq={dict.faq} />
```

- [ ] **Step 3: Verify and commit**

Check accordion expand/collapse, all 7 questions render.

```bash
git add app/[lang]/components/FAQ.tsx app/[lang]/page.tsx
git commit -m "feat: add FAQ section with accordion"
```

---

### Task 8: Build Testimonials Section

**Files:**
- Create: `app/[lang]/components/Testimonials.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the Testimonials component**

Create `app/[lang]/components/Testimonials.tsx`:

```tsx
import type { Dictionary } from "../dictionaries";
import { Quote } from "lucide-react";

type TestimonialsProps = {
  testimonials: Dictionary["testimonials"];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {testimonials.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {testimonials.headline}
          </h2>
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-8 flex flex-col items-center text-center"
            >
              <Quote size={32} className="text-border-dark mb-6" />
              <p className="text-sm font-sans text-foreground-muted italic mb-6">
                {testimonials.placeholder}
              </p>
              <div className="mt-auto">
                <div className="w-10 h-10 bg-border rounded-full mx-auto mb-3" />
                <div className="w-24 h-3 bg-border rounded mx-auto mb-2" />
                <div className="w-32 h-2 bg-border/60 rounded mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Testimonials to page**

In `app/[lang]/page.tsx`, add import and render after FAQ:

```tsx
import Testimonials from "./components/Testimonials";
```

```tsx
<Testimonials testimonials={dict.testimonials} />
```

- [ ] **Step 3: Verify and commit**

```bash
git add app/[lang]/components/Testimonials.tsx app/[lang]/page.tsx
git commit -m "feat: add Testimonials section with placeholder cards"
```

---

### Task 9: Build Contact Section

**Files:**
- Create: `app/[lang]/components/Contact.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the Contact component**

Create `app/[lang]/components/Contact.tsx`:

```tsx
"use client";

import type { Dictionary } from "../dictionaries";
import { Mail, Instagram } from "lucide-react";

type ContactProps = {
  contact: Dictionary["contact"];
};

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Form submission will be wired to a backend later
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                {contact.form.name}
              </label>
              <input
                type="text"
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
                placeholder={contact.form.subjectPlaceholder}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                {contact.form.message}
              </label>
              <textarea
                required
                rows={5}
                placeholder={contact.form.messagePlaceholder}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {contact.form.submit}
            </button>
          </form>

          {/* Contact info */}
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
                <Instagram size={22} className="text-foreground" />
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
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Contact to page**

In `app/[lang]/page.tsx`, add import and render after Testimonials:

```tsx
import Contact from "./components/Contact";
```

```tsx
<Contact contact={dict.contact} />
```

- [ ] **Step 3: Verify and commit**

Check form renders, fields have correct labels/placeholders in both languages, email and Instagram links work.

```bash
git add app/[lang]/components/Contact.tsx app/[lang]/page.tsx
git commit -m "feat: add Contact section with form and contact info"
```

---

### Task 10: Build Footer

**Files:**
- Create: `app/[lang]/components/Footer.tsx`
- Modify: `app/[lang]/page.tsx`

- [ ] **Step 1: Create the Footer component**

Create `app/[lang]/components/Footer.tsx`:

```tsx
import type { Dictionary, Locale } from "../dictionaries";
import { Instagram, Mail } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

type FooterProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
};

export default function Footer({ lang, nav, footer }: FooterProps) {
  return (
    <footer className="bg-foreground text-accent-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold font-sans tracking-tight mb-2">GetBayes</p>
            <p className="text-sm font-sans text-accent-foreground/60">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <a href="#how-it-works" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.howItWorks}
            </a>
            <a href="#services" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.services}
            </a>
            <a href="#faq" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.faq}
            </a>
            <a href="#contact" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.contact}
            </a>
          </div>

          {/* Social + language */}
          <div className="flex flex-col gap-3">
            <a
              href="https://instagram.com/getbayes.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors"
            >
              <Instagram size={16} />
              @getbayes.me
            </a>
            <a
              href="mailto:info@getbayes.me"
              className="flex items-center gap-2 text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors"
            >
              <Mail size={16} />
              info@getbayes.me
            </a>
            <div className="mt-2">
              <LanguageToggle currentLang={lang} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-sans text-accent-foreground/40">
            {footer.copyright}
          </p>
          <div className="flex gap-4">
            <span className="text-xs font-sans text-accent-foreground/40 cursor-default">
              {footer.privacy}
            </span>
            <span className="text-xs font-sans text-accent-foreground/40 cursor-default">
              {footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to page**

In `app/[lang]/page.tsx`, add import and render after `</main>`:

```tsx
import Footer from "./components/Footer";
```

Add after the closing `</main>` tag:

```tsx
<Footer lang={lang as Locale} nav={dict.nav} footer={dict.footer} />
```

- [ ] **Step 3: Verify and commit**

Check footer renders with 3 columns, copyright, links, language toggle.

```bash
git add app/[lang]/components/Footer.tsx app/[lang]/page.tsx
git commit -m "feat: add Footer with nav links, socials, and copyright"
```

---

### Task 11: Final Page Assembly and Polish

**Files:**
- Modify: `app/[lang]/page.tsx` (final version)
- Create: `.gitignore` entry for `.superpowers/`

- [ ] **Step 1: Write the final page.tsx**

Ensure `app/[lang]/page.tsx` has all sections in the correct order:

```tsx
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang as Locale} nav={dict.nav} />
      <main>
        <Hero
          hero={dict.hero}
          heroPreview={dict.heroPreview}
          trustBar={dict.trustBar}
        />
        <HowItWorks howItWorks={dict.howItWorks} />
        <Services services={dict.services} />
        <FAQ faq={dict.faq} />
        <Testimonials testimonials={dict.testimonials} />
        <Contact contact={dict.contact} />
      </main>
      <Footer lang={lang as Locale} nav={dict.nav} footer={dict.footer} />
    </>
  );
}
```

- [ ] **Step 2: Add .superpowers to .gitignore**

Append to `.gitignore`:

```
.superpowers/
```

- [ ] **Step 3: Full verification**

Run `pnpm dev` and verify:
- `/en` — all sections render in English, smooth scroll anchors work, language toggle switches to `/tr`
- `/tr` — all sections render in Turkish, smooth scroll anchors work, language toggle switches to `/en`
- `/` — redirects to `/en` (or `/tr` if browser is Turkish)
- Mobile viewport — hamburger menu, stacked layouts, responsive grid
- FAQ accordion — opens/closes correctly

- [ ] **Step 4: Run build**

```bash
pnpm build
```

Expected: Build completes without errors. Both `/en` and `/tr` routes are generated.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: complete GetBayes landing page with all sections and i18n"
```
