import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CTABand } from "@/components/cta-band";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Real applications built on AICAN infrastructure, serving customers in production today — across marketing AI, climate tech, and consulting.",
};

const products = [
  {
    name: "PromoGoat",
    sector: "AI marketing platform",
    tags: ["AI Agents", "Marketing", "SaaS"],
    body: "An AI-powered marketing campaign planner. From goals to execution, PromoGoat's agents turn a budget into a clear, channel-by-channel plan. Running multiple coordinated AI agents in production meant they needed private, governed model endpoints and a gateway that could meter and route traffic, without building any of it themselves.",
    on: [
      "Private AI endpoints via Azure AI Foundry",
      "API Management metering agent traffic",
      "Zero-trust networking around every service",
    ],
  },
  {
    name: "TideMRV",
    sector: "Climate / blue carbon",
    tags: ["Blue Carbon", "Climate Tech", "MRV"],
    body: "An AI-powered MRV platform for blue carbon projects. TideMRV streamlines documentation, compliance, and certification to generate carbon credits faster. Handling regulated environmental data demanded strict isolation, audit trails, and content safety — the kind of compliance posture that usually takes a dedicated security project to stand up.",
    on: [
      "Private endpoints with full audit logging",
      "Content safety enabled by default",
      "Hub-spoke isolation for regulated data",
    ],
  },
  {
    name: "MVM Strategies",
    sector: "AI consulting",
    tags: ["Consulting", "AI Strategy", "Business"],
    body: "Smart, simple, scalable AI consulting for growing businesses — demystifying AI with customized solutions. Delivering client engagements quickly meant standing up secure, repeatable environments again and again. The reproducible blueprint let them deploy a consistent, compliant foundation per client in hours.",
    on: [
      "Reproducible per-client environments",
      "Feature flags to fit each engagement",
      "CI/CD ready from the first commit",
    ],
  },
];

export default function ShowcasePage() {
  return (
    <>
      <PageHeader
        eyebrow="In production"
        title={
          <>
            Proven in production,{" "}
            <span className="italic text-accent">not in theory.</span>
          </>
        }
        lede="Real companies ship on AICAN today. Each started from the same secure blueprint and spent their energy on product, not plumbing."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Stagger className="space-y-6">
            {products.map((p, i) => (
              <StaggerItem key={p.name}>
                <article className="grid gap-8 rounded-2xl border border-line bg-paper p-8 md:grid-cols-[1.3fr_1fr] md:gap-12 md:p-12">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-obsidian font-serif text-2xl text-canvas">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-light tracking-tight text-ink">
                          {p.name}
                        </h2>
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                          {p.sector}
                        </p>
                      </div>
                      <span className="ml-auto font-serif text-3xl font-light text-line">
                        0{i + 1}
                      </span>
                    </div>

                    <p className="mt-7 text-[15px] leading-relaxed text-muted">
                      {p.body}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* On AICAN */}
                  <div className="rounded-2xl border border-line bg-canvas p-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      On AICAN
                    </p>
                    <ul className="mt-5 space-y-4">
                      {p.on.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                          <span className="text-[14.5px] leading-relaxed text-body">
                            {o}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-10 text-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-faint">
              Your product here, next.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Build the next one on AICAN."
        body="Start from the same secure foundation these teams did and focus on what makes your product different."
      />
    </>
  );
}
