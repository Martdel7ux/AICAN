import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { EarlyAccessForm } from "@/components/early-access-form";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Become an AICAN early adopter. We're onboarding a small number of teams to deploy secure Azure AI infrastructure.",
};

const next = [
  {
    n: "01",
    title: "We reach out",
    body: "A short note from our team to understand your Azure setup and what you're building.",
  },
  {
    n: "02",
    title: "Guided onboarding",
    body: "We help you bootstrap and deploy AICAN into your own subscription, step by step.",
  },
  {
    n: "03",
    title: "You ship",
    body: "Your team builds on a secure foundation, with direct support while you get going.",
  },
];

const perks = [
  "Early access pricing",
  "Direct line to the team",
  "Influence on the roadmap",
];

export default function GetStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Limited early access"
        title={
          <>
            Become an{" "}
            <span className="italic text-accent">early adopter.</span>
          </>
        }
        lede="We're onboarding a small number of teams. Tell us where to reach you and we'll be in touch about access and onboarding."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Reassurance */}
            <Reveal>
              <span className="eyebrow">What happens next</span>
              <ol className="mt-10 space-y-8">
                {next.map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <span className="font-serif text-2xl font-light text-accent/70">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 border-t border-line pt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  Early adopters get
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {perks.map((p) => (
                    <span key={p} className="tag">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-paper p-7 md:p-9">
                <h2 className="font-serif text-2xl font-light tracking-tight text-ink">
                  Request early access
                </h2>
                <p className="mt-2 text-[14px] text-muted">
                  No commitment. We&rsquo;ll reach out personally.
                </p>
                <div className="mt-7">
                  <EarlyAccessForm tone="light" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
