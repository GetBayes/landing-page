import { hasLocale, type Locale } from "../dictionaries";
import { localizedPath } from "../slugs";
import { topicLabels, topicPath } from "../../../content/slugs";
import { allTopics } from "../../../content/registry";
import { notFound } from "next/navigation";
import ScrollReveal from "../components/ScrollReveal";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";

const copy = {
  tr: {
    metaTitle: "Rehberler ve Kaynaklar — İstatistik Analizi | GetBayes",
    metaDescription:
      "İstatistik rehberleri ve hizmet sayfaları tek yerde: test seçimi, örneklem hesaplama, örnek analizler, tez ve makale istatistiği, SPSS analizi, biyoistatistik.",
    headline: "Rehberler ve Kaynaklar",
    intro:
      "Test seçiminden örneklem hesabına, gerçek hayattan örnek analizlere kadar — araştırmanıza yön verecek tüm rehberler ve hizmet sayfalarımız bir arada.",
    guidesHeading: "Rehberler ve Örnekler",
    servicesHeading: "Hizmet Sayfaları",
    aboutHeading: "Bizi Tanıyın",
    backToHome: "Ana Sayfaya Dön",
  },
  en: {
    metaTitle: "Guides & Resources — Statistical Analysis | GetBayes",
    metaDescription:
      "Statistics guides and service pages in one place: test selection, sample size calculation, case examples, thesis and article statistics, SPSS analysis, biostatistics.",
    headline: "Guides & Resources",
    intro:
      "From test selection to sample size calculation to real-world case walkthroughs — all our guides and service pages in one place.",
    guidesHeading: "Guides & Examples",
    servicesHeading: "Service Pages",
    aboutHeading: "Get to Know Us",
    backToHome: "Back to Home",
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
  const c = copy[lang as Locale];

  const canonicalUrl = `${baseUrl}${localizedPath("guides", lang as Locale)}`;
  const ogImageUrl = `${baseUrl}/og-image.png`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${localizedPath("guides", "en")}`,
        tr: `${baseUrl}${localizedPath("guides", "tr")}`,
        "x-default": `${baseUrl}${localizedPath("guides", "tr")}`,
      },
    },
    openGraph: {
      title: `${c.headline} | GetBayes`,
      description: c.metaDescription,
      url: canonicalUrl,
      siteName: "GetBayes",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      alternateLocale: lang === "tr" ? "en_US" : "tr_TR",
      type: "website",
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: c.headline },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.headline} | GetBayes`,
      description: c.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const c = copy[locale];

  const guides = allTopics.filter((t) => t.kind === "guide");
  const services = allTopics.filter((t) => t.kind === "service");
  const about = allTopics.filter((t) => t.kind === "about");
  const groups = [
    { heading: c.guidesHeading, topics: guides },
    { heading: c.servicesHeading, topics: services },
    { heading: c.aboutHeading, topics: about },
  ].filter((group) => group.topics.length > 0);

  const canonicalUrl = `${baseUrl}${localizedPath("guides", locale)}`;

  // Built from our own static registry content — safe to serialize.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.headline,
    description: c.metaDescription,
    url: canonicalUrl,
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allTopics.map((topic, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: topicLabels[topic.key][locale],
        url: `${baseUrl}${topicPath(topic.key, locale)}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "GetBayes", item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: c.headline, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="px-6 py-5">
        <nav aria-label="Guides page navigation">
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-serif font-semibold">GetBayes</span>
            <span className="text-xs font-sans text-foreground-muted">
              &larr; {c.backToHome}
            </span>
          </a>
        </nav>
      </header>

      <main id="main-content" className="flex-1 px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
              {c.headline}
            </h1>
            <p className="text-lg font-sans text-foreground leading-relaxed mb-10">
              {c.intro}
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {groups.map((group) => (
              <ScrollReveal key={group.heading}>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-5">
                    {group.heading}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
                    {group.topics.map((topic) => (
                      <li key={topic.key}>
                        <a
                          href={topicPath(topic.key, locale)}
                          className="block h-full border border-border rounded-lg p-5 hover:bg-background-warm transition-colors"
                        >
                          <h3 className="text-base font-sans font-semibold text-foreground mb-2">
                            {topicLabels[topic.key][locale]}
                          </h3>
                          <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                            {topic.locales[locale].metaDescription}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
