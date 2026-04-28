import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { MessageCircle, Clock, ShieldCheck } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import InfoForm from "./InfoForm";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";
const featureIcons = [MessageCircle, Clock, ShieldCheck];

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

  const canonicalUrl = `${baseUrl}/${lang}/info`;
  const ogImageUrl = `${baseUrl}/og-image.png`;

  return {
    title: `${dict.info.headline} | GetBayes`,
    description: dict.info.subtext,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/info`,
        tr: `${baseUrl}/tr/info`,
        "x-default": `${baseUrl}/en/info`,
      },
    },
    openGraph: {
      title: `${dict.info.headline} | GetBayes`,
      description: dict.info.subtext,
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
          alt: "GetBayes - Research Questions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.info.headline} | GetBayes`,
      description: dict.info.subtext,
      images: [ogImageUrl],
    },
  };
}

export default async function InfoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const { info } = dict;

  // Static structured data from dictionary strings — safe to serialize directly.
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
        name: info.headline,
        item: `${baseUrl}/${lang}/info`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: info.headline,
    description: info.subtext,
    provider: {
      "@type": "Organization",
      name: "GetBayes",
      url: baseUrl,
    },
    serviceType: "Statistical Consulting",
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

      <header className="px-6 py-5">
        <nav aria-label="Info page navigation">
          <a
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-serif font-semibold">
              {info.logoText}
            </span>
            <span className="text-xs font-sans text-foreground-muted">
              &larr; {info.backToHome}
            </span>
          </a>
        </nav>
      </header>

      <main id="main-content" className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                {info.headline}
              </h1>
              <p className="text-base font-sans text-foreground-muted leading-relaxed">
                {info.subtext}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 list-none">
              {info.features.map((text: string, index: number) => {
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

          <InfoForm
            form={info.form}
            researchAreas={info.researchAreas}
          />
        </div>
      </main>
    </div>
  );
}
