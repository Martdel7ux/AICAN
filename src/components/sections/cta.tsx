import { EarlyAccessForm } from "@/components/early-access-form";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-obsidian px-7 py-14 md:px-16 md:py-20">
          {/* ambient accent */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-accent/10 blur-[90px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow !text-accent">Limited early access</span>
              <h2 className="mt-6 font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] font-light leading-[1.05] tracking-tight text-canvas">
                Become an
                <br />
                <span className="italic text-accent">early adopter.</span>
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
                We&rsquo;re onboarding a small number of teams. Tell us where to
                reach you and we&rsquo;ll be in touch.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:p-8">
              <EarlyAccessForm tone="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
