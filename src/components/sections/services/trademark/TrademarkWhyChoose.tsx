"use client";

import Link from "next/link";
import { Globe2, RefreshCcw, Award, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
    title: string;
    desc: string;
    icon: LucideIcon;
};

type Props = {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    cta?: { label: string; href: string };
    features?: Feature[];
};

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function TrademarkWhyChoose({
    eyebrow = "Trusted",
    title = "WHY CHOOSE KA GLOBAL IP",
    subtitle = "Experience comprehensive trademark protection with a partner recognized for excellence and global reach.",
    cta = { label: "GET STARTED", href: "/contact" },
    features = [
        {
            title: "GLOBAL REACH",
            desc: "Trusted trademark protection in 140+ jurisdictions — 32,000 trademarks and counting",
            icon: Globe2,
        },
        {
            title: "LIFECYCLE COVERAGE",
            desc: "Our services span the complete trademark lifecycle, encompassing filing, registration, enforcement, and licensing.",
            icon: RefreshCcw,
        },
        {
            title: "INDUSTRY RECOGNITION",
            desc: "Ranked and trusted by leading IP organizations including IP Stars, IAM, and Forbes India.",
            icon: Award,
        },
        {
            title: "INTEGRATED PROTECTION",
            desc: "Strategic alignment of trademarks with patents, designs, and copyrights",
            icon: ShieldCheck,
        },
    ],
}: Props) {
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8 md:py-16">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center">
                    <span className="font-ptsans inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        {eyebrow.toUpperCase()}
                    </span>

                    <h2 className="font-euclid mt-3 text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-tight text-ka-ink">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h2>

                    <p className="font-ptsans mx-auto mt-4 max-w-3xl text-[15.5px] sm:text-[16px] leading-relaxed text-[#2B3852]/90">
                        {subtitle}
                    </p>

                    {/* CTA */}
                    <div className="mt-8">
                        <Link
                            href={cta.href}
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                            {cta.label}
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
                    {features.map((f, i) => (
                        <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- Subcomponents ---------------- */

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
    return (
        <div className="group h-full rounded-2xl bg-gradient-to-tr from-[#7F2B38]/35 via-transparent to-[#4D1475]/35 p-[1px] transition-colors hover:from-[#7F2B38]/60 hover:to-[#4D1475]/60">
            <article className="flex h-full flex-col rounded-2xl bg-white p-5 sm:p-6 md:p-7 shadow-[0_10px_30px_rgba(11,19,32,0.06)]">
                <IconBadge Icon={Icon} />
                <h3 className="font-euclid mt-4 text-lg sm:text-[19px] font-semibold tracking-wide text-ka-ink">
                    {title}
                </h3>
                <p className="font-ptsans mt-2 text-[14.5px] sm:text-[15px] leading-relaxed text-[#2B3852]/85">
                    {desc}
                </p>
                <div className="mt-auto" />
            </article>
        </div>
    );
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
    return (
        <div className="inline-flex items-center">
            <div className="rounded-full bg-gradient-to-br from-[#7F2B38] to-[#4D1475] p-[1px]">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#4D1475]" strokeWidth={2} />
                </div>
            </div>
        </div>
    );
}
