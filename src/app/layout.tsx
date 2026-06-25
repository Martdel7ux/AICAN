import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aican.artemisindustries.tech"),
  title: {
    default: "AICAN · Enterprise Azure Infrastructure for AI Applications",
    template: "%s · AICAN",
  },
  description:
    "Production-ready Terraform infrastructure for deploying secure, enterprise-grade Azure environments optimized for AI-powered applications.",
  openGraph: {
    title: "AICAN · Enterprise Azure Infrastructure for AI",
    description:
      "Deploy secure AI infrastructure on Azure in fractions of the time with proven architectural patterns.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AICAN · Enterprise Azure Infrastructure for AI",
    description:
      "Deploy secure AI infrastructure on Azure in fractions of the time with proven architectural patterns.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
