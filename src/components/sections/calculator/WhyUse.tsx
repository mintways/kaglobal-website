"use client";

import { Star } from "lucide-react";

export default function WhyUseCalculator() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-br from-[#FCE7EF] to-[#FFF] px-10 py-14 md:grid-cols-12 md:gap-16">
                {/* LEFT COLUMN */}
                <div className="md:col-span-7">
                    <h2 className="font-playfair text-3xl font-bold leading-tight text-[#0B1320] md:text-4xl">
                        Why should you use the IP renewal cost calculator?
                    </h2>

                    <ul className="mt-8 space-y-5">
                        {[
                            "You’re unsure if your IP renewal fees are fair",
                            "Your renewal costs feel high and unpredictable",
                            "Looking to evaluate your current provider",
                            "You want to avoid hidden fees and middlemen",
                        ].map((point) => (
                            <li key={point} className="flex items-start gap-3">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#900C3F] to-[#0B1320]">
                                    <Star className="h-4 w-4 text-white fill-white" />
                                </span>
                                <p className="font-ptsans text-[16px] leading-6 text-[#334155]">{point}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex justify-center md:col-span-5">
                    <div className="rounded-3xl bg-gradient-to-br from-[#FDECF2] to-[#FFF] p-10 shadow-inner">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-28 w-28 text-[#900C3F]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <rect x="5" y="3" width="14" height="18" rx="2" ry="2" className="stroke-current" />
                            <rect x="8" y="7" width="8" height="3" className="stroke-current" />
                            <rect x="8" y="12" width="2" height="2" className="stroke-current" />
                            <rect x="12" y="12" width="2" height="2" className="stroke-current" />
                            <rect x="16" y="12" width="2" height="2" className="stroke-current" />
                            <rect x="8" y="16" width="2" height="2" className="stroke-current" />
                            <rect x="12" y="16" width="2" height="2" className="stroke-current" />
                            <rect x="16" y="16" width="2" height="2" className="stroke-current" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
