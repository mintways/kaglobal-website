// components/sections/services/strategic-advisory/FaqSection.tsx
"use client";

import { ChevronRight, HelpCircle } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

function IconTitle({
    title,
    subtitle,
    Icon,
}: {
    title: string;
    subtitle?: string;
    Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#efeafd] ring-1 ring-[#7b61c3]/20">
                    {Icon ? <Icon className="h-5 w-5 text-[#4B2E83]" strokeWidth={1.75} /> : null}
                </span>
                <h2 className="font-playfair text-2xl font-semibold text-gray-900 md:text-3xl">
                    {title}
                </h2>
            </div>
            {subtitle ? (
                <p className="font-ptsans max-w-3xl text-base text-gray-700 md:text-lg">{subtitle}</p>
            ) : null}
        </div>
    );
}

export default function FaqSection() {
    const faqs = [
        {
            q: "How do you tailor strategy for startups versus established enterprises?",
            a: "We precisely calibrate claim breadth, filing cadence, and territory selection in alignment with specific budget constraints, risk tolerance profiles, and long-term exit horizons—prioritizing the protection of most-critical assets initially.",
        },
        {
            q: "What documentation is required to initiate a risk or Freedom-to-Operate (FTO) assessment?",
            a: "We require a definitive product specification, identified target markets, and projected timelines. We subsequently scope comparable prior art, relevant industry standards, and competitor filings to identify and categorize potential red and amber zones of exposure.",
        },
        {
            q: "How does your firm facilitate cross-border intellectual property filings?",
            a: "We strategically sequence PCT, Madrid, and Hague applications, along with national/regional entries, around critical priority dates, market launch gates, and specific local counsel requirements—thereby minimizing aggregate costs without compromising essential coverage.",
        },
        {
            q: "Can you provide support during the M&A due diligence process?",
            a: "Yes. Our services encompass assessing asset validity and enforceability, detecting encumbrances, modeling comprehensive valuation ranges, and providing actionable remediation pathways both pre- and post-transaction closure.",
        },
    ];

    return (
        <section id="faqs" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
                <IconTitle
                    title="FAQs"
                    subtitle="Expedient insights into frequently asked questions"
                    Icon={HelpCircle} // <-- renders the header icon
                />

                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
                    {faqs.map((f, i) => (
                        <details key={i} className="group px-6 py-4 open:bg-[#fafafe]">
                            <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-gray-900">
                                <span className="font-ptsans font-semibold">{f.q}</span>
                                <ChevronRight
                                    className="ml-4 h-4 w-4 text-gray-500 transition-transform duration-200 group-open:rotate-90"
                                    aria-hidden="true"
                                />
                            </summary>
                            <p className="font-ptsans mt-2 max-w-4xl text-gray-700">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
