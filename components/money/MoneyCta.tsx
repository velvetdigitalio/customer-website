import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Closing CTA for the money pages: a single WhatsApp deep link. */
export function MoneyCta({
  heading = "Start with an audit.",
  body = "A short, honest review of your brand, content and local search — where it stands, and the most direct way forward. No pitch deck, no obligation.",
  whatsappMessage,
}: {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  whatsappMessage?: string;
}) {
  return (
    <Section surface="umber" ariaLabel="Get in touch">
      <div className="max-w-[600px] mx-auto text-center">
        <Eyebrow onDark className="justify-center">
          Working together
        </Eyebrow>
        <h2 className="mt-md font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-cream">
          {heading}
        </h2>
        <p className="mt-md text-cream-2 max-w-[52ch] mx-auto leading-[1.6]">
          {body}
        </p>
        <div className="mt-lg flex justify-center">
          <WhatsAppButton onDark message={whatsappMessage}>
            Message us on WhatsApp
          </WhatsAppButton>
        </div>
        <p className="mt-md text-cream-2 text-[length:var(--step--1)]">
          We take a small number of new brands each quarter. Replies in two
          working days.
        </p>
      </div>
    </Section>
  );
}
