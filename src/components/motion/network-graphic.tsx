"use client";

import { motion, useReducedMotion } from "framer-motion";

const HX = 220;
const HY = 180;

const spokes = [
  { x: 74, y: 76, label: "Web", inbound: false },
  { x: 366, y: 76, label: "API", inbound: true },
  { x: 74, y: 284, label: "Data", inbound: true },
  { x: 366, y: 284, label: "Jobs", inbound: false },
];

const ease = [0.22, 1, 0.36, 1] as const;

function PulseDot({
  from,
  to,
  delay,
  duration,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
  duration: number;
}) {
  return (
    <motion.circle
      r={3.5}
      className="fill-accent"
      initial={{ cx: from.x, cy: from.y, opacity: 0 }}
      animate={{
        cx: [from.x, to.x],
        cy: [from.y, to.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.6,
      }}
    />
  );
}

export function NetworkGraphic({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 440 360"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Animated hub-spoke network topology with traffic flowing between a central hub and isolated spokes"
    >
      {/* Edges */}
      <g>
        {spokes.map((s, i) => (
          <motion.line
            key={`edge-${i}`}
            x1={HX}
            y1={HY}
            x2={s.x}
            y2={s.y}
            className="stroke-ink/15"
            strokeWidth={1.25}
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.12 }}
          />
        ))}
      </g>

      {/* Traffic pulses */}
      {!reduce && (
        <g>
          {spokes.map((s, i) => {
            const from = s.inbound ? { x: s.x, y: s.y } : { x: HX, y: HY };
            const to = s.inbound ? { x: HX, y: HY } : { x: s.x, y: s.y };
            return (
              <PulseDot
                key={`dot-${i}`}
                from={from}
                to={to}
                delay={0.6 + i * 0.55}
                duration={2.6}
              />
            );
          })}
        </g>
      )}

      {/* Spoke nodes */}
      <g>
        {spokes.map((s, i) => (
          <motion.g
            key={`node-${i}`}
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.12 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <rect
              x={s.x - 44}
              y={s.y - 23}
              width={88}
              height={46}
              rx={11}
              className="fill-paper stroke-line"
              strokeWidth={1}
            />
            <circle cx={s.x - 28} cy={s.y} r={3} className="fill-accent/60" />
            <text
              x={s.x - 18}
              y={s.y - 1}
              className="fill-faint font-mono"
              style={{ fontSize: 8, letterSpacing: "0.12em" }}
            >
              SPOKE
            </text>
            <text
              x={s.x - 18}
              y={s.y + 10}
              className="fill-ink"
              style={{ fontSize: 11, fontWeight: 500 }}
            >
              {s.label}
            </text>
          </motion.g>
        ))}
      </g>

      {/* Hub (drawn last, on top) */}
      <g>
        {/* pulsing ring */}
        {!reduce && (
          <circle
            cx={HX}
            cy={HY}
            r={52}
            className="origin-center animate-pulse-ring fill-none stroke-accent/40"
            strokeWidth={1}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        )}
        <motion.g
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <rect
            x={HX - 56}
            y={HY - 34}
            width={112}
            height={68}
            rx={14}
            className="fill-obsidian"
          />
          <text
            x={HX}
            y={HY - 6}
            textAnchor="middle"
            className="fill-canvas font-serif"
            style={{ fontSize: 16 }}
          >
            Hub
          </text>
          <text
            x={HX}
            y={HY + 13}
            textAnchor="middle"
            className="fill-white/45 font-mono"
            style={{ fontSize: 8, letterSpacing: "0.1em" }}
          >
            FIREWALL · BASTION
          </text>
        </motion.g>
      </g>
    </svg>
  );
}
