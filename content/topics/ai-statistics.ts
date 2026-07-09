import type { Topic } from "../types";

// "Can ChatGPT/AI do my statistical analysis?" — the highest-volume AI-era
// query cluster in this niche. The framing is deliberately balanced: we praise
// what AI genuinely does well (concepts, code, drafts), document where it
// still fails for thesis/journal work (confident wrong answers, skipped
// assumption checks, hallucinated numbers, no accountability), and land on
// "a great tool in expert hands — and you need expertise even to verify it."
// Note: this page discusses AI as a *topic*. It must never claim GetBayes
// uses or doesn't use AI internally — GetBayes appears only as the expert
// team that verifies, completes, and takes responsibility.

const aiStatistics: Topic = {
  key: "ai-statistics",
  kind: "guide",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  related: ["which-test", "find-statistician", "comparison"],
  locales: {
    tr: {
      metaTitle:
        "ChatGPT İstatistik Analizi Yapabilir mi? Yapay Zeka ile İstatistik 2026 | GetBayes",
      metaDescription:
        "ChatGPT, Claude ve Gemini istatistik analizi yapabilir mi? Yapay zekanın tez ve makale istatistiğinde neyi iyi yaptığını, nerede hata yaptığını ve neden hâlâ uzman kontrolü gerektiğini dürüstçe inceledik.",
      headline:
        "ChatGPT İstatistik Analizi Yapabilir mi? Yapay Zeka ile İstatistiğin Dürüst Bir Değerlendirmesi",
      lead: [
        "Kısa cevap: kısmen, evet. ChatGPT, Claude ve Gemini gibi yapay zeka araçları 2026 itibarıyla istatistik kavramlarını açıklamada, analiz kodu yazmada ve sonuç yorumu taslağı çıkarmada gerçekten iyi — bu konuda hakkını teslim etmek gerekir. Ancak tez veya makale gibi sonuçlarını jüri ve hakem karşısında savunacağınız bir çalışmada analizi baştan sona yapay zekaya bırakmak hâlâ riskli: veriyi görmeden emin bir dille yanlış test önerebilir, varsayım kontrollerini sessizce atlayabilir, hatta hiç var olmayan sayılar üretebilir. Bugünkü en güvenli kullanım, yapay zekayı işin uzmanı bir gözün denetiminde hızlandırıcı olarak kullanmaktır — çünkü yapay zekanın çıktısının doğru olup olmadığını anlamak bile istatistik bilgisi gerektirir.",
        "Bu yazı bir \"yapay zeka kötüdür\" yazısı değil. Bu araçların neyi gerçekten iyi yaptığını takdir ederek yazdık; ama aynı dürüstlükle, tezini veya makalesini emanet etmeyi düşünen bir araştırmacının bilmesi gereken sınırları da tek tek gösterdik. Sonda da açık konuşuyoruz: geleceği kimse bilemez, ama bugün savunulabilir bir analiz için hâlâ istatistik uzmanlığına ihtiyaç var.",
      ],
      audience: {
        heading: "Bu yazı kimler için?",
        items: [
          "\"Tez istatistiğimi ChatGPT'ye yaptırsam olur mu?\" diye düşünen yüksek lisans, doktora ve uzmanlık öğrencileri",
          "Yapay zeka ile analize başlamış, çıktının doğruluğundan emin olamayan araştırmacılar",
          "SPSS öğrenmek yerine yapay zekadan destek almayı değerlendiren öğrenciler",
          "Danışmanı veya dergisi yapay zeka kullanımını sorduğunda ne cevap vereceğini bilmek isteyenler",
          "Yapay zekanın istatistikte gerçekte ne durumda olduğunu merak eden herkes",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Önce hakkını verelim: yapay zeka istatistikte gerçekten neler yapabiliyor?",
          body: [
            "ChatGPT, Claude ve Gemini gibi büyük dil modelleri istatistik eğitiminde küçük bir devrim yarattı. \"p değeri tam olarak ne anlama geliyor?\", \"ANOVA ile t-testi arasındaki fark ne?\", \"etki büyüklüğü neden önemli?\" gibi soruları sabırla, seviyenize inerek ve istediğiniz kadar tekrar ederek açıklıyorlar. Ders kitabının bir paragrafta geçiştirdiği bir kavramı gece 2'de, kendi verinizden örnekle anlatabilen bir araç, öğrenme açısından gerçekten değerli.",
            "Kod yazmada da güçlüler: R veya Python'da bir analiz betiği, hatta SPSS sözdizimi (syntax) istediğinizde çoğu zaman çalışan, düzgün kod üretiyorlar. Analiz çıktısını yapıştırıp \"bunu nasıl yorumlarım?\" diye sorduğunuzda makul bir yorum taslağı çıkarıyorlar. Veri yükleyebilen sürümler basit betimsel istatistikleri ve grafikleri de üretebiliyor.",
            "Yani soru \"yapay zeka işe yarar mı?\" değil — kesinlikle yarıyor. Asıl soru şu: tezinizin veya makalenizin istatistiğini, yani sonuçlarına imza atacağınız analizi ona bırakabilir misiniz? İşte orada tablo değişiyor.",
          ],
        },
        {
          type: "table",
          heading: "Görev görev: yapay zeka nerede iyi, nerede uzman gerekli?",
          intro:
            "Aşağıdaki tablo, 2026 itibarıyla yaygın yapay zeka araçlarının (ChatGPT, Claude, Gemini) istatistik iş akışındaki genel durumunu özetler. Modeller hızla geliştiği için tablo zamanla iyileşebilir; sınırlar ise yapısal olduğu için daha yavaş değişiyor.",
          columns: ["Görev", "Yapay zeka bugün ne durumda?", "Neden yine de kontrol gerekli?"],
          rows: [
            [
              "Kavram açıklama (p değeri, güç, etki büyüklüğü)",
              "Çok iyi — sabırlı, erişilebilir, seviyenize uyarlanabilir",
              "Nadiren eski veya karışık açıklamalar verebilir; kritik tanımları kaynakla doğrulayın",
            ],
            [
              "Test önerisi (\"hangi testi kullanmalıyım?\")",
              "İyi bir başlangıç noktası",
              "Verinizi görmeden emin bir dille yanlış test önerebilir; dağılımı ve ölçek düzeyini çoğu zaman sormaz",
            ],
            [
              "Analiz kodu yazma (R, Python, SPSS syntax)",
              "Çok iyi — çoğu zaman çalışan kod üretir",
              "Kodun çalışması, analizin doğru kurgulandığı anlamına gelmez",
            ],
            [
              "Analizi baştan sona çalıştırma",
              "Kısmen — basit betimsel analizlerde çalışıyor",
              "Sayı halüsinasyonu, sessiz veri hataları, karmaşık veride tutarsız sonuç riski",
            ],
            [
              "Varsayım kontrolü ve tanı (normallik, varyans homojenliği, aykırı değer)",
              "Zayıf — özellikle istenmedikçe atlar",
              "Tez ve makalede en çok eleştirilen nokta tam da budur",
            ],
            [
              "APA formatında raporlama",
              "Taslak için iyi",
              "Rapordaki her sayının gerçek çıktıyla eşleştiği tek tek doğrulanmalı",
            ],
            [
              "Sorumluluk (jüri, hakem, etik kurul karşısında)",
              "Yok",
              "\"ChatGPT öyle söyledi\" bir savunma değildir; imza sizin imzanız",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Belki de en büyük tehlike: kapsamı yapay zekanın kendisi seçer",
          body: [
            "Bir istatistikçiye verinizi teslim ettiğinizde iş bir çerçeve içinde başlar: araştırma sorularınız, hipotezleriniz, değişkenlerinizin ölçüm düzeyleri ve alanınızın raporlama beklentileri analizin kapsamını baştan belirler. Yapay zekaya \"şu veriye istatistik analizi yap\" dediğinizde ise böyle bir çerçeve yoktur. Ortada teknik olarak yapılabilecek onlarca analiz vardır ve model, hangilerinin sizin çalışmanız için gerekli olduğunu bilmeden aralarından kendince bir seçim yapar. Sonuç çoğu zaman rastgeledir: aynı veriye bir oturumda bambaşka, diğerinde bambaşka bir analiz seti uygulanabilir.",
            "Pratikte bu en sık eksik bırakma olarak karşınıza çıkar: model birkaç ortalama, yüzde ve grafik üretir — yani yalnızca betimsel istatistik yapar — ve bunu tamamlanmış bir analiz gibi sunar. Oysa tezinizin asıl ihtiyacı olan hipotez testleri, grup karşılaştırmaları veya ilişki analizleri hiç yapılmamıştır. Üstelik bunu çoğu zaman değişkenlerin tipini bile incelemeden yapar: kategorik bir değişkenin ortalamasını almak, sıralı (ordinal) bir ölçeği sürekliymiş gibi işlemek bu yüzden sık görülen hatalardır. Tersi de olur: gerekli gereksiz onlarca test üst üste çalıştırılır, rapor şişer ve düzeltme yapılmadan çoklu test yürütmek anlamlı çıkan sonuçların güvenilirliğini zedeler.",
            "Bunu bu kadar tehlikeli yapan şey, çıktının her iki durumda da derli toplu ve bitmiş görünmesidir. Eksik olanın ne olduğunu görmek, yapılanın yanlışını bulmaktan daha zordur — çünkü ortada size \"burada bir sorun var\" diyecek bir işaret yoktur. Bir istatistikçinin işinin ilk adımı tam da budur: analize başlamadan önce \"bu araştırma sorusu neyi gerektiriyor, bu veri neye izin veriyor?\" sorusunu sormak ve kapsamı ona göre kurmak. Yapay zeka bu direktifi kendi kendine veremez; birinin ona vermesi gerekir.",
          ],
        },
        {
          type: "bullets",
          heading: "Yapay zekanın istatistikte hâlâ zorlandığı yerler",
          intro:
            "Bu sınırların çoğu \"henüz yeterince iyi değil\" türünden değil; büyük dil modellerinin çalışma biçiminden kaynaklanan yapısal sorunlar. Bu yüzden model sürümü değişse de dikkatli olmaya devam etmek gerekiyor.",
          items: [
            "Emin dille yanlış cevap: yapay zeka yanıldığında bunu tereddütlü bir dille değil, doğru cevapla aynı özgüvenle söyler. İstatistik bilmeyen biri için ikisini ayırt etmek neredeyse imkânsızdır.",
            "Sayı halüsinasyonu: özellikle uzun oturumlarda ve çıktı yorumlamada, gerçek analizde olmayan p değerleri, ortalamalar veya güven aralıkları üretebilir — üstelik tablo formatında, gayet inandırıcı görünerek.",
            "Varsayım körlüğü: siz sormadıkça normallik, varyans homojenliği, çoklu bağlantı gibi kontrolleri gündeme getirmez; oysa tez jürilerinin ve hakemlerin ilk baktığı yer genellikle burasıdır.",
            "Bağlam eksikliği: araştırma deseninizi, örneklem yapınızı ve alanınızın raporlama geleneklerini bilmez; teknik olarak doğru ama çalışmanıza uygun olmayan öneriler verebilir.",
            "Tekrarlanabilirlik sorunu: aynı soruya farklı oturumlarda farklı cevaplar verebilir. Bilimsel analizin temel şartı olan tekrarlanabilirlik, sohbet arayüzünde güvence altında değildir.",
            "Veri gizliliği: ham veriyi — özellikle hasta verisi veya kişisel bilgi içeriyorsa — herkese açık bir sohbet botuna yüklemek KVKK ve etik kurul taahhütleriniz açısından ciddi sorun yaratabilir.",
            "Sorumluluk boşluğu: analiz yanlış çıktığında düzeltmeyi, savunmayı ve sonuçlarına katlanmayı yapay zeka üstlenmez. Bir uzmanla çalıştığınızda ise hatanın muhatabı ve çözücüsü bellidir.",
          ],
        },
        {
          type: "paragraphs",
          heading: "Uzman elinde yapay zeka: bambaşka bir araç",
          body: [
            "İşin ilginç tarafı şu: yapay zekadan istatistikte en çok verim alanlar, ona en az muhtaç olanlar. Konuya hâkim bir analist yanlış test önerisini iki satırda fark eder, halüsinasyon bir p değerini gerçek çıktıyla karşılaştırıp yakalar, eksik varsayım kontrolünü sorar ve aracı gerçekten iyi olduğu işlerde — hız, taslak, alternatif yaklaşım denemesi — çalıştırır. Aynı araç, çıktıyı denetleyemeyen birinin elinde ise hatayı hızlandıran bir mekanizmaya dönüşebilir.",
            "Bu yüzden \"yapay zeka mı, istatistikçi mi?\" sorusu aslında yanlış kurulmuş bir soru. Doğru soru şu: \"bu analizin doğruluğunu kim garanti ediyor?\" Yapay zeka bir araçtır; sorumluluğu olan, verinizi bağlamıyla birlikte değerlendiren ve jüri karşısında savunabileceğiniz bir gerekçe üreten taraf her zaman insandır. En güçlü kombinasyon ikisinin karşı karşıya konması değil, uzmanlığın araçları denetleyerek kullanmasıdır.",
            "GetBayes olarak biz de tam bu noktada duruyoruz: işimiz, hangi araç kullanılırsa kullanılsın sonunda ortaya savunulabilir bir analiz çıkmasını sağlamak. Yapay zeka ile bir yere kadar gelmiş araştırmacılardan düzenli olarak şu talebi alıyoruz: \"Buraya kadar getirdim ama doğru mu emin değilim.\" Bu durumda analizi kaldığı yerden devralıyor, sayıları gerçek çıktılarla doğruluyor, eksik varsayım kontrollerini tamamlıyor ve raporu jüri ile hakem karşısında savunulabilir hâle getiriyoruz.",
          ],
        },
        {
          type: "steps",
          heading: "Tezinizde yapay zekayı güvenle kullanmak için 5 kural",
          intro:
            "Yapay zekayı tamamen dışlamak gerekmiyor; doğru sınırlar içinde kullanmak gerekiyor. Şu beş kural riskin büyük kısmını ortadan kaldırır:",
          steps: [
            {
              title: "Öğrenmek için kullanın, karar vermek için değil",
              description:
                "Kavram açıklatmak, kod taslağı almak ve yorum fikri edinmek için mükemmel. Ama test seçimi, örneklem kararı ve raporlanacak sonuçlar gibi tezinizin kaderini belirleyen kararları tek başına yapay zekaya bırakmayın.",
            },
            {
              title: "Ham veriyi yüklemeden önce iki kez düşünün",
              description:
                "Kişisel bilgi veya hasta verisi içeren dosyaları herkese açık sohbet botlarına yüklemeyin; en azından anonimleştirin. Etik kurul başvurunuzda verinin nasıl işleneceğine dair taahhütleriniz olduğunu unutmayın.",
            },
            {
              title: "Her sayıyı bağımsız doğrulayın",
              description:
                "Yapay zekanın verdiği her p değerini, ortalamayı ve tabloyu SPSS, JASP veya R ile aynı analizi çalıştırarak teyit edin. Doğrulayamadığınız hiçbir sayıyı teze veya makaleye koymayın.",
            },
            {
              title: "Üniversitenizin ve derginizin yapay zeka politikasını okuyun",
              description:
                "Birçok üniversite ve dergi, yapay zeka kullanımını beyan etmenizi istiyor; bazıları belirli kullanımları kısıtlıyor. Savunmada veya hakem sürecinde sürpriz yaşamamak için politikayı baştan öğrenin.",
            },
            {
              title: "Kritik eşiklerde bir uzmana danışın",
              description:
                "Test seçimi, güç analizi, beklenmedik sonuçlar ve rapor son hâli gibi geri dönüşü zor noktalarda işin uzmanına göstermek, yanlış yolda haftalar kaybetmekten her zaman ucuzdur.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "Peki gelecekte? Dürüst cevap: bilmiyoruz — ama bugünü biliyoruz",
          body: [
            "Bu araçlar birkaç yılda kimsenin beklemediği bir hıza ulaştı ve gelişmeye devam ediyor. Beş yıl sonra istatistik analizinin ne kadarının güvenle otomatikleşeceğini bugünden kimse dürüstçe söyleyemez — biz de söylemiyoruz. Kesin konuşan herkese biraz şüpheyle yaklaşın.",
            "Ama bugünü biliyoruz: 2026'da, sonuçlarını jüri, hakem veya etik kurul karşısında savunacağınız bir çalışmada istatistik uzmanlığı hâlâ vazgeçilmez. Üstelik yapay zeka yaygınlaştıkça uzmanlığın rolü azalmıyor, yer değiştiriyor: artık uzmanlar yalnızca analiz yapmıyor, giderek daha sık \"bu çıktı doğru mu?\" sorusunun hakemi oluyor. Aracın kendisini denetleyebilmek de bir uzmanlıktır.",
            "Özetle: yapay zekayı öğrenme yolculuğunuzda kullanın, ondan korkmayın — ama tezinizin istatistiğine imza atmadan önce, o imzanın arkasında durabilecek bir uzmanlığın süreçte yer aldığından emin olun. O uzmanlık sizde varsa harika; yoksa biz buradayız.",
          ],
        },
      ],
      faqHeading: "Sıkça sorulan sorular",
      faq: [
        {
          question: "ChatGPT istatistik analizi yapabilir mi?",
          answer:
            "Kısmen. ChatGPT istatistik kavramlarını açıklamada, R/Python kodu ve SPSS sözdizimi yazmada ve yorum taslağı çıkarmada gerçekten iyi; veri yükleyebilen sürümleri basit betimsel analizleri de yapabiliyor. Ancak tez veya makale düzeyinde bir analizde tek başına güvenilir değildir: veriyi görmeden yanlış test önerebilir, varsayım kontrollerini atlayabilir ve var olmayan sayılar üretebilir. En güvenli kullanım, çıktısını doğrulayabilecek bir uzmanlığın denetiminde yardımcı araç olarak kullanmaktır.",
        },
        {
          question: "ChatGPT SPSS'in yerine kullanılabilir mi?",
          answer:
            "Hayır, aynı iş için tasarlanmış araçlar değiller. SPSS, JASP ve R gibi istatistik yazılımları deterministik çalışır: aynı veriye aynı analiz her zaman aynı sonucu verir ve çıktı denetlenebilir. ChatGPT ise bir dil modelidir; size SPSS adımlarını tarif edebilir, sözdizimi yazabilir ve çıktıyı yorumlamanıza yardım edebilir, ama analiz motoru olarak tekrarlanabilirlik garantisi vermez. Pratik özet: analiz istatistik yazılımında yapılır, yapay zeka öğrenme ve taslak aşamasında yardımcı olur.",
        },
        {
          question: "Tez verimi ChatGPT'ye yüklemek güvenli mi?",
          answer:
            "Dikkatli olmak gerekir. Kişisel bilgi veya hasta verisi içeren dosyaları herkese açık sohbet botlarına yüklemek KVKK yükümlülükleri ve etik kurul taahhütleriniz açısından sorun yaratabilir; birçok kurumun bunu kısıtlayan politikası var. Yüklemeden önce veriyi anonimleştirin, kurumunuzun politikasını kontrol edin ve sohbet geçmişinin model eğitiminde kullanılmamasını sağlayan ayarları açın. GetBayes'te bu konu sözleşme düzeyinde nettir: verileriniz üçüncü taraflarla paylaşılmaz ve talep ettiğinizde kalıcı olarak silinir.",
        },
        {
          question: "Yapay zeka ile yapılan analiz tezde veya dergide kabul edilir mi?",
          answer:
            "Kuruma ve dergiye göre değişir. Birçok üniversite ve yayıncı yapay zeka kullanımının beyan edilmesini istiyor; bazıları veri analizi gibi kritik adımlarda kullanımı kısıtlıyor. Ortak nokta şu: sorumluluk her durumda yazara aittir — jüri veya hakem bir sayıyı sorguladığında \"yapay zeka öyle hesapladı\" geçerli bir savunma değildir. Bu yüzden hangi araçla çalışırsanız çalışın, her sonucu bağımsız doğrulamanız ve gerekçesini kendinizin savunabilmesi gerekir.",
        },
        {
          question: "İstatistik için ChatGPT mi, Claude mu, Gemini mi daha iyi?",
          answer:
            "Aralarındaki fark, hepsinin ortak sınırlarının yanında küçük kalır ve sıralama neredeyse her sürümle değişir. Üçü de kavram açıklama ve kod yazmada iyidir; üçü de emin dille hata yapabilir, varsayım kontrollerini atlayabilir ve sayı üretebilir. Araç seçiminden çok kullanım biçimi önemlidir: hangi modeli kullanırsanız kullanın, çıktıyı gerçek bir istatistik yazılımıyla doğrulamadan teze veya makaleye taşımayın.",
        },
        {
          question: "Yapay zeka istatistikçilerin yerini alacak mı?",
          answer:
            "Geleceği dürüstçe kimse bilemez; biz de kesin konuşmuyoruz. Bugün görünen şu: yapay zeka istatistikçinin bazı işlerini hızlandırıyor ama sorumluluğunu devralamıyor — test seçimini verinin ve araştırmanın bağlamında gerekçelendirmek, varsayımları denetlemek ve sonucu jüri karşısında savunulabilir kılmak hâlâ insan uzmanlığı istiyor. Hatta yapay zeka yaygınlaştıkça \"bu çıktı doğru mu?\" sorusunun hakemi olarak uzmanlığa duyulan ihtiyaç artıyor. 2026'da cevap: hayır, henüz değil.",
        },
      ],
      cta: {
        heading: "Yapay zekayla başladınız, emin olamadınız mı?",
        text: "Verinizi ve varsa mevcut analizlerinizi gönderin; 24 saat içinde ücretsiz ön inceleme ile neyin doğru, neyin eksik olduğunu söyleyelim ve yazılı, değişmeyen bir fiyat verelim. Analiz tamamlandığında rapor aynı gün elinizde olur ve her aşamada bize yazabilirsiniz.",
        button: "Ücretsiz Ön Değerlendirme Al",
        whatsapp: "WhatsApp ile Yazın",
      },
      relatedHeading: "İlgili rehberler",
    },
    en: {
      metaTitle:
        "Can ChatGPT Do Statistical Analysis? An Honest Look at AI in Statistics 2026 | GetBayes",
      metaDescription:
        "Can ChatGPT, Claude or Gemini do your statistical analysis? An honest review of what AI genuinely does well in thesis and journal statistics, where it still fails, and why expert verification is still essential.",
      headline:
        "Can ChatGPT Do Statistical Analysis? An Honest Assessment of AI in Statistics",
      lead: [
        "Short answer: partly, yes. As of 2026, AI tools like ChatGPT, Claude and Gemini are genuinely good at explaining statistical concepts, writing analysis code, and drafting interpretations of results — credit where it's due. But for a thesis or journal article, where you will defend the results before a committee or reviewers, handing the entire analysis to AI is still risky: it can recommend the wrong test in a confident tone without ever seeing your data, silently skip assumption checks, and even produce numbers that don't exist. The safest use today is as an accelerator under the supervision of an expert eye — because even judging whether AI's output is correct requires statistical expertise.",
        "This is not an \"AI is bad\" article. We wrote it with real appreciation for what these tools do well — and with the same honesty about the limits every researcher should know before trusting them with a thesis or paper. And we're upfront about the ending: nobody can predict the future, but today, a defensible analysis still needs statistical expertise.",
      ],
      audience: {
        heading: "Who is this article for?",
        items: [
          "Master's, PhD and medical specialty students wondering \"can I just have ChatGPT do my thesis statistics?\"",
          "Researchers who started their analysis with AI and aren't sure the output is correct",
          "Students weighing AI assistance against learning SPSS themselves",
          "Anyone who needs an answer when their advisor or target journal asks about AI use",
          "Anyone curious where AI actually stands in statistics right now",
        ],
      },
      sections: [
        {
          type: "paragraphs",
          heading: "Credit first: what can AI genuinely do in statistics?",
          body: [
            "Large language models like ChatGPT, Claude and Gemini have quietly revolutionized statistics education. Questions like \"what does a p-value actually mean?\", \"what's the difference between ANOVA and a t-test?\" or \"why do effect sizes matter?\" get patient, level-adjusted explanations, repeated as many times as you need. A tool that can explain — at 2 a.m., with examples from your own data — a concept your textbook dispatched in one paragraph is genuinely valuable for learning.",
            "They are also strong at code: ask for an analysis script in R or Python, or even SPSS syntax, and you'll usually get clean, working code. Paste in analysis output and ask \"how do I interpret this?\" and you'll get a reasonable draft interpretation. Versions that accept file uploads can produce simple descriptive statistics and charts too.",
            "So the question isn't \"is AI useful?\" — it clearly is. The real question is: can you hand it the statistics of your thesis or paper, the analysis you'll put your name on? That's where the picture changes.",
          ],
        },
        {
          type: "table",
          heading: "Task by task: where AI is good, where an expert is still needed",
          intro:
            "The table summarizes where mainstream AI tools (ChatGPT, Claude, Gemini) stand across the statistics workflow as of 2026. Models improve fast, so the strengths may grow; the limits are structural, so they change more slowly.",
          columns: ["Task", "AI today", "Why verification is still needed"],
          rows: [
            [
              "Explaining concepts (p-values, power, effect sizes)",
              "Very good — patient, accessible, level-adjusted",
              "Occasionally outdated or muddled explanations; cross-check critical definitions",
            ],
            [
              "Test recommendation (\"which test should I use?\")",
              "A good starting point",
              "Can confidently recommend the wrong test without seeing your data; rarely asks about distribution or measurement level",
            ],
            [
              "Writing analysis code (R, Python, SPSS syntax)",
              "Very good — usually produces working code",
              "Code that runs is not the same as an analysis that's correctly designed",
            ],
            [
              "Running the full analysis",
              "Partial — works for simple descriptive analyses",
              "Risk of hallucinated numbers, silent data errors, inconsistent results on complex data",
            ],
            [
              "Assumption checks and diagnostics (normality, homogeneity, outliers)",
              "Weak — skips them unless explicitly asked",
              "Exactly the point committees and reviewers criticize most",
            ],
            [
              "APA-format reporting",
              "Good for a draft",
              "Every number in the report must be verified against the real output",
            ],
            [
              "Accountability (committee, reviewers, ethics board)",
              "None",
              "\"ChatGPT said so\" is not a defense; the signature on the thesis is yours",
            ],
          ],
        },
        {
          type: "paragraphs",
          heading: "Perhaps the biggest danger: AI chooses the scope by itself",
          body: [
            "When you hand your data to a statistician, the work starts inside a frame: your research questions, hypotheses, the measurement levels of your variables and your field's reporting expectations define the scope of the analysis up front. When you tell an AI \"run statistical analysis on this data,\" no such frame exists. There are dozens of technically possible analyses, and the model — without knowing which ones your study actually requires — picks among them on its own. The result is often arbitrary: the same dataset can get one set of analyses in one session and a completely different set in another.",
            "In practice this most often shows up as underdoing: the model produces a few means, percentages and charts — descriptive statistics only — and presents it as a finished analysis, while the hypothesis tests, group comparisons or association analyses your thesis actually needs were never run. Worse, it frequently does this without even examining variable types: taking the mean of a categorical variable, or treating an ordinal scale as continuous, are common failures of exactly this kind. The opposite happens too: it overdoes, stacking dozens of tests whether needed or not, bloating the report — and running many tests without correction undermines the credibility of whatever comes out significant.",
            "What makes this so dangerous is that in both cases the output looks tidy and complete. Spotting what's missing is harder than spotting what's wrong — there is no signal telling you \"something is off here.\" This is precisely the first step of a statistician's job: before any analysis, asking \"what does this research question require, and what does this data allow?\" and setting the scope accordingly. AI cannot give itself that directive; someone has to give it.",
          ],
        },
        {
          type: "bullets",
          heading: "Where AI still struggles in statistics",
          intro:
            "Most of these limits aren't \"not good enough yet\" issues; they're structural consequences of how large language models work. That's why caution remains necessary even as model versions change.",
          items: [
            "Confidently wrong answers: when AI is wrong, it says so with the same confidence as when it's right. For someone without statistical training, telling the two apart is nearly impossible.",
            "Number hallucination: especially in long sessions and output interpretation, it can produce p-values, means or confidence intervals that never existed in the actual analysis — often in a convincing-looking table.",
            "Assumption blindness: unless you ask, it won't raise normality, homogeneity of variance or multicollinearity checks — precisely the first things committees and reviewers look at.",
            "Missing context: it doesn't know your research design, sampling structure or your field's reporting conventions; its suggestions can be technically valid yet wrong for your study.",
            "Reproducibility: it can answer the same question differently across sessions. Reproducibility — a basic requirement of scientific analysis — is not guaranteed in a chat interface.",
            "Data privacy: uploading raw data — especially patient data or personal information — to a public chatbot can conflict with data-protection law and the commitments in your ethics application.",
            "The accountability gap: when the analysis turns out wrong, AI doesn't fix it, defend it, or bear the consequences. With an expert, there is a named person responsible for the error and its solution.",
          ],
        },
        {
          type: "paragraphs",
          heading: "AI in expert hands: a different tool entirely",
          body: [
            "Here's the interesting part: the people who get the most out of AI in statistics are the ones who need it least. An experienced analyst spots a wrong test recommendation in two lines, catches a hallucinated p-value by checking it against the real output, asks for the missing assumption checks, and puts the tool to work where it truly shines — speed, drafts, trying alternative approaches. The same tool, in the hands of someone who can't audit its output, can become a machine for accelerating mistakes.",
            "That's why \"AI or a statistician?\" is the wrong question. The right question is: \"who guarantees this analysis is correct?\" AI is a tool; the party who carries responsibility, evaluates your data in its context, and produces a rationale you can defend before a committee is always human. The strongest combination isn't pitting one against the other — it's expertise using the tools under supervision.",
            "This is exactly where GetBayes stands: our job is making sure that whatever tools are involved, what comes out the other end is a defensible analysis. We regularly hear from researchers who got partway with AI: \"I got this far, but I'm not sure it's right.\" We take the analysis over from there — verify the numbers against real outputs, complete the missing assumption checks, and make the report stand up to committees and reviewers.",
          ],
        },
        {
          type: "steps",
          heading: "5 rules for using AI safely in your thesis",
          intro:
            "You don't need to shun AI entirely; you need to use it within the right boundaries. These five rules remove most of the risk:",
          steps: [
            {
              title: "Use it to learn, not to decide",
              description:
                "It's excellent for explaining concepts, drafting code and sparking interpretation ideas. But don't leave thesis-defining decisions — test selection, sample size, the results you'll report — to AI alone.",
            },
            {
              title: "Think twice before uploading raw data",
              description:
                "Don't upload files containing personal information or patient data to public chatbots; at minimum, anonymize first. Remember that your ethics application includes commitments about how the data will be handled.",
            },
            {
              title: "Independently verify every number",
              description:
                "Confirm every p-value, mean and table AI gives you by running the same analysis in SPSS, JASP or R. Never put a number you couldn't verify into a thesis or paper.",
            },
            {
              title: "Read your university's and journal's AI policy",
              description:
                "Many universities and journals now require disclosure of AI use; some restrict it for critical steps like data analysis. Learn the policy up front to avoid surprises at your defense or in peer review.",
            },
            {
              title: "Consult an expert at the critical thresholds",
              description:
                "At hard-to-reverse points — test selection, power analysis, unexpected results, the final report — showing the work to an expert is always cheaper than losing weeks on the wrong path.",
            },
          ],
        },
        {
          type: "paragraphs",
          heading: "And the future? Honestly: we don't know — but we know today",
          body: [
            "These tools have improved at a pace nobody predicted, and they keep improving. Nobody can honestly say today how much of statistical analysis will be safely automated in five years — and we won't pretend to. Be a little skeptical of anyone who speaks with certainty here.",
            "But we do know today: in 2026, for work you will defend before a committee, reviewers or an ethics board, statistical expertise is still indispensable. And as AI spreads, the role of expertise isn't shrinking — it's shifting: experts no longer just run analyses, they increasingly serve as the referee for the question \"is this output actually correct?\" Auditing the tool is itself a form of expertise.",
            "In short: use AI on your learning journey and don't fear it — but before you sign off on your thesis statistics, make sure there is expertise in the process that can stand behind that signature. If that expertise is yours, wonderful; if not, we're here.",
          ],
        },
      ],
      faqHeading: "Frequently asked questions",
      faq: [
        {
          question: "Can ChatGPT do statistical analysis?",
          answer:
            "Partly. ChatGPT is genuinely good at explaining statistical concepts, writing R/Python code and SPSS syntax, and drafting interpretations; versions with file upload can handle simple descriptive statistics. But at thesis or journal level it is not reliable on its own: it can recommend the wrong test without seeing your data, skip assumption checks, and produce numbers that don't exist. The safest use is as an assistant, supervised by someone with the expertise to verify its output.",
        },
        {
          question: "Can ChatGPT replace SPSS?",
          answer:
            "No — they're built for different jobs. Statistical software like SPSS, JASP and R is deterministic: the same analysis on the same data always gives the same, auditable result. ChatGPT is a language model; it can walk you through SPSS steps, write syntax and help interpret output, but as an analysis engine it offers no reproducibility guarantee. The practical rule: run the analysis in statistical software; use AI for learning and drafting around it.",
        },
        {
          question: "Is it safe to upload my thesis data to ChatGPT?",
          answer:
            "Be careful. Uploading files that contain personal information or patient data to public chatbots can conflict with data-protection law (GDPR/KVKK) and the commitments in your ethics application; many institutions restrict it. Anonymize the data first, check your institution's policy, and enable the settings that keep your chats out of model training. At GetBayes this is contractual: your data is never shared with third parties and is permanently deleted on request.",
        },
        {
          question: "Will an AI-generated analysis be accepted in a thesis or journal?",
          answer:
            "It depends on the institution and the journal. Many universities and publishers now require you to disclose AI use; some restrict it for critical steps like data analysis. The common thread: responsibility always stays with the author — when a committee member or reviewer questions a number, \"the AI calculated it\" is not a valid defense. Whatever tool you use, verify every result independently and be able to defend its rationale yourself.",
        },
        {
          question: "Which is better for statistics — ChatGPT, Claude or Gemini?",
          answer:
            "The differences between them are small compared to the limits they share, and the ranking shifts with nearly every release. All three are good at explaining concepts and writing code; all three can be confidently wrong, skip assumption checks and fabricate numbers. How you use the tool matters far more than which one you pick: whichever model you use, never move its output into a thesis or paper without verifying it in real statistical software.",
        },
        {
          question: "Will AI replace statisticians?",
          answer:
            "Nobody can honestly predict the future, and we won't pretend to. What's visible today: AI speeds up parts of a statistician's work but cannot take over the responsibility — justifying the test choice in the context of your data and design, auditing assumptions, and making results defensible before a committee still require human expertise. If anything, as AI spreads, the need for experts as referees of \"is this output correct?\" is growing. In 2026, the answer is: no, not yet.",
        },
      ],
      cta: {
        heading: "Started with AI and not sure it's right?",
        text: "Send your data and any analyses you already have; within 24 hours we'll reply with a free initial review of what's correct and what's missing, plus a written, fixed price. Once the analysis is complete, the report reaches you the same day — and you can write to us at every stage.",
        button: "Get a Free Assessment",
        whatsapp: "Message on WhatsApp",
      },
      relatedHeading: "Related guides",
    },
  },
};

export default aiStatistics;
