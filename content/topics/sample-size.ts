import type { Topic } from "../types";

const sampleSize: Topic = {
  key: "sample-size",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-10",
  related: ["which-test", "thesis-statistics", "biostatistics"],
  locales: {
    tr: {
      metaTitle: "Örneklem Büyüklüğü Nasıl Hesaplanır? Etik Kurul Rehberi | GetBayes",
      metaDescription:
        "Tez ve etik kurul başvurusu için örneklem büyüklüğü hesaplama rehberi: güç analizi mantığı, gereken bilgiler, G*Power, yaygın hatalar ve hazır gerekçe metni desteği.",
      headline: "Örneklem Büyüklüğü Nasıl Hesaplanır?",
      lead: [
        "Örneklem büyüklüğü, çalışmaya başlamadan önce a priori güç analiziyle hesaplanır ve dört bilgiye dayanır: kullanacağınız istatistiksel test, beklenen etki büyüklüğü (literatürden veya pilot çalışmadan), anlamlılık düzeyi (genellikle α = 0.05) ve hedeflenen güç (genellikle 0.80, sağlıkta sıklıkla 0.90). Bu dört değer belirlendiğinde gereken minimum katılımcı sayısı hesaplanır — etik kurulların başvuruda istediği 'örneklem gerekçesi' tam olarak budur.",
        "Bu rehber hesabın mantığını ve adımlarını anlatır. Değerlerinizi bize gönderirseniz hesabı kendi Python tabanlı analiz altyapımızla yapar; farklı etki büyüklüğü varsayımları altında gereken örneklemin nasıl değiştiğini gösteren duyarlılık (sensitivity) analizi ve grafiklerle birlikte, etik kurul başvurunuza doğrudan yapıştırabileceğiniz gerekçe metniyle teslim ederiz.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Etik kurul başvurusunda 'örneklem büyüklüğü gerekçesi' istenen araştırmacılar",
          "Tez önerisi hazırlayan ve kaç katılımcı gerektiğini bilmek isteyen öğrenciler",
          "Hakemden 'güç analizi eksik' notu alan yazarlar",
          "Veri toplamış ve mevcut örneklemin yeterli olup olmadığını merak edenler (post-hoc güç)",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Hesabın dört adımı",
          steps: [
            {
              title: "Testi belirleyin",
              description:
                "Örneklem hesabı analize göre değişir: t-testi, ANOVA, korelasyon, regresyon ve ki-kare için formüller farklıdır. Önce hangi analizi yapacağınız netleşmeli.",
            },
            {
              title: "Etki büyüklüğünü seçin",
              description:
                "Benzer çalışmalardaki etki büyüklüğünü literatürden alın; yoksa Cohen'in küçük-orta-büyük ölçütlerinden alanınıza uygun olanı seçin ve gerekçelendirin.",
            },
            {
              title: "α ve gücü belirleyin",
              description:
                "Yaygın kabul: α = 0.05, güç = 0.80. Klinik çalışmalarda ve güçlü kanıt istenen alanlarda güç 0.90'a çekilir.",
            },
            {
              title: "Hesaplayın ve kayıp payı ekleyin",
              description:
                "Değerleri girip hesaplayın — kendiniz yapacaksanız G*Power (ücretsiz) yaygın bir araçtır. Anket ve takip çalışmalarında %10-20 veri kaybı payı ekleyerek hedef sayıyı belirleyin.",
            },
          ],
        },
        {
          type: "table",
          heading: "Cohen'in etki büyüklüğü ölçütleri",
          intro:
            "Literatürden değer bulunamadığında yaygın kabul gören referans değerler:",
          columns: ["Analiz", "Ölçüt", "Küçük", "Orta", "Büyük"],
          rows: [
            ["t-testi (iki grup)", "Cohen's d", "0.20", "0.50", "0.80"],
            ["ANOVA", "f", "0.10", "0.25", "0.40"],
            ["Korelasyon", "r", "0.10", "0.30", "0.50"],
            ["Çoklu regresyon", "f²", "0.02", "0.15", "0.35"],
            ["Ki-kare", "w", "0.10", "0.30", "0.50"],
          ],
        },
        {
          type: "table",
          heading: "Örnek: yaygın senaryolar için gereken örneklem",
          intro:
            "α = 0.05, güç = 0.80, iki yönlü test için yaklaşık değerler (Python tabanlı hesaplamayla üretilmiştir):",
          columns: ["Senaryo", "Etki büyüklüğü", "Gereken toplam n"],
          rows: [
            ["Bağımsız t-testi, orta etki", "d = 0.50", "128 (grup başına 64)"],
            ["Bağımsız t-testi, büyük etki", "d = 0.80", "52 (grup başına 26)"],
            ["Tek yönlü ANOVA, 3 grup, orta etki", "f = 0.25", "159 (grup başına 53)"],
            ["Korelasyon, orta etki", "r = 0.30", "84"],
            ["Çoklu regresyon, 5 yordayıcı, orta etki", "f² = 0.15", "92"],
          ],
        },
        {
          type: "bullets",
          heading: "Etik kurulların reddetme nedenleri: yaygın hatalar",
          items: [
            "Gerekçesiz sayı: 'literatürde 100 kullanılmış, biz de 100 aldık' — güç analizi değildir, çoğu kurul kabul etmez",
            "Testten bağımsız hesap: anketteki soru sayısına veya evren tablosuna göre hesap yapıp analizde farklı test kullanmak",
            "Etki büyüklüğünü kaynaksız seçmek — 'orta etki varsayıldı' cümlesi tek başına yetersizdir, dayanak istenir",
            "Kayıp payını unutmak: hesaplanan minimum sayıyla başvurup çalışmayı eksik örneklemle bitirmek",
            "Post-hoc gücü a priori hesap yerine sunmak — kurullar çalışma öncesi hesap ister",
          ],
        },
        {
          type: "paragraphs",
          heading: "Veri zaten toplandıysa: post-hoc güç",
          body: [
            "Çalışma tamamlandıktan sonra 'örneklemim yeterli miydi?' sorusu post-hoc (gözlenen) güç analiziyle yanıtlanır: eldeki örneklem, gözlenen etki büyüklüğü ve α ile ulaşılan güç hesaplanır. Hakemler bazen bunu ister; ancak yorumu dikkat gerektirir — anlamlı çıkmayan bulguda düşük post-hoc güç, 'etki yok' ile 'etkiyi görecek güç yok' arasındaki farkı göstermek için kullanılır. Raporlarımızda bu ayrımı açıkça yazarız.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Etik kurul başvurusu için örneklem hesabını yapıyor musunuz?",
          answer:
            "Evet — en sık verdiğimiz hizmetlerden biri. Çalışma tasarımınızı ve planladığınız analizi bize iletin; hesabı Python tabanlı analizlerimizle yapar, duyarlılık (sensitivity) grafikleriyle desteklenmiş bir rapor ve başvuru formuna doğrudan yapıştırabileceğiniz gerekçe paragrafıyla (test, etki büyüklüğü kaynağı, α, güç, hesaplanan n ve kayıp payı) teslim ederiz.",
        },
        {
          question: "Pilot çalışmam yok, etki büyüklüğünü nereden bulacağım?",
          answer:
            "Önce benzer ölçekleri/karşılaştırmaları kullanan yayınlara bakılır; makalelerdeki ortalama ve standart sapmalardan etki büyüklüğü hesaplanabilir. Hiç kaynak yoksa Cohen'in orta etki ölçütü, gerekçesi yazılarak kullanılır — kurullar bu yaklaşımı kabul eder.",
        },
        {
          question: "G*Power'ı kendim kullanabilir miyim?",
          answer:
            "Evet, ücretsiz ve yaygın bir araçtır. Zorluk genellikle programda değil doğru test ailesini, kuyruk sayısını ve etki büyüklüğü tipini seçmektedir — yanlış seçim ciddi farklı sonuç verir. Emin değilseniz değerlerinizi gönderin, hesabı kontrol edelim.",
        },
        {
          question: "Evren belliyse (ör. bir hastanedeki hemşireler) hesap değişir mi?",
          answer:
            "Evet. Sınırlı evrenlerde sonlu evren düzeltmesi uygulanır ve gereken örneklem küçülür. Kesitsel prevalans çalışmalarında ise güç analizi yerine oran tahminine dayalı formüller (evren, beklenen oran, hata payı) kullanılır — tasarımınıza uygun olanı belirleriz.",
        },
        {
          question: "Hesaplanan sayıya ulaşamazsam çalışma çöp mü olur?",
          answer:
            "Hayır, ama sınırlılık olarak raporlanmalıdır. Ayrıca daha büyük etki varsayımıyla gücün yeniden hesaplanması veya analiz planının sadeleştirilmesi gibi savunulabilir yollar vardır — durumunuza göre en dürüst çerçeveyi birlikte kurarız.",
        },
      ],
      cta: {
        heading: "Örneklem hesabınızı bize bırakın",
        text: "Çalışma tasarımınızı gönderin; hesap + etik kurul gerekçe metnini hazır teslim edelim.",
        button: "Güç Analizi Talep Et",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "How to Calculate Sample Size — Ethics Committee Guide | GetBayes",
      metaDescription:
        "Sample size calculation for theses and ethics applications: the logic of power analysis, required inputs, G*Power, common mistakes and ready-to-paste justification text.",
      headline: "How Is Sample Size Calculated?",
      lead: [
        "Sample size is calculated before a study begins using a priori power analysis, and it rests on four inputs: the statistical test you will use, the expected effect size (from the literature or a pilot study), the significance level (usually α = 0.05), and the target power (usually 0.80, often 0.90 in health research). Once these four are set, the minimum number of participants required is computed — this is exactly the “sample size justification” ethics committees ask for.",
        "This guide explains the logic and the steps. Send us your study details and we'll run the calculation with our own Python-based analysis stack, deliver it with sensitivity-analysis graphs showing how the required sample shifts under different effect-size assumptions, and a justification paragraph you can paste straight into your ethics application.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Researchers whose ethics application requires a sample size justification",
          "Students preparing a thesis proposal who need to know how many participants are required",
          "Authors told by reviewers that a power analysis is missing",
          "Anyone who has already collected data and wonders if the sample was sufficient (post-hoc power)",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "The four steps of the calculation",
          steps: [
            {
              title: "Fix the test",
              description:
                "The calculation depends on the analysis: formulas differ for t-tests, ANOVA, correlation, regression and chi-square. Decide the analysis first.",
            },
            {
              title: "Choose the effect size",
              description:
                "Take the effect size from similar published studies; if none exist, choose Cohen's small-medium-large benchmark appropriate to your field and justify it.",
            },
            {
              title: "Set α and power",
              description:
                "The common convention: α = 0.05, power = 0.80. Clinical studies and fields demanding strong evidence raise power to 0.90.",
            },
            {
              title: "Compute and add attrition",
              description:
                "Run the calculation — if doing it yourself, G*Power (free) is a common tool. For surveys and follow-up studies add a 10-20% attrition margin to set the recruitment target.",
            },
          ],
        },
        {
          type: "table",
          heading: "Cohen's effect size benchmarks",
          intro: "Widely accepted reference values when the literature offers none:",
          columns: ["Analysis", "Measure", "Small", "Medium", "Large"],
          rows: [
            ["t-test (two groups)", "Cohen's d", "0.20", "0.50", "0.80"],
            ["ANOVA", "f", "0.10", "0.25", "0.40"],
            ["Correlation", "r", "0.10", "0.30", "0.50"],
            ["Multiple regression", "f²", "0.02", "0.15", "0.35"],
            ["Chi-square", "w", "0.10", "0.30", "0.50"],
          ],
        },
        {
          type: "table",
          heading: "Example: required samples for common scenarios",
          intro:
            "Approximate values for α = 0.05, power = 0.80, two-tailed (produced with a Python-based calculation):",
          columns: ["Scenario", "Effect size", "Total n required"],
          rows: [
            ["Independent t-test, medium effect", "d = 0.50", "128 (64 per group)"],
            ["Independent t-test, large effect", "d = 0.80", "52 (26 per group)"],
            ["One-way ANOVA, 3 groups, medium effect", "f = 0.25", "159 (53 per group)"],
            ["Correlation, medium effect", "r = 0.30", "84"],
            ["Multiple regression, 5 predictors, medium effect", "f² = 0.15", "92"],
          ],
        },
        {
          type: "bullets",
          heading: "Why ethics committees reject: common mistakes",
          items: [
            "Unjustified numbers: “a similar study used 100, so we did too” — that isn't a power analysis, and most committees won't accept it",
            "Calculating independently of the test: basing the number on survey length or a population table, then running a different analysis",
            "Choosing an effect size without a source — “a medium effect was assumed” alone is insufficient; grounds are expected",
            "Forgetting attrition: applying with the bare minimum and finishing the study underpowered",
            "Presenting post-hoc power instead of an a priori calculation — committees want the pre-study computation",
          ],
        },
        {
          type: "paragraphs",
          heading: "If the data is already collected: post-hoc power",
          body: [
            "After a study is complete, “was my sample sufficient?” is answered with post-hoc (observed) power analysis: the achieved power is computed from the actual sample, the observed effect size and α. Reviewers sometimes request this; its interpretation needs care — for a non-significant finding, low post-hoc power is used to distinguish “there is no effect” from “there wasn't enough power to see the effect.” Our reports state this distinction explicitly.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Do you run sample size calculations for ethics applications?",
          answer:
            "Yes — it's one of our most requested services. Send your study design and planned analysis; we run the calculation with our own Python-based analysis stack and deliver it with sensitivity-analysis graphs plus a justification paragraph (test, effect size source, α, power, computed n and attrition margin) ready to paste into the application form.",
        },
        {
          question: "I have no pilot study — where do I get an effect size?",
          answer:
            "First look at publications using similar scales or comparisons; effect sizes can be computed from their reported means and standard deviations. If nothing exists, Cohen's medium benchmark is used with a written justification — committees accept this approach.",
        },
        {
          question: "Can I use G*Power myself?",
          answer:
            "Yes — it's free and widely used. The difficulty is usually not the software but selecting the right test family, tails and effect size type; a wrong choice yields a seriously different answer. If unsure, send us your inputs and we'll check the calculation.",
        },
        {
          question: "Does the calculation change when the population is finite (e.g. nurses at one hospital)?",
          answer:
            "Yes. A finite population correction applies and reduces the required sample. For cross-sectional prevalence studies, proportion-estimation formulas (population, expected rate, margin of error) are used instead of power analysis — we determine which fits your design.",
        },
        {
          question: "Is the study worthless if I can't reach the computed number?",
          answer:
            "No, but it must be reported as a limitation. There are also defensible options such as recalculating power under a larger assumed effect or simplifying the analysis plan — we'll frame the most honest version for your situation.",
        },
      ],
      cta: {
        heading: "Leave the sample size calculation to us",
        text: "Send your study design — we'll deliver the calculation plus a ready ethics-committee justification text.",
        button: "Request a Power Analysis",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default sampleSize;
