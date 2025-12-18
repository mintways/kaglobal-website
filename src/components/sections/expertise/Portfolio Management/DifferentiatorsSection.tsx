"use client";

import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { ChevronRight } from "lucide-react";

export default function DifferentiatorsSection() {
    const bullets = [
        "Comprehensive management across more than 90 jurisdictions worldwide",
        "Utilization of sophisticated dashboards and Key Performance Indicators (KPIs) for data-informed decision-making",
        "Strategic optimization and streamlining of portfolios to enhance efficiency and manage expenditure effectively.",
        "Meticulous alignment of all IP activities with overarching business and market goals.",
    ];

    return (
        <section id="differentiators" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="What Sets Our Portfolio Management Apart" Icon={ChevronRight} subtitle="Global scale, analytics-driven control, and precise business alignment." />
                <ul className="grid gap-4 md:grid-cols-2 text-gray-800">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
