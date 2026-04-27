import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const baseUrl = "https://getbayes.me";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);

  const canonicalUrl = `${baseUrl}/${lang}/terms`;

  return {
    title: `${dict.legal.termsTitle} | GetBayes`,
    description: dict.legal.termsDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/terms`,
        tr: `${baseUrl}/tr/terms`,
        "x-default": `${baseUrl}/en/terms`,
      },
    },
    robots: { index: true, follow: true },
  };
}

const contentEn = {
  sections: [
    {
      title: "1. Services",
      paragraphs: [
        "GetBayes provides professional statistical analysis services for academic research. Our services include statistical analysis, power analysis, report generation, and research consulting. Service scope and deliverables are agreed upon before each engagement.",
      ],
    },
    {
      title: "2. Use of Services",
      paragraphs: [
        "By using our website and services, you agree to provide accurate information and to use our services solely for lawful purposes. You are responsible for ensuring that your use of our statistical analysis services complies with your institution's academic integrity policies.",
        "You must not submit data that you do not have the right to share, or use our services to fabricate or falsify research results.",
      ],
    },
    {
      title: "3. Intellectual Property",
      paragraphs: [
        "All content on this website, including text, design, logos, and graphics, is the property of GetBayes and is protected by applicable intellectual property laws. Statistical reports and analyses we produce for you are delivered for your use in your research and publications.",
        "You retain full ownership of your research data. We do not claim any intellectual property rights over the data you provide to us or the research you publish using our analysis.",
      ],
    },
    {
      title: "4. Confidentiality",
      paragraphs: [
        "We treat all research data and project details as confidential. We will not disclose your data, research topic, or results to any third party without your explicit consent, unless required by law.",
      ],
    },
    {
      title: "5. Payment and Refunds",
      paragraphs: [
        "Service fees are communicated before work begins. Payment terms are agreed upon for each engagement. If we are unable to deliver the agreed-upon service, you are entitled to a full refund.",
      ],
    },
    {
      title: "6. Limitation of Liability",
      paragraphs: [
        "GetBayes provides statistical analysis based on the data and information you supply. While we apply rigorous statistical methods, we do not guarantee specific outcomes for journal submissions, thesis defenses, or other academic processes.",
        "Our liability is limited to the fees paid for the specific service in question. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
      ],
    },
    {
      title: "7. Disclaimers",
      paragraphs: [
        "Our statistical analyses are conducted using established methodologies. However, the interpretation and application of results in your research context is your responsibility. Our reports do not constitute academic advice, and researchers should exercise their own professional judgment.",
      ],
    },
    {
      title: "8. Governing Law",
      paragraphs: [
        "These Terms are governed by and construed in accordance with the laws of the Republic of Turkey. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Ankara, Turkey.",
      ],
    },
    {
      title: "9. Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
      ],
    },
    {
      title: "10. Contact",
      paragraphs: [
        "If you have questions about these Terms of Service, contact us at info@getbayes.me.",
      ],
    },
  ],
};

const contentTr = {
  sections: [
    {
      title: "1. Hizmetler",
      paragraphs: [
        "GetBayes, akademik araştırmalar için profesyonel istatistiksel analiz hizmetleri sunmaktadır. Hizmetlerimiz arasında istatistiksel analiz, güç analizi, rapor oluşturma ve araştırma danışmanlığı yer almaktadır. Hizmet kapsamı ve teslimatlar, her proje öncesinde karşılıklı olarak belirlenir.",
      ],
    },
    {
      title: "2. Hizmet Kullanımı",
      paragraphs: [
        "Web sitemizi ve hizmetlerimizi kullanarak, doğru bilgi sağlamayı ve hizmetlerimizi yalnızca yasal amaçlarla kullanmayı kabul edersiniz. İstatistiksel analiz hizmetlerimizi kullanımınızın kurumunuzun akademik dürüstlük politikalarına uygunluğunu sağlamak sizin sorumluluğunuzdadır.",
        "Paylaşma hakkına sahip olmadığınız verileri göndermemeli ve hizmetlerimizi araştırma sonuçlarını uydurmak veya tahrif etmek için kullanmamalısınız.",
      ],
    },
    {
      title: "3. Fikri Mülkiyet",
      paragraphs: [
        "Bu web sitesindeki metin, tasarım, logolar ve grafikler dahil tüm içerik GetBayes'in mülkiyetindedir ve geçerli fikri mülkiyet yasaları tarafından korunmaktadır. Sizin için hazırladığımız istatistiksel raporlar ve analizler, araştırma ve yayınlarınızda kullanılmak üzere teslim edilir.",
        "Araştırma verilerinizin tam mülkiyeti size aittir. Bize sağladığınız veriler veya analizimizi kullanarak yayınladığınız araştırma üzerinde herhangi bir fikri mülkiyet hakkı talep etmiyoruz.",
      ],
    },
    {
      title: "4. Gizlilik",
      paragraphs: [
        "Tüm araştırma verilerini ve proje detaylarını gizli olarak ele alıyoruz. Yasal zorunluluk olmadıkça, açık onayınız olmadan verilerinizi, araştırma konunuzu veya sonuçlarınızı herhangi bir üçüncü tarafla paylaşmayız.",
      ],
    },
    {
      title: "5. Ödeme ve İade",
      paragraphs: [
        "Hizmet ücretleri, çalışma başlamadan önce bildirilir. Ödeme koşulları her proje için ayrı ayrı belirlenir. Anlaşılan hizmeti teslim edemememiz durumunda, tam geri ödeme hakkınız bulunmaktadır.",
      ],
    },
    {
      title: "6. Sorumluluk Sınırlaması",
      paragraphs: [
        "GetBayes, sağladığınız veri ve bilgilere dayalı istatistiksel analiz yapmaktadır. Titiz istatistiksel yöntemler uygulamamıza rağmen, dergi başvuruları, tez savunmaları veya diğer akademik süreçler için belirli sonuçları garanti etmiyoruz.",
        "Sorumluluğumuz, söz konusu hizmet için ödenen ücretlerle sınırlıdır. Hizmetlerimizin kullanımından kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu değiliz.",
      ],
    },
    {
      title: "7. Feragatname",
      paragraphs: [
        "İstatistiksel analizlerimiz yerleşik metodolojiler kullanılarak yürütülmektedir. Ancak sonuçların araştırma bağlamınızda yorumlanması ve uygulanması sizin sorumluluğunuzdadır. Raporlarımız akademik tavsiye niteliği taşımaz ve araştırmacılar kendi mesleki kararlarını kullanmalıdır.",
      ],
    },
    {
      title: "8. Uygulanacak Hukuk",
      paragraphs: [
        "Bu Koşullar, Türkiye Cumhuriyeti kanunlarına tabi olup bu kanunlara göre yorumlanır. Bu Koşullardan doğan uyuşmazlıklar, Ankara, Türkiye mahkemelerinin münhasır yargı yetkisine tabidir.",
      ],
    },
    {
      title: "9. Koşul Değişiklikleri",
      paragraphs: [
        "Bu Koşulları zaman zaman güncelleyebiliriz. Değişiklikler, güncellenmiş tarih ile bu sayfada yayınlanacaktır. Değişiklikler yayınlandıktan sonra hizmetlerimizi kullanmaya devam etmeniz, revize edilmiş koşulları kabul ettiğiniz anlamına gelir.",
      ],
    },
    {
      title: "10. İletişim",
      paragraphs: [
        "Bu Kullanım Koşulları hakkında sorularınız varsa info@getbayes.me adresinden bize ulaşabilirsiniz.",
      ],
    },
  ],
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const content = lang === "tr" ? contentTr : contentEn;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.legal.termsTitle,
        item: `${baseUrl}/${lang}/terms`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="px-6 py-5">
        <nav aria-label="Terms page navigation">
          <a
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-serif font-semibold">GetBayes</span>
            <span className="text-xs font-sans text-foreground-muted">
              &larr; {dict.legal.backToHome}
            </span>
          </a>
        </nav>
      </header>

      <main id="main-content" className="flex-1 px-6 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
            {dict.legal.termsTitle}
          </h1>
          <p className="text-sm font-sans text-foreground-muted mb-10">
            {dict.legal.lastUpdated}: 2026-04-27
          </p>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base font-sans text-foreground-muted leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
