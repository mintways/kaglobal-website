"use client";


import HeroAbout from "@/components/about/who-we-are/HeroAbout";
import Metrics from "@/components/about/who-we-are/Metrics";
import MissionVision from "@/components/about/who-we-are/MissionVision";
import WhatWeDo from "@/components/about/who-we-are/WhatWeDo";
import Values from "@/components/about/who-we-are/Values";
import GlobalReach from "@/components/about/who-we-are/GlobalReach";
// import Leadership from "@/components/about/who-we-are/Leadership";
import Milestones from "@/components/about/who-we-are/Milestones";
import AboutCta from "@/components/about/who-we-are/AboutCta";


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-[#1A1A1A]">
            <HeroAbout />
            <Metrics />
            <MissionVision />
            <WhatWeDo />
            <Values />
            <GlobalReach />
            {/* <Leadership /> */}
            <Milestones />
            <AboutCta />
        </main>
    );
}