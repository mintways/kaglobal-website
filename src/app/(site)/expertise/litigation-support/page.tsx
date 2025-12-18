// -----------------------------------------------------------------------------
// app/(site)/services/litigation-enforcement/page.tsx
"use client";
import * as React from "react";
import LitigationHero from "@/components/sections/expertise/Litigation Support/LitigationHero";
import StickySubNav from "@/components/sections/expertise/Litigation Support/StickySubNav";
import ServicesSection from "@/components/sections/expertise/Litigation Support/ServicesSection";
import WhyChooseSection from "@/components/sections/expertise/Litigation Support/WhyChooseSection";
import ProcessSection from "@/components/sections/expertise/Litigation Support/ProcessSection";
import CtaSection from "@/components/sections/expertise/Litigation Support/CtaSection";

export default function LitigationEnforcementPage() {
    return (
        <main className="bg-white text-gray-900">
            <LitigationHero />
            <StickySubNav />
            <ServicesSection />
            <WhyChooseSection />
            <ProcessSection />
            <CtaSection />
        </main>
    );
}