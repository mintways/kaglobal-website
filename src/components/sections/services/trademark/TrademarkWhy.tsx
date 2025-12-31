"use client";

import Image from "next/image";
import Link from "next/link";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

type Props = {
    imageSrc: string;
    imageAlt?: string;
    title?: string;
    body?: string;
    ctaHref?: string;
    ctaLabel?: string;
};

export default function TrademarkWhy({
    imageSrc,
    imageAlt = "Trademark Illustration",
    title = "Why Trademark Protection Is a Legal Necessity",
    body = `Your trademark is a critical business asset. Legally protecting it is essential to prevent infringement, ensure exclusive rights to your brand identity, and maintain your competitive edge in the marketplace. 
    KA Global IP streamlines the entire protection process, offering comprehensive services that make it simple to secure your brand globally.`,
    ctaHref = "#",
    ctaLabel = "Explore",
}: Props) {
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section className="relative w-full bg-white px-4 py-12 sm:px-6 lg:px-8 md:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
                {/* LEFT: Image with gradient aura */}
                <div className="relative order-1 md:order-none">
                    {/* gradient auras */}
                    <div
                        aria-hidden
                        className="absolute -top-12 -left-12 h-60 w-60 rounded-full opacity-30 blur-3xl"
                        style={{ background: `radial-gradient(circle at center, ${KA.maroon}33, transparent 70%)` }}
                    />
                    <div
                        aria-hidden
                        className="absolute -bottom-14 -right-12 h-60 w-60 rounded-full opacity-25 blur-3xl"
                        style={{ background: `radial-gradient(circle at center, ${KA.purple}33, transparent 70%)` }}
                    />

                    {/* main image */}
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(11,19,32,0.08)] ring-1 ring-black/5">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: Text content */}
                <div className="relative">
                    <h2 className="font-euclid text-[clamp(1.6rem,3.8vw,2.6rem)] leading-snug text-ka-ink">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h2>

                    <p className="font-ptsans mt-4 sm:mt-5 max-w-xl text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#2B3852]/90">
                        {body}
                    </p>

                    <div className="mt-7 sm:mt-8">
                        <Link
                            href={ctaHref}
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-7 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38] focus-visible:ring-offset-2"
                        >
                            {ctaLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
