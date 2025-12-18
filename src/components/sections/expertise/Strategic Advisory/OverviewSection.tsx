"use client";

import { Compass, CheckCircle2, Scale } from "lucide-react";
import { motion } from "framer-motion";
import Stat from "@/components/ui/Stat";
import IconTitle from "@/components/ui/IconTitle";

export default function OverviewSection() {
    const points = [
        ["IP Strategy Development", "Meticulous alignment of patent filings and claim scope with key commercialization milestones."],
        ["International Expansion Planning", "Strategic orchestration of PCT, Madrid Protocol, and design filings to optimize budget utilization and accelerate market launch."],
        ["Risk Assessment & Mitigation", "Comprehensive Freedom-to-Operate (FTO) clearances and strategic licensing alternatives designed to pre-empt enforcement disruptions."],
        ["Due Diligence & Valuation", "Rigorous validation of IP assets—assessing strength, enforceability, and fair market worth—to support M&A activities."],
    ];

    return (
        <section id="overview" className="py-20 bg-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
                {/* LEFT: overview + bullets */}
                <div className="md:col-span-2">
                    {/* IconTitle already renders the title—ensure that component uses font-playfair for its heading */}
                    <IconTitle
                        title="Overview"
                        Icon={Compass}
                        subtitle="Our expert strategists collaborate to engineer bespoke IP roadmaps designed to fortify market positions, maximize intrinsic value, and mitigate risk for scaling enterprises."
                    />

                    <ul className="space-y-3 text-[#2B3852]/90 font-ptsans">
                        {points.map(([t, d]) => (
                            <motion.li
                                key={t}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex gap-2"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#4B2E83]" aria-hidden />
                                <span>
                                    <strong className="font-semibold font-playfair text-ka-ink">{t}:</strong>{" "}
                                    <span className="font-ptsans">{d}</span>
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT: metrics card */}
                <aside className="md:col-span-1">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center gap-2">
                            <Scale className="h-5 w-5 text-[#6E44AB]" aria-hidden />
                            <h3 className="font-playfair text-lg font-semibold text-ka-ink">Key Metrics</h3>
                        </div>

                        <div className="grid gap-4 font-ptsans">
                            <Stat value="30,000+" label="Patents Managed" />
                            <Stat value="20,000+" label="Trademarks Managed" />
                            <Stat value="100+ Countries" label="Cross-Border Experience" />
                            {/* <Stat value="ISO 9001 · 27001" label="Quality & InfoSec" /> */}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
