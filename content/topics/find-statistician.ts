import type { Topic } from "../types";

const findStatistician: Topic = {
  key: "find-statistician",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  related: ["thesis-statistics", "spss-analysis", "article-statistics"],
  locales: {
    tr: {
      metaTitle: "Tezim İçin İstatistikçi Arıyorum: Nereden, Nasıl Bulunur? | GetBayes",
      metaDescription:
        "Danışmanınız istatistikçi mi istedi? Tez ve makale için istatistikçi nereden bulunur, neye dikkat edilir, ne sorulur, ücretler neye göre değişir — pratik rehber.",
      headline: "Hocam İstatistikçi İstedi: Nereden Bulabilirim?",
      lead: [
        "Danışmanınız 'analizler için bir istatistikçiyle çalış' dediyse, aradığınız kişi verinize uygun testleri seçip çalıştıracak, sonuçları tez veya makale formatında tablolar ve yorumlarla raporlayacak ve savunmada 'bu testi neden kullandın?' sorusuna hazırlanmanızı sağlayacak bir uzmandır. GetBayes tam olarak bu işi yapar: verinizi ve araştırma sorularınızı gönderirsiniz; analizin kendisi çoğunlukla 15 dakika sürer, yayına hazır raporunuzu aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim alırsınız.",
        "Bu sayfada istatistikçiyle çalışmanın ne anlama geldiğini, seçerken nelere dikkat etmeniz gerektiğini ve sürecin nasıl ilerlediğini adım adım anlattık — kararınızı bilinçli verin.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Danışmanı analiz için uzman desteği isteyen yüksek lisans ve doktora öğrencileri",
          "Uzmanlık tezinin istatistik bölümü için destek arayan hekimler ve diş hekimleri",
          "Makalesi hakemden 'istatistiksel analiz yetersiz' notuyla dönen araştırmacılar",
          "Veri toplamış ama analiz aşamasında ilerleyemeyen herkes",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "İstatistikçi tez sürecinde tam olarak ne yapar?",
          body: [
            "İyi bir istatistik uzmanı yalnızca 'testi çalıştırmaz'. Önce verinizi inceler: eksik gözlemler, hatalı kodlamalar, uç değerler. Sonra araştırma sorularınızı hipotezlere çevirir ve veri yapınıza uygun yöntemi gerekçesiyle seçer — iki grup mu karşılaştırılıyor, ilişki mi aranıyor, bir sonucu yordayan değişkenler mi inceleniyor? Analizden sonra işin en kritik kısmı gelir: bulguların tez diline çevrilmesi. p-değerinin, etki büyüklüğünün ve güven aralığının ne anlama geldiğinin akademik dille, tablo ve grafiklerle raporlanması.",
            "Sınır da nettir: istatistikçi tezinizi yazmaz, veriniz üzerinde oynama yapmaz. Analizi doğru yapar, doğru raporlar ve size anlatır — tezin sahibi ve savunucusu sizsiniz.",
          ],
        },
        {
          type: "bullets",
          heading: "İstatistikçi seçerken nelere dikkat etmelisiniz?",
          intro:
            "Piyasada kalite farkı büyük. Şu soruların cevabı seçiminizi netleştirir:",
          items: [
            "Yöntem gerekçesi veriyor mu? 'ANOVA yaptım' değil, 'şu varsayımlar sağlandığı için ANOVA seçildi' diyebilmeli — jüri bunu soracak.",
            "Alanınızın raporlama standardını biliyor mu? (APA formatı, tıp dergisi tablo düzeni, etki büyüklüğü raporlama)",
            "Çıktı dosyalarını (SPSS output, temizlenmiş veri seti) teslim ediyor mu?",
            "Revizyon desteği var mı? Danışman veya hakem ek analiz isterse ne olacağı baştan net olmalı.",
            "Gizlilik taahhüdü veriyor mu? Veriniz ve teziniz üçüncü kişiyle paylaşılmamalı.",
            "Süre ve fiyat baştan yazılı mı? Kapsam netleşmeden verilen fiyat sonradan değişir.",
          ],
        },
        {
          type: "table",
          heading: "Seçenekleriniz ve artı-eksileri",
          columns: ["Seçenek", "Artısı", "Eksisi"],
          rows: [
            [
              "Üniversitedeki istatistik bölümünden destek",
              "Ücretsiz olabilir, akademik güven",
              "Yoğunluk nedeniyle haftalar sürebilir; kapsam sınırlı",
            ],
            [
              "Bireysel/freelance istatistikçiler",
              "Esnek, pazarlık edilebilir",
              "Kalite değişken; rapor standardı ve revizyon garantisi belirsiz",
            ],
            [
              "Profesyonel analiz hizmeti (GetBayes gibi)",
              "Hızlı teslim, standart rapor formatı, revizyon ve soru-cevap desteği",
              "Ücretli; çok özel yöntemlerde kapsam önceden konuşulmalı",
            ],
          ],
        },
        {
          type: "steps",
          heading: "GetBayes ile süreç nasıl ilerler?",
          steps: [
            {
              title: "Ulaşın",
              description:
                "İletişim formu, e-posta veya WhatsApp üzerinden verinizi ve araştırma sorularınızı iletin. 24 saat içinde ücretsiz ön değerlendirme yaparız.",
            },
            {
              title: "Kapsam ve fiyat netleşir",
              description:
                "Hangi analizlerin gerektiğini, süreyi ve ücreti yazılı olarak bildiririz — sürpriz yok.",
            },
            {
              title: "Analiz ve teslim",
              description:
                "Analizin kendisi çoğunlukla 15 dakikada tamamlanır; tablolar, grafikler ve yorumlarla yayına hazır raporunuz aynı gün elinizde olur.",
            },
            {
              title: "Savunmaya hazırlık",
              description:
                "Rapor üzerindeki her soruyu sorabilirsiniz: hangi test neden seçildi, sonuç nasıl yorumlanır — savunmaya hazır girersiniz.",
            },
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Tez için istatistikçiyle çalışmak etik mi?",
          answer:
            "Evet — analiz desteği almak, tıpkı dil redaksiyonu gibi akademide yaygın ve kabul gören bir uygulamadır. Etik sınır şudur: veri size ait ve gerçek olmalı, bulguları anlamalı ve savunabilmelisiniz. Biz her yöntem seçiminin gerekçesini raporda yazarak bunu kolaylaştırıyoruz.",
        },
        {
          question: "İstatistikçi ücretleri neye göre değişir?",
          answer:
            "Üç etken belirleyicidir: araştırma sorusu sayısı, değişken/ölçek sayısı ve yöntemlerin karmaşıklığı (t-testi ile doğrulayıcı faktör analizi aynı emek değildir). Net fiyat için verinizi ve sorularınızı iletmeniz yeterli — 24 saat içinde ücretsiz ön değerlendirmeyle dönüyoruz.",
        },
        {
          question: "Verimi paylaşmak güvenli mi?",
          answer:
            "GetBayes'te veriniz yalnızca analiziniz için kullanılır, üçüncü kişilerle paylaşılmaz ve talep ederseniz teslimat sonrası silinir.",
        },
        {
          question: "Danışmanım analizleri beğenmezse ne olur?",
          answer:
            "Revizyon desteği sunuyoruz: danışmanınız farklı bir test, ek analiz veya farklı tablo düzeni isterse aynı veri üzerinde güncelliyoruz.",
        },
        {
          question: "Hangi alanlarda çalışıyorsunuz?",
          answer:
            "Tıp ve diş hekimliği uzmanlık tezleri, hemşirelik, psikoloji, eğitim bilimleri ve sosyal bilimler başta olmak üzere nicel veri içeren tüm akademik çalışmalarda hizmet veriyoruz.",
        },
        {
          question: "Acil teslim mümkün mü?",
          answer:
            "Analizin kendisi zaten çoğunlukla 15 dakika sürüyor; teslim aynı gün, saatler hatta dakikalar içinde yapılıyor. Savunma veya gönderim tarihi yaklaşan çalışmalarda önceliklendirme yapabiliyoruz — durumu iletmeniz yeterli.",
        },
      ],
      cta: {
        heading: "İstatistikçi aramanız burada bitiyor",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirme ve net fiyatla dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Need a Statistician for Your Thesis? How to Find One | GetBayes",
      metaDescription:
        "Did your advisor ask for a statistician? Where to find one for a thesis or article, what to look for, what to ask, and how pricing works — a practical guide.",
      headline: "My Advisor Asked for a Statistician: Where Do I Find One?",
      lead: [
        "If your advisor said “work with a statistician on the analysis,” the person you're looking for is an expert who selects and runs the right tests for your data, reports the results with thesis- or journal-ready tables and interpretation, and prepares you for the “why did you use this test?” question at your defense. GetBayes does exactly this: you send your data and research questions; the analysis itself usually takes 15 minutes, and you receive your publication-ready report the same day, often within hours or even minutes.",
        "This page walks through what working with a statistician actually means, what to look for when choosing one, and how the process unfolds — so you can decide with confidence.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and PhD students whose advisor requested expert analysis support",
          "Physicians and dentists needing help with the statistics chapter of a specialty thesis",
          "Researchers whose manuscript came back with “statistical analysis is insufficient”",
          "Anyone who has collected data but is stuck at the analysis stage",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "What does a statistician actually do for a thesis?",
          body: [
            "A good statistician does more than “run the test.” They first screen your data: missing values, coding errors, outliers. They then translate your research questions into hypotheses and choose a justified method for your data structure — are two groups being compared, is an association being examined, are predictors of an outcome being modeled? After the analysis comes the most critical part: translating findings into thesis language — reporting what the p-value, effect size and confidence interval mean, in academic prose with tables and figures.",
            "The boundary is equally clear: a statistician doesn't write your thesis and doesn't manipulate your data. They run the analysis correctly, report it accurately, and explain it to you — you remain the author and the defender of your work.",
          ],
        },
        {
          type: "bullets",
          heading: "What to look for when choosing a statistician",
          intro:
            "Quality varies widely. The answers to these questions will make the choice obvious:",
          items: [
            "Do they justify methods? Not “I ran ANOVA,” but “ANOVA was chosen because these assumptions held” — your committee will ask.",
            "Do they know your field's reporting standard? (APA format, medical journal table conventions, effect size reporting)",
            "Do they hand over output files (SPSS output, cleaned dataset)?",
            "Is revision support included? What happens if your advisor or a reviewer requests more analyses should be clear up front.",
            "Do they commit to confidentiality? Your data and thesis must not be shared.",
            "Are the timeline and price in writing before work starts?",
          ],
        },
        {
          type: "table",
          heading: "Your options, with trade-offs",
          columns: ["Option", "Upside", "Downside"],
          rows: [
            [
              "Support from your university's statistics department",
              "Can be free; academic credibility",
              "Often takes weeks due to workload; limited scope",
            ],
            [
              "Individual/freelance statisticians",
              "Flexible, negotiable",
              "Quality varies; report standards and revision guarantees unclear",
            ],
            [
              "A professional analysis service (like GetBayes)",
              "Fast delivery, standardized reports, revision and Q&A support",
              "Paid; highly specialized methods should be scoped up front",
            ],
          ],
        },
        {
          type: "steps",
          heading: "How the process works with GetBayes",
          steps: [
            {
              title: "Reach out",
              description:
                "Send your data and research questions via the contact form, email or WhatsApp. We reply with a free assessment within 24 hours.",
            },
            {
              title: "Scope and price agreed",
              description:
                "We state in writing which analyses are needed, the timeline and the fee — no surprises.",
            },
            {
              title: "Analysis and delivery",
              description:
                "The analysis itself is usually done in 15 minutes; your publication-ready report with tables, figures and interpretation is in your hands the same day.",
            },
            {
              title: "Defense preparation",
              description:
                "Ask anything about the report: why each test was chosen, how each result reads — you walk into your defense prepared.",
            },
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Is it ethical to work with a statistician on a thesis?",
          answer:
            "Yes — getting analysis support is a common and accepted academic practice, much like language editing. The ethical line: the data must be yours and real, and you must understand and be able to defend the findings. We make that easier by justifying every method choice in the report.",
        },
        {
          question: "What determines a statistician's fee?",
          answer:
            "Three factors: the number of research questions, the number of variables/scales, and method complexity (a t-test and a confirmatory factor analysis are not the same effort). For a clear quote, send your data and questions — we reply within 24 hours with a free assessment.",
        },
        {
          question: "Is it safe to share my data?",
          answer:
            "At GetBayes your data is used only for your analysis, never shared with third parties, and deleted after delivery on request.",
        },
        {
          question: "What if my advisor isn't satisfied with the analyses?",
          answer:
            "We provide revision support: if your advisor wants a different test, additional analyses or different tables, we update the work on the same dataset.",
        },
        {
          question: "Which fields do you work in?",
          answer:
            "Medical and dental specialty theses, nursing, psychology, education and the social sciences — any academic study with quantitative data.",
        },
        {
          question: "Is urgent delivery possible?",
          answer:
            "The analysis itself already takes only about 15 minutes; delivery is same-day, within hours or even minutes. For studies with an approaching defense or submission date we can prioritize — just let us know.",
        },
      ],
      cta: {
        heading: "Your search for a statistician ends here",
        text: "Send your data and research questions — we'll reply within 24 hours with a free assessment and a clear quote.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default findStatistician;
