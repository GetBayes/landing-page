import type { Topic } from "../types";

const mediationModeration: Topic = {
  key: "mediation-moderation",
  kind: "guide",
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  related: [
    "regression-interpretation",
    "psychology-statistics",
    "which-test",
    "sample-size",
    "reporting-results",
  ],
  locales: {
    tr: {
      metaTitle:
        "Aracılık ve Düzenleyicilik Analizi Nasıl Yapılır? | GetBayes",
      metaDescription:
        "Aracılık (mediation) ve düzenleyicilik (moderation) analizi rehberi: dolaylı etki, bootstrap güven aralığı, etkileşim terimi ve basit eğim analizi, Hayes model numaraları tablosu, Baron-Kenny ve Sobel neden artık yetersiz.",
      headline:
        "Aracılık ve Düzenleyicilik Analizi Nasıl Yapılır? (Mediation & Moderation)",
      lead: [
        "Aracılık (mediation) analizi bir değişkenin başka bir değişkeni NASIL ya da NEDEN etkilediğini, düzenleyicilik (moderation) analizi ise bu etkinin KİMDE ya da HANGİ KOŞULDA güçlenip zayıfladığını gösterir. Aracılıkta bağımsız değişken (X) önce aracı değişkeni (M) etkiler, aracı değişken de bağımlı değişkeni (Y) etkiler; kanıt, X→M→Y yolunun çarpımı olan dolaylı etkidir ve bugünkü standart, bu dolaylı etkiyi 5.000 tekrarlı bootstrap güven aralığıyla test etmektir — güven aralığı sıfırı içermiyorsa dolaylı etki anlamlıdır. Düzenleyicilikte ise modele X ile düzenleyici değişkenin (W) etkileşim terimi eklenir; etkileşim anlamlıysa etkinin düzenleyicinin farklı düzeylerinde nasıl değiştiği basit eğim analiziyle çözümlenir. Baron ve Kenny'nin dört adımlı yaklaşımı ile Sobel testi artık yetersiz kabul edilir; özellikle toplam etkinin (c yolu) anlamlı olması aracılık için bir ön koşul değildir.",
        "Bu rehber iki analizin adımlarını, karar ölçütlerini ve hakemlerin en sık takıldığı noktaları anlatır. Modelinizi kurmakta ya da çıktıları yorumlamakta zorlanıyorsanız veri setinizi bize gönderin: değişken rollerinin doğru tanımlanmasından model seçimine, bootstrap güven aralıklarından basit eğim grafiklerine kadar tüm süreci yürütür, tezinize veya makalenize doğrudan eklenebilecek yol diyagramı ve APA formatında tablolarla teslim ederiz. Ön değerlendirme ücretsizdir.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Hipotezinde \"X'in Y üzerindeki etkisinde M'nin aracı rolü\" ifadesi geçen yüksek lisans ve doktora öğrencileri",
          "Bir ilişkinin cinsiyet, yaş, deneyim gibi bir değişkene göre farklılaşıp farklılaşmadığını sınamak isteyen araştırmacılar",
          "Danışmanı \"aracılık analizi ekle\" diyen ama nereden başlayacağını bilmeyenler",
          "Hakemden \"Baron-Kenny yaklaşımı güncel değil\" ya da \"dolaylı etkinin güven aralığı raporlanmamış\" notu alan makale yazarları",
          "Düzenleyici aracılık (moderated mediation) modeli kurması gereken, hangi modelin kendi hipotezine karşılık geldiğini çözemeyenler",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Aracılık mı düzenleyicilik mi? Hangisi sizin hipoteziniz?",
          intro:
            "İkisi birbirinin alternatifi değildir; farklı sorulara cevap verirler. Hipotez cümlenizi okuyup hangi soruyu sorduğunuzu belirlemek, doğru modeli seçmenin en hızlı yoludur:",
          columns: ["Ölçüt", "Aracılık (mediation)", "Düzenleyicilik (moderation)"],
          rows: [
            [
              "Cevapladığı soru",
              "X, Y'yi nasıl / neden etkiliyor?",
              "Bu etki kimde / hangi koşulda güçlü, kimde zayıf?",
            ],
            [
              "Değişkenin rolü",
              "Aracı değişken (M) zincirin ortasındadır: X → M → Y",
              "Düzenleyici değişken (W) X→Y okunun üzerine etki eder",
            ],
            [
              "Tipik hipotez cümlesi",
              "\"İş yükünün tükenmişliğe etkisinde uyku kalitesinin aracı rolü vardır\"",
              "\"İş yükünün tükenmişliğe etkisi, sosyal destek düzeyine göre farklılaşır\"",
            ],
            [
              "Modelin çekirdeği",
              "Dolaylı etki (a × b yolu)",
              "Etkileşim terimi (X × W)",
            ],
            [
              "Anlamlılık ölçütü",
              "Bootstrap güven aralığı sıfırı içermemeli",
              "Etkileşim teriminin p değeri ve ΔR²",
            ],
            [
              "Zamansal varsayım",
              "Güçlü: X, M'den önce; M, Y'den önce gelmeli",
              "Yok: düzenleyici genellikle sabit bir özelliktir (cinsiyet, kişilik, bağlam)",
            ],
            [
              "Tamamlayıcı çıktı",
              "Yol diyagramı, a-b-c-c′ katsayıları",
              "Basit eğim grafiği, Johnson-Neyman aralığı",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Aracılık analizi adım adım",
          intro:
            "Aracılık analizinin bugünkü standardı, dört ayrı testten geçmek değil, dolaylı etkiyi doğrudan tahmin etmektir:",
          steps: [
            {
              title: "Değişken rollerini kuramsal olarak sabitleyin",
              description:
                "Hangi değişkenin X (bağımsız), hangisinin M (aracı), hangisinin Y (bağımlı) olduğu veriden değil kuramdan çıkar. Aynı üç değişkenle kurulabilecek altı farklı sıralama vardır ve istatistik bunların hangisinin doğru olduğunu söyleyemez — sıralamanın gerekçesi literatürde ve ölçüm zamanlamasında olmalıdır.",
            },
            {
              title: "Yolları tahmin edin",
              description:
                "Model iki regresyondan oluşur: X'ten M'ye giden a yolu ve X ile M'nin birlikte yordadığı Y modelindeki b yolu (aynı modelde X'in kalan doğrudan etkisi c′ yoludur). X'in M ve Y kontrol edilmeden Y üzerindeki etkisi ise toplam etkidir (c yolu).",
            },
            {
              title: "Dolaylı etkiyi bootstrap ile test edin",
              description:
                "Dolaylı etki a × b çarpımıdır ve dağılımı normal olmadığı için klasik testlerle sınanmaz. Standart yaklaşım en az 5.000 tekrarlı bootstrap ile %95 yanlılık düzeltilmiş güven aralığı üretmektir. Aralık sıfırı içermiyorsa dolaylı etki anlamlıdır — bu, aracılığın asıl kanıtıdır.",
            },
            {
              title: "\"Tam / kısmi aracılık\" etiketine takılmayın",
              description:
                "Eskiden c′ yolunun anlamsızlaşmasına \"tam aracılık\", anlamlı kalmasına \"kısmi aracılık\" denirdi. Bu ayrım büyük ölçüde örneklem büyüklüğünün ürünüdür ve güncel metodoloji literatüründe terk edilmiştir. Rapor edilmesi gereken, dolaylı etkinin büyüklüğü ve güven aralığıdır.",
            },
            {
              title: "Etki büyüklüğünü ekleyin",
              description:
                "Standartlaştırılmış dolaylı etki ya da dolaylı etkinin toplam etkiye oranı gibi bir ölçüt, bulgunun pratik anlamını gösterir. Yalnızca \"anlamlı çıktı\" demek, hakemler için yeterli bir sonuç ifadesi değildir.",
            },
            {
              title: "Modeli genişletmeniz gerekip gerekmediğine karar verin",
              description:
                "Birden fazla aracı varsa paralel (aracılar birbirini etkilemez) ya da seri (M1 → M2) aracılık modeli kurulur; seri modelde aracıların sırası da kuramsal bir iddiadır. Aracılık bir koşula bağlıysa düzenleyici aracılık (moderated mediation) modeline geçilir ve dolaylı etkinin koşullara göre farkı indeks değeriyle sınanır.",
            },
          ],
        },
        {
          type: "steps",
          heading: "Düzenleyicilik analizi adım adım",
          intro:
            "Düzenleyicilik, özünde bir etkileşim testidir; kritik nokta anlamlılıktan sonra ne yapıldığıdır:",
          steps: [
            {
              title: "Sürekli değişkenleri merkezileyin",
              description:
                "X ve W sürekli değişkense, etkileşim terimini oluşturmadan önce ortalamadan sapma olarak merkezilemek (ya da standartlaştırmak) yaygın uygulamadır. Bu, etkileşim terimiyle ana etkiler arasındaki çoklu bağlantıyı azaltır ve ana etki katsayılarını yorumlanabilir kılar; etkileşim teriminin kendi katsayısı ise merkezilemeden etkilenmez.",
            },
            {
              title: "Etkileşim terimini modele ekleyin",
              description:
                "Model X + W + (X × W) biçimindedir. Etkileşim teriminin anlamlı olması ve modele kattığı ΔR², düzenleyiciliğin varlığının kanıtıdır. Etkileşim terimi modeldeyken X ve W'nin katsayıları artık \"ortalama düzeydeki koşullu etkiler\"dir; bunları klasik ana etki gibi yorumlamak hatalıdır.",
            },
            {
              title: "Basit eğim analizini yapın",
              description:
                "Anlamlı etkileşim tek başına eksik bir bulgudur; asıl bilgi, X'in Y üzerindeki etkisinin düzenleyicinin farklı düzeylerinde ne olduğudur. Geleneksel yaklaşım W'nin ortalamasının bir standart sapma altı, ortalaması ve bir standart sapma üstü için eğimleri ayrı ayrı test etmektir.",
            },
            {
              title: "Gerekiyorsa Johnson-Neyman aralığını raporlayın",
              description:
                "Bir standart sapma alt/üst noktaları keyfîdir. Johnson-Neyman tekniği, X'in etkisinin tam olarak hangi W değerinden itibaren anlamlı hale geldiğini verir — \"sosyal destek 2,8'in altına düştüğünde iş yükünün tükenmişliğe etkisi anlamlı hale geliyor\" gibi çok daha kullanışlı bir ifade sağlar.",
            },
            {
              title: "Etkileşimi grafikleyin",
              description:
                "Düzenleyicilik bulgusunun okura geçmesini sağlayan şey grafiktir: yatay eksende X, dikey eksende Y, düzenleyicinin düşük ve yüksek düzeyleri için iki ayrı eğim çizgisi. Neredeyse tüm dergiler bu grafiği bekler.",
            },
            {
              title: "Kategorik düzenleyicileri doğru kodlayın",
              description:
                "Düzenleyici cinsiyet gibi kategorikse kukla (dummy) kodlama kullanılır; ikiden fazla kategori varsa her kukla değişken için ayrı etkileşim terimi gerekir. Sürekli bir düzenleyiciyi ortadan bölerek (median split) kategoriye çevirmek ise güç kaybına yol açar ve önerilmez.",
            },
          ],
        },
        {
          type: "table",
          heading: "Hangi model numarası sizin hipotezinize karşılık geliyor?",
          intro:
            "Literatürde aracılık ve düzenleyicilik modelleri numaralandırılmış şablonlarla anılır (Hayes model numaraları). Danışmanınız \"Model 4 çalıştır\" dediğinde kastettiği şey şudur:",
          columns: ["Model", "Yapı", "Hipotez örneği"],
          rows: [
            [
              "Model 1",
              "Basit düzenleyicilik (X × W → Y)",
              "Etki, sosyal destek düzeyine göre değişir",
            ],
            [
              "Model 4",
              "Basit aracılık (X → M → Y), tek veya paralel aracılar",
              "Etkiye uyku kalitesi aracılık eder",
            ],
            [
              "Model 6",
              "Seri aracılık (X → M1 → M2 → Y)",
              "Etki önce stresi, stres de uyku kalitesini etkileyerek ilerler",
            ],
            [
              "Model 7",
              "Düzenlenmiş aracılık — düzenleyici a yolunda",
              "X'in aracıya etkisi cinsiyete göre farklılaşır",
            ],
            [
              "Model 8",
              "Düzenleyici hem a yolunda hem doğrudan etkide",
              "Düzenleyici hem aracıyı hem kalan doğrudan etkiyi koşullar",
            ],
            [
              "Model 14",
              "Düzenleyici b yolunda",
              "Aracının bağımlı değişkene etkisi koşula göre değişir",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Sık yapılan hatalar",
          items: [
            "Baron ve Kenny'nin dört adımlı yaklaşımını tek başına kullanmak — dolaylı etkiyi doğrudan test etmediği için güncel standart değildir; bootstrap güven aralıklı yaklaşım beklenir",
            "Sobel testine dayanmak; test, dolaylı etkinin normal dağıldığını varsayar ve özellikle küçük örneklemlerde düşük güçlüdür",
            "Toplam etki (c yolu) anlamlı çıkmadığı için aracılık analizinden vazgeçmek — c'nin anlamlı olması bir ön koşul değildir; birbirini götüren zıt yönlü dolaylı etkiler toplam etkiyi sıfıra yaklaştırabilir",
            "Tek zamanlı (kesitsel) veriyle kurulan aracılık modelini nedensel kanıt gibi sunmak; aracılık kuramsal olarak zamansal bir iddiadır, model bunu kanıtlamaz",
            "X, M ve Y'yi aynı ankette aynı anda ölçüp, aracının bağımlı değişkenden önce geldiğini varsaymak — sınırlılık olarak açıkça yazılmalıdır",
            "Etkileşim terimi anlamlı çıkınca durmak; basit eğim analizi ve grafik olmadan düzenleyicilik bulgusu yorumlanamaz",
            "Düzenleyiciliği, örneklemi gruplara bölüp her grupta ayrı korelasyon hesaplayarak \"göstermek\" — iki korelasyonun biri anlamlı, diğeri anlamsız olması aralarındaki farkın anlamlı olduğunu göstermez",
            "Sürekli bir düzenleyiciyi ortadan bölerek kategorik hale getirmek (median split); bilgi ve istatistiksel güç kaybettirir",
            "Aracılık modelini küçük örneklemle (ör. 60-80 kişi) kurup dolaylı etkinin anlamsız çıkmasını \"aracılık yoktur\" diye raporlamak; dolaylı etkiyi saptamak doğrudan etkiye göre daha büyük örneklem ister",
            "Yol katsayılarını raporlayıp dolaylı etkinin güven aralığını hiç vermemek — hakemlerin en sık istediği eksik budur",
          ],
        },
        {
          type: "paragraphs",
          heading: "Örneklem büyüklüğü ve nedensellik: dürüst çerçeve",
          body: [
            "Aracılık modelleri, basit bir grup karşılaştırmasından daha fazla katılımcı ister; çünkü test edilen şey iki katsayının çarpımıdır ve bu çarpımın standart hatası her iki yolun belirsizliğini birden taşır. Pratikte orta büyüklükteki yollar için 150-200 kişilik örneklemler makul kabul edilir, yollar zayıfsa 300 ve üzeri gerekebilir; düzenleyicilik analizlerinde ise etkileşim terimlerinin ana etkilere göre sistematik olarak daha düşük güçle saptandığı bilinir, bu nedenle anlamsız bir etkileşim \"etki yok\" değil çoğu zaman \"yeterli güç yok\" anlamına gelir. Veri toplamaya başlamadan önce planlıyorsanız, modelinize özgü güç analizini örneklem büyüklüğü hesaplama sayfamızdan yürütebiliriz.",
            "Nedensellik konusunda ise dürüst olmak, çalışmanızı zayıflatmaz — güçlendirir. Aracılık modeli \"X, M aracılığıyla Y'ye yol açıyor\" iddiasını taşır; ancak üç değişken de aynı anda, tek bir ankette ölçüldüyse istatistik bu zamansal sıralamayı doğrulayamaz. Bu durumda doğru yol, bulguyu kuramla uyumlu bir örüntü olarak sunmak ve tasarımın sınırlılığını tartışma bölümünde açıkça yazmaktır. Deneysel ya da boylamsal veriniz varsa tam tersine bunu öne çıkarmak gerekir. Raporlarımızda bu ayrımı sizin adınıza kurar, iddiayı verinizin taşıyabileceği düzeyde tutarız — hakemin en sık zorladığı nokta tam olarak burasıdır.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "Aracılık ile düzenleyicilik arasındaki fark nedir?",
          answer:
            "Aracılık, bir etkinin hangi mekanizmayla gerçekleştiğini açıklar: X önce aracı değişkeni (M) etkiler, M de bağımlı değişkeni (Y) etkiler — yani \"nasıl / neden\" sorusunun cevabıdır. Düzenleyicilik ise etkinin kimde veya hangi koşulda güçlenip zayıfladığını gösterir; düzenleyici değişken zincirin bir halkası değil, X→Y ilişkisinin şiddetini değiştiren bir koşuldur. Pratik ayrım şudur: aracı değişken kuramsal olarak X'ten SONRA gelir, düzenleyici değişken ise genellikle baştan var olan bir özelliktir (cinsiyet, kişilik özelliği, bağlam).",
        },
        {
          question: "Baron ve Kenny yöntemi ve Sobel testi hâlâ geçerli mi?",
          answer:
            "Kavramsal çerçeve olarak öğretici, karar yöntemi olarak yetersiz kabul ediliyor. Dört adımlı yaklaşımın temel sorunu, dolaylı etkiyi hiç doğrudan test etmemesi ve toplam etkinin anlamlılığını gereksiz bir ön koşul haline getirmesidir. Sobel testi ise dolaylı etkinin normal dağıldığını varsayar; oysa iki katsayının çarpımı çarpık dağılır, bu nedenle test özellikle küçük örneklemlerde düşük güçlüdür. Güncel standart, en az 5.000 tekrarlı bootstrap ile dolaylı etkinin yanlılık düzeltilmiş %95 güven aralığını raporlamaktır.",
        },
        {
          question: "Toplam etki anlamlı çıkmazsa aracılık analizi yapılamaz mı?",
          answer:
            "Yapılabilir. X ile Y arasındaki toplam etkinin (c yolu) anlamlı olması aracılık için bir ön koşul değildir — bu, dört adımlı eski yaklaşımdan kalan yaygın bir yanlış bilgidir. Zıt yönlü iki dolaylı yol birbirini götürebilir, ya da örneklem toplam etkiyi saptamak için yeterli güçte olmayabilir; her iki durumda da anlamlı bir dolaylı etki bulunabilir ve bu geçerli bir bulgudur. Belirleyici ölçüt, dolaylı etkinin bootstrap güven aralığının sıfırı içermemesidir.",
        },
        {
          question: "PROCESS makrosu veya AMOS kullanıyor musunuz?",
          answer:
            "Hayır — analizleri kendi Python tabanlı altyapımızla yürütüyoruz. Ancak sonuçlar bu araçlardan alacağınız çıktılarla birebir aynıdır: aynı model numaralarına karşılık gelen yapılar (basit aracılık, seri aracılık, düzenlenmiş aracılık), aynı yol katsayıları, yanlılık düzeltilmiş bootstrap güven aralıkları, basit eğim ve Johnson-Neyman çıktıları, yol diyagramı ve APA formatında tablo. Herhangi bir program lisansına sahip olmanız gerekmez; SPSS uyumlu formatta rapor almak da mümkündür.",
        },
        {
          question: "Aracılık analizi için kaç kişilik örneklem gerekir?",
          answer:
            "Dolaylı etkiyi saptamak, doğrudan etkiyi saptamaktan daha fazla katılımcı ister; çünkü test edilen şey iki katsayının çarpımıdır ve belirsizlik birikir. Orta büyüklükteki yollar için 150-200 kişi çoğu durumda yeterlidir, yollardan biri zayıfsa 300 ve üzeri gerekebilir. Düzenleyicilik analizlerinde ise etkileşim terimleri düşük güçle saptanır — bu yüzden anlamsız bir etkileşim çoğu zaman \"etki yok\" değil \"yeterli güç yok\" demektir. Veri toplamadan önce modelinize özgü güç analizini yapabiliriz.",
        },
        {
          question: "Kesitsel veriyle aracılık analizi yapılır mı?",
          answer:
            "Yapılır ve literatürde yaygındır, ancak iddianın düzeyini veriye göre ayarlamak gerekir. X, M ve Y aynı anda, tek bir ölçümde toplandıysa istatistik \"M, Y'den önce gelir\" varsayımını doğrulayamaz; model bu sıralamayı test etmez, varsayar. Doğru yaklaşım bulguyu kuramla uyumlu bir örüntü olarak sunmak ve tasarım sınırlılığını tartışma bölümünde açıkça belirtmektir. Raporlarımızda bu ifadeyi sizin adınıza kurarız — hakemlerin en sık zorladığı nokta budur, önden yazılmış olması çalışmayı zayıflatmaz, güçlendirir.",
        },
      ],
      cta: {
        heading: "Aracılık ve düzenleyicilik modelinizi biz kuralım",
        text: "Veri setinizi ve hipotezinizi gönderin; değişken rollerini birlikte netleştirelim, modeli kuralım, bootstrap güven aralıkları ve basit eğim grafikleriyle birlikte tezinize veya makalenize doğrudan eklenebilecek yol diyagramı ve APA tablolarını teslim edelim. Ön değerlendirme ücretsizdir.",
        button: "Ücretsiz Ön Değerlendirme İsteyin",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "Mediation and Moderation Analysis: A Guide | GetBayes",
      metaDescription:
        "How to run mediation and moderation analysis: indirect effects, bootstrap confidence intervals, interaction terms and simple slopes, Johnson-Neyman, a model-number table, and why Baron-Kenny and the Sobel test fall short.",
      headline: "How to Run Mediation and Moderation Analysis",
      lead: [
        "Mediation analysis shows HOW or WHY one variable affects another; moderation analysis shows FOR WHOM or UNDER WHICH CONDITIONS that effect gets stronger or weaker. In mediation, the independent variable (X) affects a mediator (M), which in turn affects the outcome (Y); the evidence is the indirect effect — the product of the X→M and M→Y paths — and the current standard is to test it with a bootstrap confidence interval based on at least 5,000 resamples: if the interval excludes zero, the indirect effect is significant. In moderation, you add an interaction term between X and the moderator (W) to the model; when the interaction is significant, you follow it with a simple slopes analysis showing how the effect of X changes across levels of W. Baron and Kenny's four-step approach and the Sobel test are both now considered insufficient — in particular, a significant total effect (path c) is not a prerequisite for mediation.",
        "This guide walks through the steps of both analyses, the decision criteria at each stage, and the points reviewers most often flag. If you're stuck specifying the model or interpreting the output, send us your data: we handle everything from defining the variable roles to choosing the model, bootstrap confidence intervals and simple slope plots, and deliver a path diagram and APA-formatted tables you can paste straight into your thesis or manuscript. The initial review is free.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and doctoral students whose hypothesis reads \"the mediating role of M in the effect of X on Y\"",
          "Researchers testing whether a relationship differs by gender, age, experience or another grouping variable",
          "Anyone whose advisor said \"add a mediation analysis\" without saying where to start",
          "Authors whose reviewers flagged the Baron-Kenny approach as outdated, or noted that no confidence interval was reported for the indirect effect",
          "Researchers who need a moderated mediation model but can't tell which template matches their hypothesis",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Mediation or moderation? Which one is your hypothesis?",
          intro:
            "The two aren't alternatives — they answer different questions. Reading your hypothesis sentence and identifying which question it asks is the fastest way to the right model:",
          columns: ["Criterion", "Mediation", "Moderation"],
          rows: [
            [
              "Question answered",
              "How / why does X affect Y?",
              "For whom, or under what conditions, is the effect strong or weak?",
            ],
            [
              "Role of the variable",
              "The mediator (M) sits in the middle of the chain: X → M → Y",
              "The moderator (W) acts on the X→Y arrow itself",
            ],
            [
              "Typical hypothesis",
              "\"Sleep quality mediates the effect of workload on burnout\"",
              "\"The effect of workload on burnout differs by level of social support\"",
            ],
            [
              "Core of the model",
              "The indirect effect (a × b)",
              "The interaction term (X × W)",
            ],
            [
              "Significance criterion",
              "Bootstrap confidence interval excluding zero",
              "p-value of the interaction term and ΔR²",
            ],
            [
              "Temporal assumption",
              "Strong: X must precede M, and M must precede Y",
              "None: the moderator is usually a standing characteristic (gender, trait, context)",
            ],
            [
              "Supporting output",
              "Path diagram with a, b, c and c′ coefficients",
              "Simple slopes plot, Johnson-Neyman region",
            ],
          ],
        },
        {
          type: "steps",
          heading: "Mediation analysis, step by step",
          intro:
            "The current standard is not to clear four separate hurdles, but to estimate the indirect effect directly:",
          steps: [
            {
              title: "Fix the variable roles theoretically",
              description:
                "Which variable is X (predictor), which is M (mediator) and which is Y (outcome) comes from theory, not from the data. Three variables can be ordered six different ways and statistics cannot tell you which ordering is correct — the justification has to come from the literature and from when each variable was measured.",
            },
            {
              title: "Estimate the paths",
              description:
                "The model is two regressions: path a from X to M, and path b from M to Y in a model where X and M both predict Y (X's remaining effect there is path c′). The effect of X on Y with neither M nor Y controlled is the total effect, path c.",
            },
            {
              title: "Test the indirect effect with bootstrapping",
              description:
                "The indirect effect is the product a × b, and because its sampling distribution isn't normal, classical tests don't apply. The standard approach is a bias-corrected 95% confidence interval from at least 5,000 bootstrap resamples. If the interval excludes zero, the indirect effect is significant — this is the actual evidence for mediation.",
            },
            {
              title: "Don't get stuck on \"full vs. partial mediation\"",
              description:
                "Historically, a c′ path that dropped to non-significance was called full mediation and one that stayed significant partial mediation. That distinction is largely an artefact of sample size and has been abandoned in the current methodological literature. What belongs in the write-up is the magnitude of the indirect effect and its confidence interval.",
            },
            {
              title: "Add an effect size",
              description:
                "A standardised indirect effect, or the ratio of the indirect effect to the total effect, conveys what the finding means in practice. \"It was significant\" is not, on its own, an adequate statement of result for reviewers.",
            },
            {
              title: "Decide whether the model needs to grow",
              description:
                "With more than one mediator, you specify a parallel model (mediators don't affect each other) or a serial one (M1 → M2), where the ordering of mediators is itself a theoretical claim. If the mediation depends on a condition, you move to moderated mediation and test whether the indirect effect differs across levels of the moderator via an index.",
            },
          ],
        },
        {
          type: "steps",
          heading: "Moderation analysis, step by step",
          intro:
            "Moderation is at heart an interaction test; what matters most is what you do after it comes out significant:",
          steps: [
            {
              title: "Centre your continuous variables",
              description:
                "When X and W are continuous, it is standard practice to mean-centre (or standardise) them before forming the interaction term. This reduces multicollinearity between the interaction and the main effects and keeps the lower-order coefficients interpretable; the interaction coefficient itself is unaffected by centring.",
            },
            {
              title: "Add the interaction term",
              description:
                "The model is X + W + (X × W). A significant interaction term and the ΔR² it contributes are the evidence for moderation. With the interaction in the model, the coefficients for X and W are conditional effects at the mean level of the other variable — reading them as classical main effects is a mistake.",
            },
            {
              title: "Run the simple slopes analysis",
              description:
                "A significant interaction alone is an incomplete finding; the substance is what the effect of X on Y actually is at different levels of the moderator. The conventional approach tests the slope separately at one standard deviation below the mean of W, at the mean, and one standard deviation above.",
            },
            {
              title: "Report the Johnson-Neyman region where it helps",
              description:
                "The ±1 SD points are arbitrary. The Johnson-Neyman technique identifies the exact value of W at which the effect of X becomes significant — yielding a far more useful statement, such as \"the effect of workload on burnout becomes significant once social support falls below 2.8\".",
            },
            {
              title: "Plot the interaction",
              description:
                "The plot is what makes a moderation finding land with the reader: X on the horizontal axis, Y on the vertical, and two slope lines for low and high levels of the moderator. Nearly every journal expects it.",
            },
            {
              title: "Code categorical moderators correctly",
              description:
                "A categorical moderator such as gender is dummy-coded; with more than two categories you need a separate interaction term for each dummy. Splitting a continuous moderator at the median to make it categorical costs statistical power and is not recommended.",
            },
          ],
        },
        {
          type: "table",
          heading: "Which model number matches your hypothesis?",
          intro:
            "Mediation and moderation models are commonly referred to by numbered templates (Hayes model numbers). When your advisor says \"run Model 4\", this is what they mean:",
          columns: ["Model", "Structure", "Example hypothesis"],
          rows: [
            [
              "Model 1",
              "Simple moderation (X × W → Y)",
              "The effect varies by level of social support",
            ],
            [
              "Model 4",
              "Simple mediation (X → M → Y), single or parallel mediators",
              "Sleep quality mediates the effect",
            ],
            [
              "Model 6",
              "Serial mediation (X → M1 → M2 → Y)",
              "The effect runs through stress, which then affects sleep quality",
            ],
            [
              "Model 7",
              "Moderated mediation — moderator on path a",
              "The effect of X on the mediator differs by gender",
            ],
            [
              "Model 8",
              "Moderator on both path a and the direct effect",
              "The moderator conditions both the mediator and the remaining direct effect",
            ],
            [
              "Model 14",
              "Moderator on path b",
              "The mediator's effect on the outcome varies by condition",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Common mistakes",
          items: [
            "Relying on Baron and Kenny's four-step approach alone — it never tests the indirect effect directly, so it is no longer the standard; a bootstrap confidence interval is expected",
            "Leaning on the Sobel test, which assumes the indirect effect is normally distributed and is underpowered, especially in small samples",
            "Abandoning the mediation analysis because the total effect (path c) wasn't significant — significance of c is not a prerequisite; opposing indirect paths can cancel out and pull the total effect toward zero",
            "Presenting a mediation model built on cross-sectional data as causal evidence; mediation is a temporal claim theoretically, and the model does not establish it",
            "Measuring X, M and Y in the same questionnaire at the same moment while assuming the mediator precedes the outcome — this belongs in the limitations, stated plainly",
            "Stopping once the interaction term is significant; a moderation finding cannot be interpreted without simple slopes and a plot",
            "\"Showing\" moderation by splitting the sample into groups and computing a separate correlation in each — one correlation being significant and the other not does not mean the two differ significantly",
            "Median-splitting a continuous moderator into categories, which throws away information and statistical power",
            "Running a mediation model on a small sample (say 60-80 respondents) and reporting a non-significant indirect effect as \"there is no mediation\"; detecting an indirect effect takes a larger sample than detecting a direct one",
            "Reporting the path coefficients but never giving a confidence interval for the indirect effect — the single most common omission reviewers ask about",
          ],
        },
        {
          type: "paragraphs",
          heading: "Sample size and causality: the honest framing",
          body: [
            "Mediation models need more participants than a simple group comparison, because what's being tested is the product of two coefficients and its standard error carries the uncertainty of both paths. In practice, 150-200 respondents is reasonable for medium-sized paths, and 300 or more may be needed when one path is weak. In moderation analysis, interaction terms are systematically detected with less power than main effects, so a non-significant interaction usually means \"not enough power\" rather than \"no effect\". If you're still at the planning stage, we can run a power analysis specific to your model — see our sample size calculation page.",
            "On causality, being honest doesn't weaken your study — it strengthens it. A mediation model carries the claim that X leads to Y through M; but if all three variables were measured at the same moment in a single questionnaire, statistics cannot verify that ordering. The right move is to present the finding as a pattern consistent with theory and to state the design limitation explicitly in the discussion. If you do have experimental or longitudinal data, the opposite applies — foreground it. We write that distinction into the report for you and keep the claim at the level your data can carry; it is precisely the point reviewers press hardest.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "What is the difference between mediation and moderation?",
          answer:
            "Mediation explains the mechanism through which an effect operates: X affects the mediator (M), which in turn affects the outcome (Y) — it answers \"how\" or \"why\". Moderation shows for whom, or under what conditions, the effect gets stronger or weaker; the moderator isn't a link in the chain but a condition that changes the strength of the X→Y relationship. The practical distinction: a mediator theoretically comes AFTER X, whereas a moderator is usually a characteristic that was already there (gender, a personality trait, the context).",
        },
        {
          question: "Are the Baron-Kenny method and the Sobel test still valid?",
          answer:
            "They remain useful as a conceptual frame but are considered insufficient as a decision procedure. The core problem with the four-step approach is that it never tests the indirect effect directly and turns the significance of the total effect into an unnecessary prerequisite. The Sobel test assumes the indirect effect is normally distributed, whereas the product of two coefficients is skewed — leaving the test underpowered, particularly in small samples. The current standard is a bias-corrected 95% confidence interval for the indirect effect from at least 5,000 bootstrap resamples.",
        },
        {
          question: "Can I run mediation if the total effect isn't significant?",
          answer:
            "Yes. A significant total effect between X and Y (path c) is not a prerequisite for mediation — that belief is a leftover from the old four-step approach. Two indirect paths running in opposite directions can cancel each other out, or the sample may simply lack the power to detect the total effect; in both cases a significant indirect effect can still be present, and it is a valid finding. The decisive criterion is whether the bootstrap confidence interval for the indirect effect excludes zero.",
        },
        {
          question: "Do you use the PROCESS macro or AMOS?",
          answer:
            "No — we run the analyses on our own Python-based stack. The results are identical to what you'd get from those tools: the structures behind the same model numbers (simple mediation, serial mediation, moderated mediation), the same path coefficients, bias-corrected bootstrap confidence intervals, simple slopes and Johnson-Neyman output, a path diagram and APA-formatted tables. You don't need a licence for any program, and SPSS-compatible reporting is available too.",
        },
        {
          question: "How large a sample does mediation analysis need?",
          answer:
            "Detecting an indirect effect takes more participants than detecting a direct one, because the quantity tested is the product of two coefficients and the uncertainty compounds. For medium-sized paths, 150-200 respondents is usually enough; if one path is weak, 300 or more may be required. In moderation analysis, interaction terms are detected with less power — so a non-significant interaction often means \"not enough power\" rather than \"no effect\". We can run a power analysis specific to your model before you start collecting data.",
        },
        {
          question: "Can mediation be tested with cross-sectional data?",
          answer:
            "It can, and it is common in the literature — but the strength of the claim has to match the data. When X, M and Y are all collected at a single time point, statistics cannot verify the assumption that M precedes Y; the model assumes that ordering rather than testing it. The right approach is to present the result as a pattern consistent with theory and to state the design limitation explicitly in the discussion. We write that framing into the report for you — it's the point reviewers press hardest, and having it there in advance strengthens the paper rather than weakening it.",
        },
      ],
      cta: {
        heading: "Let us build your mediation or moderation model",
        text: "Send us your dataset and your hypothesis; we'll settle the variable roles with you, specify the model, and deliver the path diagram and APA tables — with bootstrap confidence intervals and simple slope plots — ready to paste into your thesis or manuscript. The initial review is free.",
        button: "Request a Free Initial Review",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default mediationModeration;
