import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const steps = [
  {
    n: "01",
    title: "Bootstrap",
    body: "Run the setup script to create Azure backend storage and a service principal with minimal permissions. One command configures authentication, state storage, and least-privilege access.",
    cmd: "./setup.sh --subscription-id <id> --env <env>",
  },
  {
    n: "02",
    title: "Configure",
    body: "Copy the example tfvars file and customize feature flags, network ranges, and service options. Enable only what you need with simple boolean toggles.",
    cmd: "cp terraform.tfvars.example terraform.tfvars",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Initialize Terraform, validate your configuration, plan the changes, and apply to create your infrastructure. Production-ready in hours, not weeks.",
    cmd: "terraform init && terraform plan -out=tfplan && terraform apply tfplan",
  },
  {
    n: "04",
    title: "Build",
    body: "Deploy your AI applications to the secure infrastructure with pre-configured CI/CD workflows on self-hosted runners in a private subnet.",
    cmd: "git push origin main",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-line bg-paper py-20 md:py-28"
    >
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Process</span>
          <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
            Four steps to production.
          </h2>
        </Reveal>

        <Stagger className="mt-14 divide-y divide-line border-y border-line">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group grid gap-6 py-9 md:grid-cols-[auto_1fr_1.1fr] md:items-start md:gap-10">
                <span className="font-serif text-3xl font-light text-accent/70 transition-colors duration-300 group-hover:text-accent md:w-16">
                  {s.n}
                </span>
                <div className="md:max-w-xs">
                  <h3 className="text-xl font-medium text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
                <div className="self-center overflow-x-auto rounded-lg border border-line bg-obsidian px-4 py-3 no-scrollbar">
                  <code className="block break-words font-mono text-[12.5px] leading-relaxed text-white/70 sm:whitespace-nowrap sm:break-normal">
                    <span className="mr-2 select-none text-accent">$</span>
                    {s.cmd}
                  </code>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
