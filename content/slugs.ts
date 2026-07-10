// Topic slugs + short labels, kept separate from the content bodies so
// client components (LanguageToggle via translatePath, Footer links) can
// import this map without pulling page copy into the bundle.
// No "server-only" here for the same reason as app/[lang]/slugs.ts.

export type Locale = "en" | "tr";

export const topicSlugs = {
  "thesis-statistics": {
    en: "thesis-statistics-analysis",
    tr: "tez-istatistik-analizi",
  },
  "spss-analysis": {
    en: "spss-analysis-service",
    tr: "spss-analizi",
  },
  "survey-analysis": {
    en: "survey-analysis-service",
    tr: "anket-analizi",
  },
  "find-statistician": {
    en: "find-a-statistician",
    tr: "istatistikci-ariyorum",
  },
  "article-statistics": {
    en: "journal-article-statistics",
    tr: "makale-istatistik-analizi",
  },
  "about-us": {
    en: "about-us",
    tr: "biz-kimiz",
  },
  "which-test": {
    en: "which-statistical-test",
    tr: "hangi-istatistik-testi",
  },
  "sample-size": {
    en: "sample-size-calculation",
    tr: "orneklem-buyuklugu-hesaplama",
  },
  biostatistics: {
    en: "biostatistics-consulting",
    tr: "biyoistatistik-danismanlik",
  },
  "health-use-cases": {
    en: "health-sciences-case-examples",
    tr: "saglik-bilimlerinde-ornek-analizler",
  },
  pricing: {
    en: "statistical-analysis-pricing",
    tr: "istatistik-analiz-ucretleri",
  },
  "data-visualization": {
    en: "free-data-visualization",
    tr: "ucretsiz-veri-gorsellestirme",
  },
  "reporting-results": {
    en: "how-to-report-statistical-results",
    tr: "istatistik-sonuclari-nasil-raporlanir",
  },
  comparison: {
    en: "statistical-analysis-services-compared",
    tr: "istatistik-analiz-hizmetleri-karsilastirma",
  },
  "why-getbayes": {
    en: "why-getbayes",
    tr: "neden-getbayes",
  },
  "ai-statistics": {
    en: "can-ai-do-statistical-analysis",
    tr: "yapay-zeka-istatistik-analizi",
  },
  "regression-interpretation": {
    en: "how-to-interpret-regression-results",
    tr: "regresyon-sonuclari-nasil-yorumlanir",
  },
  "q1-success-story": {
    en: "q1-surgical-journal-success-story",
    tr: "q1-cerrahi-dergi-basari-hikayesi",
  },
  "reliability-analysis": {
    en: "scale-reliability-analysis",
    tr: "olcek-guvenilirlik-analizi",
  },
  "nursing-statistics": {
    en: "nursing-dissertation-statistics",
    tr: "hemsirelik-tez-istatistik-analizi",
  },
  "psychology-statistics": {
    en: "psychology-dissertation-statistics",
    tr: "psikoloji-tez-istatistik-analizi",
  },
  "education-statistics": {
    en: "education-thesis-statistics",
    tr: "egitim-bilimleri-tez-istatistik-analizi",
  },
  "sample-report": {
    en: "sample-report",
    tr: "ornek-rapor",
  },
  "analysis-process-case": {
    en: "how-an-analysis-project-unfolds",
    tr: "bir-analiz-projesi-nasil-ilerler",
  },
} as const;

export type TopicKey = keyof typeof topicSlugs;

export const topicLabels: Record<TopicKey, Record<Locale, string>> = {
  "thesis-statistics": {
    en: "Thesis Statistical Analysis",
    tr: "Tez İstatistik Analizi",
  },
  "spss-analysis": {
    en: "SPSS Analysis Service",
    tr: "SPSS Analizi",
  },
  "survey-analysis": {
    en: "Survey Analysis Service",
    tr: "Anket Analizi",
  },
  "find-statistician": {
    en: "Finding a Statistician",
    tr: "İstatistikçi mi Arıyorsunuz?",
  },
  "article-statistics": {
    en: "Journal Article Statistics",
    tr: "Makale İstatistik Analizi",
  },
  "about-us": {
    en: "About Us",
    tr: "Biz Kimiz?",
  },
  "which-test": {
    en: "Which Statistical Test?",
    tr: "Hangi İstatistik Testi?",
  },
  "sample-size": {
    en: "Sample Size Calculation",
    tr: "Örneklem Büyüklüğü Hesaplama",
  },
  biostatistics: {
    en: "Biostatistics Consulting",
    tr: "Biyoistatistik Danışmanlık",
  },
  "health-use-cases": {
    en: "Health Sciences Case Examples",
    tr: "Sağlıkta Örnek Analizler",
  },
  pricing: {
    en: "Statistical Analysis Pricing",
    tr: "İstatistik Analiz Ücretleri",
  },
  "data-visualization": {
    en: "Free Data Visualization",
    tr: "Ücretsiz Veri Görselleştirme",
  },
  "reporting-results": {
    en: "Reporting Statistical Results",
    tr: "Sonuçlar Nasıl Raporlanır?",
  },
  comparison: {
    en: "Services Compared",
    tr: "Hizmet Karşılaştırması",
  },
  "why-getbayes": {
    en: "Why GetBayes?",
    tr: "Neden GetBayes?",
  },
  "ai-statistics": {
    en: "Can AI Do Your Statistics?",
    tr: "Yapay Zeka İstatistik Yapar mı?",
  },
  "regression-interpretation": {
    en: "Interpreting Regression Results",
    tr: "Regresyon Sonuçları Nasıl Yorumlanır?",
  },
  "q1-success-story": {
    en: "Q1 Surgical Journal Success Story",
    tr: "Q1 Cerrahi Dergi Başarı Hikayesi",
  },
  "reliability-analysis": {
    en: "Scale Reliability Analysis",
    tr: "Ölçek Güvenilirlik Analizi",
  },
  "nursing-statistics": {
    en: "Nursing Dissertation Statistics",
    tr: "Hemşirelik Tez İstatistiği",
  },
  "psychology-statistics": {
    en: "Psychology Dissertation Statistics",
    tr: "Psikoloji Tez İstatistiği",
  },
  "education-statistics": {
    en: "Education Thesis Statistics",
    tr: "Eğitim Bilimleri Tez İstatistiği",
  },
  "sample-report": {
    en: "Sample Report",
    tr: "Örnek Rapor",
  },
  "analysis-process-case": {
    en: "How an Analysis Project Unfolds",
    tr: "Bir Analiz Projesi Nasıl İlerler?",
  },
};

export const topicKeys = Object.keys(topicSlugs) as TopicKey[];

export function topicPath(key: TopicKey, locale: Locale): string {
  return `/${locale}/${topicSlugs[key][locale]}`;
}
