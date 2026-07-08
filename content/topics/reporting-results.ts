import type { Topic } from "../types";

const reportingResults: Topic = {
  key: "reporting-results",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  related: ["which-test", "article-statistics", "sample-size"],
  locales: {
    tr: {
      metaTitle:
        "İstatistik Sonuçları Nasıl Raporlanır? APA Formatı ve Bulgular Bölümü | GetBayes",
      metaDescription:
        "p değeri nasıl yazılır, etki büyüklüğü nasıl raporlanır, bulgular bölümü nasıl yapılandırılır? Test test APA örnekleriyle istatistik raporlama rehberi.",
      headline: "İstatistik Sonuçları Nasıl Raporlanır? (APA Örnekleriyle)",
      lead: [
        "Bir istatistik sonucunu raporlamanın standart formülü şudur: test istatistiği + serbestlik derecesi + p değeri + etki büyüklüğü, ardından bulgunun günlük akademik dille bir cümlelik yorumu. Örneğin: \"Deney grubunun puanları kontrol grubundan anlamlı düzeyde yüksekti, t(58) = 2.31, p = .024, d = 0.61.\" Sadece \"p < .05, anlamlı çıktı\" yazmak eksik rapordur — jüri ve hakemler etki büyüklüğünü ve tam p değerini görmek ister.",
        "Bu rehberde en sık kullanılan testlerin APA formatındaki yazımını, bulgular bölümünün nasıl yapılandırılacağını ve en sık yapılan raporlama hatalarını topladık.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Analizleri bitmiş, bulgular bölümünü yazma aşamasındaki tez öğrencileri",
          "Hakemden \"istatistiksel raporlama yetersiz\" notu alan makale yazarları",
          "SPSS çıktısını akademik metne nasıl çevireceğinden emin olamayanlar",
          "APA 7 formatına uygun tablo ve metin hazırlaması gerekenler",
        ],
      },
      sections: [
        {
          type: "bullets",
          heading: "Genel kurallar: her testte geçerli",
          intro:
            "Hangi testi kullanırsanız kullanın, şu kurallar rapor kalitenizi belirler:",
          items: [
            "İstatistik sembolleri italik yazılır: t, F, p, r, d, M, SD. (Yunan harfleri italik yazılmaz: χ², η².)",
            "p değeri tam olarak raporlanır: p = .024 gibi. \"p < .05\" yazımı yalnız tablolarda ve toplu gösterimlerde tercih edilir.",
            "SPSS'in gösterdiği \"p = .000\" asla olduğu gibi yazılmaz — doğrusu p < .001'dir.",
            "1'i aşamayan istatistiklerde (p, r, η²) başına sıfır konmaz: p = .024, r = .42. 1'i aşabilenlerde konur: d = 0.61, t = 2.31.",
            "Etki büyüklüğü her ana bulguda raporlanır: Cohen d, η²p, r, Cramér V — testinize uygun olanı.",
            "Betimsel istatistikler bulgudan önce verilir: grupların ortalama ve standart sapmaları (M, SD) okuyucunun sonucu anlamlandırmasını sağlar.",
            "Sayısal sonuç tek başına bırakılmaz — her istatistiksel cümleye bulgunun ne anlama geldiğini söyleyen düz bir Türkçe cümle eşlik eder.",
          ],
        },
        {
          type: "table",
          heading: "Test test APA yazım örnekleri",
          intro:
            "En sık kullanılan testler için örnek raporlama cümleleri. Rakamları kendi bulgularınızla değiştirerek şablon gibi kullanabilirsiniz:",
          columns: ["Test", "Örnek APA yazımı"],
          rows: [
            [
              "Bağımsız örneklem t-testi",
              "Deney grubu (M = 78.4, SD = 8.2) kontrol grubundan (M = 71.9, SD = 9.1) anlamlı düzeyde yüksek puan aldı, t(58) = 2.31, p = .024, d = 0.61.",
            ],
            [
              "Eşleştirilmiş t-testi",
              "Son test puanları ön test puanlarından anlamlı düzeyde yüksekti, t(29) = 4.12, p < .001, d = 0.75.",
            ],
            [
              "Tek yönlü ANOVA",
              "Gruplar arasında anlamlı fark bulundu, F(2, 87) = 5.42, p = .006, η²p = .11. Tukey testine göre fark A ve C grupları arasındaydı (p = .004).",
            ],
            [
              "Ki-kare bağımsızlık testi",
              "Cinsiyet ile tercih arasında anlamlı ilişki saptandı, χ²(1, N = 120) = 6.85, p = .009, Cramér V = .24.",
            ],
            [
              "Pearson korelasyonu",
              "Kaygı ile akademik başarı arasında negatif yönde anlamlı ilişki bulundu, r(98) = -.42, p < .001.",
            ],
            [
              "Çoklu doğrusal regresyon",
              "Model anlamlıydı, F(3, 116) = 14.20, p < .001, ve varyansın %27'sini açıkladı (R² = .27). En güçlü yordayıcı öz-yeterlikti, β = .38, t = 3.20, p = .002.",
            ],
            [
              "Mann-Whitney U",
              "Gruplar arasında anlamlı fark vardı, U = 245.5, z = -2.10, p = .036, r = .27.",
            ],
            [
              "Cronbach alfa",
              "Ölçeğin iç tutarlılığı yüksekti (α = .87).",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Bulgular bölümü nasıl yapılandırılır?",
          intro:
            "İyi bir bulgular bölümü, okuyucuyu veriden sonuca kademeli olarak taşır:",
          steps: [
            {
              title: "Örneklemi tanıtın",
              description:
                "Katılımcı sayısı, demografik dağılımlar ve ölçek puanlarının betimsel istatistikleri (M, SD, aralık) ile başlayın — çoğunlukla tek tabloda.",
            },
            {
              title: "Varsayım kontrollerini raporlayın",
              description:
                "Normallik (Shapiro-Wilk, çarpıklık-basıklık), varyans homojenliği (Levene) gibi kontrollerin sonucunu ve buna göre hangi testi seçtiğinizi kısaca belirtin.",
            },
            {
              title: "Her araştırma sorusunu sırayla yanıtlayın",
              description:
                "Araştırma sorularınızın sırasını izleyin: soruyu hatırlatın, ilgili testi APA formatında raporlayın, bulgunun anlamını bir cümleyle söyleyin.",
            },
            {
              title: "Tablo ve grafiklerle destekleyin",
              description:
                "Üçten fazla sayı içeren karşılaştırmaları tabloya taşıyın; metinde tabloya atıf verin (\"Tablo 3'te görüldüğü gibi...\"). Aynı bilgiyi hem tabloda hem metinde tekrarlamayın.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "En sık yapılan raporlama hataları",
          intro: "Jüri ve hakemlerin ilk yakaladığı hatalar şunlar:",
          items: [
            "p = .000 yazmak — SPSS'in yuvarlamasıdır, doğrusu p < .001.",
            "Etki büyüklüğünü atlamak — \"anlamlı\" olması etkinin büyük olduğu anlamına gelmez; küçük bir etki büyük örneklemde de anlamlı çıkar.",
            "\"Anlamlı = önemli\" karışıklığı — istatistiksel anlamlılık pratik önem iddiası değildir; yorum cümlenizde bu ayrımı koruyun.",
            "SPSS tablolarını olduğu gibi teze yapıştırmak — SPSS çıktısı APA tablo formatı değildir; tablolar yeniden düzenlenmelidir.",
            "Yalnızca anlamlı çıkan sonuçları raporlamak — anlamlı çıkmayan bulgular da raporlanır; hipotezin desteklenmemesi de bir bulgudur.",
            "Ondalık tutarsızlığı — istatistikler genellikle iki ondalıkla (t = 2.31), p değerleri iki-üç ondalıkla (p = .024) raporlanır; metin boyunca aynı düzeni koruyun.",
            "Nedensellik dili — korelasyon ve kesitsel karşılaştırma bulgularını \"etkiledi, yol açtı\" diye yorumlamak; \"ilişkili bulundu\" demek gerekir.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "SPSS p değerini .000 gösteriyor, nasıl yazmalıyım?",
          answer:
            "p < .001 olarak yazın. SPSS üç ondalık basamağa yuvarladığı için .000 gösterir; p değeri hiçbir zaman tam olarak sıfır olamaz, bu yüzden .000 yazımı hatalı kabul edilir.",
        },
        {
          question: "Anlamlı çıkmayan sonuçları raporlamalı mıyım?",
          answer:
            "Evet, mutlaka. Hipotezinizin desteklenmemesi de bir bulgudur ve aynı formatta raporlanır: t(58) = 1.12, p = .268, d = 0.29. Yalnızca anlamlı sonuçları raporlamak seçici raporlama sayılır ve etik bir sorundur.",
        },
        {
          question: "Etki büyüklüğü raporlamak zorunlu mu?",
          answer:
            "APA 7 ve çoğu dergi yönergesi etki büyüklüğünü açıkça ister; birçok jüri de sorar. Cohen'in sınıflaması kabaca şöyledir: d için 0.2 küçük, 0.5 orta, 0.8 büyük; η²p için .01 küçük, .06 orta, .14 büyük. Hangi ölçünün raporlanacağı kullanılan teste bağlıdır.",
        },
        {
          question: "SPSS tablolarını doğrudan tezime koyabilir miyim?",
          answer:
            "Hayır. SPSS çıktı tabloları APA formatında değildir: gereksiz sütunlar içerir, biçimi uymaz. Tablolar APA 7 düzenine göre (başlık üstte italik, yatay çizgiler sınırlı, gereken sütunlar seçilmiş) yeniden oluşturulmalıdır. GetBayes raporlarındaki tablolar doğrudan teze eklenebilecek formatta hazırlanır.",
        },
        {
          question: "Kaç ondalık basamak kullanmalıyım?",
          answer:
            "Yaygın kural: ortalama, standart sapma ve test istatistikleri iki ondalık (M = 78.42, t = 2.31); p değerleri iki veya üç ondalık (p = .024); korelasyonlar iki ondalık (r = .42). Seçtiğiniz düzeni metin boyunca tutarlı uygulayın.",
        },
        {
          question: "Bulgular bölümümü sizin için kontrol etmeniz mümkün mü?",
          answer:
            "Evet. Analizleri biz yaptıysak rapor zaten bu formatta teslim edilir; kendi yaptığınız analizlerin raporlamasını da kontrol edip düzeltebiliriz. Verinizi ve mevcut metninizi gönderin, ücretsiz ön değerlendirmeyle dönelim.",
        },
      ],
      cta: {
        heading: "Bulgular bölümünüz yayına hazır olsun",
        text: "Analiz raporlarımız APA formatında tablolar ve akademik dille yazılmış yorumlarla teslim edilir — savunmaya ve dergiye hazır. Verinizi gönderin, 24 saat içinde dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "How to Report Statistical Results in APA Style: Results Section Guide | GetBayes",
      metaDescription:
        "How to write p-values, report effect sizes, and structure a results section — an APA reporting guide with copy-ready examples for every common test.",
      headline: "How to Report Statistical Results (With APA Examples)",
      lead: [
        "The standard formula for reporting a statistical result is: test statistic + degrees of freedom + p-value + effect size, followed by one plain-language sentence saying what the finding means. For example: “The experimental group scored significantly higher than the control group, t(58) = 2.31, p = .024, d = 0.61.” Writing only “p < .05, significant” is an incomplete report — committees and reviewers expect the exact p-value and an effect size.",
        "This guide collects APA-style write-ups for the most common tests, shows how to structure a results section, and lists the reporting mistakes reviewers catch first.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Thesis students whose analyses are done and who are now writing the results chapter",
          "Manuscript authors who received a “statistical reporting is insufficient” reviewer note",
          "Anyone unsure how to translate SPSS output into academic prose",
          "Researchers preparing APA 7–compliant tables and text",
        ],
      },
      sections: [
        {
          type: "bullets",
          heading: "General rules that apply to every test",
          intro:
            "Whatever test you ran, these rules set the quality of your report:",
          items: [
            "Statistical symbols are italicized: t, F, p, r, d, M, SD. (Greek letters are not: χ², η².)",
            "Report exact p-values: p = .024. Reserve “p < .05” for tables and grouped displays.",
            "Never copy SPSS's “p = .000” — the correct form is p < .001.",
            "No leading zero for statistics that cannot exceed 1 (p, r, η²): p = .024, r = .42. Keep it for those that can: d = 0.61, t = 2.31.",
            "Report an effect size with every main finding: Cohen's d, η²p, r, Cramér's V — whichever fits your test.",
            "Give descriptives before the inference: group means and standard deviations (M, SD) let the reader make sense of the result.",
            "Never leave a number alone — every statistical sentence gets a plain-language companion stating what the finding means.",
          ],
        },
        {
          type: "table",
          heading: "APA write-ups, test by test",
          intro:
            "Copy-ready example sentences for the most common tests — swap in your own numbers:",
          columns: ["Test", "Example APA write-up"],
          rows: [
            [
              "Independent-samples t-test",
              "The experimental group (M = 78.4, SD = 8.2) scored significantly higher than the control group (M = 71.9, SD = 9.1), t(58) = 2.31, p = .024, d = 0.61.",
            ],
            [
              "Paired-samples t-test",
              "Post-test scores were significantly higher than pre-test scores, t(29) = 4.12, p < .001, d = 0.75.",
            ],
            [
              "One-way ANOVA",
              "A significant difference was found between groups, F(2, 87) = 5.42, p = .006, η²p = .11. Tukey's test located the difference between groups A and C (p = .004).",
            ],
            [
              "Chi-square test of independence",
              "A significant association was found between gender and preference, χ²(1, N = 120) = 6.85, p = .009, Cramér's V = .24.",
            ],
            [
              "Pearson correlation",
              "Anxiety was significantly and negatively related to academic achievement, r(98) = -.42, p < .001.",
            ],
            [
              "Multiple linear regression",
              "The model was significant, F(3, 116) = 14.20, p < .001, explaining 27% of the variance (R² = .27). The strongest predictor was self-efficacy, β = .38, t = 3.20, p = .002.",
            ],
            [
              "Mann-Whitney U",
              "Groups differed significantly, U = 245.5, z = -2.10, p = .036, r = .27.",
            ],
            [
              "Cronbach's alpha",
              "The scale showed high internal consistency (α = .87).",
            ],
          ],
        },
        {
          type: "steps",
          heading: "How to structure the results section",
          intro:
            "A good results section carries the reader from data to conclusion in stages:",
          steps: [
            {
              title: "Introduce the sample",
              description:
                "Start with participant counts, demographic breakdowns and descriptive statistics for the scales (M, SD, range) — usually in a single table.",
            },
            {
              title: "Report assumption checks",
              description:
                "Briefly state the outcome of normality (Shapiro-Wilk, skewness-kurtosis) and homogeneity (Levene's) checks, and which test you therefore chose.",
            },
            {
              title: "Answer each research question in order",
              description:
                "Follow the order of your research questions: restate the question, report the relevant test in APA style, and say in one sentence what the finding means.",
            },
            {
              title: "Support with tables and figures",
              description:
                "Move comparisons with more than three numbers into a table; refer to it in text (“As shown in Table 3...”). Don't repeat the same values in both table and text.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "The most common reporting mistakes",
          intro: "These are the errors committees and reviewers catch first:",
          items: [
            "Writing p = .000 — it's SPSS rounding; the correct form is p < .001.",
            "Omitting effect sizes — “significant” doesn't mean the effect is large; a tiny effect turns significant in a big enough sample.",
            "Conflating “significant” with “important” — statistical significance is not a claim of practical importance; keep the distinction in your interpretation.",
            "Pasting SPSS tables straight into the thesis — SPSS output is not APA table format; tables must be rebuilt.",
            "Reporting only significant results — non-significant findings are reported too; an unsupported hypothesis is still a finding.",
            "Inconsistent decimals — statistics usually take two decimals (t = 2.31), p-values two or three (p = .024); keep one scheme throughout.",
            "Causal language — interpreting correlational or cross-sectional findings as “affected, caused”; say “was associated with” instead.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "SPSS shows my p-value as .000 — how should I write it?",
          answer:
            "Write p < .001. SPSS rounds to three decimal places, which produces .000; a p-value can never be exactly zero, so .000 is considered an error.",
        },
        {
          question: "Should I report non-significant results?",
          answer:
            "Yes, always. An unsupported hypothesis is still a finding and is reported in the same format: t(58) = 1.12, p = .268, d = 0.29. Reporting only significant results counts as selective reporting and is an ethical problem.",
        },
        {
          question: "Is reporting effect sizes mandatory?",
          answer:
            "APA 7 and most journal guidelines explicitly require them, and many committees ask. Cohen's rough benchmarks: for d, 0.2 is small, 0.5 medium, 0.8 large; for η²p, .01 small, .06 medium, .14 large. Which measure to report depends on the test used.",
        },
        {
          question: "Can I put SPSS tables directly into my thesis?",
          answer:
            "No. SPSS output tables are not APA-formatted: they carry unnecessary columns and the wrong layout. Tables should be rebuilt to APA 7 conventions (italic title above, minimal horizontal rules, only the needed columns). Tables in GetBayes reports are delivered ready to drop into a thesis.",
        },
        {
          question: "How many decimal places should I use?",
          answer:
            "The common convention: means, standard deviations and test statistics take two decimals (M = 78.42, t = 2.31); p-values two or three (p = .024); correlations two (r = .42). Whatever scheme you choose, apply it consistently throughout.",
        },
        {
          question: "Can you check my results section for me?",
          answer:
            "Yes. If we run your analyses, the report is delivered in this format already; if you ran your own, we can review and correct the reporting. Send your data and current text — we'll reply with a free assessment.",
        },
      ],
      cta: {
        heading: "Make your results section publication-ready",
        text: "Our analysis reports come with APA-formatted tables and academically written interpretation — ready for your defense and your journal. Send your data and we'll reply within 24 hours.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default reportingResults;
