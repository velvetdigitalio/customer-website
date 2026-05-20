import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velvet Digital — Luxury Digital Growth For Modern Brands",
  description:
    "Content. Performance Marketing. AI Automation. Everything your brand needs to dominate online.",
  metadataBase: new URL("https://velvetdigital.io"),
  openGraph: {
    title: "Velvet Digital — Luxury Digital Growth For Modern Brands",
    description:
      "We build digital presence that converts into growth. Content, performance marketing and AI automation for premium brands.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-vd-black text-vd-bone overflow-x-hidden">
        <SmoothScroll>
          <Nav />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
