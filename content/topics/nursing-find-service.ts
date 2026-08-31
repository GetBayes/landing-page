import type { Topic } from "../types";

const nursingFindService: Topic = {
  key: "nursing-find-service",
  kind: "guide",
  datePublished: "2026-08-31",
  dateModified: "2026-08-31",
  related: [
    "nursing-statistics",
    "find-statistician",
    "ancova",
    "reliability-analysis",
    "comparison",
    "pricing",
  ],
  locales: {
    tr: {
      metaTitle: "Hemşirelik Tez Analizi Nereden Yaptırılır? | GetBayes",
      metaDescription:
        "Hemşirelik tezinin istatistik analizini kimden yaptırmalı? Kanalların karşılaştırması, ön test-son test ve ölçek çalışmaları için sorulacak sorular, piyasa fiyatları.",
      headline: "Hemşirelik Tez Analizini Nereden Yaptırmalı?",
      lead: [
        "Hemşirelik tezinin istatistiğini dört yerden yaptırabilirsiniz: fakültenizde istatistik dersi veren bir öğretim üyesi, üniversitenizin varsa danışmanlık birimi, bireysel istatistikçiler ve GetBayes gibi analiz hizmeti veren ekipler. Seçimi belirleyen soru ise neredeyse her hemşirelik tezinde aynıdır: bir girişimin (eğitim programı, bakım protokolü, ağrı yönetimi uygulaması) etkisini ön test-son test tasarımıyla ölçüyorsanız, **bu veriyi analiz etmenin dört farklı yolu var ve hepsi farklı sonuç verir.** Kiminle konuşursanız konuşun, hangisini neden seçeceğini sorun; \"son test puanlarını karşılaştırırız\" tek başına yeterli bir cevap değildir.",
        "Aşağıda kanalların artı-eksisi, sorulacak sorular, uzak durulması gereken uyarı işaretleri ve kamuya açık ilanlardan derlenmiş fiyat aralıkları var. GetBayes de bu seçeneklerden biri ve ücretli bir hizmettir — ne yaptığımızı sayfanın sonunda açıkça yazıyoruz.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Yüksek lisans ve doktora tezi yürüten hemşirelik öğrencileri",
          "Girişim/eğitim programının etkisini ön test-son test tasarımıyla ölçen araştırmacılar",
          "Tükenmişlik, iş doyumu, öz-yeterlik gibi ölçeklerle kesitsel veri toplayanlar",
          "Ölçek Türkçe uyarlama veya geçerlik-güvenirlik çalışması yapanlar",
          "Ebelik, fizyoterapi, beslenme ve diğer sağlık bilimleri alanlarında benzer tasarımlarla çalışan araştırmacılar",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Hemşirelik tezinde kaderi belirleyen tek karar",
          body: [
            "Girişim çalışmalarında elinizde iki ölçüm vardır: ön test ve son test, çoğu zaman bir de kontrol grubu. Bu veriyi analiz etmenin yaygın dört yolu var — yalnızca son test puanlarını karşılaştırmak, her grubun kendi içinde ön-son testini karşılaştırmak, fark (kazanç) puanı hesaplayıp karşılaştırmak, karma (grup x zaman) ANOVA kurmak, ya da ön testi kovaryat alarak ANCOVA yapmak. Hepsi \"anlamlı\" veya \"anlamsız\" sonuç üretebilir ve seçim tasarımınıza bağlıdır.",
            "En sık görülen hata, iki grubun kendi içindeki ön-son test farkına ayrı ayrı bakıp \"deney grubunda anlamlıydı, kontrolde değildi, o halde girişim işe yaradı\" demektir. Bu, grupları birbiriyle hiç karşılaştırmamak anlamına gelir ve jürinin ilk soracağı yerdir. Gruplar ön testte farklı başladıysa ANCOVA çoğu durumda daha doğru cevabı verir. Analizi kime yaptırırsanız yaptırın, bu tercihin gerekçesini duymadan başlamayın.",
          ],
        },
        {
          type: "table",
          heading: "Analizi yaptırabileceğiniz kanallar",
          columns: ["Kanal", "Güçlü yönü", "Zayıf yönü", "Tipik süre"],
          rows: [
            [
              "Fakültede istatistik dersi veren öğretim üyesi",
              "Hemşirelik tezlerinin gereklerini ve tez formatını biliyor; çoğu zaman ücretsiz",
              "Ders ve danışmanlık yükü ağır; sıra beklenir, revizyon istemek zorlaşır",
              "Birkaç hafta, bazen belirsiz",
            ],
            [
              "Üniversitenin danışmanlık birimi",
              "Kurumsal güven, metodolojik gerekçelendirme güçlü",
              "Her üniversitede yok; kapsam çoğunlukla yöntem önerisiyle sınırlı, analizi siz yaparsınız",
              "2-6 hafta",
            ],
            [
              "Bireysel / freelance istatistikçi",
              "Esnek, pazarlığa açık, doğrudan iletişim",
              "Kalite çok değişken; ölçek puanlaması ve ön test-son test tasarımı tecrübesi olmayabilir, revizyon ve gizlilik sözü genelde yazılı değil",
              "3 gün - 2 hafta",
            ],
            [
              "Profesyonel analiz hizmeti (GetBayes gibi)",
              "Yazılı sabit fiyat, standart rapor formatı, ücretsiz revizyon ve teslim sonrası soru-cevap",
              "Ücretli; bütçeniz sıfırsa ve vaktiniz bolsa kendiniz öğrenmek daha mantıklı olabilir",
              "Analiz 15 dakika, teslim aynı gün",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Anlaşmadan önce sorulacak yedi soru",
          items: [
            "**Ön test-son test verimi hangi yöntemle analiz edeceksiniz, neden?** Karma ANOVA mı, ANCOVA mı, fark puanı mı — ve gruplar ön testte farklı başlarsa ne yapılacağı. Gerekçesiz bir cevap, savunmada sizi zorda bırakır.",
            "**Ölçek puanlarını kim hesaplayacak?** Ters kodlanan maddeler, alt boyut toplamları ve kesme noktaları: buradaki tek bir hata bütün analizi geçersiz kılar.",
            "**Ölçeğin güvenirliğini kendi örneklemimde raporlayacak mısınız?** Ölçeğin orijinal alfa değerini alıntılamak yetmez; kendi verinizdeki Cronbach alfa (ve alt boyut bazında) raporlanmalıdır.",
            "**Örneklemim küçükse ne yapacaksınız?** Bir serviste çalışan hemşireler veya belirli bir tanı grubundaki hastalarla çalışıyorsanız normallik varsayımı sık ihlal edilir; nonparametrik alternatiflerin (Wilcoxon, Mann-Whitney, Kruskal-Wallis) adı geçmeli.",
            "**Çok sayıda korelasyon çalıştıracak mıysak bunu nasıl raporlayacaksınız?** Onlarca değişken arasında korelasyon taranıp yalnızca anlamlı olanlar yazılırsa yanlış pozitif üretilir; hangi ilişkilerin hipotezle önceden belirlendiği ayrılmalıdır.",
            "**Raporda etki büyüklüğü olacak mı?** \"Anlamlı fark bulundu\" cümlesi tek başına farkın büyüklüğünü söylemez; hemşirelik dergileri Cohen's d veya eta kare gibi ölçüleri bekliyor.",
            "**Danışmanım veya jüri ek analiz isterse ne olacak?** Revizyon kapsamı ve ücreti baştan yazılı olmalı.",
          ],
        },
        {
          type: "bullets",
          heading: "Uyarı işaretleri",
          items: [
            "**\"Anlamlı çıkarırız\" güvencesi.** Vaat edilemez; vaat ediliyorsa sonuç aranıyor demektir. Girişimin etkisiz çıkması da geçerli ve yayımlanabilir bir bulgudur.",
            "**Deney ve kontrol grubunu hiç karşılaştırmadan \"girişim etkili\" sonucuna varmak.** İki grubun kendi içindeki değişimi ayrı ayrı test etmek, grup karşılaştırması değildir.",
            "**Ölçek puanlamasını size bırakıp veriyi olduğu gibi analiz etmek.** Ters kodlama atlanmış bir ölçek, tutarlı görünen ama yanlış sonuçlar üretir.",
            "**Veriyi görmeden kesin fiyat vermek.** Kapsam bilinmeden verilen rakam iş ortasında büyümeye açıktır.",
            "**Gizlilik konusunda yazılı taahhüt verilmemesi.** Hasta veya çalışan verisini kimliksizleştirerek gönderin; kurum adı ve kimlik bilgisi analiz için gerekmez.",
            "**\"Tezini de yazalım\" teklifi.** Analiz desteğinin sınırı bellidir; ötesi akademik dürüstlük sorunudur.",
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
              "Tanımlayıcı istatistik + basit karşılaştırmalar",
              "2.000 - 6.000 ₺",
              "Dar kapsamlı kesitsel çalışmalar",
            ],
            [
              "Ön test-son test + ölçek güvenirliği + korelasyon/regresyon",
              "6.000 - 10.000 ₺",
              "Tipik bir hemşirelik yüksek lisans tezi genelde bu aralıkta",
            ],
            [
              "İleri düzey (ölçek uyarlama AFA+DFA, karma modeller, aracılık)",
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
          steps: [
            {
              title: "Tasarım",
              description:
                "Girişim çalışması mı kesitsel mi; kontrol grubu var mı, ölçümler kaç zaman noktasında alındı.",
            },
            {
              title: "Veri seti",
              description:
                "Excel veya SPSS dosyanız, kimliksizleştirilmiş halde. Eksik ve dağınık olması sorun değil; temizliği biz üstleniriz.",
            },
            {
              title: "Ölçek bilgileri",
              description:
                "Kullandığınız ölçeklerin adı, alt boyutları, ters kodlanan maddeleri ve puanlama yönergesi.",
            },
            {
              title: "Takvim ve format",
              description:
                "Savunma/teslim tarihiniz ve enstitünüzün tez yazım kılavuzu; tablolar buna göre hazırlanır.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Etik sınır ve biz nerede duruyoruz",
          body: [
            "Analiz desteği almak akademide yaygın ve kabul gören bir uygulamadır; sınır ise nettir: veri gerçek ve size ait olmalı, yöntemi anlamalı ve savunabilmelisiniz. Bu yüzden iyi bir rapor sonucun yanında her yöntem seçiminin gerekçesini de yazar.",
            "GetBayes bu seçeneklerden biridir: hemşirelik tezlerinde ön test-son test karşılaştırmaları ve ANCOVA, ölçek güvenirliği ve uyarlama analizleri, korelasyon ve regresyon modelleri çalışır; sonuçları hemşirelik dergilerinin beklediği formatta, etki büyüklüğü ve güven aralıklarıyla raporlarız. Analizin kendisi çoğunlukla 15 dakika sürer; teslim aynı gün, çoğu zaman saatler hatta dakikalar içindedir. Danışman, jüri veya hakem kaynaklı revizyonlar ücretsizdir ve teslimden sonra sorularınızı yanıtlamaya devam ederiz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Ön test-son test verimi hangi analizle çözmeliyim?",
          answer:
            "Kontrol grubu varsa ve gruplar ön testte benzer başlamışsa karma (grup x zaman) ANOVA da ANCOVA da kullanılabilir; gruplar ön testte farklı başlamışsa ön testi kovaryat alan ANCOVA genelde daha doğru cevabı verir. Yalnızca her grubun kendi içindeki ön-son test farkına bakmak, grupları karşılaştırmadığı için tek başına yetersizdir. Bu dört yolun karşılaştırmasını ayrıntılı anlattığımız bir ANCOVA rehberimiz var.",
        },
        {
          question: "Ölçek uyarlama çalışmam için ayrıca izin gerekiyor mu?",
          answer:
            "İstatistikten önce gelen bir adım bu: ölçeği geliştiren yazardan kullanım (ve uyarlama yapıyorsanız uyarlama) izni almanız gerekir, birçok enstitü bu yazışmayı tez ekinde ister. İstatistik tarafında ise yapı geçerliği için faktör analizi, güvenirlik için Cronbach alfa/McDonald omega ve ölçüt geçerliği için ilişkili bir ölçekle korelasyon beklenir.",
        },
        {
          question: "Örneklemim küçük, analiz yapılabilir mi?",
          answer:
            "Evet, ama yöntem buna göre seçilir. Küçük örneklemlerde normallik varsayımı sık ihlal edilir ve nonparametrik testlere geçilir; ayrıca gücün sınırlı olduğu raporda dürüstçe belirtilir. Anlamsız çıkan bir sonucun \"örneklem yetersizliği\" ile açıklanması, jüri tarafından uydurma bir gerekçeden çok daha iyi karşılanır.",
        },
        {
          question: "Çalıştığım kurumun verisini paylaşabilir miyim?",
          answer:
            "Kimliksizleştirilmiş veri paylaşın: hasta veya çalışan adı, kimlik numarası ve kurum bilgisi analiz için gerekmez. GetBayes'te veriniz yalnızca sizin çalışmanız için kullanılır, üçüncü kişilerle paylaşılmaz ve en geç son teslimden 90 gün sonra otomatik silinir; her zaman daha erken silinmesini isteyebilirsiniz.",
        },
        {
          question: "Verim eksik ve dağınık, önce düzeltmem mi gerekir?",
          answer:
            "Hayır. \"Düzeltip öyle gelin\" demiyoruz; sorunları tek tek gösterip düzeltebileceğimizi kendimiz düzeltir, veriyi temizler ve neyin nasıl ele alındığını raporda yazarız. Yalnızca gerçekten sizin karar vermeniz gereken noktaları size sorarız.",
        },
        {
          question: "Fiyatı ve süreyi önceden öğrenebilir miyim?",
          answer:
            "Evet. Verinizi ve tasarımınızı gönderdiğinizde 24 saat içinde ücretsiz ön değerlendirme yapar, hangi analizlerin gerektiğini ve net fiyatı yazılı olarak bildiririz. Fiyat teslim hızına ve revizyon sayısına göre değişmez; iş ortasında da değişmez.",
        },
      ],
      cta: {
        heading: "Hemşirelik tezinizin analizi için ön değerlendirme alın",
        text: "Tasarımınızı, verinizi ve ölçek bilgilerinizi gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili rehberler ve hizmetler",
    },
    en: {
      metaTitle: "Where to Get Nursing Thesis Statistics Done | GetBayes",
      metaDescription:
        "Who should analyse your nursing thesis data? Channels compared, the questions to ask about pretest-posttest and scale studies, red flags, and market price ranges.",
      headline: "Where Should You Get Your Nursing Thesis Analysed?",
      lead: [
        "You have four realistic options for the statistics in a nursing thesis: a faculty member who teaches statistics in your school, your university's consulting unit if it has one, an individual freelance statistician, or an analysis service such as GetBayes. And the question that decides the choice is nearly always the same one: if you are measuring the effect of an intervention (an education programme, a care protocol, a pain management practice) with a pretest-posttest design, **there are four different ways to analyse that data and they do not give the same answer.** Whoever you speak to, ask which one they will use and why; \"we'll compare the posttest scores\" is not a sufficient answer on its own.",
        "Below are the trade-offs of each channel, the questions to ask, the warning signs, and price ranges compiled from public listings. GetBayes is one of these options and a paid service — we say plainly what we do at the end of the page.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and PhD nursing students working on a thesis",
          "Researchers measuring an intervention's effect with a pretest-posttest design",
          "Anyone collecting cross-sectional data with burnout, job satisfaction or self-efficacy scales",
          "Researchers running a scale adaptation or validity-reliability study",
          "Midwifery, physiotherapy, nutrition and other health sciences researchers using similar designs",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "The one decision that shapes a nursing thesis",
          body: [
            "In an intervention study you hold two measurements — pretest and posttest — usually with a control group as well. There are four common ways to analyse that data: compare posttest scores only, test the pre-post change within each group separately, compute and compare gain scores, run a mixed (group x time) ANOVA, or run ANCOVA with the pretest as a covariate. Any of them can return \"significant\" or \"non-significant,\" and the right choice depends on your design.",
            "The most common mistake is looking at the within-group pre-post change separately in each arm and concluding \"it was significant in the intervention group and not in the control, therefore the intervention worked.\" That never compares the groups to each other, and it is the first thing a committee asks about. When groups start out different at pretest, ANCOVA usually gives the more defensible answer. Whoever runs your analysis, hear the reasoning behind this choice before work starts.",
          ],
        },
        {
          type: "table",
          heading: "Where you can get the analysis done",
          columns: ["Channel", "Strength", "Weakness", "Typical turnaround"],
          rows: [
            [
              "Faculty member who teaches statistics",
              "Knows what nursing theses require and the formatting rules; usually free",
              "Heavy teaching and supervision load; you queue, and asking for revisions gets awkward",
              "Weeks, sometimes open-ended",
            ],
            [
              "University consulting unit",
              "Institutional credibility, strong methodological justification",
              "Not every university has one; scope is often limited to advice, leaving you to run the analysis",
              "2-6 weeks",
            ],
            [
              "Individual / freelance statistician",
              "Flexible, negotiable, direct contact",
              "Quality varies widely; may lack experience with scale scoring and pretest-posttest designs, and revision or confidentiality terms are rarely in writing",
              "3 days - 2 weeks",
            ],
            [
              "Professional analysis service (like GetBayes)",
              "Written fixed quote, standardised reporting, free revisions and post-delivery Q&A",
              "Paid; with a zero budget and plenty of time, learning it yourself may fit better",
              "Analysis in 15 minutes, same-day delivery",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Seven questions to ask before you commit",
          items: [
            "**How will you analyse my pretest-posttest data, and why?** Mixed ANOVA, ANCOVA or gain scores — and what happens if the groups differ at baseline. An answer without reasoning leaves you exposed at the defence.",
            "**Who computes the scale scores?** Reverse-coded items, subscale totals and cut-off points: one error here invalidates the entire analysis.",
            "**Will you report reliability in my own sample?** Citing the original study's alpha is not enough; Cronbach's alpha from your data (and per subscale) belongs in the report.",
            "**What will you do if my sample is small?** With nurses from a single unit or patients in one diagnostic group, normality is often violated; you should hear the nonparametric alternatives (Wilcoxon, Mann-Whitney, Kruskal-Wallis) named.",
            "**If we run many correlations, how will that be reported?** Scanning dozens of variables and writing up only the significant ones manufactures false positives; hypothesis-driven relationships should be separated from exploratory ones.",
            "**Will effect sizes be reported?** \"A significant difference was found\" says nothing about magnitude; nursing journals expect Cohen's d, eta squared or a comparable measure.",
            "**What happens if my advisor or committee asks for more analyses?** The scope and cost of revisions should be agreed in writing up front.",
          ],
        },
        {
          type: "bullets",
          heading: "Red flags",
          items: [
            "**A promise that results will come out significant.** It cannot be promised; promising it means a result is being hunted for. An intervention that shows no effect is still a valid, publishable finding.",
            "**Concluding \"the intervention worked\" without ever comparing the groups.** Testing within-group change in each arm separately is not a group comparison.",
            "**Leaving scale scoring to you and analysing the data as it arrives.** A scale with reverse-coding missed produces results that look coherent and are wrong.",
            "**A firm price quoted without seeing the data.** A number given before the scope is understood tends to grow mid-project.",
            "**No written confidentiality commitment.** De-identify patient or staff data before sending; names, IDs and institution details are not needed for analysis.",
            "**An offer to \"write the thesis too.\"** Analysis support has a clear boundary; beyond it lies an academic integrity problem.",
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
              "Descriptive statistics + basic comparisons",
              "$300 - $600 per project",
              "Narrow-scope cross-sectional studies",
            ],
            [
              "Pretest-posttest + scale reliability + correlation/regression",
              "$600 - $1,000 per project",
              "Where a typical nursing master's thesis lands",
            ],
            [
              "Advanced (scale adaptation with EFA+CFA, mixed models, mediation)",
              "$1,000 - $1,500+ per project",
              "Scale development and multivariate model theses",
            ],
            [
              "Rush delivery surcharge",
              "Common across the market",
              "At GetBayes urgency never changes the price, and revisions are free",
            ],
          ],
        },
        {
          type: "steps",
          heading: "What to send in your first message",
          steps: [
            {
              title: "Design",
              description:
                "Intervention study or cross-sectional; whether there is a control group, and at how many time points measurements were taken.",
            },
            {
              title: "The dataset",
              description:
                "Your Excel or SPSS file, de-identified. Missing values and messy coding are not a problem — cleaning is part of the job.",
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
          heading: "The ethical line, and where we stand",
          body: [
            "Analysis support is common and accepted in academia, and the boundary is clear: the data must be real and yours, and you must understand and be able to defend the methods. That is why a good report states the justification for every method choice alongside the result.",
            "GetBayes is one of the options above: for nursing theses we run pretest-posttest comparisons and ANCOVA, scale reliability and adaptation analyses, and correlation and regression models, reported in the format nursing journals expect with effect sizes and confidence intervals. The analysis itself usually takes 15 minutes; delivery is same-day, often within hours or even minutes. Revisions driven by an advisor, committee or reviewer are free, and we keep answering questions after delivery.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Which analysis should I use for pretest-posttest data?",
          answer:
            "With a control group and comparable baseline scores, either a mixed (group x time) ANOVA or ANCOVA works; when groups differ at pretest, ANCOVA with the pretest as covariate usually gives the more defensible answer. Looking only at the within-group pre-post change in each arm is insufficient on its own, because it never compares the groups. We have a full ANCOVA guide that compares all four approaches.",
        },
        {
          question: "Do I need permission for a scale adaptation study?",
          answer:
            "This step comes before any statistics: you need the original author's permission to use (and, for an adaptation, to adapt) the instrument, and many institutions want that correspondence in the thesis appendix. On the statistical side, construct validity calls for factor analysis, reliability for Cronbach's alpha or McDonald's omega, and criterion validity for a correlation with a related instrument.",
        },
        {
          question: "My sample is small — can it still be analysed?",
          answer:
            "Yes, but the method is chosen accordingly. Small samples often violate normality, which moves you to nonparametric tests, and the limited power is stated honestly in the report. A null result explained by limited power reads far better to a committee than an invented rationale.",
        },
        {
          question: "Can I share data from the institution where I work?",
          answer:
            "Share de-identified data: patient or staff names, ID numbers and institution details are not needed for analysis. At GetBayes your data is used only for your study, never shared with third parties, and automatically deleted no later than 90 days after final delivery — you can always request earlier deletion.",
        },
        {
          question: "My data is incomplete and messy — should I fix it first?",
          answer:
            "No. We don't send data back with \"fix this and come again.\" We pinpoint each issue, fix what can be fixed on our side, clean the dataset and document in the report how everything was handled. We only come back to you for decisions that are genuinely yours.",
        },
        {
          question: "Can I know the price and timeline in advance?",
          answer:
            "Yes. Send your data and design and within 24 hours you get a free assessment stating which analyses are needed and a clear written price. The price does not change with delivery speed or the number of revisions, and it does not change mid-project.",
        },
      ],
      cta: {
        heading: "Get a free assessment for your nursing thesis",
        text: "Send your design, data and scale details — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related guides and services",
    },
  },
};

export default nursingFindService;
