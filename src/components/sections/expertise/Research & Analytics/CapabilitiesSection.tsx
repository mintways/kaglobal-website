"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Telescope, Layers, Gauge } from "lucide-react";
import IconTitle from "@/components/ui/IconTitle";

function FeatureCard({
    Icon,
    title,
    desc,
    i = 0,
}: {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
    i?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7EEF0] ring-1 ring-[#9a4b58]/20">
                <Icon className="h-5 w-5 text-[#7F2B38]" strokeWidth={1.75} />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-900">{title}</h3>
            <p className="font-ptsans mt-2 leading-relaxed text-gray-700">{desc}</p>
        </motion.div>
    );
}

export default function CapabilitiesSection() {
    return (
        <section id="capabilities" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Capabilities"
                    Icon={Search}
                    subtitle="Actionable research built for critical strategic decision-making and comprehensive innovation management."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <FeatureCard
                        Icon={Layers}
                        title="Patentability & Prior Art Searches"
                        desc="Comprehensive novelty and non-obviousness examinations conducted across global patent databases and non-patent literature to rigorously validate filing positions."
                    />
                    <FeatureCard
                        Icon={ShieldCheck}
                        title="Freedom-to-Operate (FTO) Analysis"
                        desc="Detailed, jurisdiction-specific infringement risk reviews of active patents, accompanied by tactical guidance for navigating or designing around existing intellectual property rights."
                        i={1}
                    />
                    <FeatureCard
                        Icon={Telescope}
                        title="Competitive Intelligence & Landscape"
                        desc="Continuous tracking of competitor filings, R&D vectors, standards activity, and white-space analysis to inform future roadmaps and refine market positioning."
                        i={2}
                    />
                    <FeatureCard
                        Icon={Gauge}
                        title="State of the Art & Invalidity"
                        desc="Deep-dive prior-art investigations specifically designed to support invalidity challenges, formal oppositions, or robust defensive patenting strategies."
                        i={3}
                    />
                </div>
            </div>
        </section>
    );
}
