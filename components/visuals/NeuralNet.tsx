"use client";

import { useMemo } from "react";

interface Props {
  className?: string;
  seed?: number;
}

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function NeuralNet({ className, seed = 7 }: Props) {
  const { layers, edges } = useMemo(() => {
    const rand = rng(seed);
    const layerCounts = [4, 6, 6, 4, 1];
    const w = 800;
    const h = 480;
    const layers = layerCounts.map((count, li) => {
      const x = (w / (layerCounts.length + 1)) * (li + 1);
      return Array.from({ length: count }, (_, ni) => {
        const padY = 60;
        const gap = (h - padY * 2) / Math.max(count - 1, 1);
        const y = count === 1 ? h / 2 : padY + gap * ni;
        return { x, y, jitter: rand() };
      });
    });
    const edges: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      delay: number;
      dur: number;
    }> = [];
    for (let li = 0; li < layers.length - 1; li++) {
      for (const a of layers[li]) {
        for (const b of layers[li + 1]) {
          edges.push({
            x1: a.x,
            y1: a.y,
            x2: b.x,
            y2: b.y,
            delay: rand() * 6,
            dur: 3 + rand() * 3,
          });
        }
      }
    }
    return { layers, edges };
  }, [seed]);

  return (
    <svg
      viewBox="0 0 800 480"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5D77A" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(212,175,55,0)" />
          <stop offset="50%" stopColor="rgba(212,175,55,0.65)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </linearGradient>
      </defs>

      <g>
        {edges.map((e, i) => (
          <g key={i}>
            <line
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.8"
            />
            <line
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke="url(#edgeGrad)"
              strokeWidth="1.2"
              strokeDasharray="6 80"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-200"
                dur={`${e.dur}s`}
                begin={`-${e.delay}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        ))}
      </g>

      <g>
        {layers.flat().map((n, i) => (
          <g key={i} transform={`translate(${n.x},${n.y})`}>
            <circle r="14" fill="url(#nodeGlow)" />
            <circle
              r="3"
              fill="#F5D77A"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
            >
              <animate
                attributeName="r"
                values="3;4.5;3"
                dur={`${2 + (n.jitter || 0) * 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </g>
    </svg>
  );
}
