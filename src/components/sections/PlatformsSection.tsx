"use client";

import { InView } from "react-intersection-observer";

type Platform = {
    title: string;
    description: string;
    action: string;
    href?: string;
};

const platforms: Platform[] = [
    {
        title: "Attorney-Supervised Trademark and Design Filing Platform",
        description:
            "File trademark and design applications seamlessly in key markets—including India, EUIPO, and China—all from one unified platform that integrates advanced technology with expert legal oversight",
        action: "Protect →",
        href: "https://file.kaglobalip.com/",
    },
    {
        title: "IP Renewal and Recordal Application Management",
        description:
            "Beyond simple reminders—this is a comprehensive portfolio engine engineered to optimize renewals and recordals for maximum protection, efficiency, and cost management.",
        action: "Renew →",
        href: "https://annuity.kaglobalip.com/",
    },
];

export default function PlatformsSection() {
    return (
        <section className="relative bg-white">
            {/* Subtle top glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(127,43,56,0.06),transparent)]"
            />
            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
                {/* Header */}
                <InView triggerOnce threshold={0.2}>
                    {({ inView, ref }) => (
                        <header
                            ref={ref}
                            className={`mx-auto max-w-3xl text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                        >
                            <p className="font-ptsans text-xs sm:text-sm tracking-[0.14em] uppercase text-[#4D5563]/80">
                                Features
                            </p>
                            <h2 className="font-playfair mt-2 text-3xl sm:text-4xl font-bold leading-tight text-[#2E2E3B]">
                                Advanced IP Management Solutions
                            </h2>
                            <p className="font-ptsans mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                                Experience the future of intellectual property management with automated workflows and real-time, 
                                multi-jurisdiction capabilities—all built to seamlessly scale alongside your portfolio's growth.
                            </p>
                        </header>
                    )}
                </InView>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
                    {platforms.map((item, idx) => (
                        <InView key={item.title} triggerOnce threshold={0.15}>
                            {({ inView, ref }) => (
                                <article
                                    ref={ref}
                                    className={`group relative overflow-hidden rounded-2xl border border-[#E9E9EB] bg-white p-7 sm:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                        }`}
                                    style={{ transitionDelay: `${idx * 60}ms` }}
                                >
                                    {/* Gradient corner accent */}
                                    <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#7F2B38,#4D1475,#7F2B38)] opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-10" />

                                    {/* Kicker */}
                                    <span className="font-ptsans inline-block rounded-full border border-[#E9E9EB] bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-[#7F2B38]/90">
                                        Application
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-playfair mt-4 text-[22px] sm:text-[24px] font-semibold leading-snug text-[#2E2E3B]">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-ptsans mt-3 text-[15px] leading-relaxed text-[#585A5D]">
                                        {item.description}
                                    </p>

                                    {/* Footer / CTA */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <a
                                            href={item.href || "#"}
                                            className="font-ptsans inline-flex items-center gap-2 text-[15px] font-semibold text-[#4D1475] hover:text-[#7F2B38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/30 rounded-md px-1"
                                        >
                                            {item.action}
                                            <svg
                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                                        </a>

                                        {/* Micro stat / badge slot (optional) */}
                                        <span className="font-ptsans text-xs text-[#7A7A7A]">
                                            Secure • Scalable • Global
                                        </span>
                                    </div>

                                    {/* Bottom gradient rule */}
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
