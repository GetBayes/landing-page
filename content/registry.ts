import "server-only";

import type { Topic } from "./types";
import type { Locale, TopicKey } from "./slugs";
import { topicSlugs } from "./slugs";
import thesisStatistics from "./topics/thesis-statistics";
import spssAnalysis from "./topics/spss-analysis";
import surveyAnalysis from "./topics/survey-analysis";
import findStatistician from "./topics/find-statistician";
import articleStatistics from "./topics/article-statistics";
import aboutUs from "./topics/about-us";
import whichTest from "./topics/which-test";
import sampleSize from "./topics/sample-size";
import biostatistics from "./topics/biostatistics";
import healthUseCases from "./topics/health-use-cases";
import pricing from "./topics/pricing";
import powerBi from "./topics/power-bi";
import reportingResults from "./topics/reporting-results";
import comparison from "./topics/comparison";
import whyGetbayes from "./topics/why-getbayes";
import aiStatistics from "./topics/ai-statistics";
import regressionInterpretation from "./topics/regression-interpretation";

export const topics: Record<TopicKey, Topic> = {
  "thesis-statistics": thesisStatistics,
  "spss-analysis": spssAnalysis,
  "survey-analysis": surveyAnalysis,
  "find-statistician": findStatistician,
  "article-statistics": articleStatistics,
  "about-us": aboutUs,
  "which-test": whichTest,
  "sample-size": sampleSize,
  biostatistics: biostatistics,
  "health-use-cases": healthUseCases,
  pricing: pricing,
  "power-bi": powerBi,
  "reporting-results": reportingResults,
  comparison: comparison,
  "why-getbayes": whyGetbayes,
  "ai-statistics": aiStatistics,
  "regression-interpretation": regressionInterpretation,
};

export const allTopics: Topic[] = Object.values(topics);

// Resolve a URL slug within a locale to its topic.
export function findTopicBySlug(locale: Locale, slug: string): Topic | null {
  for (const topic of allTopics) {
    if (topicSlugs[topic.key][locale] === slug) return topic;
  }
  return null;
}

// Resolve a slug regardless of locale — used to 308 the wrong locale's slug
// (e.g. /en/tez-istatistik-analizi) onto the canonical URL.
export function findTopicByAnySlug(slug: string): Topic | null {
  for (const topic of allTopics) {
    const slugs = topicSlugs[topic.key];
    if (slugs.en === slug || slugs.tr === slug) return topic;
  }
  return null;
}
