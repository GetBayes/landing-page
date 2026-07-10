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
import dataVisualization from "./topics/data-visualization";
import reportingResults from "./topics/reporting-results";
import comparison from "./topics/comparison";
import whyGetbayes from "./topics/why-getbayes";
import aiStatistics from "./topics/ai-statistics";
import regressionInterpretation from "./topics/regression-interpretation";
import q1SuccessStory from "./topics/q1-success-story";
import reliabilityAnalysis from "./topics/reliability-analysis";
import nursingStatistics from "./topics/nursing-statistics";
import psychologyStatistics from "./topics/psychology-statistics";
import educationStatistics from "./topics/education-statistics";
import sampleReport from "./topics/sample-report";
import analysisProcessCase from "./topics/analysis-process-case";

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
  "data-visualization": dataVisualization,
  "reporting-results": reportingResults,
  comparison: comparison,
  "why-getbayes": whyGetbayes,
  "ai-statistics": aiStatistics,
  "regression-interpretation": regressionInterpretation,
  "q1-success-story": q1SuccessStory,
  "reliability-analysis": reliabilityAnalysis,
  "nursing-statistics": nursingStatistics,
  "psychology-statistics": psychologyStatistics,
  "education-statistics": educationStatistics,
  "sample-report": sampleReport,
  "analysis-process-case": analysisProcessCase,
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
