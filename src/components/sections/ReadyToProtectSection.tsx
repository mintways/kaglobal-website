"use client";

import { InView } from "react-intersection-observer";

export default function ReadyToProtectSection() {
    return (
        <section className="relative bg-white">
            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
                <InView triggerOnce threshold={0.2}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#EAEAEA] bg-white/80 p-8 sm:p-10 lg:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                        >
                            {/* top accent */}
                            {/* <div className="pointer-events-none absolute inset-x-0 -z-10 h-1 bg-gradient-to-r from-[#7F2B38] via-[#4D1475] to-[#7F2B38] opacity-20" /> */}

                            <p className="font-ptsans text-xs sm:text-sm tracking-[0.14em] uppercase text-[#7F2B38]/80 text-center">
                                Get started
                            </p>
                            <h2 className="font-playfair mt-2 text-center text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight text-[#2E2E3B]">
                                Ready to protect your Intellectual Property?
                            </h2>
                            <p className="font-ptsans mx-auto mt-3 max-w-3xl text-center text-[15px] sm:text-[16px] leading-relaxed text-[#4b4b4b]">
                                Talk to an expert for a tailored plan—or jump in and start with our guided workflow.
                            </p>

                            {/* CTA row */}
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                                <a
                                    href="#contact"
                                    className="font-ptsans inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/30"
                                >
                                    Schedule a Meeting
                                </a>
                            </div>

                            {/* bottom gradient underline on hover container */}
                            <div className="mt-8 h-[3px] w-full bg-gradient-to-r from-transparent via-[#7F2B38]/30 to-transparent" />
                        </div>
                    )}
                </InView>
            </div>

            {/* decorative corner flare */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#7F2B38,#4D1475,#7F2B38)] opacity-[0.06] blur-2xl"
            />
        </section>
    );
}
