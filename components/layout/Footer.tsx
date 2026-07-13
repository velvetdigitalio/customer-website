import Link from "next/link";
import { whatsappUrl, GENERAL_INTRO_MESSAGE } from "@/lib/whatsapp";
import { Wordmark } from "@/components/ui/Wordmark";

const studioLinks = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "Studio", href: "/studio/" },
  { label: "Journal", href: "/journal/" },
  { label: "Refer a brand", href: "/referral/" },
] as const;

const serviceLinks = [
  { label: "Marketing Agency Dubai", href: "/marketing-agency-dubai/" },
  {
    label: "Jewellery Marketing Dubai",
    href: "/jewellery-marketing-agency-dubai/",
  },
  {
    label: "Interior Design Marketing",
    href: "/interior-design-marketing-agency-dubai/",
  },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/velvetdigital.io",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/velvetdigitalio/61590411488979/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918861184926",
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-umber text-cream">
      <div className="max-w-[1200px] mx-auto px-md lg:px-lg pt-xl lg:pt-2xl pb-lg lg:pb-xl">
        {/* Top: wordmark + tagline */}
        <div className="mb-lg">
          <Wordmark onDark className="text-[length:var(--step-1)]" />
          <p className="mt-xs text-cream-2 max-w-[40ch] text-[length:var(--step--1)]">
            A brand &amp; digital studio for fine jewellery and interiors.
          </p>
          <p className="text-cream-2 text-[length:var(--step--1)]">
            Built in Bengaluru. Made for the Gulf.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg sm:gap-xl border-t border-cream/12 pt-lg">
          {/* Studio column */}
          <div>
            <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold mb-xs">
              Studio
            </p>
            <nav aria-label="Footer — Studio" className="flex flex-col gap-2xs">
              {studioLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link font-sans text-cream-2 hover:text-cream w-fit"
                  style={{
                    "--underline-color": "var(--gold-soft)",
                    transition:
                      "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                  } as React.CSSProperties}
                >
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services column (SEO silo) */}
          <div>
            <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold mb-xs">
              Services
            </p>
            <nav aria-label="Footer — Services" className="flex flex-col gap-2xs">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link font-sans text-cream-2 hover:text-cream w-fit"
                  style={{
                    "--underline-color": "var(--gold-soft)",
                    transition:
                      "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                  } as React.CSSProperties}
                >
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold mb-xs">
              Contact
            </p>
            <div className="flex flex-col gap-2xs">
              <a
                href="mailto:hello@velvetdigital.io"
                className="font-sans text-cream-2 hover:text-cream w-fit"
                style={{
                  transition:
                    "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                hello@velvetdigital.io
              </a>
              <a
                href={whatsappUrl(GENERAL_INTRO_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-cream-2 hover:text-cream w-fit"
                style={{
                  transition:
                    "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                Message us
              </a>
              <p className="text-cream-2 text-[length:var(--step--1)] mt-2xs">
                401, Office Park Building, Block E
                <br />
                Dubai Internet City, Dubai, UAE
              </p>
              <p className="text-cream-2 text-[length:var(--step--1)] mt-2xs">
                Studio in Bengaluru, India
              </p>
            </div>
          </div>

          {/* Social column */}
          <div>
            <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold mb-xs">
              Social
            </p>
            <div className="flex flex-col gap-2xs">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-cream-2 hover:text-cream w-fit"
                  style={{
                    transition:
                      "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/12">
        <div className="max-w-[1200px] mx-auto px-md lg:px-lg py-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-xs">
          <p className="text-cream-2 text-[length:var(--step--1)]">
            &copy; 2026 Velvet Digital.
          </p>
          <div className="flex gap-md text-[length:var(--step--1)]">
            <Link
              href="/privacy/"
              className="text-cream-2 hover:text-cream"
              style={{
                transition:
                  "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              Privacy
            </Link>
            <Link
              href="/terms/"
              className="text-cream-2 hover:text-cream"
              style={{
                transition:
                  "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
