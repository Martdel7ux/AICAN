import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Faq, type QA } from "@/components/faq";
import { SupportForm } from "@/components/support-form";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Reach our team for technical support, billing questions, security issues, or partnership inquiries.",
};

const channels = [
  {
    title: "General support",
    body: "Technical questions, billing, partnership and general inquiries.",
    value: "hello@aican.tech",
  },
  {
    title: "Response time",
    body: "We respond to all requests within 24 to 48 business hours.",
    value: "Mon to Fri · 9am to 6pm CET",
  },
  {
    title: "Security issues",
    body: "Report vulnerabilities or incidents via our dedicated security inbox.",
    value: "security@aican.tech",
  },
];

const faqs: QA[] = [
  {
    q: "What is AICAN?",
    a: "AICAN is a production-ready Terraform blueprint for deploying secure, enterprise-grade Azure infrastructure optimized for AI applications. It bundles 20+ modules (networking, security, AI services, and CI/CD) into a single reproducible foundation you control.",
  },
  {
    q: "How do I deploy AICAN on Azure?",
    a: "Four steps: bootstrap (create backend storage and a least-privilege service principal), configure (set feature flags in your tfvars file), deploy (terraform init, plan, and apply), and build (ship your apps through the included CI/CD workflows). Most teams reach a production-ready environment in hours.",
  },
  {
    q: "What Azure services does AICAN provision?",
    a: "A hub-spoke network with Azure Firewall and Bastion, Azure AI Foundry with content safety, API Management as a unified AI gateway, private endpoints across all services, managed identities, and optional Cosmos DB and App Service, each toggled by feature flags.",
  },
  {
    q: "Is my data secure?",
    a: "Security is the default, not an afterthought. All services communicate over private endpoints with public network access disabled, NSG rules and UDRs applied, zero-trust networking enforced, and authentication handled through managed identities, with no secrets stored in your applications.",
  },
  {
    q: "Can I enable or disable individual services?",
    a: "Yes. Every major component is governed by a boolean feature flag. Enable only what you need, and the secure defaults stay intact regardless of which modules you turn on or off.",
  },
  {
    q: "Is AICAN available on the Azure Marketplace?",
    a: "We're onboarding a limited number of early-adopter teams directly today. Reach out through the early-access form and we'll share current availability and roadmap details, including marketplace plans.",
  },
  {
    q: "What support tiers are available?",
    a: "Early-adopter teams receive direct email support with a response window of 24 to 48 business hours, plus a dedicated inbox for security reports. Expanded support tiers are part of our roadmap.",
  },
  {
    q: "How do I report a security vulnerability?",
    a: "Email our dedicated security inbox at security@aican.tech with details of the issue. We treat security reports as a priority and will acknowledge and triage them promptly.",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Support</span>
          <h1 className="display mt-6 text-[clamp(2.4rem,5vw,3.8rem)]">
            How can we help?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Reach our team for technical support, billing questions, security
            issues, or partnership inquiries. We typically respond within
            24 to 48 business hours.
          </p>
        </Reveal>

        {/* Channels */}
        <Reveal className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="bg-paper p-8">
              <h3 className="text-lg font-medium text-ink">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {c.body}
              </p>
              <p className="mt-5 font-mono text-[13px] text-accent">{c.value}</p>
            </div>
          ))}
        </Reveal>

        {/* Form + FAQ */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <SupportForm />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-light tracking-tight text-ink">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              Quick answers to common questions.
            </p>
            <div className="mt-8">
              <Faq items={faqs} />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
