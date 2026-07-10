import type { Topic } from "../types";

const psychologyStatistics: Topic = {
  key: "psychology-statistics",
  kind: "service",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  serviceType: "Psychology Dissertation Statistical Analysis",
  related: ["thesis-statistics", "sample-size", "reliability-analysis", "regression-interpretation"],
  locales: {
    tr: {
      metaTitle: "Psikoloji Tez İstatistik Analizi — Yüksek Lisans ve Doktora | GetBayes",
      metaDescription:
        "Psikoloji tezi için istatistik analizi: deneysel desen ANOVA'ları, ölçek geliştirme/uyarlama, aracılık-düzenleyicilik analizi. APA 7 formatında raporlama, analiz 15 dakikada.",
      headline: "Psikoloji Tez İstatistik Analizi",
      lead: [
        "Psikoloji tezleri diğer sosyal bilim tezlerine göre metodolojik olarak en talepkâr olanlar arasındadır: deneysel desenlerde faktöriyel ANOVA'lar ve tekrarlı ölçümler, ölçek çalışmalarında açımlayıcı/doğrulayıcı faktör analizi, ilişkisel çalışmalarda ise aracılık (mediation) ve düzenleyicilik (moderation) modelleri sıkça istenir. GetBayes bu üç desen tipinde de veri setinizi alır, hipotezlerinize uygun analizi APA 7. baskı standardında (tam p-değeri, etki büyüklüğü, güven aralığı) raporlar — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur.",
        "Psikoloji dergileri ve jürileri APA raporlama standardına özellikle titizdir; her tabloyu ve metin içi istatistik ifadesini bu standarda göre hazırlarız, böylece savunmada veya hakem sürecinde formatla ilgili bir soru almazsınız.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Yüksek lisans ve doktora tezi yürüten psikoloji öğrencileri",
          "Deneysel desenle (grup x zaman, faktöriyel) veri toplayan araştırmacılar",
          "Ölçek geliştirme veya Türkçe uyarlama çalışması yapanlar",
          "Aracılık/düzenleyicilik (mediation/moderation) modeli kurmak isteyenler",
          "APA formatında raporlama standardına eksiksiz uymak isteyen herkes",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Psikoloji araştırmalarında en sık çalıştığımız analizler",
          columns: ["Desen / soru", "Tipik analizler"],
          rows: [
            [
              "İki grup karşılaştırması",
              "Bağımsız/bağımlı örneklem t-testi, gerekirse Mann-Whitney/Wilcoxon",
            ],
            [
              "Üç ve üzeri grup, faktöriyel desen",
              "Tek/iki yönlü ANOVA, tekrarlı ölçümler ANOVA, post-hoc testler, kısmi eta kare",
            ],
            [
              "Ölçek geliştirme / Türkçe uyarlama",
              "Açımlayıcı faktör analizi (AFA), doğrulayıcı faktör analizi (DFA), Cronbach alfa / McDonald omega",
            ],
            [
              "Değişkenler arası ilişki / yordama",
              "Korelasyon, çoklu regresyon, hiyerarşik regresyon",
            ],
            [
              "Aracılık ve düzenleyicilik",
              "Aracı değişken modelleri (bootstrap güven aralığı), düzenleyicilik analizi, etkileşim terimleri",
            ],
            [
              "Örneklem büyüklüğü planlaması",
              "A priori güç analizi — etik kurul veya tez öneri savunması için gerekçe metniyle",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          steps: [
            {
              title: "Desen ve verinizi anlatın",
              description:
                "Araştırma deseninizi (deneysel, korelasyonel, ölçek çalışması), veri setinizi ve hipotezlerinizi iletin.",
            },
            {
              title: "Ücretsiz ön değerlendirme",
              description:
                "24 saat içinde hangi analizlerin gerektiğini ve net fiyatı yazılı olarak bildiririz.",
            },
            {
              title: "Analiz ve APA raporlama",
              description:
                "Varsayım kontrolleri, uygun test/model seçimi ve APA 7 standardında tam istatistik ifadeleriyle raporlama yapılır.",
            },
            {
              title: "Teslim ve destek",
              description:
                "Yayına hazır rapor aynı gün elinize geçer; tez izleme komitesi veya savunma öncesi sorularınızı yanıtlarız.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Psikoloji tezlerinde sık karşılaşılan hatalar",
          intro: "Jürilerin ve hakemlerin en çok takıldığı noktalar — raporda bunları baştan gözetiriz:",
          items: [
            "Aracılık analizini basit korelasyonla \"ispatlamaya\" çalışmak — güncel standart bootstrap güven aralıklı aracılık modelleridir (Sobel testi artık yetersiz kabul ediliyor).",
            "Faktöriyel ANOVA'da etkileşim etkisini yorumlamadan yalnızca ana etkileri raporlamak.",
            "Ölçek uyarlama çalışmasında yalnızca Cronbach alfa vermek, yapı geçerliğini (faktör analizi) atlamak.",
            "APA formatında tam istatistik ifadesi yerine yalnızca \"p<0.05, anlamlı\" yazmak — etki büyüklüğü ve güven aralığı olmadan bulgu eksik sayılır.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Aracılık (mediation) analizi yapıyor musunuz?",
          answer:
            "Evet. Bootstrap güven aralıklı aracılık modelleri (dolaylı etkinin anlamlılığı için) ve gerektiğinde düzenleyicilik/düzenleyici aracılık (moderated mediation) modelleri kuruyoruz; sonuçları yol diyagramı ve APA formatında tabloyla raporluyoruz.",
        },
        {
          question: "Örneklem büyüklüğümü G*Power ile mi hesaplıyorsunuz?",
          answer:
            "G*Power'ın hesapladığı güç analizi mantığını (etki büyüklüğü, alfa, güç düzeyine göre gerekli örneklem) kendi Python tabanlı altyapımızla, duyarlılık grafikleriyle birlikte hesaplıyoruz — sonuç aynı mantığa dayanır, ayrıca etik kurul başvurunuz için gerekçe metnini de hazırlarız. Detaylar için örneklem büyüklüğü hesaplama sayfamıza bakabilirsiniz.",
        },
        {
          question: "Ölçek geliştirme tezimde hangi analizler gerekiyor?",
          answer:
            "Tipik sıra: açımlayıcı faktör analizi (yapı geçerliği), doğrulayıcı faktör analizi (modeli doğrulama), Cronbach alfa/McDonald omega (güvenirlik) ve ölçüt geçerliği için ilgili başka bir ölçekle korelasyon. Detaylı yorumlama için ölçek güvenilirlik analizi sayfamıza bakabilirsiniz.",
        },
        {
          question: "APA 7. baskı formatına tam uyumlu rapor alabilir miyim?",
          answer:
            "Evet — tüm tablolar, metin içi istatistik ifadeleri (t, F, p, etki büyüklüğü, güven aralığı) ve şekiller APA 7. baskı standardına göre hazırlanır.",
        },
        {
          question: "Tekrarlı ölçümler ANOVA ve karma desen analizi yapıyor musunuz?",
          answer:
            "Evet. Tek faktörlü tekrarlı ölçümler ANOVA'dan, grup x zaman karma faktöriyel desenlere kadar analiz ediyor, küresellik varsayımı ihlalinde Greenhouse-Geisser düzeltmesini uyguluyoruz.",
        },
        {
          question: "Analiz ücreti ne kadar?",
          answer:
            "Fiyat, model karmaşıklığına (basit grup karşılaştırması ile aracılık modeli aynı emek değildir) ve değişken sayısına göre belirlenir. Güncel piyasa aralıkları için istatistik analiz ücretleri sayfamıza bakabilir, kendi çalışmanız için verinizi gönderip 24 saat içinde ücretsiz ön değerlendirme alabilirsiniz.",
        },
      ],
      cta: {
        heading: "Psikoloji tez analizinizi başlatın",
        text: "Desen ve verinizi gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Psychology Dissertation Statistics — Master's & PhD Analysis | GetBayes",
      metaDescription:
        "Statistical analysis for psychology dissertations: experimental-design ANOVAs, scale development/adaptation, mediation and moderation analysis. Full APA 7 reporting, analysis in 15 minutes.",
      headline: "Psychology Dissertation Statistics",
      lead: [
        "Psychology dissertations are among the most methodologically demanding in the social sciences: experimental designs call for factorial ANOVAs and repeated measures, scale studies call for exploratory/confirmatory factor analysis, and correlational work frequently needs mediation and moderation models. GetBayes takes your dataset for any of these three design types, runs the analysis that fits your hypotheses, and reports it to APA 7th-edition standard (exact p-values, effect sizes, confidence intervals) — the analysis itself usually takes 15 minutes, and your report is in your hands the same day, often within hours or even minutes.",
        "Psychology journals and committees are particularly strict about APA reporting format; we prepare every table and every in-text statistic to that standard, so you don't get a formatting question at your defense or from a reviewer.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Master's and PhD psychology students working on a dissertation",
          "Researchers collecting data with an experimental design (group x time, factorial)",
          "Anyone running scale development or a Turkish adaptation study",
          "Researchers building a mediation or moderation model",
          "Anyone who needs full compliance with APA reporting format",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "The analyses we run most in psychology research",
          columns: ["Design / question", "Typical analyses"],
          rows: [
            [
              "Two-group comparison",
              "Independent/paired-samples t-test, Mann-Whitney/Wilcoxon when needed",
            ],
            [
              "Three or more groups, factorial design",
              "One-/two-way ANOVA, repeated-measures ANOVA, post-hoc tests, partial eta squared",
            ],
            [
              "Scale development / Turkish adaptation",
              "Exploratory factor analysis (EFA), confirmatory factor analysis (CFA), Cronbach's alpha / McDonald's omega",
            ],
            [
              "Relationships between variables / prediction",
              "Correlation, multiple regression, hierarchical regression",
            ],
            [
              "Mediation and moderation",
              "Mediator models (bootstrap confidence intervals), moderation analysis, interaction terms",
            ],
            [
              "Sample size planning",
              "A priori power analysis — with justification text for an ethics application or proposal defense",
            ],
          ],
        },
        {
          type: "steps",
          heading: "How the process works",
          steps: [
            {
              title: "Describe your design and data",
              description:
                "Share your research design (experimental, correlational, scale study), your dataset and your hypotheses.",
            },
            {
              title: "Free assessment",
              description:
                "Within 24 hours we tell you which analyses are needed and give a clear written price.",
            },
            {
              title: "Analysis and APA reporting",
              description:
                "Assumption checks, correct test/model selection, and reporting with full APA 7 statistical statements.",
            },
            {
              title: "Delivery and support",
              description:
                "Your publication-ready report arrives the same day; we keep answering questions ahead of your committee meeting or defense.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Common mistakes in psychology dissertations",
          intro: "These are what committees and reviewers flag most — we account for them from the start:",
          items: [
            "Trying to \"prove\" mediation with a simple correlation — the current standard is bootstrap-confidence-interval mediation models (the Sobel test is now considered insufficient).",
            "Reporting only main effects in a factorial ANOVA without interpreting the interaction effect.",
            "Reporting only Cronbach's alpha in a scale-adaptation study while skipping construct validity (factor analysis).",
            "Writing just \"p<0.05, significant\" instead of a full APA statistical statement — a finding is considered incomplete without effect size and confidence interval.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Do you run mediation analysis?",
          answer:
            "Yes. We build bootstrap-confidence-interval mediation models (to test the significance of the indirect effect) and, when needed, moderation or moderated-mediation models — reporting results with a path diagram and an APA-formatted table.",
        },
        {
          question: "Do you calculate my sample size with G*Power?",
          answer:
            "We compute the same power-analysis logic G*Power uses (required sample size given effect size, alpha and power) with our own Python-based infrastructure, including sensitivity graphs — the result follows the same logic, and we also prepare the justification text for your ethics application. See our sample size calculation page for details.",
        },
        {
          question: "What analyses does my scale-development dissertation need?",
          answer:
            "The typical sequence: exploratory factor analysis (construct validity), confirmatory factor analysis (model confirmation), Cronbach's alpha/McDonald's omega (reliability), and a correlation with a related scale for criterion validity. See our scale reliability analysis page for a detailed interpretation guide.",
        },
        {
          question: "Can I get a report fully compliant with APA 7th edition?",
          answer:
            "Yes — every table, every in-text statistic (t, F, p, effect size, confidence interval) and every figure is prepared to APA 7th-edition standard.",
        },
        {
          question: "Do you run repeated-measures ANOVA and mixed-design analysis?",
          answer:
            "Yes. From single-factor repeated-measures ANOVA to group x time mixed factorial designs, and we apply the Greenhouse-Geisser correction when sphericity is violated.",
        },
        {
          question: "How much does the analysis cost?",
          answer:
            "Price depends on model complexity (a simple group comparison and a mediation model are not the same effort) and the number of variables. See our statistical analysis pricing page for current market ranges, or send your data for a free assessment within 24 hours.",
        },
      ],
      cta: {
        heading: "Start your psychology dissertation analysis",
        text: "Send your design and data — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default psychologyStatistics;
