import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Services } from "@/components/sections/Services";
import { SelectedCampaigns } from "@/components/sections/SelectedCampaigns";
import { IndiaGulf } from "@/components/sections/IndiaGulf";
import { Approach } from "@/components/sections/Approach";
import { Capabilities } from "@/components/sections/Capabilities";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Positioning />
      <Services />
      <SelectedCampaigns />
      <IndiaGulf />
      <Approach />
      <Capabilities />
      <FinalCta />
    </main>
  );
}
