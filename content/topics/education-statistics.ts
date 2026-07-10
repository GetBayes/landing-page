import type { Topic } from "../types";

const educationStatistics: Topic = {
  key: "education-statistics",
  kind: "service",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  serviceType: "Education Thesis Statistical Analysis",
  related: ["thesis-statistics", "which-test", "reliability-analysis", "spss-analysis"],
  locales: {
    tr: {
      metaTitle: "Eğitim Bilimleri Tez İstatistik Analizi — Yüksek Lisans ve Doktora | GetBayes",
      metaDescription:
        "Eğitim bilimleri tezi için istatistik analizi: ön test-son test kontrol gruplu deneysel desenler, ANCOVA, tutum/başarı ölçekleri. SPSS uyumlu raporlama, analiz 15 dakikada.",
      headline: "Eğitim Bilimleri Tez İstatistik Analizi",
      lead: [
        "Eğitim bilimleri tezlerinin en yaygın deseni, bir öğretim yönteminin veya materyalin etkisini ölçmek için kurulan ön test-son test kontrol gruplu deneysel tasarımdır — burada gruplar arasındaki başlangıç farkını kontrol eden ANCOVA (kovaryans analizi) sıklıkla en doğru yöntemdir, ama çoğu tez taslağında yalnızca bağımsız örneklem t-testiyle karşılaştırma yapılır ve jüri bunu sorgular. GetBayes deneysel desende doğru yöntemi (ANCOVA, karma model), ilişkisel çalışmalarda korelasyon ve regresyonu, ölçek çalışmalarında faktör analizini seçer ve APA formatında raporlar — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur.",
        "Öğretmen/öğrenci anketleri, tutum ölçekleri ve başarı testleriyle toplanan veriyi düzenler, ters kodlanması gereken maddeleri düzeltir ve alt boyut puanlarını hesaplarız — dağınık bir veri setiyle gelseniz bile analize hazır hâle getiririz.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Yüksek lisans ve doktora tezi yürüten eğitim bilimleri öğrencileri",
          "Öğretim yöntemi/materyali etkisini deneysel desenle test eden araştırmacılar",
          "Tutum, motivasyon veya öz-yeterlik ölçeğiyle veri toplayan öğretmen ve akademisyenler",
          "Başarı testi puanlarıyla korelasyon/regresyon analizi yapmak isteyenler",
          "Ölçek Türkçe uyarlama veya geliştirme çalışması yürütenler",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Eğitim bilimlerinde en sık çalıştığımız analizler",
          columns: ["Desen / soru", "Tipik analizler"],
          rows: [
            [
              "Ön test-son test kontrol gruplu deneysel desen",
              "Kovaryans analizi (ANCOVA) — ön test skoru kontrol edilerek son test karşılaştırması",
            ],
            [
              "Tek grup öncesi-sonrası ölçüm",
              "Bağımlı örneklem t-testi veya Wilcoxon işaretli sıralar testi",
            ],
            [
              "Üç ve üzeri grup (yöntem/sınıf) karşılaştırması",
              "Tek yönlü ANOVA veya Kruskal-Wallis + post-hoc testler",
            ],
            [
              "Başarı ile tutum/motivasyon ilişkisi",
              "Korelasyon (Pearson/Spearman), çoklu regresyon",
            ],
            [
              "Tutum/motivasyon ölçeği geliştirme veya uyarlama",
              "Açımlayıcı ve doğrulayıcı faktör analizi, Cronbach alfa",
            ],
            [
              "Demografik değişkenlere göre farklar (cinsiyet, sınıf düzeyi, kıdem)",
              "t-testi/ANOVA (sürekli değişken), ki-kare (kategorik değişken)",
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
                "Deneysel mi ilişkisel mi bir desen kullandığınızı, ölçme araçlarınızı ve veri setinizi iletin.",
            },
            {
              title: "Ücretsiz ön değerlendirme",
              description:
                "24 saat içinde hangi analizlerin gerektiğini ve net fiyatı yazılı olarak bildiririz.",
            },
            {
              title: "Analiz ve raporlama",
              description:
                "Varsayım kontrolleri (ANCOVA için regresyon eğimlerinin homojenliği dahil), doğru yöntem seçimi ve APA formatında tablolarla raporlama.",
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
          heading: "Eğitim bilimleri tezlerinde sık karşılaşılan hatalar",
          intro: "Jürilerin en çok takıldığı noktalar — raporda bunları baştan gözetiriz:",
          items: [
            "Ön test-son test kontrol gruplu desende ön test farkını kontrol etmeden yalnızca son test skorlarını t-testiyle karşılaştırmak — doğru yöntem ANCOVA'dır.",
            "ANCOVA'da regresyon eğimlerinin homojenliği varsayımını hiç kontrol etmemek.",
            "Ölçek geliştirme/uyarlama çalışmasında yalnızca güvenirlik (Cronbach alfa) vermek, yapı geçerliğini (faktör analizi) atlamak.",
            "Küçük sınıf/grup örneklemlerinde normallik varsayımını kontrol etmeden parametrik test kullanmak.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "ANCOVA analizi yapıyor musunuz?",
          answer:
            "Evet — ön test-son test kontrol gruplu deneysel desenlerde ANCOVA en sık çalıştığımız yöntemlerden biridir. Regresyon eğimlerinin homojenliği dahil tüm varsayımları kontrol eder, düzeltilmiş ortalamaları ve etki büyüklüğünü (kısmi eta kare) raporlarız.",
        },
        {
          question: "Yalnızca son test skorlarını t-testiyle karşılaştırmak yanlış mı?",
          answer:
            "Gruplar arasında ön test skorunda başlangıç farkı varsa evet, yanıltıcı olabilir. ANCOVA bu başlangıç farkını istatistiksel olarak kontrol ederek grupları daha adil karşılaştırır — jüriler bu noktayı sıklıkla sorgular.",
        },
        {
          question: "Tutum ölçeği geliştirme çalışmam için hangi analizler gerekiyor?",
          answer:
            "Tipik sıra: açımlayıcı faktör analizi (yapı geçerliği), Cronbach alfa ve madde-toplam korelasyonları (güvenirlik), gerekirse doğrulayıcı faktör analizi. Detaylı yorumlama için ölçek güvenilirlik analizi sayfamıza bakabilirsiniz.",
        },
        {
          question: "SPSS formatında rapor alabilir miyim?",
          answer:
            "Evet — tablolarınız ve bulgularınız SPSS kullanıcılarının ve jürilerin alışkın olduğu düzende, APA formatında hazırlanır; sonuçlar SPSS ile birebir aynıdır.",
        },
        {
          question: "Sınıf içi (tek grup) uygulama verisiyle de analiz yapılır mı?",
          answer:
            "Evet. Kontrol grubu olmayan, tek grubun öncesi-sonrası ölçüldüğü tasarımlarda bağımlı örneklem t-testi veya Wilcoxon işaretli sıralar testi kullanılır; sınırlılık olarak kontrol grubu eksikliğinin nasıl ifade edileceği konusunda da yönlendirme yaparız.",
        },
        {
          question: "Analiz ücreti ne kadar?",
          answer:
            "Fiyat, yöntem karmaşıklığına (basit t-testi ile ANCOVA veya faktör analizi aynı emek değildir) ve değişken sayısına göre belirlenir. Güncel piyasa aralıkları için istatistik analiz ücretleri sayfamıza bakabilir, kendi çalışmanız için verinizi gönderip 24 saat içinde ücretsiz ön değerlendirme alabilirsiniz.",
        },
      ],
      cta: {
        heading: "Eğitim bilimleri tez analizinizi başlatın",
        text: "Desen ve verinizi gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Education Thesis Statistics — Master's & PhD Analysis | GetBayes",
      metaDescription:
        "Statistical analysis for education dissertations: pre/post control-group experimental designs, ANCOVA, attitude and achievement scales. SPSS-compatible reporting, analysis in 15 minutes.",
      headline: "Education Thesis Statistics",
      lead: [
        "The most common design in education dissertations is a pre/post control-group experimental study measuring the effect of a teaching method or material — and ANCOVA (analysis of covariance), which controls for the baseline difference between groups, is usually the correct method, yet most thesis drafts compare groups with only an independent-samples t-test, which committees routinely question. GetBayes selects the right method for your design — ANCOVA or a mixed model for experimental designs, correlation and regression for relational studies, factor analysis for scale studies — and reports it in APA format — the analysis itself usually takes 15 minutes, and your report is in your hands the same day, often within hours or even minutes.",
        "We organize data collected via teacher/student surveys, attitude scales and achievement tests, fix items that need reverse coding, and compute subscale scores — even if your dataset arrives messy, we get it analysis-ready.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Master's and PhD education students working on a dissertation",
          "Researchers testing the effect of a teaching method or material with an experimental design",
          "Teachers and academics collecting data with attitude, motivation or self-efficacy scales",
          "Anyone running correlation/regression analysis with achievement test scores",
          "Anyone running a Turkish scale adaptation or development study",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "The analyses we run most in education research",
          columns: ["Design / question", "Typical analyses"],
          rows: [
            [
              "Pre/post control-group experimental design",
              "Analysis of covariance (ANCOVA) — comparing post-test scores while controlling for the pre-test",
            ],
            [
              "Single-group pre/post measurement",
              "Paired-samples t-test or Wilcoxon signed-rank test",
            ],
            [
              "Comparison across three or more groups (methods/classes)",
              "One-way ANOVA or Kruskal-Wallis + post-hoc tests",
            ],
            [
              "Relationship between achievement and attitude/motivation",
              "Correlation (Pearson/Spearman), multiple regression",
            ],
            [
              "Attitude/motivation scale development or adaptation",
              "Exploratory and confirmatory factor analysis, Cronbach's alpha",
            ],
            [
              "Differences by demographic variables (gender, grade level, seniority)",
              "t-test/ANOVA (continuous), chi-square (categorical)",
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
                "Tell us whether your design is experimental or relational, share your instruments and your dataset.",
            },
            {
              title: "Free assessment",
              description:
                "Within 24 hours we tell you which analyses are needed and give a clear written price.",
            },
            {
              title: "Analysis and reporting",
              description:
                "Assumption checks (including homogeneity of regression slopes for ANCOVA), correct method selection, and APA-formatted tables.",
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
          heading: "Common mistakes in education dissertations",
          intro: "These are what committees flag most — we account for them from the start:",
          items: [
            "Comparing only post-test scores with a t-test in a pre/post control-group design without controlling for the pre-test difference — the correct method is ANCOVA.",
            "Never checking the homogeneity-of-regression-slopes assumption in ANCOVA.",
            "Reporting only reliability (Cronbach's alpha) in a scale development/adaptation study while skipping construct validity (factor analysis).",
            "Using a parametric test without checking normality in small class/group samples.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Do you run ANCOVA analysis?",
          answer:
            "Yes — in pre/post control-group experimental designs, ANCOVA is one of the methods we run most. We check all assumptions including homogeneity of regression slopes, and report adjusted means and effect size (partial eta squared).",
        },
        {
          question: "Is comparing only post-test scores with a t-test wrong?",
          answer:
            "If there's a baseline difference in pre-test scores between groups, yes, it can be misleading. ANCOVA statistically controls for that baseline difference for a fairer group comparison — committees often question this point.",
        },
        {
          question: "What analyses does my attitude-scale development study need?",
          answer:
            "The typical sequence: exploratory factor analysis (construct validity), Cronbach's alpha and item-total correlations (reliability), and confirmatory factor analysis if needed. See our scale reliability analysis page for a detailed interpretation guide.",
        },
        {
          question: "Can I get the report in SPSS format?",
          answer:
            "Yes — your tables and findings are prepared in the layout SPSS users and committees are accustomed to, in APA format; results are identical to SPSS.",
        },
        {
          question: "Can you analyze single-group classroom implementation data?",
          answer:
            "Yes. For designs without a control group, where a single group is measured before and after, we use a paired-samples t-test or a Wilcoxon signed-rank test, and we also help phrase the lack of a control group as a limitation.",
        },
        {
          question: "How much does the analysis cost?",
          answer:
            "Price depends on method complexity (a simple t-test and ANCOVA or factor analysis are not the same effort) and the number of variables. See our statistical analysis pricing page for current market ranges, or send your data for a free assessment within 24 hours.",
        },
      ],
      cta: {
        heading: "Start your education dissertation analysis",
        text: "Send your design and data — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default educationStatistics;
