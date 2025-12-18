"use client";

import Image from "next/image";
import Link from "next/link";
import designmanagement from "@/../public/images/services/design/management.png"

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function DesignManagement() {
    return (
        <section className="relative w-full bg-white">
            {/* Gradient auras (soft, subtle) */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${KA.purple}33, transparent 70%)` }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${KA.maroon}33, transparent 70%)` }}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:gap-12 md:py-16">
                {/* LEFT: visual */}
                <div className="md:col-span-7 flex justify-start -ml-2 sm:-ml-6 lg:-ml-10">
                    <div className="rounded-2xl bg-gradient-to-tr from-[#7F2B38] via-transparent to-[#4D1475] p-[1px]">
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(11,19,32,0.08)] ring-1 ring-black/5">
                            <Image
                                src={designmanagement}
                                alt="Administrative & portfolio management"
                                width={560}
                                height={420}
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="block h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: content */}
                <div className="md:col-span-5">
                    {/* Eyebrow */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-ptsans font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        MANAGEMENT
                    </div>

                    {/* Heading */}
                    <h2 className="font-euclid text-[clamp(1.9rem,3.8vw,2.6rem)] leading-tight text-ka-ink">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            Administrative
                        </span>{" "}
                        &amp; portfolio management
                    </h2>

                    {/* Intro */}
                    <p className="font-ptsans mt-4 sm:mt-5 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-7 text-[#2B3852]/90">
                        Centralize your design portfolio with precision tracking and effortless control. Our management system
                        covers deadlines, renewals, and strategic portfolio insights, ensuring your assets remain protected and
                        optimized across jurisdictions.
                    </p>

                    {/* Chips — Core Capabilities */}
                    <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
                        {[
                            "Global docketing & maintenance",
                            "Deadline monitoring & reminders",
                            "Centralized renewal workflows",
                            "Ownership & license recordals",
                        ].map((t) => (
                            <span
                                key={t}
                                className="font-ptsans rounded-full border border-gray-300 bg-white px-4 py-2 text-[13.5px] sm:text-sm text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Bullet points */}
                    <ul className="font-ptsans mt-5 sm:mt-6 space-y-3 text-[14.5px] sm:text-[15px] text-[#1F2A44]/90">
                        {[
                            "Integrated reports on live, pending, and expired designs",
                            "Multi-jurisdictional renewals with transparent cost tracking",
                            "Automated portfolio dashboards for portfolio health and ROI",
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
                    <div className="mt-7 sm:mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                            Simplify your management
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
