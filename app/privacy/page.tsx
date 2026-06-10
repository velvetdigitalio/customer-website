import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy — Velvet Digital",
  description:
    "How Velvet Digital collects, uses and protects the limited personal information you share with us.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <main className="pt-28 lg:pt-36 pb-2xl">
      <article className="max-w-[720px] mx-auto px-md lg:px-lg">
        <h1 className="font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink">
          Privacy Policy
        </h1>
        <p className="mt-sm text-ink-2 text-[length:var(--step--1)]">
          Last updated: June 2026
        </p>

        <div className="mt-xl flex flex-col gap-lg text-ink-2 leading-[1.6]">
          <p>
            This policy explains how Velvet Digital (“Velvet”, “we”, “us”) — a
            brand and digital studio based in Bengaluru, India — handles the
            limited personal information you share when you contact us or use this
            website. We keep what we collect to a minimum, and we do not sell it.
          </p>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Information we collect
            </h2>
            <p>
              We only hold information you choose to give us — typically your name,
              email address, and the details of an enquiry sent by email, WhatsApp,
              or when you book a call through our scheduling tool. We also collect
              aggregate, non-identifying usage data (such as pages viewed) through
              privacy-respecting analytics.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              How we use it
            </h2>
            <p>
              To reply to your enquiry, schedule and prepare for a call, deliver
              services where we work together, and understand in general terms how
              the site is used so we can improve it. We do not use your details for
              unrelated marketing without your consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Third-party services
            </h2>
            <p>
              We rely on a small number of reputable providers — for example, a
              scheduling tool (Calendly) for booking calls, an email provider, and
              an analytics provider. When you use these, your information is also
              processed under their own privacy policies. We share only what is
              needed for them to perform their function.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Cookies & analytics
            </h2>
            <p>
              We use minimal cookies and privacy-respecting analytics to measure
              site usage in aggregate. You can block or delete cookies in your
              browser settings; the site will continue to work.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              How long we keep it
            </h2>
            <p>
              We keep enquiry information only for as long as needed to respond and,
              where relevant, to maintain a working relationship — after which it is
              deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Your choices
            </h2>
            <p>
              You can ask us to access, correct, or delete the personal information
              we hold about you at any time. Email{" "}
              <a href="mailto:hello@velvetdigital.io" className="link text-ink">
                <span className="relative">hello@velvetdigital.io</span>
              </a>{" "}
              and we will act on your request promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Contact & updates
            </h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:hello@velvetdigital.io" className="link text-ink">
                <span className="relative">hello@velvetdigital.io</span>
              </a>
              . We may update this page as the studio grows or as our tools change;
              the date above reflects the latest revision.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
