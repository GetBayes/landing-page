import type { Topic } from "../types";

const analysisProcessCase: Topic = {
  key: "analysis-process-case",
  kind: "guide",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  related: ["about-us", "reliability-analysis", "health-use-cases", "biostatistics"],
  locales: {
    tr: {
      metaTitle: "Bir Analiz Projesi Baştan Sona Nasıl İlerler? | GetBayes",
      metaDescription:
        "Veriyi gönderdikten teslimata kadar gerçekte ne oluyor? Kurgusal bir fizyoterapi güvenilirlik çalışması üzerinden adım adım süreç: veri denetimi, analiz planı, raporlama.",
      headline: "Bir Analiz Projesi Baştan Sona Nasıl İlerler?",
      lead: [
        "\"Veriyi gönderdim, şimdi ne oluyor?\" sorusunun cevabı çoğu yerde belirsiz kalır. Burada, kurgusal bir örnek üzerinden — bir fizyoterapi kliniğinde diz hareket açıklığı ölçümlerinin gözlemciler arası güvenilirliğini test eden bir çalışma üzerinden — sürecin her adımını gösteriyoruz: veri geldiğinde ne yapıyoruz, analiz planını nasıl kuruyoruz, raporu nasıl hazırlıyoruz.",
        "Örnekteki kurum, katılımcılar ve sayılar kurgusaldır; amaç belirli bir vakayı değil, GetBayes'in her projede izlediği adımları göstermektir.",
      ],
      audience: {
        heading: "Bu örnek kime fikir verir?",
        items: [
          "Verisini göndermeden önce sürecin nasıl işleyeceğini merak edenler",
          "Gözlemciler arası/gözlemci içi güvenilirlik (ICC, kappa) raporlaması gereken araştırmacılar",
          "\"Veriyi teslim edince süreç bitiyor mu?\" diye soranlar",
          "Daha önce analiz sürecinde şeffaflık eksikliği yaşamış araştırmacılar",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "1. Neyi ölçtüğümüzü netleştirdik",
          body: [
            "Araştırmacı, diz protezi sonrası rehabilitasyon gören 96 hastada, iki fizyoterapistin goniometre ile ölçtüğü diz fleksiyon açısı değerlerinin ne kadar tutarlı olduğunu raporlamak istiyordu; dergi ayrıca gözlemci içi tekrarlanabilirlik istiyordu. Hedef bir fizyoterapi dergisine yayın; dolayısıyla rapor standardı yayın düzeyinde olmalıydı.",
            "İlk görüşmede netleştirdiğimiz noktalar: hangi ölçümün birincil sonlanım noktası olduğu (gözlemciler arası ICC), hangi alt kümenin gözlemci içi güvenilirlik için ayrılacağı (%20'lik rastgele bir alt grup, bir hafta sonra aynı gözlemci tarafından tekrar ölçülecek) ve raporun hangi kılavuza göre yazılacağı (güvenilirlik çalışmaları için GRRAS tarzı raporlama).",
          ],
        },
        {
          type: "bullets",
          heading: "2. Veriyi denetledik",
          intro: "Veri elimize geçtiğinde önce bir denetimden geçiyor — 'veriniz hatalı, gidin düzeltin' demiyoruz, sorunu tam olarak tespit edip düzeltebildiğimizi kendimiz düzeltiyoruz.",
          items: [
            "4 kayıtta açı birimi derece yerine yanlışlıkla radyan girilmişti — kaynak formla karşılaştırılarak düzeltildi",
            "3 hastada yaş bilgisi eksikti; hastane kayıt numarasından hastane sistemine dönülerek tamamlandı",
            "Aynı komplikasyon türü dosyada 3 farklı şekilde yazılmıştı (\"enfeksiyon\", \"enf.\", \"yara yeri enfeksiyonu\") — tek kategoriye standardize edildi",
            "Ham veri dosyası olduğu gibi saklandı; tüm düzeltmeler ayrı bir 'temizlenmiş veri' kopyasında, hangi satırın neden değiştiğini gösteren bir kayıtla birlikte yapıldı",
          ],
        },
        {
          type: "steps",
          heading: "3. Analiz planından teslime",
          steps: [
            {
              title: "Analiz planını yazılı hâle getirdik",
              description:
                "Hangi ICC modelinin (iki yönlü rastgele etkiler, mutlak uyum) kullanılacağı, hangi güven aralığı yönteminin raporlanacağı ve hastaların bir kısmında her iki dizin de ölçülmüş olmasının (bağımsızlık ihlali) nasıl ele alınacağı — karma etkili model ile — analiz başlamadan önce yazıya döküldü ve araştırmacıya onaylatıldı.",
            },
            {
              title: "Analizi çalıştırdık",
              description:
                "Varsayım kontrolleri (normallik, ölçüm hatasının gruplar arasında homojenliği) önce yapıldı. Gözlemciler arası ICC 0,84 (%95 GA: 0,76–0,89) olarak bulundu; gözlemci içi ICC alt grupta 0,91 (%95 GA: 0,82–0,96) olarak hesaplandı — ikisi de %95 güven aralığı ve model tipiyle birlikte raporlandı.",
            },
            {
              title: "Raporu hazırladık",
              description:
                "Sonuçlar GRRAS önerilerine uygun biçimde: örneklem tanımı, ölçüm koşulları, ICC modeli ve tipi, güven aralıkları ve Bland-Altman uyum grafiğiyle birlikte yazıldı. Her yöntem seçiminin gerekçesi metne işlendi.",
            },
            {
              title: "Kalite kontrolünden geçirdik",
              description:
                "Rapor teslim edilmeden önce tablolar, sayılar ve şekiller kaynak analiz çıktısıyla tek tek karşılaştırıldı; Türkçe karakterler ve biçimlendirme kontrol edildi.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "4. Teslim ettik, sürecin devamında yanında kaldık",
          body: [
            "Rapor teslim edildikten sonra araştırmacı dergiye başvurdu; hakem, ek olarak Bland-Altman grafiğindeki sınırların yorumlanmasını ve bir tabloya ölçüm birimi netliği eklenmesini istedi. Danışman veya hakem geri bildirimiyle gelen bu tür revizyonlar her zaman ücretsizdir — ayrı bir teklif çıkarmadık, aynı gün güncelleyip gönderdik. Kapsam gerçekten değişmediği sürece, süreç boyunca ek taleplerde de araştırmacıyla birlikte çözüm buluyoruz; amacımız savunmaya veya yayına siz hazır çıkana kadar yanınızda olmak.",
            "Proje verisi, gerçek teslimatlarımızda olduğu gibi yalnızca bu çalışma için kullanıldı, üçüncü kişilerle paylaşılmadı ve teslimattan sonraki 90 gün içinde silindi.",
          ],
        },
      ],
      faqHeading: "Merak edilenler",
      faq: [
        {
          question: "Bu gerçek bir vaka mı?",
          answer:
            "Hayır, kurum ve tüm sayılar kurgusaldır. Amacı belirli bir çalışmayı değil, GetBayes'in her projede izlediği adımları göstermektir — gerçek projelerde aynı adımlar sizin verinizle uygulanır.",
        },
        {
          question: "Bu süreç her projede aynı mı işliyor?",
          answer:
            "Adımların sırası aynı: netleştirme, veri denetimi, yazılı analiz planı, analiz, raporlama, kalite kontrolü, teslimat ve revizyon. Her adımın ne kadar süreceği çalışmanın büyüklüğüne ve verinin durumuna göre değişir; küçük ve temiz bir veri seti bu adımları saatler içinde tamamlar.",
        },
        {
          question: "Veri denetiminde bir sorun bulursanız ne oluyor?",
          answer:
            "Düzeltebildiğimiz sorunları (kodlama hataları, birim karışıklıkları, eksik alanların kaynaktan tamamlanması gibi) kendimiz düzeltiyoruz ve hangi değişikliği neden yaptığımızı kaydediyoruz. Düzeltemeyeceğimiz veya sizin karar vermeniz gereken bir durum varsa (örneğin dışlama kriteri), size soruyoruz — asla tahmin ederek doldurmuyoruz.",
        },
        {
          question: "Analiz planı onaylandıktan sonra değişebilir mi?",
          answer:
            "Evet, ama her değişiklik (yeni bir test, bırakılan bir model, alternatif bir düzeltme) gerekçesiyle birlikte kaydedilir ve raporda şeffaf biçimde belirtilir — sessizce değiştirilen hiçbir yöntem yoktur.",
        },
        {
          question: "Revizyon süreci ne zaman biter?",
          answer:
            "Danışman veya hakem geri bildirimiyle gelen revizyonlarda net bir üst sınır koymuyoruz; savunmaya veya kabul aşamasına kadar yanınızdayız. Kapsamı tamamen değiştiren yeni bir talep gelirse (örneğin yeni bir veri seti veya farklı bir araştırma sorusu), bunu ayrıca konuşuruz.",
        },
      ],
      cta: {
        heading: "Kendi veriniz için aynı süreci işletelim",
        text: "Çalışmanızı ve verinizi anlatın; ilk adım olan netleştirme görüşmesini 24 saat içinde ücretsiz ön değerlendirmeyle yapalım.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "How an Analysis Project Unfolds, Start to Finish | GetBayes",
      metaDescription:
        "What actually happens after you send your data? A fictional physiotherapy reliability study, walked through step by step: data audit, analysis plan, reporting, revisions.",
      headline: "How an Analysis Project Unfolds, Start to Finish",
      lead: [
        "\"I sent my data — now what?\" rarely gets a clear answer. Here we walk through every step using a fictional example: a physiotherapy study testing inter-rater reliability of knee range-of-motion measurements. What we do when data arrives, how we build the analysis plan, how the report gets written.",
        "The institution, participants and numbers in the example are fictional; the point isn't a specific case but the steps GetBayes follows on every project.",
      ],
      audience: {
        heading: "Who this example helps",
        items: [
          "Anyone wondering how the process will actually unfold before sending their data",
          "Researchers who need to report inter-rater/intra-rater reliability (ICC, kappa)",
          "Anyone asking \"does the process end once I hand over the data?\"",
          "Researchers who've had a frustratingly opaque analysis experience before",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "1. We clarified what was actually being measured",
          body: [
            "The researcher wanted to report how consistently two physiotherapists measured knee flexion angle with a goniometer in 96 post-arthroplasty rehab patients; the target journal also wanted intra-rater repeatability. The goal was publication in a physiotherapy journal, so the report had to meet publication standards.",
            "What we pinned down in the first conversation: which measurement was the primary endpoint (inter-rater ICC), which subset would be set aside for intra-rater reliability (a random 20%, re-measured by the same rater a week later), and which guideline the report would follow (GRRAS-style reporting for reliability studies).",
          ],
        },
        {
          type: "bullets",
          heading: "2. We audited the data",
          intro: "Once the data lands, it goes through an audit first — we don't say \"your data is broken, go fix it\"; we pinpoint the issue and fix what we can ourselves.",
          items: [
            "4 records had the angle entered in radians instead of degrees by mistake — corrected by cross-checking the source form",
            "3 patients were missing age — recovered from the hospital record system via the chart number",
            "The same complication type was recorded three different ways (\"infection\", \"inf.\", \"wound site infection\") — standardized into one category",
            "The raw file was kept untouched; every correction was applied to a separate \"cleaned data\" copy with a log of which row changed and why",
          ],
        },
        {
          type: "steps",
          heading: "3. From analysis plan to delivery",
          steps: [
            {
              title: "We wrote the analysis plan down",
              description:
                "Which ICC model (two-way random effects, absolute agreement) would be used, which confidence-interval method would be reported, and how to handle the fact that some patients had both knees measured (a non-independence issue) — via a mixed-effects model — were all written down and approved by the researcher before analysis started.",
            },
            {
              title: "We ran the analysis",
              description:
                "Assumption checks (normality, homogeneity of measurement error across groups) came first. Inter-rater ICC came out at 0.84 (95% CI: 0.76–0.89); intra-rater ICC in the subset was 0.91 (95% CI: 0.82–0.96) — both reported with their confidence interval and model type.",
            },
            {
              title: "We wrote the report",
              description:
                "Results followed GRRAS recommendations: sample description, measurement conditions, ICC model and type, confidence intervals, and a Bland-Altman agreement plot. The reasoning behind every method choice was written into the text.",
            },
            {
              title: "We ran quality control",
              description:
                "Before delivery, every table, number and figure was checked one by one against the source analysis output; formatting and language were checked line by line.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "4. We delivered, and stayed through what came next",
          body: [
            "After delivery, the researcher submitted to the journal; the reviewer asked for the Bland-Altman plot's limits to be interpreted and for one table to state its measurement unit more clearly. Revisions driven by advisor or reviewer feedback like this are always free — we didn't send a new quote, we updated it and sent it back the same day. As long as the scope genuinely hasn't changed, we work through additional requests together throughout the process too; the goal is staying with you until you're ready for the defense or the journal.",
            "Project data, as with every real delivery, was used solely for this study, was never shared with a third party, and was deleted within 90 days of delivery.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Is this a real case?",
          answer:
            "No, the institution and every number are fictional. Its purpose isn't a specific study but the steps GetBayes follows on every project — real projects follow the same steps with your own data.",
        },
        {
          question: "Does this process play out the same way on every project?",
          answer:
            "The order of the steps is fixed: clarify scope, audit the data, write the analysis plan, analyze, report, quality-check, deliver and support revisions. How long each step takes depends on the study's size and the data's condition — a small, clean dataset moves through these steps in hours.",
        },
        {
          question: "What happens if you find a problem during the data audit?",
          answer:
            "We fix what we can ourselves (coding errors, unit mix-ups, filling in missing fields from the source) and log what changed and why. If something can't be fixed by us or needs your call (an exclusion criterion, say), we ask — we never fill a gap with a guess.",
        },
        {
          question: "Can the analysis plan change after it's approved?",
          answer:
            "Yes, but every change — a new test, a dropped model, an alternate correction — is logged with its reason and stated transparently in the report. Nothing gets swapped silently.",
        },
        {
          question: "When does the revision process end?",
          answer:
            "For revisions driven by advisor or reviewer feedback, we don't put a hard cap on it — we stay with you through the defense or the journal decision. If a genuinely new request changes the scope (a new dataset, a different research question), we discuss that separately.",
        },
      ],
      cta: {
        heading: "Let's run the same process for your data",
        text: "Tell us about your study and data — we'll do the first clarifying step within 24 hours as a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default analysisProcessCase;
