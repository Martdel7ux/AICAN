import { Reveal } from "@/components/reveal";
import { CheckIcon, CrossIcon } from "@/components/icons";

const rows = [
  ["Months of cloud plumbing", "Deploy infra in hours"],
  ["Security & networking surprises", "Zero-trust networking baked in"],
  ["Zero-trust not configured", "Private endpoints everywhere"],
  ["Compliance blockers", "Governance & logs unified"],
  ["Slow time to production", "Teams focus on AI logic"],
];

export function Comparison() {
  return (
    <section
      id="comparison"
      className="scroll-mt-24 border-t border-line py-20 md:py-28"
    >
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Comparison</span>
          <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
            Why AICAN?
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            Stop wrestling with infrastructure. Start shipping AI applications
            faster than your competitors.
          </p>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-2xl border border-line">
          <div className="grid md:grid-cols-2">
            {/* Without */}
            <div className="border-b border-line bg-paper p-8 md:border-b-0 md:border-r md:p-10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Without AICAN
              </h3>
              <ul className="mt-7 space-y-4">
                {rows.map((r) => (
                  <li key={r[0]} className="flex items-start gap-3">
                    <span className="mt-0.5 text-faint">
                      <CrossIcon />
                    </span>
                    <span className="text-[15px] text-muted line-through decoration-line decoration-1">
                      {r[0]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="relative bg-obsidian p-8 md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                With AICAN
              </h3>
              <ul className="mt-7 space-y-4">
                {rows.map((r) => (
                  <li key={r[1]} className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent">
                      <CheckIcon />
                    </span>
                    <span className="text-[15px] text-white/85">{r[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
