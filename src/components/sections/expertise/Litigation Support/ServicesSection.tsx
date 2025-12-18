"use client";
import * as React from "react";
import {
    Scale,
    FolderLock,
    FileSearch,
    Globe2,
    BookOpenCheck,
    type LucideIcon,
} from "lucide-react";

type CardProps = {
    Icon: LucideIcon;
    title: string;
    desc: string;
};

const Card = React.memo(function Card({ Icon, title, desc }: CardProps) {
    return (
        <div
            className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            role="article"
            aria-label={title}
        >
            <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7EEF0] ring-1 ring-[#9a4b58]/20"
                aria-hidden="true"
            >
                <Icon className="h-5 w-5 text-[#7F2B38]" strokeWidth={1.75} />
            </div>

            {/* Heading — use Playfair */}
            <h3 className="font-playfair text-xl font-semibold leading-snug text-gray-900">
                {title}
            </h3>

            {/* Description — use PT Sans */}
            <p className="font-ptsans mt-2 text-[15px] leading-relaxed text-gray-700">
                {desc}
            </p>
        </div>
    );
});

export default function ServicesSection() {
    const items: CardProps[] = [
        {
            Icon: Scale,
            title: "Patent & Trademark Litigation",
            desc:
                "Robust representation in infringement and declaratory actions, offering tailored defenses across diverse industries and technologies.",
        },
        {
            Icon: FolderLock,
            title: "Trade Secret Protection & Litigation",
            desc:
                "Comprehensive services including NDAs, meticulous investigations, and aggressive enforcement actions designed to halt misappropriation and safeguard critical know-how.",
        },
        {
            Icon: FileSearch,
            title: "Opposition & Cancellation",
            desc:
                "Strategic initiation of challenges and defenses before relevant intellectual property offices to resolve disputes efficiently and early in the process.",
        },
        {
            Icon: Globe2,
            title: "Cross-Border Litigation & Coordination",
            desc:
                "Development and implementation of consistent multi-jurisdictional strategies and coordination frameworks for complex global disputes.",
        },
        {
            Icon: BookOpenCheck,
            title: "Appellate Advocacy & Expert Testimony",
            desc:
                "Specialized appellate support and expert witness provision, blending deep technical knowledge with seasoned legal expertise.",
        },
    ];

    return (
        <section id="services" className="bg-[#f7f7f8] py-20 font-ptsans text-ka-ink">
            <div className="mx-auto w-full max-w-6xl px-6">
                <div className="mb-8">
                    <div className="flex items-center gap-2">
                        <Scale className="h-6 w-6 text-[#7F2B38]" aria-hidden="true" />
                        <h2 className="font-playfair text-2xl leading-tight md:text-3xl">
                            Our Litigation &amp; Enforcement Services
                        </h2>
                    </div>
                    <p className="font-ptsans mt-2 text-sm text-[#475467] md:text-base">
                        Combining exceptional technical depth with extensive litigation experience for 
                        decisive outcomes.Combining exceptional technical depth with extensive litigation experience for decisive outcomes.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((x) => (
                        <Card key={x.title} {...x} />
                    ))}
                </div>
            </div>
        </section>
    );
}
