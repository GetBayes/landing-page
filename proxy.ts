import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { routeSlugs, type Locale } from "./app/[lang]/slugs";

const locales = ["en", "tr"];
const defaultLocale = "tr";

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const languages = new Negotiator({ headers })
    .languages()
    .filter((lang) => lang !== "*");
  return match(languages.length ? languages : [defaultLocale], locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Localized slugs: public URLs use per-locale slugs while route folders
  // keep the English names. Rewrite localized → internal; redirect the
  // wrong locale's slug so each page has exactly one indexable URL.
  const [, locale, slug, ...rest] = pathname.split("/");

  if (slug && rest.length === 0) {
    for (const slugs of Object.values(routeSlugs)) {
      const canonical = slugs[locale as Locale];

      if (slug === canonical) {
        if (canonical !== slugs.en) {
          request.nextUrl.pathname = `/${locale}/${slugs.en}`;
          return NextResponse.rewrite(request.nextUrl);
        }
        return;
      }

      if (slug === slugs.en || slug === slugs.tr) {
        request.nextUrl.pathname = `/${locale}/${canonical}`;
        return NextResponse.redirect(request.nextUrl, 308);
      }
    }
  }
}

export const config = {
  // Skip API routes, Next internals, and any file with an extension
  // (og-image.png, llms.txt, favicon.ico, sitemap.xml, robots.txt, ...)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
