import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyToc } from "@/components/privacy-toc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Artemis Industries collects, processes, protects, and honours your rights in connection with AICAN.",
};

const sections = [
  { id: "who-we-are", n: "01", title: "Who We Are" },
  { id: "scope", n: "02", title: "Scope & Applicability" },
  { id: "our-role", n: "03", title: "Our Role: Data Controller" },
  { id: "data-we-collect", n: "04", title: "Data We Collect" },
  { id: "lawful-bases", n: "05", title: "Lawful Bases for Processing" },
  { id: "how-we-use", n: "06", title: "How We Use Your Data" },
  { id: "sovereignty", n: "07", title: "Data Sovereignty & Tenant Architecture" },
  { id: "sub-processors", n: "08", title: "Azure Infrastructure & Sub-Processors" },
  { id: "third-party", n: "09", title: "Third-Party Services" },
  { id: "transfers", n: "10", title: "International Data Transfers" },
  { id: "your-rights", n: "11", title: "Your Rights as a Data Subject" },
  { id: "retention", n: "12", title: "Data Retention & Deletion" },
  { id: "security", n: "13", title: "Security Measures" },
  { id: "breach", n: "14", title: "Data Breach Notification" },
  { id: "cookies", n: "15", title: "Cookies & Tracking" },
  { id: "children", n: "16", title: "Children's Privacy" },
  { id: "changes", n: "17", title: "Changes to This Policy" },
  { id: "contact", n: "18", title: "Contact & Data Protection Lead" },
];

const badges = [
  "GDPR Compliant",
  "Azure Managed Application",
  "Per-Tenant Deployment",
  "ISO 27001 Aligned",
  "Privacy by Design",
  "DPA Available",
];

function H({ id, n, title }: { id: string; n: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-28 pt-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        Section {n}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-5 text-[14px] leading-relaxed text-muted">
      {children}
    </div>
  );
}

const collectRows: [string, string, string][] = [
  ["Identity Data", "Name, email, username, job title", "Contract, Consent"],
  ["Authentication Data", "Entra ID tokens, MFA records, session tokens", "Contract, Legitimate Interest"],
  ["Entra ID Directory Data", "Group memberships, UPNs, tenant ID", "Contract, Legitimate Interest"],
  ["Billing & Subscription", "Subscription ID, invoices, plan history", "Contract, Legal Obligation"],
  ["Azure Resource Metadata", "Managed RG IDs, ARM names, resource tags", "Contract"],
  ["Telemetry & Usage", "Feature logs, API frequency, App Insights traces", "Legitimate Interest, Consent"],
  ["Support Data", "Tickets, chat transcripts, correspondence", "Contract, Legitimate Interest"],
  ["Marketing Data", "Opt-ins, event registrations, preferences", "Consent"],
  ["Technical & Network", "IP address, browser, OS, referrer URLs", "Legitimate Interest"],
];

const retentionRows: [string, string][] = [
  ["Active user account data", "Subscription + 30 days"],
  ["Billing & invoice records", "7 years (tax law)"],
  ["Security & audit logs", "12 months (rolling)"],
  ["Telemetry & usage analytics", "13 months, then anonymised"],
  ["Support ticket data", "3 years from closure"],
  ["Marketing consent records", "Until withdrawn + 3 years"],
  ["Customer content (Artemis systems)", "30 days post-termination"],
  ["Backup snapshots", "90 days (rotation)"],
];

export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="display mt-6 text-[clamp(2.4rem,5vw,3.8rem)]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            This policy explains how Artemis Industries collects, processes,
            protects, and honours your rights in connection with the AICAN Azure
            Managed Application.
          </p>
          <p className="mt-5 font-mono text-[12px] leading-relaxed tracking-wide text-faint">
            Effective 25 March 2026 · Last reviewed 25 March 2026 · Version 1.1 ·
            Governing law: EU GDPR / Republic of Cyprus
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="tag">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Contents
            </p>
            <PrivacyToc sections={sections} />
          </aside>

          {/* Body */}
          <article className="max-w-2xl space-y-14 text-[15px] leading-relaxed text-body">
            <section className="space-y-4">
              <H {...sections[0]} />
              <p>
                M.G. Artemis Industries Ltd (&ldquo;Artemis&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the publisher and data
                controller of AICAN, an AI-agent hosting solution deployed as an
                Azure Managed Application on the Microsoft Azure Marketplace.
                Artemis is incorporated under the laws of the Republic of Cyprus
                (EU Member State).
              </p>
              <Note>
                Artemis Industries Ltd · 62 Perikleous, Strovolos, Nicosia 2021,
                Republic of Cyprus, European Union · privacy@aican.tech
              </Note>
              <p>
                As a Cyprus-incorporated entity, Artemis is directly subject to
                the EU General Data Protection Regulation (GDPR) 2016/679 and
                takes its obligations as a data controller seriously.
              </p>
            </section>

            <section className="space-y-4">
              <H {...sections[1]} />
              <p>
                This policy applies to all personal data processed in connection
                with use of AICAN as an Azure Managed Application, your Azure
                subscription and provisioning lifecycle, account registration and
                onboarding, API integrations, support communications, marketing
                activities, and visits to our website.
              </p>
              <Note>
                <strong className="text-ink">Enterprise customers:</strong> if
                you deploy AICAN on behalf of your organisation, your organisation
                is the Data Controller for all data processed by your users and
                agents within your tenant. Artemis does not process your end-user
                data and is not a processor in that chain.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[2]} />
              <p>
                Under GDPR Article 4, Artemis acts exclusively as a Data
                Controller in all of its own processing activities. Because AICAN
                is provisioned into your Azure subscription and managed resource
                group, your end-user and customer data never enters
                Artemis-controlled infrastructure.
              </p>
              <Note>
                <strong className="text-ink">JIT access model:</strong> Artemis
                may access infrastructure-level resources only through Azure
                Just-in-Time (JIT) access or pre-agreed delegated roles, solely
                for support or maintenance. Every access event is logged in your
                Azure Activity Log and is auditable by you.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[3]} />
              <p>
                We apply the principle of data minimisation (GDPR Art. 5(1)(c)),
                collecting only what is strictly necessary. AI prompt &amp;
                completion data, agent configuration, and secrets are processed
                entirely within your Azure subscription, so Artemis has no access
                to them.
              </p>
              <DataTable
                head={["Category", "Examples", "Lawful basis"]}
                rows={collectRows}
              />
              <Note>
                <strong className="text-ink">No special category data:</strong>{" "}
                AICAN is not designed to process Article 9 data (health,
                biometric, racial). Contact us before deployment if your use case
                requires it.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[4]} />
              <ul className="space-y-3">
                {[
                  ["Contract · Art. 6(1)(b)", "Delivering the service, managing your subscription, authentication, and support."],
                  ["Legitimate Interests · Art. 6(1)(f)", "Security monitoring, fraud prevention, analytics, and product improvement, subject to documented LIAs."],
                  ["Consent · Art. 6(1)(a)", "Marketing, optional analytics, and non-essential cookies. Withdraw at any time."],
                  ["Legal Obligation · Art. 6(1)(c)", "Tax compliance, invoice retention, and regulatory reporting under Cyprus and EU law."],
                ].map(([t, d]) => (
                  <li key={t} className="rounded-xl border border-line bg-paper p-4">
                    <p className="font-medium text-ink">{t}</p>
                    <p className="mt-1 text-[14px] text-muted">{d}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <H {...sections[5]} />
              <p className="text-ink">We use personal data to:</p>
              <BulletList
                items={[
                  "Provision and manage your AICAN Azure Managed Application deployment",
                  "Authenticate users via Microsoft Entra ID (per-tenant SSO)",
                  "Process Azure Marketplace subscriptions, billing, and renewals",
                  "Provide technical support, incident response, and service continuity",
                  "Monitor platform health, performance, and security posture",
                  "Send transactional emails and, with consent, marketing communications",
                  "Comply with legal, regulatory, and contractual obligations",
                ]}
              />
              <Note>
                <strong className="text-ink">What we do not do:</strong> we never
                sell or rent your data, never use customer content for advertising
                or profiling, and never use your data to train AI models without
                explicit written consent. AICAN uses the Microsoft Foundry Service,
                which does not use customer prompt data to train base models.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[6]} />
              <p>
                AICAN is published as an Azure Managed Application. Each customer
                receives an entirely separate deployment within their own Azure
                subscription, providing strong data sovereignty by design:
                customer-hosted storage, subscription-boundary isolation,
                customer-owned RBAC, and JIT-only operator access.
              </p>
              <Note>
                Artemis publishes the application definition, ARM templates, and
                container images. Azure deploys these into your managed resource
                group. Artemis operates the application layer and provides
                updates. It does not host the compute and storage your business
                data resides on.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[7]} />
              <p>
                AICAN relies on Microsoft Azure and a limited set of approved
                sub-processors. We maintain a Sub-Processor Register (GDPR Art.
                28) and provide 30 days&rsquo; notice before adding or replacing
                any sub-processor.
              </p>
              <DataTable
                head={["Sub-processor", "Service", "Location"]}
                rows={[
                  ["Microsoft Azure (Artemis-operated)", "CI/CD, central telemetry, management plane", "EU (West / North Europe)"],
                  ["Microsoft Entra ID", "Identity & access, SSO", "EU / Global (tenant-defined)"],
                  ["Microsoft Foundry Service", "AI model inference", "EU (configurable)"],
                  ["Azure Marketplace Billing", "Subscription billing & invoicing", "US / EU (SCCs)"],
                ]}
              />
            </section>

            <section className="space-y-4">
              <H {...sections[8]} />
              <BulletList
                items={[
                  "Microsoft Azure: the platform our service is built on, governed by the Microsoft Privacy Statement.",
                  "Terraform: infrastructure provisioning that occurs within your environment and under your control.",
                  "Formspree: processes early-adopter form submissions (name and email) to deliver them to us.",
                  "Azure Communication Services (Email): delivers support and contact-form messages to our mailbox.",
                ]}
              />
            </section>

            <section className="space-y-4">
              <H {...sections[9]} />
              <p>
                Where personal data is transferred outside the EU/EEA, we comply
                with GDPR Chapter V via adequacy decisions, the 2021 EU Standard
                Contractual Clauses, and supplementary technical measures
                (encryption, pseudonymisation, minimisation). AICAN stores and
                processes data in EU Azure regions (West / North Europe) by
                default.
              </p>
            </section>

            <section className="space-y-4">
              <H {...sections[10]} />
              <p>
                Under GDPR Articles 15 to 22 you have rights of access,
                rectification, erasure, restriction, portability, objection,
                protection from solely automated decisions, and consent
                withdrawal. We respond to all Data Subject Access Requests within
                30 calendar days at no charge.
              </p>
              <Note>
                Submit a DSAR to{" "}
                <span className="text-accent">privacy@aican.tech</span> with the
                subject &ldquo;Data Subject Request&rdquo;. You may also lodge a
                complaint with the Cyprus Commissioner for Personal Data
                Protection or any EU supervisory authority.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[11]} />
              <p>
                We retain personal data only as long as necessary for the stated
                purpose (storage limitation, GDPR Art. 5(1)(e)).
              </p>
              <DataTable
                head={["Data category", "Retention period"]}
                rows={retentionRows}
              />
            </section>

            <section className="space-y-4">
              <H {...sections[12]} />
              <p>
                We implement comprehensive Technical and Organisational Measures
                (GDPR Art. 32), aligned to the Azure Well-Architected Framework
                and ISO 27001:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Encryption in transit", "TLS 1.2+ enforced"],
                  ["Encryption at rest", "AES-256 via Azure Storage"],
                  ["Key management", "Azure Key Vault, CMK available"],
                  ["Multi-factor auth", "Enforced for all accounts"],
                  ["RBAC", "Least-privilege + JIT via Entra ID"],
                  ["Network segmentation", "Private endpoints, NSGs, Firewall"],
                  ["Penetration testing", "Annual third-party + continuous scans"],
                  ["Threat detection", "Azure Defender / Sentinel SIEM"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-line bg-paper p-4">
                    <p className="font-medium text-ink">{t}</p>
                    <p className="mt-1 text-[13.5px] text-muted">{d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <H {...sections[13]} />
              <p>
                In the event of a personal data breach, we comply with GDPR
                Articles 33 and 34: notification to the Cyprus supervisory
                authority within 72 hours where required, customer notification
                without undue delay for breaches affecting Artemis-operated
                systems, direct communication to affected individuals for
                high-risk breaches, and documented incident records retained for a
                minimum of 5 years.
              </p>
              <Note>
                Report a suspected security incident immediately to{" "}
                <span className="text-accent">security@aican.tech</span>.
              </Note>
            </section>

            <section className="space-y-4">
              <H {...sections[14]} />
              <p>
                This marketing website does not use first-party cookies, analytics
                scripts, advertising pixels, or behavioural tracking of any kind.
                The site loads Google Fonts (Inter and JetBrains Mono), which
                causes your browser to request fonts from Google&rsquo;s servers;
                no cookies are set by that mechanism. Standard server access logs
                (IP, User-Agent, pages requested) are kept for security and uptime
                only.
              </p>
            </section>

            <section className="space-y-4">
              <H {...sections[15]} />
              <p>
                AICAN is an enterprise B2B platform intended exclusively for
                business and professional use. It is not directed at individuals
                under 18, and we do not knowingly collect personal data from
                minors. If you believe we have, contact{" "}
                <span className="text-accent">privacy@aican.tech</span> and we will
                delete it promptly.
              </p>
            </section>

            <section className="space-y-4">
              <H {...sections[16]} />
              <p>
                We may update this policy to reflect changes in practice, law, or
                our services. We will update the &ldquo;Last reviewed&rdquo; date,
                notify active subscribers at least 30 days before material changes
                take effect, and request re-acknowledgement where required. Prior
                versions are archived and available on request.
              </p>
            </section>

            <section className="space-y-4">
              <H {...sections[17]} />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Privacy & Data Protection", "Data Protection Lead, Artemis Industries Ltd", "privacy@aican.tech"],
                  ["Security incidents", "Security Response Team", "security@aican.tech"],
                  ["Supervisory authority", "Cyprus Commissioner for Personal Data Protection", "dataprotection.gov.cy"],
                  ["General enquiries", "Artemis Industries Ltd", "hello@aican.tech"],
                ].map(([t, d, e]) => (
                  <div key={t} className="rounded-xl border border-line bg-paper p-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                      {t}
                    </p>
                    <p className="mt-2 text-[14px] text-ink">{d}</p>
                    <p className="mt-1 font-mono text-[13px] text-accent">{e}</p>
                  </div>
                ))}
              </div>
              <p className="pt-2 text-[13px] text-faint">
                Governing law: Republic of Cyprus &amp; EU GDPR · Jurisdiction:
                Courts of the Republic of Cyprus.
              </p>
            </section>

            <div className="border-t border-line pt-8">
              <Link href="/" className="btn-ghost">
                ← Back to AICAN
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function DataTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-paper">
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-line px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-faint"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`border-b border-line px-4 py-3 ${
                    j === 0 ? "font-medium text-ink" : "text-muted"
                  }`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
          <span className="text-muted">{it}</span>
        </li>
      ))}
    </ul>
  );
}
