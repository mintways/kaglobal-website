"use client";

import Link from "next/link";

type Props = {
    heading?: string;
    text?: string;
    buttonText?: string;
    buttonHref?: string;
};

export default function CTASection({
    heading = "Ready To Elevate Your IP Strategy?",
    text = "Discover how our strategic advisory services can transform your intellectual property into a powerful business asset.",
    buttonText = "CONTACT US",
    buttonHref = "/contact",
}: Props) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-14 xs:px-5 sm:px-6 md:px-8 md:py-20">
            <div className="rounded-[2.25rem] sm:rounded-[3rem] bg-gradient-to-b from-[#4A0D4D] to-[#7C1E2F] px-5 sm:px-6 lg:px-20 py-12 sm:py-16 md:py-20 text-center text-white">
                <h2 className="font-euclid font-bold leading-tight text-[clamp(1.6rem,4.5vw,3rem)] md:text-[clamp(2rem,3.6vw,3.5rem)]">
                    {heading}
                </h2>

                <p className="mx-auto mt-4 sm:mt-6 max-w-2xl font-ptsans text-[15.5px] sm:text-base md:text-lg leading-7">
                    {text}
                </p>

                <div className="mt-8 sm:mt-10">
                    <Link
                        href={buttonHref}
                        className="inline-block w-full sm:w-auto rounded-md bg-white px-6 py-3 text-[15.5px] sm:text-[16px] font-extrabold tracking-wide text-[#900C3F] shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7C1E2F]"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
