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
      <main id="main-content">
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
