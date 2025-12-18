"use client";

import Link from "next/link";

export default function CTASection({
    heading = "Comprehensive Global Brand Protection",
    text = "Tailored trademark strategies to secure and strengthen your brand worldwide.",
    buttonText = "Schedule a consultation",
    buttonHref = "/contact",
}) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="rounded-[2.5rem] bg-gradient-to-b from-[#4A0D4D] to-[#7C1E2F] px-6 py-14 text-center text-white sm:px-10 md:py-18 lg:px-20">
                <h2 className="font-euclid text-[clamp(1.9rem,3.5vw,3rem)] font-semibold leading-tight">
                    {heading}
                </h2>

                <p className="font-ptsans mx-auto mt-5 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-relaxed text-white/90">
                    {text}
                </p>

                <div className="mt-8 sm:mt-10">
                    <Link
                        href={buttonHref}
                        className="inline-block w-full sm:w-auto rounded-xl bg-white px-8 py-3 text-[15px] font-semibold tracking-wide text-[#7C1E2F] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7C1E2F]"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
