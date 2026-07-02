import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-10");
const moneyLastModified = new Date("2026-07-02");

const journalSlugs = [
  "selling-to-the-gulf-nri-buyer",
  "whatsapp-luxury-sales-channel",
  "what-works-luxury-digital-2026",
  "interior-designers-digital-presence",
  "heritage-jeweller-digital",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/studio/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/work/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/journal/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/referral/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
  ];

  // SEO money-page silo (Phase 3). Kept separate so these carry a recent
  // lastModified without churning the dates on the rest of the site.
  const money: { path: string; priority: number; changeFrequency: "monthly" }[] = [
    { path: "/marketing-agency-dubai/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/jewellery-marketing-agency-dubai/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/interior-design-marketing-agency-dubai/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/jewellery-marketing-agency-dubai/instagram-content/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/jewellery-marketing-agency-dubai/google-reviews-for-jewellers/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/jewellery-marketing-agency-dubai/jewellery-seo/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/best-jewellery-marketing-agencies-dubai/", priority: 0.8, changeFrequency: "monthly" },
  ];

  const articles = journalSlugs.map((slug) => ({
    path: `/journal/${slug}/`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [
    ...[...core, ...articles].map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...money.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: moneyLastModified,
      changeFrequency,
      priority,
    })),
  ];
}
