"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "approach", label: "Approach" },
    { id: "coverage", label: "Global" },
    { id: "impact", label: "Impact" },
    { id: "faqs", label: "FAQs" },
];

export default function StickySubNav() {
    const [active, setActive] = useState(tabs[0].id);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    // Track visible section
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        tabs.forEach((t) => {
            const el = document.getElementById(t.id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    // Respect initial hash + back/forward nav
    useEffect(() => {
        const setFromHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash && tabs.some((t) => t.id === hash)) setActive(hash);
        };
        setFromHash();
        window.addEventListener("hashchange", setFromHash);
        return () => window.removeEventListener("hashchange", setFromHash);
    }, []);

    // Smooth scroll helper (no layout change; keeps href fallback)
    const onTabClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        // prefer-reduced-motion: reduce -> no smooth scroll
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        e.preventDefault();
        el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
        setActive(id);
    };

    return (
        <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
            <motion.div
                className="h-0.5 bg-gradient-to-r from-[#4B2E83] via-[#7b61c3] to-[#6E44AB]"
                style={{ scaleX: progress, transformOrigin: "0 0" }}
            />
            <div className="mx-auto max-w-6xl px-6">
                <nav className="flex gap-2 overflow-x-auto py-3" aria-label="Page sections">
                    {tabs.map((t) => {
                        const isActive = active === t.id;
                        return (
                            <a
                                key={t.id}
                                href={`#${t.id}`}
                                onClick={(e) => onTabClick(e, t.id)}
                                aria-current={isActive ? "page" : undefined}
                                className={`rounded-full px-3 py-1.5 text-sm font-ptsans transition-colors ${isActive
                                        ? "bg-[#efeafd] text-[#4B2E83] ring-1 ring-[#7b61c3]/20"
                                        : "text-gray-600 hover:text-gray-900"
                                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61c3]/40`}
                            >
                                {t.label}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
