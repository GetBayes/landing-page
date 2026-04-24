import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { Target, TrendingUp, Clock } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import PowerForm from "./PowerForm";
import type { Metadata } from "next";

const featureIcons = [Target, TrendingUp, Clock];

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
  return {
    title: `${dict.power.headline} — GetBayes`,
    description: dict.power.subtext,
  };
}

export default async function PowerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const { power } = dict;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar with logo */}
      <header className="px-6 py-5">
        <a
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
        >
          <span className="text-lg font-serif font-semibold">
            {power.logoText}
          </span>
          <span className="text-xs font-sans text-foreground-muted">
            ← {power.backToHome}
          </span>
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          {/* Context strip */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                {power.headline}
              </h1>
              <p className="text-base font-sans text-foreground-muted leading-relaxed">
                {power.subtext}
              </p>
            </div>
          </ScrollReveal>

          {/* Feature bullets */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {power.features.map((text: string, index: number) => {
                const Icon = featureIcons[index];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-foreground" />
                    </div>
                    <p className="text-sm font-sans text-foreground-muted">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Form */}
          <PowerForm form={power.form} />
        </div>
      </main>
    </div>
  );
}
