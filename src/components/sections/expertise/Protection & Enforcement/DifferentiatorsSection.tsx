"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { Landmark } from "lucide-react";

export default function DifferentiatorsSection() {
    const bullets = [
        "Comprehensive coverage spanning over 90 jurisdictions worldwide.",
        "Proprietary dashboards providing unparalleled visibility and control over your entire portfolio.",
        "Fixed, predictable pricing structures ensuring clarity with no hidden costs.",
        "Acknowledged as trusted leaders by prestigious organizations including IAM, WTR, Forbes, and IP Stars.",
    ];

    return (
        <section id="differentiators" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                <IconTitle title="What Sets Our Protection Apart" Icon={Landmark} subtitle="Trusted, technology-driven, and globally recognized excellence." />
                <ul className="grid gap-4 md:grid-cols-2 text-gray-800">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}