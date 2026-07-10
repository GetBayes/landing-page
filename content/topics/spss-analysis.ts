import type { Topic } from "../types";

const spssAnalysis: Topic = {
  key: "spss-analysis",
  kind: "service",
  datePublished: "2026-07-08",
  dateModified: "2026-07-10",
  serviceType: "SPSS Data Analysis Service",
  related: ["thesis-statistics", "article-statistics", "find-statistician", "reliability-analysis"],
  locales: {
    tr: {
      metaTitle: "SPSS Analizi Yaptırma — Tez ve Makale Veri Analizi | GetBayes",
      metaDescription:
        "SPSS analizi yaptırma hizmeti: veri hazırlığı, doğru test seçimi, APA formatında tablolar ve yorumlar. SPSS lisansı gerekmez — analiz 15 dakikada, teslim aynı gün.",
      headline: "SPSS Analizi Hizmeti",
      lead: [
        "Teziniz, makaleniz veya projeniz için SPSS analizi yaptırmak istiyorsanız süreç şöyle işler: verinizi gönderirsiniz, biz veri setini analize hazırlar, araştırma sorularınıza uygun testleri çalıştırır ve APA formatında tablolar, grafikler ve akademik yorumlarla birlikte teslim ederiz. Sonuçlar SPSS ile birebir aynıdır ve SPSS kullanıcılarının alışkın olduğu formatta raporlanır — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim edilir.",
        "SPSS bilmenize ya da lisansınızın olmasına gerek yok. Anket verinizi Excel'de topladıysanız da sorun değil: veri girişini kontrol eder, ters kodlanması gereken maddeleri düzeltir, ölçek puanlarını hesaplar ve analizi baştan sona yürütürüz.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Anket verisini toplamış, SPSS'te analiz aşamasında takılan lisansüstü öğrenciler",
          "Danışmanı 'analizleri SPSS ile yap' diyen tez öğrencileri",
          "Makalesi için SPSS çıktısı ve APA tabloları gereken araştırmacılar",
          "Ölçek geçerlik-güvenirlik analizi (Cronbach alfa, faktör analizi) gerekenler",
          "SPSS lisansı veya deneyimi olmayan ama sonuca ihtiyacı olan herkes",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "SPSS analiz süreci",
          steps: [
            {
              title: "Veriyi gönderin",
              description:
                "Excel, CSV veya .sav formatında verinizi ve anket formunuzu/araştırma sorularınızı iletin.",
            },
            {
              title: "Ön inceleme ve veri hazırlığı",
              description:
                "Eksik veri kontrolü, ters madde kodlaması, ölçek toplam/alt boyut puanlarının hesaplanması ve uç değer incelemesi yapılır. Düzeltebildiğimiz sorunları kendimiz düzeltir, dağınık veri setlerini bile analize hazır hâle getiririz.",
            },
            {
              title: "Analiz ve tablolar",
              description:
                "Normallik varsayımı test edilir, uygun parametrik/nonparametrik testler çalıştırılır; sonuçlar APA formatında tablolara dönüştürülür.",
            },
            {
              title: "Teslim",
              description:
                "Yorumlu rapor, tüm tablo ve grafikler ve analize hazır hâle getirilmiş veri setiniz elinize geçer. Sorularınız için destek devam eder.",
            },
          ],
        },
        {
          type: "table",
          heading: "SPSS analizi kapsamında en sık çalıştığımız testler",
          columns: ["Analiz", "Ne zaman kullanılır?"],
          rows: [
            ["Güvenirlik analizi (Cronbach alfa)", "Ölçeğin iç tutarlılığını raporlamak için"],
            ["Açımlayıcı faktör analizi (AFA)", "Ölçeğin yapı geçerliğini incelemek için"],
            ["Bağımsız örneklem t-testi", "İki grubun ortalamalarını karşılaştırmak için"],
            ["Tek yönlü ANOVA + post-hoc", "Üç ve daha fazla grubu karşılaştırmak için"],
            ["Ki-kare testi", "Kategorik değişkenler arasındaki ilişki için"],
            ["Korelasyon (Pearson/Spearman)", "İki sürekli değişkenin ilişkisi için"],
            ["Çoklu regresyon", "Bir bağımlı değişkeni yordayanları bulmak için"],
            ["Mann-Whitney U / Kruskal-Wallis", "Normallik sağlanmadığında grup karşılaştırması için"],
          ],
        },
        {
          type: "paragraphs",
          heading: "SPSS mi, Python mu, R mi — fark eder mi?",
          body: [
            "Sonuçlar açısından hayır: bağımsız örneklem t-testi, ANOVA veya regresyon hangi araçla çalıştırılırsa çalıştırılsın aynı matematiği kullanır ve aynı sonucu verir. Türkiye'de tez jürileri ve birçok dergi SPSS raporlama düzenine alışkın olduğu için tablolarınızı o standartta hazırlarız; analizleri ise SPSS'in sınırlarına takılmayan modern araçlarla (ağırlıklı Python ve R) yürütürüz. Bu bize gelişmiş modeller, güç analizi simülasyonları ve çok daha hızlı teslim imkânı verir — sizin için önemli olan araç değil, doğru yöntem, doğru sonuç ve savunulabilir raporlamadır.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "SPSS analizi ücreti ne kadar?",
          answer:
            "Fiyat analiz kapsamına göre belirlenir: değişken ve ölçek sayısı, araştırma sorusu sayısı ve yöntemlerin karmaşıklığı. Verinizi gönderdiğinizde 24 saat içinde ücretsiz ön değerlendirme ve net fiyat iletiyoruz.",
        },
        {
          question: "Verim Excel'de — SPSS'e aktarmam gerekir mi?",
          answer:
            "Hayır, gerek yok. Excel, CSV veya .sav dosyanızı olduğu gibi gönderin; veri aktarımını, değişken tanımlamalarını ve kodlamayı biz yaparız.",
        },
        {
          question: "SPSS formatında raporlama mı yapıyorsunuz?",
          answer:
            "Evet — tablolarınız ve bulgularınız, SPSS kullanıcılarının ve jürilerin alışkın olduğu düzende, APA formatında hazırlanır. Analiz altyapımızda modern istatistik araçlarından da yararlanırız; hangi test hangi araçla çalışırsa çalışsın sonuçlar birebir aynıdır ve yöntem bölümü için gereken yazılım bilgisi raporda eksiksiz yer alır.",
        },
        {
          question: "Analiz ne kadar sürede teslim edilir?",
          answer:
            "Analizin kendisi çoğunlukla 15 dakika sürer; raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim edilir. Toplam süreyi genellikle sürecin iteratif doğası belirler — eksikler, düzeltmeler ve eklemeler sizinle birlikte tamamlanır ve her aşamada bize yazabilirsiniz. Faktör analizi gibi çok aşamalı işlerde süreyi baştan netleştiririz.",
        },
        {
          question: "Ölçek geçerlik ve güvenirlik analizi yapıyor musunuz?",
          answer:
            "Evet. Cronbach alfa, madde-toplam korelasyonları, açımlayıcı faktör analizi ve gerektiğinde doğrulayıcı faktör analizi ile ölçeğinizin psikometrik özelliklerini raporluyoruz.",
        },
        {
          question: "Sonuçları anlamazsam yardım alabilir miyim?",
          answer:
            "Elbette. Teslimden sonra raporunuz, yöntemleriniz ve sonuçlarınız hakkında istediğiniz soruyu sorabilirsiniz — savunma veya danışman görüşmesi öncesi hazırlanmanıza destek oluruz.",
        },
      ],
      cta: {
        heading: "SPSS analizinizi başlatın",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "SPSS Analysis Service — Thesis & Survey Data Analysis | GetBayes",
      metaDescription:
        "SPSS analysis service: data preparation, correct test selection, APA-formatted tables and interpretation. No SPSS license needed — analysis in 15 minutes, same-day delivery.",
      headline: "SPSS Analysis Service",
      lead: [
        "If you need SPSS analysis for your thesis, article or project, the process is simple: you send your data, we prepare the dataset, run the tests that fit your research questions, and deliver APA-formatted tables, figures and academic interpretation. Results are identical to SPSS and reported in the layout SPSS users are accustomed to — the analysis itself usually takes 15 minutes, and your report is delivered the same day, often within hours or even minutes.",
        "You don't need to know SPSS or own a license. Collected your survey data in Excel? No problem: we check the data entry, reverse-code items where needed, compute scale scores and run the full analysis end to end.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Graduate students stuck at the SPSS analysis stage of a survey study",
          "Thesis students whose advisor requires SPSS-based analysis",
          "Researchers who need SPSS output and APA tables for a manuscript",
          "Anyone needing scale validity-reliability analysis (Cronbach's alpha, factor analysis)",
          "Anyone without an SPSS license or experience who still needs results",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "The SPSS analysis process",
          steps: [
            {
              title: "Send your data",
              description:
                "Share your data in Excel, CSV or .sav format together with your survey form or research questions.",
            },
            {
              title: "Initial review and data preparation",
              description:
                "Missing-data checks, reverse coding, computing scale and subscale scores, and outlier screening. We fix what we can ourselves and get even messy datasets analysis-ready.",
            },
            {
              title: "Analysis and tables",
              description:
                "Normality is tested, the appropriate parametric or nonparametric tests are run, and results are turned into APA-formatted tables.",
            },
            {
              title: "Delivery",
              description:
                "You receive an interpreted report, all tables and figures, and your dataset prepared for analysis. Support continues for your questions.",
            },
          ],
        },
        {
          type: "table",
          heading: "The tests we run most often for SPSS analysis requests",
          columns: ["Analysis", "When it's used"],
          rows: [
            ["Reliability analysis (Cronbach's alpha)", "To report a scale's internal consistency"],
            ["Exploratory factor analysis (EFA)", "To examine a scale's construct validity"],
            ["Independent-samples t-test", "To compare the means of two groups"],
            ["One-way ANOVA + post-hoc", "To compare three or more groups"],
            ["Chi-square test", "For associations between categorical variables"],
            ["Correlation (Pearson/Spearman)", "For the relationship between two continuous variables"],
            ["Multiple regression", "To find predictors of an outcome variable"],
            ["Mann-Whitney U / Kruskal-Wallis", "Group comparisons when normality fails"],
          ],
        },
        {
          type: "paragraphs",
          heading: "SPSS, Python or R — does it matter?",
          body: [
            "For the results, no: an independent-samples t-test, ANOVA or regression uses the same mathematics and yields the same answer whichever tool runs it. Because thesis committees and many journals are used to SPSS-style reporting, we format your tables to that standard — while running the analyses in modern tools (primarily Python and R) that aren't bound by SPSS's limits. That gives us advanced models, power simulations and much faster delivery — and what matters for you is not the software brand but the right method, the right result and defensible reporting.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How much does SPSS analysis cost?",
          answer:
            "Pricing depends on scope: the number of variables and scales, research questions, and method complexity. Send your data and we'll reply within 24 hours with a free assessment and a clear quote.",
        },
        {
          question: "My data is in Excel — do I need to import it anywhere?",
          answer:
            "No. Send your Excel, CSV or .sav file as is; we handle the import, variable definitions and coding.",
        },
        {
          question: "Do you report in SPSS format?",
          answer:
            "Yes — your tables and findings are prepared in the layout SPSS users and committees are accustomed to, in APA format. Our analysis stack also draws on modern statistical tools; whichever tool runs a given test, the results are identical, and the software details your methods section needs are fully included in the report.",
        },
        {
          question: "How fast is delivery?",
          answer:
            "The analysis itself usually takes 15 minutes; your report is delivered the same day, often within hours or even minutes. Total time is mostly set by the iterative nature of the process — gaps, corrections and additions are completed together with you, and you can write to us at every step. For multi-stage work like factor analysis we agree on the timeline up front.",
        },
        {
          question: "Do you run scale validity and reliability analyses?",
          answer:
            "Yes. We report your scale's psychometric properties with Cronbach's alpha, item-total correlations, exploratory factor analysis and, where needed, confirmatory factor analysis.",
        },
        {
          question: "What if I don't understand the results?",
          answer:
            "Ask away. After delivery you can ask anything about your report, methods and results — we help you prepare for your defense or advisor meeting.",
        },
      ],
      cta: {
        heading: "Start your SPSS analysis",
        text: "Send your data and research questions — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default spssAnalysis;
