"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Target, ShieldCheck, Wallet, Globe2, LineChart } from "lucide-react";

export default function WhyItMattersSection() {
    const brandPrimary = "#7F2B38";
    const items = [
        { Icon: ShieldCheck, text: " Achieve robust coverage through a coherent claim strategy and systematic portfolio depth." },
        { Icon: Wallet, text: "Implement rigorous financial control through data-driven prioritization, strategic pruning, and optimized renewals management." },
        { Icon: Globe2, text: "Ensure consistent and aligned protection across all relevant jurisdictions and diverse product lines." },
    ];

    return (
        <section id="why" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="Why Portfolio Management Matters" Icon={Target} subtitle="Beyond mere record-keeping—strategic portfolio management ensures your intellectual property actively protects innovation, fortifies market position, and compounds long-term value." />
                <ul className="grid gap-4 md:grid-cols-2 text-gray-800">
                    {items.map(({ Icon, text }, i) => (
                        <li key={i} className="flex gap-3">
                            <Icon className="h-6 w-6" style={{ color: brandPrimary }} />
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}