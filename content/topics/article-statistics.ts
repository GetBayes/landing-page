import type { Topic } from "../types";

const articleStatistics: Topic = {
  key: "article-statistics",
  kind: "service",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  serviceType: "Journal Article Statistical Analysis",
  related: ["q1-success-story", "thesis-statistics", "spss-analysis", "sample-report"],
  locales: {
    tr: {
      metaTitle: "Makale İstatistik Analizi — Dergi ve Revizyon Desteği | GetBayes",
      metaDescription:
        "Dergiye gönderilecek makaleler için istatistik analizi: dergi formatında tablolar, etki büyüklükleri, yöntem bölümü metni ve hakem revizyonu desteği. Hızlı teslim.",
      headline: "Makale ve Yayın İçin İstatistik Analizi",
      lead: [
        "Dergiye gönderilecek makaleniz için istatistik analizini üstleniyoruz: verinize uygun testleri seçip çalıştırır, sonuçları hedef derginizin formatına uygun tablolar ve grafiklerle raporlar, makalenizin yöntem ve bulgular bölümlerine doğrudan aktarabileceğiniz istatistik metnini hazırlarız — analizin kendisi çoğunlukla 15 dakika sürer, teslim aynı gün, çoğu zaman saatler hatta dakikalar içinde yapılır.",
        "Hakem sürecinde de yanınızdayız: 'ek analiz yapın', 'etki büyüklüklerini raporlayın', 'nonparametrik testle doğrulayın' gibi revizyon talepleri geldiğinde aynı veri üzerinde gerekli analizleri yapar, hakem yanıt mektubunuz için istatistiksel gerekçeleri yazarız.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Ulusal veya uluslararası dergiye makale hazırlayan akademisyenler",
          "Hakemden istatistik kaynaklı 'major/minor revision' alan yazarlar",
          "Tezinden makale üreten yüksek lisans ve doktora mezunları",
          "Vaka serisi, kesitsel çalışma veya klinik araştırma raporlayan hekimler",
          "Kongre bildirisi için hızlı ve doğru analiz gereken araştırmacılar",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          steps: [
            {
              title: "Makale taslağınızı ve verinizi paylaşın",
              description:
                "Veri setinizi, araştırma sorularınızı ve varsa hedef dergiyi/yazım kurallarını iletin. Hakem revizyonuysa hakem raporunu da ekleyin.",
            },
            {
              title: "Analiz planı",
              description:
                "Çalışma tasarımınıza (kesitsel, vaka-kontrol, kohort, deneysel) uygun istatistik planını çıkarır, sizinle netleştiririz.",
            },
            {
              title: "Analiz ve dergi formatında rapor",
              description:
                "Analizler yapılır; tablolar hedef derginin formatında, p-değerleri ve etki büyüklükleri raporlama standartlarına uygun hazırlanır.",
            },
            {
              title: "Yöntem metni ve destek",
              description:
                "Makalenin istatistiksel analiz paragrafını yazar, bulguların yorumunda ve hakem yanıtlarında destek veririz.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Hakem revizyonlarında en sık çözdüğümüz talepler",
          items: [
            "“Etki büyüklükleri ve güven aralıkları eklenmeli” — tüm testler için hesaplanır ve tablolara işlenir",
            "“Çoklu karşılaştırma düzeltmesi yapılmalı” — Bonferroni, Holm veya FDR düzeltmeleri uygulanır",
            "“Normallik varsayımı gösterilmeli / nonparametrik test kullanılmalı” — varsayım testleri raporlanır, gerekirse analiz tekrarlanır",
            "“Karıştırıcı değişkenler kontrol edilmeli” — çok değişkenli regresyon veya kovaryans analizi eklenir",
            "“Güç analizi / örneklem gerekçesi eksik” — post-hoc güç ve örneklem gerekçesi yazılır",
            "“Tablolar dergi formatına uymuyor” — tablolar hedef derginin şablonuna göre yeniden düzenlenir",
          ],
        },
        {
          type: "paragraphs",
          heading: "Dergi standartlarına uygun raporlama",
          body: [
            "Dergilerin istatistik beklentisi son yıllarda belirgin şekilde yükseldi: yalnızca p-değeri raporlamak artık yeterli değil; etki büyüklüğü, güven aralığı, varsayım kontrolleri ve analiz yazılımının sürümü isteniyor. Raporlarımız bu standartlara göre hazırlanır — APA 7, CONSORT/STROBE benzeri raporlama kılavuzlarının istatistik maddeleri ve hedef derginizin yazar rehberi dikkate alınır. Amaç, makalenizin istatistik nedeniyle hakemden dönmemesidir.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Makalenin istatistik bölümünü siz mi yazıyorsunuz?",
          answer:
            "Yöntem bölümündeki istatistiksel analiz paragrafını ve bulguların istatistiksel raporunu hazırlıyoruz — hangi testlerin neden kullanıldığı, yazılım bilgisi ve anlamlılık düzeyi dahil. Makalenin bilimsel içeriği ve nihai metni size aittir.",
        },
        {
          question: "Hakem revizyonu için sadece ek analiz yaptırabilir miyim?",
          answer:
            "Evet. Analizini başka yerde yaptırmış olsanız bile hakem taleplerine yönelik ek analizleri yapıyor, yanıt mektubunuz için istatistiksel gerekçe metni hazırlıyoruz.",
        },
        {
          question: "Hangi çalışma tasarımlarıyla çalışıyorsunuz?",
          answer:
            "Kesitsel ve tanımlayıcı çalışmalar, vaka-kontrol, kohort, randomize kontrollü çalışmalar, ölçek geliştirme/uyarlama ve anket temelli araştırmalar — nicel veri içeren tüm tasarımlar.",
        },
        {
          question: "Teslim süresi ne kadar?",
          answer:
            "Analizin kendisi çoğunlukla 15 dakika sürer; teslim aynı gün, saatler hatta dakikalar içinde yapılır. Toplam süreyi eksik bilgi ve düzeltme gibi iteratif adımlar belirler — her aşamada bize yazabilirsiniz. Revizyon mektubu ve yöntem metni içeren kapsamlı paketlerde süreyi baştan netleştiririz; dergi son tarihlerine önceliklendirme yapabiliyoruz.",
        },
        {
          question: "Verilerim ve makalem gizli kalır mı?",
          answer:
            "Evet. Dosyalarınız yalnızca sizin analiziniz için kullanılır, üçüncü kişilerle paylaşılmaz ve talebiniz hâlinde teslimat sonrası silinir.",
        },
      ],
      cta: {
        heading: "Makalenizin istatistiğini güvenceye alın",
        text: "Verinizi, taslağınızı veya hakem raporunuzu gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Statistical Analysis for Journal Articles & Revisions | GetBayes",
      metaDescription:
        "Statistics for manuscripts: journal-formatted tables, effect sizes, methods-section text and reviewer revision support. Fast turnaround for submission deadlines.",
      headline: "Statistical Analysis for Journal Articles",
      lead: [
        "We handle the statistics for your manuscript: selecting and running the right tests for your data, reporting results with tables and figures in your target journal's format, and preparing the statistical text you can drop straight into your methods and results sections — the analysis itself usually takes 15 minutes, with same-day delivery, often within hours or even minutes.",
        "We also stay with you through peer review: when reviewers ask for additional analyses, effect sizes, or nonparametric confirmation, we run what's needed on the same dataset and write the statistical justifications for your response letter.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Academics preparing a manuscript for a national or international journal",
          "Authors who received a statistics-driven major/minor revision",
          "Graduates turning a thesis into a publication",
          "Physicians reporting case series, cross-sectional or clinical studies",
          "Researchers needing fast, correct analysis for a conference abstract",
        ],
      },
      sections: [
        {
          type: "steps",
          heading: "How the process works",
          steps: [
            {
              title: "Share your draft and data",
              description:
                "Send your dataset, research questions and, if available, the target journal and its author guidelines. For revisions, include the reviewer report.",
            },
            {
              title: "Analysis plan",
              description:
                "We draft a statistical plan matched to your study design (cross-sectional, case-control, cohort, experimental) and confirm it with you.",
            },
            {
              title: "Analysis and journal-formatted report",
              description:
                "Analyses are run; tables follow the target journal's format, with p-values and effect sizes reported to current standards.",
            },
            {
              title: "Methods text and support",
              description:
                "We write the statistical-analysis paragraph of your manuscript and support you on interpretation and reviewer responses.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Reviewer requests we resolve most often",
          items: [
            "“Report effect sizes and confidence intervals” — computed for all tests and added to the tables",
            "“Correct for multiple comparisons” — Bonferroni, Holm or FDR corrections applied",
            "“Demonstrate normality / use a nonparametric test” — assumption tests reported, analyses re-run where needed",
            "“Control for confounders” — multivariable regression or covariance analysis added",
            "“Power analysis / sample size justification missing” — post-hoc power and sample justification written",
            "“Tables don't match journal format” — tables rebuilt to the journal's template",
          ],
        },
        {
          type: "paragraphs",
          heading: "Reporting to journal standards",
          body: [
            "Journals' statistical expectations have risen sharply: reporting only a p-value is no longer enough — effect sizes, confidence intervals, assumption checks and software versions are expected. Our reports follow these standards, taking into account APA 7, the statistical items of reporting guidelines such as CONSORT and STROBE, and your target journal's author guide. The goal: your manuscript doesn't come back because of the statistics.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Do you write the statistics section of the manuscript?",
          answer:
            "We prepare the statistical-analysis paragraph of the methods section and the statistical reporting of your results — including which tests were used and why, software details and significance level. The scientific content and final text of the manuscript remain yours.",
        },
        {
          question: "Can I get help only with reviewer-requested analyses?",
          answer:
            "Yes. Even if the original analysis was done elsewhere, we run the additional analyses reviewers ask for and prepare the statistical justification text for your response letter.",
        },
        {
          question: "Which study designs do you work with?",
          answer:
            "Cross-sectional and descriptive studies, case-control, cohort, randomized controlled trials, scale development/adaptation and survey-based research — any design with quantitative data.",
        },
        {
          question: "How fast is delivery?",
          answer:
            "The analysis itself usually takes 15 minutes; delivery is same-day, within hours or even minutes. Total time is set by iterative steps like missing information and corrections — you can write to us at every stage. For comprehensive packages with revision letters and methods text we agree the timeline up front, and we can prioritize journal deadlines.",
        },
        {
          question: "Will my data and manuscript remain confidential?",
          answer:
            "Yes. Your files are used only for your analysis, never shared with third parties, and deleted after delivery on request.",
        },
      ],
      cta: {
        heading: "Make the statistics of your paper bulletproof",
        text: "Send your data, draft or reviewer report — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default articleStatistics;
