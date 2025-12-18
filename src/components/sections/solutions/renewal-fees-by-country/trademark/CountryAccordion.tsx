"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Item = {
    title: string;
    bullets: string[];
};

const DATA: Item[] = [
    {
        title: "United States (USPTO)",
        bullets: [
            "Maintenance due at 3.5, 7.5, and 11.5 years from grant.",
            "Small and Micro Entity reductions may apply if eligibility criteria are met.",
            "6-month grace available with surcharge; petition options for unintentional delay."
        ],
    },
    {
        title: "India (IPO)",
        bullets: [
            "Annual renewals through year 20.",
            "Grace up to 6 months with surcharge; restoration possible with additional evidence.",
            "Timely annuities help avoid lapses and costly restorations."
        ],
    },
    {
        title: "Europe — EPO (Pending) / National (Post-Grant)",
        bullets: [
            "During EP pending stage: annuities payable to EPO from year 3.",
            "Post-grant: renewals shift to each validated national office.",
            "Strategy: compare national term costs vs. portfolio value before broad validation."
        ],
    },
];

function AccordionRow({ item }: { item: Item }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-2xl border border-gray-200 bg-white">
            <button
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="text-base font-semibold text-gray-900">{item.title}</span>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="px-5 pb-5">
                    <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                        {item.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default function CountryAccordion() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4D1475]">Jurisdiction Notes & Practical Tips</h2>
            <p className="text-gray-700">
                Rules shift, fees update, and exchange rates move. These quick notes help you anticipate timing,
                surcharges, and strategic choices (e.g., EP validation vs. national).
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {DATA.map((item) => (
                    <AccordionRow key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
}
