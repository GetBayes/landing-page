"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "../dictionaries";

export default function LanguageToggle({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 text-sm font-sans">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "en"
            ? "text-foreground font-semibold"
            : "text-foreground-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-border-dark">|</span>
      <button
        onClick={() => switchLocale("tr")}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "tr"
            ? "text-foreground font-semibold"
            : "text-foreground-muted hover:text-foreground"
        }`}
      >
        TR
      </button>
    </div>
  );
}
