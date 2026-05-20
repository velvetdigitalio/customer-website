import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Portfolio } from "@/components/home/Portfolio";
import { Results } from "@/components/home/Results";
import { AISection } from "@/components/home/AISection";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <Portfolio />
      <Results />
      <AISection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
