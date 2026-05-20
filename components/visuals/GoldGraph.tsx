"use client";

import { motion } from "framer-motion";

interface Props {
  className?: string;
  showAxis?: boolean;
}

export function GoldGraph({ className, showAxis = true }: Props) {
  const points = [
    [0, 80],
    [40, 70],
    [80, 75],
    [120, 55],
    [160, 60],
    [200, 40],
    [240, 35],
    [280, 22],
    [320, 18],
    [360, 8],
  ];

  const path = points
    .map(([x, y], i) => (i === 0 ? `M ${x},${y}` : `L ${x},${y}`))
    .join(" ");

  const areaPath = `${path} L 360,100 L 0,100 Z`;

  return (
    <svg
      viewBox="0 0 360 100"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="goldLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5D77A" />
          <stop offset="100%" stopColor="#F5D77A" />
        </linearGradient>
        <linearGradient id="goldArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F5D77A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F5D77A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {showAxis && (
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.5">
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" x2="360" y1={y} y2={y} />
          ))}
        </g>
      )}

      <motion.path
        d={areaPath}
        fill="url(#goldArea)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.path
        d={path}
        stroke="url(#goldLine)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r="2.5"
        fill="#F5D77A"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <animate
          attributeName="r"
          values="2.5;4;2.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </motion.circle>
    </svg>
  );
}
