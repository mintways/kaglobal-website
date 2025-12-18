"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Globe2, FileCheck, Stamp, ShieldCheck } from "lucide-react";

export default function WhyChooseSection() {
    const brandPrimary = "#7F2B38";
    const items = [
        { Icon: Globe2, text: <><strong>One-Window Access</strong> Streamlined access to protection spanning over 90 countries globally.</> },
        { Icon: FileCheck, text: <><strong>Strategic Coverage:</strong> Bespoke, tailored solutions for patents, trademarks, designs, and copyrights.</> },
        { Icon: Stamp, text: <><strong>Compliance-First Approach:</strong> Adherence to rigorous international standards and jurisdiction-specific regulatory frameworks</> },
        { Icon: ShieldCheck, text: <><strong>End-to-End Lifecycle Management:</strong> Comprehensive support extending from initial safeguarding to proactive enforcement and timely renewals.</> },
    ];

    return (
        <section id="why" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="Why Choose KA Global IP" Icon={ShieldCheck} subtitle="Global reach, a compliance-first ethos, and comprehensive lifecycle protection meticulously designed to support your growth trajectory." />
                <ul className="grid gap-4 md:grid-cols-2">
                    {items.map(({ Icon, text }, i) => (
                        <li key={i} className="flex gap-3 text-gray-800">
                            <Icon className="h-6 w-6" style={{ color: brandPrimary }} />
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}