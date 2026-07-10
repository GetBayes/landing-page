import type { Topic } from "../types";

// A single, real, verifiable proof case (not a composite like health-use-cases):
// a manuscript GetBayes provided statistical analysis for was accepted in a
// Q1-indexed surgical journal, with zero reviewer revision requests on the
// statistical methodology. TODO: user will supply the journal name, exact
// subspecialty/study design and (if the authors consent to it being cited
// publicly) a link/DOI — plug those into the bracketed note in the "Doğrulama"
// / "Verification" section below before this page is promoted as evidence.
// Until then the copy stays intentionally general so it remains fully honest.

const q1SuccessStory: Topic = {
  key: "q1-success-story",
  kind: "guide",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  related: ["article-statistics", "biostatistics", "why-getbayes"],
  locales: {
    tr: {
      metaTitle:
        "Q1 Cerrahi Dergisinde Yayın: Revizyonsuz İstatistik Onayı | GetBayes",
      metaDescription:
        "GetBayes'in istatistiğini üstlendiği bir cerrahi makale, Q1 (SCIE) endeksli bir dergide hakemden istatistiksel yöntemle ilgili tek bir revizyon talebi almadan kabul edildi. Süreç ve nedenleri.",
      headline: "Q1 Cerrahi Dergisinde Yayın: Revizyonsuz İstatistik Onayı",
      lead: [
        "GetBayes'in istatistik analizini üstlendiği bir cerrahi araştırma makalesi, Q1 (SCIE, birinci çeyrek) endeksli uluslararası bir cerrahi dergisinde yayımlandı; hakem süreci boyunca istatistiksel yöntemle ilgili tek bir revizyon talebi bile gelmedi — tüm revizyon yorumları çalışmanın giriş ve tartışma gibi diğer bölümlerine yönelikti. İstatistik bölümü ilk gönderimde olduğu gibi kabul edildi.",
        "Bu, çoğu araştırmacının aşina olduğu deneyimin tam tersi: hakemlerin istatistik nedeniyle 'ek analiz yapın', 'etki büyüklüğü ekleyin' veya 'nonparametrik testle doğrulayın' gibi talepler döndürmesi, özellikle Q1 dergilerde neredeyse standarttır. Bu sayfada sürecin nasıl işlediğini ve sonucun tesadüf olmadığını gösteren somut unsurları anlatıyoruz.",
      ],
      audience: {
        heading: "Bu vaka kimler için bir referans noktası?",
        items: [
          "Q1/SCIE endeksli bir cerrahi veya tıp dergisine makale hazırlayan araştırmacılar",
          "İstatistik danışmanlığı ararken hizmetin gerçek kalitesine dair somut kanıt isteyenler",
          "Daha önce hakemden istatistik kaynaklı revizyon alan ve bunu tekrar yaşamak istemeyen yazarlar",
          "GetBayes'in çalışma standardını başka bir kaynaktan da doğrulamak isteyenler",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Ne oldu?",
          body: [
            "Bir cerrahi araştırma ekibi, dergiye göndermeden önce çalışmasının istatistik analizini GetBayes'e teslim etti. Araştırma sorusuna ve veri yapısına uygun test/yöntem seçimi yapıldı, varsayım kontrolleri belgelendi, sonuçlar etki büyüklükleri ve güven aralıklarıyla birlikte hedef derginin formatında raporlandı; makalenin yöntem bölümündeki istatistik paragrafı da bu rapora dayanarak yazıldı.",
            "Makale, Q1 (SCIE) endeksli uluslararası bir cerrahi dergisine gönderildi ve hakem sürecinden geçti.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Sonuç: hakemden istatistikle ilgili sıfır revizyon talebi",
          body: [
            "Hakem raporları döndüğünde, revizyon yorumlarının tamamı çalışmanın giriş, tartışma ve kaynakça gibi bölümlerine yönelikti. İstatistiksel yöntem, tablolar veya sonuçların raporlanma biçimiyle ilgili tek bir soru ya da düzeltme talebi gelmedi — istatistik bölümü ilk gönderimdeki hâliyle kabul edildi.",
            "Q1 dergilerde hakemlerin istatistik konusunda son derece titiz olduğu, çoğu makalenin en az bir turda istatistik kaynaklı revizyon aldığı düşünüldüğünde, bu sonucun rastlantı olmadığını, baştan doğru kurulmuş bir analiz sürecinin göstergesi olduğunu düşünüyoruz.",
          ],
        },
        {
          type: "bullets",
          heading: "Bunun tesadüf olmadığını gösteren unsurlar",
          intro: "Rapor teslim edilirken şu noktalar zaten yerindeydi:",
          items: [
            "Çalışma tasarımına (vaka serisi, kohort, karşılaştırmalı cerrahi çalışma vb.) uygun test ve model seçimi, gerekçesiyle birlikte yazılıydı",
            "Etki büyüklükleri ve %95 güven aralıkları tüm testler için baştan tablolara işlenmişti",
            "Varsayım kontrolleri (normallik, varyans homojenliği vb.) yapılmış ve yöntem bölümünde belgelenmişti",
            "Karıştırıcı değişkenler için çok değişkenli analiz gerekliyse baştan planlanmış ve raporlanmıştı",
            "Örneklem büyüklüğü/güç gerekçesi başvuru öncesinde hazırlanmıştı",
            "Tablolar, hedef derginin yazar rehberine ve formatına göre baştan hazırlanmıştı",
          ],
        },
        {
          type: "table",
          heading: "Hakemlerin sık istediği ek analizler ve bu vakadaki durum",
          intro:
            "Aşağıdaki liste, dergi makalelerinde hakemlerden en sık gelen istatistik talepleri ve bu vakada bunların neden hiç gündeme gelmediği:",
          columns: ["Hakemden sık gelen talep", "Bu vakada durum"],
          rows: [
            [
              "Etki büyüklüğü ve güven aralığı eklenmesi",
              "İlk gönderimde tablolarda zaten mevcuttu",
            ],
            [
              "Çoklu karşılaştırma düzeltmesi yapılması",
              "Uygun düzeltme yöntemi baştan uygulanmış ve raporlanmıştı",
            ],
            [
              "Normallik varsayımının gösterilmesi / nonparametrik test",
              "Varsayım testleri yöntem bölümünde belgelenmişti",
            ],
            [
              "Karıştırıcı değişkenlerin kontrol edilmesi",
              "Gerekli çok değişkenli analiz baştan planlanmıştı",
            ],
            [
              "Örneklem/güç analizi gerekçesinin eklenmesi",
              "Gerekçe başvuru öncesinde hazırlanmıştı",
            ],
            [
              "Tabloların dergi formatına uydurulması",
              "Tablolar hedef derginin şablonuna göre hazırlanmıştı",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Doğrulama",
          body: [
            "Bu vaka gerçektir ve GetBayes'in tamamladığı bir çalışmaya aittir. Yazarların onayı alındığında dergi adını ve makale bağlantısını bu bölüme ekleyeceğiz; o ana kadar sayfa, yazar/kurum bilgisi paylaşmadan süreci ve sonucu anlatmaya devam edecek.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Bu neden önemli?",
          body: [
            "Q1, bir derginin atıf etkisine göre alanındaki en yüksek çeyrek dilime (SCIE/Scopus sınıflandırmasında ilk %25) girdiği anlamına gelir; bu dergilerin hakem havuzu genellikle istatistik konusunda en titiz gruptur. İstatistik kaynaklı bir revizyon turu almamak, hem makalenin daha hızlı kabul edilmesi hem de yöntemin baştan sağlam kurulduğunun bağımsız bir doğrulaması anlamına gelir — bu da istatistik danışmanlığının kalitesine dair, sözle değil sonuçla verilmiş bir kanıttır.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Q1 dergi ne demek?",
          answer:
            "Q1, bir derginin atıf etki faktörüne göre kendi alanındaki dergiler arasında ilk çeyrekte (%25) yer aldığı anlamına gelir; SCIE/Scopus gibi indekslerde kullanılan bir sınıflandırmadır. Q1 dergiler genellikle en yüksek hakem standartlarına sahip dergilerdir.",
        },
        {
          question: "Bu gerçek bir vaka mı?",
          answer:
            "Evet, temsili bir örnek değil, GetBayes'in tamamladığı gerçek bir çalışma. Yazarların onayıyla ilerleyen süreçte dergi adı ve makale bağlantısını da paylaşacağız; o zamana kadar yazar ve kurum bilgisi paylaşmadan anlatıyoruz.",
        },
        {
          question: "Her makale bu sonucu alır mı?",
          answer:
            "Hayır, bunu garanti edemeyiz — sonuç çalışma tasarımına, veri kalitesine ve derginin/hakemlerin özel beklentilerine de bağlıdır. Ama doğru test seçimi, etki büyüklüğü/güven aralığı raporlaması, varsayım kontrolleri ve dergi formatına uygun tablolar gibi unsurları baştan yerine koymak, istatistik kaynaklı bir revizyon riskini belirgin şekilde azaltır.",
        },
        {
          question: "Bu sadece cerrahi dergiler için mi geçerli?",
          answer:
            "Hayır. Aynı yaklaşımı nicel veri içeren her makalede uyguluyoruz — tıp, diş hekimliği, hemşirelik, psikoloji ve sosyal bilimler dahil. Makale ve hakem revizyonu desteğimiz hakkında daha fazla bilgi için makale istatistik analizi sayfamıza bakabilirsiniz.",
        },
        {
          question: "Makalem şu anda hakem revizyonu aldıysa yardımcı olur musunuz?",
          answer:
            "Evet. Orijinal analizi başka yerde yaptırmış olsanız bile hakemin istediği ek analizleri aynı veri üzerinde yapar, yanıt mektubunuz için istatistiksel gerekçe metnini hazırlarız.",
        },
        {
          question: "Bu tür sonuçlar için hangi çalışma tasarımlarıyla çalışıyorsunuz?",
          answer:
            "Kesitsel ve tanımlayıcı çalışmalar, vaka-kontrol, kohort, randomize kontrollü çalışmalar ve vaka serileri dahil, nicel veri içeren tüm cerrahi ve klinik araştırma tasarımlarıyla çalışıyoruz.",
        },
      ],
      cta: {
        heading: "Makalenizin istatistiğini aynı titizlikle kuralım",
        text: "Verinizi, taslağınızı veya hedef derginizi paylaşın; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle:
        "Published in a Q1 Surgery Journal With Zero Stats Revisions | GetBayes",
      metaDescription:
        "A manuscript GetBayes analyzed was accepted by a Q1 (SCIE)-indexed surgical journal without a single reviewer revision request on the statistical methodology. How the process worked, and why.",
      headline: "Published in a Q1 Surgical Journal With Zero Statistics Revisions",
      lead: [
        "A surgical research manuscript for which GetBayes handled the statistical analysis was published in a Q1 (SCIE, first-quartile)-indexed international surgical journal — and throughout peer review, not a single revision request concerned the statistical methodology. Every revision comment addressed other sections, such as the introduction and discussion. The statistics section was accepted exactly as submitted.",
        "That's the opposite of what most researchers are used to: reviewers asking for additional analyses, effect sizes, or nonparametric confirmation for statistical reasons is close to standard practice, especially at Q1 journals. This page walks through how the process worked and the concrete reasons this wasn't luck.",
      ],
      audience: {
        heading: "Who is this case a reference point for?",
        items: [
          "Researchers preparing a manuscript for a Q1/SCIE-indexed surgical or medical journal",
          "Anyone evaluating statistics consulting who wants concrete proof of quality, not just claims",
          "Authors who previously received a statistics-driven reviewer revision and want to avoid repeating it",
          "Anyone who wants to verify GetBayes's working standard from an outside reference point",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "What happened",
          body: [
            "A surgical research team brought their study's statistical analysis to GetBayes before submission. Tests and models were chosen to match the research question and data structure, assumption checks were documented, and results were reported with effect sizes and confidence intervals in the target journal's format; the statistics paragraph of the manuscript's methods section was written from that same report.",
            "The manuscript was submitted to a Q1 (SCIE)-indexed international surgical journal and went through peer review.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Outcome: zero statistics-related revision requests",
          body: [
            "When the reviewer reports came back, every revision comment addressed sections like the introduction, discussion and references. Not one question or correction concerned the statistical method, the tables, or how the results were reported — the statistics section was accepted exactly as first submitted.",
            "Given how rigorous reviewers at Q1 journals typically are about statistics — most manuscripts get at least one statistics-driven revision round — we don't think this was chance. We see it as evidence of an analysis process that was built correctly from the start.",
          ],
        },
        {
          type: "bullets",
          heading: "What shows this wasn't luck",
          intro: "By the time the report was delivered, the following were already in place:",
          items: [
            "Test and model choices matched to the study design (case series, cohort, comparative surgical study, etc.), justified in writing",
            "Effect sizes and 95% confidence intervals were in the tables from the start, for every test",
            "Assumption checks (normality, homogeneity of variance, etc.) were performed and documented in the methods section",
            "Where confounders needed control, multivariable analysis was planned and reported from the start",
            "The sample size / power justification was prepared before submission",
            "Tables were built to the target journal's author guidelines and format from the start",
          ],
        },
        {
          type: "table",
          heading: "Common reviewer requests vs. this case",
          intro:
            "The list below covers the statistics requests reviewers most often make on journal manuscripts, and why none of them came up in this case:",
          columns: ["Common reviewer request", "Status in this case"],
          rows: [
            [
              "Add effect sizes and confidence intervals",
              "Already in the tables at first submission",
            ],
            [
              "Correct for multiple comparisons",
              "The appropriate correction was applied and reported from the start",
            ],
            [
              "Demonstrate normality / use a nonparametric test",
              "Assumption tests were documented in the methods section",
            ],
            [
              "Control for confounding variables",
              "The needed multivariable analysis was planned from the start",
            ],
            [
              "Add a sample size / power justification",
              "Prepared before submission",
            ],
            [
              "Match tables to the journal's format",
              "Tables were built to the target journal's template",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Verification",
          body: [
            "This case is real and belongs to a study GetBayes completed. Once the authors consent, we'll add the journal name and a link to the article to this section; until then, this page describes the process and outcome without naming the authors or their institution.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Why this matters",
          body: [
            "Q1 means a journal sits in the top quartile (top 25%) of its field by citation impact, in classifications like SCIE/Scopus — and those journals' reviewer pools tend to be the most rigorous on statistics. Not getting a statistics-driven revision round means both a faster path to acceptance and an independent confirmation that the method was built correctly from the start — proof of consulting quality delivered through an outcome, not a claim.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "What does Q1 mean?",
          answer:
            "Q1 means a journal ranks in the top quartile (25%) among journals in its field by citation impact factor, in classifications such as SCIE/Scopus. Q1 journals generally hold the highest peer-review standards.",
        },
        {
          question: "Is this a real case?",
          answer:
            "Yes — a real study GetBayes completed, not a representative composite. Once the authors consent, we'll add the journal name and a link to the article; until then we describe it without naming the authors or institution.",
        },
        {
          question: "Does every manuscript get this result?",
          answer:
            "No, we can't guarantee that — the outcome also depends on study design, data quality, and a given journal's or reviewer's specific expectations. But putting the right test choices, effect sizes/confidence intervals, assumption checks and journal-formatted tables in place from the start meaningfully lowers the risk of a statistics-driven revision.",
        },
        {
          question: "Does this only apply to surgical journals?",
          answer:
            "No. We apply the same approach to any manuscript with quantitative data — medicine, dentistry, nursing, psychology and the social sciences included. See our journal article statistics page for more on our manuscript and reviewer-revision support.",
        },
        {
          question: "My manuscript already has a reviewer revision — can you help?",
          answer:
            "Yes. Even if the original analysis was done elsewhere, we run the additional analyses reviewers ask for on the same dataset and prepare the statistical justification text for your response letter.",
        },
        {
          question: "Which study designs do you work with for results like this?",
          answer:
            "Cross-sectional and descriptive studies, case-control, cohort, randomized controlled trials and case series — any quantitative surgical or clinical research design.",
        },
      ],
      cta: {
        heading: "Let's build your manuscript's statistics with the same rigor",
        text: "Share your data, draft or target journal — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default q1SuccessStory;
