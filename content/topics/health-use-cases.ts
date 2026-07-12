import type { Topic } from "../types";

const healthUseCases: Topic = {
  key: "health-use-cases",
  kind: "guide",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  related: ["biostatistics", "thesis-statistics", "article-statistics", "dentistry-statistics", "sample-report", "analysis-process-case"],
  locales: {
    tr: {
      metaTitle: "Sağlık Bilimlerinde Örnek Analizler — 5 Vaka Çalışması | GetBayes",
      metaDescription:
        "Tıp, diş hekimliği, hemşirelik ve psikolojide istatistik analizi nasıl ilerler? Uzmanlık tezi, ölçek çalışması, ROC analizi ve hakem revizyonu üzerinden 5 örnek süreç.",
      headline: "Sağlık Bilimlerinde Örnek Analizler",
      lead: [
        "İstatistik desteği almayı düşünüyorsanız en faydalı şey, sürecin gerçekte nasıl işlediğini görmek. Aşağıda, sağlık bilimlerinde en sık karşılaştığımız beş çalışma tipini — verinin geliş hâlinden teslim edilen rapora kadar — adım adım anlattık: tıpta uzmanlık tezi, diş hekimliğinde gözlemci uyumu, hemşirelikte ölçek çalışması, psikolojide ön test-son test deseni ve dergi revizyonu.",
        "Örnekler, gizlilik gereği ayrıntıları değiştirilmiş temsili vakalardır; hasta ve katılımcı verisi içermez. Sizin çalışmanız hangisine benziyorsa, aynı yolculuğun sizde nasıl görüneceğini gösterir.",
      ],
      audience: {
        heading: "Bu örnekler kimlere fikir verir?",
        items: [
          "Uzmanlık tezi verisini toplamış, 'şimdi ne yapacağım?' aşamasındaki asistanlar",
          "Ölçek uyarlama/geliştirme çalışması yürüten hemşirelik ve psikoloji araştırmacıları",
          "Deneysel desende çalışan ve analiz planı kurmak isteyenler",
          "Hakem revizyonuyla uğraşan makale yazarları",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Vaka 1 — Tıpta uzmanlık tezi: retrospektif dosya taraması",
          body: [
            "Durum: Bir asistan hekim, ~200 hastalık retrospektif kohortta iki tedavi yaklaşımının komplikasyon oranlarını karşılaştırmak istiyor. Veri, hastane sisteminden Excel'e aktarılmış; eksik alanlar ve tutarsız kodlamalar var (aynı tanının üç farklı yazımı gibi). Danışmanı 'istatistiğe gösterme' aşamasında.",
            "Yaptıklarımız: Ön incelemede kodlamalar standardize edildi, eksik veri deseni incelendi — veri 'gidin düzeltin' denmeden, kendimiz temizleyerek analize hazır hâle getirildi. Tanımlayıcı istatistiklerin ardından gruplar ki-kare ve Mann-Whitney U ile karşılaştırıldı; komplikasyonu yordayan faktörler için yaş, komorbidite ve tedavi tipinin girildiği çok değişkenli lojistik regresyon kuruldu, sonuçlar OR ve %95 GA ile raporlandı.",
            "Sonuç: Tez formatında Tablo 1 (karakteristikler), karşılaştırma tabloları ve regresyon tablosu; her testin gerekçesi yazılı. Asistan, jüride 'neden lojistik regresyon?' sorusunu rapordaki gerekçeyle yanıtladı.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Vaka 2 — Diş hekimliği: gözlemciler arası uyum",
          body: [
            "Durum: Bir diş hekimliği uzmanlık öğrencisi, iki gözlemcinin panoramik radyografilerde aynı sınıflamayı ne ölçüde tutarlı uyguladığını raporlamak zorunda; dergi ayrıca gözlemci içi tekrarlanabilirlik istiyor.",
            "Yaptıklarımız: Sınıflama sıralı olduğu için ağırlıklı kappa seçildi (nominal olsaydı standart Cohen kappa kullanılacaktı); gözlemci içi uyum için aynı gözlemcinin iki okuma seansı karşılaştırıldı. Kappa değerleri %95 güven aralıklarıyla ve Landis-Koch yorum ölçütleriyle raporlandı.",
            "Sonuç: Yöntem bölümüne hazır uyum analizi paragrafı + tablo. Dergiye ilk gönderimde istatistik yönünden sorunsuz geçti.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Vaka 3 — Hemşirelik: ölçek uyarlama çalışması",
          body: [
            "Durum: Bir hemşirelik doktora öğrencisi, yurt dışında geliştirilen bir ölçeğin Türkçe formunun geçerlik-güvenirliğini ~300 kişilik örneklemde test ediyor. 'AFA mı DFA mı, ikisi de mi?' sorusuyla geldi.",
            "Yaptıklarımız: Orijinal faktör yapısı belli olduğundan doğrulayıcı faktör analizi (DFA) ile başlandı; uyum indeksleri (CFI, TLI, RMSEA, SRMR) eşik değerleriyle birlikte raporlandı. Model uyumu sınırda kalan maddeler için modifikasyon önerileri değerlendirildi. Güvenirlik için Cronbach alfa ve madde-toplam korelasyonları, ayrıca alt boyutlar arası korelasyonlar hesaplandı.",
            "Sonuç: Geçerlik-güvenirlik bölümü tablolarıyla hazır; hangi uyum indeksinin neden raporlandığı gerekçeli. Çalışma alan dergisine kabul edildi.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Vaka 4 — Psikoloji: ön test-son test deneysel desen",
          body: [
            "Durum: Bir psikoloji yüksek lisans öğrencisi, geliştirdiği müdahale programının kaygı düzeyine etkisini deney-kontrol gruplu ön test-son test deseniyle inceliyor (grup başına ~30 kişi). İlk planı 'dört kez t-testi yapmak'tı.",
            "Yaptıklarımız: Çoklu t-testinin Tip I hatayı şişireceği anlatıldı; doğru model olarak 2x2 karma desen ANOVA (grup x zaman etkileşimi) kuruldu. Normallik ve varyans homojenliği kontrol edildi, etkileşim etkisi kısmi eta-kare ile raporlandı, anlamlı etkileşim basit etkiler analiziyle çözümlendi.",
            "Sonuç: Müdahalenin etkisi tek bir etkileşim etkisiyle, grafikle görselleştirilmiş şekilde raporlandı. Öğrenci savunmada deseni kendisi anlatabilecek düzeyde soru-cevap desteği aldı.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Vaka 5 — Dergi revizyonu: ROC ve kesim noktası talebi",
          body: [
            "Durum: Bir araştırma grubunun makalesi 'major revision' aldı; hakem, biyobelirtecin tanısal performansı için ROC analizi, optimal kesim noktası ve çoklu karşılaştırma düzeltmesi istiyor. Dönüş süresi 30 gün.",
            "Yaptıklarımız: ROC eğrisi çizildi, AUC %95 güven aralığıyla hesaplandı, Youden indeksiyle optimal kesim noktası ve bu noktadaki duyarlılık-özgüllük raporlandı. İkincil karşılaştırmalara Bonferroni düzeltmesi uygulandı. Hakem mektubunun istatistik maddelerine madde madde teknik yanıt yazıldı.",
            "Sonuç: Revizyon tek turda kapandı; makale kabul edildi. Grup, sonraki çalışmasının analiz planını baştan bizimle kurdu.",
          ],
        },
        {
          type: "bullets",
          heading: "Bu vakaların ortak noktaları",
          items: [
            "Hiçbiri 'hazır analiz bilgisi' ile gelmedi — araştırma sorusu ve veri yeterli, yöntemi biz belirledik",
            "Her raporda test seçiminin gerekçesi yazılı — savunma ve hakem sorularına hazır",
            "Analizin kendisi çoğunlukla 15 dakikada tamamlandı, raporlar aynı gün — saatler hatta dakikalar içinde — teslim edildi; toplam süreyi eksik-düzeltme gibi iteratif adımlar belirledi",
            "Teslimat sonrası soru-cevap desteğiyle süreç savunma/kabul aşamasına kadar sürdü",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Benim çalışmam bu örneklere benzemiyor — yine de yardımcı olur musunuz?",
          answer:
            "Büyük olasılıkla evet. Örnekler en sık karşılaştığımız tipleri temsil ediyor; nicel veri içeren her akademik çalışmada (sağlık dışı alanlar dahil) hizmet veriyoruz. Çalışmanızı anlatın, 24 saat içinde ücretsiz ön değerlendirmeyle dönelim.",
        },
        {
          question: "Bu vakalar gerçek müşterileriniz mi?",
          answer:
            "Vakalar, sık karşılaştığımız çalışma tiplerini temsil eden, gizlilik gereği ayrıntıları değiştirilmiş örneklerdir. Hiçbirinde gerçek hasta/katılımcı verisi veya kimlik bilgisi yer almaz — aynı gizlilik sizin çalışmanız için de geçerlidir.",
        },
        {
          question: "Verimi göndermeden önce ne hazırlamalıyım?",
          answer:
            "İdeal paket: veri dosyası (Excel/SPSS/CSV), araştırma soruları veya hipotezler ve varsa anket formu/tez önerisi. Eksikleriniz varsa dert etmeyin — ön incelemede birlikte netleştirir, düzeltebildiklerimizi kendimiz düzeltiriz.",
        },
        {
          question: "Analiz sonrası destek neleri kapsıyor?",
          answer:
            "Rapordaki her yöntem ve bulgu hakkında soru sorabilirsiniz; danışman veya hakem ek analiz isterse aynı veri üzerinde güncelleme yaparız. Amaç, savunmaya ya da yayına kendi başınıza çıkabilecek hâle gelmeniz.",
        },
      ],
      cta: {
        heading: "Sizin vakanızı konuşalım",
        text: "Çalışmanızı ve verinizi anlatın; nasıl bir yol izleyeceğimizi 24 saat içinde ücretsiz ön değerlendirmeyle bildirelim.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Case Examples from Health Sciences — 5 Analysis Walkthroughs | GetBayes",
      metaDescription:
        "How does statistical analysis unfold in medicine, dentistry, nursing and psychology? Five example processes: specialty thesis, scale study, ROC analysis, reviewer revision.",
      headline: "Case Examples from the Health Sciences",
      lead: [
        "If you're considering statistics support, the most useful thing is seeing how the process actually unfolds. Below we walk through the five study types we encounter most in the health sciences — from how the data arrives to the delivered report: a medical specialty thesis, inter-rater agreement in dentistry, a nursing scale study, a pre-post experimental design in psychology, and a journal revision.",
        "The examples are representative cases with details altered for confidentiality; they contain no patient or participant data. Find the one your study resembles, and you'll see what the same journey looks like for you.",
      ],
      audience: {
        heading: "Who these examples help",
        items: [
          "Residents who have collected specialty-thesis data and are at the “now what?” stage",
          "Nursing and psychology researchers running scale adaptation/development studies",
          "Anyone working with an experimental design who needs an analysis plan",
          "Manuscript authors wrestling with a reviewer revision",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Case 1 — Medical specialty thesis: retrospective chart review",
          body: [
            "Situation: A resident wants to compare complication rates of two treatment approaches in a retrospective cohort of ~200 patients. The data came out of the hospital system into Excel with missing fields and inconsistent coding (the same diagnosis spelled three ways). The advisor is at the “show it to statistics” stage.",
            "What we did: The initial review standardized the coding and examined the missing-data pattern — we cleaned the data ourselves rather than sending it back to be fixed. After descriptives, groups were compared with chi-square and Mann-Whitney U; a multivariable logistic regression with age, comorbidity and treatment type modeled predictors of complications, reported as ORs with 95% CIs.",
            "Outcome: A thesis-formatted Table 1, comparison tables and a regression table — every test choice justified in writing. At the defense, the resident answered “why logistic regression?” straight from the report.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Case 2 — Dentistry: inter-rater agreement",
          body: [
            "Situation: A dental specialty student must report how consistently two observers applied the same classification to panoramic radiographs; the journal also wants intra-rater repeatability.",
            "What we did: Weighted kappa was chosen because the classification is ordinal (standard Cohen's kappa would apply to nominal data); intra-rater agreement compared the same observer's two reading sessions. Kappa values were reported with 95% confidence intervals and Landis-Koch interpretation criteria.",
            "Outcome: A ready agreement-analysis paragraph and table for the methods section. The manuscript passed the statistics review on first submission.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Case 3 — Nursing: scale adaptation study",
          body: [
            "Situation: A nursing PhD student is testing the validity and reliability of the Turkish form of a scale developed abroad, in a sample of ~300. She arrived with the question “EFA, CFA, or both?”",
            "What we did: Since the original factor structure was known, we started with confirmatory factor analysis (CFA); fit indices (CFI, TLI, RMSEA, SRMR) were reported alongside their thresholds. Modification suggestions were evaluated for borderline items. Reliability was assessed with Cronbach's alpha and item-total correlations, plus inter-subscale correlations.",
            "Outcome: The validity-reliability section, tables included, ready — with the rationale for each reported fit index. The study was accepted by a field journal.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Case 4 — Psychology: pre-post experimental design",
          body: [
            "Situation: A psychology master's student is examining the effect of an intervention program on anxiety with a treatment-control, pre-post design (~30 per group). The initial plan was “run four t-tests.”",
            "What we did: We explained how multiple t-tests inflate Type I error, and set up the correct model: a 2x2 mixed-design ANOVA (group x time interaction). Normality and homogeneity were checked, the interaction was reported with partial eta-squared, and the significant interaction was unpacked with simple-effects analysis.",
            "Outcome: The intervention's effect reported as a single interaction effect, visualized with a plot. The student got enough Q&A support to explain the design herself at the defense.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Case 5 — Journal revision: ROC and cut-off request",
          body: [
            "Situation: A research group's manuscript received a major revision; the reviewer wants ROC analysis of a biomarker's diagnostic performance, an optimal cut-off, and multiple-comparison correction. Thirty days to respond.",
            "What we did: The ROC curve was drawn, AUC computed with a 95% CI, and the optimal cut-off determined by Youden index, with sensitivity and specificity at that point. Bonferroni correction was applied to the secondary comparisons. A point-by-point technical response was written for the statistical items of the reviewer letter.",
            "Outcome: The revision closed in a single round; the paper was accepted. The group planned their next study's analysis with us from day one.",
          ],
        },
        {
          type: "bullets",
          heading: "What these cases share",
          items: [
            "None arrived with “ready-made statistics knowledge” — a research question and data were enough; we determined the methods",
            "Every report justifies its test choices in writing — ready for defense and reviewer questions",
            "The analysis itself was usually done in 15 minutes, with reports delivered the same day — within hours, even minutes; total time was set by iterative steps like gaps and corrections",
            "Post-delivery Q&A support carried each project through to defense or acceptance",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "My study doesn't resemble these examples — can you still help?",
          answer:
            "Most likely yes. The examples represent our most frequent study types; we work on any academic study with quantitative data, including fields outside health. Describe your study and we'll reply within 24 hours with a free assessment.",
        },
        {
          question: "Are these cases real clients?",
          answer:
            "They are representative examples of the study types we encounter often, with details altered for confidentiality. None contain real patient/participant data or identities — and the same confidentiality applies to your study.",
        },
        {
          question: "What should I prepare before sending my data?",
          answer:
            "The ideal package: the data file (Excel/SPSS/CSV), your research questions or hypotheses, and your survey form or proposal if available. Missing pieces are fine — we sort them out together during the initial review, fixing what we can ourselves.",
        },
        {
          question: "What does post-analysis support cover?",
          answer:
            "You can ask about any method or finding in the report; if your advisor or a reviewer requests additional analyses, we update the work on the same dataset. The goal is getting you ready to stand behind the work on your own.",
        },
      ],
      cta: {
        heading: "Let's talk about your case",
        text: "Describe your study and data — within 24 hours we'll tell you the route we'd take, with a free assessment.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default healthUseCases;
