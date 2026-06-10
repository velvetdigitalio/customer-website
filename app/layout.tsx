import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { pageMeta, SITE_URL } from "@/lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta({
    title:
      "Velvet Digital — Branding & Digital for Fine Jewellery and Interiors",
    description:
      "A brand & digital studio for fine jewellery houses and interior designers in the UAE. Built in India, made to Gulf standards.",
    path: "/",
  }),
  icons: {
    icon: "/logo.png",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Velvet Digital",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og.png`,
  description:
    "A brand & digital studio for fine jewellery houses and interior designers in the UAE. Built in India, made to Gulf standards.",
  slogan: "Built in India. Made for the Gulf.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  knowsAbout: [
    "fine jewellery branding",
    "interior design marketing",
    "luxury content studio",
    "WhatsApp automation for luxury brands",
  ],
  sameAs: [
    "https://www.instagram.com/velvetdigital.io",
    "https://www.facebook.com/people/velvetdigitalio/61590411488979/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-dvh bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
