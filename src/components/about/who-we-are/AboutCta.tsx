"use client";

import React from "react";

const AboutCta = () => {
    return (
        <section className="relative overflow-hidden bg-white font-ptsans">
            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
                {/* Glass CTA card */}
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
                    {/* gradient edge + glow */}
                    <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-80 [background:linear-gradient(180deg,rgba(127,43,56,0.08),rgba(77,20,117,0.08))]" />
                    <span className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/60 blur-2xl" />

                    <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                        {/* Left copy */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm font-ptsans">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                                LET’S TALK
                            </div>

                            <h3 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                                <span className="font-playfair bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                                    Let’s engineer your defensible competitive advantage.
                                </span>
                            </h3>

                            <p className="mt-3 max-w-2xl text-[#1F2A44]/90 font-ptsans">
                                Speak to Our Team today about a tailored strategy meticulously designed
                                for your specific portfolio, target markets, and commercial timelines.
                            </p>

                            {/* quick trust line */}
                            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-600 font-ptsans">
                                <span className="h-3 w-px bg-gray-300/70" />
                                <span>Global coordination in 90+ jurisdictions</span>
                            </div>
                        </div>

                        {/* Right actions */}
                        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row md:justify-end">
                            <a
                                href="/contact"
                                className="group relative inline-flex items-center justify-center rounded-2xl bg-[#4D1475] px-5 py-3 text-white shadow-sm transition-transform hover:-translate-y-0.5 font-ptsans"
                            >
                                <span className="relative z-10">Contact us</span>
                                <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-15"
                                    style={{
                                        background:
                                            "radial-gradient(140px 140px at 50% 50%, white, transparent 60%)",
                                    }}
                                />
                            </a>
                        </div>
                    </div>

                    {/* bottom ribbon */}
                    <div className="relative z-10 mt-8 h-1.5 w-32 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
                </div>
            </div>

            {/* motion-safe hover fallback */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
        }
      `}</style>
        </section>
    );
};

export default AboutCta;
