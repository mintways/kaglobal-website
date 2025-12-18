"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Briefcase, Files, Layers3, Wallet, Gauge, BarChart3 } from "lucide-react";

function Card({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
    return (
        <div className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7EEF0] ring-1 ring-[#9a4b58]/20">
                <Icon className="h-5 w-5 stroke-[1.75] text-[#7F2B38]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{desc}</p>
        </div>
    );
}

export default function ServicesSection() {
    const items = [
        { Icon: Files, title: "Portfolio Audit & Optimization", desc: "Comprehensive evaluation of asset strength, validity, and market relevance; identification of underperforming assets; and recommendations for refocusing and consolidation to maximize ROI." },
        { Icon: Layers3, title: "Strategic Prosecution Management", desc: "Coordinated global prosecution ensuring consistent claim scope, harmonized timelines, and seamless multi-country handling" },
        { Icon: Wallet, title: "IP Budgeting & Cost Optimization", desc: "Transparent annuities and renewals management, value-based prioritization, and streamlined administration to strategically reduce overheads and risk." },
        { Icon: Gauge, title: "Competitive Positioning & Gap Analysis", desc: "Identification of market white spaces, continuous monitoring of competitors and threats, and guided expansion of coverage based on actionable market signals" },
        { Icon: BarChart3, title: "Data Analytics & Reporting", desc: "Technology-driven dashboards and benchmarks to track performance, exposure, and impact—with tailored reports developed specifically for both leadership and R&D teams." },
    ];

    return (
        <section id="services" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="Our Portfolio Management Services" Icon={Briefcase} subtitle="Holistic oversight designed to optimize intellectual property strength, coverage, and financial spend." />
                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((x) => (
                        <Card key={x.title} {...x} />
                    ))}
                </div>
            </div>
        </section>
    );
}