import { hasLocale, type Locale } from "../dictionaries";
import { localizedPath } from "../slugs";
import { topicSlugs, topicLabels, topicPath } from "../../../content/slugs";
import {
  allTopics,
  findTopicBySlug,
  findTopicByAnySlug,
} from "../../../content/registry";
import type { Section } from "../../../content/types";
import { notFound, permanentRedirect } from "next/navigation";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";

export async function generateStaticParams() {
  return allTopics.flatMap((topic) =>
    (["en", "tr"] as const).map((lang) => ({
      lang,
      topic: topicSlugs[topic.key][lang],
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; topic: string }>;
}): Promise<Metadata> {
  const { lang, topic: slug } = await params;
  if (!hasLocale(lang)) return {};
  const topic = findTopicBySlug(lang as Locale, slug);
  if (!topic) return {};
  const content = topic.locales[lang as Locale];

  const canonicalUrl = `${baseUrl}${topicPath(topic.key, lang as Locale)}`;
  const ogImageUrl = `${baseUrl}/og-image.png`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${topicPath(topic.key, "en")}`,
        tr: `${baseUrl}${topicPath(topic.key, "tr")}`,
        "x-default": `${baseUrl}${topicPath(topic.key, "tr")}`,
      },
    },
    openGraph: {
      title: `${content.headline} | GetBayes`,
      description: content.metaDescription,
      url: canonicalUrl,
      siteName: "GetBayes",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      alternateLocale: lang === "tr" ? "en_US" : "tr_TR",
      type: topic.kind === "guide" ? "article" : "website",
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: content.headline },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.headline} | GetBayes`,
      description: content.metaDescription,
      images: [ogImageUrl],
    },
  };
}

function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case "paragraphs":
      return (
        <div>
          {section.heading && (
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              {section.heading}
            </h2>
          )}
          {section.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-base font-sans text-foreground-muted leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
      );
    case "steps":
      return (
        <div>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="text-base font-sans text-foreground-muted leading-relaxed mb-6">
              {section.intro}
            </p>
          )}
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
            {section.steps.map((step, i) => (
              <li
                key={i}
                className="bg-background-warm border border-border rounded-lg p-5"
              >
                <span className="font-mono text-sm text-foreground-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-sans font-semibold text-foreground mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "bullets":
      return (
        <div>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="text-base font-sans text-foreground-muted leading-relaxed mb-4">
              {section.intro}
            </p>
          )}
          <ul className="space-y-3 list-none">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0"
                  aria-hidden="true"
                />
                <p className="text-base font-sans text-foreground-muted leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="text-base font-sans text-foreground-muted leading-relaxed mb-4">
              {section.intro}
            </p>
          )}
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-background-warm">
                  {section.columns.map((column, i) => (
                    <th
                      key={i}
                      className="text-left font-semibold text-foreground px-4 py-3 border-b border-border"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-foreground-muted align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ lang: string; topic: string }>;
}) {
  const { lang, topic: slug } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  const topic = findTopicBySlug(locale, slug);
  if (!topic) {
    // The other locale's slug reaches here (proxy only rewrites the static
    // route slugs) — 308 to the single canonical URL, mirroring proxy.ts.
    const crossLocale = findTopicByAnySlug(slug);
    if (crossLocale) permanentRedirect(topicPath(crossLocale.key, locale));
    notFound();
  }

  const content = topic.locales[locale];
  const canonicalUrl = `${baseUrl}${topicPath(topic.key, locale)}`;

  // Structured data built from our own static registry content — no
  // user-supplied strings, safe to serialize directly.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "GetBayes", item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: content.headline, item: canonicalUrl },
    ],
  };

  const mainSchema =
    topic.kind === "service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: content.headline,
          description: content.metaDescription,
          url: canonicalUrl,
          serviceType: topic.serviceType,
          provider: { "@type": "Organization", name: "GetBayes", url: baseUrl },
          areaServed: "Worldwide",
          audience: {
            "@type": "Audience",
            audienceType:
              locale === "tr"
                ? "Lisansüstü öğrenciler ve akademik araştırmacılar"
                : "Graduate students and academic researchers",
          },
        }
      : topic.kind === "about"
        ? {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: content.headline,
            description: content.metaDescription,
            url: canonicalUrl,
            inLanguage: locale,
            mainEntity: { "@type": "Organization", name: "GetBayes", url: baseUrl },
          }
        : {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.headline,
            description: content.metaDescription,
            url: canonicalUrl,
            datePublished: topic.datePublished,
            dateModified: topic.dateModified,
            inLanguage: locale,
            author: { "@type": "Organization", name: "GetBayes", url: baseUrl },
            publisher: { "@type": "Organization", name: "GetBayes", url: baseUrl },
            mainEntityOfPage: canonicalUrl,
          };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const backToHome = locale === "tr" ? "Ana Sayfaya Dön" : "Back to Home";
  const lastUpdatedLabel = locale === "tr" ? "Son güncelleme" : "Last updated";
  const lastUpdated = new Date(topic.dateModified).toLocaleDateString(
    locale === "tr" ? "tr-TR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="px-6 py-5">
        <nav aria-label="Topic page navigation">
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-serif font-semibold">GetBayes</span>
            <span className="text-xs font-sans text-foreground-muted">
              &larr; {backToHome}
            </span>
          </a>
        </nav>
      </header>

      <main id="main-content" className="flex-1 px-6 py-10">
        <article className="max-w-3xl mx-auto">
          {/* Answer-first lead */}
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6 text-balance">
              {content.headline}
            </h1>
            {content.lead.map((paragraph, i) => (
              <p
                key={i}
                className={`font-sans leading-relaxed mb-4 ${
                  i === 0
                    ? "text-lg text-foreground"
                    : "text-base text-foreground-muted"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </ScrollReveal>

          {/* Audience */}
          <ScrollReveal>
            <section className="mt-10 bg-background-warm border border-border rounded-lg p-6">
              <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
                {content.audience.heading}
              </h2>
              <ul className="space-y-2 list-none">
                {content.audience.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-base font-sans text-foreground-muted leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* Content sections */}
          <div className="mt-12 space-y-12">
            {content.sections.map((section, i) => (
              <ScrollReveal key={i}>
                <section>
                  <SectionBlock section={section} />
                </section>
              </ScrollReveal>
            ))}
          </div>

          {/* FAQ */}
          <ScrollReveal>
            <section className="mt-12">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                {content.faqHeading}
              </h2>
              <div className="space-y-6">
                {content.faq.map((item, i) => (
                  <div key={i} className="border-b border-border pb-6 last:border-b-0">
                    <h3 className="text-base font-sans font-semibold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-base font-sans text-foreground-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <section className="mt-12 bg-foreground text-accent-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-serif font-semibold mb-3">
                {content.cta.heading}
              </h2>
              <p className="text-base font-sans text-accent-foreground/70 mb-6 max-w-xl mx-auto">
                {content.cta.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={localizedPath("info", locale)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-foreground text-foreground rounded-lg font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {content.cta.button}
                </a>
                <a
                  href="https://wa.me/905016510674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent-foreground/30 rounded-lg font-sans font-semibold text-sm hover:bg-accent-foreground/10 transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {content.cta.whatsapp}
                </a>
              </div>
            </section>
          </ScrollReveal>

          {/* Related pages */}
          <ScrollReveal>
            <nav aria-label={content.relatedHeading} className="mt-12">
              <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
                {content.relatedHeading}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none">
                {topic.related.map((relatedKey) => (
                  <li key={relatedKey}>
                    <a
                      href={topicPath(relatedKey, locale)}
                      className="block border border-border rounded-lg px-4 py-3 text-sm font-sans text-foreground hover:bg-background-warm transition-colors"
                    >
                      {topicLabels[relatedKey][locale]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollReveal>

          <p className="mt-10 text-xs font-sans text-foreground-muted">
            {lastUpdatedLabel}: {lastUpdated}
          </p>
        </article>
      </main>
    </div>
  );
}
