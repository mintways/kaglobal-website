"use client";
import * as React from "react";
import { motion } from "framer-motion";
import IconTitle from "@/components/ui/IconTitle";
import { FileText } from "lucide-react";

export default function DeliverablesSection() {
    const items = [
        { t: "Decision Brief", d: "An executive summary providing concise risk ratings, identification of key prior art, and clearly articulated recommended actions." },
        { t: "Evidence Dossier", d: "A meticulously annotated prior-art set complete with detailed claim charts, relevance notes, and comprehensive bibliographic data." },
        { t: "Claim-Level Maps", d: "Detailed feature matrices that precisely map product or specification elements against cited prior art for enhanced clarity and alignment." },
        { t: "Jurisdictional View", d: "A strategic overview of active patent statuses, expiry windows, and territorial exposure to inform robust Freedom-to-Operate (FTO) planning." },
    ];

    return (
        <section id="deliverables" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Deliverables"
                    Icon={FileText}
                    subtitle="Clear, decision-usable outputs meticulously tailored to key stakeholders."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((x, i) => (
                        <motion.div
                            key={x.t}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm"
                        >
                            <h3 className="font-playfair text-lg font-semibold text-gray-900">{x.t}</h3>
                            <p className="font-ptsans mt-2 text-gray-700">{x.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
