import type { Topic } from "../types";

const biostatistics: Topic = {
  key: "biostatistics",
  kind: "service",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  serviceType: "Biostatistics Consulting",
  related: ["q1-success-story", "health-use-cases", "article-statistics", "nursing-statistics"],
  locales: {
    tr: {
      metaTitle: "Biyoistatistik Danışmanlık — Tıp ve Sağlık Araştırmaları | GetBayes",
      metaDescription:
        "Tıp, diş hekimliği ve sağlık bilimleri için biyoistatistik danışmanlık: uzmanlık tezi, klinik araştırma, tanı testi analizleri, sağkalım analizi ve dergi revizyonları.",
      headline: "Biyoistatistik Danışmanlık",
      lead: [
        "Tıp, diş hekimliği, hemşirelik ve diğer sağlık bilimleri araştırmalarınız için biyoistatistik danışmanlık sunuyoruz: uzmanlık tezinden randomize kontrollü çalışmaya, retrospektif dosya taramasından tanı testi değerlendirmesine kadar çalışma tasarımınıza uygun analizi yapar, sonuçları tıp dergilerinin beklediği formatta tablolar ve yorumlarla teslim ederiz — analizin kendisi çoğunlukla 15 dakika sürer, raporunuz aynı gün, çoğu zaman saatler hatta dakikalar içinde elinizde olur ve süreç boyunca her adımda bize yazabilirsiniz.",
        "Etik kurul başvurusu aşamasındaysanız örneklem büyüklüğü hesabını gerekçe metniyle hazırlarız; makaleniz revizyondaysa hakemin istediği ek analizleri yapar, istatistiksel yanıt metnini yazarız.",
      ],
      audience: {
        heading: "Bu hizmet kimler için?",
        items: [
          "Uzmanlık tezi yürüten tıp ve diş hekimliği asistanları",
          "Klinik araştırma raporlayan hekimler ve akademisyenler",
          "Hemşirelik, ebelik, fizyoterapi ve beslenme alanlarında araştırma yapanlar",
          "SCI/SCI-E dergilere makale hazırlayan sağlık bilimleri araştırmacıları",
          "Etik kurul başvurusunda biyoistatistik desteği gerekenler",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Sağlık araştırmalarında en sık yaptığımız analizler",
          columns: ["Çalışma tipi / soru", "Tipik analizler"],
          rows: [
            [
              "Retrospektif dosya taraması",
              "Tanımlayıcı istatistikler, grup karşılaştırmaları (t-testi/Mann-Whitney, ki-kare), çok değişkenli lojistik regresyon",
            ],
            [
              "Vaka-kontrol çalışması",
              "Odds oranı (OR) ve %95 GA, koşullu lojistik regresyon, eşleştirme analizleri",
            ],
            [
              "Kohort / takip çalışması",
              "Relatif risk (RR), sağkalım analizi (Kaplan-Meier, log-rank, Cox regresyonu)",
            ],
            [
              "Randomize kontrollü çalışma",
              "Grup karşılaştırmaları, tekrarlı ölçümler ANOVA / karma modeller, CONSORT uyumlu raporlama",
            ],
            [
              "Tanı testi değerlendirmesi",
              "Duyarlılık, özgüllük, PPV/NPV, ROC eğrisi ve AUC, kesim noktası belirleme (Youden indeksi)",
            ],
            [
              "Gözlemciler arası uyum",
              "Cohen kappa, ağırlıklı kappa, sınıf içi korelasyon katsayısı (ICC)",
            ],
            [
              "Laboratuvar / ölçüm karşılaştırması",
              "Bland-Altman analizi, korelasyon ve regresyon yaklaşımları",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Süreç nasıl işliyor?",
          steps: [
            {
              title: "Çalışmanızı anlatın",
              description:
                "Veri setinizi, çalışma tasarımınızı ve araştırma sorularınızı iletin — hasta dosyası taraması, anket veya klinik ölçüm fark etmez.",
            },
            {
              title: "Analiz planı ve fiyat",
              description:
                "24 saat içinde ücretsiz ön değerlendirme: hangi analizlerin gerektiği, süre ve net fiyat yazılı olarak bildirilir.",
            },
            {
              title: "Analiz",
              description:
                "Analizler Python ve R ile yapılır; tıp dergisi standartlarında tablolar (Tablo 1 dahil), grafikler ve yorumlar hazırlanır.",
            },
            {
              title: "Teslim ve destek",
              description:
                "Yayına hazır rapor teslim edilir; tez savunması, danışman görüşmesi ve hakem revizyonlarında destek sürer.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Tıp dergisi standartlarında raporlama",
          items: [
            "Karakteristik tablosu (Table 1): gruplara göre demografik ve klinik özellikler, uygun testlerle karşılaştırmalı",
            "p-değerlerinin yanında etki ölçüleri: OR, RR, ortalama fark ve %95 güven aralıkları",
            "STROBE (gözlemsel) ve CONSORT (randomize) kılavuzlarının istatistik maddelerine uyum",
            "Yöntem bölümü için hazır istatistiksel analiz paragrafı — yazılım ve sürüm bilgisi dahil",
            "Türkçe veya İngilizce raporlama — hedef derginize göre",
          ],
        },
        {
          type: "paragraphs",
          heading: "Neden biyoistatistikte uzman destek?",
          body: [
            "Sağlık araştırmalarında istatistik hataları yalnızca hakem reddi değil, yanlış klinik çıkarım riski taşır: karıştırıcı değişken kontrol edilmeden kurulan ilişki, yanlış kesim noktasıyla raporlanan tanı testi ya da eşleştirilmiş tasarımda bağımsız test kullanımı sonuçları tersine çevirebilir. Ekibimiz sağlık verisinin bu inceliklerine hâkimdir; her raporda yöntem seçiminin klinik gerekçesi de yazılır. Verileriniz hasta gizliliği gözetilerek işlenir — kimlik bilgisi anonimleştirilmiş veriyle çalışmayı tercih ederiz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Uzmanlık tezi için hangi aşamada gelmeliyim?",
          answer:
            "İdealde veri toplamadan önce — örneklem hesabını ve analiz planını baştan kurarsak veri eksikleri ve etik kurul revizyonları önlenir. Ama veriniz hazırsa da sorun yok: dosya taraması verinizi olduğu gibi gönderin, analizi oradan devralalım.",
        },
        {
          question: "Hasta verisi paylaşmak KVKK açısından sorun olur mu?",
          answer:
            "Kimlik bilgileri (ad, TC no, dosya no) kaldırılmış anonim veriyle çalışıyoruz — analiz için kimlik bilgisine ihtiyaç yoktur. Veriniz üçüncü kişilerle paylaşılmaz ve talebiniz hâlinde teslimat sonrası silinir.",
        },
        {
          question: "Sağkalım analizi ve Cox regresyonu yapıyor musunuz?",
          answer:
            "Evet. Kaplan-Meier eğrileri, log-rank testleri, tek ve çok değişkenli Cox regresyonu (orantılı hazard varsayımı kontrolüyle) rutin çalıştığımız analizler arasındadır.",
        },
        {
          question: "ROC analizi ve kesim noktası belirleme hizmetiniz var mı?",
          answer:
            "Evet. ROC eğrisi, AUC karşılaştırmaları, Youden indeksiyle optimal kesim noktası ve bu noktadaki duyarlılık-özgüllük değerlerini raporluyoruz.",
        },
        {
          question: "Dergi 'istatistik editörü incelemesi' istedi, yardımcı olur musunuz?",
          answer:
            "Evet. İstatistik hakem raporlarındaki her maddeye teknik yanıt hazırlıyor, gereken ek analizleri yapıyor ve revize tabloları dergi formatında güncelliyoruz.",
        },
        {
          question: "Ücretlendirme nasıl?",
          answer:
            "Kapsama göre: değişken sayısı, analiz çeşitliliği ve raporun dili/formatı fiyatı belirler. Verinizi ve sorularınızı gönderin; 24 saat içinde ücretsiz ön değerlendirme ve net fiyat verelim.",
        },
      ],
      cta: {
        heading: "Biyoistatistik desteğinizi başlatın",
        text: "Çalışmanızı ve verinizi gönderin; 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Biostatistics Consulting — Medical & Health Research | GetBayes",
      metaDescription:
        "Biostatistics consulting for medicine, dentistry and health sciences: specialty theses, clinical studies, diagnostic test analyses, survival analysis and journal revisions.",
      headline: "Biostatistics Consulting",
      lead: [
        "We provide biostatistics consulting for research in medicine, dentistry, nursing and the wider health sciences: from specialty theses to randomized controlled trials, from retrospective chart reviews to diagnostic test evaluations, we run the analysis that fits your study design and deliver it with the tables and interpretation medical journals expect — the analysis itself usually takes 15 minutes, your report reaches you the same day, often within hours or even minutes, and you can write to us at every step of the process.",
        "At the ethics-application stage, we prepare your sample size calculation with justification text; if your manuscript is in revision, we run the reviewer-requested analyses and write the statistical response.",
      ],
      audience: {
        heading: "Who is this service for?",
        items: [
          "Medical and dental residents working on specialty theses",
          "Physicians and academics reporting clinical research",
          "Researchers in nursing, midwifery, physiotherapy and nutrition",
          "Health scientists preparing manuscripts for SCI/SCI-E journals",
          "Anyone needing biostatistics support for an ethics application",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "The analyses we run most in health research",
          columns: ["Study type / question", "Typical analyses"],
          rows: [
            [
              "Retrospective chart review",
              "Descriptives, group comparisons (t-test/Mann-Whitney, chi-square), multivariable logistic regression",
            ],
            [
              "Case-control study",
              "Odds ratios (OR) with 95% CI, conditional logistic regression, matched analyses",
            ],
            [
              "Cohort / follow-up study",
              "Relative risk (RR), survival analysis (Kaplan-Meier, log-rank, Cox regression)",
            ],
            [
              "Randomized controlled trial",
              "Group comparisons, repeated-measures ANOVA / mixed models, CONSORT-aligned reporting",
            ],
            [
              "Diagnostic test evaluation",
              "Sensitivity, specificity, PPV/NPV, ROC curve and AUC, cut-off determination (Youden index)",
            ],
            [
              "Inter-rater agreement",
              "Cohen's kappa, weighted kappa, intraclass correlation coefficient (ICC)",
            ],
            [
              "Method / measurement comparison",
              "Bland-Altman analysis, correlation and regression approaches",
            ],
          ],
        },
        {
          type: "steps",
          heading: "How the process works",
          steps: [
            {
              title: "Describe your study",
              description:
                "Send your dataset, study design and research questions — chart review, survey or clinical measurements alike.",
            },
            {
              title: "Analysis plan and quote",
              description:
                "Within 24 hours you receive a free assessment: which analyses are needed, the timeline and a clear written price.",
            },
            {
              title: "Analysis",
              description:
                "Analyses run in Python and R; tables (including Table 1), figures and interpretation are prepared to medical-journal standards.",
            },
            {
              title: "Delivery and support",
              description:
                "You receive a publication-ready report; support continues through thesis defense, advisor meetings and reviewer revisions.",
            },
          ],
        },
        {
          type: "bullets",
          heading: "Reporting to medical-journal standards",
          items: [
            "Characteristics table (Table 1): demographic and clinical features by group, compared with appropriate tests",
            "Effect measures alongside p-values: OR, RR, mean differences and 95% confidence intervals",
            "Alignment with the statistical items of STROBE (observational) and CONSORT (randomized) guidelines",
            "A ready statistical-analysis paragraph for your methods section — software and version included",
            "Reporting in Turkish or English, matched to your target journal",
          ],
        },
        {
          type: "paragraphs",
          heading: "Why expert biostatistics support?",
          body: [
            "In health research, statistical errors risk more than reviewer rejection — they risk wrong clinical inference: an association built without controlling confounders, a diagnostic test reported at the wrong cut-off, or an independent test applied to a matched design can flip conclusions. Our team knows these subtleties of health data, and every report includes the clinical rationale behind method choices. Data is handled with patient privacy in mind — we prefer working with de-identified datasets.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "At what stage should I come for a specialty thesis?",
          answer:
            "Ideally before data collection — setting the sample size calculation and analysis plan up front prevents data gaps and ethics-committee revisions. But if your data is ready, no problem: send the chart-review dataset as is and we'll take the analysis from there.",
        },
        {
          question: "Is sharing patient data a privacy problem?",
          answer:
            "We work with de-identified data (names, national IDs and file numbers removed) — the analysis never needs identity information. Your data is not shared with third parties and is deleted after delivery on request.",
        },
        {
          question: "Do you run survival analysis and Cox regression?",
          answer:
            "Yes. Kaplan-Meier curves, log-rank tests, and uni/multivariable Cox regression (with proportional-hazards checks) are routine parts of our work.",
        },
        {
          question: "Do you offer ROC analysis and cut-off determination?",
          answer:
            "Yes. We report ROC curves, AUC comparisons, the optimal cut-off by Youden index, and the sensitivity-specificity values at that point.",
        },
        {
          question: "The journal requested a statistical editor's review — can you help?",
          answer:
            "Yes. We prepare technical responses to each item in statistical reviewer reports, run the required additional analyses, and update the revised tables in journal format.",
        },
        {
          question: "How is pricing set?",
          answer:
            "By scope: the number of variables, the range of analyses, and the report's language/format. Send your data and questions — we'll reply within 24 hours with a free assessment and a clear quote.",
        },
      ],
      cta: {
        heading: "Start your biostatistics support",
        text: "Send your study and data — we'll reply within 24 hours with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default biostatistics;
