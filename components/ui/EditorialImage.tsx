"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Edge = "left" | "right" | "top" | "bottom";

/** Build a composited mask that softly feathers only the named edges. */
function featherStyle(edges: Edge[], amount: number): React.CSSProperties {
  if (!edges.length) return {};
  const map: Record<Edge, string> = {
    left: `linear-gradient(to right, transparent 0%, #000 ${amount}%)`,
    right: `linear-gradient(to left, transparent 0%, #000 ${amount}%)`,
    top: `linear-gradient(to bottom, transparent 0%, #000 ${amount}%)`,
    bottom: `linear-gradient(to top, transparent 0%, #000 ${amount}%)`,
  };
  const grads = edges.map((e) => map[e]).join(", ");
  return {
    maskImage: grads,
    WebkitMaskImage: grads,
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
  };
}

type EditorialImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Frame sizing / aspect — pass aspect-[..] or h-[..] utilities here. */
  className?: string;
  feather?: Edge[];
  featherAmount?: number;
  overlay?: "warm" | "none";
  scrim?: "left" | "bottom" | "none";
  parallax?: boolean;
  priority?: boolean;
  rounded?: boolean;
  objectPosition?: string;
  /** Overlaid content (for full-bleed designed moments). */
  children?: React.ReactNode;
};

export function EditorialImage({
  src,
  alt,
  width = 1448,
  height = 1086,
  className,
  feather = [],
  featherAmount = 14,
  overlay = "warm",
  scrim = "none",
  parallax = false,
  priority = false,
  rounded = true,
  objectPosition,
  children,
}: EditorialImageProps) {
  const prefersReduced = useReducedMotion();
  const [canHover, setCanHover] = useState(false);
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCanHover(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);

  const interactive = canHover && !prefersReduced;
  const parallaxOn = interactive && parallax;
  const restScale = parallaxOn ? 1.06 : 1;
  const hoverScale = parallaxOn ? 1.09 : 1.035;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(py, { stiffness: 120, damping: 20, mass: 0.4 });
  const scale = useSpring(restScale, { stiffness: 140, damping: 22 });

  useEffect(() => {
    scale.set(hovered && interactive ? hoverScale : restScale);
  }, [hovered, interactive, hoverScale, restScale, scale]);

  function onMove(e: React.MouseEvent) {
    if (!parallaxOn || !frameRef.current) return;
    const r = frameRef.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 18);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 18);
  }

  function onLeave() {
    setHovered(false);
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative overflow-hidden",
        rounded && "rounded-[var(--radius-sm)]",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
    >
      {/* Image layer (feathered) */}
      <div className="absolute inset-0" style={featherStyle(feather, featherAmount)}>
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-full object-cover"
          style={{
            x: parallaxOn ? x : 0,
            y: parallaxOn ? y : 0,
            scale,
            objectPosition,
            filter:
              hovered && interactive
                ? "saturate(1.05) contrast(1.02)"
                : "saturate(0.92) contrast(1.02)",
            transition:
              "filter 500ms cubic-bezier(0.22,1,0.36,1), object-position 700ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform, filter",
          }}
        />
      </div>

      {/* Tonal-unity warm wash */}
      {overlay === "warm" && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "var(--paper)",
            mixBlendMode: "soft-light",
            opacity: 0.14,
          }}
        />
      )}

      {/* Legibility scrim for overlaid text */}
      {scrim === "left" && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(24,20,16,0.86) 0%, rgba(24,20,16,0.62) 32%, rgba(24,20,16,0.22) 64%, rgba(24,20,16,0) 100%)",
          }}
        />
      )}
      {scrim === "bottom" && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, rgba(24,20,16,0.84) 0%, rgba(24,20,16,0.42) 38%, rgba(24,20,16,0.04) 72%)",
          }}
        />
      )}

      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
}

export { EASE };
