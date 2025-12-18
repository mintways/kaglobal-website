"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

export default function CookieToc({ items }: { items: TocItem[] }) {
    const [active, setActive] = useState(items[0]?.id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] }
        );

        items.forEach((i) => {
            const el = document.getElementById(i.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav aria-label="Table of contents" className="top-24 lg:sticky">
            <div className="rounded-2xl border border-[#EAEAEA] bg-white p-4 sm:p-5">
                <p className="font-ptsans text-xs uppercase tracking-[0.15em] text-[#667085]">
                    On this page
                </p>
                <ul className="mt-3 space-y-2">
                    {items.map((i) => (
                        <li key={i.id}>
                            <a
                                href={`#${i.id}`}
                                className={`block rounded-md px-2 py-1 text-sm font-ptsans transition ${active === i.id
                                        ? "bg-[#F7F2FA] text-[#7F2B38]"
                                        : "text-[#374151] hover:text-[#7F2B38]"
                                    }`}
                            >
                                {i.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
