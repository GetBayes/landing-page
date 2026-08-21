import type { Topic } from "../types";

const ancova: Topic = {
  key: "ancova",
  kind: "guide",
  datePublished: "2026-08-21",
  dateModified: "2026-08-21",
  related: [
    "education-statistics",
    "which-test",
    "normality-test",
    "reporting-results",
    "sample-size",
  ],
  locales: {
    tr: {
      metaTitle: "ANCOVA Nedir? Ön Test-Son Test Analizi Rehberi | GetBayes",
      metaDescription:
        "Ön test-son test kontrol gruplu desende ANCOVA nasıl yapılır: kovaryat seçimi, regresyon eğimlerinin homojenliği varsayımı, düzeltilmiş ortalamalar, kısmi eta kare ve fark skoru yerine neden ANCOVA kullanılmalı.",
      headline:
        "ANCOVA (Kovaryans Analizi) ve Ön Test-Son Test Deseni Nasıl Analiz Edilir?",
      lead: [
        "Ön test-son test kontrol gruplu bir desende doğru yöntem, çoğu durumda son test puanlarını bağımlı değişken, ön test puanlarını kovaryat (ortak değişken), grubu ise faktör olarak alan ANCOVA'dır (kovaryans analizi). ANCOVA iki iş birden yapar: grupların müdahaleden önceki başlangıç farkını istatistiksel olarak kontrol eder ve son test puanlarındaki ön testten kaynaklanan değişkenliği hata teriminden çıkararak testin gücünü artırır. Sonuç, ham son test ortalamaları değil, tüm gruplar aynı ön test ortalamasına sahip olsaydı beklenecek düzeltilmiş ortalamalardır (kestirilen marjinal ortalamalar) ve raporlanması gereken de bunlardır. Analizin geçerli olması için kritik ön koşul, grup ile kovaryat arasındaki etkileşimin anlamsız olmasıdır — buna regresyon eğimlerinin homojenliği varsayımı denir; anlamlı çıkarsa ANCOVA'nın tek bir grup farkı raporlaması yanıltıcı olur ve analiz düzenleyicilik (moderation) çerçevesine taşınır.",
        "Bu rehber ön test-son test verisini analiz etmenin dört yolunu karşılaştırır, ANCOVA'nın adımlarını ve varsayımlarını sırasıyla anlatır, jürilerin ve hakemlerin en sık takıldığı noktaları açıklar. Deseniniz için hangi yöntemin doğru olduğundan emin değilseniz veri setinizi bize gönderin: varsayım kontrollerinden düzeltilmiş ortalama tablolarına ve etki büyüklüklerine kadar analizi biz yürütür, tezinize veya makalenize doğrudan eklenebilecek APA formatında tablo ve grafiklerle teslim ederiz. Ön değerlendirme ücretsizdir.",
      ],
      audience: {
        heading: "Bu rehber kimler için?",
        items: [
          "Bir öğretim yönteminin, eğitim programının veya müdahalenin etkisini ön test-son test kontrol gruplu desenle sınayan yüksek lisans ve doktora öğrencileri",
          "Danışmanı ya da jürisi \"burada t-testi değil ANCOVA olmalı\" diyen tez yazarları",
          "Hazır gruplarla (sınıf, servis, klinik) çalıştığı için gruplarını randomize edemeyen araştırmacılar",
          "Hakemden \"başlangıç farkı kontrol edilmemiş\" ya da \"düzeltilmiş ortalamalar raporlanmamış\" notu alan makale yazarları",
          "Fark (kazanç) skoru mu, karma ANOVA mı, ANCOVA mı kullanacağına karar veremeyen herkes",
          "Psikoloji, hemşirelik, tıp ve spor bilimlerinde müdahale çalışması yürüten uygulamacılar",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Ön test-son test verisi dört farklı yolla analiz edilebilir — hangisi doğru?",
          intro:
            "Aynı veri setiyle dört farklı analiz yapılabilir ve bunlar farklı sorular sorar, bazen farklı sonuçlar verir. Tez taslaklarında en sık görülen hata, en zayıf iki seçeneğin tercih edilmesidir:",
          columns: ["Yaklaşım", "Ne yapar", "Ne zaman uygun", "Riski"],
          rows: [
            [
              "Yalnızca son test karşılaştırması (bağımsız t-testi / ANOVA)",
              "Grupların son test ortalamalarını karşılaştırır, ön testi hiç kullanmaz",
              "Yalnızca gerçek randomizasyon yapıldıysa ve ön test yoksa",
              "Elinizdeki ön test bilgisini çöpe atar; başlangıç farkı varsa bulgu doğrudan yanlı olur",
            ],
            [
              "Her grupta ayrı bağımlı (eşleştirilmiş) t-testi",
              "Deney grubunun ve kontrol grubunun kendi içindeki değişimini ayrı ayrı test eder",
              "Betimleyici bir ek bilgi olarak, asıl analizin yanında",
              "\"Deneyde anlamlı arttı, kontrolde artmadı\" iki grubun BİRBİRİNDEN farklı olduğunu göstermez — en yaygın yorum hatası budur",
            ],
            [
              "Fark (kazanç) skoru üzerinden t-testi / ANOVA",
              "Son test eksi ön test farkını hesaplayıp grupları karşılaştırır",
              "Randomize desenlerde savunulabilir; yorumu sezgiseldir",
              "Ön test ile son test arasındaki regresyon eğiminin tam olarak 1 olduğunu varsayar; pratikte bu nadiren doğrudur ve güç kaybettirir",
            ],
            [
              "Karma (mixed) ANOVA — zaman × grup etkileşimi",
              "İki grubun zaman içindeki değişim örüntüsünü karşılaştırır",
              "İkiden fazla ölçüm zamanı varsa (ör. ön test-son test-kalıcılık testi)",
              "İki ölçümlü desende etkileşim testi matematiksel olarak fark skoru analiziyle eşdeğerdir; ANCOVA'nın güç avantajını vermez",
            ],
            [
              "ANCOVA (ön test kovaryat)",
              "Ön test farkını istatistiksel olarak kontrol eder, düzeltilmiş son test ortalamalarını karşılaştırır",
              "İki ölçümlü ön test-son test kontrol gruplu desenlerin çoğunda",
              "Varsayımları vardır; özellikle regresyon eğimlerinin homojenliği kontrol edilmezse sonuç yanıltıcı olabilir",
            ],
          ],
        },
        {
          type: "steps",
          heading: "ANCOVA adım adım",
          intro:
            "Sıralama önemlidir: varsayım kontrolleri asıl analizden önce gelir, çünkü bir varsayımın ihlali analizin yöntemini değiştirir, sadece bir dipnot eklemez.",
          steps: [
            {
              title: "Kovaryatı kuramsal gerekçeyle seçin",
              description:
                "Ön test-son test deseninde kovaryat doğal olarak ön test puanıdır. Ek kovaryat (yaş, başlangıç motivasyonu, hastalık süresi gibi) ekleyecekseniz iki koşulu birden sağlamalıdır: bağımlı değişkenle anlamlı ilişkili olmalı ve müdahaleden ETKİLENMEMİŞ, yani müdahaleden önce ölçülmüş olmalıdır. Müdahale sonrası ölçülen bir değişkeni kovaryat yapmak, müdahalenin etkisinin bir kısmını modelden silmek demektir.",
            },
            {
              title: "Kovaryat ile bağımlı değişken arasındaki ilişkinin doğrusal olduğunu doğrulayın",
              description:
                "ANCOVA, kovaryat ile son test arasındaki ilişkiyi doğrusal varsayar. Her grup için ayrı ayrı çizilen saçılım grafiği bunu görmenin en hızlı yoludur. İlişki eğriyse ya da yoksa, kovaryat modele hiçbir şey katmaz — bu durumda ANCOVA'da ısrar etmek yerine desen yeniden düşünülmelidir.",
            },
            {
              title: "Regresyon eğimlerinin homojenliğini test edin",
              description:
                "Modele geçici olarak grup × kovaryat etkileşim terimi eklenir. Bu terim ANLAMSIZ çıkmalıdır (p > ,05). Anlamsızsa etkileşim modelden çıkarılır ve asıl ANCOVA çalıştırılır. Anlamlı çıkarsa, müdahalenin etkisi ön test düzeyine göre değişiyor demektir; bu durumda tek bir \"grup farkı\" raporlamak yanıltıcıdır ve analiz düzenleyicilik çerçevesine taşınır.",
            },
            {
              title: "Kalan varsayımları artıklar üzerinden kontrol edin",
              description:
                "Normallik varsayımı ham puanlarda değil, modelin artıklarında (residuals) aranır; varyansların homojenliği Levene testiyle sınanır; uç değerler kovaryat-bağımlı değişken düzleminde tek tek değerlendirilir. Küçük gruplarda tek bir aykırı gözlem düzeltilmiş ortalamaları görünür biçimde kaydırabilir.",
            },
            {
              title: "Asıl modeli çalıştırın ve grup etkisini okuyun",
              description:
                "Model son test ~ grup + ön test biçimindedir. Grup satırındaki F değeri, ön test kontrol edildikten sonra gruplar arasında anlamlı fark olup olmadığını söyler. Kovaryat satırının anlamlı çıkması beklenen ve istenen bir sonuçtur: ön testin son testi yordadığını, dolayısıyla kovaryat seçiminin doğru olduğunu gösterir.",
            },
            {
              title: "Düzeltilmiş ortalamaları raporlayın",
              description:
                "ANCOVA'nın asıl çıktısı düzeltilmiş (kestirilen marjinal) ortalamalardır — tüm gruplar aynı ön test ortalamasına sahip olsaydı beklenen son test değerleri. Tabloda hem ham ortalama ve standart sapmaları, hem düzeltilmiş ortalamaları standart hatalarıyla birlikte vermek en iyi uygulamadır; hakemler bu ikisinin farkını görmek ister.",
            },
            {
              title: "Etki büyüklüğünü ve ikili karşılaştırmaları ekleyin",
              description:
                "Kısmi eta kare (ηp²) ANCOVA'nın standart etki büyüklüğü ölçüsüdür. Üç ve daha fazla grup varsa hangi ikilinin farklılaştığı, düzeltilmiş ortalamalar üzerinden ve Bonferroni gibi bir düzeltmeyle yapılan ikili karşılaştırmalarla belirlenir; düzeltmesiz çoklu karşılaştırma birinci tip hata oranını şişirir.",
            },
          ],
        },
        {
          type: "table",
          heading: "ANCOVA varsayımları: nasıl kontrol edilir, ihlal edilirse ne yapılır",
          intro:
            "Varsayım listesini yazmak yetmez; her satırın bir de \"peki sağlanmazsa?\" cevabı olmalıdır. Tez savunmalarında en çok sorulan da budur:",
          columns: ["Varsayım", "Nasıl kontrol edilir", "İhlal edilirse"],
          rows: [
            [
              "Regresyon eğimlerinin homojenliği",
              "Grup × kovaryat etkileşim terimi modele eklenir; anlamsız olmalı",
              "Etki ön test düzeyine göre değişiyordur; etkileşim raporlanır, hangi ön test aralığında farkın anlamlı olduğu (Johnson-Neyman) verilir",
            ],
            [
              "Kovaryat ile bağımlı değişkenin doğrusal ilişkisi",
              "Grup bazında saçılım grafiği ve korelasyon",
              "Dönüşüm denenir ya da doğrusal olmayan terim eklenir; ilişki hiç yoksa kovaryat modelden çıkarılır",
            ],
            [
              "Artıkların normalliği",
              "Artıklarda Shapiro-Wilk, Q-Q grafiği, çarpıklık-basıklık",
              "Grup büyüklükleri makul ve dengeliyse ANCOVA sağlamdır; ciddi ihlalde sıra temelli (rank) ANCOVA veya bootstrap alternatifleri kullanılır",
            ],
            [
              "Varyansların homojenliği",
              "Levene testi (p > ,05 beklenir)",
              "Gruplar dengeliyse etkisi sınırlıdır; dengesizse dirençli (robust) standart hatalar tercih edilir",
            ],
            [
              "Kovaryatın müdahaleden bağımsız olması",
              "Ölçüm zamanı kontrol edilir: kovaryat müdahaleden ÖNCE ölçülmüş olmalı",
              "Müdahale sonrası ölçülen değişken kovaryat olarak kullanılamaz — etkinin bir kısmını silerek sonucu aşağı çeker",
            ],
            [
              "Kovaryatın güvenilir ölçülmüş olması",
              "Ön testin iç tutarlılık katsayısı (Cronbach alfa) incelenir",
              "Düşük güvenilirlikli kovaryat başlangıç farkını eksik düzeltir; sınırlılık olarak yazılmalıdır",
            ],
            [
              "Uç değerlerin kontrolü",
              "Kovaryat-bağımlı değişken saçılımı, standartlaştırılmış artıklar",
              "Aykırı gözlemler tek tek değerlendirilir; analiz uç değerli ve uç değersiz iki kez çalıştırılıp sonucun değişip değişmediği raporlanır",
            ],
          ],
        },
        {
          type: "table",
          heading: "Kısmi eta kare (ηp²) nasıl yorumlanır?",
          intro:
            "\"Anlamlı çıktı\" tek başına bir bulgu değildir; farkın büyüklüğü de raporlanmalıdır. Yaygın kullanılan referans aralıkları şunlardır:",
          columns: ["ηp² değeri", "Yorum", "Ne anlama gelir"],
          rows: [
            [
              "≈ ,01",
              "Küçük etki",
              "Son testteki değişkenliğin yaklaşık %1'i grup farkıyla açıklanıyor",
            ],
            [
              "≈ ,06",
              "Orta etki",
              "Uygulamada fark edilebilir, çoğu müdahale çalışmasında beklenen düzey",
            ],
            [
              "≈ ,14 ve üzeri",
              "Büyük etki",
              "Güçlü bir müdahale etkisi; küçük örneklemde çıktıysa dikkatle yorumlanmalı",
            ],
            [
              "Anlamlı ama küçük",
              "İstatistiksel anlamlılık ≠ pratik önem",
              "Büyük örneklemlerde küçük farklar da anlamlı çıkar; tartışmada bu ayrım açıkça yapılmalı",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Sık yapılan hatalar",
          items: [
            "Ön test verisi elde olduğu halde yalnızca son test puanlarını bağımsız t-testiyle karşılaştırmak — başlangıç farkı varsa bulgu doğrudan yanlıdır",
            "Deney ve kontrol grubunda ayrı ayrı bağımlı t-testi yapıp \"deney grubunda anlamlı arttı, kontrolde artmadı, demek ki yöntem etkili\" demek; iki testten birinin anlamlı olması aradaki FARKIN anlamlı olduğunu göstermez",
            "Regresyon eğimlerinin homojenliği varsayımını hiç test etmemek — ANCOVA'nın en kritik ön koşulu budur ve tez savunmalarında en sık sorulan sorudur",
            "Analizi ANCOVA ile yapıp tabloda ham son test ortalamalarını raporlamak; raporlanması gereken düzeltilmiş ortalamalar ve standart hatalarıdır",
            "Müdahaleden sonra ölçülen bir değişkeni kovaryat olarak modele koymak — müdahalenin etkisinin bir kısmı bu değişkene geçtiği için etki sistematik olarak küçülür",
            "\"Ne kadar çok kovaryat o kadar iyi kontrol\" mantığıyla modele beş-altı değişken eklemek; her kovaryat serbestlik derecesi harcar ve birbiriyle yüksek ilişkili kovaryatlar modeli kararsızlaştırır",
            "Normallik varsayımını ham puanlarda kontrol etmek; ANCOVA'da normallik artıklar üzerinde aranır",
            "Randomizasyon yapılmamış, ön testte belirgin biçimde farklı gruplarda ANCOVA'yı \"grupları eşitledik\" diye sunmak — istatistiksel düzeltme, rastgele atamanın yerini tutmaz",
            "Üç ve daha fazla grupta düzeltme yapılmamış çoklu ikili karşılaştırmalar yürütmek (Bonferroni veya Sidak gerekir)",
            "Etki büyüklüğünü (ηp²) hiç raporlamamak; APA ve çoğu dergi bunu zorunlu tutar",
            "Ön test-son test-kalıcılık gibi üç ölçümlü bir deseni tek bir ANCOVA'ya sıkıştırmaya çalışmak; bu desende karma (mixed) model daha uygundur",
          ],
        },
        {
          type: "paragraphs",
          heading: "Bulgular bölümünde nasıl yazılır?",
          body: [
            "APA formatında bir ANCOVA sonucu üç bilgiyi birden taşır: varsayım kontrolünün sonucu, grup etkisinin test istatistiği ve düzeltilmiş ortalamalar. Örnek bir kalıp şöyledir: \"Regresyon eğimlerinin homojenliği varsayımı sağlanmıştır, F(1, 76) = 0,84, p = ,362. Ön test puanları kovaryat olarak kontrol edildiğinde son test puanları açısından gruplar arasında anlamlı fark bulunmuştur, F(1, 77) = 12,45, p = ,001, ηp² = ,139. Düzeltilmiş ortalamalar deney grubunda 74,26 (SH = 1,12), kontrol grubunda 67,84 (SH = 1,11) olarak hesaplanmıştır.\" Serbestlik derecelerinin kovaryat nedeniyle bir azaldığına dikkat edin — ANCOVA raporlarında en sık gözden kaçan ayrıntı budur.",
            "Tabloya hem ham ortalama ve standart sapmaları hem de düzeltilmiş ortalamaları standart hatalarıyla koymak, okurun düzeltmenin ne kadar oynadığını görmesini sağlar; iyi bir bulgular bölümü bu iki sütunu yan yana verir. Grafik tarafında ise gruplara göre ön test ve son test ortalamalarını gösteren çizgi grafik ya da düzeltilmiş ortalamaları güven aralıklarıyla veren sütun grafik yeterlidir. Raporlarımızda bu tabloları ve grafikleri tezinize veya makalenize doğrudan yapıştırabileceğiniz biçimde, kullandığınız dergi ya da enstitü şablonuna uygun olarak hazırlıyoruz.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Hazır gruplarla çalışıyorsanız: dürüst çerçeve",
          body: [
            "Eğitim, hemşirelik ve saha çalışmalarının büyük kısmında gruplar rastgele atanamaz; mevcut sınıflar, servisler ya da klinikler deney ve kontrol grubu olarak kullanılır. Bu desende ANCOVA hâlâ doğru araçtır, ama ne yaptığı konusunda net olmak gerekir: ANCOVA ön test puanı bakımından istatistiksel bir düzeltme yapar, grupları gerçekten denk hale getirmez. Grupların ölçülmemiş bir özellik bakımından (öğretmen deneyimi, okul kaynakları, hasta profili) sistematik olarak farklı olması olasılığı modelde yer almaz. Nitekim yarı deneysel desenlerde fark skoru analizi ile ANCOVA'nın birbiriyle çelişen sonuçlar verebilmesi metodoloji literatüründe Lord paradoksu adıyla bilinen ve hâlâ tartışılan bir durumdur; iki yöntem farklı sorulara cevap verdiği için ikisinin de \"doğru\" olduğu, seçimin araştırma sorusuna bağlı olduğu kabul edilir.",
            "Bunun pratik karşılığı şudur: bulguyu \"yöntem şu kadar etki üretti\" diye kesin bir nedensel iddia olarak değil, \"başlangıç düzeyi kontrol edildiğinde gruplar arasında şu büyüklükte bir fark gözlendi\" biçiminde yazmak ve randomizasyon eksikliğini sınırlılıklar bölümünde açıkça belirtmek daha savunulabilir bir çalışma üretir. Hakemin zorlayacağı nokta tam olarak burasıdır ve önden yazılmış olması çalışmayı zayıflatmaz, güçlendirir. Raporlarımızda iddianın düzeyini verinizin taşıyabileceği sınırda tutar, savunmada karşınıza çıkacak soruları önceden yanıtlanmış halde teslim ederiz.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "ANCOVA ne zaman kullanılır?",
          answer:
            "En tipik kullanımı ön test-son test kontrol gruplu desenlerdir: son test bağımlı değişken, ön test kovaryat, grup faktördür. ANCOVA burada iki iş yapar — grupların müdahale öncesindeki başlangıç farkını istatistiksel olarak kontrol eder ve son testteki değişkenliğin ön testten kaynaklanan kısmını hata teriminden çıkararak testin gücünü artırır. Bunun dışında, gruplar arası bir karşılaştırmayı bozan bilinen ve müdahaleden önce ölçülmüş bir değişken (yaş, hastalık süresi, başlangıç motivasyonu) olduğunda da kullanılabilir.",
        },
        {
          question: "Fark (kazanç) skoru mu, ANCOVA mı kullanmalıyım?",
          answer:
            "Randomize edilmiş bir desende ikisi de yanlı olmayan sonuç verir, ancak ANCOVA neredeyse her zaman daha güçlüdür: fark skoru yaklaşımı, ön test ile son test arasındaki regresyon eğiminin tam olarak 1 olduğunu varsayar, ANCOVA ise bu eğimi veriden kestirir. Gruplar rastgele atanmadıysa iki yöntem farklı sonuçlar verebilir (Lord paradoksu) — çünkü farklı soruları yanıtlarlar: fark skoru \"kim daha çok ilerledi?\", ANCOVA \"aynı başlangıç düzeyindeki iki kişiden hangisi sonda daha yüksek?\" sorusunu sorar. Uygulamada tezlerin ve dergilerin beklentisi genellikle ANCOVA yönündedir.",
        },
        {
          question: "Regresyon eğimlerinin homojenliği varsayımı sağlanmazsa ne yapılır?",
          answer:
            "Bu varsayımın ihlali bir felaket değil, aslında bir bulgudur: müdahalenin etkisi ön test düzeyine göre değişiyor demektir — örneğin başlangıç puanı düşük olanlar yöntemden daha çok yararlanıyor olabilir. Doğru yol, ihlali gizlemek yerine grup × kovaryat etkileşimini raporlamak ve etkinin hangi ön test aralığında anlamlı olduğunu Johnson-Neyman tekniğiyle göstermektir. Bu, standart bir ANCOVA tablosundan çok daha zengin ve yayınlanabilir bir bulgudur; analizi bu çerçeveye taşıma işini sizin adınıza yapıyoruz.",
        },
        {
          question: "Karma (mixed) ANOVA ile ANCOVA arasındaki fark nedir?",
          answer:
            "Karma ANOVA zamanı tekrarlı ölçüm faktörü olarak alır ve asıl ilgilendiğiniz şey zaman × grup etkileşimidir. İki ölçümlü (ön test-son test) bir desende bu etkileşim testi matematiksel olarak fark skoru analiziyle eşdeğerdir, dolayısıyla ANCOVA'nın güç avantajını sağlamaz. Pratik kural: yalnızca ön test ve son test varsa ANCOVA tercih edilir; ön test, son test ve kalıcılık testi gibi üç ve daha fazla ölçüm zamanı varsa karma model daha uygundur — bu durumda ön test yine kovaryat olarak modele alınabilir.",
        },
        {
          question: "ANCOVA için kaç kişilik örneklem gerekir?",
          answer:
            "İki gruplu bir desende orta düzey bir etki için (d ≈ 0,50) %80 güçte kabaca 128 katılımcı gerekir; ancak ön test ile son test arasındaki korelasyon 0,60 civarındaysa ANCOVA bu sayıyı yaklaşık üçte bir oranında düşürür, yani 85 civarı yeterli olabilir. Üç gruplu bir desende orta etki (f = 0,25) için gereken yaklaşık 160 kişilik örneklem, aynı korelasyonla 105 civarına iner. ANCOVA'nın en somut faydası budur: iyi seçilmiş bir kovaryat, gereken katılımcı sayısını gözle görülür biçimde azaltır. Veri toplamaya başlamadan önce desenize özgü güç analizini yapabiliriz.",
        },
        {
          question: "Analizleri hangi programla yapıyorsunuz? SPSS çıktısı alabilir miyim?",
          answer:
            "Analizleri kendi Python tabanlı altyapımızla yürütüyoruz; sonuçlar SPSS uyumludur ve klasik menülerden alacağınız çıktılarla birebir aynıdır — aynı F ve p değerleri, aynı kısmi eta kare, düzeltilmiş (kestirilen marjinal) ortalamalar, Levene testi, homojenlik kontrolü ve Bonferroni düzeltmeli ikili karşılaştırmalar. Ayrıca G*Power benzeri güç analizi çıktılarını, duyarlılık grafikleriyle birlikte veriyoruz. Herhangi bir program lisansına sahip olmanız gerekmez; raporu doğrudan tezinize veya makalenize ekleyebileceğiniz APA formatında teslim ediyoruz.",
        },
      ],
      cta: {
        heading: "Ön test-son test verinizi doğru yöntemle analiz edelim",
        text: "Veri setinizi ve desen bilginizi gönderin; hangi yöntemin sizin deseninize uyduğunu birlikte netleştirelim, varsayım kontrollerinden düzeltilmiş ortalama tablolarına kadar analizi yürütelim ve tezinize ya da makalenize doğrudan eklenebilecek APA formatında tablo ve grafiklerle teslim edelim. Ön değerlendirme ücretsizdir.",
        button: "Ücretsiz Ön Değerlendirme İsteyin",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili hizmetler ve rehberler",
    },
    en: {
      metaTitle: "ANCOVA and Pretest-Posttest Analysis: A Guide | GetBayes",
      metaDescription:
        "How to analyse a pretest-posttest control group design with ANCOVA: choosing covariates, the homogeneity of regression slopes assumption, adjusted means, partial eta squared, and why gain scores fall short.",
      headline: "How to Analyse a Pretest-Posttest Design with ANCOVA",
      lead: [
        "In a pretest-posttest control group design, the right method in most cases is ANCOVA (analysis of covariance), with posttest scores as the dependent variable, pretest scores as the covariate and group as the factor. ANCOVA does two jobs at once: it statistically controls for the groups' baseline differences before the intervention, and it removes the pretest-related variance from the error term, which raises the power of the test. Its output is not the raw posttest means but the adjusted means (estimated marginal means) — the posttest values you would expect if every group had started from the same pretest average — and those are the ones to report. The critical precondition for a valid ANCOVA is that the group × covariate interaction is non-significant; this is the homogeneity of regression slopes assumption. If the interaction is significant, reporting a single group difference is misleading and the analysis moves into a moderation framework instead.",
        "This guide compares the four ways of analysing pretest-posttest data, walks through the steps and assumptions of ANCOVA in order, and covers the points examiners and reviewers press hardest. If you're not sure which method fits your design, send us your dataset: we run everything from the assumption checks to the adjusted-means tables and effect sizes, and deliver APA-formatted tables and figures you can paste straight into your thesis or manuscript. The initial review is free.",
      ],
      audience: {
        heading: "Who is this guide for?",
        items: [
          "Master's and doctoral students testing a teaching method, programme or intervention with a pretest-posttest control group design",
          "Thesis authors whose advisor or committee said \"this should be ANCOVA, not a t-test\"",
          "Researchers working with intact groups (classrooms, wards, clinics) who cannot randomise",
          "Authors whose reviewers flagged uncontrolled baseline differences or missing adjusted means",
          "Anyone stuck choosing between gain scores, mixed ANOVA and ANCOVA",
          "Practitioners running intervention studies in psychology, nursing, medicine and sports science",
        ],
      },
      sections: [
        {
          type: "table",
          heading: "Four ways to analyse pretest-posttest data — which one is right?",
          intro:
            "The same dataset can be analysed four different ways; they ask different questions and can give different answers. The most common mistake in thesis drafts is picking one of the two weakest options:",
          columns: ["Approach", "What it does", "When it fits", "The risk"],
          rows: [
            [
              "Posttest only (independent t-test / ANOVA)",
              "Compares group posttest means and ignores the pretest entirely",
              "Only with true randomisation and no pretest available",
              "Throws away the pretest data you already have; if baselines differ, the finding is biased outright",
            ],
            [
              "Separate paired t-tests within each group",
              "Tests change within the treatment group and within the control group separately",
              "As descriptive supporting detail alongside the main analysis",
              "\"Significant in the treatment group, not in the control\" does NOT show the two groups differ from each other — the most common interpretation error there is",
            ],
            [
              "Gain (change) scores with a t-test / ANOVA",
              "Computes posttest minus pretest and compares groups on that difference",
              "Defensible in randomised designs; intuitive to interpret",
              "Assumes the pretest-posttest regression slope is exactly 1, which is rarely true in practice, and loses power",
            ],
            [
              "Mixed ANOVA — time × group interaction",
              "Compares the two groups' change patterns over time",
              "When there are three or more measurement points (e.g. pretest, posttest, follow-up)",
              "With only two measurements the interaction test is mathematically equivalent to the gain-score analysis; no ANCOVA power advantage",
            ],
            [
              "ANCOVA (pretest as covariate)",
              "Controls for baseline differences and compares adjusted posttest means",
              "Most two-measurement pretest-posttest control group designs",
              "It has assumptions; skipping the homogeneity of regression slopes check in particular can make the result misleading",
            ],
          ],
        },
        {
          type: "steps",
          heading: "ANCOVA, step by step",
          intro:
            "Order matters: the assumption checks come before the main analysis, because a violated assumption changes the method rather than just adding a footnote.",
          steps: [
            {
              title: "Choose the covariate on theoretical grounds",
              description:
                "In a pretest-posttest design the covariate is naturally the pretest score. If you add further covariates (age, baseline motivation, disease duration), each must meet two conditions: it has to be meaningfully related to the outcome, and it must be UNAFFECTED by the intervention — that is, measured before it. Using a variable measured after the intervention as a covariate removes part of the treatment effect from the model.",
            },
            {
              title: "Verify the covariate-outcome relationship is linear",
              description:
                "ANCOVA assumes a linear relationship between the covariate and the posttest. A scatterplot drawn separately for each group is the fastest way to see this. If the relationship is curved or absent, the covariate adds nothing — rather than forcing ANCOVA, the design needs rethinking.",
            },
            {
              title: "Test the homogeneity of regression slopes",
              description:
                "Temporarily add a group × covariate interaction term to the model. This term should be NON-significant (p > .05). If it is, drop the interaction and run the actual ANCOVA. If it is significant, the effect of the intervention varies by pretest level; reporting a single \"group difference\" would then be misleading and the analysis moves into a moderation framework.",
            },
            {
              title: "Check the remaining assumptions on the residuals",
              description:
                "Normality is assessed on the model residuals, not on the raw scores; homogeneity of variance is tested with Levene's test; outliers are judged individually in the covariate-outcome plane. In small groups a single outlying observation can visibly shift the adjusted means.",
            },
            {
              title: "Run the model and read the group effect",
              description:
                "The model is posttest ~ group + pretest. The F value on the group row tells you whether the groups differ significantly once the pretest is controlled. A significant covariate row is expected and welcome: it shows the pretest predicts the posttest, confirming the covariate was well chosen.",
            },
            {
              title: "Report the adjusted means",
              description:
                "The real output of ANCOVA is the adjusted (estimated marginal) means — the posttest values expected if all groups had the same pretest average. Best practice is to table the raw means with standard deviations alongside the adjusted means with standard errors; reviewers want to see the gap between the two.",
            },
            {
              title: "Add effect size and pairwise comparisons",
              description:
                "Partial eta squared (ηp²) is the standard effect size for ANCOVA. With three or more groups, which pairs differ is determined from the adjusted means using pairwise comparisons with a correction such as Bonferroni; uncorrected multiple comparisons inflate the Type I error rate.",
            },
          ],
        },
        {
          type: "table",
          heading: "ANCOVA assumptions: how to check them, what to do when they fail",
          intro:
            "Listing the assumptions isn't enough; every row needs a \"what if it doesn't hold?\" answer. That is exactly what gets asked in a defence:",
          columns: ["Assumption", "How to check", "If violated"],
          rows: [
            [
              "Homogeneity of regression slopes",
              "Add the group × covariate interaction to the model; it should be non-significant",
              "The effect varies by pretest level; report the interaction and use Johnson-Neyman to show over which pretest range the difference is significant",
            ],
            [
              "Linear covariate-outcome relationship",
              "Scatterplot and correlation within each group",
              "Try a transformation or a non-linear term; if there is no relationship at all, drop the covariate",
            ],
            [
              "Normality of residuals",
              "Shapiro-Wilk on residuals, Q-Q plot, skewness and kurtosis",
              "ANCOVA is robust with reasonable, balanced group sizes; for severe violations use rank-based ANCOVA or bootstrap alternatives",
            ],
            [
              "Homogeneity of variances",
              "Levene's test (p > .05 expected)",
              "Limited impact with balanced groups; with unbalanced groups prefer robust standard errors",
            ],
            [
              "Covariate independent of the treatment",
              "Check the timing: the covariate must be measured BEFORE the intervention",
              "A variable measured after the intervention cannot serve as a covariate — it absorbs part of the effect and shrinks the result",
            ],
            [
              "Covariate measured reliably",
              "Inspect the internal consistency (Cronbach's alpha) of the pretest",
              "An unreliable covariate under-corrects the baseline difference; state it as a limitation",
            ],
            [
              "Outlier control",
              "Covariate-outcome scatter, standardised residuals",
              "Judge outlying cases individually; run the analysis with and without them and report whether the conclusion changes",
            ],
          ],
        },
        {
          type: "table",
          heading: "How to interpret partial eta squared (ηp²)",
          intro:
            "\"It came out significant\" is not a finding on its own; the size of the difference belongs in the report too. The commonly used reference bands are:",
          columns: ["ηp² value", "Interpretation", "What it means"],
          rows: [
            [
              "≈ .01",
              "Small effect",
              "About 1% of the posttest variance is explained by the group difference",
            ],
            [
              "≈ .06",
              "Medium effect",
              "Noticeable in practice; the level most intervention studies expect",
            ],
            [
              "≈ .14 and above",
              "Large effect",
              "A strong intervention effect; interpret with care if it comes from a small sample",
            ],
            [
              "Significant but small",
              "Statistical significance ≠ practical importance",
              "In large samples even small differences reach significance; make the distinction explicit in the discussion",
            ],
          ],
        },
        {
          type: "bullets",
          heading: "Common mistakes",
          items: [
            "Comparing posttest scores with an independent t-test when pretest data exists — if baselines differ, the finding is biased outright",
            "Running separate paired t-tests in each group and concluding \"it rose significantly in the treatment group but not in the control, so the method works\"; one test being significant does not show that the DIFFERENCE between groups is significant",
            "Never testing the homogeneity of regression slopes — it is ANCOVA's most critical precondition and the question most often asked in a defence",
            "Running ANCOVA but tabling the raw posttest means; what belongs in the table are the adjusted means with their standard errors",
            "Using a variable measured after the intervention as a covariate — part of the treatment effect leaks into it, systematically shrinking the estimate",
            "Adding five or six covariates on a \"more control is better\" logic; each covariate costs a degree of freedom, and highly intercorrelated covariates destabilise the model",
            "Checking normality on the raw scores; in ANCOVA normality is assessed on the residuals",
            "Presenting ANCOVA on non-randomised groups with markedly different baselines as \"we equated the groups\" — statistical adjustment does not replace random assignment",
            "Running uncorrected multiple pairwise comparisons with three or more groups (Bonferroni or Šidák is needed)",
            "Never reporting the effect size (ηp²), which APA and most journals require",
            "Forcing a three-measurement design (pretest, posttest, follow-up) into a single ANCOVA; a mixed model fits that design better",
          ],
        },
        {
          type: "paragraphs",
          heading: "How to write it up in the results section",
          body: [
            "An APA-formatted ANCOVA result carries three pieces of information at once: the assumption check, the test statistic for the group effect, and the adjusted means. A usable template: \"The homogeneity of regression slopes assumption was satisfied, F(1, 76) = 0.84, p = .362. With pretest scores controlled as a covariate, there was a significant difference between groups on posttest scores, F(1, 77) = 12.45, p = .001, ηp² = .139. Adjusted means were 74.26 (SE = 1.12) for the treatment group and 67.84 (SE = 1.11) for the control group.\" Note that the degrees of freedom drop by one because of the covariate — the detail most often missed in ANCOVA write-ups.",
            "Putting both the raw means with standard deviations and the adjusted means with standard errors in the table lets the reader see how much the adjustment moved things; a good results section shows those columns side by side. For figures, either a line plot of pretest and posttest means by group or a bar chart of adjusted means with confidence intervals will do. We prepare these tables and figures ready to paste into your thesis or manuscript, formatted to your journal's or institute's template.",
          ],
        },
        {
          type: "paragraphs",
          heading: "If you're working with intact groups: an honest framing",
          body: [
            "In most education, nursing and field research, groups cannot be randomly assigned; existing classes, wards or clinics serve as treatment and control groups. ANCOVA is still the right tool in that design, but it pays to be clear about what it does: it applies a statistical adjustment for pretest scores, it does not actually make the groups equivalent. The possibility that the groups differ systematically on something unmeasured — teacher experience, school resources, patient profile — is nowhere in the model. Indeed, the fact that gain-score analysis and ANCOVA can point in different directions in quasi-experimental designs is a known and still-debated issue in the methodology literature, known as Lord's paradox; both are considered legitimate because they answer different questions, and the choice depends on the research question.",
            "In practice this means writing the finding not as a firm causal claim (\"the method produced this much effect\") but as \"with baseline level controlled, a difference of this size was observed between groups\", and stating the absence of randomisation openly in the limitations. That is precisely the point a reviewer will press, and having it written in advance strengthens the paper rather than weakening it. In our reports we keep the strength of the claim within what your data can carry, and hand you the defence questions already answered.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "When should ANCOVA be used?",
          answer:
            "Its most typical use is the pretest-posttest control group design: posttest as the dependent variable, pretest as the covariate, group as the factor. ANCOVA does two things there — it statistically controls for the groups' pre-intervention baseline difference, and it removes the pretest-related portion of posttest variance from the error term, raising the power of the test. Beyond that, it can be used whenever a known variable measured before the intervention (age, disease duration, baseline motivation) would otherwise distort a between-groups comparison.",
        },
        {
          question: "Should I use gain scores or ANCOVA?",
          answer:
            "In a randomised design both give unbiased results, but ANCOVA is almost always more powerful: the gain-score approach assumes the pretest-posttest regression slope is exactly 1, whereas ANCOVA estimates that slope from the data. When groups are not randomly assigned, the two can disagree (Lord's paradox) — because they answer different questions: gain scores ask \"who improved more?\", ANCOVA asks \"of two people who started at the same level, who ends up higher?\". In practice, theses and journals generally expect ANCOVA.",
        },
        {
          question: "What if the homogeneity of regression slopes assumption fails?",
          answer:
            "A violation is not a disaster — it is itself a finding: the effect of the intervention varies with pretest level, e.g. participants who started low may benefit more from the method. The right move is not to hide it but to report the group × covariate interaction and use the Johnson-Neyman technique to show over which range of pretest scores the effect is significant. That is a far richer and more publishable result than a standard ANCOVA table, and moving the analysis into that framework is work we do for you.",
        },
        {
          question: "What is the difference between mixed ANOVA and ANCOVA?",
          answer:
            "Mixed ANOVA treats time as a repeated-measures factor, and what you actually care about is the time × group interaction. With only two measurements (pretest and posttest) that interaction test is mathematically equivalent to a gain-score analysis, so it does not deliver ANCOVA's power advantage. The practical rule: with only a pretest and a posttest, prefer ANCOVA; with three or more measurement points (pretest, posttest, follow-up), a mixed model fits better — and the pretest can still enter that model as a covariate.",
        },
        {
          question: "How large a sample does ANCOVA need?",
          answer:
            "For a two-group design and a medium effect (d ≈ 0.50), roughly 128 participants are needed for 80% power; but if the pretest-posttest correlation is around .60, ANCOVA cuts that by about a third, so around 85 may suffice. In a three-group design, the roughly 160 participants required for a medium effect (f = 0.25) drops to about 105 at the same correlation. That is ANCOVA's most concrete benefit: a well-chosen covariate visibly reduces the number of participants you need. We can run a power analysis specific to your design before you start collecting data.",
        },
        {
          question: "Which software do you use? Can I get SPSS-compatible output?",
          answer:
            "We run the analyses on our own Python-based stack; the results are SPSS-compatible and identical to what the classic menus would give you — the same F and p values, the same partial eta squared, adjusted (estimated marginal) means, Levene's test, the slope homogeneity check and Bonferroni-corrected pairwise comparisons. We also provide G*Power-style power analysis output with sensitivity curves. You don't need a licence for any program, and the report arrives in APA format, ready to drop into your thesis or manuscript.",
        },
      ],
      cta: {
        heading: "Let us analyse your pretest-posttest data with the right method",
        text: "Send us your dataset and a note on your design; we'll settle which method fits, run everything from the assumption checks to the adjusted-means tables, and deliver APA-formatted tables and figures ready to paste into your thesis or manuscript. The initial review is free.",
        button: "Request a Free Initial Review",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related services and guides",
    },
  },
};

export default ancova;
