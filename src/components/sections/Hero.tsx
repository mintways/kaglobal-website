"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

import heroAnimation from "@/../public/updated-home-page-hero-lotti2.json";
import globe from "@/../public/images/hero/globe-only.png";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#faf9fb]">
            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28 xl:px-12">
                {/* Image — first on mobile, second on desktop */}
                <div className="order-1 lg:order-2 flex items-center justify-start">
                    <div className="relative aspect-square w-[320px] sm:w-[440px] lg:w-[560px]">
                        <Lottie
                            animationData={heroAnimation}
                            loop
                            autoplay
                            className="pointer-events-none absolute inset-0 h-full w-full"
                        />
                        <Image
                            src={globe}
                            alt="KA Global IP globe"
                            fill
                            priority
                            sizes="(min-width: 1024px) 560px, (min-width: 640px) 440px, 320px"
                            className="object-contain p-10 sm:p-14 lg:p-20"
                        />
                    </div>
                </div>

                {/* Text — second on mobile, first on desktop */}
                <div className="order-2 lg:order-1 z-10 max-w-3xl">
                    <h1 className="font-playfair text-[32px] sm:text-[38px] font-bold leading-[1.2] text-[#4D1475]">
                        Simplifying Global IP Protection
                        <br /> And Management
                    </h1>

                    <p className="font-ptsans mt-6 text-[16px] sm:text-[18px] font-normal leading-[1.6] text-[#565657] sm:max-w-3xl">
                        KA Global IP delivers comprehensive intellectual property management services, backed by experienced
                        legal counsel and technical specialists operating across a network of over <AnimatedNumber end={90} />+ countries.
                    </p>

                    <div className="mt-8">
                        <a
                            href="#about"
                            className="font-playfair inline-flex items-center justify-center rounded-[10px] border border-[#7F2B38] bg-[#7F2B38] px-[30px] py-[15px] text-[18px] font-normal capitalize leading-[14px] text-[#F0F0F0] shadow-sm transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#2E2E2E] hover:border-[#7F2B38] focus:outline-none focus:ring-2 focus:ring-[#7F2B38]/30"
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AnimatedNumber({ end }: { end: number }) {
    return (
        <InView triggerOnce threshold={0.5}>
            {({ inView, ref }) => (
                <span ref={ref} className="tabular-nums">
                    {inView ? <CountUp end={end} duration={2.2} separator="," /> : "0"}
                </span>
            )}
        </InView>
    );
}
