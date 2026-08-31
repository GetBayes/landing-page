import type { Topic } from "../types";

const dentistryFindService: Topic = {
  key: "dentistry-find-service",
  kind: "guide",
  datePublished: "2026-08-31",
  dateModified: "2026-08-31",
  related: [
    "dentistry-statistics",
    "biostatistics",
    "find-statistician",
    "comparison",
    "pricing",
    "sample-size",
  ],
  locales: {
    tr: {
      metaTitle: "Diş Hekimliği Tez Analizi Nereden Yaptırılır? | GetBayes",
      metaDescription:
        "DUS ve doktora tezinin istatistiğini kimden yaptırmalı? Kanalların karşılaştırması, split-mouth ve gözlemci uyumu için sorulacak sorular, uyarı işaretleri, piyasa fiyatları.",
      headline: "Diş Hekimliği Tez Analizini Nereden Yaptırmalı?",
      lead: [
        "Diş hekimliği tezinin istatistiğini dört yerden yaptırabilirsiniz: fakültenizin (çoğu zaman tıp fakültesine bağlı) biyoistatistik birimi, istatistikle ilgilenen bir öğretim üyesi, bireysel istatistikçiler ve GetBayes gibi analiz hizmeti veren ekipler. Ama diş hekimliğinde seçimi belirleyen tek bir teknik soru var: **verinizdeki gözlemler birbirinden bağımsız değil.** Aynı hastanın birden çok dişi, aynı ağzın iki yarısı, aynı implantın tekrarlı ölçümleri — bunları bağımsız gözlem sayan bir analiz p değerini olduğundan küçük gösterir. Kiminle konuşursanız konuşun ilk sorunuz bu olmalı: \"Aynı hastadan gelen birden çok ölçümü nasıl ele alacaksınız?\"",
        "Aşağıda kanalların artı-eksisi, split-mouth tasarımdan gözlemci uyumuna kadar sorulacak sorular, uyarı işaretleri ve kamuya açık ilanlardan derlenmiş fiyat aralıkları var. GetBayes de bu seçeneklerden biri ve ücretli bir hizmet — ne yaptığımızı sayfanın sonunda açıkça yazıyoruz.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Diş hekimliğinde uzmanlık (DUS) tezi yürüten araştırma görevlileri",
          "Doktora ve yüksek lisans tezi yapan diş hekimliği öğrencileri",
          "İmplant, periodontoloji, ortodonti, endodonti veya restoratif alanında klinik çalışma yürütenler",
          "Bağlanma dayanımı, mikrosızıntı, materyal karşılaştırması gibi in-vitro çalışma yapan araştırmacılar",
          "Makalesi diş hekimliği dergisinden istatistik revizyonuyla dönen araştırmacılar",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Diş hekimliği verisini özel yapan şey",
          body: [
            "Çoğu tıbbi çalışmada bir hasta bir satırdır. Diş hekimliğinde ise bir hasta 28 diş, 4 implant veya ağzın iki yarısı olabilir. Aynı ağızdan gelen ölçümler birbirine benzer (kümelenme), dolayısıyla 30 hastadan toplanan 120 diş, 120 bağımsız gözlem değildir. Bu ayrımı yapmayan bir analiz, örneklemi olduğundan büyük varsayar, güven aralıklarını daraltır ve gerçekte olmayan farkları anlamlı gösterir. Hakemlerin diş hekimliği makalelerinde en sık takıldığı nokta tam olarak budur.",
            "Doğru yaklaşım tasarıma göre değişir: split-mouth çalışmalarda eşleştirilmiş (bağımlı örneklem) karşılaştırmalar, aynı hastadan çok sayıda diş/implant içeren verilerde küme etkisini modelleyen yaklaşımlar, zaman içinde tekrarlanan periodontal indekslerde tekrarlı ölçüm analizleri. Analizi kime yaptırırsanız yaptırın, veri yapınızı anlatıp bu konudaki planını duymadan başlamayın.",
          ],
        },
        {
          type: "table",
          heading: "Analizi yaptırabileceğiniz kanallar",
          columns: ["Kanal", "Güçlü yönü", "Zayıf yönü", "Tipik süre"],
          rows: [
            [
              "Üniversitenin biyoistatistik birimi",
              "Metodolojik olarak en sağlam adres; tez ve etik kurul formatına hakim",
              "Diş hekimliği fakültelerinin çoğunda kendi birimi yok, tıp tarafından destek alınır; yoğunluk nedeniyle sıra beklenir",
              "2-8 hafta",
            ],
            [
              "İstatistik bilen öğretim üyesi / kıdemli asistan",
              "Klinik bağlamı ve tezin gereklerini biliyor",
              "Kendi yükü ağır; sağkalım analizi ve küme etkisi gibi başlıklarda sınıra gelinebilir",
              "Değişken, çoğu zaman belirsiz",
            ],
            [
              "Bireysel / freelance istatistikçi",
              "Esnek, pazarlığa açık",
              "Split-mouth ve diş düzeyi veriyle tecrübesi olmayabilir; en sık hata (her dişi bağımsız saymak) burada çıkar",
              "3 gün - 2 hafta",
            ],
            [
              "Profesyonel analiz hizmeti (GetBayes gibi)",
              "Yazılı sabit fiyat, dergi formatında rapor, ücretsiz revizyon ve teslim sonrası soru-cevap",
              "Ücretli; bütçe sıfırsa ve vaktiniz bolsa kendiniz öğrenmek daha uygun olabilir",
              "Analiz 15 dakika, teslim aynı gün",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Anlaşmadan önce sorulacak yedi soru",
          intro:
            "Cevapları, hakem sürecinde alacağınız yorumları doğrudan belirler:",
          items: [
            "**Aynı hastadan gelen birden çok diş/implant ölçümünü nasıl ele alacaksınız?** Küme etkisinin dikkate alınacağını duymanız gerekir; \"her dişi ayrı gözlem sayarız\" cevabı en yaygın ve en maliyetli hatadır.",
            "**Split-mouth tasarımda hangi testi kullanacaksınız?** Ağzın iki yarısı aynı hastaya ait olduğu için karşılaştırma eşleştirilmiş olmalı: bağımlı örneklem t-testi veya Wilcoxon işaretli sıralar testi, bağımsız gruplar testi değil.",
            "**İmplant/restorasyon başarısını nasıl raporlayacaksınız?** Takip süresi değişkense yüzde başarı oranı yetersizdir; Kaplan-Meier sağkalım eğrisi, log-rank ve risk faktörleri için Cox regresyonu beklenir.",
            "**Gözlemci uyumunu hangi katsayıyla vereceksiniz?** Kategorik değerlendirmede Cohen kappa (sıralı veride ağırlıklı kappa), sürekli ölçümde sınıf içi korelasyon katsayısı (ICC) ve gerektiğinde Bland-Altman grafiği. Kalibrasyon raporlanmadan gönderilen makaleler revizyon alır.",
            "**DMFT gibi sayım verilerini nasıl analiz edeceksiniz?** Çürük sayıları çarpık dağılır ve sıfır yığılması gösterir; nonparametrik testler veya sayım veri modelleri gerekir, t-testi çoğu zaman uygun değildir.",
            "**In-vitro çalışmada çoklu karşılaştırma düzeltmesi yapılacak mı?** Dört-beş materyal grubunu ikişerli karşılaştırırken düzeltme yapılmazsa yanlış pozitif üretilir; post-hoc yönteminin adı söylenebilmeli.",
            "**Örneklem hesabı diş düzeyinde mi hasta düzeyinde mi yapıldı?** Etik kurul ve tez öneri aşamasında bu ayrım netleşmezse, veri toplandıktan sonra düzeltilemez.",
          ],
        },
        {
          type: "bullets",
          heading: "Uyarı işaretleri",
          items: [
            "**\"n'i diş sayısı olarak alalım, örneklem büyük görünsün.\"** İstatistiksel olarak savunulamaz; hakem bunu ilk turda sorar.",
            "**\"Anlamlı çıkarırız\" güvencesi.** Anlamlılık vaat edilemez. Anlamsız sonuç da geçerli bir bulgudur ve doğru yazıldığında tez geçer.",
            "**Gözlemci uyumunun \"gerekmez\" denerek atlanması.** Klinik indeks veya radyografik ölçüm içeren neredeyse her çalışmada isteniyor.",
            "**Çalışma tasarımını sormadan fiyat vermek.** Split-mouth bir çalışma ile paralel gruplu bir çalışma aynı analiz değildir.",
            "**Sadece SPSS çıktısı gönderip yorumu size bırakmak.** Savunmada anlatacağınız şey çıktı değil, yorumdur.",
            "**Veri gizliliği konusunda yazılı taahhüt verilmemesi.** Hasta verisini kimliksizleştirerek gönderin; ad, kimlik ve dosya numarası analiz için gerekmez.",
          ],
        },
        {
          type: "table",
          heading: "Ne kadar tutar? (2026 piyasa aralıkları)",
          intro:
            "Rakamlar kamuya açık hizmet ilanlarından derlenmiştir; GetBayes fiyatları değildir.",
          columns: ["Analiz kapsamı", "Piyasa aralığı", "Not"],
          rows: [
            [
              "Tanımlayıcı istatistik + grup karşılaştırmaları",
              "2.000 - 6.000 ₺",
              "Dar kapsamlı in-vitro çalışmalar ve basit klinik karşılaştırmalar",
            ],
            [
              "Tekrarlı ölçüm, gözlemci uyumu, çok değişkenli analiz",
              "6.000 - 10.000 ₺",
              "Tipik bir DUS tezi genelde bu aralıkta",
            ],
            [
              "Sağkalım analizi, küme etkisi modellemesi, çok merkezli veri",
              "10.000 - 20.000 ₺ ve üzeri",
              "İmplant takip çalışmaları ve karmaşık tasarımlar",
            ],
            [
              "Hakem revizyonu / ek analiz",
              "Piyasada çoğunlukla ayrı ücretlendirilir",
              "GetBayes'te hakem, danışman veya jüri kaynaklı revizyonlar ücretsizdir",
            ],
          ],
        },
        {
          type: "steps",
          heading: "İlk mesajınızda ne göndermelisiniz?",
          steps: [
            {
              title: "Veri düzeyi",
              description:
                "Tablonuzda bir satır neyi temsil ediyor: hasta mı, diş mi, implant mı, ölçüm zamanı mı? Bu tek bilgi analiz planının yarısını belirler.",
            },
            {
              title: "Tasarım",
              description:
                "Split-mouth mu, paralel gruplu mu, in-vitro mu; kaç grup var, ölçümler kaç zaman noktasında alındı.",
            },
            {
              title: "Kimliksizleştirilmiş veri",
              description:
                "Excel veya SPSS dosyanız — hasta adı ve dosya numarası çıkarılmış halde. Eksik ve dağınık olması sorun değil.",
            },
            {
              title: "Takvim ve hedef format",
              description:
                "Tez teslim/savunma tarihiniz ve varsa makaleyi göndermeyi düşündüğünüz dergi; tablolar buna göre hazırlanır.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Etik sınır ve biz nerede duruyoruz",
          body: [
            "Analiz desteği almak diş hekimliği araştırmalarında yaygın ve kabul gören bir uygulamadır; sınır ise nettir: veri gerçek ve size ait olmalı, yöntemi anlamalı ve savunabilmelisiniz. İyi bir rapor bu yüzden sonucun yanında her yöntem tercihinin gerekçesini de yazar — \"bu testi neden kullandınız?\" sorusunun cevabı raporunuzda olmalıdır.",
            "GetBayes bu seçeneklerden biridir: split-mouth ve diş düzeyi verilerde bağımlılık yapısını doğru modelleyen karşılaştırmalar, implant ve restorasyon sağkalımı için Kaplan-Meier ve Cox, gözlemci uyumu için kappa/ICC, periodontal indeksler için tekrarlı ölçüm analizleri ve DMFT gibi sayım verileri için uygun modeller çalışırız. Analizin kendisi çoğunlukla 15 dakika sürer; teslim aynı gün, çoğu zaman saatler hatta dakikalar içindedir. Danışman, jüri veya hakem kaynaklı revizyonlar ücretsizdir.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Örneklemim 30 hasta ama 120 diş — n kaç yazılmalı?",
          answer:
            "İkisi de raporlanır, ama analiz birimi hangisiyse istatistik ona göre kurulur. Aynı ağızdan gelen dişler birbirine benzediği için 120 diş 120 bağımsız gözlem değildir; küme etkisi dikkate alınmadan yapılan analiz p değerini olduğundan küçük gösterir. Tabloda \"30 hasta, 120 diş\" şeklinde açıkça belirtmek ve analizde bağımlılığı modellemek doğru yaklaşımdır.",
        },
        {
          question: "Split-mouth çalışmamda hangi test kullanılmalı?",
          answer:
            "Ağzın iki yarısı aynı hastaya ait olduğu için karşılaştırma eşleştirilmiş olmalıdır: normallik sağlanıyorsa bağımlı örneklem t-testi, sağlanmıyorsa Wilcoxon işaretli sıralar testi. Bağımsız gruplar testi (t-testi/Mann-Whitney) kullanmak, tasarımın en güçlü yanını — hasta içi kontrolü — atmak anlamına gelir.",
        },
        {
          question: "Gözlemci uyumu neden isteniyor, nasıl hesaplanıyor?",
          answer:
            "Klinik indeksler ve radyografik ölçümler değerlendiriciye göre değişebildiği için dergiler ölçümün tekrarlanabilirliğini görmek ister. Kategorik değerlendirmelerde Cohen kappa (sıralı ölçekte ağırlıklı kappa), sürekli ölçümlerde sınıf içi korelasyon katsayısı (ICC) kullanılır; gerekirse Bland-Altman grafiğiyle sistematik sapma gösterilir. Bunu tez öneri aşamasında planlamak, sonradan yeniden ölçüm yapmaktan kolaydır.",
        },
        {
          question: "In-vitro çalışmamda dört materyali karşılaştırıyorum, hangi analiz gerekir?",
          answer:
            "Varsayımlar sağlanıyorsa tek yönlü ANOVA ve ardından uygun post-hoc test (örneğin Tukey), sağlanmıyorsa Kruskal-Wallis ve düzeltmeli ikili karşılaştırmalar. Kritik nokta çoklu karşılaştırma düzeltmesidir: dört grubu düzeltmesiz ikişerli karşılaştırmak yanlış pozitif üretir. Grupları alt tabakalara da ayırdıysanız (örneğin yaşlandırma öncesi/sonrası) iki yönlü ANOVA daha uygun olabilir.",
        },
        {
          question: "Hasta verisini paylaşmak güvenli mi?",
          answer:
            "Kimliksizleştirilmiş veri paylaşın; analiz için hasta adı, kimlik veya dosya numarası gerekmez. GetBayes'te veriniz yalnızca sizin çalışmanız için kullanılır, üçüncü kişilerle paylaşılmaz ve en geç son teslimden 90 gün sonra otomatik silinir; her zaman daha erken silinmesini isteyebilirsiniz.",
        },
        {
          question: "Ne kadar sürer ve fiyat nasıl belirlenir?",
          answer:
            "Analizin kendisi çoğunlukla 15 dakika sürer, teslim aynı gün yapılır. Fiyat çalışma tasarımının karmaşıklığına ve analiz sayısına göre belirlenir; teslim hızına veya revizyon sayısına göre değişmez. Verinizi gönderdiğinizde 24 saat içinde ücretsiz ön değerlendirme ve yazılı net fiyat alırsınız.",
        },
      ],
      cta: {
        heading: "Diş hekimliği tezinizin analizi için ön değerlendirme alın",
        text: "Veri düzeyinizi, tasarımınızı ve kimliksizleştirilmiş verinizi gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili rehberler ve hizmetler",
    },
    en: {
      metaTitle: "Where to Get Dental Thesis Statistics Done | GetBayes",
      metaDescription:
        "Who should analyse your dental thesis data? Channels compared, the questions to ask about split-mouth designs and examiner agreement, red flags, and market price ranges.",
      headline: "Where Should You Get Your Dental Thesis Analysed?",
      lead: [
        "You have four realistic options for the statistics in a dental thesis: your university's biostatistics unit (often housed in the medical faculty), a faculty member with a statistics background, an individual freelance statistician, or an analysis service such as GetBayes. But in dentistry one technical question decides the choice: **your observations are not independent.** Several teeth from the same patient, two halves of the same mouth, repeated measurements on the same implant — an analysis that treats these as independent observations reports p-values that are smaller than they should be. Whoever you speak to, ask this first: \"How will you handle multiple measurements from the same patient?\"",
        "Below are the trade-offs of each channel, the questions to ask about everything from split-mouth designs to examiner agreement, the warning signs, and price ranges compiled from public listings. GetBayes is one of these options and a paid service — we say plainly what we do at the end of the page.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Residents writing a dental specialty thesis",
          "PhD and master's students in dentistry",
          "Clinicians running studies in implantology, periodontology, orthodontics, endodontics or restorative dentistry",
          "Researchers running in-vitro studies (bond strength, microleakage, material comparison)",
          "Anyone whose manuscript returned from a dental journal with statistical revisions",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "What makes dental data different",
          body: [
            "In most medical studies one patient is one row. In dentistry one patient can be 28 teeth, four implants, or two halves of a mouth. Measurements from the same mouth resemble each other (clustering), so 120 teeth collected from 30 patients are not 120 independent observations. An analysis that ignores this assumes a larger sample than you have, narrows confidence intervals and turns differences that are not there into significant findings. It is the single most common reviewer objection in dental manuscripts.",
            "The right approach depends on the design: paired (dependent-samples) comparisons for split-mouth studies, approaches that model the clustering when many teeth or implants come from the same patient, and repeated-measures analysis for periodontal indices tracked over time. Whoever you hire, describe your data structure and hear their plan for this before work starts.",
          ],
        },
        {
          type: "table",
          heading: "Where you can get the analysis done",
          columns: ["Channel", "Strength", "Weakness", "Typical turnaround"],
          rows: [
            [
              "University biostatistics unit",
              "Methodologically the safest address; fluent in thesis and ethics requirements",
              "Most dental faculties have no unit of their own and rely on the medical side; heavy workload means queueing",
              "2-8 weeks",
            ],
            [
              "Faculty member / senior resident with statistics background",
              "Knows the clinical context and what the thesis requires",
              "Carries their own workload; survival analysis and clustering can exceed the comfort zone",
              "Variable, often open-ended",
            ],
            [
              "Individual / freelance statistician",
              "Flexible, negotiable",
              "May have no experience with split-mouth or tooth-level data — this is where the classic mistake of treating every tooth as independent appears",
              "3 days - 2 weeks",
            ],
            [
              "Professional analysis service (like GetBayes)",
              "Written fixed quote, journal-format reporting, free revisions and post-delivery Q&A",
              "Paid; with a zero budget and plenty of time, learning it yourself may fit better",
              "Analysis in 15 minutes, same-day delivery",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Seven questions to ask before you commit",
          intro: "The answers predict the reviewer comments you will receive:",
          items: [
            "**How will you handle multiple teeth or implants from the same patient?** You need to hear that clustering will be accounted for; \"we count each tooth as a separate observation\" is the most common and most costly error.",
            "**Which test will you use for a split-mouth design?** Because both halves belong to the same patient, the comparison must be paired: dependent-samples t-test or Wilcoxon signed-rank, not an independent-groups test.",
            "**How will implant or restoration success be reported?** With variable follow-up, a percentage success rate is not enough; Kaplan-Meier survival curves, log-rank tests and Cox regression for risk factors are expected.",
            "**Which coefficient will you use for examiner agreement?** Cohen's kappa for categorical assessments (weighted kappa for ordinal), the intraclass correlation coefficient (ICC) for continuous measurements, and a Bland-Altman plot where relevant. Manuscripts submitted without calibration data come back with revisions.",
            "**How will count data such as DMFT be analysed?** Caries counts are skewed and zero-inflated; they call for nonparametric tests or count models, and a t-test is often not appropriate.",
            "**Will multiple comparisons be corrected in the in-vitro study?** Comparing four or five material groups pairwise without correction manufactures false positives; they should be able to name the post-hoc method.",
            "**Was the sample size calculated at tooth level or patient level?** If this is not settled at the protocol and ethics stage, it cannot be fixed after data collection.",
          ],
        },
        {
          type: "bullets",
          heading: "Red flags",
          items: [
            "**\"Let's use the number of teeth as n so the sample looks bigger.\"** Statistically indefensible, and reviewers ask about it in the first round.",
            "**A promise that results will come out significant.** Significance cannot be promised. A null result is a valid finding and, written properly, passes a defence.",
            "**Being told examiner agreement \"isn't needed.\"** Nearly every study involving clinical indices or radiographic measurement is expected to report it.",
            "**A quote given without asking about the study design.** A split-mouth study and a parallel-group study are not the same analysis.",
            "**Raw SPSS output with the interpretation left to you.** What you present at your defence is the interpretation, not the output.",
            "**No written confidentiality commitment.** De-identify patient data before sending; names, IDs and file numbers are not needed for analysis.",
          ],
        },
        {
          type: "table",
          heading: "What does it cost? (2026 market ranges)",
          intro:
            "Compiled from public service listings; these are not GetBayes prices.",
          columns: ["Scope of analysis", "Market range", "Note"],
          rows: [
            [
              "Descriptive statistics + group comparisons",
              "$300 - $600 per project",
              "Narrow-scope in-vitro studies and simple clinical comparisons",
            ],
            [
              "Repeated measures, examiner agreement, multivariable analysis",
              "$600 - $1,000 per project",
              "Where a typical dental specialty thesis lands",
            ],
            [
              "Survival analysis, clustered data modelling, multicentre studies",
              "$1,000 - $1,500+ per project",
              "Implant follow-up studies and complex designs",
            ],
            [
              "Reviewer revisions / additional analyses",
              "Usually billed separately across the market",
              "At GetBayes, revisions driven by a reviewer, advisor or committee are free",
            ],
          ],
        },
        {
          type: "steps",
          heading: "What to send in your first message",
          steps: [
            {
              title: "Unit of observation",
              description:
                "What does one row of your table represent — a patient, a tooth, an implant, a time point? This single fact determines half of the analysis plan.",
            },
            {
              title: "Design",
              description:
                "Split-mouth, parallel-group or in-vitro; how many groups, and at how many time points measurements were taken.",
            },
            {
              title: "De-identified data",
              description:
                "Your Excel or SPSS file with patient names and file numbers removed. Missing values and messy coding are fine.",
            },
            {
              title: "Timeline and target format",
              description:
                "Your submission or defence date and, if relevant, the journal you plan to submit to — tables are built accordingly.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "The ethical line, and where we stand",
          body: [
            "Analysis support is common and accepted in dental research, and the boundary is clear: the data must be real and yours, and you must understand and be able to defend the methods. A good report therefore justifies every methodological choice alongside the result — the answer to \"why this test?\" should already be in your report.",
            "GetBayes is one of the options above: we run comparisons that correctly model dependency in split-mouth and tooth-level data, Kaplan-Meier and Cox for implant and restoration survival, kappa/ICC for examiner agreement, repeated-measures analysis for periodontal indices, and appropriate models for count data such as DMFT. The analysis itself usually takes 15 minutes; delivery is same-day, often within hours or even minutes. Revisions driven by an advisor, committee or reviewer are free.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "My sample is 30 patients but 120 teeth — which is n?",
          answer:
            "Report both, but build the statistics around the actual unit of analysis. Teeth from the same mouth resemble each other, so 120 teeth are not 120 independent observations; ignoring clustering produces p-values that are too small. State \"30 patients, 120 teeth\" explicitly in the table and model the dependency in the analysis.",
        },
        {
          question: "Which test should a split-mouth study use?",
          answer:
            "Because both halves come from the same patient, the comparison must be paired: a dependent-samples t-test when normality holds, the Wilcoxon signed-rank test when it does not. Using an independent-groups test throws away the design's greatest strength — within-patient control.",
        },
        {
          question: "Why is examiner agreement required, and how is it calculated?",
          answer:
            "Clinical indices and radiographic measurements vary between examiners, so journals want evidence that the measurement is reproducible. Cohen's kappa is used for categorical assessments (weighted kappa for ordinal scales) and the intraclass correlation coefficient (ICC) for continuous ones, with a Bland-Altman plot to show systematic bias where needed. Planning this at the protocol stage is far easier than re-measuring afterwards.",
        },
        {
          question: "My in-vitro study compares four materials — what analysis do I need?",
          answer:
            "One-way ANOVA with an appropriate post-hoc test (Tukey, for example) when assumptions hold; Kruskal-Wallis with corrected pairwise comparisons when they do not. The critical point is multiple-comparison correction: comparing four groups pairwise without it manufactures false positives. If you also split groups into strata (before/after ageing, say), a two-way ANOVA may fit better.",
        },
        {
          question: "Is it safe to share patient data?",
          answer:
            "Share de-identified data; names, IDs and file numbers are not needed for analysis. At GetBayes your data is used only for your study, never shared with third parties, and automatically deleted no later than 90 days after final delivery — you can always request earlier deletion.",
        },
        {
          question: "How long does it take, and how is the price set?",
          answer:
            "The analysis itself usually takes 15 minutes and delivery is same-day. The price is set by the complexity of the design and the number of analyses; it does not change with delivery speed or the number of revisions. Send your data and you get a free assessment and a clear written quote within 24 hours.",
        },
      ],
      cta: {
        heading: "Get a free assessment for your dental thesis",
        text: "Send your unit of observation, your design and your de-identified data — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related guides and services",
    },
  },
};

export default dentistryFindService;
