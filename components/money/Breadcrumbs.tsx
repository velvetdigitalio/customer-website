import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type Crumb = { name: string; path?: string };

/**
 * Visual breadcrumb trail. Pair with breadcrumbLd() for the matching schema.
 * The last crumb is the current page and is not linked.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-paper pt-24 lg:pt-28">
      <Container>
        <ol className="flex flex-wrap items-center gap-x-xs gap-y-2xs text-[length:var(--step--1)] text-ink-2">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-x-xs">
                {c.path && !last ? (
                  <Link
                    href={c.path}
                    className="hover:text-gold"
                    style={{
                      transition:
                        "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                )}
                {!last && (
                  <span aria-hidden className="text-hairline">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
