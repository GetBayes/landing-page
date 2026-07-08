// Public URL slugs per locale. Internal route folders keep the English
// names (app/[lang]/power etc.); proxy.ts rewrites the Turkish slugs onto
// them and redirects the English slugs away under /tr.
// No "server-only" here — LanguageToggle (client) needs this map too.

export type Locale = "en" | "tr";

export const routeSlugs = {
  power: { en: "power", tr: "guc-analizi" },
  info: { en: "info", tr: "bilgi" },
  privacy: { en: "privacy", tr: "gizlilik-politikasi" },
  terms: { en: "terms", tr: "kullanim-kosullari" },
} as const;

export type RouteKey = keyof typeof routeSlugs;

export function localizedPath(route: RouteKey, locale: Locale): string {
  return `/${locale}/${routeSlugs[route][locale]}`;
}

// Translate a public pathname (e.g. /tr/guc-analizi) into its equivalent
// in another locale (e.g. /en/power). Unknown slugs pass through unchanged.
export function translatePath(pathname: string, to: Locale): string {
  const segments = pathname.split("/");
  const from = segments[1] as Locale;
  segments[1] = to;
  const slug = segments[2];
  if (slug && from !== to) {
    for (const slugs of Object.values(routeSlugs)) {
      if (slugs[from] === slug) {
        segments[2] = slugs[to];
        break;
      }
    }
  }
  return segments.join("/");
}
