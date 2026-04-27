import type { Metadata } from "next";
import { Source_Serif_4, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import "../globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://getbayes.me";

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

  const canonicalUrl = `${baseUrl}/${lang}`;
  const ogImageUrl = `${baseUrl}/og-image.png`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
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
          alt: "GetBayes - Statistical Analysis for Academic Research",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    keywords:
      lang === "tr"
        ? [
            "istatistik analiz hizmeti",
            "tez istatistik yapan yerler",
            "akademik veri analizi",
            "SPSS analiz yaptırma",
            "örneklem büyüklüğü hesaplama",
            "güç analizi hesaplama",
            "istatistiksel analiz",
            "tez istatistik",
            "akademik araştırma",
            "Ankara istatistik",
          ]
        : [
            "statistical analysis",
            "academic research",
            "data analysis",
            "power analysis",
            "sample size calculation",
            "publication ready results",
            "statistical consulting",
            "research statistics",
            "academic publication",
            "statistical report",
          ],
    authors: [{ name: "GetBayes" }],
    creator: "GetBayes",
    publisher: "GetBayes",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

function buildStructuredData(lang: string, dict: Awaited<ReturnType<typeof getDictionary>>) {
  const isEn = lang === "en";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GetBayes",
    url: baseUrl,
    logo: baseUrl + "/og-image.png",
    description: isEn
      ? "Professional statistical analysis services for academic research. Publication-ready results delivered quickly."
      : "Akademik araştırmalar için profesyonel istatistik analiz hizmeti. Tez istatistik, SPSS analiz, örneklem büyüklüğü hesaplama.",
    email: "info@getbayes.me",
    sameAs: ["https://instagram.com/getbayes.me"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@getbayes.me",
      contactType: "customer service",
      availableLanguage: ["English", "Turkish"],
    },
    areaServed: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GetBayes",
    url: baseUrl,
    inLanguage: isEn ? "en" : "tr",
    description: dict.meta.description,
    publisher: {
      "@type": "Organization",
      name: "GetBayes",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GetBayes",
    description: isEn
      ? "Professional statistical analysis for academic research. From data to publication-ready results in 15 minutes."
      : "Akademik araştırmalar için profesyonel istatistiksel analiz. Tez istatistik yapan yerler — veriden yayına hazır sonuçlara 15 dakikada.",
    url: baseUrl,
    email: "info@getbayes.me",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressCountry: "TR",
    },
    priceRange: "$$",
    image: baseUrl + "/og-image.png",
    sameAs: ["https://instagram.com/getbayes.me"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEn ? "Statistical Analysis" : "İstatistiksel Analiz Hizmeti",
      description: dict.services.featured.description,
      provider: { "@type": "Organization", name: "GetBayes" },
      serviceType: "Statistical Analysis",
      areaServed: "Worldwide",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEn ? "A Priori Power Analysis" : "Güç Analizi Hesaplama ve Örneklem Büyüklüğü Hesaplama",
      description: dict.services.items[0].description,
      provider: { "@type": "Organization", name: "GetBayes" },
      serviceType: "Power Analysis",
      areaServed: "Worldwide",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map(
      (item: { question: string; answer: string }) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })
    ),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl + "/" + lang,
      },
    ],
  };

  return [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    ...serviceSchemas,
    faqSchema,
    breadcrumbSchema,
  ];
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
  const dict = await getDictionary(lang as Locale);

  const structuredData = buildStructuredData(lang, dict);
  // All schema objects are constructed from our own static data and dictionary
  // strings, so there is no untrusted content in this serialization.
  const jsonLdScripts = structuredData.map((schema) => JSON.stringify(schema));

  return (
    <html
      lang={lang}
      className={`${sourceSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {jsonLdScripts.map((scriptContent, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: scriptContent }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:top-2 focus:left-2"
        >
          {lang === "tr" ? "Ana içeriğe atla" : "Skip to main content"}
        </a>
        {children}
      </body>
    </html>
  );
}
