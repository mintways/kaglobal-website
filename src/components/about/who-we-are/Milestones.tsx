"use client";

import React from "react";
import { motion } from "framer-motion";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

const MILESTONES = [
    { y: "2007", e: "Firm established with a focus on IP." },
    { y: "2013", e: "Re-established as KAnalysis with expanded services." },
    { y: "2018", e: "KA Filing LLC set up in the USA." },
    { y: "2024-25", e: "Rebrand to KA Global IP—global platform, data tools, and ISO upgrades." },
];

export default function Milestones() {
    return (
        <section className="relative w-full bg-white font-ptsans">
            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
                {/* header */}
                <div>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                        <span className="font-playfair bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                            Our Journey
                        </span>
                    </h2>
                </div>

                {/* Timeline grid: [card | spine | card] on md+; single column on mobile */}
                <div className="relative mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-[1fr_42px_1fr]">
                    {/* vertical spine */}
                    <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#7F2B38] via-[#B07ACD] to-[#4D1475] md:block" />

                    {MILESTONES.map((m, i) => {
                        const leftSide = i % 2 === 0;

                        const Card = (
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                                className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] font-ptsans"
                            >
                                <div className="font-playfair text-sm font-semibold text-[#7F2B38]">{m.y}</div>
                                <p className="mt-1 text-[#1F2A44]/90 font-ptsans">{m.e}</p>

                                {/* connector dot pinned to spine center (only on md+) */}
                                <span
                                    className="hidden md:block absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#4D1475]"
                                    style={{
                                        [leftSide ? "right" : "left"]: "-21px",
                                    }}
                                />
                            </motion.div>
                        );

                        return (
                            <React.Fragment key={m.y}>
                                {/* LEFT CARD (or spacer) */}
                                <div className={leftSide ? "md:pr-6" : "hidden md:block"}>{leftSide ? Card : null}</div>

                                {/* SPINE COLUMN spacer */}
                                <div className="hidden md:block" />

                                {/* RIGHT CARD (or spacer) */}
                                <div className={!leftSide ? "md:pl-6" : "hidden md:block"}>{!leftSide ? Card : null}</div>

                                {/* Mobile single-column card */}
                                <div className="md:hidden">{Card}</div>
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* foot ribbon */}
                <div className="mt-12 h-1.5 w-40 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
            </div>
        </section>
    );
}
