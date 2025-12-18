"use client";

import Section from "@/components/ui/Section";
import { Scale, Map, Layers } from "lucide-react";

const bullets = [
    {
        icon: Map,
        title: "Local Compliance",
        text: "Ensures all portfolio actions are meticulously aligned with regional laws, specific timelines, and local practice standards.",
    },
    {
        icon: Layers,
        title: "Global Systems",
        text: "Guarantees seamless execution under the PCT, Madrid Protocol, and Hague System international frameworks.",
    },
    {
        icon: Scale,
        title: "Cost Transparency",
        text: "Delivers predictable budgets, consolidated reporting, and proactive renewals management for financial clarity.",
    },
];

export default function NetworkBand() {
    return (
        <Section className="bg-white font-ptsans">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 md:py-16">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-euclid text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                        A Network That Works for You
                    </h2>
                    <p className="mt-3 text-base text-[#444] md:text-lg">
                        Our strength lies in a carefully curated global partner network—comprising expert IP attorneys, patent agents, 
                        technical specialists, valuers, and strategists—each bringing invaluable local nuance fortified by a worldwide perspective.
                    </p>
                </div>

                {/* Bullets */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {bullets.map(({ icon: Icon, title, text }, i) => (
                        <div
                            key={title}
                            className="group relative overflow-hidden rounded-3xl border border-[#EAEAEA] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            style={{
                                animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
                            }}
                        >
                            {/* Icon */}
                            <div className="flex items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#7F2B38]/10 to-[#4D1475]/10 transition group-hover:from-[#7F2B38]/20 group-hover:to-[#4D1475]/20">
                                    <Icon className="h-6 w-6 text-[#4D1475]" strokeWidth={1.75} />
                                </div>
                                <h3 className="text-lg font-euclid font-semibold text-[#1F1F22]">{title}</h3>
                            </div>
                            <p className="mt-3 text-sm text-[#555]">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animation */}
            <style jsx global>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(15px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @media (prefers-reduced-motion: reduce) {
                  [style*="fadeInUp"] {
                    animation: none !important;
                    opacity: 1 !important;
                    transform: none !important;
                  }
                }
            `}</style>
        </Section>
    );
}
