import type { Topic } from "../types";

// Market-average figures below are compiled from publicly listed 2026 price
// pages of Turkish analysis/consulting firms and international consulting
// rate pages. They are deliberately framed as MARKET averages, never as a
// GetBayes price list — we quote per study after a free assessment.

const pricing: Topic = {
  key: "pricing",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  related: ["find-statistician", "thesis-statistics", "spss-analysis"],
  locales: {
    tr: {
      metaTitle:
        "İstatistik Analizi Ücretleri 2026: Tez ve SPSS Analizi Ne Kadar? | GetBayes",
      metaDescription:
        "Tez istatistik analizi ücretleri 2026'da ne kadar? Piyasa ortalamaları, uygun fiyatlı analiz nasıl bulunur, ücretsiz revizyon ve araştırma dostu fiyatlandırma rehberi.",
      headline: "İstatistik Analizi Ücretleri 2026: Piyasada Ne Kadar Ödenir?",
      lead: [
        "Türkiye'de tez istatistik analizi için 2026 piyasa ortalamaları kabaca şöyledir: birkaç temel karşılaştırma içeren basit analizler 2.000–6.000 ₺, ANOVA-regresyon düzeyinde orta kapsamlı çalışmalar 6.000–10.000 ₺, faktör analizi veya yapısal eşitlik modeli gibi ileri yöntemler 10.000–20.000 ₺ ve üzeri aralığında fiyatlanıyor. Bu rakamlar danışmanlık firmalarının kamuya açık fiyat sayfalarından derlenmiş piyasa ortalamalarıdır; GetBayes'in fiyat listesi değildir — biz her çalışmaya kapsamına göre, ücretsiz ön değerlendirme sonrası yazılı ve net fiyat veririz.",
        "Bizim fiyatlandırma yaklaşımımız araştırma dostudur: fiyat, teslim süresinden ve revizyonlardan tamamen bağımsızdır. Revizyonlar ücretsizdir, ön değerlendirme ücretsizdir, Power BI analizi ücretsizdir — ödediğiniz tek şey analizin kendisidir ve o rakam sonradan değişmez. Bu sayfada fiyatın neye göre değiştiğini, en uygun fiyatlı hizmetin nasıl bulunacağını ve fazla ödememek için nelere bakmanız gerektiğini topladık.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Tez analizi için teklif toplayan yüksek lisans ve doktora öğrencileri",
          "Uzmanlık tezi bütçesi planlayan hekimler ve diş hekimleri",
          "Makale analizi veya hakem revizyonu için fiyat araştıran araştırmacılar",
          "Bitirme projesi veya TÜBİTAK projesi yürüten lisans öğrencileri ve bağımsız araştırmacılar",
          "\"SPSS analizi ne kadar tutar?\" sorusuna net bir çerçeve arayan herkes",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "2026 Türkiye piyasa ortalamaları",
          intro:
            "Aşağıdaki aralıklar, Türkiye'deki analiz ve danışmanlık firmalarının kamuya açık 2026 fiyat listelerinden derlenmiştir. Tek tek firmalar bu aralıkların altında veya üstünde fiyat verebilir:",
          columns: ["Kapsam", "Tipik içerik", "Piyasa aralığı (2026)"],
          rows: [
            [
              "Basit",
              "Betimsel istatistikler + birkaç temel karşılaştırma (t-testi, ki-kare); 1–2 araştırma sorusu",
              "2.000 – 6.000 ₺",
            ],
            [
              "Orta",
              "ANOVA, korelasyon, regresyon; ölçek güvenirliği; 3–6 araştırma sorusu; tablo ve yorumlarla raporlama",
              "6.000 – 10.000 ₺",
            ],
            [
              "İleri",
              "Açımlayıcı/doğrulayıcı faktör analizi, yapısal eşitlik modeli (AMOS, SmartPLS), sağkalım analizi, çok düzeyli modeller",
              "10.000 – 20.000 ₺ ve üzeri",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Fiyatı asıl belirleyen beş etken",
          intro:
            "İki tez aynı sayfada görünse de analiz emeği çok farklı olabilir. Teklifler arasındaki farkın kaynağı genellikle şunlardır:",
          items: [
            "Araştırma sorusu ve hipotez sayısı — her hipotez ayrı bir analiz, tablo ve yorum demektir.",
            "Yöntem karmaşıklığı — bağımsız örneklem t-testi ile doğrulayıcı faktör analizi aynı emek değildir; AMOS veya SmartPLS gerektiren modeller piyasada belirgin şekilde daha pahalıdır.",
            "Verinin durumu — eksik gözlemler, hatalı kodlamalar ve birleştirilmesi gereken çok sayıda form, analiz öncesi ciddi temizlik emeği gerektirir.",
            "Raporlama derinliği — yalnızca çıktı dosyası mı, yoksa APA formatında tablolar, grafikler ve akademik dille yazılmış yorumlar mı isteniyor?",
            "Aciliyet — 24–72 saat içinde teslim talepleri piyasada normal fiyatın üzerinde ücretlendirilir.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Yurt dışı piyasayla karşılaştırma",
          body: [
            "Uluslararası piyasada tez ve doktora analiz projeleri çoğunlukla 300–1.500 USD aralığında fiyatlanıyor; kurumsal danışmanlık firmalarında bu 1.000–1.500 USD bandına oturuyor. Saatlik çalışan istatistik danışmanları öğrenci projeleri için genellikle 50–150 USD/saat istiyor; üniversitelerin kendi danışmanlık birimleri ise 50–120 USD/saat civarında.",
            "Bu karşılaştırma şunu gösteriyor: Türkiye'deki fiyatlar döviz karşılığında hâlâ uluslararası ortalamanın altında, ancak son yıllarda hızla yükseldi. 2018–2019'da birkaç yüz liraya yapılan analizlerin bugün on binlerce liraya fiyatlandığını aktaran firmalar var — bütçe planlarken güncel teklif almak eski duyumlara güvenmekten daha sağlıklı.",
          ],
        },
        {
          type: "bullets",
          heading: "Fazla ödememek (ve ucuza yanmamak) için kontrol listesi",
          intro:
            "En düşük teklif her zaman en ekonomik seçenek değildir — savunmada savunamayacağınız bir rapor, iki kez ödemek demektir. Teklif karşılaştırırken şunlara bakın:",
          items: [
            "Fiyat yazılı mı ve kapsamı belli mi? \"Analize başlayınca netleşir\" diyen tekliflerde fiyat sonradan büyür.",
            "Revizyon dahil mi? Danışman veya jüri ek analiz isterse ne olacağı baştan yazılmalı — piyasadaki gizli maliyetin en büyüğü budur.",
            "Yöntem gerekçesi raporda var mı? Sadece tablo teslim eden bir hizmet, savunma sorularında sizi yalnız bırakır.",
            "Çıktı dosyaları (SPSS output, temizlenmiş veri seti) teslim ediliyor mu?",
            "Gizlilik taahhüdü net mi? Veriniz üçüncü kişilerle paylaşılmamalı.",
            "Piyasanın çok altındaki fiyatlara dikkat: şablon rapor, kopyala-yapıştır yorum ve hatalı test seçimi riski taşır.",
          ],
        },
        {
          type: "steps",
          heading: "GetBayes'te fiyat nasıl belirlenir?",
          intro:
            "Sabit bir fiyat listesi yayınlamıyoruz, çünkü iki çalışmanın emeği neredeyse hiçbir zaman aynı değil. Bunun yerine süreç şöyle işliyor:",
          steps: [
            {
              title: "Verinizi ve sorularınızı gönderin",
              description:
                "İletişim formu, e-posta veya WhatsApp üzerinden veri setinizi ve araştırma sorularınızı iletin — bu aşama tamamen ücretsizdir.",
            },
            {
              title: "Ücretsiz ön değerlendirme",
              description:
                "24 saat içinde çalışmanızı inceler, hangi analizlerin gerektiğini belirleriz. Bu değerlendirme için hiçbir ücret ödemezsiniz.",
            },
            {
              title: "Yazılı ve net teklif",
              description:
                "Kapsamı, süreyi ve ücreti yazılı olarak bildiririz. Fiyat, işin gerçek emeğine göre belirlenir ve sonradan değişmez — sürpriz yok.",
            },
            {
              title: "Analiz ve teslim",
              description:
                "Onayınızdan sonra analizin kendisi çoğunlukla 15 dakikada tamamlanır; yayına hazır raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur. Revizyonlar ücretsizdir, fiyatı değiştirmez ve süreç boyunca her aşamada bize yazabilirsiniz.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Araştırma dostu fiyatlandırma: GetBayes'te neler ücretsiz?",
          intro:
            "Fiyatımız yalnızca analizin kendisi içindir — teslim süresinden ve revizyonlardan tamamen bağımsızdır. Şunlar için hiçbir ücret ödemezsiniz:",
          items: [
            "Ön değerlendirme — verinizin ve sorularınızın incelenmesi, gereken analizlerin belirlenmesi ve fiyat teklifi tamamen ücretsizdir.",
            "Revizyonlar — danışmanınız, jüriniz veya hakem ek analiz, farklı test ya da yeni tablo düzeni isterse aynı veri üzerinde ücretsiz güncelleriz; piyasada en sık görülen gizli maliyet bizde yoktur.",
            "Power BI analizi — veri setinizi interaktif gösterge paneline ücretsiz dönüştürüyoruz; analiz yaptırma zorunluluğu olmadan.",
            "Rapor üzerine soru-cevap — teslimden sonra 'bu test neden seçildi, bu sonuç ne demek' sorularınızı ücretsiz yanıtlıyoruz.",
            "Aciliyet — analizin kendisi çoğunlukla 15 dakikada tamamlanıp teslim aynı gün yapıldığı için hızlı teslim ek ücret gerektirmez.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "SPSS analizi ortalama ne kadar tutar?",
          answer:
            "2026 itibarıyla Türkiye piyasasında akademik formatta raporlamalı SPSS analizleri çoğunlukla 2.000–10.000 ₺ aralığında; faktör analizi veya yapısal eşitlik modeli gibi ileri yöntemlerde 10.000–20.000 ₺ ve üzerine çıkıyor. Bunlar piyasa ortalamalarıdır — kendi çalışmanız için net rakam, ancak veri ve sorularınız görüldükten sonra verilebilir.",
        },
        {
          question: "Bu sayfadaki fiyatlar GetBayes'in fiyatları mı?",
          answer:
            "Hayır. Buradaki aralıklar, piyasadaki firmaların kamuya açık fiyat listelerinden derlenmiş ortalamalardır. GetBayes her çalışmaya kapsamına göre fiyat verir: verinizi gönderirsiniz, 24 saat içinde ücretsiz ön değerlendirme ve yazılı net teklif alırsınız.",
        },
        {
          question: "Neden sabit bir fiyat listesi yayınlamıyorsunuz?",
          answer:
            "Çünkü aynı görünen iki tezin analiz emeği kat kat farklı olabilir: hipotez sayısı, yöntem karmaşıklığı ve verinin temizlik ihtiyacı fiyatı belirler. Görmeden verilen sabit fiyat ya size fazla ödetir ya da işin ortasında \"ek ücret\" olarak geri döner. Biz bunun yerine kapsamı görüp tek seferde net fiyat veriyoruz.",
        },
        {
          question: "En ucuz teklifi seçmek mantıklı mı?",
          answer:
            "Riskli olabilir. Piyasanın çok altındaki fiyatlar genellikle şablon rapor, gerekçesiz test seçimi ve revizyon desteği olmaması anlamına gelir. Jüri \"bu testi neden kullandın?\" diye sorduğunda savunamayacağınız bir rapor, işi ikinci kez yaptırmak zorunda kalmak demektir. Fiyat kadar, neyin dahil olduğuna bakın.",
        },
        {
          question: "En uygun fiyatlı istatistik analizi hizmetini nasıl bulurum?",
          answer:
            "\"En uygun fiyat\" en düşük rakam değil, en düşük toplam maliyettir. Düşük görünen tekliflere revizyon ücreti, ek analiz ücreti ve acil teslim farkı eklendiğinde toplam çoğu zaman piyasa ortalamasını aşar. Karşılaştırırken revizyonun, çıktı dosyalarının ve soru-cevap desteğinin fiyata dahil olup olmadığını sorun. GetBayes'te fiyatlandırma araştırma dostudur: revizyonlar, ön değerlendirme ve Power BI analizi ücretsizdir; ödediğiniz rakam tektir ve değişmez.",
        },
        {
          question: "Revizyonlar için ek ücret ödüyor muyum?",
          answer:
            "Hayır. Fiyat, teslim ve revizyonlardan tamamen bağımsızdır: danışmanınız veya jüriniz farklı bir test, ek analiz ya da yeni tablo düzeni isterse aynı veri üzerinde ücretsiz güncelliyoruz. Baştan verilen yazılı fiyat, revizyonlarla büyümez.",
        },
        {
          question: "Ön değerlendirme gerçekten ücretsiz mi?",
          answer:
            "Evet. Verinizi ve araştırma sorularınızı incelemek, hangi analizlerin gerektiğini söylemek ve fiyat teklifi vermek tamamen ücretsizdir; teklifi kabul etme zorunluluğunuz yoktur. Ücretsiz Power BI analizi teklifimiz de aynı şekilde koşulsuzdur.",
        },
        {
          question: "Sadece lisansüstü öğrencilerle mi çalışıyorsunuz?",
          answer:
            "Hayır. Yüksek lisans, doktora ve uzmanlık öğrencilerinin yanında bitirme projesi veya araştırma yürüten lisans öğrencileriyle ve bir kuruma bağlı olmayan bağımsız araştırmacılarla da çalışıyoruz. Fiyatlandırma herkes için aynı mantıkla, çalışmanın kapsamına göre belirlenir.",
        },
        {
          question: "Acil teslim ek ücrete tabi mi?",
          answer:
            "Piyasada 24–72 saatlik acil teslimler normal fiyatın üzerinde ücretlendirilir. GetBayes'te analizin kendisi zaten çoğunlukla 15 dakikada tamamlanıp teslim aynı gün — saatler hatta dakikalar içinde — yapıldığı için aciliyet çoğunlukla ek maliyet yaratmaz; savunma veya gönderim tarihiniz yakınsa durumu iletmeniz yeterli.",
        },
      ],
      cta: {
        heading: "Tahmin değil, net fiyat alın",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirme ve yazılı, değişmeyen bir fiyatla dönelim.",
        button: "Ücretsiz Fiyat Teklifi Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "Statistical Analysis Pricing 2026: What Does Thesis Help Cost? | GetBayes",
      metaDescription:
        "What does thesis statistical analysis cost in 2026? Market averages, how to find affordable analysis, free revisions and research-friendly pricing explained.",
      headline: "Statistical Analysis Pricing in 2026: What Does the Market Charge?",
      lead: [
        "In the international market, thesis and dissertation statistics projects mostly fall in the 300–1,500 USD range, with established consulting firms clustering around 1,000–1,500 USD per project and hourly consultants charging roughly 50–150 USD per hour. In Turkey, 2026 market averages run from about 2,000–6,000 ₺ for simple analyses to 10,000–20,000 ₺ and beyond for advanced methods like structural equation modeling. These figures are market averages compiled from publicly listed price pages — not a GetBayes price list; we quote each study individually, in writing, after a free assessment.",
        "Our own pricing approach is research-friendly: the price is fully independent of delivery speed and revisions. Revisions are free, the initial assessment is free, the Power BI analysis is free — the only thing you pay for is the analysis itself, and that number doesn't change afterwards. This page covers what actually drives the price, how to find genuinely affordable analysis, and what to check before accepting a quote.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and PhD students collecting quotes for thesis analysis",
          "Physicians and dentists budgeting for a specialty thesis",
          "Researchers pricing journal-article analysis or reviewer-revision support",
          "Undergraduates running capstone or research projects, and independent researchers",
          "Anyone asking “how much does statistical analysis cost?” and wanting a clear frame",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Market averages in 2026",
          intro:
            "The ranges below are compiled from publicly available 2026 price pages of analysis and consulting providers. Individual providers may charge below or above them:",
          columns: ["Scope", "Typical content", "Market range (2026)"],
          rows: [
            [
              "Simple",
              "Descriptive statistics + a few basic comparisons (t-test, chi-square); 1–2 research questions",
              "2,000–6,000 ₺ (Turkey) · ~300–500 USD (intl.)",
            ],
            [
              "Moderate",
              "ANOVA, correlation, regression; scale reliability; 3–6 research questions; full reporting with tables",
              "6,000–10,000 ₺ (Turkey) · ~400–800 USD (intl.)",
            ],
            [
              "Advanced",
              "Exploratory/confirmatory factor analysis, structural equation modeling (AMOS, SmartPLS), survival analysis, multilevel models",
              "10,000–20,000+ ₺ (Turkey) · ~1,000–1,500+ USD (intl.)",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "The five factors that actually set the price",
          intro:
            "Two theses can look the same on paper and require very different amounts of work. Quote differences usually come down to:",
          items: [
            "Number of research questions and hypotheses — each hypothesis means another analysis, table and interpretation.",
            "Method complexity — an independent-samples t-test and a confirmatory factor analysis are not the same effort; models requiring AMOS or SmartPLS are priced visibly higher across the market.",
            "Data condition — missing values, coding errors and multiple forms that need merging demand serious cleaning work before any analysis.",
            "Reporting depth — raw output files only, or APA-formatted tables, figures and academically written interpretation?",
            "Urgency — 24–72 hour rush deliveries are charged above normal rates across the market.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Hourly rates and how markets compare",
          body: [
            "Hourly statistical consultants typically charge 50–150 USD per hour for student projects, while university consulting units run around 50–120 USD per hour depending on the consultant's seniority. Business and industry clients pay more, commonly 150–250 USD per hour.",
            "The comparison shows that prices in Turkey remain below the international average in hard-currency terms, but they have risen sharply in recent years — analyses that cost a few hundred lira in 2018–2019 are quoted in the tens of thousands today. When budgeting, a current quote beats an old anecdote.",
          ],
        },
        {
          type: "bullets",
          heading: "A checklist to avoid overpaying (or getting burned by cheap)",
          intro:
            "The lowest quote is not always the most economical — a report you cannot defend at your viva means paying twice. When comparing quotes, check:",
          items: [
            "Is the price in writing, with the scope defined? Quotes that say “we'll know once we start” tend to grow mid-project.",
            "Are revisions included? What happens when your advisor or committee requests additional analyses should be agreed up front — this is the market's biggest hidden cost.",
            "Does the report justify method choices? A service that only delivers tables leaves you alone at defense questions.",
            "Are output files (SPSS output, cleaned dataset) handed over?",
            "Is there a clear confidentiality commitment? Your data must not be shared.",
            "Be wary of prices far below market: they usually signal template reports, copy-paste interpretation and wrongly chosen tests.",
          ],
        },
        {
          type: "steps",
          heading: "How pricing works at GetBayes",
          intro:
            "We don't publish a fixed price list, because no two studies take the same effort. Instead, the process works like this:",
          steps: [
            {
              title: "Send your data and questions",
              description:
                "Share your dataset and research questions via the contact form, email or WhatsApp — this step is completely free.",
            },
            {
              title: "Free assessment",
              description:
                "Within 24 hours we review your study and determine which analyses it needs. You pay nothing for this assessment.",
            },
            {
              title: "A written, fixed quote",
              description:
                "We state the scope, timeline and fee in writing. The price reflects the actual work and does not change afterwards — no surprises.",
            },
            {
              title: "Analysis and delivery",
              description:
                "Once you approve, the analysis itself is usually completed in 15 minutes; your publication-ready report is in your hands the same day, often within hours or even minutes. Revisions are free, never change the price, and you can write to us at every stage.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Research-friendly pricing: what's free at GetBayes?",
          intro:
            "Our price covers the analysis itself and nothing else — it is fully independent of delivery speed and revisions. You pay nothing for:",
          items: [
            "The initial assessment — reviewing your data and questions, determining the needed analyses and quoting a price is completely free.",
            "Revisions — if your advisor, committee or a reviewer requests additional analyses, a different test or new tables, we update the work on the same dataset for free; the market's most common hidden cost doesn't exist here.",
            "Power BI analysis — we turn your dataset into an interactive dashboard at no charge, with no obligation to commission any analysis.",
            "Q&A on the report — after delivery, questions like “why this test?” and “what does this result mean?” are answered for free.",
            "Urgency — the analysis itself usually finishes in 15 minutes with same-day delivery, so fast turnaround never costs extra.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How much does SPSS analysis cost on average?",
          answer:
            "As of 2026, academically reported SPSS analyses mostly run 2,000–10,000 ₺ in the Turkish market and roughly 300–800 USD internationally, rising to 10,000–20,000+ ₺ or 1,000–1,500+ USD for advanced methods like factor analysis or structural equation modeling. These are market averages — an exact figure for your study requires seeing your data and questions.",
        },
        {
          question: "Are the prices on this page GetBayes prices?",
          answer:
            "No. The ranges here are averages compiled from publicly listed market prices. GetBayes quotes each study on its own scope: you send your data, and within 24 hours you receive a free assessment and a written, fixed quote.",
        },
        {
          question: "Why don't you publish a fixed price list?",
          answer:
            "Because two theses that look identical can differ several-fold in analysis effort: the number of hypotheses, method complexity and how much data cleaning is needed set the real workload. A sight-unseen fixed price either overcharges you or comes back mid-project as “additional fees.” We look at the scope once and give one final number instead.",
        },
        {
          question: "Is picking the cheapest quote a good idea?",
          answer:
            "It can be risky. Prices far below market usually mean template reports, unjustified test choices and no revision support. A report you cannot defend when the committee asks “why this test?” means paying for the work twice. Look at what's included, not just the number.",
        },
        {
          question: "How do I find the most affordable statistical analysis service?",
          answer:
            "“Most affordable” means the lowest total cost, not the lowest headline number. Once revision fees, additional-analysis fees and rush surcharges are added to a cheap-looking quote, the total often exceeds the market average. When comparing, ask whether revisions, output files and Q&A support are included. GetBayes pricing is research-friendly: revisions, the initial assessment and the Power BI analysis are free; you pay one number and it doesn't change.",
        },
        {
          question: "Do I pay extra for revisions?",
          answer:
            "No. The price is fully independent of delivery and revisions: if your advisor or committee wants a different test, additional analyses or new tables, we update the work on the same dataset for free. The written quote you get up front never grows through revisions.",
        },
        {
          question: "Is the initial assessment really free?",
          answer:
            "Yes. Reviewing your data and research questions, telling you which analyses are needed and giving you a quote costs nothing, and you are under no obligation to accept. Our free Power BI analysis offer is equally unconditional.",
        },
        {
          question: "Do you only work with graduate students?",
          answer:
            "No. Alongside master's, PhD and medical specialty students, we work with undergraduates running capstone or research projects and with independent researchers not affiliated with any institution. Pricing follows the same logic for everyone: the scope of the study.",
        },
        {
          question: "Does urgent delivery cost extra?",
          answer:
            "Across the market, 24–72 hour rush jobs are charged above normal rates. At GetBayes the analysis itself is usually done in 15 minutes with same-day delivery — hours, even minutes — so urgency rarely adds cost; if your defense or submission date is close, just let us know.",
        },
      ],
      cta: {
        heading: "Get a real number, not a guess",
        text: "Send your data and research questions — we'll reply within 24 hours with a free assessment and a written quote that doesn't change.",
        button: "Get a Free Quote",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default pricing;
