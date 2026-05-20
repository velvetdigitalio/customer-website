import { cn } from "@/lib/cn";

interface Props {
  color?: "purple" | "gold" | "deep";
  size?: number;
  className?: string;
}

export function GradientOrb({
  color = "purple",
  size = 600,
  className,
}: Props) {
  const colorMap = {
    purple:
      "radial-gradient(circle at center, rgba(124,58,237,0.45), rgba(124,58,237,0.10) 35%, transparent 70%)",
    gold: "radial-gradient(circle at center, rgba(245,215,122,0.32), rgba(212,175,55,0.10) 35%, transparent 70%)",
    deep: "radial-gradient(circle at center, rgba(168,108,235,0.5), rgba(80,30,180,0.15) 40%, transparent 75%)",
  } as const;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl animate-glow",
        className,
      )}
      style={{
        width: size,
        height: size,
        background: colorMap[color],
      }}
    />
  );
}
