import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CTABand } from "@/components/cta-band";
import { NetworkGraphic } from "@/components/motion/network-graphic";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  ShieldIcon,
  StackIcon,
  BlueprintIcon,
  NetworkIcon,
  LockIcon,
  ChipIcon,
  GatewayIcon,
  ModuleIcon,
  PipelineIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Production-ready Azure components with security best practices built in: hub-spoke networking, zero-trust, Azure AI Foundry, API Management, and CI/CD.",
};

const pillars = [
  {
    icon: ShieldIcon,
    title: "Security-first by default",
    body: "Zero-trust networking, private endpoints, and least-privilege access are switched on from the first apply, not bolted on later.",
  },
  {
    icon: StackIcon,
    title: "Complete AI stack",
    body: "Azure AI Foundry, API Management, and every supporting service arrive pre-configured and wired together, ready for your models.",
  },
  {
    icon: BlueprintIcon,
    title: "Reproducible blueprint",
    body: "20+ Terraform modules under version control. Every environment is identical, auditable, and rebuildable from code.",
  },
];

const capabilities = [
  {
    icon: NetworkIcon,
    title: "Hub-spoke topology",
    body: "A centralized hub holds Azure Firewall, Bastion, and shared services; isolated spokes hold your workloads. Traffic is segmented and inspected by design, so a compromise in one workload never becomes a path to another.",
    code: [
      ["enable_firewall", "true"],
      ["enable_bastion", "true"],
    ],
    gives: ["Network segmentation", "Centralized egress", "Bastion access"],
  },
  {
    icon: LockIcon,
    title: "Zero-trust networking",
    body: "Every service talks over private endpoints with public network access disabled. NSG rules, service endpoints, and user-defined routes are applied by default, so nothing is reachable from the public internet unless you choose it.",
    code: [
      ["public_network_access", "false"],
      ["private_endpoint", "true"],
    ],
    gives: ["Private endpoints", "NSG rules", "No public exposure"],
  },
  {
    icon: ChipIcon,
    title: "Azure AI Foundry",
    body: "Managed AI services land with content safety enabled, private networking, and managed-identity authentication. Your models get a secure home on day one, with no secrets to store or rotate.",
    code: [
      ["enable_foundry", "true"],
      ["content_safety", '"default"'],
    ],
    gives: ["Content safety", "Private inference", "Managed identity"],
  },
  {
    icon: GatewayIcon,
    title: "API Management",
    body: "A unified gateway fronts your AI endpoints with rate limiting, token tracking, authentication, and custom domains. Route traffic to multiple models securely behind one consistent, observable surface.",
    code: [
      ["enable_apim", "true"],
      ["sku_name", '"StandardV2"'],
    ],
    gives: ["Rate limiting", "Token tracking", "Custom domains"],
  },
  {
    icon: ModuleIcon,
    title: "Modular design",
    body: "Twenty-plus reusable Terraform modules, each behind a simple feature flag. Enable only what a project needs and leave the rest off, while the secure defaults stay intact no matter what you toggle.",
    code: [
      ["enable_cosmos", "false"],
      ["enable_app_service", "true"],
    ],
    gives: ["Feature flags", "Composable", "Safe defaults"],
  },
  {
    icon: PipelineIcon,
    title: "CI/CD ready",
    body: "GitHub Actions workflows ship in the box with OIDC for passwordless deployments and self-hosted runner support inside a private subnet. Push to main and your application deploys to secure infrastructure.",
    code: [
      ["runs-on", "[self-hosted, linux]"],
      ["uses", "azure/login@v2"],
    ],
    gives: ["OIDC auth", "Self-hosted runners", "GitOps"],
  },
];

const defaults = [
  ["public_network_access", "false"],
  ["private_endpoint", "true"],
  ["content_safety", '"default"'],
  ["mfa_enforced", "true"],
  ["encryption_at_rest", '"AES-256"'],
  ["tls_minimum_version", '"1.2"'],
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title={
          <>
            Everything you need to run AI{" "}
            <span className="italic text-accent">in production.</span>
          </>
        }
        lede="AICAN ships the entire secure foundation — networking, identity, AI services, and delivery — as composable Terraform modules with enterprise defaults switched on from the first apply."
      />

      {/* Three pillars */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.title} className="bg-paper p-8 md:p-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                  <p.icon />
                </div>
                <h3 className="mt-7 font-serif text-2xl font-light tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Architecture visual */}
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="rounded-3xl border border-line bg-canvas p-6 md:p-10">
                <NetworkGraphic />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <span className="eyebrow">Topology</span>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)]">
                Centralized control, isolated workloads.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                Shared security services live in the hub; each workload runs in
                its own spoke. Traffic flows through controlled, inspected paths
                over private endpoints — segmentation enforced by the platform,
                not by convention.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities deep-dive */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">In detail</span>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
              Six layers, one secure foundation.
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
            {capabilities.map((f) => (
              <StaggerItem key={f.title}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7 md:p-9">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent">
                    <f.icon />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {f.body}
                  </p>

                  <div className="mt-6 rounded-lg border border-line bg-obsidian px-4 py-3 font-mono text-[12px] leading-relaxed">
                    {f.code.map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="text-accent/90">{k}</span>
                        <span className="text-white/30">=</span>
                        <span className="text-white/70">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {f.gives.map((g) => (
                      <span key={g} className="tag">
                        {g}
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Secure defaults panel */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow">Secure by default</span>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)]">
                The right settings, already on.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                Security isn&rsquo;t a checklist you work through after launch.
                These are the defaults every AICAN deployment starts with, before
                you change a single line.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-obsidian shadow-[0_30px_80px_-30px_rgba(16,14,11,0.55)]">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 font-mono text-[11px] text-white/35">
                    defaults.tfvars
                  </span>
                </div>
                <div className="space-y-2 p-5 font-mono text-[12.5px] leading-relaxed">
                  {defaults.map(([k, v]) => (
                    <div key={k} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 flex-none text-accent" />
                      <span className="text-white/80">{k}</span>
                      <span className="text-white/30">=</span>
                      <span className="text-accent/90">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="See the whole stack in your subscription."
        body="Deploy the secure foundation into your own Azure environment and start building on day one."
      />
    </>
  );
}
