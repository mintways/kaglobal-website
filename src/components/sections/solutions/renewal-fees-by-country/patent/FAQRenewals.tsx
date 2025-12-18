// components/sections/solutions/renewal-fees-by-country/trademark/FAQRenewals.tsx
"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
    {
        q: "Are these fees final?",
        a: "They’re indicative for planning. Official fees change; local counsel, translations, excess claims/pages, and surcharges may apply. We confirm current rates before any instruction.",
    },
    {
        q: "Do you support Small/Micro entity reductions?",
        a: "Yes, wherever the jurisdiction provides such categories and you qualify, we apply the correct schedule and documentation.",
    },
    {
        q: "Can you invoice in one currency?",
        a: "Yes. We consolidate into a single currency and invoice with a country-wise breakdown, while tracking FX movements.",
    },
    {
        q: "What happens if I miss a due date?",
        a: "Many offices allow a grace window with surcharges; some require petitions or restoration. We monitor and escalate proactively.",
    },
    {
        q: "Can you sync with our docketing/ERP?",
        a: "Yes. We offer API feeds and custom exports to connect with your docketing or finance stack.",
    },
];

function cx(...c: Array<string | false | null | undefined>) {
    return c.filter(Boolean).join(" ");
}

function Item({
    faq,
    index,
    defaultOpen = false,
}: {
    faq: FAQ;
    index: number;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = React.useState(defaultOpen);
    const btnId = `faq-trigger-${index}`;
    const panelId = `faq-panel-${index}`;

    return (
        <div
            className={cx(
                "group relative overflow-hidden rounded-2xl bg-white",
                "ring-1 ring-gray-200 transition hover:shadow-md"
            )}
        >
            {/* subtle gradient border on hover */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#7F2B38,rgba(125,74,178,0.25),#4B2E83)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    padding: 1,
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor" as any,
                    maskComposite: "exclude" as any,
                }}
            />

            <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className={cx(
                    "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40"
                )}
            >
                <div className="min-w-0">
                    <div className="inline-flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#F7F0FA] ring-1 ring-[#9a4b58]/20">
                            <HelpCircle className="h-4 w-4 text-[#7F2B38]" />
                        </span>
                        <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                    </div>
                </div>
                <ChevronDown
                    className={cx(
                        "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300",
                        open && "rotate-180"
                    )}
                />
            </button>

            {/* animated content: smooth height + opacity */}
            <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={cx(
                    "grid px-5 transition-[grid-template-rows,opacity] duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-gray-700">{faq.a}</p>
                </div>
            </div>
        </div>
    );
}

export default function FAQRenewals() {
    return (
        <section aria-labelledby="renewals-faq-heading">
            <header className="mb-4">
                <h2
                    id="renewals-faq-heading"
                    className="text-2xl font-bold text-gray-900"
                >
                    <span className="bg-gradient-to-r from-[#7F2B38] via-[#581845] to-[#4B2E83] bg-clip-text text-transparent">
                        Renewals — FAQs
                    </span>
                </h2>
                <p className="mt-1 text-gray-700">
                    Quick answers to the most common renewal questions. Need specifics for a
                    jurisdiction? We’ll verify current schedules before any instruction.
                </p>
            </header>

            {/* two-column layout on md+ */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {FAQS.map((f, i) => (
                    <Item key={f.q} faq={f} index={i} defaultOpen={i === 0} />
                ))}
            </div>
        </section>
    );
}
