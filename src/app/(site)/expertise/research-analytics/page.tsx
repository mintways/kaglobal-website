"use client";
import * as React from "react";
import ResearchHero from "@/components/sections/expertise/Research & Analytics/ResearchHero";
import StickySubNav from "@/components/sections/expertise/Research & Analytics/StickySubNav";
import CapabilitiesSection from "@/components/sections/expertise/Research & Analytics/CapabilitiesSection";
import ApproachSection from "@/components/sections/expertise/Research & Analytics/ApproachSection";
import DeliverablesSection from "@/components/sections/expertise/Research & Analytics/DeliverablesSection";
import ImpactSection from "@/components/sections/expertise/Research & Analytics/ImpactSection";
import FaqSection from "@/components/sections/expertise/Research & Analytics/FaqSection";

export default function ResearchPage() {
    return (
        <main className="bg-white text-gray-900">
            <ResearchHero />
            <StickySubNav />
            <CapabilitiesSection />
            <ApproachSection />
            <DeliverablesSection />
            <ImpactSection />
            <FaqSection />
        </main>
    );
}
