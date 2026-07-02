import type { Metadata } from "next";

export const SITE_URL = "https://velvetdigital.io";
export const SITE_NAME = "Velvet Digital";
export const OG_IMAGE = "/og.png";

type PageMetaArgs = {
  title: string;
  description: string;
  /** Path with leading slash and trailing slash, e.g. "/services/". Home is "/". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  ogImage?: string;
};

/**
 * Builds a complete Metadata object — title, description, canonical,
 * Open Graph and Twitter card — so every page is consistent and unique.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  ogImage = OG_IMAGE,
}: PageMetaArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_AE",
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
