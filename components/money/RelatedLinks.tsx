import { TextLink } from "@/components/ui/TextLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export type RelatedLink = { label: string; href: string };

/** Internal-linking block used at the foot of every money page. */
export function RelatedLinks({
  links,
  heading = "Keep reading",
}: {
  links: RelatedLink[];
  heading?: string;
}) {
  return (
    <div>
      <Eyebrow withRule>{heading}</Eyebrow>
      <ul className="mt-md flex flex-col gap-sm">
        {links.map((l) => (
          <li key={l.href}>
            <TextLink href={l.href} arrow className="group">
              {l.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
