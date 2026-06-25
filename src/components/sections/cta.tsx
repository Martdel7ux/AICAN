"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { ArrowRight, CheckIcon } from "@/components/icons";

export function CTA() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this to your backend / email provider.
    setSent(true);
  }

  return (
    <section id="cta" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-obsidian px-7 py-14 md:px-16 md:py-20">
          {/* ambient accent */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-accent/10 blur-[90px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow !text-accent">
                Limited early access
              </span>
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
              {sent ? (
                <div className="flex flex-col items-start gap-4 py-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-canvas">
                    You&rsquo;re on the list.
                  </h3>
                  <p className="text-[14px] leading-relaxed text-white/55">
                    Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We&rsquo;ll
                    reach out to{" "}
                    <span className="text-accent">{email}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/35 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/35 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-canvas hover:text-ink"
                  >
                    Request early access
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                  <p className="pt-1 text-center font-mono text-[11px] text-white/35">
                    No spam. We&rsquo;ll only email about onboarding.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
