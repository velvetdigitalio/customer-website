import { cn } from "@/lib/cn";

type VelvetMarkProps = {
  className?: string;
  title?: string;
};

/**
 * The Velvet "V" mark as inline SVG. Uses currentColor so it inherits the
 * surrounding text colour (including the header's light/dark inversion).
 */
export function VelvetMark({ className, title }: VelvetMarkProps) {
  return (
    <svg
      viewBox="70 75 260 260"
      className={cn("block", className)}
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path d="M 95 98 L 183 106 C 193 164, 206 227, 222 280 C 223 285, 225 290, 227 294 C 232 286, 236 277, 240 266 C 257 215, 270 156, 276 104 L 305 97 C 292 166, 269 250, 243 304 C 239 312, 232 316, 226 316 C 218 316, 211 310, 205 298 C 177 239, 123 153, 95 98 Z" />
    </svg>
  );
}
