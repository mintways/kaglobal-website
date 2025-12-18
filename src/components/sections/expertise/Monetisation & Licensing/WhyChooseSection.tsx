"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Handshake, Banknote, FileSignature, BarChart3, ShieldCheck, Globe2 } from "lucide-react";

export default function WhyChooseSection() {
    const brandPrimary = "#7F2B38";
    const items = [
        { Icon: Handshake, text: <><strong>One-Window Deals:</strong> Source, negotiate, and close licensing partnerships end-to-end.</> },
        { Icon: Banknote, text: <><strong>Transparent Royalties:</strong> Clear revenue-share models with audit-ready reporting.</> },
        { Icon: FileSignature, text: <><strong>Contracting & Compliance:</strong> Robust licence, sublicense, OEM & white-label agreements aligned with global rules.</> },
        { Icon: BarChart3, text: <><strong>Valuation & Analytics:</strong> Price tiers, territory splits, and performance dashboards for data-driven growth.</> },
        { Icon: ShieldCheck, text: <><strong>Risk & Tax Hygiene:</strong> FTO checks, export controls, and VAT/withholding planning built in.</> },
        { Icon: Globe2, text: <><strong>Cross-Border Scale:</strong> 90+ jurisdictions via local counsel network and central governance.</> },
    ];

    return (
        <section id="why" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Why Choose KA Global IP for Monetisation & Licensing"
                    Icon={Handshake}
                    subtitle="Turn IP and data into predictable revenue with compliant structures, clear royalties, and global reach."
                />
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
