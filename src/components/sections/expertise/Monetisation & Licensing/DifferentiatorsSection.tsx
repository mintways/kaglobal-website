"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Handshake } from "lucide-react";

export default function DifferentiatorsSection() {
    const bullets = [
        "🤝 Flexible licensing frameworks tailored for innovators and enterprises.",
        "💼 End-to-end management of royalties, partnerships, and sublicenses.",
        "📈 Transparent revenue-sharing and real-time performance tracking.",
        "🌍 Global network for cross-border IP monetisation and collaborations.",
        "🔐 Legal, tax, and compliance alignment across multiple jurisdictions.",
    ];

    return (
        <section id="differentiators" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle
                    title="Why Partner with Us for Monetisation & Licensing"
                    Icon={Handshake}
                    subtitle="Maximise value from your intellectual assets through transparent, scalable, and compliant strategies."
                />
                <ul className="grid gap-4 md:grid-cols-2 text-gray-800 mt-6 leading-relaxed">
                    {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-[#4B2E83] font-semibold">•</span>
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
