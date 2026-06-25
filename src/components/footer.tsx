import Link from "next/link";
import { Wordmark } from "./wordmark";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#capabilities" },
      { label: "How It Works", href: "/#process" },
      { label: "Showcase", href: "/#showcase" },
      { label: "Compare", href: "/#comparison" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Support", href: "/support" },
      { label: "Get Started", href: "/#cta" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy Policy", href: "/privacy" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Enterprise Azure infrastructure for AI applications, defined as
              code.
            </p>
            <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-faint">
              A product of Artemis Industries Ltd
              <br />
              Larnaca, Republic of Cyprus
              <br />
              European Union
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-body/80 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-wide text-faint">
            © 2026 AICAN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-mono text-[11px] tracking-wide text-faint transition-colors hover:text-accent"
            >
              Privacy
            </Link>
            <Link
              href="/support"
              className="font-mono text-[11px] tracking-wide text-faint transition-colors hover:text-accent"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
