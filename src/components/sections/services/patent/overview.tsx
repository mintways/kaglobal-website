// components/sections/Overview.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

type Item = { title: string; text: string };

type Props = {
    heading?: string;
    intro?: string;
    items?: Item[];
};

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 220, damping: 26 } as Transition,
    },
};

const card: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 240, damping: 26 } as Transition,
    },
};

export default function Overview({
    heading = "Full Spectrum Patent Services",
    intro = "We manage the entire patent lifecycle, from initial invention capture to global filing and ongoing maintenance, executing each phase with expert precision and timeliness.",
    items = [
        { title: "Patentability & Prior Art Analysis", text: "Conducting comprehensive novelty and non-obviousness searches across global patent databases and non-patent literature (NPL) to determine eligibility." },
        { title: "Drafting & Filing", text: "Developing high-quality specifications and strategically robust claim sets for both PCT and direct national filings." },
        { title: "Prosecution Strategy", text: "Implementing effective Office Action strategies, facilitating examiner interviews, drafting crucial amendments, and managing accelerated examination programs." },
        { title: "Portfolio Management & Analytics", text: "Providing transparent dashboards, critical deadline management, and data-driven analytics to support informed intellectual property decisions." },
        { title: "Renewals & Recordals", text: "Ensuring seamless global compliance through automated reminders, clear transparent pricing structures, and meticulous recordals across all jurisdictions." },
    ],
}: Props) {
    const [first, ...rest] = heading.split(" ");
    const tail = rest.join(" ");

    return (
        <section className="relative w-full overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl px-4 py-14 xs:px-5 sm:px-6 md:px-8 md:py-20">
                {/* Heading + intro */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="max-w-3xl"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-euclid text-[clamp(1.6rem,4.8vw,2.8rem)] leading-tight text-ka-ink"
                    >
                        <span className="bg-gradient-to-r from-ka-maroon to-ka-purple bg-clip-text text-transparent">
                            {first}
                        </span>{" "}
                        {tail}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-4 text-[15.5px] md:text-[16.5px] leading-7 text-[#475467] font-ptsans"
                    >
                        {intro}
                    </motion.p>
                </motion.div>

                {/* Cards: numbered, with soft gradient ring wrapper */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    {items.map((it, idx) => (
                        <motion.div key={it.title} variants={card}>
                            {/* 1px gradient border wrapper */}
                            <div
                                className="rounded-2xl p-[1px] h-full"
                                style={{
                                    background:
                                        "linear-gradient(135deg, color-mix(in oklab, var(--color-ka-maroon) 20%, transparent), color-mix(in oklab, var(--color-ka-purple) 20%, transparent))",
                                }}
                            >
                                <article className="group relative h-full rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(11,19,32,0.05)] ring-1 ring-[#E7E7EA] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,19,32,0.10)] flex flex-col">
                                    <div className="flex items-start gap-4">
                                        {/* Number chip */}
                                        <div className="shrink-0">
                                            <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ka-ink ring-1 ring-black/5">
                                                <span className="text-sm font-euclid font-semibold bg-gradient-to-r from-ka-maroon to-ka-purple bg-clip-text text-transparent">
                                                    {(idx + 1).toString().padStart(2, "0")}
                                                </span>
                                                <span
                                                    aria-hidden
                                                    className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, color-mix(in oklab, var(--color-ka-maroon) 20%, transparent), color-mix(in oklab, var(--color-ka-purple) 20%, transparent))",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-euclid text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px] leading-tight text-ka-ink">
                                                {it.title}
                                            </h3>
                                            <p className="mt-2 text-[14.5px] sm:text-[15px] leading-6 text-[#475467] font-ptsans">
                                                {it.text}
                                            </p>

                                            {/* Underline accent */}
                                            <span
                                                aria-hidden
                                                className="mt-4 block h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-24 bg-gradient-to-r from-ka-maroon to-ka-purple"
                                            />
                                        </div>
                                    </div>

                                    {/* Equal-height helper */}
                                    <div className="flex-1" />
                                </article>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover { transform: none !important; }
        }
      `}</style>
        </section>
    );
}
