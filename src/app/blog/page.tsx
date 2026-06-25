import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Azure infrastructure, AI applications, and DevOps best practices.",
};

const posts = [
  {
    slug: "passwordless-by-design",
    tags: ["Azure", "Managed Identity", "RBAC"],
    title: "Passwordless by Design: How AICAN Talks to Azure Without Secrets",
    excerpt:
      "Static credentials are an operational problem that compounds quietly. Here is how AICAN replaced them entirely using Azure Managed Identity, with no secrets stored anywhere in the app.",
    author: "Nauria Gul",
    date: "May 2, 2026",
  },
  {
    slug: "stopped-writing-azure-ai-infra",
    tags: ["Infrastructure", "Terraform", "AI"],
    title: "Why I Stopped Writing Azure AI Infrastructure from Scratch",
    excerpt:
      "Every AI project I’ve worked on hit the same wall. It wasn’t the model or the data, it was the infrastructure. Here’s what changed.",
    author: "Nauria Gul",
    date: "Apr 25, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Knowledge base</span>
          <h1 className="display mt-6 text-[clamp(2.4rem,5vw,3.8rem)]">Blog</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Insights on Azure infrastructure, AI applications, and DevOps best
            practices.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog`}
                className="group block bg-paper p-8 transition-colors duration-300 hover:bg-canvas md:p-12"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-6 max-w-2xl font-serif text-2xl font-light leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-7 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-obsidian font-serif text-sm text-canvas">
                      {post.author.charAt(0)}
                    </span>
                    <div className="text-sm">
                      <p className="text-ink">{post.author}</p>
                      <p className="font-mono text-[11px] text-faint">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-accent">
                    Read
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
