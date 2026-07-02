import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms that govern use of the Velvet Digital website.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <main className="pt-28 lg:pt-36 pb-2xl">
      <article className="max-w-[720px] mx-auto px-md lg:px-lg">
        <h1 className="font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink">
          Terms of Service
        </h1>
        <p className="mt-sm text-ink-2 text-[length:var(--step--1)]">
          Last updated: June 2026
        </p>

        <div className="mt-xl flex flex-col gap-lg text-ink-2 leading-[1.6]">
          <p>
            These terms govern your use of this website, operated by Velvet Digital
            (“Velvet”, “we”, “us”), a studio based in Bengaluru, India. By using the
            site you agree to them. If you do not agree, please do not use the site.
          </p>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Use of the site
            </h2>
            <p>
              You may use this website for personal and informational purposes. You
              agree not to misuse it, interfere with its operation, or attempt to
              access it other than through the interface we provide.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Intellectual property
            </h2>
            <p>
              The content on this site — text, imagery, the campaign concepts shown,
              and the Velvet Digital name and marks — is owned by us or used with
              permission. The campaign work presented is our own concept and
              art-direction work. Please do not reproduce or reuse it without our
              written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Concept work
            </h2>
            <p>
              Work labelled as a concept represents our own approach and
              art direction. It is shown to illustrate how we think, and is not a
              record of delivered client results or a guarantee of any outcome.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              No warranty
            </h2>
            <p>
              The site is provided “as is”. While we take care to keep it accurate
              and available, we make no warranties about its completeness,
              reliability, or uninterrupted availability.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Limitation of liability
            </h2>
            <p>
              To the extent permitted by law, Velvet Digital is not liable for any
              loss arising from your use of, or inability to use, this website or any
              site it links to.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Engagements
            </h2>
            <p>
              Nothing on this site is an offer or a binding contract for services.
              Any work we do together is governed by a separate written agreement
              that sets out scope, fees, and terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[length:var(--step-1)] tracking-[-0.02em] text-ink mb-xs">
              Governing law & contact
            </h2>
            <p>
              These terms are governed by the laws of India. Questions can be sent to{" "}
              <a href="mailto:hello@velvetdigital.io" className="link text-ink">
                <span className="relative">hello@velvetdigital.io</span>
              </a>
              . We may update these terms from time to time; the date above reflects
              the latest revision.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
