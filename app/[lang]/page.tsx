import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

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
      </main>
    </>
  );
}
