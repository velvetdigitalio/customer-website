import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { professionalServiceLd, webSiteLd } from "@/lib/schema";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const HOME_TITLE =
  "Velvet Digital — Marketing Agency for Jewellery & Interior Brands in Dubai";
const HOME_DESCRIPTION =
  "A marketing agency for jewellery and interior design brands in Dubai and across the UAE. Brand, content, social and local SEO — built in India, made to Gulf standards.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AE",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-dvh bg-paper text-ink font-sans">
        <JsonLd data={[professionalServiceLd, webSiteLd]} />
        <Analytics />
        <Header />
        {children}
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
