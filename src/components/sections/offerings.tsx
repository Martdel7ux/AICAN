import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ShieldIcon, StackIcon, BlueprintIcon } from "@/components/icons";

const items = [
  {
    icon: ShieldIcon,
    title: "Security-first by default",
    body: "Zero-trust networking, private endpoints, and enterprise-grade security built in from the first commit.",
  },
  {
    icon: StackIcon,
    title: "Complete AI stack",
    body: "Azure AI Foundry, API Management, and every supporting service pre-configured and integrated.",
  },
  {
    icon: BlueprintIcon,
    title: "Reproducible IaC blueprint",
    body: "20+ Terraform modules with feature flags. Deploy what you need, when you need it. Nothing more.",
  },
];

export function Offerings() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Our offerings</span>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {items.map((it) => (
            <StaggerItem
              key={it.title}
              className="group bg-paper p-8 transition-colors duration-300 hover:bg-canvas md:p-10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-canvas">
                <it.icon />
              </div>
              <h3 className="mt-7 font-serif text-2xl font-light tracking-tight text-ink">
                {it.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {it.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
