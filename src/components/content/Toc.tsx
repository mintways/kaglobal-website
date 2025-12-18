"use client";
import { useEffect, useState } from "react";

// Define literal union type
type TocItem = { id: string; text: string; level: 2 | 3 };

export default function Toc() {
    const [links, setLinks] = useState<TocItem[]>([]);
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        // 👇 Explicitly cast `level` to 2 | 3 using 'as'
        const headings: TocItem[] = Array.from(document.querySelectorAll("h2, h3")).map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level: el.tagName === "H3" ? (3 as const) : (2 as const),
        }));

        setLinks(headings);

        // Intersection observer for active section
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))[0];
                if (visible?.target?.id) setActive(visible.target.id);
            },
            { rootMargin: "0px 0px -70% 0px", threshold: [0, 0.1, 0.5] }
        );

        headings.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    if (!links.length)
        return <div className="text-gray-500 text-sm">No sections</div>;

    return (
        <ul className="space-y-1 text-sm">
            {links.map((h) => (
                <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
                    <a
                        href={`#${h.id}`}
                        className={[
                            "block rounded-md px-2 py-1 transition",
                            active === h.id
                                ? "bg-[#4D1475]/10 text-[#4D1475]"
                                : "text-gray-700 hover:bg-gray-50",
                        ].join(" ")}
                    >
                        {h.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}
