"use client";

import { ReceiptText, BellRing, CheckCircle2, ShieldCheck, type LucideIcon } from "lucide-react";
import { InView } from "react-intersection-observer";
import React from "react";

type Item = { title: string; description: string; Icon: LucideIcon };

const items: Item[] = [
    { title: "Transparent Pricing", description: "Enjoy predictable, fixed fees with no surprises, ensuring absolute clarity in your financial planning and budgeting.", Icon: ReceiptText },
    { title: "Timely Notifications", description: "Automated, intelligent reminders keep your entire IP portfolio compliant and perfectly up to date.", Icon: BellRing },
    { title: "Data Security", description: "ISO-aligned controls and robust encryption protocols are implemented to keep your sensitive data secure and fully compliant with global standards.", Icon: ShieldCheck },
    { title: "No Hidden Fees", description: "We offer straightforward pricing with zero unexpected charges—providing complete peace of mind and budgetary certainty.", Icon: CheckCircle2 },
];

export default function SecurityTransparencySection() {
    return (
        <section className="relative bg-white">
            {/* Decorative gradient glow */}
            {/* <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(127,43,56,0.06),transparent)]"
            /> */}
            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
                {/* Heading */}
                <InView triggerOnce threshold={0.2}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`mx-auto max-w-3xl text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                        >
                            <p className="font-ptsans text-xs sm:text-sm tracking-[0.14em] uppercase text-[#4D5563]/80">
                                Trust & Clarity
                            </p>
                            <h2 className="font-playfair mt-2 text-3xl sm:text-4xl font-bold leading-tight text-[#2E2E3B]">
                                Security and Transparency
                            </h2>
                            <p className="font-ptsans mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                                Benefit from robust security protocols, clear pricing structures, and timely communications—ensuring you always maintain full visibility into the status of your intellectual property assets.
                            </p>
                        </div>
                    )}
                </InView>

                {/* Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((it, idx) => (
                        <InView key={it.title} triggerOnce threshold={0.1}>
                            {({ inView, ref }) => (
                                <FeatureCard ref={ref} inView={inView} index={idx} item={it} />
                            )}
                        </InView>
                    ))}
                </div>
            </div>
        </section>
    );
}

type FeatureCardProps = {
    ref: React.Ref<any>;
    inView: boolean;
    index: number;
    item: Item;
};

const FeatureCard = React.forwardRef<HTMLDivElement, Omit<FeatureCardProps, "ref">>(
    ({ inView, index, item: { title, description, Icon } }, ref) => {
        return (
            <article
                ref={ref}
                className={`group relative overflow-hidden rounded-2xl border border-[#E9E9EB] bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                style={{ transitionDelay: `${index * 60}ms` }}
            >
                {/* Decorative flare */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#7F2B38,#4D1475,#7F2B38)] opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-10" />

                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F2B38]/12 to-[#4D1475]/12 text-[#7F2B38] ring-1 ring-inset ring-[#EDE0E3]">
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.25} />
                </div>

                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#2E2E3B]">
                    {title}
                </h3>
                <p className="font-ptsans mt-2 text-[15px] leading-relaxed text-[#585A5D]">
                    {description}
                </p>

                {/* Bottom gradient bar */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#7F2B38] via-[#4D1475] to-[#7F2B38] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
        );
    }
);

FeatureCard.displayName = "FeatureCard";
