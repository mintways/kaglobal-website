import { PatentHero, PatentOverview } from "@/components/sections/services/patent";
import Highlights from "@/components/sections/services/patent/highlights";
import TrustSection from "@/components/sections/services/patent/trust";
import IndustriesSection from "@/components/sections/services/patent/industries";
import CTASection from "@/components/sections/services/patent/cta";

export default function PatentPage() {
  return (
    <>
      <PatentHero />
      <PatentOverview />
      <Highlights />
      <TrustSection />
      <IndustriesSection />
      <CTASection />
      {/* Next sections... */}
    </>
  );
}
