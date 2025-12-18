"use client";

import * as React from "react";
import PortfolioHero from "@/components/sections/expertise/Portfolio Management/PortfolioHero";
import StickySubNav from "@/components/sections/expertise/Portfolio Management/StickySubNav";
import WhyItMattersSection from "@/components/sections/expertise/Portfolio Management/WhyItMattersSection";
import ServicesSection from "@/components/sections/expertise/Portfolio Management/ServicesSection";
import DifferentiatorsSection from "@/components/sections/expertise/Portfolio Management/DifferentiatorsSection";
import CtaSection from "@/components/sections/expertise/Portfolio Management/CtaSection";

export default function PortfolioManagementPage() {
    return (
        <main className="bg-white text-gray-900">
            <PortfolioHero />
            <StickySubNav />
            <WhyItMattersSection />
            <ServicesSection />
            <DifferentiatorsSection />
            <CtaSection />
        </main>
    );
}
