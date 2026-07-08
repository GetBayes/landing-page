import type { Topic } from "../types";

// Genuinely free introductory offer: one dataset → interactive Power BI
// dashboard at no charge. Positioned as a way to experience report quality
// before commissioning paid statistical analysis. Keep the "free, no
// obligation" promise intact — it is the page's whole point.

const powerBi: Topic = {
  key: "power-bi",
  kind: "service",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  serviceType: "Power BI Dashboard & Data Visualization",
  related: ["thesis-statistics", "health-use-cases", "about-us"],
  locales: {
    tr: {
      metaTitle:
        "Ücretsiz Power BI Analizi: Verinizi İnteraktif Panele Dönüştürün | GetBayes",
      metaDescription:
        "Verinizi gönderin, Power BI ile interaktif gösterge paneline ücretsiz dönüştürelim. Grafikler, filtreler, özet istatistikler — gerçekten ücretsiz, koşulsuz.",
      headline: "Ücretsiz Power BI Analizi: Verinizi Panele Dönüştürelim",
      lead: [
        "Elinizde bir veri seti varsa — anket sonuçları, hasta kayıtları, satış verileri, kurum içi ölçümler — bize gönderin, Power BI ile interaktif bir gösterge paneline ücretsiz dönüştürelim. Grafikler, filtrelenebilir görünümler ve özet istatistiklerle verinizin fotoğrafını çekiyoruz; herhangi bir ücret ödemeden, herhangi bir taahhüt vermeden. Bu bir kampanya süresi olan promosyon değil, kalıcı bir tanışma teklifi: işimizin kalitesini önce görün istiyoruz.",
        "Bu sayfada neyi teslim ettiğimizi, sürecin nasıl işlediğini ve hangi verilerin Power BI paneline uygun olduğunu anlattık.",
      ],
      audience: {
        heading: "Kimler yararlanabilir?",
        items: [
          "Anket verisini savunma veya sunum öncesi görselleştirmek isteyen lisansüstü öğrenciler",
          "Bulgularını kongre sunumu veya poster için panele dökmek isteyen araştırmacılar",
          "Klinik veya poliklinik verisinin (kimliksizleştirilmiş) genel görünümünü çıkarmak isteyen hekimler",
          "Satış, operasyon veya müşteri verisini tek ekranda izlemek isteyen küçük ekipler ve işletmeler",
        ],
      },
      sections: [
        {
          type: "bullets",
          heading: "Ücretsiz pakette neler var?",
          intro:
            "\"Ücretsiz\" deyince akla gelen kırpılmış deneme sürümü değil bu — teslim ettiğimiz gerçek bir çalışma:",
          items: [
            "Verinize uygun seçilmiş grafiklerle interaktif bir Power BI gösterge paneli",
            "Değişkenlere göre filtreleme ve kırılım (ör. yaş grubu, bölüm, tarih aralığı)",
            "Özet istatistikler: sayılar, ortalamalar, dağılımlar, eğilimler",
            "Panelin PDF dışa aktarımı — sunum ve rapora doğrudan eklenebilir",
            "İsterseniz Power BI dosyasının (.pbix) kendisi — panel sizde kalır, kendiniz güncelleyebilirsiniz",
            "Panelde ne görüldüğüne dair kısa bir açıklama notu",
          ],
        },
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          steps: [
            {
              title: "Verinizi gönderin",
              description:
                "Excel, CSV veya benzeri formattaki veri setinizi WhatsApp, e-posta veya iletişim formu üzerinden iletin. Kısa bir notla neyi merak ettiğinizi yazarsanız paneli ona göre kurarız.",
            },
            {
              title: "Kısa değerlendirme",
              description:
                "Veriyi inceler, panele uygun olup olmadığını ve hangi görünümlerin anlamlı olacağını size bildiririz.",
            },
            {
              title: "Panel hazırlanır",
              description:
                "Gösterge panelinizi hazırlar, çoğunlukla aynı gün içinde teslim ederiz.",
            },
            {
              title: "Teslim ve sonrası",
              description:
                "PDF ve dilerseniz .pbix dosyasını alırsınız. Panel üzerine sorularınızı yanıtlarız. Hepsi bu — devamında bir zorunluluk yok.",
            },
          ],
        },
        {
          type: "table",
          heading: "Hangi veriler panele uygun?",
          intro:
            "Satır ve sütunlardan oluşan hemen her tablo görselleştirilebilir. Sık gelen örnekler:",
          columns: ["Veri türü", "Panelde neler görünür?"],
          rows: [
            [
              "Anket / ölçek verisi",
              "Madde dağılımları, alt boyut ortalamaları, demografik kırılımlar",
            ],
            [
              "Klinik veri (kimliksizleştirilmiş)",
              "Hasta özellikleri, ölçüm eğilimleri, grup karşılaştırma görünümleri",
            ],
            [
              "Satış / operasyon verisi",
              "Dönemsel eğilimler, ürün-bölge kırılımları, temel performans göstergeleri",
            ],
            [
              "Akademik performans / kurum verisi",
              "Dönem karşılaştırmaları, birim bazlı görünümler, dağılımlar",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Neden ücretsiz yapıyoruz?",
          body: [
            "Açık konuşalım: bu bizim tanışma teklifimiz. İstatistik analizi hizmeti veren bir ekibiz ve işimizin kalitesini anlatmanın en dürüst yolu, göstermek. Verinizin paneli elinize ulaştığında nasıl çalıştığımızı görmüş oluyorsunuz; ileride tez, makale veya kapsamlı analiz ihtiyacınız olduğunda kimi arayacağınızı biliyorsunuz.",
            "Panel çalışması sırasında verinizde dikkat çeken bir şey görürsek — eksik veriler, ilginç bir örüntü, istatistiksel testle doğrulanmaya değer bir fark — not olarak iletiriz. Devamında analiz yaptırıp yaptırmamak tamamen size kalmış; panel her koşulda sizde kalır.",
          ],
        },
        {
          type: "bullets",
          heading: "Kapsam ve adil kullanım",
          intro: "Teklifin sınırları da net olsun:",
          items: [
            "Kişi başına bir veri seti için geçerlidir; ek veri setleri ve düzenli güncelleme ihtiyaçları için uygun fiyatlı teklif veririz.",
            "Veri, tablo formatında (Excel, CSV vb.) ve makul boyutta olmalıdır — dev veri ambarları ayrı bir projedir.",
            "Panel görselleştirme ve özet istatistik içerir; hipotez testleri, p-değerleri ve akademik raporlama ücretli analiz hizmetimizin kapsamındadır.",
            "Kişisel veri içeren setlerde kimliksizleştirme sizden isteriz: isim, TC kimlik no gibi alanlar çıkarılmış olmalı.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Gerçekten ücretsiz mi? Sonradan bir ücret çıkar mı?",
          answer:
            "Gerçekten ücretsiz. Panel, PDF çıktısı ve soru-cevap desteği için hiçbir ücret ödemezsiniz; kart bilgisi, abonelik veya taahhüt de istemeyiz. Ücretli olan, ayrı bir ihtiyaç olarak talep ederseniz istatistiksel analiz ve akademik raporlama hizmetimizdir.",
        },
        {
          question: "Power BI nedir, panele bakmak için lisans gerekir mi?",
          answer:
            "Power BI, Microsoft'un veri görselleştirme aracıdır. Size gönderdiğimiz PDF için hiçbir yazılım gerekmez. .pbix dosyasını açmak isterseniz ücretsiz Power BI Desktop yeterlidir.",
        },
        {
          question: "Verim güvende mi?",
          answer:
            "Veriniz yalnızca panelinizin hazırlanması için kullanılır, üçüncü kişilerle paylaşılmaz ve talep ederseniz teslimat sonrası silinir. Kişisel veri içeren setleri kimliksizleştirilmiş halde göndermenizi isteriz.",
        },
        {
          question: "Hangi dosya formatlarını kabul ediyorsunuz?",
          answer:
            "Excel (.xlsx, .xls), CSV başta olmak üzere tablo yapısındaki yaygın formatları kabul ediyoruz. Formatınızdan emin değilseniz gönderin, bakalım — uygun değilse nasıl düzenleyeceğinizi tarif ederiz.",
        },
        {
          question: "Ne kadar sürede teslim ediyorsunuz?",
          answer:
            "Çoğu panel aynı gün içinde teslim edilir. Verinin boyutuna ve yoğunluğa göre değişirse, süreyi baştan bildiririz.",
        },
        {
          question: "Ticari verim için de geçerli mi, yoksa sadece akademik mi?",
          answer:
            "İkisi için de geçerli. Anket ve araştırma verisi kadar satış, operasyon ve müşteri verisiyle de çalışıyoruz — küçük ekiplerin ilk gösterge paneli için birebir.",
        },
      ],
      cta: {
        heading: "Veriniz hazır mı? Paneliniz bizden",
        text: "Veri setinizi gönderin; kısa bir değerlendirmeyle dönelim, panelinizi çoğunlukla aynı gün teslim edelim — ücretsiz, koşulsuz.",
        button: "Ücretsiz Panelimi İste",
        whatsapp: "WhatsApp ile Gönder",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "Free Power BI Analysis: Turn Your Data into a Dashboard | GetBayes",
      metaDescription:
        "Send us your data and we'll turn it into an interactive Power BI dashboard for free. Charts, filters, summary statistics — genuinely free, no strings attached.",
      headline: "Free Power BI Analysis: Let's Turn Your Data into a Dashboard",
      lead: [
        "If you have a dataset — survey responses, patient records, sales figures, internal metrics — send it to us and we'll turn it into an interactive Power BI dashboard, free of charge. Charts, filterable views and summary statistics that give you the full picture of your data, with nothing to pay and nothing to commit to. This isn't a limited-time promotion; it's a standing introduction offer — we'd rather show you the quality of our work than tell you about it.",
        "This page explains exactly what we deliver, how the process works, and which kinds of data suit a Power BI dashboard.",
      ],
      audience: {
        heading: "Who can use this?",
        items: [
          "Graduate students who want their survey data visualized before a defense or presentation",
          "Researchers preparing findings for a conference talk or poster",
          "Physicians who want an overview of (de-identified) clinical data",
          "Small teams and businesses wanting sales, operations or customer data on a single screen",
        ],
      },
      sections: [
        {
          type: "bullets",
          heading: "What's in the free package?",
          intro:
            "This isn't a stripped-down trial — it's a real piece of delivered work:",
          items: [
            "An interactive Power BI dashboard with charts chosen to fit your data",
            "Filtering and breakdowns by your variables (e.g. age group, department, date range)",
            "Summary statistics: counts, means, distributions, trends",
            "A PDF export of the dashboard — drops straight into presentations and reports",
            "The Power BI file (.pbix) itself if you want it — the dashboard is yours to keep and update",
            "A short note explaining what the dashboard shows",
          ],
        },
        {
          type: "steps",
          heading: "How the process works",
          steps: [
            {
              title: "Send your data",
              description:
                "Share your dataset in Excel, CSV or a similar format via WhatsApp, email or the contact form. Add a short note about what you're curious about and we'll build the dashboard around it.",
            },
            {
              title: "Quick review",
              description:
                "We look at the data and tell you whether it suits a dashboard and which views would be meaningful.",
            },
            {
              title: "We build the dashboard",
              description:
                "Your dashboard is prepared and usually delivered the same day.",
            },
            {
              title: "Delivery and after",
              description:
                "You receive the PDF and, if you like, the .pbix file. We answer your questions about the dashboard. That's it — no obligation afterwards.",
            },
          ],
        },
        {
          type: "table",
          heading: "Which data suits a dashboard?",
          intro:
            "Almost any table of rows and columns can be visualized. Common examples:",
          columns: ["Data type", "What appears on the dashboard"],
          rows: [
            [
              "Survey / scale data",
              "Item distributions, subscale means, demographic breakdowns",
            ],
            [
              "Clinical data (de-identified)",
              "Patient characteristics, measurement trends, group comparison views",
            ],
            [
              "Sales / operations data",
              "Trends over time, product-region breakdowns, key performance indicators",
            ],
            [
              "Academic performance / institutional data",
              "Term comparisons, per-unit views, distributions",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Why do we do this for free?",
          body: [
            "Let's be direct: this is our introduction offer. We're a statistical analysis team, and the most honest way to demonstrate the quality of our work is to show it. When your dashboard lands in your inbox, you've seen how we work — and when you later need a thesis, article or full analysis, you know who to call.",
            "If we notice something interesting while building your dashboard — missing data, a striking pattern, a difference worth confirming with a statistical test — we'll mention it in a note. Whether you commission any analysis afterwards is entirely up to you; the dashboard is yours either way.",
          ],
        },
        {
          type: "bullets",
          heading: "Scope and fair use",
          intro: "The boundaries of the offer, stated plainly:",
          items: [
            "Valid for one dataset per person; for additional datasets or regularly updated dashboards we'll quote a fair price.",
            "Data should be in tabular form (Excel, CSV etc.) and of reasonable size — enterprise data warehouses are a separate project.",
            "The dashboard covers visualization and summary statistics; hypothesis tests, p-values and academic reporting belong to our paid analysis service.",
            "For datasets containing personal information, we ask you to de-identify first: remove names, ID numbers and similar fields.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Is it really free? Will a fee appear later?",
          answer:
            "Really free. You pay nothing for the dashboard, the PDF export or the follow-up Q&A, and we ask for no card details, subscription or commitment. What is paid is our statistical analysis and academic reporting service — and only if you separately request it.",
        },
        {
          question: "What is Power BI, and do I need a license to view the dashboard?",
          answer:
            "Power BI is Microsoft's data visualization tool. The PDF we send needs no software at all. If you want to open the .pbix file yourself, the free Power BI Desktop is enough.",
        },
        {
          question: "Is my data safe?",
          answer:
            "Your data is used only to build your dashboard, never shared with third parties, and deleted after delivery on request. We ask that datasets containing personal information be de-identified before sending.",
        },
        {
          question: "Which file formats do you accept?",
          answer:
            "Excel (.xlsx, .xls) and CSV first and foremost, plus other common tabular formats. Not sure about yours? Send it and we'll take a look — if it doesn't fit, we'll explain how to reshape it.",
        },
        {
          question: "How fast is delivery?",
          answer:
            "Most dashboards are delivered the same day. If your dataset's size or our workload changes that, we'll tell you the timeline up front.",
        },
        {
          question: "Does this apply to business data, or only academic?",
          answer:
            "Both. We work with sales, operations and customer data just as much as survey and research data — it's a perfect first dashboard for a small team.",
        },
      ],
      cta: {
        heading: "Data ready? The dashboard is on us",
        text: "Send your dataset; we'll reply with a quick review and usually deliver your dashboard the same day — free, no strings attached.",
        button: "Claim My Free Dashboard",
        whatsapp: "Send via WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default powerBi;
