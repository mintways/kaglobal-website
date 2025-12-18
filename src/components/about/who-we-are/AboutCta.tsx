"use client";

import React from "react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

const AboutCta = () => {
    return (
        <section className="relative overflow-hidden bg-white font-ptsans">
            {/* soft brand accents */}
            {/* <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#7F2B38]/12 blur-3xl" /> */}
            {/* <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4D1475]/12 blur-3xl" /> */}

            {/* micro grid texture */}
            {/* <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:linear-gradient(to_bottom,transparent_95%,rgba(0,0,0,0.5)_96%,transparent_97%),linear-gradient(to_right,transparent_95%,rgba(0,0,0,0.5)_96%,transparent_97%)] [background-size:28px_28px]" /> */}

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
                {/* Glass CTA card */}
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
                    {/* gradient edge + glow */}
                    <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-80 [background:linear-gradient(180deg,rgba(127,43,56,0.08),rgba(77,20,117,0.08))]" />
                    <span className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/60 blur-2xl" />

                    <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                        {/* Left copy */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm font-euclid">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                                LET’S TALK
                            </div>

                            <h3 className="mt-3 text-3xl font-euclid font-semibold leading-tight md:text-4xl">
                                <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                                    Let’s engineer your defensible competitive advantage.
                                </span>
                            </h3>

                            <p className="mt-3 max-w-2xl text-[#1F2A44]/90 font-ptsans">
                                Speak to Our Team today about a tailored strategy meticulously designed for your specific portfolio, target markets, and commercial timelines.
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
                                className="group relative inline-flex items-center justify-center rounded-2xl bg-[#4D1475] px-5 py-3 text-white shadow-sm transition-transform hover:-translate-y-0.5"
                            >
                                <span className="relative z-10">Contact us</span>
                                <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-15"
                                    style={{ background: "radial-gradient(140px 140px at 50% 50%, white, transparent 60%)" }}
                                />
                            </a>

                            <a
                                href="/insights"
                                className="inline-flex items-center justify-center rounded-2xl border border-[#7F2B38] px-5 py-3 text-[#7F2B38] transition hover:-translate-y-0.5 hover:bg-[#7F2B38] hover:text-white"
                            >
                                Read insights
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
          .hover\\:-translate-y-0\\.5:hover { transform: none !important; }
        }
      `}</style>
        </section>
    );
};

export default AboutCta;
