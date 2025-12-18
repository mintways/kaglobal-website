"use client";

import Image from "next/image";
import { Playfair_Display, PT_Sans } from "next/font/google";
import copyrightupdates from "@/../public/images/services/copyright/transparent-copyright-management.png"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

export default function CopyrightUpdates() {
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

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 grid grid-cols-1 gap-12 md:grid-cols-12 items-center">
                {/* LEFT: visual */}
                <div className="md:col-span-7 flex justify-start -ml-2 sm:-ml-6 lg:-ml-10">
                    <div className="rounded-2xl bg-gradient-to-tr from-[#7F2B38] via-transparent to-[#4D1475] p-[1px]">
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(11,19,32,0.08)] ring-1 ring-black/5">
                            <Image
                                src={copyrightupdates}
                                alt="Transaprent copyright management"
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
                <div className="md:col-span-5 flex flex-col justify-center">
                    {/* Eyebrow */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        UPDATES
                    </div>

                    {/* Heading */}
                    <h2
                        className={`${playfair.className} text-[clamp(2rem,3.8vw,2.8rem)] font-bold leading-tight text-[${KA.text}]`}
                    >
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})`,
                            }}
                        >
                            Transparent
                        </span>{" "}
                        copyright management
                    </h2>

                    {/* Intro paragraph */}
                    <p className={`${ptsans.className} mt-5 max-w-xl text-[17px] leading-7 text-[#2B3852]/90`}>
                        Stay ahead with real-time updates on filings, renewals, and enforcement, Actionable insights via dashboards, 
                        analytics, and monthly summaries and Automated alerts and milestone notifications to keep your portfolio on track.
                    </p>

                    {/* Chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {[
                            "Real-time status dashboard",
                            "Renewal alerts & reminders",
                            "Portfolio analytics reports",
                            "Monthly compliance summaries",
                        ].map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Bullet points */}
                    <ul className={`${ptsans.className} mt-6 space-y-3 text-[15px] text-[#1F2A44]/90`}>
                        {[
                            "Live monitoring for application & renewal statuses",
                            "Automated milestone notifications across jurisdictions",
                            "Consolidated dashboards for clients & internal teams",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span
                                    className="mt-[6px] inline-block h-2.5 w-2.5 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})`,
                                    }}
                                />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
