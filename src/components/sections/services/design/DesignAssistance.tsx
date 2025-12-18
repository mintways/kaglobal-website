"use client";

import Image from "next/image";
import Link from "next/link";
import designassistanceimg from "@/../public/images/services/design/design-assistance.png"

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function DesignAssistance() {
    return (
        <section className="relative w-full bg-white">
            {/* brand auras (subtle, no shadows) */}
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

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:gap-12 md:py-16 lg:px-8">
                {/* LEFT: text */}
                <div className="md:col-span-7">
                    {/* Eyebrow */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-ptsans font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        ASSISTANCE
                    </div>

                    {/* Heading */}
                    <h2 className="font-euclid text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight text-ka-ink">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            Office actions
                        </span>{" "}
                        &amp; replacement-sheet support
                    </h2>

                    {/* Intro */}
                    <p className="font-ptsans mt-4 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-7 text-[#2B3852]/90">
                        Respond to design examination reports with confidence. We prepare precise corrections,
                        replacement drawings, and argumentation tailored to each authority’s formalities and
                        practice.
                    </p>

                    {/* Chips: what we handle */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {[
                            "Formal defects & view consistency",
                            "Shading / broken-lines corrections",
                            "Legend & reference clean-up",
                            "Late-filed drawings & pagination",
                        ].map((t) => (
                            <span
                                key={t}
                                className="font-ptsans rounded-full border border-gray-300 bg-white px-4 py-2 text-[13.5px] sm:text-sm text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Benefits bullets */}
                    <ul className="font-ptsans mt-6 space-y-3 text-[15px] text-[#1F2A44]/90">
                        {[
                            "Authority-specific templates and phrasing for faster acceptance",
                            "Pixel-accurate redraws delivered in compliant sheet formats",
                            "Coordinated filings across multiple jurisdictions",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span
                                    className="mt-[6px] inline-block h-2.5 w-2.5 rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                                />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                            Get assistance
                        </Link>
                    </div>
                </div>

                {/* RIGHT: visual (gradient hairline frame) */}
                <div className="md:col-span-5 flex justify-end -mr-4 sm:-mr-8 lg:-mr-12">
                    <div className="rounded-2xl bg-gradient-to-tr from-[#7F2B38] via-transparent to-[#4D1475] p-[1px]">
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(11,19,32,0.06)]">
                            <Image
                                src={designassistanceimg} // add your artwork to /public/images/
                                alt="Office action & replacement sheet support"
                                width={560}
                                height={420}
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="block h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
