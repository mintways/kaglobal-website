"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { Compass } from "lucide-react"; // header icon (pick any Lucide)

const fadeUp2 = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function IconTitle2({
    title,
    subtitle,
    Icon,
}: {
    title: string;
    subtitle?: string;
    Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#efeafd] ring-1 ring-[#7b61c3]/20">
                    {Icon ? <Icon className="h-5 w-5 text-[#4B2E83]" strokeWidth={1.75} /> : null}
                </span>
                <h2 className="font-playfair text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h2>
            </div>
            {subtitle ? (
                <p className="font-ptsans max-w-3xl text-base text-gray-700 md:text-lg">{subtitle}</p>
            ) : null}
        </div>
    );
}

export default function ApproachSection() {
    const steps = [
        { k: "01 · Diagnose", t: "Landscape & Objectives", d: "We meticulously map your product suite, existing claims, target markets, competitive landscape, and industry standards to precisely identify current gaps and potential upside opportunities." },
        { k: "02 · Design", t: "Strategy & Sequencing", d: "We engineer an optimal sequence of filings, establish priority dates, and define critical territories, aligning these precisely with your launch timelines and budgetary gates." },
        { k: "03 · Defend & Optimize", t: "Risk Mitigation & Value Fortification", d: "We implement robust design-around strategies and valuation models to systematically fortify your intellectual property portfolio and maximize ROI." },
    ];

    return (
        <section id="approach" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
                <IconTitle2
                    title="Our Approach"
                    subtitle="A streamlined, repeatable methodology ensuring legal strategy remains in lock-step with core business execution."
                    Icon={Compass} // <-- now it shows
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((x, i) => (
                        <motion.div
                            key={x.k}
                            variants={fadeUp2}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ delay: i * 0.05 }}
                            className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
                        >
                            <div className="text-sm font-semibold text-[#6E44AB]">{x.k}</div>
                            <h3 className="font-playfair mt-1 text-xl font-semibold">{x.t}</h3>
                            <p className="font-ptsans mt-2 text-gray-700">{x.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
