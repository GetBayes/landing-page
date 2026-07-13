import { hasLocale, type Locale } from "../dictionaries";
import { localizedPath } from "../slugs";
import { notFound } from "next/navigation";
import PowerCalculator from "./PowerCalculator";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";

const META = {
  tr: {
    title:
      "Power Analizi Hesaplayıcı — Örneklem Büyüklüğü Hesaplama (Ücretsiz) | GetBayes",
    description:
      "Ücretsiz power analizi (güç analizi) hesaplayıcı: örneklem büyüklüğü hesaplama ve istatistiksel güç. t-testi, ANOVA, ki-kare, korelasyon, regresyon; anlık sonuç, duyarlılık analizi ve indirilebilir grafik.",
    keywords: [
      "power analizi",
      "power analizi hesaplayıcı",
      "power analizi yapma",
      "power analizi nasıl yapılır",
      "güç analizi",
      "örneklem büyüklüğü hesaplama",
      "örneklem büyüklüğü hesaplayıcı",
      "istatistiksel güç",
      "örneklem hesaplama",
      "sample size calculator",
    ],
    headline: "Power Analizi Hesaplayıcı",
    subtext:
      "Örneklem büyüklüğünü ve istatistiksel gücü kendiniz anında hesaplayın. Testinizi seçin, değerleri girin — duyarlılık analizi ve indirilebilir grafiklerle sonucu görün.",
    backToPower: "Analizi bize mi bıraksanız?",
    content: [
      {
        h2: "Power analizi nedir?",
        body: "Power (güç) analizi, bir çalışmanın gerçek bir etkiyi saptayabilme olasılığını (istatistiksel gücü) ve bunun için gereken örneklem büyüklüğünü belirleme yöntemidir. Çoğu tez ve etik kurul başvurusu, çalışmadan önce yapılan (a priori) bir power analizi ve gerekçeli örneklem büyüklüğü ister.",
      },
      {
        h2: "Power analizi nasıl yapılır?",
        body: "Power analizi yapmak için testinizi (iki grup t-testi, ANOVA, ki-kare, korelasyon, regresyon vb.), beklenen etki büyüklüğünü, anlamlılık düzeyini (α) ve hedef gücü (genelde %80) belirlersiniz. Bu hesaplayıcı bunları girdiğinizde gereken örneklem büyüklüğünü — ya da mevcut örneklemle ulaşacağınız gücü — anında verir.",
      },
      {
        h2: "Örneklem büyüklüğü nasıl hesaplanır?",
        body: "Örneklem büyüklüğü hesaplama, etki büyüklüğü, α ve istenen güce dayanır: etki küçüldükçe veya güç arttıkça gereken örneklem büyür. Aşağıdaki duyarlılık tablosu, etki büyüklüğünden emin olmadığınızda komşu senaryolar için gereken örneklemi de gösterir.",
      },
    ],
    faq: [
      {
        q: "Power analizi hesaplayıcı ücretsiz mi?",
        a: "Evet, bu power analizi ve örneklem büyüklüğü hesaplayıcı tamamen ücretsizdir ve tarayıcınızda anında çalışır.",
      },
      {
        q: "Hangi testler için power analizi yapabilirim?",
        a: "İki bağımsız/eşleştirilmiş grup ortalaması, tek örneklem, iki/tek oran, korelasyon, tek yönlü ANOVA, ki-kare ve çoklu regresyon için power ve örneklem büyüklüğü hesaplayabilirsiniz.",
      },
      {
        q: "Etki büyüklüğümü bilmiyorsam ne yapmalıyım?",
        a: "Küçük/orta/büyük hazır değerlerini kullanabilir veya duyarlılık tablosundan farklı varsayımlar için gereken örneklemi karşılaştırabilirsiniz. Emin değilseniz gerekçeli raporu sizin için biz hazırlarız.",
      },
    ],
    faqTitle: "Sıkça sorulan sorular",
  },
  en: {
    title: "Power Analysis Calculator — Free Sample Size Calculator | GetBayes",
    description:
      "Free power analysis calculator: sample size and statistical power. t-test, ANOVA, chi-square, correlation and regression; instant results, sensitivity analysis and downloadable charts.",
    keywords: [
      "power analysis",
      "power analysis calculator",
      "how to do power analysis",
      "sample size calculator",
      "sample size calculation",
      "statistical power",
      "a priori power analysis",
    ],
    headline: "Power Analysis Calculator",
    subtext:
      "Compute sample size and statistical power yourself, instantly. Pick your test, enter the values — see the result with a full sensitivity analysis and downloadable charts.",
    backToPower: "Rather leave the analysis to us?",
    content: [
      {
        h2: "What is power analysis?",
        body: "Power analysis determines a study's probability of detecting a real effect (its statistical power) and the sample size needed to achieve it. Most theses and ethics-board applications require an a priori power analysis and a justified sample size before data collection.",
      },
      {
        h2: "How do you do a power analysis?",
        body: "To do a power analysis you choose your test (two-sample t-test, ANOVA, chi-square, correlation, regression, etc.), the expected effect size, the significance level (α) and the target power (usually 80%). Enter these and the calculator returns the required sample size — or the power your current sample delivers — instantly.",
      },
      {
        h2: "How is sample size calculated?",
        body: "Sample size calculation depends on effect size, α and desired power: the smaller the effect or the higher the power, the larger the sample. The sensitivity table below also shows the sample needed for neighbouring scenarios when you're unsure of the effect size.",
      },
    ],
    faq: [
      {
        q: "Is the power analysis calculator free?",
        a: "Yes, this power analysis and sample size calculator is completely free and runs instantly in your browser.",
      },
      {
        q: "Which tests can I run a power analysis for?",
        a: "You can compute power and sample size for two independent/paired means, one sample, two/one proportions, correlation, one-way ANOVA, chi-square and multiple regression.",
      },
      {
        q: "What if I don't know my effect size?",
        a: "Use the small/medium/large presets, or compare the sample needed under different assumptions in the sensitivity table. If you're unsure, we prepare the justified report for you.",
      },
    ],
    faqTitle: "Frequently asked questions",
  },
} as const;

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
  const m = META[lang as Locale];
  const canonicalUrl = `${baseUrl}${localizedPath("powerCalculator", lang as Locale)}`;

  return {
    title: m.title,
    description: m.description,
    keywords: [...m.keywords],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${localizedPath("powerCalculator", "en")}`,
        tr: `${baseUrl}${localizedPath("powerCalculator", "tr")}`,
        "x-default": `${baseUrl}${localizedPath("powerCalculator", "tr")}`,
      },
    },
    openGraph: {
      title: `${m.headline} | GetBayes`,
      description: m.subtext,
      url: canonicalUrl,
      siteName: "GetBayes",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${m.headline} | GetBayes`,
      description: m.subtext,
    },
  };
}

export default async function PowerCalculatorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const m = META[locale];
  const powerHref = localizedPath("power", locale);
  const canonical = `${baseUrl}${localizedPath("powerCalculator", locale)}`;

  // Structured data — static strings only.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: m.headline, item: canonical },
    ],
  };
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: m.headline,
    description: m.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    url: canonical,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "GetBayes", url: baseUrl },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: m.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="px-6 py-5">
        <nav aria-label="Power calculator navigation" className="flex items-center justify-between">
          <a href={`/${locale}`} className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
            <span className="text-lg font-serif font-semibold">GetBayes</span>
          </a>
          <a href={powerHref} className="text-xs font-sans text-foreground-muted hover:text-foreground transition-colors">
            {m.backToPower} &rarr;
          </a>
        </nav>
      </header>

      <main id="main-content" className="flex-1 px-6 py-10">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              {m.headline}
            </h1>
            <p className="text-base font-sans text-foreground-muted leading-relaxed max-w-xl mx-auto">
              {m.subtext}
            </p>
          </div>

          <PowerCalculator lang={locale} powerHref={powerHref} />

          {/* SEO content */}
          <section className="mt-16 space-y-8">
            {m.content.map((s) => (
              <div key={s.h2}>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {s.h2}
                </h2>
                <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
              {m.faqTitle}
            </h2>
            <div className="space-y-4">
              {m.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="text-sm font-sans font-semibold text-foreground mb-1">
                    {f.q}
                  </h3>
                  <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
