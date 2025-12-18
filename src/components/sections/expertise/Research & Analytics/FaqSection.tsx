"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { ChevronRight } from "lucide-react";

export default function FaqSection() {
    const faqs = [
        {
            q: "Which sources do you search?",
            a: "We search comprehensive global patent databases (including US, EP, CN, JP, and WIPO), alongside relevant non-patent literature (such as technical journals, industry standards, academic theses, and web technical documentation), calibrated precisely to the defined project scope",
        },
        {
            q: "Can you do claim charts for FTO/invalidity?",
            a: "Yes. We rigorously prepare element-by-element claim charts complete with detailed citations and commentary, formatted for seamless review by legal counsel.",
        },
        {
            q: "How do you tailor outputs for different teams?",
            a: "Executive leadership receives concise, one-page decision briefs; R&D and legal teams are provided with detailed dossiers, comprehensive charts, and complete dataset exports.",
        },
        {
            q: "Do you support post-search actions?",
            a: "We provide robust support for subsequent strategic actions, including filing strategy formulation, design-around planning, licensing option analysis, opposition support, and expert referrals when necessary.",
        },
    ];

    return (
        <section className="bg-white py-6">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="FAQs" Icon={ChevronRight} />

                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
                    {faqs.map((f, i) => (
                        <details key={i} className="group px-6 py-4 open:bg-[#fafafe]">
                            <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-gray-900">
                                <span className="font-ptsans font-semibold">{f.q}</span>
                                <ChevronRight
                                    className="ml-4 h-4 w-4 text-gray-500 transition-transform duration-200 group-open:rotate-90"
                                    aria-hidden="true"
                                />
                            </summary>
                            <p className="font-ptsans mt-2 max-w-4xl text-gray-700">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
