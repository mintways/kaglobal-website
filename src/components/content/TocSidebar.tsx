"use client";
import { useEffect, useState } from "react";

type TocItem = { id: string; text: string; level: number };

export default function TocSidebar() {
    const [headings, setHeadings] = useState<TocItem[]>([]);

    useEffect(() => {
        const els = Array.from(document.querySelectorAll("h2, h3"));
        const items = els.map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level: el.tagName === "H3" ? 3 : 2,
        }));
        setHeadings(items);
    }, []);

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-28 text-sm">
            <h3 className="text-[#4D1475] font-semibold mb-3">On this page</h3>
            <ul className="space-y-2 border-l border-gray-200 pl-3">
                {headings.map((h) => (
                    <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
                        <a
                            href={`#${h.id}`}
                            className="block text-gray-600 hover:text-[#4D1475] transition"
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
