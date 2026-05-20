"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BookCallLink } from "@/components/ui/BookCallButton";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const navGroups = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Content & Branding", href: "/services#branding" },
      { label: "Performance Marketing", href: "/services#performance" },
      { label: "SEO + GEO", href: "/services#seo" },
      { label: "AI Automation", href: "/services#ai" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@velvetdigital.io", href: "mailto:hello@velvetdigital.io" },
      { label: "Book a Strategy Call", href: "calendly" },
      { label: "Bengaluru, India", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/[0.05] bg-gradient-to-b from-transparent to-vd-velvet-deep">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-vd-gold/40 to-transparent" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-vd-gold/30">
                <Image
                  src="/logo.png"
                  alt="Velvet Digital"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-[0.18em] text-vd-bone">
                  VELVET
                </span>
                <span className="font-display text-xs tracking-[0.3em] text-vd-gold/80 mt-1">
                  DIGITAL
                </span>
              </div>
            </Link>
            <p className="mt-8 max-w-md text-[15px] leading-[1.7] text-vd-mute">
              A luxury growth studio building digital presence, performance
              marketing and AI automation systems for premium modern brands.
            </p>

            <div className="mt-10 flex items-center gap-3">
              {[
                { Icon: InstagramIcon, href: "#", label: "Instagram" },
                { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { Icon: TwitterIcon, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 grid place-items-center rounded-full border border-vd-gold/30 text-vd-gold hover:bg-vd-gold hover:text-vd-black transition-colors duration-500"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-display text-[11px] tracking-[0.3em] text-vd-gold/80 uppercase">
                  {group.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      {l.href === "calendly" ? (
                        <BookCallLink utmSource="footer">
                          {l.label}
                        </BookCallLink>
                      ) : (
                        <Link
                          href={l.href}
                          className="group inline-flex items-center gap-1.5 text-[14px] text-vd-bone/70 hover:text-vd-bone transition-colors duration-300"
                        >
                          <span>{l.label}</span>
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-vd-mute tracking-[0.05em]">
            © {new Date().getFullYear()} Velvet Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-vd-mute">
            <Link href="#" className="hover:text-vd-bone transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-vd-bone transition-colors">
              Terms
            </Link>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
