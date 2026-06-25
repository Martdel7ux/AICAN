"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

const terminalLines = [
  { type: "cmd", text: "git clone aican && cd aican" },
  { type: "cmd", text: "./bootstrap.sh --subscription-id <your-id>" },
  { type: "cmd", text: "terraform apply" },
  { type: "ok", text: "Hub network deployed" },
  { type: "ok", text: "Spoke network deployed" },
  { type: "ok", text: "Azure AI Foundry ready" },
  { type: "ok", text: "API Management configured" },
  { type: "done", text: "Production-ready infrastructure deployed" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* faint grain + soft radial wash */}
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow"
            >
              Production-ready infrastructure
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.05 }}
              className="display mt-6 text-[clamp(2.6rem,6vw,4.6rem)]"
            >
              Enterprise AI
              <br />
              infrastructure,
              <br />
              <span className="italic text-accent">defined as code.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="mt-7 max-w-md text-lg leading-relaxed text-muted"
            >
              Secure, scalable Azure infrastructure for real AI workloads,
              eliminating up to{" "}
              <span className="text-ink">80% of infrastructure plumbing</span>{" "}
              effort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/#cta" className="btn-primary group">
                Become an early adopter
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/#capabilities" className="btn-ghost">
                Explore capabilities
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-faint"
            >
              A product of Artemis Industries
            </motion.p>
          </div>

          {/* Right: terminal jewel */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/5 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-obsidian shadow-[0_30px_80px_-30px_rgba(16,14,11,0.55)]">
              {/* title bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-white/35">
                  aican · bash
                </span>
              </div>

              {/* body */}
              <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.7 + i * 0.18 }}
                    className="flex items-start gap-2"
                  >
                    {line.type === "cmd" && (
                      <>
                        <span className="select-none text-accent">$</span>
                        <span className="text-white/80">{line.text}</span>
                      </>
                    )}
                    {line.type === "ok" && (
                      <>
                        <span className="select-none text-emerald-400">✓</span>
                        <span className="text-white/55">{line.text}</span>
                      </>
                    )}
                    {line.type === "done" && (
                      <span className="mt-1 flex items-center gap-2 text-accent">
                        <span className="inline-block h-3.5 w-2 animate-blink bg-accent" />
                        <span className="text-white/90">{line.text}</span>
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
