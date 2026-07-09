import type { Topic } from "../types";

const surveyAnalysis: Topic = {
  key: "survey-analysis",
  kind: "service",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  serviceType: "Survey Data Analysis Service",
  related: ["spss-analysis", "thesis-statistics", "sample-size"],
  locales: {
    tr: {
      metaTitle:
        "Anket Analizi Yaptırma — Likert Ölçeği ve Anket Veri Analizi | GetBayes",
      metaDescription:
        "Anket analizi yaptırma hizmeti: Google Forms veya Excel verinizi gönderin; ters kodlama, ölçek puanları, güvenirlik, grup karşılaştırmaları ve APA tablolarıyla aynı gün teslim.",
      headline: "Anket Analizi Hizmeti",
      lead: [
        "Anket analizi yaptırmak istiyorsanız süreç şöyle işler: Google Forms, SurveyMonkey veya Excel'deki anket verinizi anket formunuzla birlikte gönderirsiniz; biz veri girişini kontrol eder, ters kodlanması gereken maddeleri düzeltir, ölçek ve alt boyut puanlarını hesaplar, araştırma sorularınıza uygun testleri çalıştırır ve APA formatında tablolar, grafikler ve akademik yorumlarla teslim ederiz. Analizin kendisi çoğunlukla 15 dakika sürer; raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinize geçer.",
        "İstatistik bilmenize, SPSS lisansınızın olmasına ya da veriyi analize hazır hâle getirmenize gerek yok. Dağınık, eksik yanıtlı veya kâğıttan girilmiş veri setleri de dahil — sorunları tek tek işaret edip 'gidin düzeltin' demeyiz; düzeltebildiğimizi kendimiz düzeltir, veriyi sizinle birlikte toparlarız.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Anket verisini toplamış, analiz aşamasında takılan yüksek lisans ve doktora öğrencileri",
          "Bitirme projesi veya TÜBİTAK projesi için anket çalışması yürüten lisans öğrencileri",
          "Likert ölçekli anketinin güvenirlik ve geçerlik analizine ihtiyacı olan araştırmacılar",
          "Müşteri, çalışan veya öğrenci memnuniyeti anketini raporlaması gereken kurumlar",
          "Anketi hazır ama 'şimdi bu veriyle ne yapacağım' aşamasında olan herkes",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Anket analizi süreci",
          steps: [
            {
              title: "Verinizi ve anket formunuzu gönderin",
              description:
                "Google Forms/SurveyMonkey dışa aktarımı, Excel veya CSV — hangi formatta olursa olsun verinizi, anket sorularınızı ve araştırma sorularınızı iletin.",
            },
            {
              title: "Ön inceleme ve veri hazırlığı",
              description:
                "Eksik ve tutarsız yanıtlar taranır, ters maddeler yeniden kodlanır, ölçek toplam ve alt boyut puanları hesaplanır, uç değerler incelenir. Dağınık veri setlerini bile analize hazır hâle getiririz.",
            },
            {
              title: "Analiz ve tablolar",
              description:
                "Demografik dağılımlar çıkarılır, güvenirlik analizi yapılır, normallik test edilir ve araştırma sorularınıza uygun karşılaştırma/ilişki testleri çalıştırılır; sonuçlar APA formatında tablolara dönüştürülür.",
            },
            {
              title: "Teslim ve devam eden destek",
              description:
                "Yorumlu rapor, tüm tablo ve grafikler ve temizlenmiş veri setiniz teslim edilir. Revizyonlar ücretsizdir; savunma veya sunum öncesi sorularınız için her aşamada bize yazabilirsiniz.",
            },
          ],
        },
        {
          type: "table",
          heading: "Anket verisinde en sık çalıştığımız analizler",
          columns: ["Analiz", "Anketinizde ne işe yarar?"],
          rows: [
            [
              "Frekans ve betimsel istatistikler",
              "Katılımcı profili ve maddelere verilen yanıtların dağılımı için",
            ],
            [
              "Güvenirlik analizi (Cronbach alfa)",
              "Likert ölçeğinizin iç tutarlılığını raporlamak için",
            ],
            [
              "Açımlayıcı faktör analizi (AFA)",
              "Ölçeğinizin yapı geçerliğini ve alt boyutlarını incelemek için",
            ],
            [
              "Bağımsız örneklem t-testi",
              "İki grubun (ör. kadın–erkek) ölçek puanlarını karşılaştırmak için",
            ],
            [
              "Tek yönlü ANOVA + post-hoc",
              "Üç ve daha fazla grubu (ör. yaş grupları) karşılaştırmak için",
            ],
            [
              "Ki-kare testi",
              "Kategorik anket soruları arasındaki ilişki için",
            ],
            [
              "Korelasyon ve regresyon",
              "Ölçekler arası ilişkiler ve yordayıcıları bulmak için",
            ],
            [
              "Mann-Whitney U / Kruskal-Wallis",
              "Normallik sağlanmadığında grup karşılaştırması için",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Likert ölçeği verisi nasıl analiz edilir?",
          body: [
            "Likert tipi anketlerde analiz iki düzeyde yürür. Madde düzeyinde her ifadenin frekansları, ortalaması ve standart sapması raporlanır — 'katılıyorum/katılmıyorum' dağılımlarını gösteren betimsel tablolar buradan çıkar. Ölçek düzeyinde ise maddeler toplanarak veya ortalaması alınarak ölçek ve alt boyut puanları hesaplanır; asıl hipotez testleri (t-testi, ANOVA, korelasyon, regresyon) bu puanlar üzerinde çalıştırılır. Ters ifadeli maddelerin puanlamadan önce yeniden kodlanması ve ölçeğin güvenirliğinin (Cronbach alfa) raporlanması bu sürecin standart adımlarıdır — anketinizde biz tüm bu adımları sizin yerinize yürütür, hangi maddeyi neden ters kodladığımızı raporda açıkça gösteririz.",
          ],
        },
        {
          type: "bullets",
          heading: "Hangi formatta veri kabul ediyoruz?",
          intro:
            "Veriyi bir programa aktarmanız veya biçimlendirmeniz gerekmez — elinizdeki hâliyle gönderin:",
          items: [
            "Google Forms, SurveyMonkey ve Microsoft Forms dışa aktarımları (Excel/CSV)",
            "Excel'de elle girilmiş veri — kâğıt anketten aktarılmış olsa bile",
            "SPSS .sav dosyaları",
            "CSV, JSON ve diğer yaygın veri formatları",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Anket analizi yaptırmak ne kadar tutar?",
          answer:
            "Fiyat anketin kapsamına göre belirlenir: ölçek ve değişken sayısı, araştırma sorusu sayısı ve yöntemlerin karmaşıklığı. Verinizi gönderdiğinizde 24 saat içinde ücretsiz ön değerlendirme ve yazılı net fiyat iletiyoruz. Fiyat teslim hızından ve revizyonlardan bağımsızdır — revizyonlar ücretsizdir, aciliyet ek ücret doğurmaz.",
        },
        {
          question: "Kaç katılımcı yeterli, örneklemim küçük mü?",
          answer:
            "Yeterli katılımcı sayısı kullanılacak analizlere bağlıdır: basit grup karşılaştırmaları görece küçük örneklemlerle çalışabilirken faktör analizi daha fazla katılımcı ister. Verinizi gönderdiğinizde ön incelemede örnekleminizin hangi analizlere elverdiğini söyler, gerekiyorsa alternatif yöntem öneririz. Henüz veri toplamadıysanız örneklem büyüklüğü hesaplama hizmetimizle baştan doğru sayıyı belirleyebilirsiniz.",
        },
        {
          question: "Verim Google Forms'ta — doğrudan gönderebilir miyim?",
          answer:
            "Evet. Google Forms'un Excel veya CSV dışa aktarımını olduğu gibi gönderin; sütun düzenini, değişken tanımlamalarını ve kodlamayı biz yaparız.",
        },
        {
          question: "Likert verisiyle t-testi, ANOVA yapılabilir mi?",
          answer:
            "Ölçek ve alt boyut puanları üzerinden evet — yaygın akademik pratik budur. Normallik varsayımını test eder, sağlanmıyorsa Mann-Whitney U veya Kruskal-Wallis gibi nonparametrik karşılıklarını kullanırız; raporda hangi testin neden seçildiği gerekçesiyle yer alır.",
        },
        {
          question: "Anket verilerim ve katılımcı bilgileri güvende mi?",
          answer:
            "Evet. Verileriniz yalnızca analiziniz için kullanılır, üçüncü taraflarla paylaşılmaz ve talep ettiğinizde kalıcı olarak silinir. Katılımcı kimliklerini içeren sütunlar analiz için gerekli değilse hiç göndermemenizi de önerebiliriz.",
        },
        {
          question: "Analiz ne kadar sürede teslim edilir?",
          answer:
            "Analizin kendisi çoğunlukla 15 dakika sürer; raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim edilir. Toplam süreyi genellikle sürecin iteratif doğası belirler — eksikler, düzeltmeler ve eklemeler sizinle birlikte tamamlanır ve her aşamada bize yazabilirsiniz.",
        },
      ],
      cta: {
        heading: "Anket analizinizi başlatın",
        text: "Anket verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "Survey Analysis Service — Likert Scale & Questionnaire Data | GetBayes",
      metaDescription:
        "Survey data analysis service: send your Google Forms or Excel data; reverse coding, scale scores, reliability, group comparisons and APA tables — delivered the same day.",
      headline: "Survey Analysis Service",
      lead: [
        "If you need your survey data analyzed, the process is simple: you send your questionnaire data from Google Forms, SurveyMonkey or Excel together with the survey form; we check the data entry, reverse-code items where needed, compute scale and subscale scores, run the tests that fit your research questions, and deliver APA-formatted tables, figures and academic interpretation. The analysis itself usually takes 15 minutes; your report is delivered the same day, often within hours or even minutes.",
        "You don't need to know statistics, own an SPSS license, or prepare the data yourself. Messy datasets, missing responses, paper-survey entries — we don't point at problems and say 'go fix this'; we fix what we can ourselves and get the data ready together with you.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Master's and PhD students who collected survey data and are stuck at the analysis stage",
          "Undergraduates running a survey study for a capstone or research project",
          "Researchers who need reliability and validity analysis for a Likert-scale questionnaire",
          "Organizations reporting customer, employee or student satisfaction surveys",
          "Anyone whose survey is done but is now asking 'what do I do with this data?'",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "The survey analysis process",
          steps: [
            {
              title: "Send your data and survey form",
              description:
                "Google Forms/SurveyMonkey export, Excel or CSV — share your data in whatever format you have, along with your questionnaire and research questions.",
            },
            {
              title: "Initial review and data preparation",
              description:
                "Missing and inconsistent responses are screened, reverse-worded items are recoded, scale and subscale scores are computed, and outliers are examined. Even messy datasets get analysis-ready.",
            },
            {
              title: "Analysis and tables",
              description:
                "Demographic breakdowns, reliability analysis, normality checks, then the comparison and association tests that fit your research questions — all turned into APA-formatted tables.",
            },
            {
              title: "Delivery and ongoing support",
              description:
                "You receive an interpreted report, all tables and figures, and your cleaned dataset. Revisions are free, and you can write to us at every step before your defense or presentation.",
            },
          ],
        },
        {
          type: "table",
          heading: "The analyses we run most often on survey data",
          columns: ["Analysis", "What it does for your survey"],
          rows: [
            [
              "Frequencies and descriptive statistics",
              "Participant profile and response distributions per item",
            ],
            [
              "Reliability analysis (Cronbach's alpha)",
              "To report your Likert scale's internal consistency",
            ],
            [
              "Exploratory factor analysis (EFA)",
              "To examine your scale's construct validity and subscales",
            ],
            [
              "Independent-samples t-test",
              "To compare scale scores between two groups (e.g. by gender)",
            ],
            [
              "One-way ANOVA + post-hoc",
              "To compare three or more groups (e.g. age groups)",
            ],
            [
              "Chi-square test",
              "For associations between categorical survey questions",
            ],
            [
              "Correlation and regression",
              "For relationships between scales and finding predictors",
            ],
            [
              "Mann-Whitney U / Kruskal-Wallis",
              "Group comparisons when normality fails",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "How is Likert-scale data analyzed?",
          body: [
            "Likert-type surveys are analyzed at two levels. At the item level, each statement's frequencies, mean and standard deviation are reported — this produces the descriptive tables showing agree/disagree distributions. At the scale level, items are summed or averaged into scale and subscale scores, and the actual hypothesis tests (t-tests, ANOVA, correlation, regression) run on those scores. Recoding reverse-worded items before scoring and reporting the scale's reliability (Cronbach's alpha) are standard steps in this process — we handle all of them for your survey and show clearly in the report which items were reverse-coded and why.",
          ],
        },
        {
          type: "bullets",
          heading: "What data formats do we accept?",
          intro:
            "No need to import or reformat anything — send the data as you have it:",
          items: [
            "Google Forms, SurveyMonkey and Microsoft Forms exports (Excel/CSV)",
            "Data entered by hand in Excel — including transfers from paper surveys",
            "SPSS .sav files",
            "CSV, JSON and other common data formats",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How much does survey analysis cost?",
          answer:
            "Pricing depends on scope: the number of scales and variables, research questions, and method complexity. Send your data and we'll reply within 24 hours with a free assessment and a written fixed quote. The price is independent of delivery speed and revisions — revisions are free, and urgency never costs extra.",
        },
        {
          question: "How many participants are enough — is my sample too small?",
          answer:
            "It depends on the analyses: simple group comparisons can work with relatively small samples, while factor analysis needs more participants. When you send your data, the initial review tells you which analyses your sample supports, and we suggest alternatives where needed. If you haven't collected data yet, our sample size calculation service helps you set the right number from the start.",
        },
        {
          question: "My data is in Google Forms — can I send it directly?",
          answer:
            "Yes. Send the Excel or CSV export from Google Forms as is; we handle the column layout, variable definitions and coding.",
        },
        {
          question: "Can t-tests and ANOVA be used on Likert data?",
          answer:
            "On scale and subscale scores, yes — that is the common academic practice. We test the normality assumption and, where it fails, use nonparametric counterparts like Mann-Whitney U or Kruskal-Wallis; the report states which test was chosen and why.",
        },
        {
          question: "Is my survey data and participant information safe?",
          answer:
            "Yes. Your data is used only for your analysis, never shared with third parties, and permanently deleted on request. If columns identifying participants aren't needed for the analysis, we may suggest not sending them at all.",
        },
        {
          question: "How fast is delivery?",
          answer:
            "The analysis itself usually takes 15 minutes; your report is delivered the same day, often within hours or even minutes. Total time is mostly set by the iterative nature of the process — gaps, corrections and additions are completed together with you, and you can write to us at every step.",
        },
      ],
      cta: {
        heading: "Start your survey analysis",
        text: "Send your survey data and research questions — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default surveyAnalysis;
