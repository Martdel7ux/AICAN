import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "@/components/icons";

export function CTABand({
  title = "Ready to ship AI without the plumbing?",
  body = "We're onboarding a small number of teams. Request early access and we'll be in touch about onboarding.",
  cta = "Become an early adopter",
  href = "/get-started",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-obsidian px-7 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/10 blur-[90px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-light leading-[1.08] tracking-tight text-canvas">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
              {body}
            </p>
            <Link
              href={href}
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-canvas hover:text-ink"
            >
              {cta}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
