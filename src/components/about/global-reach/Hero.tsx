"use client";

import Section from "@/components/ui/Section";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

export default function Hero() {
    return (
        <Section className="relative overflow-hidden bg-white text-[#2D2F33] font-ptsans"
        style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}>
            {/* --- decorative grid & auras --- */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.purple}, transparent)` }}
                />
                <div
                    className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.maroon}, transparent)` }}
                />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #0B1320 1px, transparent 1px), linear-gradient(to bottom, #0B1320 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                    }}
                />
            </div>
            {/* Subtle grid background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:28px_28px]"
            />

            <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-10 md:py-12">
                {/* badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gray-700 backdrop-blur-sm font-euclid">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                    About Us • Global Reach
                </div>

                {/* headline */}
                <h1 className="mt-2 font-euclid text-2xl leading-tight text-[#1F1F22] sm:text-3xl md:text-4xl">
                    <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                        Global Reach, Local Expertise
                    </span>
                </h1>

                {/* description */}
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
                    At <strong>KA Global IP</strong>, we partner with innovators and enterprises to protect, scale, 
                    and monetize intellectual property across more than <strong>100+ countries</strong>. With 
                    strategic hubs in India and the United States, complemented by a trusted worldwide network, 
                    we seamlessly merge local insight with international best practices to deliver truly borderless IP solutions.
                </p>

                {/* call to actions */}
                <div className="mt-5 flex flex-wrap gap-3">
                    <a
                        href="/contact"
                        className="rounded-2xl bg-[#7F2B38] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7F2B38]/90"
                    >
                        Connect with us
                    </a>
                    <a
                        href="/about/global"
                        className="rounded-2xl border border-[#4D1475] px-5 py-2 text-sm font-semibold text-[#4D1475] transition hover:-translate-y-0.5 hover:bg-[#4D1475] hover:text-white"
                    >
                        Explore global reach
                    </a>
                </div>
            </div>

            {/* reduced-motion safety */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
        }
      `}</style>
        </Section>
    );
}
