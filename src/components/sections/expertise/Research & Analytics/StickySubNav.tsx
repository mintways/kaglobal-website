"use client";
import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const TABS = [
    { id: "capabilities", label: "Capabilities" },
    { id: "approach", label: "Approach" },
    { id: "deliverables", label: "Deliverables" },
    { id: "impact", label: "Impact & FAQs" },
];

export default function StickySubNav() {
    const [active, setActive] = React.useState(TABS[0].id);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

    React.useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-40% 0px -55% 0px" }
        );
        TABS.forEach((t) => {
            const el = document.getElementById(t.id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    return (
        <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
            <motion.div
                className="h-0.5 bg-gradient-to-r from-[#7F2B38] via-[#6E44AB] to-[#4B2E83]"
                style={{ scaleX: progress, transformOrigin: "0 0" }}
            />
            <div className="mx-auto w-full max-w-6xl px-6">
                <nav className="flex gap-2 overflow-x-auto py-3">
                    {TABS.map((t) => (
                        <a
                            key={t.id}
                            href={`#${t.id}`}
                            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm ${active === t.id
                                ? "bg-[#efeafd] text-[#4B2E83] ring-1 ring-[#7b61c3]/20"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {t.label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}