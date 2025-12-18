// components/sections/solutions/renewal-fees-by-country/trademark/CountryAccordion.tsx
"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

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
            "6-month grace available with surcharge; petition options for unintentional delay.",
        ],
    },
    {
        title: "India (IPO)",
        bullets: [
            "Annual renewals through year 20.",
            "Grace up to 6 months with surcharge; restoration possible with additional evidence.",
            "Timely annuities help avoid lapses and costly restorations.",
        ],
    },
    {
        title: "Europe — EPO (Pending) / National (Post-Grant)",
        bullets: [
            "During EP pending stage: annuities payable to EPO from year 3.",
            "Post-grant: renewals shift to each validated national office.",
            "Strategy: compare national term costs vs. portfolio value before broad validation.",
        ],
    },
];

function classNames(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

function AccordionItem({
    item,
    index,
    defaultOpen = false,
}: {
    item: Item;
    index: number;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = React.useState(defaultOpen);
    const contentId = `accordion-panel-${index}`;
    const buttonId = `accordion-trigger-${index}`;

    return (
        <div
            className={classNames(
                "group relative overflow-hidden rounded-2xl bg-white",
                "ring-1 ring-gray-200 transition hover:shadow-md"
            )}
        >
            {/* Subtle gradient edge on hover */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#7F2B38,rgba(125,74,178,0.28),#4B2E83)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    padding: 1,
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor" as any,
                    maskComposite: "exclude" as any,
                }}
            />

            <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={contentId}
                onClick={() => setOpen((v) => !v)}
                className={classNames(
                    "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40"
                )}
            >
                <div className="min-w-0">
                    <div className="inline-flex items-center gap-2">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#7F2B38]" />
                        <span className="text-base font-semibold text-gray-900">{item.title}</span>
                    </div>
                </div>
                <ChevronDown
                    className={classNames(
                        "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300",
                        open && "rotate-180"
                    )}
                />
            </button>

            {/* Animated content: height + opacity for smooth reveal, no layout jumps */}
            <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={classNames(
                    "grid px-5 transition-[grid-template-rows,opacity] duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <ul className="ml-4 list-disc space-y-2 pb-5 text-sm leading-relaxed text-gray-700">
                        {item.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function CountryAccordion() {
    return (
        <section>
            <header className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-[#7F2B38] via-[#581845] to-[#4B2E83] bg-clip-text text-transparent">
                        Jurisdiction Notes & Practical Tips
                    </span>
                </h2>
                <p className="mt-1 text-gray-700">
                    Rules shift, fees update, and exchange rates move. These quick notes help you anticipate timing,
                    surcharges, and strategic choices (e.g., EP validation vs. national).
                </p>
            </header>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {DATA.map((item, idx) => (
                    <AccordionItem key={item.title} item={item} index={idx} defaultOpen={idx === 0} />
                ))}
            </div>
        </section>
    );
}
