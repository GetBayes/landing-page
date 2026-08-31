import type { Topic } from "../types";

const medicalFindService: Topic = {
  key: "medical-find-service",
  kind: "guide",
  datePublished: "2026-08-31",
  dateModified: "2026-08-31",
  related: [
    "biostatistics",
    "find-statistician",
    "health-use-cases",
    "article-statistics",
    "pricing",
    "sample-size",
  ],
  locales: {
    tr: {
      metaTitle: "Tıp Tezi İstatistiği Nereden Yaptırılır? | GetBayes",
      metaDescription:
        "Uzmanlık tezi ve klinik araştırma istatistiğini kimden yaptırmalı? Kanalların artı-eksisi, biyoistatistikçiye sorulacak sorular, uyarı işaretleri ve piyasa fiyatları.",
      headline: "Tıp Tezi İstatistiğini Nereden Yaptırmalı?",
      lead: [
        "Uzmanlık tezi, klinik araştırma ya da retrospektif dosya taraması yürütüyorsanız istatistik desteğini pratikte dört yerden alabilirsiniz: fakültenizin Biyoistatistik Anabilim Dalı, istatistikle ilgilenen bir kıdemli asistan veya öğretim üyesi, bireysel (freelance) istatistikçiler ve GetBayes gibi analiz hizmeti veren ekipler. Tıpta seçimi belirleyen kritik yetkinlikler bellidir: sağkalım analizi (Kaplan-Meier, log-rank, Cox), tanı testi değerlendirmesi (ROC, AUC, kesim noktası), çok değişkenli lojistik regresyonda doğru değişken seçimi ve STROBE/CONSORT uyumlu raporlama. Anlaşmadan önce bu başlıkları adıyla sorun.",
        "Bir de zamanlama meselesi var ve tıpta en pahalı hata budur: istatistikçiyi veri toplandıktan sonra değil, tez öneri ve etik kurul aşamasında bulmak gerekir. Aşağıda kanalların karşılaştırması, sorulacak sorular, uzak durulması gereken uyarı işaretleri ve kamuya açık ilanlardan derlenmiş fiyat aralıkları var. GetBayes de bu seçeneklerden biri ve ücretli bir hizmettir — ne yaptığımızı sayfanın sonunda açıkça yazıyoruz.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Uzmanlık tezini yürüten tıp asistanları ve tez danışmanları",
          "Retrospektif dosya taraması, vaka-kontrol veya kohort çalışması planlayan hekimler",
          "Etik kurul başvurusu için örneklem büyüklüğü gerekçesi hazırlaması gerekenler",
          "Makalesi hakemden istatistik revizyonuyla dönen sağlık bilimleri araştırmacıları",
          "Randomize kontrollü çalışma yürüten ve CONSORT uyumlu raporlama gereken ekipler",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "En pahalı hata: yanlış zamanda aramak",
          body: [
            "Tıpta istatistik desteğine iki noktada ihtiyaç duyulur; çoğu kişi yalnızca ikincisinde arar. Birincisi tez öneri ve etik kurul aşamasıdır: kaç hastaya ulaşmanız gerektiği (a priori güç analizi), hangi ölçütün birincil sonlanım noktası olacağı ve verinin hangi formatta toplanacağı burada belirlenir. İkincisi veri toplandıktan sonraki analiz aşamasıdır.",
            "Sorun şu ki, ilk aşama atlanınca ikinci aşamada yapılabilecek şey sınırlıdır: yetersiz örneklemle çalışılmış bir tezde \"anlamlı fark bulunamadı\" sonucu, gerçekten fark olmadığı için değil güç yetmediği için çıkar — ve bu ancak dürüstçe raporlanabilir, sonradan düzeltilemez. Dosya taramasında sonradan tamamlanamayan değişkenler de aynı kapıya çıkar. Veri toplamaya başlamadan önce yarım saatlik bir görüşme, tezin sonunda haftalarca uğraşmaktan ucuzdur.",
          ],
        },
        {
          type: "table",
          heading: "Analizi yaptırabileceğiniz kanallar",
          intro:
            "Hepsinin çalıştığı durumlar var; hangisinin size uyduğu çalışma tipinize ve takviminize bağlı.",
          columns: ["Kanal", "Güçlü yönü", "Zayıf yönü", "Tipik süre"],
          rows: [
            [
              "Fakültenin Biyoistatistik Anabilim Dalı",
              "Alanın en yetkin adresi; etik kurul ve tez formatına tam hakim",
              "Yoğunluk yüksek, sıra beklenir; bazı kurumlarda destek yazarlık beklentisiyle gelir, kapsam kuruma göre değişir",
              "2-8 hafta",
            ],
            [
              "İstatistik bilen kıdemli asistan / öğretim üyesi",
              "Klinik bağlamı biliyor, hızlı ulaşılır, çoğu zaman ücretsiz",
              "Kendi klinik yükü var; ileri yöntemlerde (Cox, karma model) sınıra gelinebilir",
              "Değişken, çoğu zaman belirsiz",
            ],
            [
              "Bireysel / freelance istatistikçi",
              "Esnek ve pazarlığa açık",
              "Klinik veriyle tecrübesi olmayabilir; sağkalım ve tanı testi analizlerinde kalite çok değişken, revizyon ve gizlilik sözü genelde yazılı değil",
              "3 gün - 2 hafta",
            ],
            [
              "Profesyonel analiz hizmeti (GetBayes gibi)",
              "Yazılı sabit fiyat, dergi formatında rapor, ücretsiz revizyon ve teslim sonrası soru-cevap",
              "Ücretli; çok özel yöntemlerde kapsam baştan konuşulmalı",
              "Analiz 15 dakika, teslim aynı gün",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Anlaşmadan önce sorulacak sekiz soru",
          intro:
            "Bu sorular tıp araştırmalarına özeldir; cevapların netliği, hakem sürecinde alacağınız yorumları doğrudan belirler:",
          items: [
            "**Sağkalım verisi varsa nasıl analiz edeceksiniz?** Kaplan-Meier eğrisi, log-rank testi ve risk faktörleri için Cox regresyonu cevabını duymalısınız; takip süresi olan bir veriyi basit ki-kare ile özetlemek bilgi kaybıdır.",
            "**Tanı testi çalışmamda kesim noktasını nasıl belirleyeceksiniz?** ROC eğrisi, AUC ve Youden indeksi ile duyarlılık-özgüllük dengesi; ayrıca PPV/NPV'nin prevalansa bağlı olduğunun bilinmesi.",
            "**Çok değişkenli modele hangi değişkenleri alacaksınız?** Beklenen cevap, klinik gerekçe ve tek değişkenli tarama ölçütünün birlikte kullanılması; \"ne varsa modele atarız\" cevabı aşırı uydurma (overfitting) riskidir — olay sayısı başına değişken kuralı sorulmaya değer.",
            "**Eksik veriyi nasıl ele alacaksınız?** Retrospektif dosya taramalarında eksik veri kuraldır; \"eksik satırları sileriz\" tek başına yeterli değildir, ne kadarının eksik olduğu ve nasıl raporlanacağı konuşulmalı.",
            "**Raporlama hangi kılavuza göre olacak?** Gözlemsel çalışmada STROBE, randomize çalışmada CONSORT, tanı testinde STARD — dergi editörleri bunu ilk bakışta görüyor.",
            "**Etik kurul için örneklem gerekçe metnini yazabiliyor musunuz?** Sadece sayı değil, hangi etki büyüklüğü ve güç varsayımıyla hesaplandığını anlatan paragraf isteniyor.",
            "**Tablolar hedeflediğim derginin formatında mı gelecek?** Tıp dergilerinin tablo düzeni (n (%), ortalama ± SS veya medyan [IQR], p değeri sütunu) tez formatından farklıdır.",
            "**Hakem ek analiz isterse ne olacak?** Revizyon kapsamı ve ücreti baştan yazılı olmalı; makale sürecinde ek analiz isteği çok olağandır.",
          ],
        },
        {
          type: "bullets",
          heading: "Uyarı işaretleri",
          intro:
            "Bunlar pazarlık konusu değil, çalışmanızın geçerliliğiyle ilgili sinyallerdir:",
          items: [
            "**\"p değerini anlamlı çıkarırız\" imaları.** Anlamlılık vaat edilemez; vaat ediliyorsa test tekrarlanarak ya da grup sınırları oynatılarak sonuç aranıyor demektir. Bu, tez jürisinde değilse bile hakem sürecinde ortaya çıkar.",
            "**Onlarca alt grup analizi yapıp yalnızca anlamlı çıkanları raporlama önerisi.** Düzeltme yapılmadan yürütülen çoklu karşılaştırma, yanlış pozitif üretir.",
            "**Hasta kimlik bilgileriyle veri istenmesi.** Ad, T.C. kimlik numarası veya dosya numarası analiz için gerekmez; veriyi kimliksizleştirerek gönderin.",
            "**Sadece SPSS çıktısı gönderip yorumu size bırakmak.** Uzmanlık tezinde savunulması gereken, çıktı değil yorumdur.",
            "**Çalışma tipini sormadan fiyat vermek.** Retrospektif tarama ile randomize kontrollü çalışma aynı emek değildir.",
            "**\"Tezi de yazalım\" teklifi.** Analiz desteğinin sınırı bellidir; ötesi akademik dürüstlük sorunudur.",
          ],
        },
        {
          type: "table",
          heading: "Ne kadar tutar? (2026 piyasa aralıkları)",
          intro:
            "Rakamlar kamuya açık hizmet ilanlarından derlenmiştir; GetBayes fiyatları değildir. Kendi çalışmanız için net rakam, kapsam netleştikten sonra yazılı olarak verilir.",
          columns: ["Analiz kapsamı", "Piyasa aralığı", "Not"],
          rows: [
            [
              "Tanımlayıcı istatistik + grup karşılaştırmaları",
              "2.000 - 6.000 ₺",
              "Dar kapsamlı retrospektif taramalar",
            ],
            [
              "Çok değişkenli analiz (lojistik regresyon, ROC, tekrarlı ölçüm)",
              "6.000 - 10.000 ₺",
              "Tipik bir uzmanlık tezi genelde bu aralıkta",
            ],
            [
              "İleri düzey (sağkalım + Cox, karma modeller, çok merkezli veri)",
              "10.000 - 20.000 ₺ ve üzeri",
              "Kohort çalışmaları ve karmaşık takip verileri",
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
          intro:
            "Kime yazarsanız yazın, şunları tek mesajda gönderirseniz gerçekçi bir teklif ve gerçekçi bir süre alırsınız:",
          steps: [
            {
              title: "Çalışma tipi ve soru",
              description:
                "Retrospektif mi prospektif mi, vaka-kontrol mü kohort mu; birincil sonlanım noktanız ve karşılaştırdığınız gruplar.",
            },
            {
              title: "Kimliksizleştirilmiş veri",
              description:
                "Excel veya SPSS dosyanız — hasta adı, kimlik ve dosya numarası çıkarılmış halde. Eksik ve dağınık olması sorun değil.",
            },
            {
              title: "Etik kurul ve tez takvimi",
              description:
                "Etik kurul kararınızın kapsamı ve tez teslim/savunma tarihiniz; öneri aşamasındaysanız örneklem hesabı için bunu belirtin.",
            },
            {
              title: "Hedef format",
              description:
                "Tez yazım kılavuzunuz veya makaleyi göndermeyi düşündüğünüz dergi — tablolar buna göre hazırlanır.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Etik sınır ve biz nerede duruyoruz",
          body: [
            "İstatistik desteği almak tıpta olağan bir uygulamadır — birçok klinik çalışmada biyoistatistikçi zaten ekibin parçasıdır. Sınır nettir: veri gerçek ve size ait olmalı, analiz yöntemini anlamalı ve savunabilmelisiniz. İyi bir rapor bu yüzden yalnızca sonucu değil, her yöntem tercihinin gerekçesini de yazar.",
            "GetBayes bu seçeneklerden biridir: retrospektif taramalardan randomize kontrollü çalışmalara, sağkalım analizinden tanı testi değerlendirmesine kadar tıp araştırmalarının analizini yapar, sonucu tıp dergilerinin beklediği tablo düzeninde etki büyüklüğü ve güven aralıklarıyla raporlarız. Analizin kendisi çoğunlukla 15 dakika sürer; teslim aynı gün, çoğu zaman saatler hatta dakikalar içindedir. Danışman, jüri veya hakem kaynaklı revizyonlar ücretsizdir ve teslim sonrası sorularınızı yanıtlamaya devam ederiz. Etik kurul aşamasındaysanız örneklem hesabını gerekçe metniyle birlikte hazırlıyoruz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Uzmanlık tezimin istatistiğini dışarıdan yaptırabilir miyim?",
          answer:
            "Evet; analiz desteği almak tıp araştırmalarında yaygın ve kabul gören bir uygulamadır. Kurumunuzun tez yönergesini kontrol etmeniz yeterli. Önemli olan yöntemi anlamanız ve jüri karşısında savunabilmenizdir — bu yüzden raporda her yöntem seçiminin gerekçesi yazılır ve teslimden sonra sorularınızı yanıtlarız.",
        },
        {
          question: "Hasta verisini paylaşmak güvenli mi?",
          answer:
            "Kimliksizleştirilmiş veri paylaşın: analiz için hasta adı, kimlik veya dosya numarası gerekmez; yaş, cinsiyet ve klinik değişkenler yeterlidir. GetBayes'te veriniz yalnızca sizin çalışmanız için kullanılır, üçüncü kişilerle paylaşılmaz ve en geç son teslimden 90 gün sonra otomatik silinir; daha erken silinmesini her zaman isteyebilirsiniz.",
        },
        {
          question: "Etik kurul başvurum için örneklem hesabı yapılıyor mu?",
          answer:
            "Evet. Beklenen etki büyüklüğü, alfa ve güç düzeyine göre gerekli örneklemi hesaplıyor, duyarlılık grafikleriyle birlikte etik kurulun istediği gerekçe metnini de hazırlıyoruz. Bu adımı veri toplamadan önce yapmak, tez sonunda güç yetersizliğiyle karşılaşmanın önüne geçer.",
        },
        {
          question: "Verim çok dağınık, önce düzeltmem mi gerekiyor?",
          answer:
            "Hayır. Retrospektif dosya taramalarında dağınık ve eksik veri kuraldır; \"düzeltip öyle gelin\" demiyoruz. Ne olduğunu tek tek gösterip düzeltebileceğimizi kendimiz düzeltir, veriyi temizler ve neyin nasıl ele alındığını raporda yazarız. Yalnızca gerçekten sizin karar vermeniz gereken noktaları (örneğin bir dışlama ölçütü) size sorarız.",
        },
        {
          question: "Makalem hakemden istatistik revizyonuyla döndü, ek analiz yapılabilir mi?",
          answer:
            "Evet, sık karşılaştığımız durumlardan biri bu. Hakemin istediği ek analizleri yapıyor, gerekiyorsa yöntem bölümünü güncelliyor ve hakeme verilecek istatistiksel yanıt metnini yazıyoruz. GetBayes'te hakem kaynaklı revizyonlar ücretsizdir.",
        },
        {
          question: "Ne kadar sürede teslim alırım?",
          answer:
            "Analizin kendisi çoğunlukla 15 dakika sürer, teslim aynı gün — çoğu zaman saatler hatta dakikalar içinde — yapılır. Toplam süreyi genelde veri tarafındaki eksikler ve ek analiz talepleri belirler; süreç boyunca her aşamada bize yazabilirsiniz. Aciliyet fiyatı değiştirmez.",
        },
      ],
      cta: {
        heading: "Tez veya klinik araştırmanız için ön değerlendirme alın",
        text: "Çalışma tipinizi ve kimliksizleştirilmiş verinizi gönderin; 24 saat içinde ücretsiz ön değerlendirme ve net fiyatla dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili rehberler ve hizmetler",
    },
    en: {
      metaTitle: "Where to Get Medical Thesis Statistics Done | GetBayes",
      metaDescription:
        "Who should analyse your residency thesis or clinical study? Channels compared, the questions to ask a biostatistician, red flags, and current market price ranges.",
      headline: "Where Should You Get Your Medical Thesis Analysed?",
      lead: [
        "If you are running a residency thesis, a clinical study or a retrospective chart review, you have four realistic sources of statistical support: your faculty's biostatistics department, a senior resident or attending with a statistics background, an individual freelance statistician, or an analysis service such as GetBayes. In medicine the deciding capabilities are specific: survival analysis (Kaplan-Meier, log-rank, Cox), diagnostic test evaluation (ROC, AUC, cut-off selection), sound variable selection in multivariable logistic regression, and reporting that follows STROBE or CONSORT. Ask about these by name before you commit.",
        "There is also a timing question, and in medicine it is the expensive one: you need a statistician at the protocol and ethics-approval stage, not after the data is collected. Below you will find the channels compared, the questions worth asking, the warning signs worth walking away from, and price ranges compiled from public listings. GetBayes is one of these options and a paid service — we state plainly what we do at the end of the page.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Residents writing a specialty thesis, and their supervisors",
          "Physicians planning a retrospective chart review, case-control or cohort study",
          "Anyone who needs a sample size justification for an ethics committee application",
          "Health sciences researchers whose manuscript returned with statistical revisions",
          "Teams running a randomised controlled trial that must be reported to CONSORT",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "The expensive mistake: asking at the wrong time",
          body: [
            "Medical research needs statistical input at two points, and most people only ask at the second one. The first is the protocol and ethics stage: how many patients you need (a priori power analysis), what your primary endpoint will be, and in what format the data should be collected. The second is the analysis stage, once the data is in.",
            "The problem is that skipping the first stage limits what the second can do. In an underpowered study, \"no significant difference was found\" may reflect insufficient power rather than an absence of effect — and that can only be reported honestly, not repaired afterwards. Variables missing from a chart review cannot be collected retroactively either. Half an hour before data collection is cheaper than weeks at the end of the thesis.",
          ],
        },
        {
          type: "table",
          heading: "Where you can get the analysis done",
          intro:
            "Each of these works in some situations; which fits you depends on your study type and your calendar.",
          columns: ["Channel", "Strength", "Weakness", "Typical turnaround"],
          rows: [
            [
              "Faculty biostatistics department",
              "The most qualified address in the field; fully fluent in ethics and thesis requirements",
              "Heavily loaded, so you queue; in some institutions support comes with a co-authorship expectation and the scope varies by department",
              "2-8 weeks",
            ],
            [
              "Senior resident / attending with a statistics background",
              "Knows the clinical context, easy to reach, usually free",
              "Has a clinical workload of their own; advanced methods (Cox, mixed models) may exceed the comfort zone",
              "Variable, often open-ended",
            ],
            [
              "Individual / freelance statistician",
              "Flexible and negotiable",
              "May have little experience with clinical data; quality in survival and diagnostic-test analyses varies widely, and revision or confidentiality terms are rarely in writing",
              "3 days - 2 weeks",
            ],
            [
              "Professional analysis service (like GetBayes)",
              "Written fixed quote, journal-format reporting, free revisions and post-delivery Q&A",
              "Paid; highly specialised methods should be scoped up front",
              "Analysis in 15 minutes, same-day delivery",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Eight questions to ask before you commit",
          intro:
            "These are specific to medical research, and how clearly they are answered predicts the comments you will get from reviewers:",
          items: [
            "**How will you analyse time-to-event data?** You want to hear Kaplan-Meier curves, the log-rank test and Cox regression for risk factors; summarising follow-up data with a simple chi-square discards information.",
            "**How will you choose the cut-off in my diagnostic test study?** ROC curve, AUC and the Youden index for the sensitivity-specificity trade-off — plus an awareness that PPV and NPV depend on prevalence.",
            "**Which variables go into the multivariable model?** The answer should combine clinical rationale with a univariable screening criterion; \"we put everything in\" invites overfitting, so the events-per-variable rule is worth asking about.",
            "**How will missing data be handled?** Missingness is the rule in chart reviews; \"we drop incomplete rows\" is not a complete answer on its own — how much is missing and how it will be reported both matter.",
            "**Which reporting guideline will you follow?** STROBE for observational studies, CONSORT for trials, STARD for diagnostic accuracy — editors notice this immediately.",
            "**Can you write the sample size justification for the ethics committee?** They expect a paragraph explaining the assumed effect size and power, not just a number.",
            "**Will the tables match my target journal's format?** Medical journal conventions (n (%), mean ± SD or median [IQR], a p-value column) differ from thesis formatting.",
            "**What happens if a reviewer asks for more analyses?** The scope and cost of revisions should be agreed in writing; additional requests during peer review are entirely normal.",
          ],
        },
        {
          type: "bullets",
          heading: "Red flags",
          intro:
            "These are not negotiating points — they are signals about the validity of your study:",
          items: [
            "**Any hint of \"we'll make the p-value significant.\"** Significance cannot be promised; promising it means tests will be repeated or group boundaries shifted until something appears. Even if a committee misses it, peer review often will not.",
            "**A proposal to run dozens of subgroup analyses and report only the significant ones.** Multiple comparisons without correction manufacture false positives.",
            "**Being asked for identifiable patient data.** Names, national ID or file numbers are not needed for analysis; de-identify before sending.",
            "**Raw SPSS output with the interpretation left to you.** What you defend in a thesis is the interpretation, not the output.",
            "**A price quoted without asking about the study design.** A chart review and a randomised trial are not the same effort.",
            "**An offer to \"write the thesis too.\"** Analysis support has a clear boundary; beyond it lies an academic integrity problem.",
          ],
        },
        {
          type: "table",
          heading: "What does it cost? (2026 market ranges)",
          intro:
            "Compiled from public service listings; these are not GetBayes prices. Your own quote comes in writing once the scope is clear.",
          columns: ["Scope of analysis", "Market range", "Note"],
          rows: [
            [
              "Descriptive statistics + group comparisons",
              "$300 - $600 per project",
              "Narrow-scope retrospective reviews",
            ],
            [
              "Multivariable analysis (logistic regression, ROC, repeated measures)",
              "$600 - $1,000 per project",
              "Where a typical residency thesis lands",
            ],
            [
              "Advanced (survival + Cox, mixed models, multicentre data)",
              "$1,000 - $1,500+ per project",
              "Cohort studies and complex follow-up data",
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
          intro:
            "Whoever you contact, sending these in one message gets you a realistic quote and a realistic timeline:",
          steps: [
            {
              title: "Study type and question",
              description:
                "Retrospective or prospective, case-control or cohort; your primary endpoint and the groups being compared.",
            },
            {
              title: "De-identified data",
              description:
                "Your Excel or SPSS file with names, IDs and file numbers removed. Missing values and messy coding are fine.",
            },
            {
              title: "Ethics approval and timeline",
              description:
                "The scope of your ethics approval and your submission or defence date; if you are still at protocol stage, say so and we start with sample size.",
            },
            {
              title: "Target format",
              description:
                "Your thesis formatting guide or the journal you plan to submit to — tables are built accordingly.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "The ethical line, and where we stand",
          body: [
            "Statistical support is routine in medicine — in many clinical studies a biostatistician is part of the team from the start. The line is clear: the data must be real and yours, and you must understand and be able to defend the methods. A good report therefore states not only the result but the justification for every methodological choice.",
            "GetBayes is one of the options above: we analyse medical research from retrospective reviews to randomised trials, from survival analysis to diagnostic test evaluation, and report it in the table layout medical journals expect, with effect sizes and confidence intervals. The analysis itself usually takes 15 minutes; delivery is same-day, often within hours or even minutes. Revisions driven by an advisor, committee or reviewer are free, and we keep answering questions after delivery. If you are at the ethics application stage, we prepare the sample size calculation together with its justification text.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Can I have my residency thesis statistics done externally?",
          answer:
            "Yes — analysis support is a common and accepted practice in medical research; just check your institution's thesis regulations. What matters is that you understand the methods and can defend them, which is why every method choice is justified in the report and we stay available for questions after delivery.",
        },
        {
          question: "Is it safe to share patient data?",
          answer:
            "Share de-identified data: analysis does not need names, national IDs or file numbers — age, sex and clinical variables are enough. At GetBayes your data is used only for your study, never shared with third parties, and automatically deleted no later than 90 days after final delivery; you can request earlier deletion at any time.",
        },
        {
          question: "Do you calculate sample size for my ethics application?",
          answer:
            "Yes. We compute the required sample size from the expected effect size, alpha and power, with sensitivity graphs, and write the justification paragraph the committee expects. Doing this before data collection is what prevents an underpowered study at the end.",
        },
        {
          question: "My data is messy — do I need to clean it first?",
          answer:
            "No. Messy and incomplete data is the norm in chart reviews, and we don't send it back with \"fix this and come again.\" We pinpoint exactly what is wrong, fix what can be fixed on our side, clean the dataset and document in the report how each issue was handled. We only come back to you for decisions that are genuinely yours, such as an exclusion criterion.",
        },
        {
          question: "My manuscript came back with statistical revisions — can you run the extra analyses?",
          answer:
            "Yes, this is one of the most common requests we get. We run the analyses the reviewer asked for, update the methods section where needed, and draft the statistical response letter. Reviewer-driven revisions are free at GetBayes.",
        },
        {
          question: "How fast is delivery?",
          answer:
            "The analysis itself usually takes 15 minutes and delivery is same-day, often within hours or even minutes. Total elapsed time is generally driven by gaps in the data and requests for additional analyses; you can reach us at every stage of the process. Urgency never changes the price.",
        },
      ],
      cta: {
        heading: "Get a free assessment for your thesis or clinical study",
        text: "Send your study type and de-identified data — we'll reply within 24 hours with a free assessment and a clear quote.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related guides and services",
    },
  },
};

export default medicalFindService;
