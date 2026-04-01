import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";

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
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-serif font-semibold text-foreground">
          {dict.hero.headline}
        </h1>
      </main>
    </>
  );
}
