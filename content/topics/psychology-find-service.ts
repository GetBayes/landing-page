import type { Topic } from "../types";

const psychologyFindService: Topic = {
  key: "psychology-find-service",
  kind: "guide",
  datePublished: "2026-08-31",
  dateModified: "2026-08-31",
  related: [
    "psychology-statistics",
    "find-statistician",
    "comparison",
    "pricing",
    "mediation-moderation",
    "factor-analysis",
  ],
  locales: {
    tr: {
      metaTitle: "Psikoloji Tez Analizi Nereden Yaptırılır? | GetBayes",
      metaDescription:
        "Psikoloji tezinin istatistik analizini kimden yaptırmalı? Dört kanalın artı-eksisi, anlaşmadan önce sorulacak sorular, uyarı işaretleri ve 2026 piyasa fiyat aralıkları.",
      headline: "Psikoloji Tez Analizini Nereden Yaptırmalı?",
      lead: [
        "Psikoloji tezinizin istatistiğini pratikte dört yerden yaptırabilirsiniz: bölümünüzdeki istatistik/psikometri bilen bir öğretim üyesi ya da ileri düzey doktora öğrencisi, üniversitenizde varsa istatistik danışmanlık birimi, bireysel (freelance) istatistikçiler ve GetBayes gibi analiz hizmeti veren ekipler. Seçimi belirleyen şey fiyat değil, yetkinlik eşleşmesidir: psikoloji tezlerinin büyük kısmı ölçekle çalışır ve alan aynı anda üç şeyi ister — faktör analiziyle yapı geçerliği, bootstrap güven aralıklı aracılık/düzenleyicilik modelleri ve APA 7 raporlama. Kimden yaptırırsanız yaptırın, anlaşmadan önce bu üçünü doğrudan sorun.",
        "Aşağıda dört kanalın gerçek artı ve eksileri, sormanız gereken sorular, kaçmanız gereken uyarı işaretleri ve kamuya açık ilanlardan derlenmiş güncel fiyat aralıkları var. GetBayes de bu seçeneklerden biri ve ücretli bir hizmet — ne yaptığımızı sayfanın sonunda açıkça yazdık, ama önce kendi kararınızı verebilmeniz için tabloyu okuyun.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Psikoloji yüksek lisans ve doktora tezi yürüten, analiz aşamasında desteğe ihtiyaç duyan öğrenciler",
          "Ölçek geliştirme veya Türkçe uyarlama çalışması yapıp faktör analizinde takılanlar",
          "Aracılık (mediation) veya düzenleyicilik (moderation) modeli kurması gereken araştırmacılar",
          "Danışmanı \"analiz için birine danış\" diyen ama kime danışacağını bilmeyen herkes",
          "Klinik, sosyal, gelişim veya endüstri-örgüt psikolojisi alanında lisans bitirme projesi yapan öğrenciler",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Analizi yaptırabileceğiniz dört kanal",
          intro:
            "Hiçbiri her durumda en iyisi değil; hangisinin size uyduğu tezinizin karmaşıklığına ve takviminize bağlı.",
          columns: ["Kanal", "Güçlü yönü", "Zayıf yönü", "Tipik süre"],
          rows: [
            [
              "Bölümdeki hoca / doktora öğrencisi",
              "Alanı biliyor, tez formatına aşina, çoğu zaman ücretsiz",
              "Kendi yükü ağır; sıraya girersiniz, revizyon istemek zorlaşır",
              "Birkaç hafta, bazen belirsiz",
            ],
            [
              "Üniversitenin istatistik danışmanlık birimi",
              "Kurumsal güven, akademik gerekçelendirme güçlü",
              "Her üniversitede yok; kapsam çoğunlukla yöntem önerisiyle sınırlı kalır, analizi siz yaparsınız",
              "2-6 hafta",
            ],
            [
              "Bireysel / freelance istatistikçi",
              "Esnek, pazarlığa açık, doğrudan iletişim",
              "Kalite çok değişken; psikometri bilmeyen biri ölçek tezinde zorlanır, revizyon ve gizlilik sözü genelde yazılı değil",
              "3 gün - 2 hafta",
            ],
            [
              "Profesyonel analiz hizmeti (GetBayes gibi)",
              "Yazılı sabit fiyat, standart rapor formatı, ücretsiz revizyon ve teslim sonrası soru-cevap",
              "Ücretli; bütçeniz sıfırsa ve bolca vaktiniz varsa kendiniz öğrenmek daha mantıklı olabilir",
              "Analiz 15 dakika, teslim aynı gün",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Anlaşmadan önce sorulacak yedi soru",
          intro:
            "Bu sorular psikoloji tezine özeldir ve cevaplar arasındaki fark, jüri önünde yaşayacağınız farkı doğrudan belirler:",
          items: [
            "**Ölçeğimin yapı geçerliğini nasıl göstereceksiniz?** Sadece Cronbach alfa cevabı yetersizdir; ölçek geliştirme veya uyarlama çalışmasında açımlayıcı ve doğrulayıcı faktör analizi (AFA/DFA) beklenir.",
            "**Aracılık analizini hangi yöntemle kuracaksınız?** Beklediğiniz cevap, dolaylı etki için bootstrap güven aralığıdır. \"Baron-Kenny dört adım\" veya \"Sobel testi\" cevabı, güncel standardın gerisinde kalındığını gösterir.",
            "**Düzenleyicilik varsa etkileşimi nasıl çözümleyeceksiniz?** Mean-centring, basit eğim analizi (±1 SS) ve gerekiyorsa Johnson-Neyman aralığı duyulmalı; sürekli bir değişkeni medyandan ikiye bölmek kabul edilebilir bir yöntem değildir.",
            "**Tekrarlı ölçüm desenimde küresellik ihlal edilirse ne yapacaksınız?** Greenhouse-Geisser düzeltmesi cevabı, analizi yapanın deneysel desen tecrübesini gösterir.",
            "**Raporda etki büyüklüğü ve güven aralığı olacak mı?** APA 7 ile birlikte tam istatistik ifadesi standart hale geldi; yalnızca \"p<.05, anlamlı\" yazan bir rapor psikoloji jürisinde eksik sayılır.",
            "**Ters kodlanacak maddeleri ve alt boyut puanlarını kim hesaplayacak?** Ölçek puanlamasındaki tek bir hata tüm analizi geçersiz kılar; bu işin kime ait olduğu baştan netleşmeli.",
            "**Revizyon gerekirse ne olacak, ücreti var mı?** Danışman veya jüri neredeyse her zaman ek analiz ister. Cevabın baştan ve yazılı olması gerekir.",
          ],
        },
        {
          type: "bullets",
          heading: "Uyarı işaretleri: bunları duyarsanız durun",
          intro:
            "Bunlar kötü bir anlaşmanın değil, akademik olarak riskli bir işin sinyalidir:",
          items: [
            "**\"Sonuçların anlamlı çıkacağını garanti ederiz.\"** Hiç kimse bunu garanti edemez; edebiliyorsa veriye müdahale ediliyor demektir. Anlamsız bir sonuç da geçerli bir bulgudur ve doğru yazıldığında tez geçer.",
            "**Veriyi ve araştırma sorularını görmeden kesin fiyat vermek.** Kapsam bilinmeden söylenen rakam, iş ortasında büyümeye açıktır.",
            "**Hangi testin neden seçildiğini açıklamayan teslim.** Ham çıktı gönderilip yorum sizden bekleniyorsa savunmada yalnız kalırsınız.",
            "**Ölçek uyarlama tezinize \"faktör analizine gerek yok\" denmesi.** Yapı geçerliği bu tezlerde atlanabilir bir başlık değildir.",
            "**Gizlilik konusunda yazılı taahhüt verilmemesi.** Veriniz katılımcılarınıza ait; etik kurul izniniz de veriyi kimin göreceğini kapsar.",
            "**\"Tezini de yazalım\" teklifi.** Bu artık analiz desteği değil; akademik dürüstlük ihlalidir ve tezinizi riske atar.",
          ],
        },
        {
          type: "table",
          heading: "Ne kadar tutar? (2026 piyasa aralıkları)",
          intro:
            "Aşağıdaki rakamlar kamuya açık hizmet ilanlarından derlenmiştir; GetBayes fiyatları değildir. Kendi çalışmanız için net rakamı ancak kapsam netleştikten sonra verebiliriz.",
          columns: ["Analiz kapsamı", "Piyasa aralığı", "Not"],
          rows: [
            [
              "Basit karşılaştırma (t-testi, tek yönlü ANOVA, korelasyon)",
              "2.000 - 6.000 ₺",
              "Çoğu lisans bitirme projesi ve dar kapsamlı tez bu aralıkta",
            ],
            [
              "Orta düzey (çoklu/hiyerarşik regresyon, karma ANOVA, güvenirlik)",
              "6.000 - 10.000 ₺",
              "Tipik bir psikoloji yüksek lisans tezi genelde buraya düşer",
            ],
            [
              "İleri düzey (AFA + DFA, aracılık/düzenleyicilik, yapısal eşitlik modeli)",
              "10.000 - 20.000 ₺ ve üzeri",
              "Ölçek geliştirme ve çok değişkenli model tezleri",
            ],
            [
              "Acil teslim farkı",
              "Piyasada yaygın olarak ek ücret",
              "GetBayes'te aciliyet fiyatı değiştirmez; revizyonlar da ücretsizdir",
            ],
          ],
        },
        {
          type: "steps",
          heading: "İlk mesajınızda ne göndermelisiniz?",
          intro:
            "Kime yazarsanız yazın, şu dördünü tek mesajda gönderirseniz gerçekçi bir teklif ve gerçekçi bir süre alırsınız:",
          steps: [
            {
              title: "Veri seti",
              description:
                "Excel veya SPSS dosyanız. Ham hali yeterli; eksik ve dağınık olması sorun değil, temizliği biz üstleniriz.",
            },
            {
              title: "Hipotezler ve desen",
              description:
                "Araştırma sorularınız ve deseniniz: deneysel mi, korelasyonel mi, ölçek çalışması mı; hangi değişken bağımlı, hangisi bağımsız.",
            },
            {
              title: "Ölçek bilgileri",
              description:
                "Kullandığınız ölçeklerin adı, alt boyutları, ters kodlanan maddeleri ve puanlama yönergesi.",
            },
            {
              title: "Takvim ve format",
              description:
                "Savunma veya teslim tarihiniz ve enstitünüzün tez yazım kılavuzu — tablo düzeni buna göre hazırlanır.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Etik sınır nerede?",
          body: [
            "Analiz desteği almak, tıpkı dil redaksiyonu gibi akademide yaygın ve kabul gören bir uygulamadır. Sınır nettir: veri size ait ve gerçek olmalı, bulguları anlamalı ve savunabilmelisiniz. Bu yüzden iyi bir rapor yalnızca sonucu değil, her yöntem seçiminin gerekçesini de yazar — jüri \"bu testi neden kullandınız?\" diye sorduğunda cevabı raporunuzda bulabilmelisiniz.",
            "GetBayes bu seçeneklerden biridir: psikoloji tezlerinde deneysel desen ANOVA'ları, ölçek geliştirme ve uyarlama analizleri, aracılık-düzenleyicilik modelleri çalışır ve APA 7 standardında raporlarız. Analizin kendisi çoğunlukla 15 dakika sürer; teslim aynı gün, çoğu zaman saatler hatta dakikalar içindedir. Danışmanınızdan, tez izleme komitenizden veya hakemden gelen revizyonlar ücretsizdir; teslimden sonra da sorularınızı yanıtlamaya devam ederiz. Bütçeniz sıfırsa ve bol vaktiniz varsa analizi kendiniz öğrenmeniz de tamamen geçerli bir yoldur — o durumda hangi test rehberimiz ve faktör analizi rehberimiz işinizi görür.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Psikoloji tezimin analizini yaptırmam etik mi, jüriye söylemem gerekir mi?",
          answer:
            "Analiz desteği almak akademide olağan bir uygulamadır ve çoğu enstitü bunu ayrıca beyan etmenizi istemez; yine de bağlı olduğunuz enstitünün tez yönergesini kontrol etmenizde fayda var. Asıl önemli olan, kullanılan yöntemleri anlamanız ve savunabilmenizdir — bu yüzden raporda her test seçiminin gerekçesini yazıyor, teslimden sonra da sorularınızı yanıtlıyoruz.",
        },
        {
          question: "Ölçek uyarlama tezim için kimi seçmeliyim?",
          answer:
            "Psikometri bilen birini. Somut ölçüt şu: açımlayıcı faktör analizi (KMO, Bartlett, döndürme yöntemi, faktör yükü eşiği), doğrulayıcı faktör analizi (RMSEA, CFI, TLI, SRMR uyum indeksleri) ve ölçüt geçerliği için ilişkili bir ölçekle korelasyon başlıklarının hepsini adıyla konuşabilmeli. Bunlardan biri geçiştiriliyorsa uyarlama çalışmanız eksik kalır.",
        },
        {
          question: "Analiz için ne kadar zaman ayırmalıyım?",
          answer:
            "Analizin kendisi kısa sürer; toplam süreyi genellikle veri tarafındaki eksikler, danışman geri bildirimleri ve ek analiz talepleri belirler. Sağlıklı bir plan için savunma tarihinizden en az iki hafta önce başlamak iyidir — GetBayes'te teslim aynı gün yapıldığı için kalan zamanı revizyonlar ve savunma hazırlığı için kullanabilirsiniz.",
        },
        {
          question: "Verimi göndermek güvenli mi?",
          answer:
            "GetBayes'te veriniz yalnızca sizin analiziniz için kullanılır, üçüncü kişilerle paylaşılmaz ve en geç son teslimden 90 gün sonra otomatik olarak silinir; dilediğiniz an daha erken silinmesini isteyebilirsiniz. Kiminle çalışırsanız çalışın bu taahhüdü yazılı olarak isteyin — katılımcılarınıza verdiğiniz gizlilik sözünün gereği budur.",
        },
        {
          question: "Analizi ChatGPT ile kendim yapsam olmaz mı?",
          answer:
            "Yapay zeka araçları kod yazmakta ve yöntem anlatmakta iyidir, ama çıktının doğruluğunu değerlendirebilmek için zaten istatistik bilmeniz gerekir: varsayım kontrolleri atlanabiliyor, sayılar bazen kendinden emin biçimde yanlış üretilebiliyor ve sonucun sorumluluğunu üstlenen bir muhatap olmuyor. Konuyu ayrıntılı tarttığımız ayrı bir rehberimiz var; yapay zekayla başlayıp emin olamadığınız analizleri devralıp doğruluyoruz.",
        },
        {
          question: "Fiyatı önceden öğrenebilir miyim?",
          answer:
            "Evet. Veri setinizi ve araştırma sorularınızı gönderdiğinizde 24 saat içinde ücretsiz ön değerlendirme yapar, hangi analizlerin gerektiğini ve net fiyatı yazılı olarak bildiririz. Fiyat teslim hızına ve revizyon sayısına göre değişmez; iş ortasında da değişmez.",
        },
      ],
      cta: {
        heading: "Psikoloji tezinizin analizi için ön değerlendirme alın",
        text: "Verinizi, hipotezlerinizi ve ölçek bilgilerinizi gönderin; 24 saat içinde ücretsiz ön değerlendirme ve net fiyatla dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili rehberler ve hizmetler",
    },
    en: {
      metaTitle: "Where to Get Psychology Thesis Statistics Done | GetBayes",
      metaDescription:
        "Who should analyse your psychology thesis data? Four channels compared, the questions to ask before you commit, red flags to avoid, and current market price ranges.",
      headline: "Where Should You Get Your Psychology Thesis Analysed?",
      lead: [
        "In practice you have four options for the statistics in a psychology thesis: a faculty member or advanced PhD student in your own department, your university's statistical consulting unit if it has one, an individual freelance statistician, or an analysis service such as GetBayes. Price is not what should decide it — capability match is. Most psychology theses run on scales, and the field asks for three things at once: construct validity through factor analysis, mediation and moderation models with bootstrap confidence intervals, and full APA 7 reporting. Whoever you choose, ask about those three before you commit.",
        "Below are the honest trade-offs of each channel, the questions worth asking, the warning signs worth walking away from, and price ranges compiled from public listings. GetBayes is one of these options and it is a paid service — we say plainly what we do at the end of the page, but read the table first so the decision stays yours.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and PhD psychology students who need support at the analysis stage",
          "Anyone running a scale development or adaptation study and stuck on factor analysis",
          "Researchers who need to build a mediation or moderation model",
          "Students whose advisor said \"go talk to someone about the analysis\" without saying who",
          "Undergraduates running a capstone project in clinical, social, developmental or I-O psychology",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "The four places you can get it done",
          intro:
            "None of these wins in every situation; the right one depends on your design's complexity and your calendar.",
          columns: ["Channel", "Strength", "Weakness", "Typical turnaround"],
          rows: [
            [
              "Faculty member / PhD student in your department",
              "Knows the field and the thesis format; often free",
              "Already overloaded — you wait your turn, and asking for revisions gets awkward",
              "Weeks, sometimes open-ended",
            ],
            [
              "University statistical consulting unit",
              "Institutional credibility, strong methodological justification",
              "Not every university has one; scope is often limited to advice, leaving you to run the analysis",
              "2-6 weeks",
            ],
            [
              "Individual / freelance statistician",
              "Flexible, negotiable, direct contact",
              "Quality varies widely; someone without a psychometrics background struggles with scale studies, and revision or confidentiality terms are rarely in writing",
              "3 days - 2 weeks",
            ],
            [
              "Professional analysis service (like GetBayes)",
              "Written fixed quote, standardised reporting, free revisions and post-delivery Q&A",
              "Paid; with a zero budget and plenty of time, learning to do it yourself may make more sense",
              "Analysis in 15 minutes, same-day delivery",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Seven questions to ask before you commit",
          intro:
            "These are specific to psychology, and the difference between the answers is the difference you will feel in front of your committee:",
          items: [
            "**How will you demonstrate the construct validity of my scale?** Cronbach's alpha alone is not an answer; a development or adaptation study needs exploratory and confirmatory factor analysis.",
            "**How will you test mediation?** The answer you want is a bootstrap confidence interval for the indirect effect. \"Baron and Kenny's four steps\" or \"the Sobel test\" signals an outdated standard.",
            "**If there is moderation, how will you probe the interaction?** You should hear mean-centring, simple slopes at ±1 SD and, where relevant, the Johnson-Neyman region. Splitting a continuous moderator at the median is not an acceptable method.",
            "**What if sphericity is violated in my repeated-measures design?** A Greenhouse-Geisser answer tells you the person has actually handled experimental designs.",
            "**Will the report include effect sizes and confidence intervals?** APA 7 expects full statistical statements; a report that says only \"p < .05, significant\" reads as incomplete to a psychology committee.",
            "**Who reverse-codes items and computes subscale scores?** One scoring error invalidates the whole analysis, so make ownership of this explicit up front.",
            "**What happens if revisions are requested, and do they cost extra?** Advisors and committees almost always ask for more analyses. The answer should be clear and in writing before work starts.",
          ],
        },
        {
          type: "bullets",
          heading: "Red flags: stop if you hear these",
          intro:
            "These are not signs of a bad deal — they are signs of academically risky work:",
          items: [
            "**\"We guarantee your results will come out significant.\"** Nobody can guarantee that; anyone who does is manipulating the data. A null result is a valid finding and, written up properly, passes a defence.",
            "**A firm price quoted without seeing the data or research questions.** A number given before the scope is understood tends to grow mid-project.",
            "**Deliverables that never say why a test was chosen.** If you get raw output and are expected to interpret it yourself, you stand alone at the defence.",
            "**Being told your scale study \"doesn't need factor analysis.\"** Construct validity cannot be skipped in an adaptation study.",
            "**No written confidentiality commitment.** The data belongs to your participants, and your ethics approval covers who may see it.",
            "**An offer to \"write the thesis too.\"** That is no longer analysis support; it is an academic integrity violation that puts your degree at risk.",
          ],
        },
        {
          type: "table",
          heading: "What does it cost? (2026 market ranges)",
          intro:
            "These figures are compiled from public service listings; they are not GetBayes prices. We can only quote your own study once the scope is clear.",
          columns: ["Scope of analysis", "Market range", "Note"],
          rows: [
            [
              "Basic comparisons (t-tests, one-way ANOVA, correlation)",
              "$300 - $600 per project",
              "Most capstone projects and narrow-scope theses land here",
            ],
            [
              "Mid-level (multiple/hierarchical regression, mixed ANOVA, reliability)",
              "$600 - $1,000 per project",
              "A typical master's thesis in psychology",
            ],
            [
              "Advanced (EFA + CFA, mediation/moderation, structural equation modelling)",
              "$1,000 - $1,500+ per project",
              "Scale development and multivariate model theses",
            ],
            [
              "Hourly consulting",
              "$50 - $150 for students, $150 - $250 for organisations",
              "University consulting units typically fall in the $50 - $120 band",
            ],
          ],
        },
        {
          type: "steps",
          heading: "What to send in your first message",
          intro:
            "Whoever you contact, sending these four things at once gets you a realistic quote and a realistic timeline:",
          steps: [
            {
              title: "The dataset",
              description:
                "Your Excel or SPSS file. Raw is fine — missing values and messy coding are not a problem, cleaning is part of the job.",
            },
            {
              title: "Hypotheses and design",
              description:
                "Your research questions and design: experimental, correlational or a scale study; which variables are outcomes and which are predictors.",
            },
            {
              title: "Scale details",
              description:
                "The names of the instruments you used, their subscales, reverse-coded items and the scoring instructions.",
            },
            {
              title: "Timeline and format",
              description:
                "Your defence or submission date and your institution's formatting guide, so tables are built to the right standard.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Where is the ethical line?",
          body: [
            "Getting analysis support is a common and accepted academic practice, much like language editing. The line is clear: the data must be yours and real, and you must understand and be able to defend the findings. That is why a good report states not only the result but the justification for every method choice — when your committee asks \"why this test?\", the answer should already be in your report.",
            "GetBayes is one of the options above: for psychology theses we run experimental-design ANOVAs, scale development and adaptation analyses, and mediation/moderation models, reported to APA 7 standard. The analysis itself usually takes 15 minutes; delivery is same-day, often within hours or even minutes. Revisions requested by your advisor, committee or a reviewer are free, and we keep answering questions after delivery. If your budget is zero and your calendar is generous, learning to run it yourself is an entirely valid path — our test-selection and factor analysis guides are written for exactly that.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Is it ethical to have my psychology thesis analysed, and do I have to disclose it?",
          answer:
            "Analysis support is routine in academia and most institutions do not require a separate declaration — but check your own graduate school's thesis regulations. What matters is that you understand and can defend the methods used, which is why we justify every test choice in the report and stay available for questions after delivery.",
        },
        {
          question: "Who should I choose for a scale adaptation study?",
          answer:
            "Someone with a psychometrics background. A concrete test: they should be able to discuss exploratory factor analysis (KMO, Bartlett, rotation method, loading thresholds), confirmatory factor analysis (RMSEA, CFI, TLI, SRMR fit indices) and criterion validity against a related instrument, by name and without hesitation. If any of those is waved away, your adaptation study will be incomplete.",
        },
        {
          question: "How much time should I allow for the analysis?",
          answer:
            "The analysis itself is quick; total elapsed time is usually driven by gaps in the data, advisor feedback and requests for additional analyses. A safe plan is to start at least two weeks before your defence — since delivery is same-day, that leaves the remaining time for revisions and defence preparation.",
        },
        {
          question: "Is it safe to share my data?",
          answer:
            "At GetBayes your data is used only for your analysis, never shared with third parties, and automatically deleted no later than 90 days after final delivery; you can request earlier deletion at any time. Whoever you work with, ask for that commitment in writing — you owe it to the participants you promised confidentiality to.",
        },
        {
          question: "Could I just do it myself with ChatGPT?",
          answer:
            "AI tools are good at writing code and explaining methods, but judging whether the output is correct still requires statistical knowledge: assumption checks get skipped, numbers are sometimes produced with confident inaccuracy, and no one is accountable for the result. We have a full guide weighing this honestly — and we regularly take over and verify analyses that were started with AI.",
        },
        {
          question: "Can I know the price in advance?",
          answer:
            "Yes. Send your dataset and research questions and within 24 hours you get a free assessment stating which analyses are needed and a clear written price. The price does not change with delivery speed or the number of revisions, and it does not change mid-project.",
        },
      ],
      cta: {
        heading: "Get a free assessment for your psychology thesis",
        text: "Send your data, hypotheses and scale details — we'll reply within 24 hours with a free assessment and a clear quote.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related guides and services",
    },
  },
};

export default psychologyFindService;
