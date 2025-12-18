"use client";

import Link from "next/link";
import { Playfair_Display, PT_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

type Props = {
    heading?: string;
    text?: string;
    buttonText?: string;
    buttonHref?: string;
};

export default function CTASection({
    heading = "Protect Your Creative Works Today",
    text = "Start your copyright protection journey with expert guidance and comprehensive global support.",
    buttonText = "CONTACT US",
    buttonHref = "/contact",
}: Props) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-[3rem] bg-gradient-to-b from-[#4A0D4D] to-[#7C1E2F] px-6 py-16 text-center text-white md:py-20 lg:px-20">
                <h2
                    className={`${playfair.className} text-3xl font-bold leading-tight md:text-4xl lg:text-5xl`}
                >
                    {heading}
                </h2>

                <p className={`${ptsans.className} mx-auto mt-6 max-w-2xl text-lg leading-7`}>
                    {text}
                </p>

                <div className="mt-10">
                    <Link
                        href={buttonHref}
                        className="inline-block rounded-md bg-white px-6 py-3 text-[16px] font-extrabold tracking-wide text-[#900C3F] shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7C1E2F]"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
