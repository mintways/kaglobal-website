"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { PenTool, Stamp, Palette, BookText } from "lucide-react";

function Card({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
    return (
        <div className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7EEF0] ring-1 ring-[#9a4b58]/20">
                <Icon className="h-5 w-5 stroke-[1.75] text-[#7F2B38]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{desc}</p>
        </div>
    );
}

export default function ServicesSection() {
    const items = [
        { Icon: PenTool, title: "Patent Protection & Management", desc: "High-quality application drafting, expansive global coverage via PCT/Convention routes, and strategic prosecution designed to maximize asset value." },
        { Icon: Stamp, title: "Trademark Protection & Management", desc: "Thorough clearance searches, efficient coverage utilizing the Madrid Protocol, alongside continuous brand monitoring and proactive enforcement." },
        { Icon: Palette, title: "Design Protection & Management", desc: "Industrial design protection deployed worldwide, compliance-focused drawing preparation, and expert portfolio lifecycle management." },
        { Icon: BookText, title: "Copyright Protection & Management", desc: "Robust safeguarding of literary works, proprietary software, digital content, and creative assets, complemented by strategic licensing and enforcement actions." },
    ];

    return (
        <section id="services" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="Our Protection Services" Icon={PenTool} subtitle="A comprehensive suite of services encompassing every major intellectual property asset type." />
                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((x) => (
                        <Card key={x.title} {...x} />
                    ))}
                </div>
            </div>
        </section>
    );
}