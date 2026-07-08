"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const copy = {
  tr: {
    title: "Sayfa bulunamadı",
    description:
      "Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Sitenin geri kalanı çalışıyor — ana sayfadan devam edebilirsiniz.",
    home: "Ana sayfaya dön",
    contact: "Bize ulaşın",
  },
  en: {
    title: "Page not found",
    description:
      "The page you're looking for may have been moved or never existed. The rest of the site is working — you can continue from the home page.",
    home: "Back to home",
    contact: "Contact us",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] === "en" ? "en" : "tr";
  const t = copy[lang];

  return (
    <main
      id="main-content"
      className="flex-1 flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-lg text-center">
        <p className="font-mono text-sm text-foreground-muted tracking-widest mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          {t.title}
        </h1>
        <p className="text-foreground-muted leading-relaxed mb-8">
          {t.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {t.home}
          </Link>
          <Link
            href={`/${lang}#contact`}
            className="inline-flex items-center justify-center px-8 py-3 border border-border-dark text-foreground font-sans font-medium rounded-lg hover:bg-background-warm transition-colors"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </main>
  );
}
