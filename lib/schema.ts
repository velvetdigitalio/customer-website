import { SITE_URL, SITE_NAME } from "@/lib/seo";

const LOGO = `${SITE_URL}/brand/lockup.png`;
const IMAGE = `${SITE_URL}/og.png`;

const SAME_AS = [
  "https://www.instagram.com/velvetdigital.io",
  "https://www.facebook.com/people/velvetdigitalio/61590411488979/",
  // TODO: add LinkedIn URL when the company page is live
];

/** Sitewide ProfessionalService — rendered once in the root layout. */
export const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO,
  image: IMAGE,
  description:
    "A marketing agency for jewellery and interior design brands in Dubai and across the UAE. Brand, content, social and local SEO — built in India, made to Gulf standards.",
  areaServed: ["Dubai", "United Arab Emirates", "Abu Dhabi", "Sharjah"],
  address: {
    "@type": "PostalAddress",
    // TODO: physical address pending
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: SAME_AS,
  knowsAbout: [
    "Jewellery Marketing",
    "Luxury Branding",
    "Instagram Content",
    "Local SEO",
    "Google Business Profile",
  ],
  priceRange: "AED 3,000 – AED 15,000 / month",
};

/** Sitewide WebSite schema — rendered once in the root layout. */
export const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
};

/** Per-service-page Service schema. */
export function serviceLd({
  serviceType,
  name,
  description,
  path,
}: {
  serviceType: string;
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Dubai", "United Arab Emirates"],
  };
}

export type Faq = { q: string; a: string };

/** FAQPage schema, generated from the same array that renders the visible FAQ. */
export function faqPageLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** BreadcrumbList schema matching a URL hierarchy. Pass crumbs in order, home first. */
export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}
