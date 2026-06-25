"use client";

import { useEffect, useState } from "react";

type Section = { id: string; n: string; title: string };

export function PrivacyToc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="mt-5 hidden flex-col gap-0.5 lg:flex">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`group flex items-baseline gap-2.5 rounded-md py-1.5 pl-3 text-[13px] transition-colors ${
            active === s.id
              ? "border-l-2 border-accent text-ink"
              : "border-l-2 border-transparent text-muted hover:text-ink"
          }`}
        >
          <span className="font-mono text-[10px] text-faint">{s.n}</span>
          <span className="leading-snug">{s.title}</span>
        </a>
      ))}
    </nav>
  );
}
