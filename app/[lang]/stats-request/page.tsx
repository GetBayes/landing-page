import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { localizedPath } from "../slugs";
import { notFound } from "next/navigation";
import { FileSearch, BadgeDollarSign, Clock, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import InstagramIcon from "../components/InstagramIcon";
import StatsForm from "./StatsForm";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";
const featureIcons = [FileSearch, BadgeDollarSign, Clock];

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

  const canonicalUrl = `${baseUrl}${localizedPath("stats", lang as Locale)}`;
  const ogImageUrl = `${baseUrl}/og-image.png`;

  return {
    title: dict.stats.meta.title,
    description: dict.stats.meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${localizedPath("stats", "en")}`,
        tr: `${baseUrl}${localizedPath("stats", "tr")}`,
        "x-default": `${baseUrl}${localizedPath("stats", "tr")}`,
      },
    },
    openGraph: {
      title: `${dict.stats.headline} | GetBayes`,
      description: dict.stats.subtext,
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
          alt: "GetBayes - Statistical Analysis Request",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.stats.headline} | GetBayes`,
      description: dict.stats.subtext,
      images: [ogImageUrl],
    },
  };
}

export default async function StatsRequestPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const { stats, contact } = dict;

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
        name: stats.headline,
        item: `${baseUrl}${localizedPath("stats", lang as Locale)}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: stats.headline,
    description: stats.subtext,
    provider: {
      "@type": "Organization",
      name: "GetBayes",
      url: baseUrl,
    },
    serviceType: "Statistical Analysis",
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
        <nav aria-label="Statistics request page navigation">
          <a
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-serif font-semibold">
              {stats.logoText}
            </span>
            <span className="text-xs font-sans text-foreground-muted">
              &larr; {stats.backToHome}
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
                {stats.headline}
              </h1>
              <p className="text-base font-sans text-foreground-muted leading-relaxed">
                {stats.subtext}
              </p>
            </div>
          </ScrollReveal>

          {/* Feature bullets */}
          <ScrollReveal>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 list-none">
              {stats.features.map((text: string, index: number) => {
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
          <StatsForm form={stats.form} />

          {/* Direct contact links */}
          <ScrollReveal>
            <div className="mt-10 text-center">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-4">
                {stats.directContact}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/905016510674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#25D366]/5 border border-[#25D366]/30 rounded-xl hover:border-[#25D366] hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 bg-[#25D366]/15 rounded-lg flex items-center justify-center group-hover:bg-[#25D366]/25 transition-colors">
                    <MessageCircle size={16} className="text-[#25D366]" />
                  </div>
                  <span className="text-sm font-sans font-medium text-foreground">
                    {contact.info.whatsappLabel}
                  </span>
                </a>
                <a
                  href="mailto:info@getbayes.me"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-background border border-border rounded-xl hover:border-accent hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail size={16} className="text-foreground" />
                  </div>
                  <span className="text-sm font-sans font-medium text-foreground">
                    {contact.info.emailLabel}
                  </span>
                </a>
                <a
                  href="https://instagram.com/getbayes.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-background border border-border rounded-xl hover:border-accent hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <InstagramIcon size={16} className="text-foreground" />
                  </div>
                  <span className="text-sm font-sans font-medium text-foreground">
                    {contact.info.instagramLabel}
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
