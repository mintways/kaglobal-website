"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Globe2 } from "lucide-react";

export default function ProcessSection() {
    const steps = [
        {
            k: "01 · Assess",
            t: "Case Theory & Evidence Analysis",
            d: "Meticulous examination of the fact patterns, claim charts, prior art, and venue analyses to robustly inform overall strategy and available remedies.",
        },
        {
            k: "02 · Act",
            t: "File, Defend, or Challenge",
            d: "Pursuit of injunctions/damages, development of tailored defenses, or initiation of oppositions in the most effective jurisdictions.",
        },
        {
            k: "03 · Advance",
            t: "Cross-Border Alignment",
            d: "Harmonization of legal positions, stringent timeline management, and outcome tracking through structured, transparent reporting",
        },
    ];

    return (
        <section id="process" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Coordinated, Outcome-Focused Process"
                    Icon={Globe2}
                    subtitle="A clear path from initial assessment to final enforcement, synchronized seamlessly across international borders."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((x) => (
                        <div
                            key={x.k}
                            className="rounded-2xl border border-gray-200 p-6"
                        >
                            <div className="font-ptsans text-sm font-semibold text-[#581845]">
                                {x.k}
                            </div>

                            <h3 className="font-playfair mt-1 text-xl font-semibold text-ka-ink">
                                {x.t}
                            </h3>

                            <p className="font-ptsans mt-2 text-[15px] leading-7 text-[#475467]">
                                {x.d}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
