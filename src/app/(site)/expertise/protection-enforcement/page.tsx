"use client";

import * as React from "react";
import ProtectionHero from "@/components/sections/expertise/Protection & Enforcement/ProtectionHero";
import StickySubNav from "@/components/sections/expertise/Protection & Enforcement/StickySubNav";
import WhyChooseSection from "@/components/sections/expertise/Protection & Enforcement/WhyChooseSection";
import ServicesSection from "@/components/sections/expertise/Protection & Enforcement/ServicesSection";
import DifferentiatorsSection from "@/components/sections/expertise/Protection & Enforcement/DifferentiatorsSection";
import CtaSection from "@/components/sections/expertise/Protection & Enforcement/CtaSection";

export default function ProtectionPage() {
    return (
        <main className="bg-white text-gray-900">
            <ProtectionHero />
            <StickySubNav />
            <WhyChooseSection />
            <ServicesSection />
            <DifferentiatorsSection />
            <CtaSection />
        </main>
    );
}