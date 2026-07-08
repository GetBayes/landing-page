import type { MetadataRoute } from "next";
import { localizedPath, type RouteKey } from "./[lang]/slugs";
import { topicKeys, topicPath } from "../content/slugs";

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
  const lastModified = new Date("2026-07-08");

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
    entry(routePaths("info"), "tr", lastModified, "monthly", 0.7),
    entry(routePaths("info"), "en", lastModified, "monthly", 0.7),
    entry(routePaths("guides"), "tr", lastModified, "weekly", 0.8),
    entry(routePaths("guides"), "en", lastModified, "weekly", 0.8),
    ...topicKeys.flatMap((key) => [
      entry(topicPaths(key), "tr", lastModified, "monthly", 0.9),
      entry(topicPaths(key), "en", lastModified, "monthly", 0.9),
    ]),
    entry(routePaths("privacy"), "tr", lastModified, "yearly", 0.3),
    entry(routePaths("privacy"), "en", lastModified, "yearly", 0.3),
    entry(routePaths("terms"), "tr", lastModified, "yearly", 0.3),
    entry(routePaths("terms"), "en", lastModified, "yearly", 0.3),
  ];
}
