import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { LockIcon, NetworkIcon, ChipIcon, DriftIcon } from "@/components/icons";

const problems = [
  {
    icon: LockIcon,
    title: "Security complexity",
    body: "Enterprise security requires NSGs, firewalls, private endpoints, and RBAC. Getting it right takes months of expertise.",
  },
  {
    icon: NetworkIcon,
    title: "Network architecture",
    body: "Hub-spoke topology with proper segmentation takes weeks to design, implement, and validate correctly.",
  },
  {
    icon: ChipIcon,
    title: "AI service integration",
    body: "Azure AI services need private networking, content safety, and managed identity. Each one is a separate project.",
  },
  {
    icon: DriftIcon,
    title: "Infrastructure drift",
    body: "Manual configuration leads to drift, inconsistency, compliance gaps, and audit failures over time.",
  },
];

export function Challenge() {
  return (
    <section className="border-t border-line bg-paper py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">The challenge</span>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
              Building secure AI infrastructure shouldn&rsquo;t take months.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              The hard part was never the model. It&rsquo;s everything
              underneath it, and every team rebuilds it from scratch.
            </p>
          </Reveal>

          <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <div className="text-muted">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
