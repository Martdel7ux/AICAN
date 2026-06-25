import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  NetworkIcon,
  LockIcon,
  ChipIcon,
  GatewayIcon,
  ModuleIcon,
  PipelineIcon,
} from "@/components/icons";

const features = [
  {
    icon: NetworkIcon,
    title: "Hub-spoke topology",
    body: "Centralized security with Azure Firewall, Bastion, and shared services in the hub. Isolated workloads in spokes.",
    code: [
      ["enable_firewall", "true"],
      ["enable_bastion", "true"],
    ],
  },
  {
    icon: LockIcon,
    title: "Zero-trust networking",
    body: "All services communicate over private endpoints. NSG rules, service endpoints, and UDRs configured by default.",
    code: [
      ["public_network_access", "false"],
      ["private_endpoint", "true"],
    ],
  },
  {
    icon: ChipIcon,
    title: "Azure AI Foundry",
    body: "Pre-configured AI services with content safety enabled, private networking, and managed identity authentication.",
    code: [
      ["enable_foundry", "true"],
      ["content_safety", '"default"'],
    ],
  },
  {
    icon: GatewayIcon,
    title: "API Management",
    body: "Unified gateway for AI endpoints with rate limiting, token tracking, and authentication across multiple models.",
    code: [
      ["enable_apim", "true"],
      ["sku_name", '"StandardV2"'],
    ],
  },
  {
    icon: ModuleIcon,
    title: "Modular design",
    body: "20+ reusable Terraform modules. Enable only what you need with feature flags while security defaults stay intact.",
    code: [
      ["enable_cosmos", "false"],
      ["enable_app_service", "true"],
    ],
  },
  {
    icon: PipelineIcon,
    title: "CI/CD ready",
    body: "GitHub Actions workflows included. OIDC authentication for passwordless deployments. Self-hosted runner support.",
    code: [
      ["runs-on", "[self-hosted, linux]"],
      ["uses", "azure/login@v2"],
    ],
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-t border-line py-20 md:py-28"
    >
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Capabilities</span>
          <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
            Everything you need.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            Production-ready components with Azure security best practices built
            in from day one.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_50px_-30px_rgba(16,14,11,0.4)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">
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
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
