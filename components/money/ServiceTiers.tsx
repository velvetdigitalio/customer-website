export type Tier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  points?: string[];
};

/** Pricing / engagement tiers as restrained editorial cards (no glass, no hype). */
export function ServiceTiers({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {tiers.map((t) => (
        <div
          key={t.name}
          className="flex flex-col border border-hairline rounded-[var(--radius-md)] bg-paper p-lg"
        >
          <h3 className="font-serif text-[length:var(--step-1)] leading-[1.2] tracking-[-0.01em] text-ink">
            {t.name}
          </h3>
          <p className="mt-xs text-gold font-serif text-[length:var(--step-1)]">
            {t.price}
            {t.cadence && (
              <span className="text-ink-2 text-[length:var(--step--1)] font-sans">
                {" "}
                {t.cadence}
              </span>
            )}
          </p>
          <p className="mt-sm text-ink-2 leading-[1.6] text-[length:var(--step--1)]">
            {t.description}
          </p>
          {t.points && t.points.length > 0 && (
            <ul className="mt-md flex flex-col gap-2xs text-ink-2 text-[length:var(--step--1)]">
              {t.points.map((p) => (
                <li key={p} className="relative pl-md">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.7em] w-2 h-px bg-gold"
                  />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
