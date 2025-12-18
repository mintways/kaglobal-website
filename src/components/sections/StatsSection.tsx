"use client";

import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

export default function StatsSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
                {/* Top: Heading + Copy */}
                <div className="grid grid-cols-12 items-start gap-8">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="font-playfair text-[32px] sm:text-[40px] font-bold leading-tight text-[#1a1a1a] tracking-tight">
                            Global Intellectual
                            <br /> Property Management at
                            <br /> Scale
                        </h2>
                        <p className="font-ptsans mt-5 text-[16px] sm:text-[18px] leading-[1.6] text-[#333]">
                            Our mission is to empower innovation worldwide by providing comprehensive, accessible, 
                            and strategic intellectual property protection services that rigorously transform 
                            nascent ideas into valuable assets, driving sustainable business growth.
                        </p>
                    </div>

                    {/* Stats: Card Grid */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { n: 28000, label: "Patents under active management" },
                                { n: 32000, label: "Trademarks successfully secured" },
                                { n: 90, label: "Countries within our comprehensive coverage network" },
                                { n: 100, label: "Global Professionals delivering expert insight" },
                            ].map(({ n, label }) => (
                                <StatCard key={label} value={n} label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ value, label }: { value: number; label: string }) {
    return (
        <div
            className="
        group relative overflow-hidden rounded-2xl border border-[#eee]
        bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]
        transition-transform duration-200 hover:-translate-y-0.5
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[radial-gradient(1200px_200px_at_0%_0%,rgba(127,43,56,0.06),transparent)]
      "
        >
            <div className="flex flex-col items-start text-left">
                <div className="font-playfair text-[32px] sm:text-[36px] font-semibold leading-none text-[#0f0f0f]">
                    <AnimatedNumber end={value} />+
                </div>
                <div className="font-ptsans mt-2 text-[15px] sm:text-[16px] leading-snug text-[#444]">
                    {label}
                </div>
            </div>

            {/* Accent border on hover */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#7F2B38] via-[#4D1475] to-[#7F2B38] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </div>
    );
}

function AnimatedNumber({ end }: { end: number }) {
    return (
        <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
                <span ref={ref} className="tabular-nums">
                    {inView ? <CountUp end={end} duration={2} separator="," /> : "0"}
                </span>
            )}
        </InView>
    );
}
