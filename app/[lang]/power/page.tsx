import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { Target, TrendingUp, Clock } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import PowerForm from "./PowerForm";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";
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

  const canonicalUrl = `${baseUrl}/${lang}/power`;
  const ogImageUrl = `${baseUrl}/og-image.png`;

  return {
    title: `${dict.power.headline} | GetBayes`,
    description: dict.power.subtext,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/power`,
        tr: `${baseUrl}/tr/power`,
        "x-default": `${baseUrl}/en/power`,
      },
    },
    openGraph: {
      title: `${dict.power.headline} | GetBayes`,
      description: dict.power.subtext,
      url: canonicalUrl,
      siteName: "GetBayes",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      alternateLocale: lang === "tr" ? "en_US" : "tr_TR",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "GetBayes - Power Analysis Service",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.power.headline} | GetBayes`,
      description: dict.power.subtext,
      images: [ogImageUrl],
    },
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

  // Structured data built from our own static strings and dictionary —
  // no user-supplied content, safe to serialize directly.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: power.headline,
        item: `${baseUrl}/${lang}/power`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: power.headline,
    description: power.subtext,
    provider: {
      "@type": "Organization",
      name: "GetBayes",
      url: baseUrl,
    },
    serviceType: "Power Analysis",
    areaServed: "Worldwide",
  };

  const breadcrumbJson = JSON.stringify(breadcrumbSchema);
  const serviceJson = JSON.stringify(serviceSchema);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJson }}
      />

      {/* Top bar with logo */}
      <header className="px-6 py-5">
        <nav aria-label="Power page navigation">
          <a
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-serif font-semibold">
              {power.logoText}
            </span>
            <span className="text-xs font-sans text-foreground-muted">
              &larr; {power.backToHome}
            </span>
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-1 flex items-center justify-center px-6 py-12">
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
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 list-none">
              {power.features.map((text: string, index: number) => {
                const Icon = featureIcons[index];
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-foreground" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-sans text-foreground-muted">
                      {text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>

          {/* Form */}
          <PowerForm form={power.form} />
        </div>
      </main>
    </div>
  );
}
