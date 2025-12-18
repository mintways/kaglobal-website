"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Binary } from "lucide-react";
import IconTitle from "@/components/ui/IconTitle";

export default function ApproachSection() {
    const steps = [
        {
            k: "01 · Scoping",
            t: "Objectives & Coverage",
            d: "We clarify precise objectives, relevant technologies, applicable industry standards, and target jurisdictions, defining the exact criteria for 'decision-ready' insight.",
        },
        {
            k: "02 · Search & Analyze",
            t: "Multi-Source Evidence Gathering",
            d: "We conduct comprehensive searches across global patent and Non-Patent Literature (NPL) sources, cluster results effectively, and rigorously assess legal/technical relevance with claim-level granularity.",
        },
        {
            k: "03 · Advise",
            t: "Strategic Options & Next Steps",
            d: "We translate findings into concrete strategy: recommending whether to file, refine existing claims, design-around competitors, license technology, challenge third-party rights, or defer action—all presented with clear timelines and associated costs.",
        },
    ];

    return (
        <section id="approach" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Our Approach"
                    Icon={Binary}
                    subtitle="A methodology that is repeatable, rigorously defensible, and intrinsically business-aligned."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((x, i) => (
                        <motion.div
                            key={x.k}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="rounded-2xl border border-gray-200 p-6 hover:shadow-md"
                        >
                            <div className="text-sm font-semibold text-[#581845]">{x.k}</div>
                            <h3 className="font-playfair mt-1 text-xl font-semibold">{x.t}</h3>
                            <p className="font-ptsans mt-2 text-gray-700">{x.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
