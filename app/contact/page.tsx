import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Request an Audit · Velvet Digital",
  description:
    "A short, honest review of your brand and digital presence. We reply within two working days.",
  path: "/contact/",
});

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/velvetdigital.io" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/velvetdigitalio/61590411488979/",
  },
  { label: "WhatsApp", href: "https://wa.me/918861184926" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Start with an <em className="italic text-gold">audit.</em>
          </>
        }
        lead="A short, honest review of your brand and digital presence — where it stands, and the most direct way forward. No pitch deck. We'll tell you plainly whether we're the right studio for you."
      />

      <section className="bg-paper pb-2xl lg:pb-3xl">
        <Container>
        <div className="max-w-[600px]">
          <Reveal>
            <Button calendly>Request an audit</Button>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-md text-ink-2">
              Or email{" "}
              <a
                href="mailto:hello@velvetdigital.io"
                className="link text-ink"
              >
                <span className="relative">hello@velvetdigital.io</span>
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-lg flex flex-col gap-2xs text-[length:var(--step--1)] text-ink-2">
              <p>We reply within two working days.</p>
              <p>We take a small number of new brands each quarter.</p>
              <p>Bengaluru, India — working for the UAE.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-xl border-t border-hairline pt-lg">
              <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold mb-sm">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-x-lg gap-y-xs">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-ink"
                  >
                    <span className="relative">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        </Container>
      </section>
    </main>
  );
}
