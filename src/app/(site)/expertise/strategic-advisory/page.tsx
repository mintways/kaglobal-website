import Hero from "@/components/sections/expertise/Strategic Advisory/Hero";
import StickySubNav from "@/components/sections/expertise/Strategic Advisory/StickySubNav";
import OverviewSection from "@/components/sections/expertise/Strategic Advisory/OverviewSection";
import CapabilitiesSection from "@/components/sections/expertise/Strategic Advisory/CapabilitiesSection";
import ApproachSection from "@/components/sections/expertise/Strategic Advisory/ApproachSection";
import GlobalCoverageSection from "@/components/sections/expertise/Strategic Advisory/GlobalCoverageSection";
import ImpactSection from "@/components/sections/expertise/Strategic Advisory/ImpactSection";
import FaqSection from "@/components/sections/expertise/Strategic Advisory/FaqSection";
import CtaRibbon from "@/components/sections/expertise/Strategic Advisory/CtaRibbon";

export default function StrategicAdvisoryPage() {
    return (
        <main>
            <Hero />
            <StickySubNav />
            <OverviewSection />
            <CapabilitiesSection />
            <ApproachSection />
            <GlobalCoverageSection />
            <ImpactSection />
            <CtaRibbon />
            <FaqSection />
        </main>
    );
}
