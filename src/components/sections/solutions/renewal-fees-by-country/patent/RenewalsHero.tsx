// components/sections/solutions/renewals/RenewalsHero.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Globe } from "lucide-react";
import { Playfair_Display, PT_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#0B1320",
    muted: "#475467",
};

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
            {children}
        </span>
    );
}

export default function RenewalsHero() {
    return (
        <section className="relative overflow-hidden bg-white"
        style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}>
            {/* --- decorative grid & auras --- */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.purple}, transparent)` }}
                />
                <div
                    className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.maroon}, transparent)` }}
                />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #0B1320 1px, transparent 1px), linear-gradient(to bottom, #0B1320 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                    }}
                />
            </div>
            {/* Subtle grid background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:28px_28px]"
            />

            <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Left Column */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                            <span className="inline-block h-2 w-2 rounded-full bg-[#7F2B38]" />
                            Patent Renewal Insights
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`${playfair.className} text-4xl font-bold tracking-tight md:text-6xl`}
                        >
                            <span className="bg-gradient-to-r from-[#7F2B38] via-[#581845] to-[#4B2E83] bg-clip-text text-transparent">
                                Patent Renewal Fees by Country
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className={`${ptsans.className} mt-5 max-w-xl text-lg leading-relaxed text-gray-700`}
                        >
                            A practical view of renewal (annuity) costs across major jurisdictions—
                            curated by KA Global IP’s portfolio team. Compare timelines, grace periods,
                            and late fees. For live quotes and consolidated invoicing, talk to us.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 flex flex-wrap items-center gap-3"
                        >
                            <a
                                href="#fees"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#7F2B38] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/50"
                            >
                                <Globe className="h-5 w-5" />
                                View Global Fees
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                            >
                                <PlayCircle className="h-5 w-5" />
                                Speak to an Advisor
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 flex flex-wrap gap-2"
                        >
                            <Pill>Grace Periods</Pill>
                            <Pill>Late Fees</Pill>
                            <Pill>Jurisdiction Insights</Pill>
                            <Pill>Cost Comparison</Pill>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="flex justify-center md:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                        >
                            <Globe className="h-40 w-40 stroke-[1.4] text-[#581845] md:h-48 md:w-48" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
