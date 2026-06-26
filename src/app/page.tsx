import { Hero } from "@/components/sections/hero";
import { Offerings } from "@/components/sections/offerings";
import { Challenge } from "@/components/sections/challenge";
import { Architecture } from "@/components/sections/architecture";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { UseCases } from "@/components/sections/use-cases";
import { Showcase } from "@/components/sections/showcase";
import { Comparison } from "@/components/sections/comparison";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <Challenge />
      <Architecture />
      <Capabilities />
      <Process />
      <UseCases />
      <Showcase />
      <Comparison />
      <CTA />
    </>
  );
}
