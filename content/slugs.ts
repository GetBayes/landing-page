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
  "power-bi": {
    en: "free-power-bi-analysis",
    tr: "ucretsiz-power-bi-analizi",
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
  "power-bi": {
    en: "Free Power BI Analysis",
    tr: "Ücretsiz Power BI Analizi",
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
};

export const topicKeys = Object.keys(topicSlugs) as TopicKey[];

export function topicPath(key: TopicKey, locale: Locale): string {
  return `/${locale}/${topicSlugs[key][locale]}`;
}
