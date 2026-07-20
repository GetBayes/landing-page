import type { Topic } from "../types";

const regressionInterpretation: Topic = {
  key: "regression-interpretation",
  kind: "guide",
  datePublished: "2026-07-10",
  dateModified: "2026-07-20",
  related: ["which-test", "normality-test", "reporting-results", "sample-size"],
  locales: {
    tr: {
      metaTitle:
        "Regresyon Sonuçları Nasıl Yorumlanır? R², Beta, p Değeri | GetBayes",
      metaDescription:
        "Regresyon çıktınızdaki R², düzeltilmiş R², standardize beta, p değeri ve VIF nasıl okunur? Tez ve makaleler için adım adım yorumlama rehberi, örnek APA cümlesi.",
      headline: "Regresyon Sonuçları Nasıl Yorumlanır?",
      lead: [
        "Bir regresyon çıktısını yorumlarken beş şeye bakılır: model R²'si (bağımsız değişkenlerin bağımlıdaki varyansın yüzde kaçını açıkladığı), düzeltilmiş R² (değişken sayısına göre cezalandırılmış hâli), her yordayıcının standardize beta katsayısı (göreli etki büyüklüğü), p değeri (o yordayıcının etkisinin şansla açıklanıp açıklanamayacağı) ve VIF (yordayıcılar birbiriyle ne kadar örtüşüyor). Bu beşi birlikte okunmadan tek bir sayıya (\"p değeri anlamlı çıktı\") bakmak, sonucu yanlış yorumlamanın en sık nedenidir.",
        "Bu rehber SPSS, R veya Python çıktısında karşınıza çıkan tabloyu satır satır okumanızı sağlar. Kendi çıktınızı bize gönderirseniz, hangi sayının neyi ifade ettiğini sizin verinize özel açıklar, APA formatında yazılmış yorum cümleleriyle teslim ederiz.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Tez savunmasında regresyon tablosunu açıklaması istenen yüksek lisans ve doktora öğrencileri",
          "Makalesinde regresyon bulgularını raporlayan araştırmacılar",
          "SPSS/R çıktısına bakıp \"bu sayılar ne anlama geliyor\" diyen herkes",
          "Hakemden veya danışmandan \"çoklu doğrusal bağlantı\" (multicollinearity) uyarısı alan yazarlar",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Çıktıyı okumanın beş adımı",
          steps: [
            {
              title: "Model özetine bakın",
              description:
                "R² ve düzeltilmiş R², modelin bağımlı değişkendeki varyansın ne kadarını açıkladığını gösterir. Model p değeri (ANOVA/F testi), modelin bir bütün olarak anlamlı olup olmadığını söyler — bu adım katsayılara bakmadan önce gelir.",
            },
            {
              title: "Her katsayının B ve p değerine bakın",
              description:
                "Unstandardized B, o yordayıcı bir birim arttığında bağımlı değişkenin ne kadar değiştiğini gösterir (birimiyle birlikte anlamlıdır). p < .05 ise o yordayıcının etkisi tesadüften ayırt edilebilir kabul edilir.",
            },
            {
              title: "Göreli etkiyi standardize beta ile karşılaştırın",
              description:
                "Yordayıcılar farklı birimlerdeyse (yaş, gelir, ölçek puanı gibi) B değerleri karşılaştırılamaz. Hangi yordayıcının etkisi daha güçlü sorusu yalnızca standardize beta (β) ile yanıtlanır.",
            },
            {
              title: "Varsayımları kontrol edin",
              description:
                "VIF çoklu doğrusal bağlantıyı, Durbin-Watson artıkların bağımsızlığını, artık (residual) grafikleri doğrusallık ve sabit varyans (homoscedasticity) varsayımını gösterir. Varsayım ihlali varsa katsayı yorumları güvenilir olmaktan çıkar.",
            },
            {
              title: "Sonucu cümleye dökün",
              description:
                "Sayısal çıktı, okuyucunun anlayacağı bir cümleye çevrilmeden rapor eksik sayılır: hangi yordayıcı, ne yönde, ne büyüklükte ve ne kadar güvenle bağımlı değişkeni etkiliyor.",
            },
          ],
        },
        {
          type: "table",
          heading: "Model özeti tablosu neyi söyler?",
          intro: "Katsayılara geçmeden önce modelin bütününe bakılır:",
          columns: ["Gösterge", "Ne anlama gelir?"],
          rows: [
            [
              "R²",
              "Yordayıcıların birlikte açıkladığı varyans yüzdesi (0-1 arası, ör. .35 = %35)",
            ],
            [
              "Düzeltilmiş R²",
              "Modele gereksiz değişken eklemenin R²'yi yapay şişirmesini düzeltir; birden çok yordayıcılı modellerde raporlanması beklenen değerdir",
            ],
            [
              "F testi (model p değeri)",
              "Model bir bütün olarak, hiçbir yordayıcı kullanmayan boş modelden anlamlı derecede iyi mi? p < .05 ise evet",
            ],
            [
              "Tahminin standart hatası",
              "Modelin öngörülerinin gerçek değerlerden ortalama ne kadar saptığı, bağımlı değişkenle aynı birimde",
            ],
          ],
        },
        {
          type: "table",
          heading: "Katsayılar tablosunu okuma",
          intro: "Her yordayıcı için çıkan satırın sütunları:",
          columns: ["Sütun", "Yorumu"],
          rows: [
            [
              "B (unstandardized)",
              "Diğer yordayıcılar sabit tutulduğunda, bu yordayıcı bir birim arttığında bağımlı değişkenin beklenen değişimi",
            ],
            [
              "Std. Hata",
              "B tahmininin ne kadar güvenilir olduğu — küçük olması daha kararlı bir tahmin demektir",
            ],
            [
              "β (standardize beta)",
              "B'nin standart sapma birimlerine çevrilmiş hâli; yordayıcılar arası göreli etki karşılaştırması burada yapılır",
            ],
            [
              "t ve p",
              "B'nin sıfırdan (etkisizlikten) istatistiksel olarak ayrılıp ayrılmadığı; p < .05 yaygın eşiktir",
            ],
            [
              "%95 güven aralığı",
              "Gerçek B değerinin muhtemelen içinde bulunduğu aralık; aralık sıfırı içeriyorsa etki güvenilir sayılmaz",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Sık yapılan yorumlama hataları",
          items: [
            "\"R² yüksek = iyi model\" varsayımı: sosyal bilimlerde .20-.30 arası R² birçok bağlamda anlamlı kabul edilir; eşik alana göre değişir, tek başına \"düşük\" demek yanlıştır.",
            "\"p < .05 = güçlü/önemli etki\" karışıklığı: p değeri etkinin var olup olmadığını gösterir, büyüklüğünü değil — büyük örneklemde çok küçük bir etki de anlamlı çıkabilir.",
            "Standardize edilmemiş B'lerle yordayıcıları karşılaştırmak: farklı birimlerdeki B'ler doğrudan kıyaslanamaz, mutlaka β kullanılmalı.",
            "VIF kontrolünü atlamak: yüksek çoklu doğrusal bağlantı, katsayıların işaretini bile değiştirebilir; rapor edilmeden bırakılan en sık eksik budur.",
            "Korelasyon ile nedensellik karıştırmak: regresyon deneysel olmayan veride ilişkiyi gösterir, \"X, Y'yi etkiler\" değil \"X, Y ile ilişkilidir\" ifadesi daha savunulabilirdir.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Örnek yorum cümlesi (APA tarzı)",
          body: [
            "\"Regresyon modeli, iş tatmini varyansının anlamlı bir bölümünü açıklamıştır, R² = .34, düzeltilmiş R² = .32, F(3, 116) = 19.84, p < .001. Yönetici desteği (β = .41, p < .001) ve iş yükü (β = -.22, p = .012) anlamlı yordayıcılar olarak bulunurken, kıdem (β = .09, p = .241) anlamlı bir katkı sağlamamıştır.\"",
            "Bu tek paragraf, model özetini, her yordayıcının yönünü ve büyüklüğünü, hangisinin anlamlı olmadığını ve neden (p değeri) içerir — hakemin ve jürinin aradığı tam olarak budur.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "R² ne kadar olmalı, \"iyi\" bir değer var mı?",
          answer:
            "Sabit bir eşik yoktur — alana bağlıdır. Doğa bilimlerinde .60 üzeri beklenirken, insan davranışını öngören sosyal bilim modellerinde .20-.30 arası birçok dergide kabul edilebilir sayılır. Kendi alanınızdaki benzer yayınlarla karşılaştırmak, tek bir genel eşikten daha doğru bir referans verir.",
        },
        {
          question: "Düzeltilmiş R² ile R² arasındaki fark nedir, hangisini raporlamalıyım?",
          answer:
            "R², modele değişken eklendikçe hep artar — gereksiz bir değişken bile olsa. Düzeltilmiş R² bu şişmeyi yordayıcı sayısına göre düzeltir. Birden fazla yordayıcılı modellerde ikisini birlikte raporlamak standarttır; tek yordayıcılı modelde fark ihmal edilebilir düzeydedir.",
        },
        {
          question: "Standardize beta neden karşılaştırmada kullanılır?",
          answer:
            "Unstandardized B, yordayıcının kendi ölçü birimine bağlıdır (yaş yıl cinsinden, gelir bin TL cinsinden gibi); bu yüzden iki farklı yordayıcının B'sini kıyaslamak anlamsızdır. β, tüm değişkenleri standart sapma birimine çevirerek göreli etkiyi karşılaştırılabilir hâle getirir.",
        },
        {
          question: "VIF kaç olursa çoklu bağlantı sorunu var demektir?",
          answer:
            "Yaygın kullanılan eşik VIF > 10'dur; bazı kaynaklar sosyal bilimlerde daha temkinli olup VIF > 5'i uyarı sınırı sayar. Sorun varsa yordayıcılardan birini çıkarmak, ölçekleri birleştirmek veya ridge regresyon gibi alternatif yöntemler değerlendirilir.",
        },
        {
          question: "p değeri anlamlı çıktı ama R² düşük — bu ne anlama gelir?",
          answer:
            "İkisi farklı soruları yanıtlar: p değeri \"bu etki şansla mı oluştu?\" sorusuna, R² ise \"bu model bağımlı değişkeni ne kadar iyi açıklıyor?\" sorusuna cevap verir. Büyük örneklemlerde küçük ve pratik önemi sınırlı bir etki bile anlamlı (p < .05) çıkabilir — düşük R² bu etkinin tek başına yeterli bir açıklama sunmadığını gösterir, ikisini birlikte raporlamak gerekir.",
        },
        {
          question: "Kendi regresyon çıktımı sizin yorumlamanızı istesem mümkün mü?",
          answer:
            "Evet — SPSS/R/Python çıktınızı (veya ham verinizi) gönderirseniz, tabloyu değişken değişken açıklar, hangi yorumun savunulabilir olduğunu ve raporunuza doğrudan eklenebilecek APA formatında cümleleri teslim ederiz.",
        },
      ],
      cta: {
        heading: "Regresyon çıktınızı birlikte yorumlayalım",
        text: "Tablonuzu veya ham verinizi gönderin; hangi sayının neyi ifade ettiğini açıklayan, rapora doğrudan eklenebilir bir yorum metniyle dönelim.",
        button: "Regresyon Yorumu İste",
        whatsapp: "WhatsApp ile Gönder",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "How to Interpret Regression Results: R², Beta, p-Value | GetBayes",
      metaDescription:
        "How do you read R², adjusted R², standardized beta, p-values and VIF in a regression output? A step-by-step interpretation guide with an APA-style example sentence.",
      headline: "How to Interpret Regression Results",
      lead: [
        "Reading a regression output comes down to five things: the model's R² (what percentage of variance in the outcome the predictors explain together), adjusted R² (the version penalized for the number of predictors), each predictor's standardized beta (its relative effect size), the p-value (whether that predictor's effect could plausibly be chance), and VIF (how much the predictors overlap with each other). Looking at only one number — usually \"the p-value was significant\" — is the most common way this output gets misread.",
        "This guide walks through the table you get from SPSS, R or Python row by row. Send us your own output and we'll explain what each number means for your specific data, delivered with APA-formatted interpretation sentences ready to drop into your report.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Graduate students asked to explain a regression table at their thesis defense",
          "Researchers reporting regression findings in a journal article",
          "Anyone staring at SPSS/R output wondering what the numbers actually mean",
          "Authors told by a reviewer or advisor that multicollinearity is a concern",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Five steps to reading the output",
          steps: [
            {
              title: "Check the model summary first",
              description:
                "R² and adjusted R² show how much variance in the outcome the model explains overall. The model's F-test p-value tells you whether the model as a whole beats a no-predictor baseline — check this before looking at individual coefficients.",
            },
            {
              title: "Read each coefficient's B and p-value",
              description:
                "The unstandardized B shows how much the outcome changes per one-unit increase in that predictor, holding others constant (meaningful only together with its unit). p < .05 means that predictor's effect is distinguishable from chance.",
            },
            {
              title: "Compare relative strength with standardized beta",
              description:
                "If predictors are on different scales (age, income, a survey score), their B values aren't comparable. Which predictor matters more is answered only by the standardized beta (β).",
            },
            {
              title: "Check the assumptions",
              description:
                "VIF flags multicollinearity, Durbin-Watson checks independence of residuals, and residual plots check linearity and homoscedasticity. If an assumption is violated, the coefficient interpretations above become unreliable.",
            },
            {
              title: "Translate the numbers into a sentence",
              description:
                "A report isn't complete until the numeric output becomes a sentence a reader can follow: which predictor, in which direction, how large an effect, and with how much confidence.",
            },
          ],
        },
        {
          type: "table",
          heading: "What the model summary tells you",
          intro: "Before touching individual coefficients, look at the model as a whole:",
          columns: ["Statistic", "What it means"],
          rows: [
            [
              "R²",
              "Percentage of variance the predictors explain together (0-1 scale, e.g. .35 = 35%)",
            ],
            [
              "Adjusted R²",
              "Corrects R² for the artificial inflation caused by adding unnecessary predictors; the expected figure to report with more than one predictor",
            ],
            [
              "F-test (model p-value)",
              "Is the model as a whole significantly better than a baseline with no predictors? p < .05 means yes",
            ],
            [
              "Standard error of the estimate",
              "How far the model's predictions typically fall from actual values, in the outcome's own units",
            ],
          ],
        },
        {
          type: "table",
          heading: "Reading the coefficients table",
          intro: "The columns you get for each predictor's row:",
          columns: ["Column", "Interpretation"],
          rows: [
            [
              "B (unstandardized)",
              "Expected change in the outcome per one-unit increase in this predictor, holding the others constant",
            ],
            [
              "Std. Error",
              "How stable the B estimate is — smaller means a more precise estimate",
            ],
            [
              "β (standardized beta)",
              "B converted to standard-deviation units; this is where you compare relative effect strength across predictors",
            ],
            [
              "t and p",
              "Whether B is statistically distinguishable from zero (no effect); p < .05 is the common threshold",
            ],
            [
              "95% confidence interval",
              "The range the true B likely falls in; if it crosses zero, the effect isn't considered reliable",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Common interpretation mistakes",
          items: [
            "Assuming \"higher R² = better model\": in the social sciences, an R² of .20-.30 is meaningful in many contexts — the right threshold depends on the field, so calling it \"low\" on its own is misleading.",
            "Confusing p < .05 with \"a strong or important effect\": the p-value tells you whether an effect exists, not how large it is — a tiny effect can be significant in a large enough sample.",
            "Comparing predictors using unstandardized B: B values on different scales can't be compared directly — use β for that.",
            "Skipping the VIF check: severe multicollinearity can even flip a coefficient's sign; this is the most commonly omitted check in student reports.",
            "Confusing correlation with causation: regression on non-experimental data shows association, not causation — \"X is associated with Y\" is more defensible than \"X affects Y.\"",
          ],
        },
        {
          type: "paragraphs",
          heading: "An example interpretation sentence (APA style)",
          body: [
            "\"The regression model explained a significant proportion of variance in job satisfaction, R² = .34, adjusted R² = .32, F(3, 116) = 19.84, p < .001. Managerial support (β = .41, p < .001) and workload (β = -.22, p = .012) were significant predictors, while tenure (β = .09, p = .241) did not contribute significantly.\"",
            "That single paragraph covers the model summary, each predictor's direction and size, which one didn't reach significance, and why (the p-value) — exactly what a committee or reviewer is looking for.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How high should R² be — is there a \"good\" value?",
          answer:
            "There's no universal threshold — it depends on the field. Natural-science models are often expected above .60, while social-science models predicting human behavior commonly report .20-.30 as acceptable. Comparing against similar published studies in your own field is a better reference than any single rule of thumb.",
        },
        {
          question: "What's the difference between R² and adjusted R², and which should I report?",
          answer:
            "R² always increases as you add predictors, even useless ones. Adjusted R² corrects for that inflation based on the number of predictors. With more than one predictor, reporting both is standard practice; with a single predictor the difference is negligible.",
        },
        {
          question: "Why is standardized beta used for comparison?",
          answer:
            "Unstandardized B depends on each predictor's own unit (age in years, income in thousands, a scale score, etc.), so comparing one predictor's B against another's is meaningless. β converts every variable to standard-deviation units, making relative effect size comparable across predictors.",
        },
        {
          question: "What VIF value signals a multicollinearity problem?",
          answer:
            "The common threshold is VIF > 10; some social-science sources are more conservative and flag VIF > 5 as a warning. If there's a problem, options include dropping a redundant predictor, combining correlated scales, or alternative methods like ridge regression.",
        },
        {
          question: "My p-value is significant but R² is low — what does that mean?",
          answer:
            "They answer different questions: the p-value asks \"could this effect be chance?\" while R² asks \"how well does this model explain the outcome overall?\" In large samples, even a small, practically limited effect can be significant (p < .05) — a low R² shows that effect alone isn't a sufficient explanation, and both figures should be reported together.",
        },
        {
          question: "Can I send you my own regression output for interpretation?",
          answer:
            "Yes — send your SPSS/R/Python output (or your raw data) and we'll walk through the table variable by variable, tell you which interpretation is defensible, and deliver APA-formatted sentences you can drop straight into your report.",
        },
      ],
      cta: {
        heading: "Let's interpret your regression output together",
        text: "Send your table or raw data — we'll reply with a plain explanation of what each number means, written as report-ready interpretation text.",
        button: "Request a Regression Interpretation",
        whatsapp: "Send via WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default regressionInterpretation;
