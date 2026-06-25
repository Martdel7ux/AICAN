"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wordmark } from "./wordmark";

const links = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Showcase", href: "/showcase" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
];

// Frosted-glass surface: translucent fill, blur, bright top-edge highlight, soft drop shadow.
const glass =
  "backdrop-blur-2xl shadow-[0_12px_44px_-18px_rgba(22,19,15,0.30),inset_0_1px_0_0_rgba(255,255,255,0.65)]";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4">
      <div className="mx-auto w-full max-w-container">
        {/* Floating glass pill */}
        <div
          className={`flex h-14 items-center justify-between rounded-full border pl-6 pr-2.5 transition-all duration-500 ${glass} ${
            scrolled
              ? "border-white/60 bg-canvas/70"
              : "border-white/45 bg-canvas/45"
          }`}
        >
          <Wordmark />

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13.5px] text-body/80 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/get-started" className="btn-primary !px-5 !py-2.5 !text-[13px]">
              Get Started
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu — matching floating glass card */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-2 overflow-hidden rounded-3xl border border-white/55 bg-canvas/80 md:hidden ${glass}`}
            >
              <div className="flex flex-col gap-1 p-4">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-[15px] text-body transition-colors hover:bg-paper hover:text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/get-started"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
