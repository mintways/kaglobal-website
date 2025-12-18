"use client";

import {
    ClipboardList,
    ShieldCheck,
    Briefcase,
    CalendarClock,
    FileText,
    Archive,
    type LucideIcon,
} from "lucide-react";
import { InView } from "react-intersection-observer";

/** Types */
type Service = { title: string; Icon: LucideIcon; description: string };

/** Data */
const services: Service[] = [
    {
        title: "Research",
        Icon: ClipboardList,
        description:
            "Business-centric research powered by advanced tools to inform critical R&D, strategic IP direction, competitive intelligence, and future partnerships.",
    },
    {
        title: "Protection",
        Icon: ShieldCheck,
        description:
            "Global, business-focused IP protection—covering patents, trademarks, copyrights, and more—to preserve and enhance long-term value.",
    },
    {
        title: "Portfolio Management",
        Icon: Briefcase,
        description:
            "End-to-end portfolio oversight spanning prosecution, enforcement, monetization strategies, valuation, and proactive risk mitigation.",
    },
    {
        title: "Annuities & Renewals",
        Icon: CalendarClock,
        description:
            "Streamlined renewals executed at scale—leveraging automations, precise calendar control, and unified reporting across all jurisdictions.",
    },
    {
        title: "Transactions & Disputes",
        Icon: FileText,
        description:
            "Management of commercial agreements, licensing deals, and disputes—from initial cease & desist actions to final settlements—executed decisively",
    },
    {
        title: "Recordals",
        Icon: Archive,
        description:
            "End-to-end handling of ownership and asset changes—managing all required paperwork, filings, and cost-effective execution globally.",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative bg-white">
            {/* subtle decorative glow */}
            {/* <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-20 z-0 h-40 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(127,43,56,0.08),transparent)]"
            /> */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
                {/* Heading */}
                <InView triggerOnce threshold={0.2}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`mx-auto max-w-3xl text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                        >
                            <p className="font-ptsans text-sm tracking-[0.14em] uppercase text-[#7F2B38]/80">
                                What we do
                            </p>
                            <h2 className="font-playfair mt-3 text-3xl leading-tight font-bold text-[#2E2E3B] sm:text-4xl">
                                Comprehensive Global IP Management
                            </h2>
                            <p className="font-ptsans mx-auto mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                                A full stack of integrated intellectual property services meticulously designed to 
                                protect, optimize, and scale your innovations—seamlessly across borders and business lines.
                            </p>
                        </div>
                    )}
                </InView>

                {/* Grid */}
                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ title, Icon, description }, idx) => (
                        <InView key={title} triggerOnce threshold={0.12}>
                            {({ inView, ref }) => (
                                <article
                                    ref={ref}
                                    className={`group relative overflow-hidden rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                        }`}
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                >
                                    {/* Accent gradient ring */}
                                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#7F2B38, #4D1475, #7F2B38)] opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-10" />

                                    {/* Icon chip */}
                                    <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F2B38]/12 to-[#4D1475]/12 text-[#7F2B38] ring-1 ring-inset ring-[#EDE0E3]">
                                        <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.25} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-playfair text-xl font-semibold text-[#2E2E3B]">
                                        {title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-ptsans mt-3 text-[15px] leading-relaxed text-[#585A5D]">
                                        {description}
                                    </p>

                                    {/* CTA micro-link */}
                                    {/* <div className="mt-5">
                                        <span className="font-ptsans inline-flex items-center gap-2 text-[14px] font-semibold text-[#4D1475]">
                                            Learn more
                                            <svg
                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M7 5l5 5-5 5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div> */}

                                    {/* Bottom gradient bar on hover */}
                                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#7F2B38] via-[#4D1475] to-[#7F2B38] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </article>
                            )}
                        </InView>
                    ))}
                </div>
            </div>
        </section>
    );
}
