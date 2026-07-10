import type { Topic } from "../types";

const nursingStatistics: Topic = {
  key: "nursing-statistics",
  kind: "service",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  serviceType: "Nursing Thesis Statistical Analysis",
  related: ["thesis-statistics", "biostatistics", "spss-analysis", "reliability-analysis"],
  locales: {
    tr: {
      metaTitle: "Hemşirelik Tez İstatistik Analizi — Yüksek Lisans ve Doktora | GetBayes",
      metaDescription:
        "Hemşirelik tezi için istatistik analizi: ön test-son test karşılaştırmaları, ölçek güvenirliği, tutum-tükenmişlik ilişkileri. SPSS uyumlu raporlama, analiz 15 dakikada, teslim aynı gün.",
      headline: "Hemşirelik Tez İstatistik Analizi",
      lead: [
        "Hemşirelik tezleri genelde iki tip veriyle çalışır: bir girişimin (eğitim programı, bakım protokolü, ağrı yönetimi uygulaması) öncesi-sonrası etkisini ölçen ön test-son test tasarımlar, ya da tükenmişlik, iş doyumu, öz-yeterlik gibi tutumları ölçek ile ölçüp aralarındaki ilişkiyi inceleyen kesitsel çalışmalar. GetBayes her iki tipte de veri setinizi ve araştırma sorularınızı alır, uygun testleri (bağımlı/bağımsız örneklem karşılaştırmaları, korelasyon, ölçek güvenirliği) çalıştırır ve hemşirelik dergilerinin beklediği formatta, etki büyüklüğü ve güven aralıklarıyla birlikte raporlar — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur.",
        "Hemşirelik araştırmalarında örneklem çoğu zaman küçük ve kliniğe bağlı (bir serviste çalışan hemşireler, belirli bir tanı grubundaki hastalar) olduğu için normallik varsayımının sağlanıp sağlanmadığını dikkatle kontrol eder, gerektiğinde nonparametrik alternatifleri (Wilcoxon, Mann-Whitney, Kruskal-Wallis) kullanırız.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Yüksek lisans ve doktora tezi yürüten hemşirelik öğrencileri",
          "Girişim/eğitim programının etkisini ön test-son test tasarımıyla ölçen araştırmacılar",
          "Tükenmişlik, iş doyumu, öz-yeterlik gibi ölçeklerle veri toplayan hemşirelik akademisyenleri",
          "Ölçek Türkçe uyarlama veya geçerlik-güvenirlik çalışması yapanlar",
          "Hemşirelik dergisine gönderdiği makalesi istatistik revizyonu alan araştırmacılar",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Hemşirelik araştırmalarında en sık çalıştığımız analizler",
          columns: ["Çalışma tipi / soru", "Tipik analizler"],
          rows: [
            [
              "Girişim öncesi-sonrası karşılaştırma",
              "Bağımlı örneklem t-testi veya Wilcoxon işaretli sıralar testi, etki büyüklüğü (Cohen's d)",
            ],
            [
              "Girişim grubu vs. kontrol grubu",
              "Bağımsız örneklem t-testi veya Mann-Whitney U, ki-kare (kategorik sonuçlar için)",
            ],
            [
              "Tutum/tükenmişlik ölçekleri arası ilişki",
              "Pearson/Spearman korelasyon, çoklu regresyon",
            ],
            [
              "Ölçek Türkçe uyarlama / geliştirme",
              "Açımlayıcı ve doğrulayıcı faktör analizi, Cronbach alfa, madde-toplam korelasyonu",
            ],
            [
              "Üç ve üzeri grup/birim karşılaştırması",
              "Tek yönlü ANOVA veya Kruskal-Wallis + post-hoc testler",
            ],
            [
              "Demografik değişkenlere göre farklar",
              "t-testi/ANOVA (sürekli değişken), ki-kare (kategorik değişken)",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          steps: [
            {
              title: "Verinizi ve ölçeklerinizi gönderin",
              description:
                "Anket/ölçek verinizi ve hangi ilişkileri/farkları test etmek istediğinizi iletin — Excel, Google Forms çıktısı veya SPSS dosyası fark etmez.",
            },
            {
              title: "Ücretsiz ön değerlendirme",
              description:
                "24 saat içinde hangi analizlerin gerektiğini ve net fiyatı yazılı olarak bildiririz.",
            },
            {
              title: "Analiz ve raporlama",
              description:
                "Normallik kontrolü, uygun test seçimi, ölçek güvenirlik analizi ve etki büyüklükleriyle birlikte APA formatında tablolar hazırlanır.",
            },
            {
              title: "Teslim ve destek",
              description:
                "Yayına hazır rapor aynı gün elinize geçer; danışman görüşmesi veya jüri öncesi sorularınızı yanıtlamaya devam ederiz.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Hemşirelik tezlerinde sık karşılaşılan hatalar",
          intro: "Jürilerin ve hakemlerin en çok takıldığı noktalar şunlar — biz raporda bunları baştan gözetiriz:",
          items: [
            "Küçük örneklemde normallik varsayımı kontrol edilmeden parametrik test kullanmak — biz her zaman normallik testi yapıp gerekirse nonparametrik alternatife geçeriz.",
            "Yalnızca p-değeri raporlamak, etki büyüklüğünü atlamak — hemşirelik dergileri artık klinik anlamlılık için etki büyüklüğü ve güven aralığı istiyor.",
            "Ölçek güvenirliğini (Cronbach alfa) hiç raporlamamak veya alt boyutlar için ayrı hesaplamamak.",
            "Ön test-son test tasarımında bağımsız örneklem testi kullanmak — aynı katılımcıdan alınan iki ölçüm bağımlı örneklem testiyle analiz edilmeli.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Küçük örneklem (30-40 hemşire) ile analiz yapılabilir mi?",
          answer:
            "Evet, hemşirelik araştırmalarında bu yaygın bir durumdur. Küçük örneklemlerde normallik varsayımını dikkatle kontrol eder, gerektiğinde nonparametrik testleri (Mann-Whitney, Wilcoxon, Kruskal-Wallis) kullanır ve örneklem büyüklüğünün bir sınırlama olarak tartışma bölümünde nasıl ifade edileceği konusunda da yönlendirme yaparız.",
        },
        {
          question: "Ölçek Türkçe uyarlama çalışması için hangi analizler gerekir?",
          answer:
            "Tipik olarak açımlayıcı faktör analizi (yapı geçerliği), Cronbach alfa ve madde-toplam korelasyonları (güvenirlik), gerekirse doğrulayıcı faktör analizi ile ölçüt geçerliği için orijinal ölçekle korelasyon raporlanır. Detaylı bir yorumlama rehberi için ölçek güvenilirlik analizi sayfamıza bakabilirsiniz.",
        },
        {
          question: "Ön test-son test tasarımını hangi testle analiz ediyorsunuz?",
          answer:
            "Aynı katılımcıdan alınan iki ölçüm bağımlı (eşleştirilmiş) örneklem t-testi ile, normallik sağlanmıyorsa Wilcoxon işaretli sıralar testiyle analiz edilir. Kontrol grubu da varsa gruplar arası karşılaştırma için ayrıca bağımsız örneklem testi veya karma model kullanılır.",
        },
        {
          question: "SPSS formatında rapor alabilir miyim?",
          answer:
            "Evet — tablolarınız ve bulgularınız SPSS kullanıcılarının ve jürilerin alışkın olduğu düzende, APA formatında hazırlanır; sonuçlar SPSS ile birebir aynıdır.",
        },
        {
          question: "Hasta verisi kullanıyorum, gizlilik nasıl sağlanıyor?",
          answer:
            "Kimlik bilgisi içermeyen anonim veriyle çalışıyoruz; veriniz üçüncü kişilerle paylaşılmaz ve talebiniz hâlinde teslimat sonrası silinir.",
        },
        {
          question: "Analiz ücreti ne kadar?",
          answer:
            "Fiyat, ölçek/değişken sayısı ve yöntem karmaşıklığına göre belirlenir. Güncel piyasa aralıkları için istatistik analiz ücretleri sayfamıza bakabilir, kendi çalışmanız için verinizi gönderip 24 saat içinde ücretsiz ön değerlendirme alabilirsiniz.",
        },
      ],
      cta: {
        heading: "Hemşirelik tez analizinizi başlatın",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Nursing Dissertation Statistics — Master's & PhD Analysis | GetBayes",
      metaDescription:
        "Statistical analysis for nursing dissertations: pre/post intervention comparisons, scale reliability, burnout-attitude relationships. SPSS-compatible reporting, analysis in 15 minutes, same-day delivery.",
      headline: "Nursing Dissertation Statistics",
      lead: [
        "Nursing dissertations typically work with one of two data types: pre/post designs measuring the effect of an intervention (an education program, a care protocol, a pain-management practice), or cross-sectional studies measuring attitudes with scales — burnout, job satisfaction, self-efficacy — and examining how they relate. GetBayes takes your dataset and research questions for either type, runs the appropriate tests (paired/independent comparisons, correlation, scale reliability), and reports them in the format nursing journals expect, with effect sizes and confidence intervals — the analysis itself usually takes 15 minutes, and your report is in your hands the same day, often within hours or even minutes.",
        "Nursing research samples are often small and clinic-bound (nurses on one unit, patients within a specific diagnosis group), so we carefully check whether the normality assumption holds and switch to nonparametric alternatives (Wilcoxon, Mann-Whitney, Kruskal-Wallis) when it doesn't.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Master's and PhD nursing students working on a dissertation",
          "Researchers measuring an intervention or education program with a pre/post design",
          "Nursing academics collecting data with burnout, job-satisfaction or self-efficacy scales",
          "Anyone running a Turkish scale adaptation or validity-reliability study",
          "Researchers whose manuscript to a nursing journal came back with a statistics revision",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "The analyses we run most in nursing research",
          columns: ["Study type / question", "Typical analyses"],
          rows: [
            [
              "Pre/post intervention comparison",
              "Paired-samples t-test or Wilcoxon signed-rank test, effect size (Cohen's d)",
            ],
            [
              "Intervention group vs. control group",
              "Independent-samples t-test or Mann-Whitney U, chi-square (for categorical outcomes)",
            ],
            [
              "Relationships between attitude/burnout scales",
              "Pearson/Spearman correlation, multiple regression",
            ],
            [
              "Scale adaptation / development",
              "Exploratory and confirmatory factor analysis, Cronbach's alpha, item-total correlation",
            ],
            [
              "Comparison across three or more groups/units",
              "One-way ANOVA or Kruskal-Wallis + post-hoc tests",
            ],
            [
              "Differences by demographic variables",
              "t-test/ANOVA (continuous), chi-square (categorical)",
            ],
          ],
        },
        {
          type: "steps",
          heading: "How the process works",
          steps: [
            {
              title: "Send your data and scales",
              description:
                "Share your survey/scale data and the relationships or differences you want tested — Excel, a Google Forms export or an SPSS file all work.",
            },
            {
              title: "Free assessment",
              description:
                "Within 24 hours we tell you which analyses are needed and give a clear written price.",
            },
            {
              title: "Analysis and reporting",
              description:
                "Normality checks, correct test selection, scale reliability analysis, and APA-formatted tables with effect sizes.",
            },
            {
              title: "Delivery and support",
              description:
                "Your publication-ready report arrives the same day; we keep answering questions ahead of your advisor meeting or defense.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Common mistakes in nursing dissertations",
          intro: "These are what committees and reviewers flag most — we account for them from the start:",
          items: [
            "Using a parametric test without checking normality in a small sample — we always run a normality test and switch to a nonparametric alternative when needed.",
            "Reporting only the p-value and skipping effect size — nursing journals now expect effect size and confidence intervals for clinical significance.",
            "Never reporting scale reliability (Cronbach's alpha), or not computing it separately for subscales.",
            "Using an independent-samples test on a pre/post design — two measurements from the same participant need a paired-samples test.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Can analysis be done with a small sample (30-40 nurses)?",
          answer:
            "Yes, this is common in nursing research. We carefully check the normality assumption in small samples, switch to nonparametric tests (Mann-Whitney, Wilcoxon, Kruskal-Wallis) when needed, and help phrase sample size as a limitation in your discussion section.",
        },
        {
          question: "What analyses does a scale adaptation study need?",
          answer:
            "Typically exploratory factor analysis (construct validity), Cronbach's alpha and item-total correlations (reliability), and, if needed, confirmatory factor analysis with a correlation against the original scale for criterion validity. See our scale reliability analysis page for a detailed interpretation guide.",
        },
        {
          question: "Which test do you use for a pre/post design?",
          answer:
            "Two measurements from the same participant are analyzed with a paired-samples t-test, or a Wilcoxon signed-rank test if normality doesn't hold. If there's also a control group, an independent-samples test or a mixed model is added for the between-group comparison.",
        },
        {
          question: "Can I get the report in SPSS format?",
          answer:
            "Yes — your tables and findings are prepared in the layout SPSS users and committees are accustomed to, in APA format; results are identical to SPSS.",
        },
        {
          question: "I'm using patient data — how is confidentiality handled?",
          answer:
            "We work with de-identified data; your data is not shared with third parties and is deleted after delivery on request.",
        },
        {
          question: "How much does the analysis cost?",
          answer:
            "Price depends on the number of scales/variables and method complexity. See our statistical analysis pricing page for current market ranges, or send your data for a free assessment within 24 hours.",
        },
      ],
      cta: {
        heading: "Start your nursing dissertation analysis",
        text: "Send your data and research questions — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default nursingStatistics;
