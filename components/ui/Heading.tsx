import { cn } from "@/lib/cn";

type HeadingProps = {
  level?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  accent?: string;
  className?: string;
  onDark?: boolean;
  id?: string;
};

function renderWithAccent(children: React.ReactNode, accent?: string) {
  if (!accent || typeof children !== "string") return children;
  const idx = children.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return children;
  const before = children.slice(0, idx);
  const match = children.slice(idx, idx + accent.length);
  const after = children.slice(idx + accent.length);
  return (
    <>
      {before}
      <em className="font-serif italic">{match}</em>
      {after}
    </>
  );
}

const sizeMap = {
  h1: "text-[length:var(--step-4)] leading-[1.05]",
  h2: "text-[length:var(--step-3)] leading-[1.1]",
  h3: "text-[length:var(--step-2)] leading-[1.15]",
  h4: "text-[length:var(--step-1)] leading-[1.2]",
};

export function Heading({
  level = "h2",
  children,
  accent,
  className,
  onDark = false,
  id,
}: HeadingProps) {
  const Tag = level;
  return (
    <Tag
      id={id}
      className={cn(
        "font-serif tracking-[-0.02em]",
        sizeMap[level],
        onDark ? "text-cream" : "text-ink",
        className,
      )}
    >
      {renderWithAccent(children, accent)}
    </Tag>
  );
}
