import type { Topic } from "../types";

const factorAnalysis: Topic = {
  key: "factor-analysis",
  kind: "guide",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  related: [
    "reliability-analysis",
    "survey-analysis",
    "sample-size",
    "which-test",
    "thesis-statistics",
  ],
  locales: {
    tr: {
      metaTitle:
        "Faktör Analizi Nasıl Yapılır? AFA-DFA ve Ölçek Geçerliği | GetBayes",
      metaDescription:
        "Açımlayıcı ve doğrulayıcı faktör analizi nasıl yapılır: KMO ve Bartlett ön koşulları, örneklem büyüklüğü, faktör yükü ve binişik madde ölçütleri, DFA uyum indeksleri (RMSEA, CFI, SRMR) eşik tablosu.",
      headline: "Faktör Analizi Nasıl Yapılır? (AFA ve DFA) — Ölçek Geçerliği Rehberi",
      lead: [
        "Faktör analizi, bir ölçekteki maddelerin hangi gizil yapıları (boyutları) ölçtüğünü ortaya koyan geçerlik analizidir ve iki biçimde yapılır: ölçeğin boyut yapısını veriden keşfetmek için açımlayıcı faktör analizi (AFA), önceden tanımlı bir yapının veriye uyup uymadığını sınamak için doğrulayıcı faktör analizi (DFA). Yeni ya da uyarlanan bir ölçekle çalışıyorsanız önce AFA, ardından farklı bir örneklemde DFA yaparsınız; boyut yapısı literatürde zaten yerleşik bir ölçek kullanıyorsanız doğrudan DFA yeterlidir. AFA'ya başlamadan önce verinin uygunluğu KMO (en az 0.60, tercihen 0.80 üzeri) ve Bartlett küresellik testi (p < 0.05) ile kontrol edilir; madde başına en az 5-10 katılımcı ve genellikle toplam 200+ örneklem beklenir. Maddelerin faktör yükü 0.40 ve üzeri olmalı, iki faktöre birden 0.10'dan az farkla yüklenen binişik maddeler gerekçesiyle birlikte değerlendirilmelidir.",
        "Bu rehber AFA ve DFA'nın adımlarını, karar ölçütlerini ve hakemlerin en sık takıldığı noktaları anlatır. Ölçek geliştirme veya uyarlama çalışması yürütüyorsanız veriyi bize gönderin: uygunluk kontrollerinden faktör sayısına, rotasyon seçiminden madde eleme kararlarına ve DFA uyum indekslerine kadar tüm süreci yürütür, tezinize veya makalenize doğrudan eklenebilecek tablolar ve yol diyagramıyla teslim ederiz. Ön değerlendirme ücretsizdir.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Ölçek geliştirme veya Türkçeye uyarlama çalışması yapan yüksek lisans ve doktora öğrencileri",
          "Anketindeki maddelerin hangi boyutlara ayrıldığını belirlemesi gereken araştırmacılar",
          "Hakemden 'yapı geçerliği gösterilmemiş' veya 'DFA uyum indeksleri raporlanmamış' notu alan makale yazarları",
          "AFA mı DFA mı yapması gerektiğine karar veremeyenler",
          "Faktör yükleri dağınık çıkan, binişik madde sorunuyla uğraşan araştırmacılar",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Açımlayıcı faktör analizi (AFA) adım adım",
          intro:
            "AFA, boyut yapısını veriden çıkarır. Adımların sırası ve her adımdaki karar gerekçesi, sonucun savunulabilirliğini belirler:",
          steps: [
            {
              title: "Verinin uygunluğunu kontrol edin",
              description:
                "KMO örneklem yeterliği ölçüsü en az 0.60 olmalıdır (0.80 ve üzeri iyi kabul edilir); Bartlett küresellik testinin anlamlı çıkması (p < 0.05) maddeler arasında faktör analizine elverecek ilişki bulunduğunu gösterir. Bu iki değer sağlanmadan analize devam etmek anlamlı değildir.",
            },
            {
              title: "Faktör çıkarma yöntemini seçin",
              description:
                "Amacınız gizil yapıyı modellemekse temel eksen faktörleme veya maksimum olabilirlik, veriyi daha az bileşene indirgemekse temel bileşenler analizi (PCA) kullanılır. Sosyal bilimlerde ölçek geçerliği için maksimum olabilirlik ve temel eksen faktörleme kuramsal olarak daha uygundur; PCA teknik olarak faktör analizi değildir, ancak literatürde yaygın olduğu için tercih ediliyorsa bu tercihin belirtilmesi gerekir.",
            },
            {
              title: "Faktör sayısına karar verin",
              description:
                "Yalnızca 'özdeğeri 1'den büyük' kuralına dayanmayın; bu kural faktör sayısını sistematik olarak fazla tahmin etme eğilimindedir. Yamaç birikinti (scree) grafiği, paralel analiz ve — en önemlisi — boyutların kuramsal anlamlılığı birlikte değerlendirilir. Paralel analiz, günümüzde en güvenilir kabul edilen ölçüttür.",
            },
            {
              title: "Rotasyon (döndürme) yöntemini seçin",
              description:
                "Faktörlerin birbiriyle ilişkisiz olmasını bekliyorsanız dik döndürme (varimax), ilişkili olmasını bekliyorsanız eğik döndürme (oblimin, promax) kullanılır. Sosyal ve sağlık bilimlerindeki boyutlar pratikte çoğunlukla ilişkilidir; bu nedenle varimax'ı otomatik seçmek yerine faktörler arası korelasyonlara bakıp karar vermek daha doğrudur.",
            },
            {
              title: "Madde eleme kararlarını verin",
              description:
                "Faktör yükü 0.40'ın altında kalan maddeler ile iki faktöre birden 0.10'dan az farkla yüklenen binişik maddeler eleme adayıdır. Ancak eleme kararı yalnızca sayısal değildir: maddenin kapsam geçerliği açısından ölçek için gerekli olup olmadığı da değerlendirilmeli, karar gerekçesiyle birlikte raporlanmalıdır. Her elemeden sonra analiz baştan çalıştırılır.",
            },
            {
              title: "Açıklanan varyansı ve faktörleri değerlendirin",
              description:
                "Çok faktörlü ölçeklerde toplam açıklanan varyansın %50'nin üzerinde olması yaygın kabul gören ölçüttür; tek faktörlü yapılarda daha düşük oranlar da kabul edilebilir. Son adımda her faktör, içerdiği maddelerin ortak anlamına göre kuramsal olarak isimlendirilir.",
            },
            {
              title: "Güvenilirliği ekleyin",
              description:
                "Ortaya çıkan her boyut için Cronbach alpha (veya McDonald's omega) hesaplanır. Geçerlik ve güvenilirlik birlikte raporlanmadığında ölçek çalışması eksik sayılır — ayrıntılar için ölçek güvenilirlik analizi rehberimize bakabilirsiniz.",
            },
          ],
        },
        {
          type: "table",
          heading: "AFA mı DFA mı? Farkları ve kullanım yerleri",
          intro:
            "İki analiz birbirinin alternatifi değil, ölçek geçerliği sürecinin iki farklı aşamasıdır:",
          columns: [
            "Ölçüt",
            "Açımlayıcı faktör analizi (AFA)",
            "Doğrulayıcı faktör analizi (DFA)",
          ],
          rows: [
            [
              "Amaç",
              "Boyut yapısını veriden keşfetmek",
              "Önceden tanımlı yapıyı sınamak",
            ],
            [
              "Ne zaman",
              "Yeni ölçek geliştirme, yapısı bilinmeyen madde havuzu",
              "Uyarlama çalışması, literatürde yerleşik boyut yapısı",
            ],
            [
              "Kuramsal beklenti",
              "Önceden madde-faktör ataması yapılmaz",
              "Hangi maddenin hangi faktöre ait olduğu baştan tanımlanır",
            ],
            [
              "Temel çıktılar",
              "KMO, Bartlett, faktör yükleri, açıklanan varyans",
              "Uyum indeksleri (χ²/sd, RMSEA, CFI, TLI, SRMR), standart yükler",
            ],
            [
              "Örneklem",
              "Madde başına 5-10 kişi, genellikle 200+",
              "Genellikle 200+; karmaşık modellerde daha fazlası önerilir",
            ],
            [
              "Sıra",
              "Ölçek geliştirmede önce yapılır",
              "AFA'dan sonra, tercihen farklı bir örneklemde",
            ],
          ],
        },
        {
          type: "table",
          heading: "AFA karar ölçütleri (özet tablo)",
          intro:
            "Raporda bu değerlerin hepsinin yer alması beklenir; sınırda kalan durumlarda gerekçe yazmak zorunludur:",
          columns: ["Ölçüt", "Kabul edilebilir değer", "Not"],
          rows: [
            [
              "KMO örneklem yeterliği",
              "≥ 0.60 (0.80+ iyi)",
              "0.50 altı: faktör analizi uygun değil",
            ],
            [
              "Bartlett küresellik testi",
              "p < 0.05",
              "Anlamsız çıkarsa maddeler arası ilişki yetersizdir",
            ],
            [
              "Örneklem büyüklüğü",
              "Madde başına 5-10 kişi; genellikle ≥ 200",
              "Yükler yüksek ve faktörler netse daha küçük örneklem savunulabilir",
            ],
            [
              "Faktör yükü",
              "≥ 0.40 (alt sınır 0.30)",
              "Yüksek yük, maddenin faktörü güçlü temsil ettiğini gösterir",
            ],
            [
              "Binişiklik (çapraz yüklenme)",
              "İki yük arasındaki fark ≥ 0.10",
              "Fark küçükse madde hangi boyuta ait belirsizdir",
            ],
            [
              "Açıklanan toplam varyans",
              "Çok faktörlü yapıda > %50",
              "Tek faktörlü ölçeklerde daha düşük oranlar kabul edilebilir",
            ],
            [
              "Faktör sayısı ölçütü",
              "Paralel analiz + yamaç grafiği + kuram",
              "Tek başına 'özdeğer > 1' kuralı fazla faktör üretir",
            ],
          ],
        },
        {
          type: "table",
          heading: "DFA uyum indeksleri ve eşik değerleri",
          intro:
            "Doğrulayıcı faktör analizinde tek bir indekse bakılmaz; birlikte raporlanır ve birlikte yorumlanır:",
          columns: ["İndeks", "İyi uyum", "Kabul edilebilir uyum"],
          rows: [
            ["χ² / sd (ki-kare / serbestlik derecesi)", "≤ 3", "≤ 5"],
            ["RMSEA", "≤ 0.05", "≤ 0.08"],
            ["SRMR", "≤ 0.05", "≤ 0.08"],
            ["CFI", "≥ 0.95", "≥ 0.90"],
            ["TLI (NNFI)", "≥ 0.95", "≥ 0.90"],
            [
              "Standartlaştırılmış faktör yükleri",
              "≥ 0.70",
              "≥ 0.50 (anlamlı, p < 0.05)",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Sık yapılan hatalar",
          items: [
            "AFA ve DFA'yı aynı örneklem üzerinde yapmak — aynı veriden çıkarılan yapıyı yine aynı veride doğrulamak, doğrulama sayılmaz; mümkünse ayrı örneklem, değilse örneklemi ikiye bölme (split-half) yaklaşımı kullanılmalıdır",
            "Faktör sayısını yalnızca 'özdeğer > 1' kuralıyla belirlemek; bu kural sistematik olarak gereğinden fazla faktör üretir",
            "Rotasyon olarak refleks halinde varimax seçmek; boyutlar arasında kuramsal olarak ilişki bekleniyorsa eğik döndürme (oblimin/promax) daha uygundur",
            "Temel bileşenler analizini (PCA) faktör analizi olarak raporlamak; ikisi farklı yöntemlerdir ve hangisinin kullanıldığı açıkça belirtilmelidir",
            "Uyum indekslerini yükseltmek için modifikasyon indekslerine bakıp kuramsal gerekçesi olmayan hata kovaryansları eklemek — hakemlerin en sık sorguladığı müdahaledir",
            "Yalnızca faktör yükü düşük diye maddeyi silmek, kapsam geçerliğini hiç değerlendirmemek",
            "Ölçeğin boyutları netleşmeden Cronbach alpha'yı ölçeğin tamamı için tek bir sayı olarak raporlamak; alpha her boyut için ayrı hesaplanır",
            "Çok küçük örneklemde (ör. 60-80 kişi) DFA çalıştırıp çıkan uyum indekslerini kesin kanıt gibi sunmak",
          ],
        },
        {
          type: "paragraphs",
          heading: "Ölçek uyarlama çalışması yapıyorsanız",
          body: [
            "Türkçeye uyarlama çalışmalarında istatistik, sürecin yalnızca son halkasıdır: önce çeviri-geri çeviri ile dil eşdeğerliği sağlanır, uzman görüşüyle kapsam geçerliği değerlendirilir, ardından yapı geçerliği faktör analiziyle sınanır. Orijinal ölçeğin boyut yapısı biliniyorsa doğrudan DFA ile o yapının Türk örnekleminde de geçerli olup olmadığı test edilir; DFA uyumu tutmuyorsa yapının bu kültürde farklılaşmış olabileceği düşünülerek AFA'ya dönülür ve ortaya çıkan yeni yapı gerekçesiyle birlikte raporlanır. Bu, başarısızlık değil, uyarlama çalışmalarının olağan ve yayımlanabilir bir bulgusudur.",
            "Karşılaştırma yapacaksanız (örneğin ölçek kadın ve erkeklerde ya da iki farklı yaş grubunda aynı şeyi mi ölçüyor?) ölçüm değişmezliği (measurement invariance) analizi gerekir; gruplar arasında ölçüm eşdeğerliği gösterilmeden ortalama karşılaştırmaları yanıltıcı olabilir. Ayrıca yakınsak ve ayırt edici geçerlik için AVE ve CR gibi ek ölçütler hesaplanabilir. Hangi analizlerin sizin çalışmanız için gerçekten gerekli olduğunu — gereksiz analiz eklemeden — ön incelemede birlikte belirleriz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "AFA mı yapmalıyım DFA mı?",
          answer:
            "Ölçeği siz geliştiriyorsanız ya da boyut yapısı belirsizse önce açımlayıcı faktör analizi (AFA) yapılır; yapı ortaya çıktıktan sonra tercihen farklı bir örneklemde doğrulayıcı faktör analizi (DFA) ile sınanır. Literatürde boyut yapısı yerleşik bir ölçeği kullanıyor ya da Türkçeye uyarlıyorsanız doğrudan DFA yeterlidir — ancak DFA uyum indeksleri tutmuyorsa AFA'ya dönmek meşru ve sık rastlanan bir yoldur.",
        },
        {
          question: "Faktör analizi için kaç kişilik örneklem gerekir?",
          answer:
            "Yaygın kural madde başına 5-10 katılımcıdır; 20 maddelik bir ölçek için bu 100-200 kişiye karşılık gelir. Pratikte 200 ve üzeri örneklem güvenli kabul edilir, 300+ iyi sayılır. Örneklem büyüklüğü tek başına belirleyici değildir: faktör yükleri yüksek (0.60+) ve boyutlar net ayrışıyorsa daha küçük örneklemler de savunulabilir, yükler düşük ve dağınıksa büyük örneklem bile yapıyı kurtarmaz.",
        },
        {
          question: "KMO değeri kaç olmalı, düşük çıkarsa ne yapılır?",
          answer:
            "KMO'nun en az 0.60 olması beklenir, 0.80 ve üzeri iyi kabul edilir; 0.50'nin altındaysa veri faktör analizine uygun değildir. Düşük çıktığında ilk bakılacak yer madde bazındaki anti-image korelasyon değerleridir: diğer maddelerle ilişkisi zayıf olan maddeler tespit edilip çıkarıldığında KMO genellikle yükselir. Sorun sürüyorsa örneklem büyüklüğü veya madde havuzunun kuramsal tutarlılığı gözden geçirilmelidir.",
        },
        {
          question: "Faktör yükü kaç olmalı? Binişik madde ne demek?",
          answer:
            "Faktör yükünün 0.40 ve üzeri olması yaygın ölçüttür (alt sınır olarak 0.30 kabul edilebilir). Binişik (çapraz yüklenen) madde, birden fazla faktöre birbirine yakın yüklerle yüklenen maddedir; iki yük arasındaki fark 0.10'dan küçükse maddenin hangi boyuta ait olduğu belirsizdir ve eleme adayı olur. Eleme kararı verilirken maddenin ölçeğin kapsamı açısından gerekliliği de değerlendirilmeli, gerekçe raporda belirtilmelidir.",
        },
        {
          question: "AMOS, LISREL veya SmartPLS kullanıyor musunuz?",
          answer:
            "Hayır — analizleri kendi Python tabanlı altyapımızla yürütüyoruz. Ancak ürettiğimiz sonuçlar bu programlardan alacağınız çıktılarla birebir aynıdır: aynı uyum indeksleri (χ²/sd, RMSEA, CFI, TLI, SRMR), standartlaştırılmış faktör yükleri ve yol diyagramı, tezlerde ve dergilerde beklenen tablo düzeninde teslim edilir. Bu programların lisansına sahip olmanız gerekmez; SPSS uyumlu formatta rapor almak da mümkündür.",
        },
        {
          question: "DFA uyum indekslerim sınırın altında kaldı, ne yapmalıyım?",
          answer:
            "Önce modelin nerede zorlandığına bakılır: standartlaştırılmış yükü düşük maddeler, kuramsal olarak örtüşen madde çiftleri veya beklenenden farklı bir boyut yapısı. Kuramsal gerekçesi olan düzeltmeler (ör. içerik olarak neredeyse aynı iki maddenin hata kovaryansını ilişkilendirmek) savunulabilir; gerekçesiz modifikasyon indeksi kovalamak ise hakemlerin en hızlı yakaladığı hatadır. Yapı gerçekten farklı çıkıyorsa AFA'ya dönüp yeni yapıyı raporlamak, zorlanmış bir modelden daha güçlü bir çalışmadır.",
        },
      ],
      cta: {
        heading: "Ölçek geçerliğinizi baştan sona biz yürütelim",
        text: "Veri setinizi gönderin; uygunluk kontrollerinden faktör sayısı ve rotasyon kararlarına, madde eleme gerekçelerinden DFA uyum indekslerine kadar tüm süreci yürütelim ve tezinize veya makalenize doğrudan eklenebilecek tablolarla teslim edelim. Ön değerlendirme ücretsizdir.",
        button: "Ücretsiz Ön Değerlendirme İsteyin",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "Factor Analysis Explained: EFA vs CFA and Scale Validity | GetBayes",
      metaDescription:
        "Exploratory and confirmatory factor analysis explained: KMO and Bartlett prerequisites, sample size rules, factor loading and cross-loading criteria, and a CFA fit index threshold table (RMSEA, CFI, SRMR).",
      headline: "How to Run a Factor Analysis (EFA and CFA) — A Scale Validity Guide",
      lead: [
        "Factor analysis is the validity analysis that reveals which latent constructs the items of a scale actually measure, and it comes in two forms: exploratory factor analysis (EFA), which discovers the dimensional structure from the data, and confirmatory factor analysis (CFA), which tests whether a pre-specified structure fits the data. If you are developing or adapting a scale, you run EFA first and then CFA on a separate sample; if the scale's dimensional structure is already established in the literature, CFA alone is enough. Before running EFA, check that the data are suitable: KMO should be at least 0.60 (0.80 or above is good) and Bartlett's test of sphericity should be significant (p < 0.05); expect 5-10 respondents per item and typically 200+ in total. Items should load at 0.40 or above, and cross-loading items — those loading on two factors with less than 0.10 difference — need a documented judgement call.",
        "This guide walks through the steps of EFA and CFA, the decision criteria at each stage, and the points reviewers most often flag. If you are running a scale development or adaptation study, send us your data: we handle everything from suitability checks to factor retention, rotation choice, item removal decisions and CFA fit indices, and deliver tables and a path diagram you can paste straight into your thesis or manuscript. The initial review is free.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and doctoral students developing a scale or adapting one to a new language",
          "Researchers who need to establish which dimensions their questionnaire items fall into",
          "Authors whose reviewers noted that construct validity wasn't shown or CFA fit indices weren't reported",
          "Anyone unsure whether their study calls for EFA or CFA",
          "Researchers dealing with scattered loadings and cross-loading items",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Exploratory factor analysis (EFA), step by step",
          intro:
            "EFA derives the dimensional structure from the data. The order of the steps — and the justification recorded at each one — is what makes the result defensible:",
          steps: [
            {
              title: "Check that the data are suitable",
              description:
                "The KMO measure of sampling adequacy should be at least 0.60 (0.80 and above is considered good), and Bartlett's test of sphericity should be significant (p < 0.05), showing there is enough inter-item correlation to factor. Proceeding without both is not meaningful.",
            },
            {
              title: "Choose the extraction method",
              description:
                "If your aim is to model a latent construct, use principal axis factoring or maximum likelihood; if it is to reduce the data to fewer components, principal component analysis (PCA) applies. For scale validity in the social sciences, maximum likelihood and principal axis factoring are the theoretically appropriate choices; PCA is not technically factor analysis, and if you use it anyway — as is common in the literature — that choice should be stated explicitly.",
            },
            {
              title: "Decide how many factors to retain",
              description:
                "Don't rely on the 'eigenvalue greater than 1' rule alone; it systematically over-extracts. Read the scree plot, parallel analysis and — above all — the theoretical interpretability of the dimensions together. Parallel analysis is currently regarded as the most reliable criterion.",
            },
            {
              title: "Choose a rotation method",
              description:
                "Use orthogonal rotation (varimax) if you expect the factors to be uncorrelated, and oblique rotation (oblimin, promax) if you expect them to correlate. In the social and health sciences, dimensions usually do correlate in practice, so inspect the inter-factor correlations and decide rather than defaulting to varimax.",
            },
            {
              title: "Make the item-removal decisions",
              description:
                "Items loading below 0.40, and cross-loading items whose two loadings differ by less than 0.10, are removal candidates. But removal is not a purely numerical decision: assess whether the item is needed for the scale's content coverage, and report the reasoning. Re-run the analysis after each removal.",
            },
            {
              title: "Evaluate variance explained and name the factors",
              description:
                "For multi-factor scales, total variance explained above 50% is the commonly accepted benchmark; lower proportions can be acceptable in unidimensional structures. Finally, name each factor theoretically, based on the shared meaning of the items it contains.",
            },
            {
              title: "Add reliability",
              description:
                "Compute Cronbach's alpha (or McDonald's omega) for each dimension that emerges. A scale study is incomplete unless validity and reliability are reported together — see our scale reliability analysis guide for the details.",
            },
          ],
        },
        {
          type: "table",
          heading: "EFA or CFA? What separates them",
          intro:
            "The two are not alternatives — they are two stages of the same scale validity process:",
          columns: [
            "Criterion",
            "Exploratory factor analysis (EFA)",
            "Confirmatory factor analysis (CFA)",
          ],
          rows: [
            [
              "Purpose",
              "Discover the dimensional structure from the data",
              "Test a pre-specified structure",
            ],
            [
              "When",
              "New scale development, item pool of unknown structure",
              "Adaptation studies, structures established in the literature",
            ],
            [
              "Theoretical input",
              "Items are not assigned to factors in advance",
              "Item-to-factor assignment is specified up front",
            ],
            [
              "Key outputs",
              "KMO, Bartlett, factor loadings, variance explained",
              "Fit indices (χ²/df, RMSEA, CFI, TLI, SRMR), standardised loadings",
            ],
            [
              "Sample",
              "5-10 respondents per item, typically 200+",
              "Typically 200+; more for complex models",
            ],
            [
              "Sequence",
              "Comes first in scale development",
              "After EFA, preferably on a separate sample",
            ],
          ],
        },
        {
          type: "table",
          heading: "EFA decision criteria at a glance",
          intro:
            "All of these values are expected in the write-up; borderline cases require an explicit justification:",
          columns: ["Criterion", "Acceptable value", "Note"],
          rows: [
            [
              "KMO sampling adequacy",
              "≥ 0.60 (0.80+ good)",
              "Below 0.50: factor analysis is not appropriate",
            ],
            [
              "Bartlett's test of sphericity",
              "p < 0.05",
              "Non-significant means inter-item correlation is insufficient",
            ],
            [
              "Sample size",
              "5-10 per item; generally ≥ 200",
              "Smaller samples are defensible when loadings are high and factors clean",
            ],
            [
              "Factor loading",
              "≥ 0.40 (0.30 as a floor)",
              "Higher loadings mean the item represents the factor strongly",
            ],
            [
              "Cross-loading",
              "Gap between two loadings ≥ 0.10",
              "A small gap leaves the item's dimension ambiguous",
            ],
            [
              "Total variance explained",
              "> 50% in multi-factor structures",
              "Lower is acceptable for unidimensional scales",
            ],
            [
              "Factor retention criterion",
              "Parallel analysis + scree plot + theory",
              "'Eigenvalue > 1' alone over-extracts",
            ],
          ],
        },
        {
          type: "table",
          heading: "CFA fit indices and thresholds",
          intro:
            "No single index decides model fit in CFA; they are reported and read together:",
          columns: ["Index", "Good fit", "Acceptable fit"],
          rows: [
            ["χ² / df (chi-square / degrees of freedom)", "≤ 3", "≤ 5"],
            ["RMSEA", "≤ 0.05", "≤ 0.08"],
            ["SRMR", "≤ 0.05", "≤ 0.08"],
            ["CFI", "≥ 0.95", "≥ 0.90"],
            ["TLI (NNFI)", "≥ 0.95", "≥ 0.90"],
            ["Standardised factor loadings", "≥ 0.70", "≥ 0.50 (significant, p < 0.05)"],
          ],
        },
        {
          type: "bullets",
          heading: "Common mistakes",
          items: [
            "Running EFA and CFA on the same sample — confirming a structure on the very data it was derived from is not confirmation; use a separate sample, or split the sample in half if that isn't possible",
            "Retaining factors on the 'eigenvalue > 1' rule alone, which systematically produces too many factors",
            "Reaching for varimax by reflex; oblique rotation (oblimin/promax) fits better when the dimensions are theoretically expected to correlate",
            "Reporting principal component analysis (PCA) as factor analysis; they are different methods and the one used must be stated",
            "Adding theoretically ungrounded error covariances chased from modification indices to push fit indices over the line — the intervention reviewers question most",
            "Deleting an item purely for a low loading, without ever weighing its contribution to content coverage",
            "Reporting a single Cronbach's alpha for the whole scale before the dimensions are settled; alpha is computed per dimension",
            "Running CFA on a very small sample (say 60-80 respondents) and presenting the resulting fit indices as conclusive",
          ],
        },
        {
          type: "paragraphs",
          heading: "If you are adapting an existing scale",
          body: [
            "In adaptation studies the statistics are only the final link in the chain: linguistic equivalence is established first through translation and back-translation, content validity is assessed via expert review, and only then is construct validity tested with factor analysis. When the original scale's dimensional structure is known, CFA tests directly whether that structure holds in the new sample; if it doesn't fit, the structure may genuinely differ in this population, so you return to EFA and report the emerging structure with its justification. That is not a failed study — it is an ordinary and publishable finding in adaptation research.",
            "If you plan to compare groups (does the scale measure the same thing for women and men, or across two age groups?), you need measurement invariance testing; mean comparisons can mislead when equivalence across groups hasn't been demonstrated. Convergent and discriminant validity may also call for additional indices such as AVE and CR. During the free initial review we work out which of these your study genuinely needs — without padding it with analyses that add nothing.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Should I run EFA or CFA?",
          answer:
            "If you are developing the scale yourself, or its dimensional structure is uncertain, start with exploratory factor analysis (EFA); once the structure emerges, test it with confirmatory factor analysis (CFA), preferably on a separate sample. If you are using or adapting a scale whose structure is established in the literature, CFA alone is sufficient — though returning to EFA when CFA fit indices don't hold is a legitimate and common route.",
        },
        {
          question: "How large a sample does factor analysis need?",
          answer:
            "The common rule is 5-10 respondents per item, so a 20-item scale calls for roughly 100-200 people. In practice 200 and above is considered safe, and 300+ good. Sample size alone doesn't settle it: with high loadings (0.60+) and cleanly separated dimensions, smaller samples can be defended, while low, scattered loadings won't be rescued even by a large sample.",
        },
        {
          question: "What KMO value do I need, and what if it's too low?",
          answer:
            "KMO should be at least 0.60, with 0.80 and above considered good; below 0.50 the data aren't suitable for factor analysis. When it comes out low, the first place to look is the item-level anti-image correlations: identifying and removing items that correlate weakly with the rest usually raises KMO. If the problem persists, revisit the sample size or the theoretical coherence of the item pool.",
        },
        {
          question: "What factor loading is high enough, and what is a cross-loading?",
          answer:
            "A loading of 0.40 or above is the widely used criterion (0.30 can serve as a floor). A cross-loading item loads on more than one factor at similar magnitudes; when the gap between the two loadings is under 0.10, the item's dimension is ambiguous and it becomes a removal candidate. Weigh the item's contribution to the scale's content coverage before removing it, and state the reasoning in the write-up.",
        },
        {
          question: "Do you use AMOS, LISREL or SmartPLS?",
          answer:
            "No — we run the analyses on our own Python-based stack. The results are identical to what you'd get from those programs: the same fit indices (χ²/df, RMSEA, CFI, TLI, SRMR), standardised factor loadings and path diagram, laid out in the table format theses and journals expect. You don't need a licence for any of them, and SPSS-compatible reporting is available too.",
        },
        {
          question: "My CFA fit indices fell short — what should I do?",
          answer:
            "Start by locating where the model strains: items with low standardised loadings, item pairs that overlap in content, or a dimensional structure that differs from the one specified. Theoretically grounded adjustments — correlating the errors of two near-identical items, for instance — are defensible; chasing modification indices without justification is the fastest thing for a reviewer to catch. If the structure genuinely differs, going back to EFA and reporting the new structure makes for a stronger paper than a forced model.",
        },
      ],
      cta: {
        heading: "Let us run your scale validity analysis end to end",
        text: "Send us your dataset and we'll handle it all — suitability checks, factor retention and rotation decisions, documented item-removal reasoning, CFA fit indices — and deliver tables you can paste straight into your thesis or manuscript. The initial review is free.",
        button: "Request a Free Initial Review",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default factorAnalysis;
