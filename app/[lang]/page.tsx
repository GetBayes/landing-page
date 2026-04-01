import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-serif font-semibold text-foreground">
        {dict.hero.headline}
      </h1>
      <p className="mt-4 text-foreground-muted">{dict.hero.subtext}</p>
    </main>
  );
}
