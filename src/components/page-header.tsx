import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line pt-36 pb-14 md:pt-44 md:pb-20">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />

      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display mt-6 text-[clamp(2.3rem,5.5vw,4rem)]">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {lede}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </header>
  );
}
