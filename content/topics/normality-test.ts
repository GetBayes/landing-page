import type { Topic } from "../types";

const normalityTest: Topic = {
  key: "normality-test",
  kind: "guide",
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  related: [
    "which-test",
    "reporting-results",
    "spss-analysis",
    "regression-interpretation",
    "thesis-statistics",
  ],
  locales: {
    tr: {
      metaTitle:
        "Normallik Testi Nasıl Yapılır? Shapiro-Wilk mi Kolmogorov-Smirnov mu? | GetBayes",
      metaDescription:
        "Normallik testi hangi durumda Shapiro-Wilk, hangi durumda Kolmogorov-Smirnov ile yapılır; çarpıklık-basıklık sınırları, p değeri yorumu ve parametrik/non-parametrik karar tablosu.",
      headline: "Normallik Testi Nasıl Yapılır ve Nasıl Yorumlanır?",
      lead: [
        "Normallik testi, analizden önce verinizin normal dağılıma uyup uymadığını kontrol ederek parametrik mi (t-testi, ANOVA, Pearson) yoksa non-parametrik test mi (Mann-Whitney U, Kruskal-Wallis, Spearman) kullanacağınızı belirleyen adımdır. Pratikte kural nettir: örneklem 50'nin altındaysa Shapiro-Wilk testi, daha büyük örneklemlerde Kolmogorov-Smirnov (Lilliefors düzeltmeli) tercih edilir; her iki testte de p > 0.05 çıkması 'normal dağılımdan sapma yok' anlamına gelir ve parametrik testlere geçebilirsiniz. Ancak normallik, veri setinin tamamında değil, analizin gerektirdiği düzeyde kontrol edilmelidir — grup karşılaştırmalarında her grup için ayrı ayrı, regresyonda ise ham değişkende değil artıklarda (residuals).",
        "Bu rehber testin doğru uygulanışını, sık yapılan hataları ve karar mantığını anlatır. Verinizi bize gönderirseniz normallik kontrolünü grup bazında ve gerektiğinde artıklar üzerinden yapar, çarpıklık-basıklık değerleri ile Q-Q grafiklerini birlikte sunar ve sonucuna göre doğru testi seçip tezinize veya makalenize doğrudan eklenebilecek bir raporla teslim ederiz.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Tez verisini topladıktan sonra hangi testi kullanacağına karar vermeye çalışan öğrenciler",
          "Hakemden 'normallik varsayımı kontrol edilmemiş' notu alan makale yazarları",
          "Shapiro-Wilk sonucu p < 0.05 çıkınca ne yapacağını bilemeyenler",
          "Büyük örneklemde normallik testinin neden sürekli 'anlamlı' çıktığını merak edenler",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Normallik kontrolünün adımları",
          steps: [
            {
              title: "Neyin normalliğini test edeceğinizi belirleyin",
              description:
                "Bağımsız gruplar karşılaştırılıyorsa normallik her grup içinde ayrı ayrı; regresyon veya ANOVA kuruyorsanız ham bağımlı değişkende değil, modelin artıklarında (residuals) test edilir. Bu ayrım, en sık atlanan ve hakemlerin en sık yakaladığı noktadır.",
            },
            {
              title: "Örneklem büyüklüğüne göre testi seçin",
              description:
                "n < 50 için Shapiro-Wilk daha güçlüdür ve standarttır. Daha büyük örneklemlerde Kolmogorov-Smirnov (Lilliefors düzeltmeli) kullanılır; Shapiro-Wilk yaklaşık n = 2000'e kadar uygulanabilir ancak çok büyük örneklemlerde önemsiz sapmaları bile anlamlı bulur.",
            },
            {
              title: "Çarpıklık ve basıklık değerlerine bakın",
              description:
                "Çarpıklık (skewness) ve basıklık (kurtosis) değerlerinin yaklaşık ±1.5 (daha esnek yaklaşımlarda ±2) aralığında kalması, dağılımın pratik anlamda normalden ciddi sapmadığını gösterir. Bu ölçüler, test sonucu sınırda kaldığında karar için gereklidir.",
            },
            {
              title: "Grafikle destekleyin",
              description:
                "Histogram ve özellikle Q-Q grafiği, tek bir p değerinin gizlediği bilgiyi gösterir: sapma dağılımın tamamında mı, yoksa yalnızca birkaç uç değerden mi kaynaklanıyor? Uygulamada karar çoğu zaman p değerine değil, bu bütünsel resme dayanır.",
            },
            {
              title: "Kararı verin ve gerekçesini yazın",
              description:
                "Parametrik testte kalıyorsanız neden (grafikler, çarpıklık-basıklık, örneklem büyüklüğü), non-parametriğe geçiyorsanız neden geçtiğinizi bir cümleyle raporlayın. Hakemi ikna eden şey testin kendisi değil, kararın gerekçesidir.",
            },
          ],
        },
        {
          type: "table",
          heading: "Hangi durumda hangi yöntem?",
          intro:
            "Normallik değerlendirmesinde kullanılan yöntemler ve uygun oldukları durumlar:",
          columns: ["Yöntem", "Ne zaman kullanılır", "Nasıl yorumlanır"],
          rows: [
            [
              "Shapiro-Wilk",
              "Küçük ve orta örneklem (n < 50, pratikte n ≤ 2000)",
              "p > 0.05 → normallikten sapma yok",
            ],
            [
              "Kolmogorov-Smirnov (Lilliefors)",
              "Büyük örneklem (n ≥ 50)",
              "p > 0.05 → normallikten sapma yok",
            ],
            [
              "Çarpıklık / Basıklık",
              "Her örneklemde, teste ek olarak",
              "Yaklaşık ±1.5 (esnek: ±2) aralığı kabul edilebilir",
            ],
            [
              "Q-Q grafiği",
              "Her örneklemde, görsel doğrulama",
              "Noktalar köşegen çizgi etrafında toplanmalı",
            ],
            [
              "Histogram",
              "Dağılımın genel şekli, çok tepelilik kontrolü",
              "Tek tepeli ve kabaca simetrik olması beklenir",
            ],
          ],
        },
        {
          type: "table",
          heading: "Normallik sağlanmazsa hangi teste geçilir?",
          intro:
            "Parametrik testlerin en sık kullanılan non-parametrik karşılıkları:",
          columns: ["Parametrik test", "Non-parametrik karşılığı", "Kullanım"],
          rows: [
            [
              "Bağımsız örneklem t-testi",
              "Mann-Whitney U",
              "İki bağımsız grubun karşılaştırılması",
            ],
            [
              "Eşleştirilmiş t-testi",
              "Wilcoxon işaretli sıralar",
              "Ön test – son test, aynı bireylerde iki ölçüm",
            ],
            [
              "Tek yönlü ANOVA",
              "Kruskal-Wallis H",
              "Üç ve daha fazla bağımsız grup",
            ],
            [
              "Tekrarlı ölçümler ANOVA",
              "Friedman testi",
              "Aynı bireylerde üç ve daha fazla ölçüm",
            ],
            [
              "Pearson korelasyonu",
              "Spearman korelasyonu",
              "İki sürekli değişken arasındaki ilişki",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Sık yapılan hatalar",
          items: [
            "Grup karşılaştırmasında normalliği tüm veri setinde tek seferde test etmek — her grup için ayrı ayrı bakılmalıdır",
            "Regresyon ve ANOVA'da bağımlı değişkenin ham dağılımını test etmek; varsayım artıklara (residuals) aittir",
            "Çok büyük örneklemde p < 0.05 çıktı diye otomatik non-parametriğe geçmek — büyük n'de test, pratikte önemsiz sapmaları da anlamlı bulur; grafik ve çarpıklık-basıklık ile birlikte değerlendirilmelidir",
            "Normalliği sağlamak için gerekçesiz uç değer silmek; uç değer kararı ayrı ve gerekçeli bir karardır",
            "Kategorik veya Likert tek maddelik değişkenlerde normallik testi aramak — bu değişkenler için varsayım zaten geçerli değildir",
            "Test sonucunu raporlamayıp yalnızca 'veriler normal dağılmaktadır' cümlesi yazmak; kullanılan test, istatistik değeri ve p birlikte verilmelidir",
          ],
        },
        {
          type: "paragraphs",
          heading: "'n > 30 ise normallik aranmaz' doğru mu?",
          body: [
            "Kısmen. Merkezi limit teoremi, örneklem büyüdükçe ortalamanın örnekleme dağılımının normale yaklaştığını söyler; bu nedenle yeterince büyük örneklemlerde t-testi ve ANOVA normallikten ılımlı sapmalara karşı oldukça dayanıklıdır. Ancak bu, 'n > 30 ise normallik hiç kontrol edilmez' anlamına gelmez: teorem ortalamanın dağılımı hakkındadır, ham verinin dağılımı hakkında değil ve ciddi çarpıklık ile güçlü uç değerler bu koruma altında da sonuçları bozabilir. Ayrıca 30 sayısının sihirli bir yanı yoktur — gereken büyüklük dağılımın ne kadar çarpık olduğuna bağlıdır.",
            "Doğru yaklaşım, testi mekanik bir geçit olarak değil karar destek aracı olarak kullanmaktır: p değeri, çarpıklık-basıklık, Q-Q grafiği ve örneklem büyüklüğü birlikte okunur. Sınırdaki durumlarda parametrik testte kalıp bunu gerekçelendirmek de, non-parametriğe geçmek de savunulabilir — savunulamayan tek şey, kararın gerekçesiz bırakılmasıdır. Raporlarımızda bu gerekçeyi her zaman açıkça yazarız; danışmanınız veya hakem 'neden bu test?' diye sorduğunda cevabı hazır bulursunuz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Shapiro-Wilk mi Kolmogorov-Smirnov mu kullanmalıyım?",
          answer:
            "Örneklem 50'nin altındaysa Shapiro-Wilk; bu aralıkta istatistiksel gücü daha yüksektir ve standart kabul edilir. 50 ve üzeri örneklemlerde Lilliefors düzeltmeli Kolmogorov-Smirnov kullanılır. Shapiro-Wilk yaklaşık n = 2000'e kadar uygulanabilir, ancak çok büyük örneklemlerde her iki test de önemsiz sapmaları anlamlı bulacağı için sonucu grafiklerle birlikte yorumlamak gerekir.",
        },
        {
          question: "Normallik testinde p < 0.05 çıktı, ne yapmalıyım?",
          answer:
            "Otomatik olarak non-parametriğe geçmeden önce üç şeye bakın: çarpıklık-basıklık değerleri ±1.5 aralığında mı, Q-Q grafiğindeki sapma dağılımın tamamında mı yoksa birkaç uç değerde mi, örneklem büyüklüğünüz ne? Büyük örneklemde küçük ve pratik önemi olmayan sapmalar da p < 0.05 verir. Tablo hâlâ ciddi sapma gösteriyorsa non-parametrik karşılığa geçmek doğru karardır.",
        },
        {
          question: "Normalliği hangi değişkende test etmeliyim?",
          answer:
            "Bağımlı (sürekli) değişkende — ama analiz tipine göre farklı düzeyde. İki grup karşılaştırıyorsanız her grup içinde ayrı ayrı; regresyon veya ANOVA kuruyorsanız modelin artıklarında (residuals). Bağımsız değişkenlerin veya kategorik değişkenlerin normal dağılması gerekmez; bu yaygın bir yanlış anlamadır.",
        },
        {
          question: "Likert tipi anket verisinde normallik testi yapılır mı?",
          answer:
            "Tek bir Likert maddesi sıralı (ordinal) bir değişkendir; normallik varsayımı bu düzeyde anlamlı değildir ve non-parametrik yaklaşım uygundur. Buna karşılık birden çok maddenin toplam veya ortalama puanı sürekli değişken gibi ele alınabilir ve bu puan üzerinde normallik testi yapmak yaygın kabul gören uygulamadır.",
        },
        {
          question: "Bu analizi SPSS ile mi yapıyorsunuz?",
          answer:
            "Analizi kendi Python tabanlı altyapımızla yaparız; sonuçlar SPSS'in Explore (Keşfet) menüsünden alacağınız Shapiro-Wilk / Kolmogorov-Smirnov çıktısıyla birebir aynıdır. SPSS lisansınız olmasa da SPSS kullanıcılarının tanıdığı formatta, Q-Q grafikleri ve çarpıklık-basıklık tablosuyla birlikte teslim ederiz.",
        },
        {
          question: "Normallik sağlanmıyorsa veriyi dönüştürmek doğru mu?",
          answer:
            "Bazen doğru, ama ilk çare değildir. Logaritmik veya karekök dönüşümü çarpık dağılımlarda işe yarayabilir; ancak dönüşüm sonrası bulguların yorumu da dönüşmüş ölçekte olur ve bunu tezde açıklamak gerekir. Çoğu tez ve makale bağlamında non-parametrik karşılığa geçmek daha şeffaf ve savunulması kolay bir yoldur. Hangisinin sizin verinizde daha uygun olduğunu ön incelemede birlikte değerlendirebiliriz.",
        },
      ],
      cta: {
        heading: "Normallik kontrolünü ve test seçimini biz yapalım",
        text: "Verinizi gönderin; normallik kontrolünü grup bazında ve gerektiğinde artıklar üzerinden yapalım, Q-Q grafikleri ve çarpıklık-basıklık tablosuyla birlikte doğru testi gerekçesiyle seçip raporlayalım. Ön değerlendirme ücretsizdir.",
        button: "Ücretsiz Ön Değerlendirme İsteyin",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "How to Test for Normality: Shapiro-Wilk vs Kolmogorov-Smirnov | GetBayes",
      metaDescription:
        "When to use Shapiro-Wilk and when to use Kolmogorov-Smirnov, how to read skewness and kurtosis, and a decision table for switching to non-parametric tests.",
      headline: "How to Test for Normality — and How to Interpret the Result",
      lead: [
        "A normality test checks whether your data follow a normal distribution, which decides whether you run parametric tests (t-test, ANOVA, Pearson) or their non-parametric counterparts (Mann-Whitney U, Kruskal-Wallis, Spearman). The practical rule is straightforward: use the Shapiro-Wilk test when the sample is under 50 and the Kolmogorov-Smirnov test (with Lilliefors correction) for larger samples; in both, p > 0.05 means there is no evidence of departure from normality and you can proceed with parametric tests. Crucially, normality is not checked on the whole dataset at once — for group comparisons it is checked within each group, and for regression it belongs to the model residuals, not the raw variable.",
        "This guide covers how to run the check correctly, the mistakes that draw reviewer comments, and the reasoning behind the decision. Send us your data and we'll assess normality per group — or on residuals where that's what the model requires — present skewness, kurtosis and Q-Q plots together, then select and justify the right test in a report you can paste straight into your thesis or manuscript.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Students who have collected their data and need to decide which test to run",
          "Authors whose reviewers flagged an unchecked normality assumption",
          "Anyone stuck after Shapiro-Wilk returned p < 0.05",
          "Anyone wondering why normality tests are always 'significant' in large samples",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "The steps of a normality check",
          steps: [
            {
              title: "Decide what you are testing for normality",
              description:
                "For independent group comparisons, normality is assessed within each group separately. For regression and ANOVA, it applies to the model's residuals — not the raw dependent variable. This distinction is the single most frequently skipped step, and the one reviewers catch most often.",
            },
            {
              title: "Choose the test by sample size",
              description:
                "Shapiro-Wilk is more powerful and is the standard choice for n < 50. For larger samples, Kolmogorov-Smirnov with the Lilliefors correction is used. Shapiro-Wilk remains applicable up to roughly n = 2000, but in very large samples it flags even trivial departures as significant.",
            },
            {
              title: "Look at skewness and kurtosis",
              description:
                "Skewness and kurtosis values within roughly ±1.5 (±2 under more permissive conventions) indicate no practically serious departure from normality. These measures are what you fall back on when the test result sits on the boundary.",
            },
            {
              title: "Back it up with plots",
              description:
                "A histogram and especially a Q-Q plot reveal what a single p value hides: is the departure spread across the whole distribution, or driven by a handful of extreme values? In practice the decision rests on this full picture, not the p value alone.",
            },
            {
              title: "Make the call and write down why",
              description:
                "If you stay parametric, state why (plots, skewness/kurtosis, sample size); if you switch to a non-parametric test, state that too. What convinces a reviewer is not the test itself but the justification behind the choice.",
            },
          ],
        },
        {
          type: "table",
          heading: "Which method, when?",
          intro: "The methods used to assess normality and where each fits:",
          columns: ["Method", "When to use it", "How to read it"],
          rows: [
            [
              "Shapiro-Wilk",
              "Small to moderate samples (n < 50, applicable up to n ≈ 2000)",
              "p > 0.05 → no departure from normality",
            ],
            [
              "Kolmogorov-Smirnov (Lilliefors)",
              "Larger samples (n ≥ 50)",
              "p > 0.05 → no departure from normality",
            ],
            [
              "Skewness / kurtosis",
              "Every sample, alongside the test",
              "Roughly ±1.5 (permissive: ±2) is acceptable",
            ],
            [
              "Q-Q plot",
              "Every sample, as visual confirmation",
              "Points should track the diagonal reference line",
            ],
            [
              "Histogram",
              "Overall shape, checking for multimodality",
              "Expect a single peak and rough symmetry",
            ],
          ],
        },
        {
          type: "table",
          heading: "If normality fails, what do you switch to?",
          intro:
            "The most common non-parametric counterparts of parametric tests:",
          columns: ["Parametric test", "Non-parametric counterpart", "Use case"],
          rows: [
            [
              "Independent samples t-test",
              "Mann-Whitney U",
              "Comparing two independent groups",
            ],
            [
              "Paired samples t-test",
              "Wilcoxon signed-rank",
              "Pre-test / post-test, two measurements on the same people",
            ],
            [
              "One-way ANOVA",
              "Kruskal-Wallis H",
              "Three or more independent groups",
            ],
            [
              "Repeated measures ANOVA",
              "Friedman test",
              "Three or more measurements on the same people",
            ],
            [
              "Pearson correlation",
              "Spearman correlation",
              "Association between two continuous variables",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Common mistakes",
          items: [
            "Testing normality once across the pooled dataset in a group comparison — it must be checked within each group",
            "Testing the raw dependent variable in regression or ANOVA; the assumption belongs to the residuals",
            "Switching to non-parametric automatically because p < 0.05 in a large sample — at large n the test flags practically negligible departures, so read it alongside the plots and skewness/kurtosis",
            "Deleting outliers without justification just to force normality; outlier handling is a separate, separately justified decision",
            "Running a normality test on categorical or single-item Likert variables, where the assumption does not apply in the first place",
            "Writing only 'the data were normally distributed' without reporting the test used, its statistic and the p value",
          ],
        },
        {
          type: "paragraphs",
          heading: "Is it true that normality doesn't matter once n > 30?",
          body: [
            "Partly. The central limit theorem says the sampling distribution of the mean approaches normality as the sample grows, which is why t-tests and ANOVA are fairly robust to moderate departures in reasonably large samples. But that is not the same as 'skip the check when n > 30': the theorem concerns the distribution of the mean, not the distribution of your raw data, and severe skew or strong outliers can still distort results despite it. There is also nothing magic about 30 — the sample size you need depends on how skewed the distribution actually is.",
            "The sound approach treats the test as decision support rather than a mechanical gate: read the p value, skewness/kurtosis, the Q-Q plot and the sample size together. In borderline cases, staying parametric with a stated justification and switching to a non-parametric test are both defensible — the only indefensible option is leaving the decision unjustified. Our reports always spell that justification out, so when your advisor or a reviewer asks 'why this test?', the answer is already on the page.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Should I use Shapiro-Wilk or Kolmogorov-Smirnov?",
          answer:
            "Use Shapiro-Wilk when your sample is under 50 — it has more statistical power in that range and is the standard choice. From 50 upwards, use Kolmogorov-Smirnov with the Lilliefors correction. Shapiro-Wilk stays applicable to around n = 2000, but in very large samples both tests flag negligible departures, so interpret the result together with your plots.",
        },
        {
          question: "My normality test returned p < 0.05 — what now?",
          answer:
            "Before switching to a non-parametric test automatically, check three things: are skewness and kurtosis within ±1.5, is the departure in the Q-Q plot spread across the distribution or driven by a few extreme values, and how large is your sample? In large samples, small and practically meaningless departures also produce p < 0.05. If the picture still shows a serious departure, switching to the non-parametric counterpart is the right call.",
        },
        {
          question: "Which variable should I test for normality?",
          answer:
            "The continuous dependent variable — but at the level your analysis requires. Comparing two groups: within each group separately. Running regression or ANOVA: on the model's residuals. Independent variables and categorical variables do not need to be normally distributed; that's a widespread misconception.",
        },
        {
          question: "Do you test normality on Likert survey data?",
          answer:
            "A single Likert item is ordinal, so the normality assumption isn't meaningful at that level and a non-parametric approach fits better. A total or mean score across several items, however, can be treated as continuous, and testing normality on that composite score is widely accepted practice.",
        },
        {
          question: "Do you run this analysis in SPSS?",
          answer:
            "We run it with our own Python-based analysis stack; the results match the Shapiro-Wilk / Kolmogorov-Smirnov output you'd get from SPSS's Explore menu exactly. You don't need an SPSS licence — we deliver it in the format SPSS users recognise, together with Q-Q plots and a skewness/kurtosis table.",
        },
        {
          question: "If normality fails, should I transform the data?",
          answer:
            "Sometimes, but it isn't the first resort. Log or square-root transformations can help with skewed distributions, though your findings then have to be interpreted on the transformed scale and that has to be explained in the write-up. In most thesis and manuscript contexts, moving to the non-parametric counterpart is more transparent and easier to defend. We can assess which fits your data better during the free initial review.",
        },
      ],
      cta: {
        heading: "Let us handle the normality check and test selection",
        text: "Send your data and we'll assess normality per group — or on residuals where the model calls for it — deliver Q-Q plots and a skewness/kurtosis table, and select the right test with its justification written out. The initial review is free.",
        button: "Request a Free Initial Review",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default normalityTest;
