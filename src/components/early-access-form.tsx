"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";

type Tone = "dark" | "light";

const tones = {
  dark: {
    input:
      "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/35 outline-none transition-colors focus:border-accent",
    button:
      "flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-canvas hover:text-ink",
    note: "pt-1 text-center font-mono text-[11px] text-white/35",
    successTitle: "font-serif text-2xl font-light text-canvas",
    successBody: "text-[14px] leading-relaxed text-white/55",
    successIcon: "bg-accent/15 text-accent",
  },
  light: {
    input:
      "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink placeholder-faint outline-none transition-colors focus:border-accent",
    button:
      "flex w-full items-center justify-center rounded-xl bg-ink px-6 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent",
    note: "pt-1 text-center font-mono text-[11px] text-faint",
    successTitle: "font-serif text-2xl font-light text-ink",
    successBody: "text-[14px] leading-relaxed text-muted",
    successIcon: "bg-accent-soft text-accent",
  },
} as const;

export function EarlyAccessForm({ tone = "light" }: { tone?: Tone }) {
  const t = tones[tone];
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this to your backend / email provider (e.g. Formspree).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${t.successIcon}`}
        >
          <CheckIcon />
        </div>
        <h3 className={t.successTitle}>You&rsquo;re on the list.</h3>
        <p className={t.successBody}>
          Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We&rsquo;ll reach out to{" "}
          <span className="text-accent">{email}</span> shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="ea-name" className="sr-only">
          Your name
        </label>
        <input
          id="ea-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={t.input}
        />
      </div>
      <div>
        <label htmlFor="ea-email" className="sr-only">
          Your email
        </label>
        <input
          id="ea-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className={t.input}
        />
      </div>
      <button type="submit" className={t.button}>
        Request early access
      </button>
      <p className={t.note}>No spam. We&rsquo;ll only email about onboarding.</p>
    </form>
  );
}
