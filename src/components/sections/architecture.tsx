import { Reveal } from "@/components/reveal";
import { NetworkGraphic } from "@/components/motion/network-graphic";

export function Architecture() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Architecture</span>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
              A network that defends itself.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              A centralized hub holds your firewall, bastion, and shared
              services. Workloads live in isolated spokes and reach the world
              only through controlled, inspected paths, so a breach in one never
              becomes a path to another.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Every connection runs over private endpoints by default. Nothing is
              exposed to the public internet unless you decide it should be.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-paper p-6 md:p-10">
              <NetworkGraphic />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
