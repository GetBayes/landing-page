import type { Topic } from "../types";

const thesisStatistics: Topic = {
  key: "thesis-statistics",
  kind: "service",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  serviceType: "Thesis & Dissertation Statistical Analysis",
  related: ["spss-analysis", "find-statistician", "article-statistics"],
  locales: {
    tr: {
      metaTitle: "Tez İstatistik Analizi Yaptırma — Yayına Hazır Rapor | GetBayes",
      metaDescription:
        "Yüksek lisans, doktora ve uzmanlık tezleri için istatistik analizi: yöntem seçimi, SPSS uyumlu analiz ve raporlama, tablolar, grafikler ve yorumlar. Analiz 15 dakikada, teslim aynı gün.",
      headline: "Tez İstatistik Analizi",
      lead: [
        "GetBayes, yüksek lisans, doktora ve tıpta/diş hekimliğinde uzmanlık tezleri için uçtan uca istatistik analiz hizmeti sunar: verinizi inceler, araştırma sorularınıza uygun testleri seçer, analizi modern araçlarla (Python, R) yapar ve tabloları, grafikleri ve yorumlarıyla yayına hazır, SPSS uyumlu bir rapor teslim ederiz — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur.",
        "Tek yapmanız gereken verinizi ve araştırma sorularınızı paylaşmak. Hangi testin kullanılacağından emin değilseniz sorun değil; ön inceleme aşamasında veri yapınıza ve hipotezlerinize göre doğru yöntemi biz belirler, neden o yöntemi seçtiğimizi de raporda gerekçelendiririz. Veriniz dağınık olsa da endişelenmeyin: 'gidin düzeltin' demeyiz — sorunları tam olarak tespit eder, düzeltebildiklerimizi kendimiz düzeltir, çok kötü durumdaki veri setlerini bile kurtarırız. Süreç iteratiftir ve baştan sona yanınızdayız; her aşamada bize yazabilirsiniz.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Yüksek lisans tezi yazan ve analiz bölümünde desteğe ihtiyaç duyan öğrenciler",
          "Doktora tezinin bulgular bölümünü hazırlayan adaylar",
          "Tıpta ve diş hekimliğinde uzmanlık tezi yürüten hekimler",
          "Hemşirelik, psikoloji, eğitim bilimleri ve sosyal bilimler alanlarında araştırma yapanlar",
          "Danışmanı 'istatistiklerini bir uzmana yaptır' diyen tüm lisansüstü öğrenciler",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          intro:
            "Dört adımda veriden yayına hazır bulgular bölümüne ulaşırsınız:",
          steps: [
            {
              title: "Verinizi ve sorularınızı paylaşın",
              description:
                "Veri setinizi (Excel, SPSS, CSV…) ve araştırma sorularınızı ya da hipotezlerinizi iletin. Anket formu, tez önerisi gibi destekleyici belgeler süreci hızlandırır.",
            },
            {
              title: "Ön inceleme ve yöntem seçimi",
              description:
                "Verinizi eksik gözlem, kodlama hatası ve varsayım ihlalleri açısından tarar, düzeltebildiğimiz sorunları kendimiz düzeltiriz; örneklem yapınıza ve hipotezlerinize uygun istatistiksel testleri belirleriz.",
            },
            {
              title: "Analiz",
              description:
                "Tanımlayıcı istatistiklerden çıkarımsal testlere kadar tüm analizler yapılır: normallik kontrolü, uygun parametrik/nonparametrik test seçimi, etki büyüklükleri ve güven aralıkları dahil.",
            },
            {
              title: "Yayına hazır rapor",
              description:
                "Tez formatına uygun tablolar, grafikler ve akademik dille yazılmış yorumlar içeren raporunuzu teslim alırsınız. Sorularınız için Soru-Cevap desteği devam eder.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Raporunuzda neler yer alır?",
          items: [
            "Tanımlayıcı istatistikler: frekans tabloları, ortalama, standart sapma, medyan",
            "Varsayım kontrolleri: normallik testleri (Shapiro-Wilk, Kolmogorov-Smirnov), varyans homojenliği",
            "Araştırma sorularınıza uygun çıkarımsal testler ve gerekçeleri",
            "APA veya kurumunuzun tez yazım kılavuzuna uygun tablolar ve grafikler",
            "Etki büyüklükleri (Cohen's d, η², r) ve %95 güven aralıkları",
            "Her bulgunun akademik dille yazılmış, teze doğrudan aktarılabilir yorumu",
          ],
        },
        {
          type: "table",
          heading: "Hangi analizleri yapıyoruz?",
          intro:
            "Araştırma tasarımınıza göre en sık kullanılan yöntemlerden bazıları:",
          columns: ["Araştırma sorusu", "Tipik yöntem"],
          rows: [
            ["İki grup ortalaması farklı mı?", "Bağımsız örneklem t-testi / Mann-Whitney U"],
            ["Ölçüm öncesi-sonrası fark var mı?", "Eşleştirilmiş t-testi / Wilcoxon işaretli sıra"],
            ["Üç ve daha fazla grup karşılaştırması", "ANOVA / Kruskal-Wallis (post-hoc testlerle)"],
            ["İki kategorik değişken ilişkili mi?", "Ki-kare testi / Fisher'ın kesin testi"],
            ["Değişkenler arasında ilişki var mı?", "Pearson / Spearman korelasyonu"],
            ["Bir sonucu hangi değişkenler yordar?", "Çoklu doğrusal / lojistik regresyon"],
            ["Ölçek geçerlik-güvenirliği", "Cronbach alfa, açımlayıcı/doğrulayıcı faktör analizi"],
          ],
        },
        {
          type: "paragraphs",
          heading: "Gizlilik ve akademik etik",
          body: [
            "Veriniz ve teziniz üçüncü kişilerle paylaşılmaz; analiz tamamlandıktan sonra talep etmeniz hâlinde dosyalarınız silinir. Hizmetimiz analizin doğru yapılması ve bulguların doğru raporlanması üzerinedir — tezin yazarı sizsiniz, biz istatistik uzmanı olarak destekleriz. Raporda kullanılan her yöntemin gerekçesi açıkça yazıldığı için jüri önünde 'bu testi neden kullandın?' sorusuna hazırlıklı olursunuz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Tez istatistik analizi ne kadar sürer?",
          answer:
            "Analizin kendisi, veri ve araştırma soruları netleştikten sonra çoğunlukla 15 dakika sürer; raporunuzu aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim ederiz. Toplam süreyi genellikle sürecin iteratif doğası belirler: eksik bilgiler, veri düzeltmeleri, ekleme ve çıkarmalar sizinle birlikte tamamlanır — bu süreç boyunca her aşamada bize yazabilirsiniz. Karmaşık modeller (örn. doğrulayıcı faktör analizi, karma modeller) içeren tezlerde süre birlikte planlanır.",
        },
        {
          question: "Hangi testi kullanacağımı bilmiyorum, sorun olur mu?",
          answer:
            "Hayır. En sık aldığımız durum budur: araştırma sorularınızı ve verinizi paylaşmanız yeterli. Ön inceleme aşamasında veri tipinize, grup sayınıza ve dağılıma göre doğru testi biz belirler, seçimin gerekçesini raporda yazarız.",
        },
        {
          question: "Verilerim ve tezim gizli kalır mı?",
          answer:
            "Evet. Dosyalarınız yalnızca analiziniz için kullanılır, üçüncü kişilerle paylaşılmaz ve talebiniz hâlinde teslimat sonrası silinir.",
        },
        {
          question: "Danışmanım veya jüri düzeltme isterse ne oluyor?",
          answer:
            "Revizyon sürecinde yanınızdayız. Jüri ya da danışman ek analiz veya farklı bir gösterim isterse aynı veri üzerinde gerekli güncellemeleri yaparız.",
        },
        {
          question: "Analiz çıktılarını ve veri setini de alabilir miyim?",
          answer:
            "Evet. Rapora ek olarak tüm tablo ve grafiklerin dosyalarını ve istediğinizde veri setinizin analize hazırlanmış hâlini de teslim ediyoruz. Analizler SPSS ile birebir aynı sonuçları veren modern araçlarla (Python, R) yapılır ve SPSS kullanıcılarının alışkın olduğu formatta raporlanır.",
        },
        {
          question: "Ücret neye göre belirleniyor?",
          answer:
            "Analiz kapsamına göre: araştırma sorusu sayısı, ölçek/değişken sayısı ve yöntemlerin karmaşıklığı fiyatı belirler. Verinizi ve sorularınızı ilettiğinizde 24 saat içinde ücretsiz ön değerlendirme ve net fiyat veririz.",
        },
      ],
      cta: {
        heading: "Tezinizin analizini bugün başlatın",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirme ile dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Thesis Statistical Analysis Service — Publication-Ready | GetBayes",
      metaDescription:
        "Statistical analysis for master's, PhD and medical specialty theses: method selection, SPSS-compatible analysis and reporting, tables, figures and interpretation. Analysis in 15 minutes, same-day delivery.",
      headline: "Thesis & Dissertation Statistical Analysis",
      lead: [
        "GetBayes provides end-to-end statistical analysis for master's theses, PhD dissertations and medical specialty theses: we review your data, select the tests that fit your research questions, run the analysis with modern tools (Python, R), and deliver a publication-ready, SPSS-compatible report with tables, figures and interpretation — the analysis itself usually takes 15 minutes, and your report reaches you the same day, often within hours or even minutes.",
        "All you need to share is your data and your research questions. Not sure which test applies? That's normal — during the initial review we determine the right method for your data structure and hypotheses, and justify the choice in the report. Messy data is no problem either: we don't send you away to \"go fix it\" — we pinpoint the issues, fix what we can ourselves, and rescue even datasets in very poor shape. The process is iterative and we're with you from start to finish; you can write to us at every step.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Master's students who need support with the analysis chapter",
          "PhD candidates preparing the results chapter of a dissertation",
          "Physicians and dentists working on specialty theses",
          "Researchers in nursing, psychology, education and the social sciences",
          "Any graduate student whose advisor said “have a statistician look at this”",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "How the process works",
          intro: "Four steps from raw data to a publication-ready results chapter:",
          steps: [
            {
              title: "Share your data and questions",
              description:
                "Send your dataset (Excel, SPSS, CSV…) and your research questions or hypotheses. Supporting documents like your survey form or proposal speed things up.",
            },
            {
              title: "Initial review and method selection",
              description:
                "We screen your data for missing values, coding errors and assumption violations, fix what we can ourselves, then determine the statistical tests that fit your design and hypotheses.",
            },
            {
              title: "Analysis",
              description:
                "Everything from descriptives to inferential tests: normality checks, the right parametric or nonparametric choice, effect sizes and confidence intervals included.",
            },
            {
              title: "Publication-ready report",
              description:
                "You receive a report with thesis-formatted tables, figures and academically written interpretation. Q&A support continues after delivery.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "What your report contains",
          items: [
            "Descriptive statistics: frequency tables, means, standard deviations, medians",
            "Assumption checks: normality tests (Shapiro-Wilk, Kolmogorov-Smirnov), homogeneity of variance",
            "Inferential tests matched to your research questions, with justification",
            "Tables and figures formatted to APA or your institution's thesis guide",
            "Effect sizes (Cohen's d, η², r) and 95% confidence intervals",
            "Interpretation written in academic language, ready to adapt into your thesis",
          ],
        },
        {
          type: "table",
          heading: "Which analyses do we run?",
          intro: "Some of the most common methods, by research question:",
          columns: ["Research question", "Typical method"],
          rows: [
            ["Do two group means differ?", "Independent-samples t-test / Mann-Whitney U"],
            ["Is there a pre-post difference?", "Paired t-test / Wilcoxon signed-rank"],
            ["Comparing three or more groups", "ANOVA / Kruskal-Wallis (with post-hoc tests)"],
            ["Are two categorical variables related?", "Chi-square test / Fisher's exact test"],
            ["Is there an association between variables?", "Pearson / Spearman correlation"],
            ["Which variables predict an outcome?", "Multiple linear / logistic regression"],
            ["Scale validity and reliability", "Cronbach's alpha, exploratory/confirmatory factor analysis"],
          ],
        },
        {
          type: "paragraphs",
          heading: "Confidentiality and academic integrity",
          body: [
            "Your data and thesis are never shared with third parties, and your files are deleted after delivery on request. Our service is about running the analysis correctly and reporting the findings accurately — you remain the author of your thesis; we support you as statistical experts. Because every method choice is justified in writing, you'll be ready when the committee asks “why did you use this test?”",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How long does thesis statistical analysis take?",
          answer:
            "The analysis itself usually takes 15 minutes once the data and research questions are clear; we deliver your report the same day, often within hours or even minutes. Total time is mostly set by the iterative nature of the process: missing information, data corrections, additions and removals are completed together with you — and you can write to us at every step. Theses with complex models (e.g. confirmatory factor analysis, mixed models) are scheduled together with you.",
        },
        {
          question: "I don't know which test to use — is that a problem?",
          answer:
            "Not at all; it's the most common situation. Share your research questions and data, and we determine the right test based on your data type, number of groups and distribution — with the justification written into the report.",
        },
        {
          question: "Will my data and thesis remain confidential?",
          answer:
            "Yes. Your files are used only for your analysis, never shared with third parties, and deleted after delivery if you request it.",
        },
        {
          question: "What if my advisor or committee requests revisions?",
          answer:
            "We support you through revisions. If the committee asks for additional analyses or a different presentation, we update the work on the same dataset.",
        },
        {
          question: "Can I also get the analysis outputs and the dataset?",
          answer:
            "Yes. Alongside the report we deliver the files for all tables and figures and, on request, the cleaned analysis-ready version of your dataset. Analyses run in modern tools (Python, R) that produce results identical to SPSS, reported in the format SPSS users are accustomed to.",
        },
        {
          question: "How is the price determined?",
          answer:
            "By scope: the number of research questions, variables/scales, and the complexity of the methods. Send your data and questions and we'll reply within 24 hours with a free assessment and a clear quote.",
        },
      ],
      cta: {
        heading: "Start your thesis analysis today",
        text: "Send your data and research questions — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default thesisStatistics;
