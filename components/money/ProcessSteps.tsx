export type Step = { title: string; body: string };

/** Numbered process steps, editorial style — serif index in gold. */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-lg lg:gap-xl">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col">
          <span className="font-serif text-[length:var(--step-1)] text-gold leading-none">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-xs font-serif text-[length:var(--step-1)] leading-[1.2] tracking-[-0.01em] text-ink">
            {s.title}
          </h3>
          <p className="mt-2xs text-ink-2 leading-[1.6] max-w-[42ch]">
            {s.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
