import type { Topic } from "../types";

const whichTest: Topic = {
  key: "which-test",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-20",
  related: ["sample-size", "normality-test", "thesis-statistics", "spss-analysis", "reliability-analysis"],
  locales: {
    tr: {
      metaTitle: "Hangi İstatistik Testi Kullanılır? Test Seçim Rehberi | GetBayes",
      metaDescription:
        "Araştırmanız için doğru istatistik testini seçme rehberi: veri tipi, grup sayısı ve dağılıma göre karar tabloları — t-testi, ANOVA, ki-kare, korelasyon, regresyon.",
      headline: "Hangi İstatistik Testi Kullanılır?",
      lead: [
        "Doğru istatistik testi üç soruyla belirlenir: (1) Bağımlı değişkeniniz hangi tipte — sürekli mi, kategorik mi? (2) Kaç grup veya ölçüm karşılaştırıyorsunuz ve bunlar bağımsız mı, bağımlı mı? (3) Parametrik test varsayımları (özellikle normallik) sağlanıyor mu? Bu üç sorunun cevabını verdiğinizde test neredeyse kendiliğinden seçilir — aşağıdaki karar tabloları bu süreci adım adım gösterir.",
        "Bu rehber en sık kullanılan senaryoları kapsar. Verinize hangi testin uygun olduğundan emin olamıyorsanız, araştırma sorunuzu ve veri yapınızı bize gönderin — ücretsiz ön değerlendirmede doğru yöntemi gerekçesiyle söyleyelim.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Analiz aşamasına gelmiş, hangi testi seçeceğinden emin olmayan tez öğrencileri",
          "Danışmanı 'yöntem bölümüne test gerekçesi yaz' diyen araştırmacılar",
          "SPSS çıktısı elinde ama doğru testi kullanıp kullanmadığından emin olmayanlar",
          "Hakemden 'test seçimi gerekçelendirilmeli' notu alan yazarlar",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Test seçiminin üç adımı",
          steps: [
            {
              title: "Değişken tiplerini belirleyin",
              description:
                "Bağımlı değişken sürekli mi (yaş, puan, ölçek toplamı), kategorik mi (evet/hayır, gruplar)? Bağımsız değişken kaç düzeyli?",
            },
            {
              title: "Tasarımı netleştirin",
              description:
                "Gruplar bağımsız mı (deney-kontrol), bağımlı mı (öncesi-sonrası, eşleştirilmiş)? Kaç grup/ölçüm var?",
            },
            {
              title: "Varsayımları test edin",
              description:
                "Normallik (Shapiro-Wilk; n>50 ise Kolmogorov-Smirnov), varyans homojenliği (Levene). Sağlanıyorsa parametrik, sağlanmıyorsa nonparametrik test.",
            },
          ],
        },
        {
          type: "table",
          heading: "Karar tablosu: grup karşılaştırmaları",
          intro:
            "Bağımlı değişken sürekli olduğunda (puan, ölçüm, ölçek toplamı):",
          columns: ["Senaryo", "Parametrik test", "Nonparametrik karşılığı"],
          rows: [
            ["2 bağımsız grup (deney-kontrol)", "Bağımsız örneklem t-testi", "Mann-Whitney U"],
            ["2 bağımlı ölçüm (ön test-son test)", "Eşleştirilmiş t-testi", "Wilcoxon işaretli sıra"],
            ["3+ bağımsız grup", "Tek yönlü ANOVA", "Kruskal-Wallis H"],
            ["3+ tekrarlı ölçüm", "Tekrarlı ölçümler ANOVA", "Friedman testi"],
            ["2+ faktörün birlikte etkisi", "Faktöriyel (iki yönlü) ANOVA", "—"],
            ["Grup farkı + kovaryat kontrolü", "ANCOVA", "—"],
          ],
        },
        {
          type: "table",
          heading: "Karar tablosu: ilişki ve yordama",
          columns: ["Senaryo", "Uygun yöntem"],
          rows: [
            ["İki sürekli değişken arasında ilişki (normal dağılım)", "Pearson korelasyonu"],
            ["İki sürekli/sıralı değişken (normallik yok)", "Spearman korelasyonu"],
            ["İki kategorik değişken arasında ilişki", "Ki-kare testi (beklenen değer <5 ise Fisher'ın kesin testi)"],
            ["Sürekli bir sonucu birden çok değişkenle yordama", "Çoklu doğrusal regresyon"],
            ["İkili (var/yok) sonucu yordama", "Lojistik regresyon"],
            ["Ölçeğin faktör yapısını inceleme", "Açımlayıcı / doğrulayıcı faktör analizi"],
            ["Ölçeğin iç tutarlılığı", "Cronbach alfa"],
          ],
        },
        {
          type: "bullets",
          heading: "En sık yapılan 5 test seçimi hatası",
          items: [
            "Normallik hiç test edilmeden t-testi/ANOVA kullanmak — jüri ve hakemlerin ilk baktığı nokta budur",
            "Bağımlı tasarımda bağımsız test kullanmak (ön test-son test verisine bağımsız t-testi uygulamak gibi)",
            "3+ grubu ikişer ikişer t-testiyle karşılaştırmak — Tip I hata şişer; ANOVA + post-hoc gerekir",
            "Likert tipi tek maddeyi sürekli değişken gibi analiz etmek (ölçek toplamı sürekli kabul edilir, tek madde tartışmalıdır)",
            "Korelasyonu nedensellik gibi yorumlamak — regresyon bile tek başına nedensellik kanıtlamaz",
          ],
        },
        {
          type: "paragraphs",
          heading: "Varsayımlar sağlanmazsa ne yapılır?",
          body: [
            "Normallik bozulduğunda ilk seçenek nonparametrik karşılığa geçmektir (tablodaki eşleşmeler). Örneklem yeterince büyükse (grup başına ~30+) merkezi limit teoremi nedeniyle parametrik testler sapmalara görece dayanıklıdır; bu durumda parametrik test raporlanabilir ama gerekçesi yazılmalıdır. Aşırı çarpık dağılımlarda logaritmik dönüşüm bir alternatiftir. Hangi yolun sizin veriniz için savunulabilir olduğu, dağılımın şekline ve alan geleneğine bağlıdır — raporlarımızda bu kararı her zaman gerekçesiyle yazarız.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Normallik testi olarak Shapiro-Wilk mi Kolmogorov-Smirnov mu kullanmalıyım?",
          answer:
            "Küçük ve orta örneklemlerde (n<50) Shapiro-Wilk daha güçlüdür; büyük örneklemlerde Kolmogorov-Smirnov (Lilliefors düzeltmeli) yaygındır. Büyük örneklemlerde testler küçük sapmalarda bile anlamlı çıkabildiğinden çarpıklık-basıklık değerlerine (±1 veya ±2 ölçütü) ve histograma birlikte bakmak en sağlıklısıdır.",
        },
        {
          question: "Likert ölçeği verisi parametrik testle analiz edilebilir mi?",
          answer:
            "Çok maddeli bir ölçeğin toplam veya ortalama puanı yaygın kabulle sürekli sayılır ve normallik sağlanıyorsa parametrik test kullanılabilir. Tek bir Likert maddesi ise sıralı veridir; nonparametrik test daha savunulabilirdir.",
        },
        {
          question: "ANOVA anlamlı çıktı — hangi gruplar arasında fark var?",
          answer:
            "ANOVA yalnızca 'en az bir grup farklı' der. Hangi grupların farklılaştığını post-hoc testler gösterir: varyanslar homojense Tukey HSD veya Bonferroni, değilse Games-Howell yaygın seçimlerdir.",
        },
        {
          question: "Ki-kare testinin varsayımı nedir?",
          answer:
            "Beklenen frekansların yeterliliği: hücrelerin %20'sinden fazlasında beklenen değer 5'in altındaysa ki-kare güvenilmez olur. 2x2 tablolarda Fisher'ın kesin testi, daha büyük tablolarda kategori birleştirme çözümdür.",
        },
        {
          question: "Testi yine de seçemedim — ne yapmalıyım?",
          answer:
            "Araştırma sorunuzu, değişkenlerinizi ve verinizi bize gönderin. Ücretsiz ön değerlendirmede hangi testin uygun olduğunu gerekçesiyle bildirelim; dilerseniz analizi 15 dakikada tamamlayıp yayına hazır raporu aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim edelim.",
        },
      ],
      cta: {
        heading: "Test seçimini ve analizi bize bırakın",
        text: "Verinizi ve araştırma sorunuzu gönderin; doğru yöntemi gerekçesiyle belirleyip yayına hazır raporu teslim edelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Which Statistical Test Should I Use? Selection Guide | GetBayes",
      metaDescription:
        "A guide to choosing the right statistical test: decision tables by data type, group count and distribution — t-tests, ANOVA, chi-square, correlation, regression.",
      headline: "Which Statistical Test Should I Use?",
      lead: [
        "The right statistical test is determined by three questions: (1) What type is your dependent variable — continuous or categorical? (2) How many groups or measurements are you comparing, and are they independent or paired? (3) Are parametric assumptions (especially normality) met? Answer these three and the test practically selects itself — the decision tables below walk you through it.",
        "This guide covers the most common scenarios. If you're still unsure which test fits your data, send us your research question and data structure — we'll name the right method, with justification, in a free assessment.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Thesis students at the analysis stage, unsure which test to choose",
          "Researchers whose advisor asked for test justification in the methods section",
          "Anyone holding SPSS output but unsure the right test was used",
          "Authors told by reviewers that “the choice of test must be justified”",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "The three steps of test selection",
          steps: [
            {
              title: "Identify variable types",
              description:
                "Is the dependent variable continuous (age, score, scale total) or categorical (yes/no, groups)? How many levels does the independent variable have?",
            },
            {
              title: "Pin down the design",
              description:
                "Are the groups independent (treatment vs. control) or paired (pre-post, matched)? How many groups or measurements?",
            },
            {
              title: "Test the assumptions",
              description:
                "Normality (Shapiro-Wilk; Kolmogorov-Smirnov for n>50), homogeneity of variance (Levene). Met → parametric; violated → nonparametric.",
            },
          ],
        },
        {
          type: "table",
          heading: "Decision table: group comparisons",
          intro: "When the dependent variable is continuous (scores, measurements, scale totals):",
          columns: ["Scenario", "Parametric test", "Nonparametric counterpart"],
          rows: [
            ["2 independent groups (treatment-control)", "Independent-samples t-test", "Mann-Whitney U"],
            ["2 paired measurements (pre-post)", "Paired t-test", "Wilcoxon signed-rank"],
            ["3+ independent groups", "One-way ANOVA", "Kruskal-Wallis H"],
            ["3+ repeated measurements", "Repeated-measures ANOVA", "Friedman test"],
            ["Joint effect of 2+ factors", "Factorial (two-way) ANOVA", "—"],
            ["Group difference with covariate control", "ANCOVA", "—"],
          ],
        },
        {
          type: "table",
          heading: "Decision table: association and prediction",
          columns: ["Scenario", "Appropriate method"],
          rows: [
            ["Association between two continuous variables (normal)", "Pearson correlation"],
            ["Two continuous/ordinal variables (non-normal)", "Spearman correlation"],
            ["Association between two categorical variables", "Chi-square test (Fisher's exact if expected counts <5)"],
            ["Predicting a continuous outcome from several variables", "Multiple linear regression"],
            ["Predicting a binary (yes/no) outcome", "Logistic regression"],
            ["Examining a scale's factor structure", "Exploratory / confirmatory factor analysis"],
            ["A scale's internal consistency", "Cronbach's alpha"],
          ],
        },
        {
          type: "bullets",
          heading: "The 5 most common test-selection mistakes",
          items: [
            "Running t-tests/ANOVA without ever testing normality — the first thing committees and reviewers check",
            "Using an independent test on a paired design (e.g. independent t-test on pre-post data)",
            "Comparing 3+ groups with pairwise t-tests — Type I error inflates; use ANOVA + post-hoc",
            "Treating a single Likert item as continuous (scale totals are accepted as continuous; single items are contested)",
            "Interpreting correlation as causation — even regression alone doesn't establish causality",
          ],
        },
        {
          type: "paragraphs",
          heading: "What if assumptions are violated?",
          body: [
            "When normality fails, the first option is switching to the nonparametric counterpart (the pairings in the table). With large enough samples (~30+ per group), parametric tests are relatively robust to deviations thanks to the central limit theorem — the parametric test can then be reported, but the justification must be written. For heavily skewed distributions, a log transformation is an alternative. Which route is defensible for your data depends on the shape of the distribution and your field's conventions — our reports always state this decision with its reasoning.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Shapiro-Wilk or Kolmogorov-Smirnov for normality?",
          answer:
            "Shapiro-Wilk is more powerful for small and medium samples (n<50); Kolmogorov-Smirnov (with Lilliefors correction) is common for large ones. Since these tests flag even trivial deviations in large samples, it's healthiest to also examine skewness-kurtosis values (±1 or ±2 criteria) and the histogram.",
        },
        {
          question: "Can Likert-scale data be analyzed with parametric tests?",
          answer:
            "A multi-item scale's total or mean score is widely accepted as continuous, so parametric tests apply if normality holds. A single Likert item is ordinal data — a nonparametric test is more defensible.",
        },
        {
          question: "My ANOVA is significant — which groups differ?",
          answer:
            "ANOVA only says “at least one group differs.” Post-hoc tests show which: Tukey HSD or Bonferroni when variances are homogeneous, Games-Howell when they're not.",
        },
        {
          question: "What is the chi-square test's assumption?",
          answer:
            "Adequate expected frequencies: if more than 20% of cells have expected counts below 5, chi-square becomes unreliable. Fisher's exact test solves it for 2x2 tables; merging categories helps in larger ones.",
        },
        {
          question: "I still can't pick the test — what should I do?",
          answer:
            "Send us your research question, variables and data. In a free assessment we'll tell you which test fits and why — and if you like, complete the analysis in 15 minutes and deliver the publication-ready report the same day, often within hours or even minutes.",
        },
      ],
      cta: {
        heading: "Leave test selection and analysis to us",
        text: "Send your data and research question — we'll pick the right method with justification and deliver a publication-ready report.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default whichTest;
