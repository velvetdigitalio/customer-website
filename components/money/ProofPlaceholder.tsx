/**
 * Honest empty state for proof. Per CLAUDE.md we never fabricate testimonials,
 * metrics or client names — this renders a restrained placeholder the studio
 * fills as real engagements complete. Do not replace with invented quotes.
 */
export function ProofPlaceholder({
  note = "Client results and named testimonials are added here as engagements complete. We would rather show you a real one on a call than print a fabricated one on a page.",
}: {
  note?: string;
}) {
  return (
    // TODO: replace with real, attributable client testimonials + results
    <div className="border border-dashed border-hairline rounded-[var(--radius-md)] p-lg text-center">
      <p className="font-serif italic text-ink-2 text-[length:var(--step-0)] max-w-[52ch] mx-auto leading-[1.5]">
        {note}
      </p>
    </div>
  );
}
