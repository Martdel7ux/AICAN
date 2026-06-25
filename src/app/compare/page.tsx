import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CTABand } from "@/components/cta-band";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CheckIcon, CrossIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Why teams choose AICAN: deploy secure AI infrastructure in hours instead of months of cloud plumbing.",
};

const rows = [
  ["Months of cloud plumbing", "Deploy infra in hours"],
  ["Security & networking surprises", "Zero-trust networking baked in"],
  ["Zero-trust not configured", "Private endpoints everywhere"],
  ["Compliance blockers", "Governance & logs unified"],
  ["Slow time to production", "Teams focus on AI logic"],
];

const reasons = [
  {
    title: "Hours, not months",
    body: "Standing up secure Azure infrastructure by hand takes months of specialized work. AICAN delivers the same foundation from code in an afternoon, so your roadmap starts on day one instead of after the platform is finally ready.",
  },
  {
    title: "Security is the default",
    body: "Most projects discover their networking and access gaps late, under deadline pressure. Here, zero-trust networking, private endpoints, and least-privilege access are on before you write a line of application code.",
  },
  {
    title: "Nothing left exposed",
    body: "Public network access is disabled and every service communicates over private endpoints. There's no hardening backlog to work through, because the secure posture is the starting point, not the goal.",
  },
  {
    title: "Compliance, unified",
    body: "Audit logging, RBAC, and governance are configured consistently across every environment. Reviews stop being a scramble because the controls auditors ask about are already in place and reproducible.",
  },
  {
    title: "Your team stays on product",
    body: "Engineers spend their time on models and product logic instead of cloud plumbing. The infrastructure is a solved problem you maintain as code, not a project that competes with your roadmap.",
  },
];

export default function ComparePage() {
  return (
    <>
      <PageHeader
        eyebrow="Comparison"
        title={
          <>
            Why teams{" "}
            <span className="italic text-accent">choose AICAN.</span>
          </>
        }
        lede="The difference between months of cloud plumbing and shipping AI this week — laid out plainly."
      />

      {/* Table */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-2xl border border-line">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-line bg-paper p-8 md:border-b-0 md:border-r md:p-10">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  Without AICAN
                </h2>
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

              <div className="relative bg-obsidian p-8 md:p-10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  With AICAN
                </h2>
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

      {/* Reasoned differences */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The difference</span>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
              Five reasons it adds up.
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reasons.map((r, i) => (
              <StaggerItem key={r.title}>
                <div className="flex gap-5">
                  <span className="font-serif text-2xl font-light text-accent/70">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-ink">{r.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {r.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        title="Spend your next month shipping, not plumbing."
        body="Request early access and deploy the secure foundation into your own Azure subscription."
      />
    </>
  );
}
