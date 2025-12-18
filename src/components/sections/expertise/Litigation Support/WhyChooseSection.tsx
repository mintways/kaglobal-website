"use client";
import * as React from "react";
import IconTitle from "@/components/ui/IconTitle";
import { ShieldCheck, Globe2, Landmark, GitBranch } from "lucide-react";

export default function WhyChooseSection() {
    const brandPrimary = "#7F2B38";
    const items = [
        { Icon: Globe2, text: "Proven expertise across more than 90 jurisdictions, supported by a trusted international partner network." },
        { Icon: Landmark, text: "Litigation strategies are robustly grounded in deep technical understanding and specific sector insight." },
        { Icon: ShieldCheck, text: "Development of both local and cross-border playbooks, specifically adapted to venue requirements, risk profiles, and business impact analyses." },
        { Icon: GitBranch, text: "Consistently recognized by leading IP authorities and publications, including IAM, WTR, and Forbes." },
    ];

    return (
        <section id="why" className="bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6">
                {/* IconTitle will inherit Euclid from globals for headings */}
                <IconTitle
                    title="Why Choose KA Global IP"
                    Icon={ShieldCheck}
                    subtitle="Global reach, technical rigor, and unparalleled courtroom readiness."
                />

                {/* Body copy in PT Sans, same grid layout */}
                <ul className="mt-6 grid gap-4 md:grid-cols-2 text-gray-800 font-ptsans">
                    {items.map(({ Icon, text }, i) => (
                        <li key={i} className="flex gap-3">
                            <Icon className="mt-0.5 h-6 w-6 shrink-0" style={{ color: brandPrimary }} />
                            <span className="text-[15.5px] leading-7">{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
