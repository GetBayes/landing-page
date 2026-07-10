import type { Topic } from "../types";

// "Why GetBayes" — the differentiator page. It answers "why choose GetBayes /
// is GetBayes any good / what makes it different" queries and, in the process,
// names the painful traditional analysis experience (long waits, dismissive
// "go fix it and come back" walls, mid-project price hikes, unreachable
// consultants) WITHOUT naming or insulting any competitor. The pain is framed
// as "what a good analysis experience should feel like" — the honesty is the
// differentiator, not the attack. Never mentions AI.

const whyGetbayes: Topic = {
  key: "why-getbayes",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-10",
  related: ["q1-success-story", "comparison", "about-us"],
  locales: {
    tr: {
      metaTitle:
        "Neden GetBayes? İstatistik Analizinde Farkımız ve Çalışma Şeklimiz | GetBayes",
      metaDescription:
        "Neden GetBayes? Kaprissiz süreç, aynı gün teslim, ücretsiz revizyon, baştan net fiyat ve \"git düzelt\" demeden veriyi birlikte toparlayan bir yaklaşım. İstatistik analizinde farkımızı ve nasıl çalıştığımızı anlatıyoruz.",
      headline: "Neden GetBayes? İstatistik Analizinde Farkımız",
      lead: [
        "GetBayes'i farklı kılan tek bir şey değil, istatistik analizi deneyiminin bütününü rahat ve öngörülebilir hâle getirmesi: analizin kendisi genelde 15 dakikada biter ve raporunuz aynı gün — çoğu zaman saatler içinde — elinizde olur; fiyat ücretsiz ön değerlendirme sonrası yazılı ve sabittir, sonradan değişmez; revizyonlar ücretsizdir; ve en önemlisi, \"veriniz hatalı, gidin düzeltip gelin\" demeyiz — sorunları tek tek gösterir, elimizden geleni kendimiz düzeltir, dağınık bir veri setini bile birlikte toparlarız. Süreç iteratiftir ve her aşamada bize yazabilirsiniz.",
        "İstatistik analizi yaptırma süreci çoğu araştırmacı için gereğinden zor geçiyor: haftalarca süren belirsiz beklemeler, sürekli \"şurayı düzeltin, öyle gelin\" diye geri çevrilmek, işin ortasında büyüyen fiyatlar, cevap vermeyen danışmanlar. Biz baştan farklı bir deneyim kurmaya çalıştık — hız bizde temel bir beklenti, asıl ürünse zamandan bağımsız olarak doğru, savunulabilir ve size gerçekten yardımcı olan bir rapor. Bu sayfada neyi neden böyle yaptığımızı açıkça anlatıyoruz.",
      ],
      audience: {
        heading: "Bu sayfa kimler için?",
        items: [
          "Daha önce zorlu bir analiz süreci yaşamış ve bu kez farklı bir deneyim isteyen araştırmacılar",
          "GetBayes'in güvenilir olup olmadığını ve nasıl çalıştığını merak edenler",
          "Teslim tarihi yaklaşan ve hızlı, öngörülebilir bir çözüm arayan tez/uzmanlık öğrencileri",
          "Danışmanı veya hakemi ek analiz isteyeceği için revizyon desteğine önem verenler",
          "Fiyatın ve sürecin baştan net olmasını isteyen herkes",
        ],
      },
      sections: [
        {
          type: "bullets",
          heading: "İyi bir analiz deneyimi nasıl hissettirmeli?",
          intro:
            "Aşağıdaki maddeler, bir araştırmacının istatistik analizi sürecinde hak ettiği ama çoğu zaman bulamadığı şeyler. Biz her birini bir prensip olarak kabul ettik:",
          items: [
            "Ne kadar bekleyeceğinizi bilmelisiniz: teslim tarihi belirsiz, \"bakarız\" denen bir süreç yerine aynı gün teslim.",
            "Ne ödeyeceğinizi baştan bilmelisiniz: iş ilerledikçe büyüyen sürpriz ücretler değil, yazılı ve değişmeyen fiyat.",
            "Reddedilmemeli, yönlendirilmelisiniz: \"verin bozuk, git düzelt\" duvarı değil, sorunların tek tek gösterildiği ve mümkün olanın sizin yerinize düzeltildiği bir yaklaşım.",
            "Yalnız bırakılmamalısınız: sorularınıza cevap veren, süreç boyunca ulaşılabilir bir muhatap.",
            "Revizyon bir ceza olmamalı: danışman veya hakem ek analiz istediğinde ücretsiz ve hızlı güncelleme.",
          ],
        },
        {
          type: "bullets",
          heading: "Farkımızı somutlaştıran beş şey",
          intro:
            "Yukarıdaki prensipleri pratikte şöyle uyguluyoruz:",
          items: [
            "Aynı gün teslim: onayınızdan sonra analiz genelde 15 dakikada tamamlanır; rapor aynı gün, çoğu zaman saatler hatta dakikalar içinde teslim edilir. Toplam süreyi genellikle sizin tarafınızdaki eksikler ve ekleme-çıkarmalar belirler.",
            "Baştan net, değişmeyen fiyat: ücretsiz ön değerlendirmeden sonra yazılı fiyat veririz; bu rakam teslim süresinden ve revizyonlardan bağımsızdır ve sonradan büyümez.",
            "Ücretsiz revizyon: danışmanınız, jüriniz veya hakem farklı bir test, ek analiz ya da yeni tablo düzeni isterse aynı veri üzerinde ücretsiz güncelleriz.",
            "Veriyi birlikte toparlarız: eksik gözlemler, hatalı kodlamalar veya dağınık formlar sizi geri çevirmemizin sebebi değil; elimizden geleni kendimiz düzeltir, sorunları net biçimde gösteririz.",
            "Yayına hazır rapor: APA/dergi formatında tablolar, yöntem seçiminin gerekçesi ve akademik dille yorum — savunmada ve hakem sürecinde arkanızda durabileceğiniz bir belge. Sonuçlar SPSS ile birebir tutarlıdır.",
          ],
        },
        {
          type: "steps",
          heading: "Bizimle çalışmak nasıl işliyor?",
          intro:
            "Süreç baştan sona şeffaf ve iteratif; her adımda ne olduğunu bilirsiniz:",
          steps: [
            {
              title: "Verinizi ve sorularınızı gönderin",
              description:
                "İletişim formu, e-posta veya WhatsApp üzerinden veri setinizi ve araştırma sorularınızı iletin. Bu aşama ücretsizdir ve sizi hiçbir şeye bağlamaz.",
            },
            {
              title: "Ücretsiz ön değerlendirme",
              description:
                "24 saat içinde verinizi ve sorularınızı inceler, hangi analizlerin gerektiğini ve varsa eksikleri açıkça söyleriz. Sorun görürsek geri çevirmek yerine nasıl çözeceğimizi anlatırız.",
            },
            {
              title: "Yazılı, net fiyat",
              description:
                "Kapsamı, süreyi ve ücreti yazılı bildiririz. Onaylarsanız devam ederiz; fiyat sonradan değişmez.",
            },
            {
              title: "Analiz, teslim ve destek",
              description:
                "Analizin kendisi genelde 15 dakikada tamamlanır; rapor aynı gün elinizde olur. Sonrasında \"bu test neden seçildi, bu sonuç ne demek\" sorularınızı ücretsiz yanıtlar, gerekli revizyonları ücretsiz yaparız.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Hız değil, gerçek memnuniyet önceliğimiz",
          body: [
            "Hızlı olmamız sık sorulan bir soruyu getiriyor: \"Bu kadar hızlıysa, kalite düşük müdür?\" Hayır — tam tersi. İstatistiksel analiz aslında bu kadar uzun sürmesi gereken bir iş değil; biz kendi geliştirdiğimiz araçlar ve standartlaştırdığımız süreçle bu işi olması gereken hıza kavuşturduk. Hız bir hedef değil, doğru kurgulanmış bir sürecin doğal sonucu. Asıl önceliğimiz, teslim süresinden bağımsız olarak doğru test seçimi, savunulabilir yöntem ve temiz raporlama. Nitekim %98 memnuniyet oranımız, işi hızlı bitirmemizden değil, araştırmacının süreç sonunda gerçekten rahatlamasından geliyor.",
            "Bir işi \"olsun da geçsin\" diye yapmanın araştırmacıya faydası yok — savunmada sorulan \"bu testi neden kullandınız?\" sorusunda sizi yalnız bırakan bir rapor, işi iki kez yaptırmak demektir. Biz baştan doğru yapıp, sorularınıza sonuna kadar cevap vermeyi tercih ediyoruz. Farkımızı diğer seçeneklerle yan yana görmek isterseniz hizmet karşılaştırması sayfamıza, hikâyemiz için Biz Kimiz sayfamıza bakabilirsiniz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "GetBayes'in diğer istatistik hizmetlerinden farkı ne?",
          answer:
            "Üç şeyde ayrışıyoruz: aynı gün teslim (analiz genelde 15 dakikada biter), baştan yazılı ve değişmeyen fiyat, ve ücretsiz revizyon. Bunların ötesinde çalışma tarzımız farklı: \"veriniz hatalı, git düzelt\" demek yerine sorunları tek tek gösterir, elimizden geleni kendimiz düzeltir ve süreç boyunca ulaşılabilir kalırız. Amacımız işi bitirmek değil, sürecin sonunda gerçekten memnun olmanız.",
        },
        {
          question: "Bu kadar hızlı teslim kaliteyi düşürmez mi?",
          answer:
            "Hayır. Hız, iyi kurgulanmış bir sürecin sonucu; hedefimiz değil. Öncelik her zaman doğru test seçimi, savunulabilir yöntem ve temiz raporlama. Karmaşık bir tez ya da klinik çalışmada 15 dakika yalnızca analizin çalışma süresidir; yöntem tartışması ve ek kontroller için ihtiyaç kadar zaman ayırırız. Teslim hızlı olsa da rapor, savunmada ve hakem sürecinde arkanızda durabileceğiniz akademik derinliktedir — bunun somut bir kanıtı olarak Q1 Cerrahi Dergisinde Yayın vaka sayfamıza bakabilirsiniz: istatistiği tarafımızca yapılan bir makale, hakemden istatistik yöntemiyle ilgili tek bir revizyon talebi almadan kabul edildi.",
        },
        {
          question: "Verimde eksik veya hata varsa geri mi çevirirsiniz?",
          answer:
            "Hayır, geri çevirmeyiz. Eksik gözlemler, hatalı kodlamalar veya dağınık formlar bizim için sürecin normal bir parçası. Sorunları net biçimde gösterir, elimizden geleni kendimiz düzeltir ve dağınık bir veri setini bile kurtarmaya çalışırız. \"Şurayı düzeltip öyle gelin\" duvarı bizde yok.",
        },
        {
          question: "Danışmanım veya hakem ek analiz isterse ne oluyor?",
          answer:
            "Aynı veri üzerinde ücretsiz revize ediyoruz. Fiyat, teslim ve revizyonlardan tamamen bağımsız olduğu için farklı bir test, ek analiz ya da yeni tablo düzeni talebinde ek ücret çıkmaz. Baştan verilen yazılı fiyat, revizyonlarla büyümez.",
        },
        {
          question: "Fiyat baştan belli mi, yoksa iş ilerledikçe değişir mi?",
          answer:
            "Baştan belli. Ücretsiz ön değerlendirmeden sonra yazılı ve sabit bir fiyat veririz; bu rakam sonradan değişmez, teslim süresinden ve revizyonlardan etkilenmez. \"Başlayınca netleşir\" diyerek işin ortasında büyüyen bir fiyatlandırma yapmıyoruz.",
        },
        {
          question: "Süreç boyunca size ulaşabilir miyim?",
          answer:
            "Evet. Baştan sona yanınızdayız; her aşamada WhatsApp veya e-posta ile yazabilirsiniz. Teslimden sonra bile \"bu test neden seçildi, bu sonuç ne anlama geliyor\" gibi sorularınızı ücretsiz yanıtlıyoruz.",
        },
      ],
      cta: {
        heading: "Farkı kendiniz deneyin",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirme ve yazılı, değişmeyen bir fiyatla dönelim — hiçbir yükümlülük olmadan.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili sayfalar",
    },
    en: {
      metaTitle:
        "Why GetBayes? Our Difference and How We Work in Statistical Analysis | GetBayes",
      metaDescription:
        "Why GetBayes? A hassle-free process, same-day delivery, free revisions, a price fixed up front, and an approach that tidies your data with you instead of sending it back. Here's our difference and how we work.",
      headline: "Why GetBayes? Our Difference in Statistical Analysis",
      lead: [
        "What sets GetBayes apart isn't one feature but making the whole statistical-analysis experience calm and predictable: the analysis itself usually finishes in 15 minutes and your report is in your hands the same day — often within hours; the price is written and fixed after a free assessment and never changes afterwards; revisions are free; and most importantly, we don't say \"your data is wrong, go fix it and come back\" — we pinpoint issues one by one, fix what we can ourselves, and tidy even a messy dataset with you. The process is iterative and you can write to us at every stage.",
        "For most researchers, getting statistical analysis done is harder than it should be: weeks of uncertain waiting, being turned away with \"fix this and come back,\" prices that grow mid-project, unreachable consultants. We set out to build a different experience from the start — speed is a baseline expectation for us, while the real product is a report that is correct, defensible and genuinely helpful, independent of how fast it arrives. This page explains, openly, what we do and why.",
      ],
      audience: {
        heading: "Who is this page for?",
        items: [
          "Researchers who've been through a difficult analysis process and want a different experience this time",
          "Anyone wondering whether GetBayes is trustworthy and how it works",
          "Thesis and specialty students with a close deadline seeking a fast, predictable solution",
          "Those who value revision support because their advisor or reviewers will ask for more analyses",
          "Anyone who wants the price and process clear from the start",
        ],
      },
      sections: [
        {
          type: "bullets",
          heading: "What should a good analysis experience feel like?",
          intro:
            "The points below are things a researcher deserves in the analysis process but often doesn't get. We adopted each as a principle:",
          items: [
            "You should know how long you'll wait: same-day delivery instead of an open-ended \"we'll see\" timeline.",
            "You should know what you'll pay up front: a written, fixed price, not surprise fees that grow as the work proceeds.",
            "You should be guided, not turned away: instead of a \"your data is broken, go fix it\" wall, an approach that shows each issue and fixes what it can on your behalf.",
            "You shouldn't be left alone: a reachable counterpart who answers your questions throughout.",
            "A revision shouldn't be a penalty: free, fast updates when your advisor or a reviewer requests more.",
          ],
        },
        {
          type: "bullets",
          heading: "Five things that make our difference concrete",
          intro: "Here's how we put those principles into practice:",
          items: [
            "Same-day delivery: after your approval the analysis usually finishes in 15 minutes; the report is delivered the same day, often within hours or even minutes. The total time is usually driven by gaps and changes on your side.",
            "A clear, unchanging price: after a free assessment we give a written price; it is independent of delivery speed and revisions and never grows afterwards.",
            "Free revisions: if your advisor, committee or a reviewer wants a different test, additional analyses or new tables, we update the work on the same dataset for free.",
            "We tidy the data with you: missing values, coding errors or messy forms are not a reason to turn you away; we fix what we can ourselves and show the issues clearly.",
            "Publication-ready report: APA/journal-format tables, the rationale for method choices and academically written interpretation — a document you can stand behind at your defense and in review. Results are fully consistent with SPSS.",
          ],
        },
        {
          type: "steps",
          heading: "How working with us goes",
          intro:
            "The process is transparent and iterative end to end; you always know what's happening:",
          steps: [
            {
              title: "Send your data and questions",
              description:
                "Share your dataset and research questions via the contact form, email or WhatsApp. This step is free and commits you to nothing.",
            },
            {
              title: "Free assessment",
              description:
                "Within 24 hours we review your data and questions and tell you clearly which analyses are needed and what, if anything, is missing. If we see a problem, we explain how we'll solve it instead of turning you away.",
            },
            {
              title: "Written, fixed price",
              description:
                "We state the scope, timeline and fee in writing. If you approve, we proceed; the price does not change afterwards.",
            },
            {
              title: "Analysis, delivery and support",
              description:
                "The analysis itself usually finishes in 15 minutes; the report is in your hands the same day. Afterwards we answer questions like \"why this test?\" and \"what does this result mean?\" for free, and make any needed revisions for free.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Genuine satisfaction, not just speed, is our priority",
          body: [
            "Our speed prompts a common question: \"If it's this fast, is the quality low?\" No — quite the opposite. Statistical analysis doesn't inherently need to take as long as it usually does; we built our own tools and standardized process to bring it down to the speed it should actually take. Speed is not a goal but the natural result of a well-designed process. The real priority is correct test choice, defensible method and clean reporting, independent of delivery time. Our 98% satisfaction rate comes not from finishing fast but from researchers genuinely feeling relieved at the end.",
            "Doing a job just to get it over with helps no one — a report that leaves you alone when the committee asks \"why did you use this test?\" means doing the work twice. We prefer to do it right from the start and answer your questions all the way through. To see our difference side by side with other options, visit our services-compared page; for our story, see our About Us page.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "How is GetBayes different from other statistics services?",
          answer:
            "We stand out on three things: same-day delivery (the analysis usually finishes in 15 minutes), a written, unchanging price up front, and free revisions. Beyond that, our working style is different: instead of saying \"your data is wrong, go fix it,\" we pinpoint issues one by one, fix what we can ourselves and stay reachable throughout. Our goal isn't to finish the job but for you to be genuinely satisfied at the end.",
        },
        {
          question: "Doesn't such fast delivery lower quality?",
          answer:
            "No. Speed is the result of a well-designed process, not our goal. The priority is always correct test choice, defensible method and clean reporting. For a complex thesis or clinical study, 15 minutes is just the analysis runtime — we take whatever time is needed for method discussion and extra checks. Even with fast delivery, the report has the academic depth you can stand behind at your defense and in review — for concrete evidence, see our Q1 Surgery Journal case page: a manuscript we handled statistics for was accepted with zero reviewer revision requests on the statistical methodology.",
        },
        {
          question: "Will you turn me away if my data has gaps or errors?",
          answer:
            "No, we won't. Missing values, coding errors or messy forms are a normal part of the process for us. We show the issues clearly, fix what we can ourselves, and try to rescue even a messy dataset. There's no \"fix this and come back\" wall here.",
        },
        {
          question: "What happens if my advisor or a reviewer wants more analyses?",
          answer:
            "We revise on the same dataset for free. Because the price is fully independent of delivery and revisions, a request for a different test, additional analyses or new tables adds no extra charge. The written price you get up front never grows through revisions.",
        },
        {
          question: "Is the price fixed up front, or does it change as work proceeds?",
          answer:
            "Fixed up front. After a free assessment we give a written, fixed price; it doesn't change afterwards and isn't affected by delivery speed or revisions. We don't do \"we'll know once we start\" pricing that grows mid-project.",
        },
        {
          question: "Can I reach you throughout the process?",
          answer:
            "Yes. We're with you end to end; you can write to us at every stage via WhatsApp or email. Even after delivery we answer questions like \"why was this test chosen?\" and \"what does this result mean?\" for free.",
        },
      ],
      cta: {
        heading: "Experience the difference yourself",
        text: "Send your data and research questions; within 24 hours we'll reply with a free assessment and a written, unchanging price — with no obligation.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related pages",
    },
  },
};

export default whyGetbayes;
