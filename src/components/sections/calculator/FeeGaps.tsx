"use client";

import { Playfair_Display, PT_Sans } from "next/font/google";
import { BadgeDollarSign, Coins, Users } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

type Item = {
    title: string;
    typical: string;
    optimized: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ITEMS: Item[] = [
    {
        title: "Service fees",
        typical:
            "In a typical setup, firms outsource renewals to large providers—adding extra layers and hidden mark-ups across categories. A low headline fee often masks higher totals elsewhere.",
        optimized:
            "With KA Global IP, renewals are handled directly with transparent, itemized pricing—no middlemen and no surprises.",
        Icon: BadgeDollarSign,
    },
    {
        title: "Currency markups",
        typical:
            "Traditional providers add transaction buffers and opaque FX spreads. Instead of reflecting real rates, fees are padded to cover risk and margin.",
        optimized:
            "KA Global IP uses verified FX sources and shows the exact exchange rate on your estimate and invoice—so you know precisely what you’re paying.",
        Icon: Coins,
    },
    {
        title: "Local agent fees",
        typical:
            "Many workflows rely on local agents even where not legally required, adding time and avoidable cost. Where required, selection is rarely optimized for value.",
        optimized:
            "We use local agents only when mandated, and we benchmark them for efficiency and quality to keep your total renewal cost fair.",
        Icon: Users,
    },
];

export default function FeeGaps() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <h2 className={`${playfair.className} text-4xl leading-tight text-[#0B1320] md:text-5xl`}>
                Where IP renewal fee gaps appear
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {ITEMS.map(({ title, typical, optimized, Icon }) => (
                    <article
                        key={title}
                        className="relative rounded-[28px] bg-gradient-to-b from-[#FBE8EF] to-white p-6 pt-8 shadow-[inset_0_1px_0_0_#ffffff] ring-1 ring-[#E9E8ED]"
                    >
                        <h3 className={`${playfair.className} text-3xl text-[#0B1320]`}>{title}</h3>

                        <p className={`${ptsans.className} mt-4 text-[16px] leading-7 text-[#344054]`}>
                            <span className="font-semibold text-[#0B1320]">In a typical setup,</span> {typical}
                        </p>

                        {/* Optimized callout */}
                        <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#ECECF1]">
                            <div className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#900C3F] to-[#0B1320]">
                                    <Icon className="h-5 w-5 text-white" />
                                </span>
                                <p className={`${ptsans.className} text-[15px] leading-6 text-[#344054]`}>
                                    <span className="font-semibold text-[#0B1320]">In an optimized setup,</span> {optimized}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
