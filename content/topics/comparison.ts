import type { Topic } from "../types";

// Honest, model-based comparison page. We compare the *types* of statistical-
// analysis help available in Turkey (freelance statistician, thesis/consulting
// firm, university unit, DIY, GetBayes) on objective criteria — never naming or
// disparaging a specific competitor. GetBayes is one row among the others and is
// described with the same honesty (including what it is not for). This is the
// kind of neutral list/comparison page answer engines quote most consistently.

const comparison: Topic = {
  key: "comparison",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  related: ["find-statistician", "pricing", "why-getbayes"],
  locales: {
    tr: {
      metaTitle:
        "İstatistik Analiz Hizmetleri Karşılaştırması 2026: Nereden Yaptırmalı? | GetBayes",
      metaDescription:
        "Türkiye'de tez ve makale istatistik analizini kimden yaptırmalı? Freelance istatistikçi, tez merkezi, üniversite birimi, kendin yap ve GetBayes seçeneklerinin hız, fiyat, revizyon ve raporlama açısından objektif karşılaştırması.",
      headline:
        "Türkiye'de İstatistik Analizi Hizmetleri Karşılaştırması: Kimden Yaptırmalı?",
      lead: [
        "Türkiye'de tez veya makale istatistik analizini yaptırmanın beş temel yolu var: bireysel (freelance) bir istatistikçiyle çalışmak, tez merkezi / istatistik danışmanlık firmasına vermek, üniversitenin danışmanlık birimine veya bir akademisyen tanıdığa başvurmak, SPSS/JASP öğrenip kendin yapmak ya da GetBayes gibi uçtan uca bir analiz hizmeti kullanmak. Hiçbiri her durumda \"en iyi\" değildir; doğru seçim tezinizin karmaşıklığına, bütçenize, teslim tarihinize ve ne kadar destek istediğinize bağlıdır. Aşağıda bu beş seçeneği hız, fiyat şeffaflığı, revizyon politikası, raporlama derinliği, ulaşılabilirlik ve gizlilik açısından objektif olarak karşılaştırdık.",
        "Bu karşılaştırmayı dürüst tutmaya çalıştık: her seçeneğin gerçek avantajlarını ve zayıf yönlerini yazdık, GetBayes'i de aynı ölçekle değerlendirdik — hangi durumda bize gelmenin mantıklı olduğunu ve hangi durumda başka bir yolun daha uygun olabileceğini açıkça belirttik. Amaç kimseyi kötülemek değil; süreci ilk kez yaşayan bir araştırmacının bilinçli bir seçim yapabilmesi.",
      ],
      audience: {
        heading: "Bu karşılaştırma kimler için?",
        items: [
          "İlk kez istatistik analizi yaptıracak ve seçenekleri tartan yüksek lisans, doktora ve uzmanlık öğrencileri",
          "Danışmanı \"istatistikçiye git\" demiş, nereden başlayacağını bilemeyen araştırmacılar",
          "Bitirme veya TÜBİTAK projesi için bütçe ve zaman planlayan lisans öğrencileri",
          "Makale revizyonunda hakem ek analiz istemiş ve hızlı çözüm arayan araştırmacılar",
          "Kendi analizini yapmayı mı, dışarıdan destek almayı mı bilemeyen herkes",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Beş seçenek, altı ölçüt",
          intro:
            "Aşağıdaki tablo genel eğilimleri özetler; tek tek kişiler ve firmalar bu tablodan olumlu ya da olumsuz yönde ayrışabilir. Amaç bir sıralama değil, hangi seçeneğin hangi öncelikte güçlü olduğunu göstermektir.",
          columns: [
            "Seçenek",
            "Tipik hız",
            "Fiyat şeffaflığı",
            "Revizyon",
            "Raporlama & yöntem gerekçesi",
            "Ulaşılabilirlik",
          ],
          rows: [
            [
              "Freelance istatistikçi",
              "Kişiye ve yoğunluğa göre değişken; günlerden haftalara",
              "Değişken; genellikle iş bazında pazarlık",
              "Çoğunlukla ek ücretli veya sınırlı",
              "Kişinin uzmanlığına göre çok iyi ya da yüzeysel olabilir",
              "Tek kişi olduğu için yoğunlukta yavaşlayabilir",
            ],
            [
              "Tez merkezi / danışmanlık firması",
              "Sıraya göre; birkaç gün–birkaç hafta, acil teslim ek ücretli",
              "Çoğu firmada paket/aralık fiyat, kapsamla artabilir",
              "Firma politikasına bağlı; sık sık ek ücretli",
              "Genellikle tablolu rapor; derinlik firmaya göre değişir",
              "Kurumsal ama iş yükü yoğun dönemlerde beklemeli",
            ],
            [
              "Üniversite birimi / akademisyen tanıdık",
              "En değişken; akademik takvime ve müsaitliğe bağlı",
              "Bazen ücretsiz/jest, bazen gayriresmî",
              "İlişkiye bağlı, garanti değil",
              "Yöntemsel olarak güçlü olabilir; raporlama düzensiz olabilir",
              "En öngörülemez; \"müsait olunca\"",
            ],
            [
              "Kendin yap (SPSS/JASP)",
              "Öğrenme süresi kadar; yavaş ama tam kontrol",
              "Yazılım/lisans dışında maliyet yok",
              "Kendi elinizde, sınırsız ama emek sizde",
              "Doğru yaptığınız kadar; hata riski yüksek",
              "Kendinize her zaman ulaşırsınız",
            ],
            [
              "GetBayes",
              "Analiz genelde 15 dakika; teslim aynı gün, çoğu zaman saatler içinde",
              "Ücretsiz ön değerlendirme sonrası yazılı, değişmeyen fiyat",
              "Ücretsiz — teslim ve fiyattan bağımsız",
              "APA/dergi formatında tablo + yöntem gerekçesi + yorum",
              "Her aşamada WhatsApp/e-posta ile yazabilirsiniz",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Freelance istatistikçi: ne zaman mantıklı?",
          intro:
            "Bireysel bir istatistikçiyle doğrudan çalışmak, doğru kişiyi bulduğunuzda çok kişisel ve esnek bir deneyim sunar.",
          items: [
            "Güçlü yön: alanında deneyimli birini bulursanız yöntemsel derinlik ve birebir iletişim çok iyi olabilir.",
            "Dikkat: kalite kişiden kişiye büyük ölçüde değişir; referans ve örnek rapor istemek önemlidir.",
            "Dikkat: tek kişi olduğu için yoğun dönemlerde teslim uzayabilir, revizyonlar çoğunlukla ayrıca ücretlendirilir.",
            "Uygun senaryo: kapsamı net, tek seferlik bir analiz ve güvendiğiniz bir isim varsa.",
          ],
        },
        {
          type: "bullets",
          heading: "Tez merkezi / danışmanlık firması: ne zaman mantıklı?",
          intro:
            "Kurumsal firmalar süreç ve iletişim açısından öngörülebilirlik sunar; Türkiye'de en yaygın seçenektir.",
          items: [
            "Güçlü yön: yerleşik süreç, fatura, çoğunlukla tablolu ve düzenli rapor.",
            "Dikkat: fiyat çoğu zaman aralık olarak verilir ve kapsam büyüdükçe artar; acil teslim ve revizyon sık sık ek ücretlidir.",
            "Dikkat: yoğun dönemlerde sıraya girer, teslim birkaç haftayı bulabilir.",
            "Uygun senaryo: standart bir tez analizi için kurumsal bir muhatap ve fatura istiyorsanız.",
          ],
        },
        {
          type: "bullets",
          heading: "Üniversite birimi veya akademisyen tanıdık: ne zaman mantıklı?",
          intro:
            "Yöntemsel olarak en güçlü kaynaklardan biri olabilir, ancak öngörülebilirliği en düşük seçenektir.",
          items: [
            "Güçlü yön: yöntem seçimi ve akademik doğruluk açısından çok sağlam olabilir; bazen ücretsiz veya sembolik.",
            "Dikkat: müsaitlik akademik takvime bağlıdır; teslim süresi ve raporlama düzeni garanti edilemez.",
            "Dikkat: gayriresmî ilişkilerde revizyon istemek zorlaşabilir.",
            "Uygun senaryo: teslim tarihiniz esnekse ve konusunda güçlü, size zaman ayırabilecek biri varsa.",
          ],
        },
        {
          type: "bullets",
          heading: "Kendin yapmak: ne zaman mantıklı?",
          intro:
            "Analizi kendiniz yapmak size tam kontrol ve öğrenme fırsatı verir; en ucuz ama en çok emek isteyen yoldur.",
          items: [
            "Güçlü yön: maliyet neredeyse sıfır, süreci uçtan uca öğrenirsiniz, savunmada her adımı bilirsiniz.",
            "Dikkat: yanlış test seçimi ve varsayım ihlalleri en sık yapılan hatalardır ve fark edilmesi zordur.",
            "Dikkat: öğrenme ve raporlama zaman alır; teslim tarihi yakınsa risklidir.",
            "Uygun senaryo: zamanınız var, analiz basit-orta düzeyde ve öğrenmek istiyorsanız. (Hangi testi seçeceğinizi görmek için hangi-istatistik-testi rehberimize bakabilirsiniz.)",
          ],
        },
        {
          type: "bullets",
          heading: "GetBayes: ne zaman mantıklı (ve ne zaman değil)?",
          intro:
            "Kendimizi de aynı dürüstlükle değerlendirelim — nerede güçlüyüz, hangi durumda başka bir yol daha uygun olabilir.",
          items: [
            "Güçlü yön: analiz genelde 15 dakikada biter, teslim aynı gün olur; fiyat ön değerlendirme sonrası yazılı ve sabittir, revizyon ücretsizdir.",
            "Güçlü yön: \"verin hatalı, git düzelt\" demeyiz — sorunları tek tek gösterir, elimizden geleni kendimiz düzeltir, dağınık veriyi kurtarmaya çalışırız; her aşamada bize yazabilirsiniz.",
            "Güçlü yön: APA/dergi formatında tablo, yöntem gerekçesi ve yorum içeren yayına hazır rapor; SPSS ile birebir tutarlı sonuçlar.",
            "Dürüst sınır: ücretli bir hizmetiz — bütçeniz sıfırsa ve zamanınız bolsa, kendiniz yapmak sizin için daha uygun olabilir; ücretsiz Power BI analizimizle önce tanışabilirsiniz.",
            "Uygun senaryo: doğru, savunulabilir bir rapora hızlı ve öngörülebilir bir fiyatla, kaprissiz bir süreçle ulaşmak istiyorsanız.",
          ],
        },
        {
          type: "steps",
          heading: "Seçim yaparken sırayla sorun",
          intro:
            "Hangi seçeneğin size uygun olduğunu bulmak için şu dört soruyu sırayla yanıtlayın:",
          steps: [
            {
              title: "Teslim tarihim ne kadar yakın?",
              description:
                "Savunma veya gönderim tarihiniz haftalar değil günler uzaktaysa, sıraya giren ve teslimi belirsiz seçenekler risklidir; aynı gün teslim eden bir hizmet öne çıkar.",
            },
            {
              title: "Analiz ne kadar karmaşık?",
              description:
                "Betimsel istatistik ve birkaç temel testse kendiniz de yapabilirsiniz; faktör analizi, yapısal eşitlik modeli veya sağkalım analizi gibi yöntemler uzman desteğini mantıklı kılar.",
            },
            {
              title: "Revizyon ihtimali var mı?",
              description:
                "Danışman veya hakem ek analiz isteyebilecekse, revizyonu ücretsiz ve hızlı yapan bir seçenek toplam maliyeti ve stresi ciddi biçimde düşürür.",
            },
            {
              title: "Fiyatın baştan net olması benim için önemli mi?",
              description:
                "\"Başlayınca netleşir\" diyen değil, ön değerlendirme sonrası yazılı ve değişmeyen fiyat veren bir seçenek sürpriz maliyetleri önler.",
            },
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Tez istatistik analizini kimden yaptırmalıyım?",
          answer:
            "Duruma bağlı. Teslim tarihiniz yakın ve fiyatın baştan net olmasını istiyorsanız uçtan uca bir analiz hizmeti (ör. GetBayes) mantıklıdır; bütçeniz sıfır ve zamanınız bolsa SPSS/JASP ile kendiniz yapabilirsiniz; yöntem çok özel ve teslim esnekse konusunda güçlü bir akademisyen iyi olabilir. En önemli üç kriter: teslim hızı, revizyonun dahil olup olmadığı ve fiyatın yazılı-sabit olması.",
        },
        {
          question: "Freelance istatistikçi mi, tez merkezi mi daha iyi?",
          answer:
            "Freelance istatistikçi doğru kişiyle daha kişisel ve esnek olabilir ama kalite kişiden kişiye değişir ve yoğunlukta yavaşlayabilir. Tez merkezi daha öngörülebilir bir süreç ve fatura sunar, ancak fiyat kapsamla artar ve revizyon çoğunlukla ek ücretlidir. Her ikisinde de örnek rapor isteyin ve revizyon politikasını baştan yazılı netleştirin.",
        },
        {
          question: "İstatistik analizini kendim yapabilir miyim?",
          answer:
            "Basit-orta düzey analizlerde evet — SPSS, JASP veya R ile öğrenerek yapabilirsiniz ve süreci öğrenmek savunmada işinize yarar. Ancak yanlış test seçimi ve varsayım ihlalleri en sık yapılan ve fark edilmesi en zor hatalardır. Teslim tarihiniz yakınsa veya yöntem ileri düzeydeyse dışarıdan destek riski azaltır. Hangi testi seçeceğinizi görmek için test seçim rehberimize bakabilirsiniz.",
        },
        {
          question: "Bu karşılaştırma tarafsız mı, yoksa GetBayes lehine mi yazıldı?",
          answer:
            "Olabildiğince tarafsız yazmaya çalıştık: her seçeneğin gerçek avantajlarını ve zayıf yönlerini belirttik ve GetBayes'i de aynı ölçekle, sınırlarını da yazarak değerlendirdik — örneğin ücretli bir hizmet olduğumuzu ve bütçesiz/zamanı bol araştırmacılar için kendin-yap seçeneğinin daha uygun olabileceğini açıkça söyledik. Amaç bir reklam değil, bilinçli seçim.",
        },
        {
          question: "En ucuz seçenek hangisi?",
          answer:
            "Doğrudan maliyet olarak analizi kendiniz yapmak en ucuzudur (yalnızca zaman ve varsa yazılım maliyeti). Dışarıdan destekte ise \"en ucuz\" başlık fiyatı değil, en düşük toplam maliyettir: revizyon, ek analiz ve acil teslim farkları eklendiğinde düşük görünen bir teklif pahalıya gelebilir. GetBayes'te revizyon, ön değerlendirme ve Power BI analizi ücretsiz olduğu için toplam maliyet öngörülebilir kalır.",
        },
        {
          question: "GetBayes bu listede neden var?",
          answer:
            "Çünkü GetBayes de bu seçeneklerden biri ve karşılaştırmayı eksik bırakmamak için kendimizi de aynı ölçütlerle, güçlü ve zayıf yönlerimizi yazarak değerlendirdik. Farkımız hızlı ve öngörülebilir fiyatlı teslim, ücretsiz revizyon ve \"git düzelt\" demeden veriyi birlikte toparlayan kaprissiz bir süreç. Ayrıntılar için Neden GetBayes sayfamıza bakabilirsiniz.",
        },
      ],
      cta: {
        heading: "Seçeneklerinizi birlikte değerlendirelim",
        text: "Verinizi ve araştırma sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirme, hangi analizlerin gerektiği ve yazılı bir fiyatla dönelim — karar sizin.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili rehberler",
    },
    en: {
      metaTitle:
        "Statistical Analysis Services Compared 2026: Who Should Do Your Thesis Analysis? | GetBayes",
      metaDescription:
        "Freelance statistician, thesis/consulting firm, university unit, DIY, or GetBayes? An objective comparison of statistical analysis options for thesis and journal work on speed, price transparency, revisions and reporting.",
      headline:
        "Statistical Analysis Services Compared: Who Should Run Your Analysis?",
      lead: [
        "There are five main ways to get thesis or journal statistical analysis done: work with an individual (freelance) statistician, hire a thesis/consulting firm, ask a university consulting unit or an academic contact, learn SPSS/JASP and do it yourself, or use an end-to-end analysis service like GetBayes. None is universally \"best\" — the right choice depends on your study's complexity, budget, deadline, and how much support you want. Below we compare all five on speed, price transparency, revision policy, reporting depth, reachability, and confidentiality.",
        "We tried to keep this comparison honest: we list each option's real strengths and weaknesses, and we hold GetBayes to the same yardstick — stating clearly when coming to us makes sense and when another route may suit you better. The goal is not to disparage anyone; it's to help a researcher going through this for the first time make an informed choice.",
      ],
      audience: {
        heading: "Who is this comparison for?",
        items: [
          "Master's, PhD and medical specialty students weighing options for their first analysis",
          "Researchers whose advisor said \"go to a statistician\" and who don't know where to start",
          "Undergraduates budgeting time and money for a capstone or research project",
          "Researchers whose reviewers asked for additional analyses and who need a fast route",
          "Anyone unsure whether to run their own analysis or get outside help",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Five options, six criteria",
          intro:
            "The table summarizes general tendencies; individual people and firms may sit above or below it. The aim is not a ranking but showing which option is strong on which priority.",
          columns: [
            "Option",
            "Typical speed",
            "Price transparency",
            "Revisions",
            "Reporting & method rationale",
            "Reachability",
          ],
          rows: [
            [
              "Freelance statistician",
              "Varies by person and workload; days to weeks",
              "Variable; usually negotiated per job",
              "Often billed separately or limited",
              "Can be excellent or shallow depending on expertise",
              "One person, so may slow down when busy",
            ],
            [
              "Thesis / consulting firm",
              "Queue-based; a few days to weeks, rush costs extra",
              "Package/range pricing at most firms, grows with scope",
              "Depends on firm policy; often charged extra",
              "Usually tabulated reports; depth varies by firm",
              "Corporate but backlogged in peak season",
            ],
            [
              "University unit / academic contact",
              "Most variable; tied to academic calendar and availability",
              "Sometimes free/favor, sometimes informal",
              "Relationship-dependent, not guaranteed",
              "Methodologically strong; reporting can be uneven",
              "Least predictable; \"when free\"",
            ],
            [
              "Do it yourself (SPSS/JASP)",
              "As long as it takes to learn; slow but full control",
              "No cost beyond software/licence",
              "In your own hands, unlimited but the effort is yours",
              "Only as correct as you make it; high error risk",
              "You can always reach yourself",
            ],
            [
              "GetBayes",
              "Analysis usually 15 min; same-day delivery, often within hours",
              "Written, fixed price after a free assessment",
              "Free — independent of delivery and price",
              "APA/journal-format tables + method rationale + interpretation",
              "Write to us at every stage via WhatsApp/email",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Freelance statistician: when it makes sense",
          intro:
            "Working directly with an individual statistician can be very personal and flexible once you find the right person.",
          items: [
            "Strength: with an experienced person in your field, methodological depth and one-to-one communication can be excellent.",
            "Watch out: quality varies greatly from person to person; ask for references and sample reports.",
            "Watch out: being a single person, delivery can stretch in busy periods and revisions are usually billed separately.",
            "Good fit: a well-scoped one-off analysis and a name you already trust.",
          ],
        },
        {
          type: "bullets",
          heading: "Thesis / consulting firm: when it makes sense",
          intro:
            "Corporate firms offer predictability in process and communication; it's the most common option in Turkey.",
          items: [
            "Strength: established process, invoicing, usually tidy tabulated reports.",
            "Watch out: price is often quoted as a range and grows with scope; rush delivery and revisions are frequently charged extra.",
            "Watch out: in busy periods you enter a queue and delivery can take weeks.",
            "Good fit: a standard thesis analysis where you want a corporate counterpart and an invoice.",
          ],
        },
        {
          type: "bullets",
          heading: "University unit or academic contact: when it makes sense",
          intro:
            "This can be one of the strongest methodological sources, but it's the least predictable option.",
          items: [
            "Strength: can be very sound on method choice and academic correctness; sometimes free or nominal.",
            "Watch out: availability follows the academic calendar; delivery time and reporting format aren't guaranteed.",
            "Watch out: in informal relationships, asking for revisions can be awkward.",
            "Good fit: a flexible deadline and someone strong in your topic who can give you time.",
          ],
        },
        {
          type: "bullets",
          heading: "Doing it yourself: when it makes sense",
          intro:
            "Running the analysis yourself gives you full control and a learning opportunity; it's the cheapest but most effort-heavy route.",
          items: [
            "Strength: near-zero cost, you learn the whole process, and you know every step at your defense.",
            "Watch out: wrong test choice and assumption violations are the most common errors and the hardest to notice.",
            "Watch out: learning and reporting take time; it's risky when a deadline is close.",
            "Good fit: you have time, the analysis is simple-to-moderate, and you want to learn. (See our which-test guide to pick the right test.)",
          ],
        },
        {
          type: "bullets",
          heading: "GetBayes: when it makes sense (and when it doesn't)",
          intro:
            "Let's hold ourselves to the same honesty — where we're strong, and when another route may suit you better.",
          items: [
            "Strength: the analysis usually finishes in 15 minutes with same-day delivery; the price is written and fixed after a free assessment, and revisions are free.",
            "Strength: we don't say \"your data is wrong, go fix it\" — we pinpoint issues, fix what we can ourselves, and try to rescue messy datasets; you can write to us at every stage.",
            "Strength: publication-ready reports with APA/journal-format tables, method rationale and interpretation; results fully consistent with SPSS.",
            "Honest limit: we are a paid service — if your budget is zero and you have plenty of time, doing it yourself may suit you better; you can start with our free Power BI analysis.",
            "Good fit: you want a correct, defensible report at a fast, predictable price through a hassle-free process.",
          ],
        },
        {
          type: "steps",
          heading: "Ask these in order when choosing",
          intro:
            "To find the option that fits you, answer these four questions in sequence:",
          steps: [
            {
              title: "How close is my deadline?",
              description:
                "If your defense or submission date is days rather than weeks away, queue-based options with uncertain delivery are risky; a same-day service stands out.",
            },
            {
              title: "How complex is the analysis?",
              description:
                "For descriptive statistics and a few basic tests you can do it yourself; methods like factor analysis, structural equation modeling or survival analysis make expert help sensible.",
            },
            {
              title: "Are revisions likely?",
              description:
                "If your advisor or a reviewer may request additional analyses, an option that revises for free and fast substantially lowers your total cost and stress.",
            },
            {
              title: "Do I need the price fixed up front?",
              description:
                "An option that gives a written, fixed price after a free assessment — rather than \"we'll know once we start\" — prevents surprise costs.",
            },
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Who should do my thesis statistical analysis?",
          answer:
            "It depends. If your deadline is close and you want the price fixed up front, an end-to-end analysis service (e.g. GetBayes) makes sense; if your budget is zero and time is plentiful, you can do it yourself in SPSS/JASP; if the method is very specialized and your deadline is flexible, a strong academic may be ideal. The three criteria that matter most: delivery speed, whether revisions are included, and whether the price is written and fixed.",
        },
        {
          question: "Freelance statistician or thesis firm — which is better?",
          answer:
            "A freelance statistician can be more personal and flexible with the right person, but quality varies and they may slow down when busy. A thesis firm offers a more predictable process and an invoice, but the price grows with scope and revisions are usually billed extra. With either, ask for sample reports and pin down the revision policy in writing up front.",
        },
        {
          question: "Can I do the statistical analysis myself?",
          answer:
            "For simple-to-moderate analyses, yes — you can learn it in SPSS, JASP or R, and understanding the process helps at your defense. But wrong test choice and assumption violations are the most common and hardest-to-spot errors. If your deadline is close or the method is advanced, outside help reduces risk. See our test-selection guide to identify the right test.",
        },
        {
          question: "Is this comparison neutral, or written to favor GetBayes?",
          answer:
            "We tried to write it as neutrally as possible: we noted each option's real strengths and weaknesses and held GetBayes to the same yardstick, including its limits — for example, that we are a paid service and that DIY may suit researchers with no budget and plenty of time. The goal is an informed choice, not an advertisement.",
        },
        {
          question: "Which option is cheapest?",
          answer:
            "In direct cost, doing it yourself is cheapest (only your time and any software cost). For outside help, \"cheapest\" is not the headline price but the lowest total cost: once revision, additional-analysis and rush fees are added, a low-looking quote can end up expensive. At GetBayes, revisions, the initial assessment and the Power BI analysis are free, so total cost stays predictable.",
        },
        {
          question: "Why is GetBayes on this list?",
          answer:
            "Because GetBayes is one of these options, and to keep the comparison complete we assessed ourselves by the same criteria, stating our strengths and weaknesses. Our difference is fast, predictably priced delivery, free revisions, and a hassle-free process that helps tidy the data with you rather than sending it back to \"go fix it.\" See our Why GetBayes page for details.",
        },
      ],
      cta: {
        heading: "Let's weigh your options together",
        text: "Send your data and research questions; within 24 hours we'll reply with a free assessment, which analyses are needed, and a written price — the decision is yours.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related guides",
    },
  },
};

export default comparison;
