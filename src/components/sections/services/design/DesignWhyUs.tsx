"use client";

import { Zap, Globe2, Asterisk } from "lucide-react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

export default function DesignWhyUs() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* soft brand auras */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{
                    background: `radial-gradient(circle at center, ${KA.purple}33, transparent 70%)`,
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
                style={{
                    background: `radial-gradient(circle at center, ${KA.maroon}33, transparent 70%)`,
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
                {/* Eyebrow + Title + Subtitle */}
                <div className="text-center">
                    <span className="font-ptsans inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-gray-600 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        DESIGN
                    </span>

                    <h2 className="font-euclid mt-3 text-[clamp(1.9rem,3.8vw,2.8rem)] leading-tight text-ka-ink">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})`,
                            }}
                        >
                            Why choose KA Global IP
                        </span>{" "}
                        for design protection
                    </h2>

                    <p className="font-ptsans mx-auto mt-4 max-w-3xl text-[15.5px] sm:text-[16px] leading-relaxed text-[#2B3852]/90">
                        Expertly crafted services to protect your intellectual property worldwide.
                    </p>
                </div>

                {/* 3 Features */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
                    <FeatureCard
                        Icon={Zap}
                        title={["Rapid, Affordable Protection"]}
                        desc="Secure your design rights efficiently."
                    />
                    <FeatureCard
                        Icon={Globe2}
                        title={["Global Strategy, Local Execution"]}
                        desc="Comprehensive support across countries."
                    />
                    <FeatureCard
                        Icon={Asterisk}
                        title={["Lifecycle Oversight "]}
                        desc="Complete management from initial filing to ongoing maintenance."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- Subcomponents ---------------- */

function FeatureCard({
    Icon,
    title,
    desc,
}: {
    Icon: typeof Zap;
    title: [string, string] | string[];
    desc: string;
}) {
    return (
        <div className="group rounded-2xl bg-gradient-to-tr from-[#7F2B38]/30 via-transparent to-[#4D1475]/30 p-[1px] transition-colors hover:from-[#7F2B38]/55 hover:to-[#4D1475]/55">
            <div className="h-full rounded-2xl bg-white p-6 sm:p-7 text-center sm:text-left">
                <IconBadge Icon={Icon} />
                <h3 className="font-euclid mt-4 text-[20px] font-semibold leading-snug text-[#1F2A44]">
                    {Array.isArray(title) ? (
                        <>
                            {title[0]} <br className="hidden sm:block" />
                            {title[1]}
                        </>
                    ) : (
                        title
                    )}
                </h3>
                <p className="font-ptsans mt-2 text-[14.5px] leading-relaxed text-[#2B3852]/85">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function IconBadge({ Icon }: { Icon: typeof Zap }) {
    return (
        <div className="inline-flex items-center justify-center">
            <span className="rounded-full bg-gradient-to-br from-[#7F2B38] to-[#4D1475] p-[1px]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Icon className="h-6 w-6 text-[#4D1475]" strokeWidth={2} aria-hidden />
                </span>
            </span>
        </div>
    );
}
