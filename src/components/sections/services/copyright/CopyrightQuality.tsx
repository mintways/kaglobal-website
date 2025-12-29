"use client";

import Image from "next/image";
import copyrightquality from "@/../public/images/services/copyright/quality.png";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

export default function CopyrightQuality() {
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

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-20">
                {/* LEFT: content */}
                <div className="md:col-span-7">
                    {/* eyebrow */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        EXPLORE
                    </div>

                    {/* heading */}
                    <h2 className="text-[clamp(2rem,3.8vw,2.8rem)] font-bold leading-tight text-[#1F2A44]">
                        <span
                            className="font-playfair bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            Precision is Every Filing
                        </span>
                    </h2>

                    {/* intro */}
                    <p className="font-ptsans mt-5 max-w-2xl text-[17px] leading-7 text-[#2B3852]/90">
                        From filing to grant, we ensure every submission meets authority standards—from documentation to recordals—minimizing
                        delays and objections.
                    </p>

                    {/* capability chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {["4-eye review workflow", "Authority-specific QC", "Chain-of-title checks", "Audit trail & proofs"].map((t) => (
                            <span key={t} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* bullets */}
                    <ul className="font-ptsans mt-6 space-y-3 text-[15px] text-[#1F2A44]/90">
                        {[
                            "Comprehensive screening & eligibility review",
                            "Evidence, specimen, and metadata preparation",
                            "Jurisdiction-ready forms, labels, and schedules",
                            "Ongoing monitoring, renewals, and guidance",
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
                </div>

                {/* RIGHT: visual */}
                <div className="md:col-span-5 flex justify-end -mr-6 sm:-mr-10 lg:-mr-14">
                    <div className="rounded-2xl bg-gradient-to-tr from-[#7F2B38] via-transparent to-[#4D1475] p-[1px]">
                        <div className="relative overflow-hidden rounded-2xl bg-white">
                            <Image
                                src={copyrightquality}
                                alt="Quality oversight"
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
