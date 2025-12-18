"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import {
    Handshake,
    FileSignature,
    Banknote,
    BarChart3,
    ShieldCheck,
    Database,
    Layers,
    Globe2,
} from "lucide-react";

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

export default function MonetisationService() {
    const items = [
        {
            Icon: Handshake,
            title: "Licensing Strategy & Deal Structuring",
            desc: "Design revenue models (exclusive, non-exclusive, field-of-use) and negotiate terms to maximise lifetime value.",
        },
        {
            Icon: FileSignature,
            title: "Contracting & Compliance",
            desc: "Draft/verify licence, sublicense, OEM, and white-label agreements aligned with competition and tax rules.",
        },
        {
            Icon: Banknote,
            title: "Royalty & Revenue Management",
            desc: "Implement clear royalty schemes, audits, and payment rails with dispute-ready documentation.",
        },
        {
            Icon: BarChart3,
            title: "Valuation & Commercial Analytics",
            desc: "Model price tiers, territory splits, and forecast scenarios to guide data-driven decision making.",
        },
        {
            Icon: Database,
            title: "Data/API Monetisation",
            desc: "Package datasets and APIs with usage tiers, SLAs, and metering for subscription or usage-based billing.",
        },
        {
            Icon: Layers,
            title: "White-Label & Franchise Programs",
            desc: "Launch partner-branded offerings with QA, brand controls, and performance obligations baked in.",
        },
        {
            Icon: ShieldCheck,
            title: "Risk, Tax & IP Hygiene",
            desc: "Freedom-to-operate checks, export controls, withholding/VAT planning, and portfolio clean-ups.",
        },
        {
            Icon: Globe2,
            title: "Cross-Border Enablement",
            desc: "Coordinate filings, translations, and compliance across 90+ jurisdictions with local counsel networks.",
        },
    ];

    return (
        <section id="monetisation-services" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Monetisation & Licensing Services"
                    Icon={Handshake}
                    subtitle="From strategy to signed deals—build, price, contract, and scale your IP and data revenues."
                />
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {items.map((x) => (
                        <Card key={x.title} {...x} />
                    ))}
                </div>
            </div>
        </section>
    );
}
