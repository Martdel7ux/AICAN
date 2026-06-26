"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";

const categories = [
  "Technical Support",
  "Billing & Subscription",
  "Security Issue",
  "Partnership Inquiry",
  "General Inquiry",
];

const MAX = 2000;
const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder-faint outline-none transition-colors focus:border-accent";

export function SupportForm() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-paper p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
          <CheckIcon />
        </div>
        <h3 className="font-serif text-2xl font-light text-ink">
          Message received.
        </h3>
        <p className="text-[15px] leading-relaxed text-muted">
          Thanks for reaching out. We&rsquo;ll reply to your email directly,
          typically within 24 to 48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-canvas p-7 md:p-9"
    >
      <h3 className="font-serif text-2xl font-light tracking-tight text-ink">
        Send us a message
      </h3>
      <p className="mt-2 text-[14px] text-muted">
        We&rsquo;ll reply to your email directly.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
            Name *
          </label>
          <input required type="text" className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
            Email *
          </label>
          <input
            required
            type="email"
            className={field}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
            Company (optional)
          </label>
          <input type="text" className={field} placeholder="Company" />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
            Category *
          </label>
          <select required defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>
              Select a topic…
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
          Message *
        </label>
        <textarea
          required
          rows={5}
          maxLength={MAX}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-none`}
          placeholder="How can we help?"
        />
        <p className="mt-1.5 text-right font-mono text-[11px] text-faint">
          {MAX - message.length} chars left
        </p>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full">
        Send message
      </button>
      <p className="mt-3 text-center text-[12px] text-faint">
        By submitting you agree to our{" "}
        <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
