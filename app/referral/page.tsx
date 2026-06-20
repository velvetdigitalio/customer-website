import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { VelvetMark } from "@/components/ui/VelvetMark";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Refer a jewellery brand · Velvet Digital",
  description:
    "Introduce a fine jewellery brand to Velvet and we'll thank you both — 1,000 AED to you, and 1,000 AED off their first month for them.",
  path: "/referral/",
});

const steps = [
  {
    num: "01",
    title: "Connect on WhatsApp",
    body: "Start a WhatsApp chat and give us the brand's name and the contact person you're introducing. Or open a three-way chat and introduce us directly.",
  },
  {
    num: "02",
    title: "They begin",
    body: "We reach out — or you introduce us in the group chat. When the brand signs on, they begin with 1,000 AED off their onboarding or first month.",
  },
  {
    num: "03",
    title: "You're paid",
    body: "Once their first invoice clears, we transfer 1,000 AED straight to your bank account. No tiers, no points — a clean reward for a good introduction.",
  },
];

const faqs = [
  {
    q: "How do I submit a referral?",
    a: "Message us on WhatsApp with your name, the name of the jewellery brand, and their contact details. You can also create a three-way WhatsApp group with us and the brand owner to make the introduction directly.",
  },
  {
    q: "Who can take part?",
    a: "Anyone — an existing client, an industry consultant, a photographer, a supplier, or a peer in the trade. If you know a jewellery brand that would be in good hands with us, you can introduce them.",
  },
  {
    q: "Is there a limit to how many brands I can introduce?",
    a: "No. You receive 1,000 AED for every eligible jewellery brand that signs on and clears their first invoice.",
  },
  {
    q: "When and how do I receive the 1,000 AED?",
    a: "Payouts are made by bank transfer within 14 business days of the referred brand clearing their first invoice or onboarding payment.",
  },
  {
    q: "Can a brand claim the discount without naming a referrer?",
    a: "To protect your reward, let us know on WhatsApp before the brand signs their contract. Referrals can't be applied retroactively once a contract is finalised.",
  },
];

const terms = [
  {
    term: "Eligibility",
    body: "To qualify for the reward, the referred jewellery brand must be a new client — not an existing client, a past client, or a brand already in active sales discussions with us.",
  },
  {
    term: "Submission protocol",
    body: "Referrals must be submitted via our official WhatsApp channel. The referrer must provide the brand's name and contact person before the contract is signed.",
  },
  {
    term: "A successful referral, defined",
    body: "A referral is successful only once the referred brand signs a service agreement and clears their first full payment — an onboarding fee or first month's retainer.",
  },
  {
    term: "Payout method",
    body: "Referral rewards are paid in AED by bank transfer. Any applicable bank wiring fees are the responsibility of the recipient.",
  },
  {
    term: "Discount limitations",
    body: "The 1,000 AED credit for the referred brand applies strictly to their initial onboarding fee or first month's invoice. It cannot be redeemed for cash or transferred.",
  },
  {
    term: "Self-referral",
    body: "You cannot refer a brand that you own, operate, or have a direct financial stake in.",
  },
  {
    term: "Programme changes",
    body: "We reserve the right to modify, suspend, or end this referral programme at any time.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ReferralPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-paper">
        <Container className="pt-28 lg:pt-36 pb-2xl lg:pb-3xl">
          <Reveal>
            <Eyebrow withRule>Referral programme</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.08] tracking-[-0.02em] text-ink max-w-[18ch]">
              Share the work. Grow the{" "}
              <em className="italic text-gold">craft.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-md text-ink-2 max-w-[58ch] text-[length:var(--step-1)] leading-[1.5]">
              Introduce a fine jewellery brand to us, and we&apos;ll thank you
              both. When they begin, you receive 1,000 AED — and they begin
              with 1,000 AED off their first month or onboarding fee.
            </p>
          </Reveal>

          {/* Two-sided reward */}
          <Reveal delay={0.2}>
            <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline rounded-[var(--radius-sm)] overflow-hidden max-w-[40rem]">
              <div className="bg-paper p-md lg:p-lg">
                <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.14em] text-ink-2">
                  You receive
                </p>
                <p className="mt-xs font-serif text-[length:var(--step-2)] leading-none text-ink">
                  1,000 <span className="text-gold">AED</span>
                </p>
                <p className="mt-xs text-[length:var(--step--1)] text-ink-2">
                  Paid to your bank account.
                </p>
              </div>
              <div className="bg-paper p-md lg:p-lg">
                <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.14em] text-ink-2">
                  They receive
                </p>
                <p className="mt-xs font-serif text-[length:var(--step-2)] leading-none text-ink">
                  1,000 <span className="text-gold">AED</span> off
                </p>
                <p className="mt-xs text-[length:var(--step--1)] text-ink-2">
                  Their first month or onboarding.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-xl flex flex-col gap-sm">
              <WhatsAppButton className="self-start">
                Introduce a brand on WhatsApp
              </WhatsAppButton>
              <p className="text-[length:var(--step--1)] text-ink-2">
                A simple introduction on WhatsApp is all it takes to start.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── How it works ── */}
      <Section surface="paper-2" ariaLabel="How it works">
        <Reveal>
          <Eyebrow withRule>How it works</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[20ch]">
            Three steps. One{" "}
            <em className="italic text-gold">introduction.</em>
          </h2>
        </Reveal>
        <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-lg lg:gap-xl">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={0.1 + i * 0.08}>
              <div className="border-t border-hairline pt-md h-full">
                <span className="font-serif text-[length:var(--step-1)] text-gold leading-none">
                  {s.num}
                </span>
                <h3 className="mt-sm font-serif text-[length:var(--step-2)] leading-[1.15] tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-sm text-ink-2 leading-[1.6]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section surface="paper" ariaLabel="Frequently asked questions">
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow withRule>Questions</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink">
              Frequently asked
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-lg border-t border-hairline">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-b border-hairline py-md"
                >
                  <summary className="flex items-center justify-between gap-md cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-serif text-[length:var(--step-1)] leading-snug tracking-[-0.01em] text-ink">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 text-gold text-[length:var(--step-2)] leading-none transition-transform group-open:rotate-45"
                      style={{ transitionDuration: "var(--dur-fast)" }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-sm text-ink-2 leading-[1.6] max-w-[64ch]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Terms & conditions ── */}
      <Section surface="paper-2" ariaLabel="Terms and conditions">
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow withRule>The detail</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink">
              Terms &amp; conditions
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="mt-lg flex flex-col">
              {terms.map((t) => (
                <div key={t.term} className="border-t border-hairline py-md">
                  <dt className="font-sans text-[length:var(--step-0)] font-medium text-ink">
                    {t.term}
                  </dt>
                  <dd className="mt-2xs text-ink-2 leading-[1.6] text-[length:var(--step--1)] max-w-[64ch]">
                    {t.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* ── Closing CTA ── */}
      <Section surface="umber" className="relative overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{ width: "clamp(12rem, 28vw, 24rem)", opacity: 0.04 }}
          aria-hidden="true"
        >
          <VelvetMark className="w-full h-auto text-cream" />
        </div>
        <div className="relative max-w-[600px] mx-auto text-center">
          <Reveal>
            <Eyebrow onDark className="justify-center">
              Introduce a brand
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-cream">
              Have a brand in <em className="italic text-gold">mind?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-md text-cream-2 max-w-[48ch] mx-auto">
              One introduction on WhatsApp is all it takes. We&apos;ll take it
              from there — and we&apos;ll keep you posted along the way.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-sm text-gold text-[length:var(--step--1)]">
              1,000 AED to you. 1,000 AED off for them.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-lg">
              <WhatsAppButton onDark>
                Introduce a brand on WhatsApp
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
