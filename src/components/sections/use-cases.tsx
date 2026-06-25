import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const personas = [
  {
    title: "Platform engineers",
    body: "Build internal developer platforms with pre-configured, secure infrastructure that follows Azure best practices. Reduce support burden and enable self-service deployments.",
    tags: ["Modular Terraform", "GitOps ready", "Self-service enabled"],
  },
  {
    title: "AI / ML teams",
    body: "Focus on models, not infrastructure. Get private AI endpoints with content safety enabled by default. Deploy production-ready AI applications faster.",
    tags: ["Azure AI Foundry", "Private endpoints", "Model deployment"],
  },
  {
    title: "Security teams",
    body: "Enforce compliance with zero-trust networking, audit logging, and least-privilege access by default. Meet regulatory requirements without constant oversight.",
    tags: ["NSG rules", "Azure Firewall", "RBAC policies"],
  },
  {
    title: "Enterprises",
    body: "Meet regulatory requirements with enterprise-grade architecture proven across multiple production deployments. Standardize infrastructure patterns across teams.",
    tags: ["Hub-spoke topology", "Private networking", "Audit trails"],
  },
];

export function UseCases() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Use cases</span>
          <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
            Built for teams who ship.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {personas.map((p) => (
            <StaggerItem key={p.title}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8 transition-colors duration-300 hover:border-ink/15 md:p-10">
                <h3 className="font-serif text-2xl font-light tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {p.body}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
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
