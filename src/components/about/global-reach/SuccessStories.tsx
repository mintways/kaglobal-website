"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { Building2, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";

const rows = [
    {
        icon: Building2,
        title: "Cross-Border Enforcement Success",
        text:
            "Executed coordinated multi-jurisdictional patent enforcement for a leading automotive OEM across 7 countries, securing critical market position.",
        tag: "Automotive • Litigation",
    },
    {
        icon: FlaskConical,
        title: "Biotech Acceleration",
        text:
            "Provided end-to-end global filing and strategic counsel for an early-stage biotech firm—rigorously securing foundational protection and successfully supporting subsequent fundraising efforts.",
        tag: "Biotech • Early-stage",
    },
    {
        icon: GraduationCap,
        title: "University Commercialisation",
        text:
            "Structured comprehensive IP portfolios and engineered strategic licensing pathways designed to convert high-value academic research into robust industry partnerships and commercial success.",
        tag: "Academia • Licensing",
    },
];

export default function SuccessStories() {
    return (
        <Section className="bg-white font-ptsans">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 md:py-16">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gray-700 font-ptsans">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                        Success Stories
                    </div>

                    <h2 className="mt-3 font-playfair text-2xl sm:text-3xl md:text-4xl">
                        <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                            Driving Innovation Across Borders
                        </span>
                    </h2>

                    <p className="mt-3 text-base text-black/70 md:text-lg font-ptsans">
                        From deep-tech to consumer brands, KA Global IP turns IP challenges into growth opportunities—globally.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {rows.map(({ icon: Icon, title, text, tag }, i) => (
                        <article
                            key={title}
                            className="group relative overflow-hidden rounded-3xl border border-[#EAEAEA] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md font-ptsans"
                            style={{
                                animation: `fadeInUp 0.55s cubic-bezier(.22,.61,.36,1) ${i * 0.1}s both`,
                            }}
                        >
                            {/* hover edge glow */}
                            <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(180deg,rgba(127,43,56,0.10),rgba(77,20,117,0.10))]" />

                            {/* Top row: icon + title */}
                            <div className="relative z-10 flex items-start gap-3">
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#7F2B38]/10 to-[#4D1475]/10 text-[#4D1475]">
                                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-lg font-semibold text-[#1F1F22]">
                                        {title}
                                    </h3>
                                    <div className="mt-1 text-xs font-medium text-black/50 font-ptsans">
                                        {tag}
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <p className="relative z-10 mt-3 text-sm text-[#555] font-ptsans">
                                {text}
                            </p>

                            {/* CTA */}
                            <div className="relative z-10 mt-4 inline-flex items-center text-sm font-medium text-[#4D1475] font-ptsans">
                                Read case
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </div>

                            {/* shimmer sweep */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -top-10 left-1/4 h-24 w-2/3 -translate-x-1/2 rotate-[25deg] rounded-full bg-white/50 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                            />
                        </article>
                    ))}
                </div>
            </div>

            {/* subtle appear animation */}
            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
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
