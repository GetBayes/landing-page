import type { MetadataRoute } from "next";
import { localizedPath, type RouteKey } from "./[lang]/slugs";
import { topicKeys, topicPath } from "../content/slugs";
import { topics } from "../content/registry";

const baseUrl = "https://getbayes.me";

function entry(
  path: { en: string; tr: string },
  lang: "en" | "tr",
  lastModified: Date,
  changeFrequency: "weekly" | "monthly" | "yearly",
  priority: number
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${path[lang]}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${baseUrl}${path.en}`,
        tr: `${baseUrl}${path.tr}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages carry no per-page date, so they inherit the freshest topic
  // date in the registry. A hardcoded constant never moves, which leaves Bing
  // and Google with no reason to schedule a recrawl after a deploy.
  const lastModified = new Date(
    Math.max(...topicKeys.map((key) => Date.parse(topics[key].dateModified)))
  );

  const home = { en: "/en", tr: "/tr" };
  const routePaths = (route: RouteKey) => ({
    en: localizedPath(route, "en"),
    tr: localizedPath(route, "tr"),
  });

  const topicPaths = (key: (typeof topicKeys)[number]) => ({
    en: topicPath(key, "en"),
    tr: topicPath(key, "tr"),
  });

  return [
    entry(home, "tr", lastModified, "weekly", 1.0),
    entry(home, "en", lastModified, "weekly", 1.0),
    entry(routePaths("power"), "tr", lastModified, "monthly", 0.8),
    entry(routePaths("power"), "en", lastModified, "monthly", 0.8),
    entry(routePaths("powerCalculator"), "tr", lastModified, "monthly", 0.7),
    entry(routePaths("powerCalculator"), "en", lastModified, "monthly", 0.7),
    // "stats" and "info" are lead-capture forms carrying a noindex — a
    // sitemap entry for a noindexed URL is a contradictory signal, so they
    // stay out. They remain reachable through the footer and page CTAs.
    entry(routePaths("guides"), "tr", lastModified, "weekly", 0.8),
    entry(routePaths("guides"), "en", lastModified, "weekly", 0.8),
    ...topicKeys.flatMap((key) => {
      const topicModified = new Date(topics[key].dateModified);
      return [
        entry(topicPaths(key), "tr", topicModified, "monthly", 0.9),
        entry(topicPaths(key), "en", topicModified, "monthly", 0.9),
      ];
    }),
    entry(routePaths("privacy"), "tr", lastModified, "yearly", 0.3),
    entry(routePaths("privacy"), "en", lastModified, "yearly", 0.3),
    entry(routePaths("terms"), "tr", lastModified, "yearly", 0.3),
    entry(routePaths("terms"), "en", lastModified, "yearly", 0.3),
  ];
}
