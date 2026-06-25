# AICAN — Marketing Website

A premium, editorial-minimal marketing site for **AICAN** (a product of Artemis Industries Ltd) —
enterprise Azure infrastructure for AI applications, defined as code.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS 3.4** — custom warm editorial design system
- **Framer Motion** — restrained scroll/entrance motion
- Fonts: **Fraunces** (serif display), **Inter** (body), **JetBrains Mono** (code)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Design system

Defined in `tailwind.config.ts` + `src/app/globals.css`.

- Canvas `#F6F4EF` warm ivory · Ink `#16130F` warm near-black
- Accent `#0E6E63` deep teal (used sparingly)
- Dark "jewel" surfaces (`obsidian`) for terminal/code moments
- Hairline borders, generous whitespace, optical-sized serif headlines

## Structure

```
src/
  app/
    layout.tsx          # fonts, metadata, Nav + Footer
    page.tsx            # homepage (composes sections)
    blog/page.tsx
    support/page.tsx    # contact form + FAQ
    privacy/page.tsx    # full GDPR policy + sticky TOC
  components/
    nav.tsx, footer.tsx, wordmark.tsx, reveal.tsx, icons.tsx
    faq.tsx, support-form.tsx, privacy-toc.tsx
    sections/           # hero, offerings, challenge, capabilities,
                        # process, use-cases, showcase, comparison, cta
```

## Wiring up forms

The early-adopter form (`src/components/sections/cta.tsx`) and the support form
(`src/components/support-form.tsx`) currently capture input client-side and show a
success state. Point their `onSubmit` handlers at your provider (the original site
used **Formspree** for early access and **Azure Communication Services** for support).

