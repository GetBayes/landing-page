import type { Topic } from "../types";

const dentistryStatistics: Topic = {
  key: "dentistry-statistics",
  kind: "service",
  datePublished: "2026-07-12",
  dateModified: "2026-07-12",
  serviceType: "Dentistry Thesis Statistical Analysis",
  related: ["biostatistics", "sample-size", "thesis-statistics", "which-test"],
  locales: {
    tr: {
      metaTitle: "Diş Hekimliği Tez İstatistik Analizi — DUS ve Doktora | GetBayes",
      metaDescription:
        "Diş hekimliği uzmanlık ve doktora tezi için istatistik analizi: implant sağkalımı, split-mouth tasarımlar, gözlemci uyumu (kappa/ICC), periodontal indeksler, DMFT. SPSS uyumlu raporlama, analiz 15 dakikada, teslim aynı gün.",
      headline: "Diş Hekimliği Tez İstatistik Analizi",
      lead: [
        "Diş hekimliği tezleri diğer sağlık alanlarından biraz farklı istatistik gerektirir: çoğu çalışma ağzın iki yarısını (split-mouth) ya da aynı hastadaki birden çok dişi/implantı karşılaştırdığı için ölçümler bağımsız değildir, klinik indeksler zaman içinde tekrarlı ölçülür ve iki hekimin aynı vakayı ne kadar tutarlı değerlendirdiği (gözlemci uyumu) ayrıca raporlanmak zorundadır. GetBayes verinizi ve araştırma sorularınızı alır, bu bağımlılık yapısını doğru modelleyen testleri (eşleştirilmiş karşılaştırmalar, tekrarlı ölçümler, sağkalım analizi, kappa/ICC uyum katsayıları) çalıştırır ve diş hekimliği dergilerinin beklediği formatta, etki büyüklüğü ve güven aralıklarıyla raporlar — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur.",
        "İmplant ve restoratif çalışmalarda başarı/sağkalım oranları için Kaplan-Meier ve log-rank; periodontal indeksler (plak indeksi, gingival indeks, cep derinliği, klinik ataçman seviyesi) için tekrarlı ölçüm analizleri; DMFT/dmft gibi çürük sayımları için sıklıkla nonparametrik veya sayım-veri modelleri kullanırız. Örneklem küçükse (tek klinik, belirli bir hasta grubu) normallik varsayımını dikkatle kontrol eder, gerekirse nonparametrik alternatiflere geçeriz.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Diş hekimliğinde uzmanlık (DUS) tezi yürüten araştırma görevlileri",
          "Doktora ve yüksek lisans tezi yapan diş hekimliği öğrencileri",
          "İmplant, periodontoloji, ortodonti, restoratif veya endodonti alanında klinik çalışma yürüten hekimler",
          "İn-vitro çalışma yapan (bağlanma dayanımı, mikrosızıntı, materyal karşılaştırması) araştırmacılar",
          "Diş hekimliği dergisine gönderdiği makalesi istatistik revizyonu alan araştırmacılar",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Diş hekimliği araştırmalarında en sık çalıştığımız analizler",
          columns: ["Çalışma tipi / soru", "Tipik analizler"],
          rows: [
            [
              "İmplant/restorasyon başarı ve sağkalımı",
              "Kaplan-Meier sağkalım eğrisi, log-rank testi, Cox regresyon (risk faktörleri için)",
            ],
            [
              "Split-mouth tasarım (aynı hastada iki taraf)",
              "Eşleştirilmiş örneklem t-testi/Wilcoxon, tekrarlı ölçümlü veya karma model",
            ],
            [
              "İki hekim/gözlemci uyumu",
              "Cohen kappa (kategorik), sınıf içi korelasyon (ICC) ve Bland-Altman (sürekli ölçüm)",
            ],
            [
              "Periodontal indekslerin zaman içinde değişimi",
              "Tekrarlı ölçümlü ANOVA veya Friedman testi + post-hoc karşılaştırmalar",
            ],
            [
              "Çürük deneyimi (DMFT/dmft) karşılaştırması",
              "Mann-Whitney/Kruskal-Wallis veya sayım-veri modelleri (Poisson/negatif binom)",
            ],
            [
              "Materyal/teknik karşılaştırması (in-vitro)",
              "Tek/çift yönlü ANOVA + Tukey, gerekirse nonparametrik alternatif",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          steps: [
            {
              title: "Verinizi ve tasarımınızı gönderin",
              description:
                "Ölçüm verinizi ve çalışma tasarımınızı (split-mouth mu, tek grup mu, kaç zaman noktası) iletin — Excel, Google Forms çıktısı veya SPSS dosyası fark etmez.",
            },
            {
              title: "Ücretsiz ön değerlendirme",
              description:
                "24 saat içinde hangi analizlerin gerektiğini, veride düzeltilmesi gereken bir şey varsa ne olduğunu ve net fiyatı yazılı olarak bildiririz.",
            },
            {
              title: "Analiz ve raporlama",
              description:
                "Bağımlılık yapısına uygun test seçimi, normallik kontrolü, gözlemci uyumu ve etki büyüklükleriyle birlikte APA formatında tablolar hazırlanır.",
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
          heading: "Diş hekimliği tezlerinde sık karşılaşılan hatalar",
          intro: "Jürilerin ve hakemlerin en çok takıldığı noktalar şunlar — biz raporda bunları baştan gözetiriz:",
          items: [
            "Split-mouth veya aynı hastadaki çok sayıda diş/implant verisini bağımsız gözlem gibi analiz etmek — aynı hastadan gelen ölçümler bağımlıdır ve eşleştirilmiş ya da karma modelle çözülmelidir.",
            "Gözlemci uyumunu (kappa/ICC) hiç raporlamamak — diş hekimliği dergileri klinik ölçümlerde tekrarlanabilirliği görmek ister.",
            "İmplant/restorasyon başarısını basit yüzde olarak vermek, izlem süresini hesaba katmamak — sağkalım analizi (Kaplan-Meier) farklı izlem sürelerini doğru şekilde ele alır.",
            "DMFT gibi sağa çarpık sayım verilerine normal dağılım varsayan test uygulamak — bu veriler çoğunlukla nonparametrik veya sayım-veri modeli gerektirir.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Split-mouth çalışmamı nasıl analiz ediyorsunuz?",
          answer:
            "Aynı hastanın iki tarafından alınan ölçümler bağımlıdır; bu yüzden bağımsız örneklem testi yerine eşleştirilmiş (bağımlı) örneklem t-testi ya da normallik sağlanmıyorsa Wilcoxon işaretli sıralar testi kullanırız. Birden çok zaman noktası veya birden çok bölge varsa tekrarlı ölçümlü veya karma etkili model kurarız.",
        },
        {
          question: "İki hekim aynı vakaları değerlendirdi, uyumu nasıl raporluyorsunuz?",
          answer:
            "Değerlendirme kategorikse (ör. var/yok, sınıflama) Cohen kappa; sürekli bir ölçümse (ör. cep derinliği, sefalometrik mesafe) sınıf içi korelasyon katsayısı (ICC) ve Bland-Altman uyum grafiği raporlanır. Aynı hekimin tekrar ölçümleri için de aynı yöntemlerle iç-gözlemci güvenilirliği verilir.",
        },
        {
          question: "İmplant sağkalım analizi için kaç vaka gerekir?",
          answer:
            "Kesin sayı beklenen başarısızlık oranına ve izlem süresine bağlıdır; genelde olay (başarısızlık) sayısı, toplam implant sayısından daha belirleyicidir. Çalışmanızın tasarımına göre uygun örneklemi güç analizi sayfamızdaki mantıkla hesaplayabilir, etik kurul için gerekçe metnini de birlikte hazırlayabiliriz.",
        },
        {
          question: "SPSS formatında rapor alabilir miyim?",
          answer:
            "Evet — tablolarınız ve bulgularınız SPSS kullanıcılarının ve jürilerin alışkın olduğu düzende, APA formatında hazırlanır; sonuçlar SPSS ile birebir aynıdır.",
        },
        {
          question: "Hasta ve görüntü verisi kullanıyorum, gizlilik nasıl sağlanıyor?",
          answer:
            "Kimlik bilgisi içermeyen anonim veriyle çalışıyoruz; veriniz üçüncü kişilerle paylaşılmaz, yalnızca çalışmanız için kullanılır ve teslimden en geç 90 gün sonra otomatik olarak silinir — dilerseniz daha erken silinmesini talep edebilirsiniz.",
        },
        {
          question: "Analiz ücreti ne kadar?",
          answer:
            "Fiyat, çalışma tasarımının karmaşıklığına ve değişken sayısına göre belirlenir. Güncel piyasa aralıkları için istatistik analiz ücretleri sayfamıza bakabilir, kendi çalışmanız için verinizi gönderip 24 saat içinde ücretsiz ön değerlendirme alabilirsiniz.",
        },
      ],
      cta: {
        heading: "Diş hekimliği tez analizinizi başlatın",
        text: "Verinizi ve çalışma tasarımınızı gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Dentistry Thesis Statistics — Residency & PhD Analysis | GetBayes",
      metaDescription:
        "Statistical analysis for dentistry residency and PhD theses: implant survival, split-mouth designs, inter-examiner agreement (kappa/ICC), periodontal indices, DMFT. SPSS-compatible reporting, analysis in 15 minutes, same-day delivery.",
      headline: "Dentistry Thesis Statistics",
      lead: [
        "Dentistry theses need slightly different statistics from other health fields: many studies compare the two halves of the mouth (split-mouth) or several teeth/implants within the same patient, so the measurements aren't independent; clinical indices are measured repeatedly over time; and how consistently two clinicians rate the same case (examiner agreement) has to be reported separately. GetBayes takes your data and research questions, runs the tests that correctly model this dependency structure (paired comparisons, repeated measures, survival analysis, kappa/ICC agreement coefficients), and reports them in the format dental journals expect, with effect sizes and confidence intervals — the analysis itself usually takes 15 minutes, and your report is in your hands the same day, often within hours or even minutes.",
        "For implant and restorative studies we use Kaplan-Meier and log-rank for success/survival rates; repeated-measures analyses for periodontal indices (plaque index, gingival index, probing depth, clinical attachment level); and often nonparametric or count-data models for caries counts like DMFT/dmft. When the sample is small (a single clinic, a specific patient group) we carefully check the normality assumption and switch to nonparametric alternatives when needed.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Research assistants working on a dentistry specialty (residency) thesis",
          "PhD and master's students in dentistry",
          "Clinicians running studies in implantology, periodontology, orthodontics, restorative or endodontics",
          "Researchers doing in-vitro work (bond strength, microleakage, material comparison)",
          "Researchers whose manuscript to a dental journal came back with a statistics revision",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "The analyses we run most in dentistry research",
          columns: ["Study type / question", "Typical analyses"],
          rows: [
            [
              "Implant/restoration success and survival",
              "Kaplan-Meier survival curve, log-rank test, Cox regression (for risk factors)",
            ],
            [
              "Split-mouth design (two sides in one patient)",
              "Paired-samples t-test/Wilcoxon, repeated-measures or mixed model",
            ],
            [
              "Agreement between two clinicians/examiners",
              "Cohen's kappa (categorical), intraclass correlation (ICC) and Bland-Altman (continuous)",
            ],
            [
              "Change in periodontal indices over time",
              "Repeated-measures ANOVA or Friedman test + post-hoc comparisons",
            ],
            [
              "Caries experience (DMFT/dmft) comparison",
              "Mann-Whitney/Kruskal-Wallis or count-data models (Poisson/negative binomial)",
            ],
            [
              "Material/technique comparison (in-vitro)",
              "One-/two-way ANOVA + Tukey, or a nonparametric alternative when needed",
            ],
          ],
        },
        {
          type: "steps",
          heading: "How the process works",
          steps: [
            {
              title: "Send your data and design",
              description:
                "Share your measurement data and study design (split-mouth or single-group, how many time points) — Excel, a Google Forms export or an SPSS file all work.",
            },
            {
              title: "Free assessment",
              description:
                "Within 24 hours we tell you which analyses are needed, flag anything that needs cleaning in the data, and give a clear written price.",
            },
            {
              title: "Analysis and reporting",
              description:
                "Test selection matched to the dependency structure, normality checks, examiner agreement, and APA-formatted tables with effect sizes.",
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
          heading: "Common mistakes in dentistry theses",
          intro: "These are what committees and reviewers flag most — we account for them from the start:",
          items: [
            "Analyzing split-mouth data or multiple teeth/implants from one patient as independent observations — measurements from the same patient are dependent and need a paired or mixed model.",
            "Never reporting examiner agreement (kappa/ICC) — dental journals want to see reproducibility of clinical measurements.",
            "Reporting implant/restoration success as a simple percentage without accounting for follow-up time — survival analysis (Kaplan-Meier) handles differing follow-up durations correctly.",
            "Applying a test that assumes a normal distribution to right-skewed count data like DMFT — these data usually need a nonparametric or count-data model.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How do you analyze my split-mouth study?",
          answer:
            "Measurements from the two sides of the same patient are dependent, so instead of an independent-samples test we use a paired-samples t-test, or a Wilcoxon signed-rank test if normality doesn't hold. With multiple time points or multiple sites, we fit a repeated-measures or mixed-effects model.",
        },
        {
          question: "Two clinicians rated the same cases — how do you report agreement?",
          answer:
            "If the rating is categorical (e.g. present/absent, a classification) we report Cohen's kappa; if it's a continuous measurement (e.g. probing depth, a cephalometric distance) we report the intraclass correlation coefficient (ICC) and a Bland-Altman agreement plot. We can also report intra-examiner reliability from the same clinician's repeated measurements.",
        },
        {
          question: "How many cases do I need for an implant survival analysis?",
          answer:
            "The exact number depends on the expected failure rate and follow-up duration; usually the number of events (failures) matters more than the total number of implants. We can size the study using the logic on our sample size calculation page and prepare the ethics-committee justification text with you.",
        },
        {
          question: "Can I get the report in SPSS format?",
          answer:
            "Yes — your tables and findings are prepared in the layout SPSS users and committees are accustomed to, in APA format; results are identical to SPSS.",
        },
        {
          question: "I'm using patient and imaging data — how is confidentiality handled?",
          answer:
            "We work with de-identified data; your data is not shared with third parties, is used solely for your study, and is automatically deleted no later than 90 days after delivery — you can request earlier deletion at any time.",
        },
        {
          question: "How much does the analysis cost?",
          answer:
            "Price depends on the complexity of the study design and the number of variables. See our statistical analysis pricing page for current market ranges, or send your data for a free assessment within 24 hours.",
        },
      ],
      cta: {
        heading: "Start your dentistry thesis analysis",
        text: "Send your data and study design — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default dentistryStatistics;
