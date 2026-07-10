import type { Topic } from "../types";

const sampleReport: Topic = {
  key: "sample-report",
  kind: "guide",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  related: ["about-us", "article-statistics", "thesis-statistics", "health-use-cases"],
  locales: {
    tr: {
      metaTitle: "Örnek İstatistik Raporu — Bir GetBayes Raporu Nasıl Görünür? | GetBayes",
      metaDescription:
        "Veri göndermeden önce raporun nasıl göründüğünü görün: kurgusal verilerle hazırlanmış örnek yönetici özeti, tablolar, etki büyüklükleri ve tartışma bölümü.",
      headline: "Örnek Rapor: Bir GetBayes Raporu Nasıl Görünür?",
      lead: [
        "ÖRNEKTİR: Aşağıdaki çalışma gerçek değildir — hiçbir gerçek katılımcıya, kuruma veya veri setine ait değildir; yalnızca bir GetBayes raporunun kapsamını ve formatını göstermek amacıyla, baştan sona kurgusal verilerle oluşturulmuştur. Gerçek raporlarımız sizin kendi verinizle, aynı yapıda ve aynı titizlikte hazırlanır.",
        "Bir üniversitenin eğitim biriminde yürütüldüğü varsayılan, sınav kaygısını azaltmaya yönelik bir çalışma becerileri programının etkisini test eden randomize kontrollü bir pilot çalışma üzerinden ilerliyoruz. Amaç sonuçları değil, raporun neyi nasıl sunduğunu göstermek.",
      ],
      audience: {
        heading: "Bu örnek kime fikir verir?",
        items: [
          "Veri göndermeden önce raporun formatını görmek isteyen tez ve makale yazarları",
          "\"Tablolar nasıl görünüyor, etki büyüklüğü nasıl raporlanıyor?\" diye merak edenler",
          "Danışmanına veya jürisine göstereceği raporun ciddiyetinden emin olmak isteyenler",
          "GetBayes ile çalışmadan önce süreci ve çıktıyı somut görmek isteyen herkes",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Kurgusal çalışmanın tasarımı",
          body: [
            "160 üniversite öğrencisi (80 program, 80 standart danışmanlık) randomize edilmiş; 8 haftalık yapılandırılmış çalışma becerileri ve kaygı yönetimi programı, standart akademik danışmanlıkla karşılaştırılmıştır. Birincil sonlanım noktası final sınavı puanıdır (0–100); ikincil ölçümler sınav kaygısı envanteri puanı ve dönem sonu not ortalamasındaki değişimdir.",
            "149 katılımcı (%93,1) çalışmayı tamamlamıştır — bu oran ve kayıp analizi de gerçek raporlarımızda olduğu gibi ayrı bir not olarak sunulur; kayıp oranı gruplar arasında anlamlı fark göstermediğinde bu açıkça belirtilir.",
          ],
        },
        {
          type: "table",
          heading: "Katılımcı Özellikleri (Örnek Tablo)",
          intro: "Gerçek raporlarda her çalışma Tablo 1 ile açılır: gruplar başlangıçta dengeli mi, değil mi — bu netleşmeden hiçbir karşılaştırmaya geçilmez.",
          columns: ["Özellik", "Program (n=76)", "Standart Danışmanlık (n=73)", "p değeri"],
          rows: [
            ["Yaş (yıl), Ort (SS)", "20,4 (1,8)", "20,6 (1,7)", "0,48"],
            ["Kadın, n (%)", "49 (%64,5)", "44 (%60,3)", "0,59"],
            ["Sınıf düzeyi — 1-2. sınıf, n (%)", "31 (%40,8)", "28 (%38,4)", "0,76"],
            ["Başlangıç sınav kaygısı puanı, Ort (SS)", "58,2 (9,4)", "57,6 (9,9)", "0,71"],
            ["Başlangıç dönem ortalaması, Ort (SS)", "2,71 (0,52)", "2,68 (0,55)", "0,74"],
          ],
        },
        {
          type: "table",
          heading: "Birincil Sonuç: Final Sınavı Performansı (Örnek Tablo)",
          intro: "İkinci tabloda gerçek sayıya iniyoruz: gruplar arası fark, güven aralığı ve etki büyüklüğü birlikte raporlanır — yalnızca p değeri asla tek başına yeterli sayılmaz.",
          columns: ["Grup", "n", "Final Sınavı Puanı, Ort (SS)", "Gruplar Arası Fark", "%95 GA", "d"],
          rows: [
            ["Program", "76", "74,8 (11,2)", "—", "—", "—"],
            ["Standart Danışmanlık", "73", "67,4 (12,6)", "+7,4", "3,6; 11,2", "0,52"],
          ],
        },
        {
          type: "bullets",
          heading: "Temel Bulgular (Örnek)",
          items: [
            "Final sınavı puanında programa katılan grup lehine 7,4 puanlık, orta düzeyde etki büyüklüğüne (d = 0,52) karşılık gelen bir fark bulunmuştur (p = 0,003).",
            "Sınav kaygısı envanteri puanında program grubunda 9,8 puanlık ek düşüş gözlenmiştir (d = −0,61; p < 0,001).",
            "Dönem sonu not ortalamasındaki değişim gruplar arasında anlamlı farklılaşmamıştır (fark = +0,08; d = 0,15; p = 0,22) — bu bulgu, anlamlı çıkmasa da raporda olduğu gibi sunulur.",
            "Programa 6 ve üzeri seansa katılanlar, daha az katılanlara kıyasla final sınavında ortalama 4,1 puan daha fazla iyileşme göstermiştir; bu doz-yanıt örüntüsü ayrı bir paragrafta yorumlanmıştır.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Rapor gerçekte neyi içeriyor?",
          body: [
            "Yukarıdaki tablolardaki her sayı, elle girilmiş bir değer değil — analiz kodundan doğrudan üretilir; bu, gerçek raporlarımızda da değişmeyen bir kural. Teslim ettiğimiz paket üç parçadan oluşur: markalı PDF rapor, aynı raporun Word (.docx) hâli ve — talep varsa — kullanılan yöntemlerin gerekçesini ve olası sınırlılıkları ayrıntılandıran ayrı bir teknik/uyarı dokümanı.",
            "Yöntem bölümünde her test seçiminin nedeni yazılıdır (\"neden ANCOVA, neden bu düzeltme\" gibi); varsayım kontrolleri (normallik, varyans homojenliği) sonuç tablolarından önce ayrı bir notta özetlenir. Anlamlı çıkmayan bulgular gizlenmez, olduğu gibi raporlanır — yukarıdaki not ortalaması bulgusu gibi.",
          ],
        },
      ],
      faqHeading: "Merak edilenler",
      faq: [
        {
          question: "Bu gerçek bir çalışma mı?",
          answer:
            "Hayır. Yukarıdaki çalışma, kurum, katılımcı sayıları ve tüm sonuçlar tamamen kurgusaldır; hiçbir gerçek veri setine dayanmaz. Amacı bir GetBayes raporunun format ve titizlik açısından neye benzediğini somut biçimde göstermektir. Gerçek raporlarımız sizin kendi verinizle, aynı yapıda hazırlanır.",
        },
        {
          question: "Rapor sadece PDF olarak mı geliyor?",
          answer:
            "Hayır. Standart teslimat markalı PDF rapor ve aynı içeriğin Word (.docx) hâlini içerir; danışman veya jüri için ek teknik/uyarı dokümanı talep edebilirsiniz.",
        },
        {
          question: "Benim çalışmam bu kadar karmaşık değil, yine de bu formatta mı hazırlanır?",
          answer:
            "Rapor kapsamı çalışmanızın büyüklüğüne göre ölçeklenir — tek grup karşılaştırması yapan küçük bir çalışma daha kısa bir raporla, çok değişkenli bir tasarım daha kapsamlı bir raporla sonuçlanır. Yapı (gerekçeli yöntem, tam istatistik, varsayım kontrolü) her ölçekte aynı kalır.",
        },
        {
          question: "Alanım farklı (örneğin mühendislik veya işletme), yine de yardımcı olur musunuz?",
          answer:
            "Evet. Örnek sağlık ve eğitim bilimlerinden olsa da nicel veri içeren her akademik ve kurumsal çalışmada aynı yapıda rapor hazırlıyoruz.",
        },
        {
          question: "Verimi gönderirsem kendi alanıma yakın bir örnek görebilir miyim?",
          answer:
            "Ücretsiz ön değerlendirme sırasında isterseniz alanınıza yakın, benzer şekilde anonimleştirilmiş bir örnek paylaşabiliriz.",
        },
        {
          question: "Tablolardaki sayılar nereden geliyor, güvenilir mi?",
          answer:
            "Her tablo ve etki büyüklüğü doğrudan analiz kodundan üretilir; rapora elle girilmiş, mentalde hesaplanmış bir sayı yoktur. Bu, hem bu örnek hem de gerçek teslimatlarımız için geçerli sabit bir kural.",
        },
      ],
      cta: {
        heading: "Kendi raporunuzu görmek ister misiniz?",
        text: "Verinizi ve araştırma sorunuzu anlatın; 24 saat içinde ücretsiz ön değerlendirme ve raporun sizde nasıl görüneceğine dair net bir fikirle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Sample Statistical Report — What a GetBayes Report Looks Like | GetBayes",
      metaDescription:
        "See what a GetBayes report looks like before you send your data: a sample executive summary, tables, effect sizes and discussion section, built from fictional data.",
      headline: "Sample Report: What a GetBayes Report Looks Like",
      lead: [
        "THIS IS AN EXAMPLE: The study below is not real — it belongs to no real participants, institution or dataset. It was built end-to-end with fictional data solely to show the scope and format of a GetBayes report. Your own report is built the same way, with your own data.",
        "We walk through a randomized controlled pilot study — set at an unnamed university's education unit — testing a study-skills program aimed at reducing exam anxiety. The point isn't the result; it's how the report presents it.",
      ],
      audience: {
        heading: "Who this example helps",
        items: [
          "Thesis and article authors who want to see the report format before sending data",
          "Anyone wondering \"what do the tables look like, how are effect sizes reported?\"",
          "Researchers who want to be sure the report they'll show their advisor or committee looks serious",
          "Anyone who wants to see the process and output concretely before working with GetBayes",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "The fictional study's design",
          body: [
            "160 university students (80 program, 80 standard advising) were randomized; an 8-week structured study-skills and anxiety-management program was compared against standard academic advising. The primary endpoint is final exam score (0–100); secondary measures are a test-anxiety inventory score and change in term GPA.",
            "149 participants (93.1%) completed the study — that figure and its attrition analysis are presented as a standalone note, exactly as in our real reports; when dropout doesn't differ meaningfully between groups, that's stated plainly.",
          ],
        },
        {
          type: "table",
          heading: "Participant Characteristics (Sample Table)",
          intro: "Every real report opens with a Table 1: are the groups balanced at baseline or not — nothing gets compared until that's settled.",
          columns: ["Characteristic", "Program (n=76)", "Standard Advising (n=73)", "p-value"],
          rows: [
            ["Age (years), Mean (SD)", "20.4 (1.8)", "20.6 (1.7)", "0.48"],
            ["Female, n (%)", "49 (64.5%)", "44 (60.3%)", "0.59"],
            ["Year 1–2 students, n (%)", "31 (40.8%)", "28 (38.4%)", "0.76"],
            ["Baseline test-anxiety score, Mean (SD)", "58.2 (9.4)", "57.6 (9.9)", "0.71"],
            ["Baseline term GPA, Mean (SD)", "2.71 (0.52)", "2.68 (0.55)", "0.74"],
          ],
        },
        {
          type: "table",
          heading: "Primary Outcome: Final Exam Performance (Sample Table)",
          intro: "Table 2 gets to the number that matters: the between-group difference, confidence interval and effect size are reported together — a p-value on its own is never treated as sufficient.",
          columns: ["Group", "n", "Final Exam Score, Mean (SD)", "Between-Group Difference", "95% CI", "d"],
          rows: [
            ["Program", "76", "74.8 (11.2)", "—", "—", "—"],
            ["Standard Advising", "73", "67.4 (12.6)", "+7.4", "3.6; 11.2", "0.52"],
          ],
        },
        {
          type: "bullets",
          heading: "Key Findings (Sample)",
          items: [
            "Final exam scores favored the program group by 7.4 points, a moderate effect size (d = 0.52; p = 0.003).",
            "The program group showed an additional 9.8-point drop in test-anxiety inventory scores (d = −0.61; p < 0.001).",
            "Change in term GPA did not differ significantly between groups (difference = +0.08; d = 0.15; p = 0.22) — a non-significant finding, reported exactly as it appears here.",
            "Students attending 6+ sessions improved 4.1 points more on the final exam than those attending fewer — this dose-response pattern gets its own paragraph in the discussion.",
          ],
        },
        {
          type: "paragraphs",
          heading: "What the report actually contains",
          body: [
            "Every number in the tables above is generated straight from the analysis code, not typed in by hand — that rule never changes, in this example or in a real delivery. What ships is three pieces: a branded PDF report, the same report as a Word (.docx) file, and — on request — a separate technical/notes document detailing the reasoning behind each method choice and any caveats.",
            "The methods section states the reason for every test choice (\"why ANCOVA, why this correction\"); assumption checks (normality, homogeneity of variance) are summarized in a note ahead of the results tables. Non-significant findings aren't hidden — they're reported as they are, like the GPA result above.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Is this a real study?",
          answer:
            "No. The institution, participant counts and every result above are entirely fictional; none of it is drawn from a real dataset. Its purpose is to show, concretely, what a GetBayes report looks like in format and rigor. Your real report is built the same way, with your own data.",
        },
        {
          question: "Does the report only come as a PDF?",
          answer:
            "No. The standard delivery includes a branded PDF report and the same content as a Word (.docx) file; you can request an additional technical/notes document for your advisor or committee.",
        },
        {
          question: "My study is much simpler than this — does it still come in this format?",
          answer:
            "Report scope scales with your study's size — a small single-comparison study gets a shorter report, a multivariable design gets a fuller one. The structure (justified methods, complete statistics, assumption checks) stays the same at every scale.",
        },
        {
          question: "My field is different (engineering, business) — can you still help?",
          answer:
            "Yes. The example is from health and education, but we build the same report structure for any academic or organizational study with quantitative data.",
        },
        {
          question: "If I send my data, can I see an example closer to my field?",
          answer:
            "During the free assessment, we can share a similarly anonymized example closer to your field on request.",
        },
        {
          question: "Where do the numbers in the tables come from — can I trust them?",
          answer:
            "Every table and effect size is generated directly from the analysis code; nothing is typed in by hand or calculated mentally. That's a fixed rule for this example and for every real delivery.",
        },
      ],
      cta: {
        heading: "Want to see your own report?",
        text: "Tell us about your data and research question — within 24 hours we'll reply with a free assessment and a clear picture of what your report will look like.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Explore our services",
    },
  },
};

export default sampleReport;
