import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SpeedQuality from "./components/SpeedQuality";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const baseUrl = "https://getbayes.me";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  // Homepage-level schemas (moved out of the layout so sub-pages can emit
  // their own FAQPage/BreadcrumbList without duplicates). Built from our own
  // dictionary strings only — safe to serialize.
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar lang={lang as Locale} nav={dict.nav} />
      <main id="main-content">
        <Hero
          lang={lang as Locale}
          hero={dict.hero}
          heroPreview={dict.heroPreview}
          trustBar={dict.trustBar}
        />
        <HowItWorks howItWorks={dict.howItWorks} />
        <SpeedQuality lang={lang as Locale} speedQuality={dict.speedQuality} />
        <Services services={dict.services} />
        <FAQ faq={dict.faq} />
        <Testimonials testimonials={dict.testimonials} />
        <Contact contact={dict.contact} />
      </main>
      <Footer lang={lang as Locale} nav={dict.nav} footer={dict.footer} />
    </>
  );
}
