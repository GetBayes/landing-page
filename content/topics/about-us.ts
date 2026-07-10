import type { Topic } from "../types";

const aboutUs: Topic = {
  key: "about-us",
  kind: "about",
  datePublished: "2026-07-08",
  dateModified: "2026-07-10",
  related: ["thesis-statistics", "health-use-cases", "find-statistician", "sample-report", "analysis-process-case"],
  locales: {
    tr: {
      metaTitle: "Biz Kimiz? Veri Analizi Uzmanı Ekip — GetBayes | GetBayes",
      metaDescription:
        "GetBayes: akademik araştırmalar için istatistik analizi yapan veri analizi uzmanı ekip. Neden bu işi yapıyoruz, nasıl çalışıyoruz, bizi farklı kılan nedir — tanışın.",
      headline: "Biz Kimiz?",
      lead: [
        "GetBayes, akademik araştırmalar için istatistiksel analiz hizmeti veren, veri analizi uzmanlarından oluşan dinamik bir ekiptir. Uygulamalı istatistiksel analizde uzmanlaşan ekibimiz; yüksek lisans ve doktora tezlerinden uzmanlık tezlerine, dergi makalelerinden kongre bildirilerine kadar nicel araştırmaların analiz yükünü üstlenir — analizin kendisini çoğunlukla 15 dakikada tamamlar, yayına hazır raporu aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim eder.",
        "Bugüne kadar 100'den fazla analizi tamamladık ve tek bir ilkeyle çalışıyoruz: araştırmacı analizle değil, araştırmasıyla uğraşmalı.",
      ],
      audience: {
        heading: "Kimlerle çalışıyoruz?",
        items: [
          "Tezinin bulgular bölümüyle boğuşan yüksek lisans ve doktora öğrencileri",
          "Uzmanlık tezi için istatistik desteği arayan hekimler ve diş hekimleri",
          "Makalesini dergiye yetiştirmeye çalışan akademisyenler",
          "Hemşirelik, psikoloji, eğitim bilimleri ve sosyal bilimler araştırmacıları",
          "Ekibinde istatistikçi olmayan araştırma grupları",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Neden bu işi yapıyoruz?",
          body: [
            "Bu ekibi kurmamızın nedeni, akademideki istatistik analiz sürecinin ne kadar sancılı olduğunu birebir yaşamış olmamız. Klasik süreç şöyle işler: haftalarca uygun istatistikçi aranır, fiyatlar kapalı kapılar ardında pazarlıkla belirlenir, analiz haftalar sonra gelir — çoğu zaman kopyala-yapıştır tablolar, gerekçesiz test seçimleri ve savunmada sizi yalnız bırakan raporlarla. Teslimattan sonra soru sorduğunuzda ise muhatap bulamazsınız.",
            "GetBayes bu sancıları bitirmek için var. Kurduğumuz standartlaştırılmış analiz süreci sayesinde haftalarca sürmesi normal karşılanan işi dakikalara indirdik — kaliteden ödün vermeden. Her raporda test seçiminin gerekçesi yazılıdır, her tablo yayın standardındadır ve teslimat sonrasında sorularınız yanıtsız kalmaz.",
            "Kısacası üç şeyi aynı anda vermek için çalışıyoruz: son kalite istatistik, uygun fiyat ve gerçek hız. Bu üçünün bir arada olamayacağına dair yaygın kanıyı her teslimatta çürütmek, işimizin en keyifli kısmı.",
          ],
        },
        {
          type: "bullets",
          heading: "Bizi farklı kılan nedir?",
          items: [
            "Hız: standartlaştırılmış süreçlerimiz ve modern araçlarımız sayesinde analizin kendisi çoğunlukla 15 dakika sürer, teslim aynı gün — haftalar değil, saatler hatta dakikalar",
            "Veri kurtarma: 'verin hatalı, gidin düzeltin' demeyiz — sorunları tam olarak tespit eder, düzeltebildiklerimizi kendimiz düzeltir, çok kötü durumdaki veri setlerini bile analize hazır hâle getiririz",
            "Gerekçeli yöntem: her test seçiminin nedeni raporda yazılıdır; jüri veya hakem sorduğunda cevabınız hazırdır",
            "Şeffaf fiyat: kapsam netleşmeden iş başlamaz; fiyat baştan yazılı olarak verilir, sonradan değişmez",
            "Yayın standardı: tablolar ve grafikler APA veya hedef derginizin formatında hazırlanır",
            "Süreç boyunca erişilebilirlik: analiz iteratif bir süreçtir — eksikler, düzeltmeler ve eklemelerde her durumda bize yazabilirsiniz; teslimat sonrası da sorularınızı yanıtlamaya devam ederiz",
            "Gizlilik: veriniz üçüncü kişilerle paylaşılmaz, yalnızca projeniz için kullanılır; teslimattan en geç 90 gün sonra otomatik silinir, dilerseniz daha erken silinmesini istediğiniz an talep edebilirsiniz",
          ],
        },
        {
          type: "steps",
          heading: "Nasıl çalışıyoruz?",
          steps: [
            {
              title: "Dinleriz",
              description:
                "Araştırmanızı, sorularınızı ve teslim tarihinizi öğreniriz. 24 saat içinde ücretsiz ön değerlendirme ve net fiyat veririz.",
            },
            {
              title: "Ön inceleme yaparız",
              description:
                "Verinizi eksik gözlem, kodlama hatası ve varsayım ihlalleri açısından tarar, düzeltebildiğimiz sorunları kendimiz düzeltir, doğru analiz planını çıkarırız.",
            },
            {
              title: "Analiz ederiz",
              description:
                "Python, R ve modern istatistik araçlarıyla analizleri çalıştırır; etki büyüklükleri ve güven aralıkları dahil, SPSS uyumlu formatta eksiksiz raporlarız.",
            },
            {
              title: "Yanınızda kalırız",
              description:
                "Teslimattan sonra sorularınızı yanıtlar, danışman/hakem revizyonlarında ek analizlerle destek oluruz.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Değerlerimiz",
          body: [
            "Akademik dürüstlük pazarlık konusu değildir: veri üzerinde oynama yapmayız, 'istenen sonucu çıkarma' taleplerini kabul etmeyiz. Analizi doğru yapar, doğru raporlarız — bulgunuz anlamlı çıkmadıysa bunu da güçlü bir şekilde raporlamanın yollarını gösteririz. Tezin ve makalenin sahibi sizsiniz; biz, arkanızdaki istatistik ekibi olmaktan memnunuz.",
          ],
        },
      ],
      faqHeading: "Merak edilenler",
      faq: [
        {
          question: "GetBayes ekibi kimlerden oluşuyor?",
          answer:
            "100'den fazla akademik analiz tamamlamış, uygulamalı istatistiksel analizde uzmanlaşan, akademik araştırma süreçlerinin içinden gelen dinamik bir ekibiz. Ankara merkezliyiz; Türkiye'nin ve dünyanın her yerindeki araştırmacılarla çevrimiçi çalışıyoruz.",
        },
        {
          question: "Bu kadar hızlı olmanız kaliteden ödün verdiğiniz anlamına mı geliyor?",
          answer:
            "Hayır — tam tersi. Hızımız aceleden değil, yılların birikimiyle standartlaştırdığımız ön inceleme-analiz-raporlama sürecinden ve modern araçlardan geliyor. Her rapor aynı kalite kontrolünden geçer: varsayım kontrolleri, gerekçeli test seçimi, etki büyüklükleri ve yayın standardında tablolar. Analizin kendisi 15 dakika sürer; teslim aynı gün yapılır ve süreç iteratif olduğu için eksik-düzeltme adımlarında da yanınızda kalırız.",
        },
        {
          question: "Fiyatlarınız neden uygun?",
          answer:
            "Süreçlerimiz verimli olduğu için maliyetimiz düşük; bunu fiyata yansıtıyoruz. Ayrıca fiyat baştan, yazılı ve kapsama dayalı olarak belirlenir — pazarlık ve sürpriz yoktur.",
        },
        {
          question: "Hangi alanlarda çalışıyorsunuz?",
          answer:
            "Ağırlıklı olarak sağlık bilimleri (tıp, diş hekimliği, hemşirelik), psikoloji, eğitim bilimleri ve sosyal bilimler — nicel veri içeren her akademik alanda hizmet veriyoruz.",
        },
        {
          question: "Size nasıl ulaşabilirim?",
          answer:
            "İletişim formu, info@getbayes.me, WhatsApp (+90 501 651 0674) veya Instagram (@getbayes.me) üzerinden ulaşabilirsiniz. Mesajlara genellikle 1 saat içinde, ön değerlendirmelere 24 saat içinde dönüş yapıyoruz.",
        },
        {
          question: "Verilerim ne kadar süre saklanır, nasıl silinir?",
          answer:
            "Veriniz yalnızca projeniz için kullanılır ve üçüncü kişilerle paylaşılmaz. Teslimattan en geç 90 gün sonra otomatik olarak silinir; revizyon süreci devam ediyorsa bu süre revizyon bitene kadar uzar. Daha erken silinmesini isterseniz info@getbayes.me veya WhatsApp üzerinden talep etmeniz yeterli, aynı gün silip onaylıyoruz.",
        },
        {
          question: "Revizyonlar gerçekten ücretsiz mi?",
          answer:
            "Danışmanınızın veya jürinin/hakemin istediği revizyonlar her zaman ücretsizdir — ayrı bir teklif çıkarmayız, aynı süreç içinde güncelleyip göndeririz. Kapsam gerçekten değişmediği sürece süreç boyunca gelen ek taleplerde de sizinle birlikte bir çözüm buluyoruz; amacımız savunmaya veya yayına siz hazır çıkana kadar yanınızda olmak, katı bir revizyon duvarı çıkarmak değil.",
        },
      ],
      cta: {
        heading: "Tanışalım",
        text: "Araştırmanızı anlatın; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "Hizmetlerimizi keşfedin",
    },
    en: {
      metaTitle: "About Us — A Team of Data Analysis Experts | GetBayes",
      metaDescription:
        "GetBayes: a dynamic team of data analysis experts providing statistical analysis for academic research. Why we do this work, how we work, and what makes us different.",
      headline: "Who We Are",
      lead: [
        "GetBayes is a dynamic team of data analysis experts providing statistical analysis services for academic research. Specialized in applied statistical analysis, we take on the analysis workload of quantitative research — from master's and PhD theses to specialty theses, journal manuscripts and conference abstracts. The analysis itself usually takes 15 minutes; publication-ready reports are delivered the same day, often within hours or even minutes.",
        "We have completed more than 100 analyses to date, guided by a single principle: researchers should wrestle with their research, not with their analysis.",
      ],
      audience: {
        heading: "Who we work with",
        items: [
          "Master's and PhD students stuck on the results chapter of a thesis",
          "Physicians and dentists seeking statistics support for a specialty thesis",
          "Academics racing a journal submission deadline",
          "Researchers in nursing, psychology, education and the social sciences",
          "Research groups without a statistician on the team",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Why we do this work",
          body: [
            "We built this team because we lived through how painful the academic statistics process is. The classic route goes like this: weeks spent hunting for a suitable statistician, prices settled by opaque negotiation, the analysis arriving weeks later — often as copy-paste tables, unjustified test choices and reports that leave you alone at your defense. And when you have a question after delivery, nobody picks up.",
            "GetBayes exists to end those pains. Our standardized analysis process compresses work that is commonly accepted to take weeks into minutes — without compromising quality. Every report justifies its test choices in writing, every table meets publication standards, and your questions after delivery never go unanswered.",
            "In short, we work to deliver three things at once: top-quality statistics, fair pricing and real speed. Disproving the common belief that you can't have all three — that's the most satisfying part of the job.",
          ],
        },
        {
          type: "bullets",
          heading: "What makes us different",
          items: [
            "Speed: thanks to standardized processes and modern tooling, the analysis itself usually takes 15 minutes and delivery is same-day — hours or even minutes, not weeks",
            "Data rescue: we don't say “your data is broken, go fix it” — we pinpoint the issues, fix what we can ourselves, and get even datasets in very poor shape analysis-ready",
            "Justified methods: the reasoning behind every test choice is written into the report; when your committee or a reviewer asks, your answer is ready",
            "Transparent pricing: work never starts before scope is agreed; the price is given in writing up front and doesn't change",
            "Publication standard: tables and figures are formatted to APA or your target journal",
            "Reachable throughout: analysis is an iterative process — for gaps, corrections and additions you can write to us at any point, and we keep answering questions after delivery too",
            "Confidentiality: your data is never shared with third parties and is used only for your project; it's automatically deleted no later than 90 days after delivery, and you can request earlier deletion at any time",
          ],
        },
        {
          type: "steps",
          heading: "How we work",
          steps: [
            {
              title: "We listen",
              description:
                "We learn your research, your questions and your deadline. Within 24 hours you get a free assessment and a clear quote.",
            },
            {
              title: "We review first",
              description:
                "We screen your data for missing values, coding errors and assumption violations, fix what we can ourselves, then draft the right analysis plan.",
            },
            {
              title: "We analyze",
              description:
                "We run the analyses in Python, R and modern statistical tools, reporting everything — including effect sizes and confidence intervals — in an SPSS-compatible format.",
            },
            {
              title: "We stay with you",
              description:
                "After delivery we answer your questions and support advisor or reviewer revisions with additional analyses.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Our values",
          body: [
            "Academic integrity is not negotiable: we don't manipulate data and we decline requests to “produce the desired result.” We run the analysis correctly and report it accurately — and if your finding isn't significant, we show you how to report that with strength too. The thesis and the paper are yours; we're glad to be the statistics team behind you.",
          ],
        },
      ],
      faqHeading: "Common questions",
      faq: [
        {
          question: "Who is behind GetBayes?",
          answer:
            "A dynamic team specialized in applied statistical analysis, with 100+ academic analyses completed, coming from inside academic research. We're based in Ankara and work online with researchers across Türkiye and worldwide.",
        },
        {
          question: "Does being this fast mean you compromise on quality?",
          answer:
            "No — the opposite. Our speed comes not from rushing but from a review-analysis-reporting process standardized over years, plus modern tooling. Every report passes the same quality checks: assumption tests, justified test selection, effect sizes and publication-standard tables. The analysis itself takes 15 minutes; delivery is same-day, and because the process is iterative we stay with you through the gap-fixing and correction steps too.",
        },
        {
          question: "Why are your prices fair?",
          answer:
            "Efficient processes keep our costs low, and we pass that on. Pricing is also set up front, in writing, based on scope — no haggling, no surprises.",
        },
        {
          question: "Which fields do you work in?",
          answer:
            "Primarily the health sciences (medicine, dentistry, nursing), psychology, education and the social sciences — any academic field with quantitative data.",
        },
        {
          question: "How can I reach you?",
          answer:
            "Through the contact form, info@getbayes.me, WhatsApp (+90 501 651 0674) or Instagram (@getbayes.me). We typically reply to messages within an hour and to assessment requests within 24 hours.",
        },
        {
          question: "How long is my data kept, and how does deletion work?",
          answer:
            "Your data is used only for your project and never shared with third parties. It's automatically deleted no later than 90 days after delivery; if a revision is still in progress, that window extends until the revision is done. Want it deleted sooner? Just ask via info@getbayes.me or WhatsApp — we delete it the same day and confirm.",
        },
        {
          question: "Are revisions really free?",
          answer:
            "Revisions requested by your advisor or a committee/reviewer are always free — we don't send a new quote, we update the same delivery. As long as the scope genuinely hasn't changed, we also work through additional requests together as they come up during the process; the goal is staying with you until you're ready for the defense or publication, not putting up a rigid revision wall.",
        },
      ],
      cta: {
        heading: "Let's talk",
        text: "Tell us about your research — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Explore our services",
    },
  },
};

export default aboutUs;
