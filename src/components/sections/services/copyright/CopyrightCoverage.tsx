"use client";

import { Zap, Globe2, Asterisk } from "lucide-react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

const items = [
    { icon: Zap, title: "Art and Visual Works", desc: "Robust protection for fine art, photography, and digital media." },
    { icon: Globe2, title: "Literary and Digital Content", desc: "Strategic registration and defense for written content, software, and digital platforms." },
    { icon: Asterisk, title: "Multimedia and Performance Works", desc: "Comprehensive copyright coverage for music, film, and live performances." },
    { icon: Zap, title: "Extensive Geographic Coverage", desc: "Safeguarding your creative assets in over 90 countries." },
    { icon: Globe2, title: "Market-Specific Expertise", desc: "Tailored solutions for diverse regional IP frameworks." },
    { icon: Asterisk, title: "Future Focus", desc: "Anticipating and securing your position in emerging markets." },
];

export default function CopyrightCoverage() {
    const title = "Register Your Works — Protect Them Globally";
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section className="relative w-full bg-white">
            {/* subtle brand auras */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle at center, ${KA.purple}33, transparent 70%)` }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle at center, ${KA.maroon}33, transparent 70%)` }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
                {/* Eyebrow + Heading + Subtitle */}
                <div className="text-center">
                    <span className="font-ptsans inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        GLOBAL FOOTPRINT
                    </span>

                    <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-tight text-ka-ink">
                        <span
                            className="font-playfair bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h2>

                    <p className="font-ptsans mx-auto mt-4 max-w-3xl text-[15.5px] sm:text-[16px] leading-relaxed text-[#2B3852]/90">
                        Comprehensive copyright protection across industries, mediums, and markets — driven by globally consistent strategy.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-7">
                    {items.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="rounded-2xl bg-gradient-to-tr from-[#7F2B38]/35 via-transparent to-[#4D1475]/35 p-[1px] transition-colors hover:from-[#7F2B38]/55 hover:to-[#4D1475]/55"
                        >
                            <div className="h-full rounded-2xl bg-white p-6 text-center md:p-7">
                                {/* Icon ring */}
                                <span className="inline-block rounded-full bg-gradient-to-br from-[#7F2B38] to-[#4D1475] p-[1px]">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                        <Icon className="h-6 w-6 text-[#4D1475]" strokeWidth={2} aria-hidden />
                                    </span>
                                </span>

                                <h3 className="font-playfair mt-4 text-lg font-semibold leading-snug text-ka-ink">
                                    {title}
                                </h3>
                                <p className="font-ptsans mt-2 text-[14.5px] leading-relaxed text-[#2B3852]/85">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
