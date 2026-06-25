import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CTABand } from "@/components/cta-band";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From zero to production in four steps: bootstrap, configure, deploy, and build on secure Azure infrastructure — in hours, not weeks.",
};

const prerequisites = [
  {
    title: "An Azure subscription",
    body: "Owner or Contributor access to the subscription you want to deploy into.",
  },
  {
    title: "Terraform & Azure CLI",
    body: "Standard tooling you likely already run. AICAN pins compatible versions for you.",
  },
  {
    title: "A GitHub repository",
    body: "For the included CI/CD workflows and OIDC, passwordless deployments.",
  },
];

const steps = [
  {
    n: "01",
    title: "Bootstrap",
    body: "Run the setup script to create Azure backend storage and a service principal with minimal permissions. One command configures authentication, remote state, and least-privilege access, so there are no secrets to copy around and nothing manual to keep in sync.",
    cmd: "./setup.sh --subscription-id <id> --env <env>",
    result: "Remote state + least-privilege identity ready.",
  },
  {
    n: "02",
    title: "Configure",
    body: "Copy the example tfvars file and customize feature flags, network ranges, and service options. Enable only what this environment needs with simple boolean toggles — the secure defaults stay intact regardless of what you turn on or off.",
    cmd: "cp terraform.tfvars.example terraform.tfvars",
    result: "Your environment described entirely in code.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Initialize Terraform, validate the configuration, review the plan, and apply. AICAN provisions the hub-spoke network, AI services, gateway, and private endpoints in the correct order, with security controls applied as it goes. Production-ready in hours, not weeks.",
    cmd: "terraform init && terraform plan -out=tfplan && terraform apply tfplan",
    result: "A secure, working environment in your subscription.",
  },
  {
    n: "04",
    title: "Build",
    body: "Deploy your AI applications onto the secure foundation using the pre-configured CI/CD workflows, running on self-hosted runners inside a private subnet. Push to main and your app ships — your team focuses on product, not plumbing.",
    cmd: "git push origin main",
    result: "Your application live on private infrastructure.",
  },
];

const included = [
  "Hub-spoke virtual network with Azure Firewall & Bastion",
  "Azure AI Foundry with content safety enabled",
  "API Management gateway for your AI endpoints",
  "Private endpoints across every service",
  "Managed identities — no stored secrets",
  "GitHub Actions CI/CD with OIDC",
  "NSG rules, UDRs, and RBAC policies",
  "Remote Terraform state & audit logging",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title={
          <>
            From zero to production in{" "}
            <span className="italic text-accent">four steps.</span>
          </>
        }
        lede="No bespoke architecture project. Bootstrap once, configure with feature flags, apply, and ship. Most teams reach a production-ready environment in hours, not weeks."
      />

      {/* Prerequisites */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Before you begin</span>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {prerequisites.map((p) => (
              <StaggerItem
                key={p.title}
                className="rounded-2xl border border-line bg-paper p-7"
              >
                <h3 className="text-lg font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The path</span>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
              Four commands to a secure stack.
            </h2>
          </Reveal>

          <Stagger className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {steps.map((s) => (
              <StaggerItem key={s.n} className="bg-paper">
                <div className="grid gap-7 p-8 md:grid-cols-[auto_1fr] md:gap-10 md:p-10">
                  <span className="font-serif text-4xl font-light text-accent/70 md:w-20">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-ink">{s.title}</h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                      {s.body}
                    </p>
                    <div className="mt-6 overflow-x-auto rounded-lg border border-line bg-obsidian px-4 py-3 no-scrollbar">
                      <code className="block break-words font-mono text-[12.5px] leading-relaxed text-white/70 sm:whitespace-nowrap sm:break-normal">
                        <span className="mr-2 select-none text-accent">$</span>
                        {s.cmd}
                      </code>
                    </div>
                    <p className="mt-4 flex items-center gap-2 text-[13.5px] text-muted">
                      <CheckIcon className="h-4 w-4 flex-none text-accent" />
                      {s.result}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow">Day one</span>
              <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)]">
                What you get after a single apply.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
                Not a starting point to harden later — a complete, secure
                environment ready for your applications.
              </p>
            </Reveal>

            <Stagger className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {included.map((i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3 border-b border-line pb-4">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span className="text-[15px] leading-relaxed text-body">
                      {i}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to run those four commands?"
        body="Request early access and we'll help you deploy AICAN into your own Azure subscription."
      />
    </>
  );
}
