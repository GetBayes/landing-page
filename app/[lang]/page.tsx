import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
      </main>
    </>
  );
}
