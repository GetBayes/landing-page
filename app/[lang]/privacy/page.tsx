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

  const canonicalUrl = `${baseUrl}/${lang}/privacy`;

  return {
    title: `${dict.legal.privacyTitle} | GetBayes`,
    description: dict.legal.privacyDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/privacy`,
        tr: `${baseUrl}/tr/privacy`,
        "x-default": `${baseUrl}/en/privacy`,
      },
    },
    robots: { index: true, follow: true },
  };
}

const contentEn = {
  sections: [
    {
      title: "1. Information We Collect",
      paragraphs: [
        "When you use our contact form or service request forms, we collect the information you provide, including your name, email address, Instagram handle (if provided), and message content.",
        "We automatically collect your IP address for rate-limiting purposes to prevent abuse of our contact forms. This data is stored temporarily in server memory and is not persisted to any database.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      paragraphs: [
        "We use the information you provide to respond to your inquiries, deliver our statistical analysis services, and communicate with you about your projects. We do not use your data for marketing purposes unless you explicitly opt in.",
      ],
    },
    {
      title: "3. Data Sharing",
      paragraphs: [
        "We do not sell, trade, or rent your personal information to third parties. Your data may be processed by our email delivery provider (Resend) solely for the purpose of delivering our communications to you. We do not share your research data or analysis results with anyone outside of GetBayes.",
      ],
    },
    {
      title: "4. Data Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All communications through our website are encrypted via HTTPS.",
      ],
    },
    {
      title: "5. Cookies and Tracking",
      paragraphs: [
        "Our website does not use cookies for tracking or advertising purposes. We do not use any third-party analytics or tracking tools.",
      ],
    },
    {
      title: "6. Your Rights",
      paragraphs: [
        "You have the right to access, correct, or delete your personal data at any time. If you are located in Turkey, your rights are also protected under the Personal Data Protection Law (KVKK, Law No. 6698). If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR).",
        "To exercise any of these rights, contact us at info@getbayes.me.",
      ],
    },
    {
      title: "7. Data Retention",
      paragraphs: [
        "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal or reporting requirements. Contact form submissions are retained for up to 12 months after the last communication.",
      ],
    },
    {
      title: "8. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes are posted constitutes acceptance of the revised policy.",
      ],
    },
    {
      title: "9. Contact",
      paragraphs: [
        "If you have questions about this Privacy Policy, contact us at info@getbayes.me.",
      ],
    },
  ],
};

const contentTr = {
  sections: [
    {
      title: "1. Topladığımız Bilgiler",
      paragraphs: [
        "İletişim formumuz veya hizmet talep formlarımız aracılığıyla bize ilettiğiniz bilgileri topluyoruz. Bunlar; adınız, e-posta adresiniz, Instagram kullanıcı adınız (sağlandıysa) ve mesaj içeriğinizdir.",
        "İletişim formlarımızın kötüye kullanımını önlemek amacıyla hız sınırlaması için IP adresinizi otomatik olarak topluyoruz. Bu veri geçici olarak sunucu belleğinde tutulur ve herhangi bir veritabanına kaydedilmez.",
      ],
    },
    {
      title: "2. Bilgilerinizi Nasıl Kullanıyoruz",
      paragraphs: [
        "Sağladığınız bilgileri sorularınıza yanıt vermek, istatistiksel analiz hizmetlerimizi sunmak ve projeleriniz hakkında sizinle iletişim kurmak için kullanıyoruz. Açıkça onay vermediğiniz sürece verilerinizi pazarlama amacıyla kullanmayız.",
      ],
    },
    {
      title: "3. Veri Paylaşımı",
      paragraphs: [
        "Kişisel bilgilerinizi üçüncü taraflara satmıyor, takas etmiyor veya kiralamıyoruz. Verileriniz, yalnızca iletişimlerimizi size ulaştırmak amacıyla e-posta hizmet sağlayıcımız (Resend) tarafından işlenebilir. Araştırma verilerinizi veya analiz sonuçlarınızı GetBayes dışında kimseyle paylaşmıyoruz.",
      ],
    },
    {
      title: "4. Veri Güvenliği",
      paragraphs: [
        "Kişisel verilerinizi yetkisiz erişim, değiştirme, ifşa veya imhaya karşı korumak için uygun teknik ve organizasyonel önlemler uyguluyoruz. Web sitemiz üzerinden yapılan tüm iletişimler HTTPS ile şifrelenmektedir.",
      ],
    },
    {
      title: "5. Çerezler ve İzleme",
      paragraphs: [
        "Web sitemiz izleme veya reklam amaçlı çerez kullanmamaktadır. Üçüncü taraf analiz veya izleme araçları kullanmıyoruz.",
      ],
    },
    {
      title: "6. Haklarınız",
      paragraphs: [
        "Kişisel verilerinize erişme, düzeltme veya silme hakkına her zaman sahipsiniz. Türkiye'de bulunan kullanıcılar için haklarınız 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında da korunmaktadır. Avrupa Ekonomik Alanı'nda bulunan kullanıcılar Genel Veri Koruma Tüzüğü (GDPR) kapsamındaki haklara sahiptir.",
        "Bu haklarınızı kullanmak için info@getbayes.me adresinden bize ulaşabilirsiniz.",
      ],
    },
    {
      title: "7. Veri Saklama",
      paragraphs: [
        "Kişisel verilerinizi yalnızca toplandığı amaçların yerine getirilmesi için gerekli olan süre boyunca saklıyoruz. Bu süre, yasal veya raporlama gereksinimlerini de kapsar. İletişim formu gönderimleri, son iletişimden itibaren 12 aya kadar saklanır.",
      ],
    },
    {
      title: "8. Politika Değişiklikleri",
      paragraphs: [
        "Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Değişiklikler, güncellenmiş tarih ile bu sayfada yayınlanacaktır. Değişiklikler yayınlandıktan sonra hizmetlerimizi kullanmaya devam etmeniz, revize edilmiş politikayı kabul ettiğiniz anlamına gelir.",
      ],
    },
    {
      title: "9. İletişim",
      paragraphs: [
        "Bu Gizlilik Politikası hakkında sorularınız varsa info@getbayes.me adresinden bize ulaşabilirsiniz.",
      ],
    },
  ],
};

export default async function PrivacyPage({
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
        name: dict.legal.privacyTitle,
        item: `${baseUrl}/${lang}/privacy`,
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
        <nav aria-label="Privacy page navigation">
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
            {dict.legal.privacyTitle}
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
