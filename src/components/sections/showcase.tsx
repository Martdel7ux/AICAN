import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const products = [
  {
    name: "PromoGoat",
    mono: "promogoat",
    body: "AI-powered marketing campaign planner. From goals to execution, AI agents turn your budget into a clear, channel-by-channel plan.",
    tags: ["AI Agents", "Marketing", "SaaS"],
  },
  {
    name: "TideMRV",
    mono: "tidemrv",
    body: "AI-powered MRV platform for blue carbon projects. Streamlines documentation, compliance, and certification to generate carbon credits faster.",
    tags: ["Blue Carbon", "Climate Tech", "MRV"],
  },
  {
    name: "MVM Strategies",
    mono: "mvm",
    body: "Smart, simple, scalable AI consulting for growing businesses, demystifying AI with customized solutions.",
    tags: ["Consulting", "AI Strategy", "Business"],
  },
];

export function Showcase() {
  return (
    <section
      id="showcase"
      className="scroll-mt-24 border-t border-line bg-paper py-20 md:py-28"
    >
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">In production</span>
          <h2 className="display mt-6 text-[clamp(2rem,4vw,3.1rem)]">
            Proven architectural patterns.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            Real applications built on AICAN infrastructure, serving customers in
            production today.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-canvas p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(16,14,11,0.4)]">
                {/* monospace identity glyph */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian font-serif text-lg text-canvas">
                    {p.name.charAt(0)}
                  </div>
                  <span className="font-mono text-[11px] text-faint">
                    /{p.mono}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium text-ink">{p.name}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-muted">
                  {p.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
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
