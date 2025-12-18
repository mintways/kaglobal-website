"use client";

import Image from "next/image";
import { InView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import rings from "@/../public/images/hero/globe.png";

export default function WhyKAGlobalIPSection() {
    return (
        <section className="relative bg-white">
            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:py-24 xl:px-12">
                {/* Visual — image FIRST on mobile */}
                <InView triggerOnce threshold={0.2}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                        >
                            <div className="relative flex justify-start">
                                <div className="relative aspect-square w-[320px] sm:w-[460px] lg:w-[560px]">
                                    <Image
                                        src={rings}
                                        alt="KA Global IP globe"
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 560px, (min-width: 640px) 460px, 320px"
                                        className="object-contain p-10 sm:p-12 lg:p-14"
                                    />
                                    {/* subtle corner accent */}
                                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#7F2B38,#4D1475,#7F2B38)] opacity-[0.06] blur-2xl" />
                                </div>
                            </div>
                        </div>
                    )}
                </InView>

                {/* Copy — second on mobile, normal on lg+ */}
                <InView triggerOnce threshold={0.2}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`order-2 lg:order-none transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                        >
                            <p className="font-playfair font-semibold uppercase text-3xl tracking-[0.14em] text-[#7F2B38]/80">
                                Why KA GlobalIP
                            </p>

                            <p className="font-ptsans mt-4 text-[15px] leading-relaxed text-[#374151] sm:text-[16px]">
                                KA Global IP seamlessly blends deep legal expertise with advanced technology to 
                                deliver precise, scalable outcomes for innovators and businesses worldwide.
                            </p>
                            <p className="font-ptsans mt-3 text-[15px] leading-relaxed text-[#374151] sm:text-[16px]">
                                From our evolution as KA Filing to a fully integrated global IP partner, our mission 
                                remains unwavering: to empower innovation through strategic protection and absolute portfolio clarity.
                            </p>

                            <ul className="mt-6 space-y-3">
                                {[
                                    {
                                        title: "Efficiency & Transparency",
                                        body:
                                            "Real-time tracking and crystal-clear communication facilitated through our unified client platform.",
                                    },
                                    {
                                        title: "Cost-Effective Solutions",
                                        body:
                                            "Competitive pricing models featuring flexible packages meticulously tailored to align with specific portfolio size and strategic goals.",
                                    },
                                    {
                                        title: "Rapid Response",
                                        body:
                                            "Time-sensitive matters are prioritized with a fast, reliable service commitment to meet critical deadlines.",
                                    },
                                ].map(({ title, body }) => (
                                    <li key={title} className="flex gap-3">
                                        <span className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full text-[#7F2B38]">
                                            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        <div>
                                            <p className="font-ptsans text-[15px] font-semibold text-[#2E2E3B] sm:text-[16px]">
                                                {title}
                                            </p>
                                            <p className="font-ptsans text-[14px] leading-relaxed text-[#4B5563] sm:text-[15px]">
                                                {body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </InView>
            </div>
        </section>
    );
}
