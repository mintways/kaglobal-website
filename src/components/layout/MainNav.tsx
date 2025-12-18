// src/components/layout/MainNav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { MAIN_MENU } from "@/config/menus";
import { ChevronDown, Menu } from "lucide-react";

export default function MainNav() {
    return (
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main">
            {MAIN_MENU.map((item) =>
                item.children && item.children.length > 0 ? (
                    <NavDropdown key={item.label} label={item.label} href={item.href} items={item.children} />
                ) : (
                    <Link
                        key={item.label}
                        href={item.href || "#"}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                    >
                        {item.label}
                    </Link>
                )
            )}
        </nav>
    );
}

function NavDropdown({
    label,
    href,
    items,
}: {
    label: string;
    href?: string;
    items: { label: string; href: string }[];
}) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                aria-expanded={open}
                aria-haspopup="menu"
            >
                <span>{label}</span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown panel */}
            <div
                className={`absolute left-0 top-full z-30 mt-2 min-w-[240px] rounded-xl border border-gray-200 bg-white p-2 shadow-xl transition ${open ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                role="menu"
                aria-label={`${label} submenu`}
            >
                {href && (
                    <Link
                        href={href}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                    >
                        {label} Overview
                    </Link>
                )}
                <div className="my-1 h-px bg-gray-100" />
                <ul className="grid gap-1">
                    {items.map((i) => (
                        <li key={i.href}>
                            <Link
                                href={i.href}
                                role="menuitem"
                                className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                {i.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

/** Mobile button (used inside Header) */
export function MobileMenuButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
            onClick={onClick}
        >
            <Menu className="h-6 w-6" />
        </button>
    );
}
