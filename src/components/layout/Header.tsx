"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

/* ---------- Types ---------- */
type LinkItem = { label: string; href: string };
type GroupItem = { label: string; items: LinkItem[] };
type Item = LinkItem | GroupItem;
type MenuT = { label: string; href?: string; items?: Item[] };

function isGroupItem(i: Item): i is GroupItem {
    return "items" in i && Array.isArray(i.items);
}

/* ---------- Menu Data ---------- */
const MENUS: MenuT[] = [
    {
        label: "About Us",
        href: "/about",
        items: [
            { label: "Who We Are", href: "/about" },
            { label: "Global Reach", href: "/about/global" },
            // { label: "Our Team", href: "/about/team" },
            // { label: "Careers", href: "/about/careers" },     
        ],
    },
    {
        label: "Services",
        href: "/services",
        items: [
            { label: "Patent", href: "/services/patent" },
            { label: "Trademark", href: "/services/trademark" },
            { label: "Design", href: "/services/design" },
            { label: "Copyright", href: "/services/copyright" },
        ],
    },
    {
        label: "Solutions",
        items: [
            { label: "Renewal Calculator", href: "/calculator" },
            { label: "Trademark Filing", href: "https://file.kaglobalip.com" },
            {
                label: "Patent Renewals & Recordals",
                href: "https://annuity.kaglobalip.com",
            },
            {
                label: "Renewal Fees by Country",
                items: [
                    {
                        label: "Patent",
                        href: "/solutions/renewal-fees-by-country/patent",
                    },
                    {
                        label: "Trademark",
                        href: "/solutions/renewal-fees-by-country/trademark",
                    },
                ],
            },
        ],
    },
    {
        label: "Expertise",
        href: "/expertise",
        items: [
            { label: "Strategic Advisory", href: "/expertise/strategic-advisory" },
            { label: "Research & Analytics", href: "/expertise/research-analytics" },
            { label: "Portfolio Management", href: "/expertise/portfolio-management" },
            { label: "Protection & Enforcement", href: "/expertise/protection-enforcement" },
            { label: "Monetisation & Licensing", href: "/expertise/monetisation-licensing" },
            { label: "Litigation Support", href: "/expertise/litigation-support" },
        ],
    },
    {
        label: "Insights",
        href: "/insights",
        items: [
            { label: "Blogs & Updates", href: "/insights/blogs" },
            // { label: "Case Studies", href: "/insights/case-studies" },
            // { label: "News & Recognition", href: "/insights/news" },
        ],
    },
];

/* ---------- Component ---------- */
export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const isActive = (href?: string) =>
        href && href !== "/"
            ? pathname === href || pathname.startsWith(href + "/")
            : pathname === "/";

    return (
        <>
            <AnnouncementBar />
            <header className="sticky top-10 md:top-11 z-[59] bg-white/70 backdrop-blur-xl border-b border-[#EDEDED] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 py-2 sm:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 flex-none">
                        <Image
                            src="/images/logos/kag.png"  //logo image
                            alt="KA Global IP"
                            height={108}
                            width={108}
                            className="h-16 lg:h-20 max-w-full object-contain" 
                        />
                    </Link>




                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-playfair" aria-label="Main">
                        {MENUS.map((m) => (
                            <DesktopDropdown key={m.label} menu={m} active={isActive(m.href)} />
                        ))}
                        <Link
                            href="/contact"
                            className={`text-[16px] xl:text-[17px] font-semibold ${isActive("/contact") ? "text-[#4D1475]" : "text-[#2D2F33] hover:text-[#7F2B38]"
                                }`}
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Right: Auth / CTA + Mobile Toggle */}
                    <div className="ml-2 flex items-center gap-2 sm:gap-4">
                        {/* <Link
                            href="/login"
                            className="font-ptsans text-[15px] sm:text-[16px] font-semibold text-[#2D2F33] hover:text-[#7F2B38]"
                        >
                            Log In
                        </Link> */}
                        {/* CHANGED: Get Started -> Login */}
                        <Link
                            href="http://file.kaglobalip.com/"
                            className="hidden sm:inline-block rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-5 sm:px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40 focus-visible:ring-offset-2"
                        >
                            Login
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40"
                            aria-label="Open menu"
                            aria-expanded={open}
                            onClick={() => setOpen(true)}
                        >
                            <Menu className="h-6 w-6 text-[#2D2F33]" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <MobileDrawer open={open} onClose={() => setOpen(false)} />
        </>
    );
}

/* ---------- Desktop Dropdown  ---------- */
function DesktopDropdown({ menu, active }: { menu: MenuT; active?: boolean }) {
    if (!menu.items?.length) {
        const href = menu.href || "#";
        return (
            <Link
                href={href}
                className={`relative text-[16px] xl:text-[17px] font-semibold transition ${active ? "text-[#4D1475]" : "text-[#2D2F33] hover:text-[#7F2B38]"
                    }`}
            >
                {menu.label}
            </Link>
        );
    }

    return (
        <div className="group relative">
            <button
                className={`flex items-center gap-1 text-[16px] xl:text-[17px] font-semibold transition ${active ? "text-[#4D1475]" : "text-[#2D2F33] hover:text-[#7F2B38]"
                    }`}
                aria-haspopup="true"
                aria-expanded="false"
            >
                {menu.label}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown */}
            <div
                className="invisible absolute left-0 top-full z-30 mt-3 min-w-[16rem] rounded-2xl border border-[#EAEAEA] bg-white/95 backdrop-blur-sm p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100"
                role="menu"
            >
                <ul className="grid gap-1">
                    {menu.items.map((i) =>
                        isGroupItem(i) ? (
                            <li key={`group-${i.label}`} className="relative group/fly">
                                <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]">
                                    {i.label}
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                                <div
                                    role="menu"
                                    className="invisible absolute left-full top-0 z-40 ml-2 min-w-[14rem] rounded-xl border border-[#EAEAEA] bg-white/95 p-2 opacity-0 shadow-md transition-all duration-150 group-hover/fly:visible group-hover/fly:opacity-100"
                                >
                                    {(i.items as LinkItem[]).map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block rounded-lg px-3 py-2 text-[15px] text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        ) : (
                            <li key={(i as LinkItem).href}>
                                <Link
                                    href={(i as LinkItem).href}
                                    className="block rounded-lg px-3 py-2 text-[15px] text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                                >
                                    {(i as LinkItem).label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

/* ---------- Mobile Drawer  ---------- */
function MobileDrawer({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    useEffect(() => {
        if (!open) setExpanded({});
    }, [open]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[60] bg-black/30 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />
            {/* Panel */}
            <aside
                className={`fixed inset-y-0 right-0 z-[61] w-full max-w-xs sm:max-w-sm bg-white shadow-xl transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-hidden={!open}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#EDEDED]">
                    <Link href="/" onClick={onClose} className="flex items-center gap-3">
                        <Image
                            src="/images/logos/kaglobalip.png"  //mobile logo
                            alt="KA Global IP"
                            width={140}
                            height={40}
                            className="h-12 w-auto" 
                            priority
                        />
                    </Link>
                    <button
                        onClick={onClose}
                        className="rounded-md p-2 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40"
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6 text-[#2D2F33]" />
                    </button>
                </div>

                {/* FULL mobile nav */}
                <nav className="font-playfair px-2 py-2" aria-label="Mobile">
                    <ul className="space-y-1">
                        {MENUS.map((m) => {
                            const hasChildren = !!m.items?.length;
                            if (!hasChildren) {
                                const href = m.href || "#";
                                return (
                                    <li key={m.label}>
                                        <Link
                                            href={href}
                                            onClick={onClose}
                                            className="block rounded-lg px-3 py-3 text-[16px] font-semibold text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                                        >
                                            {m.label}
                                        </Link>
                                    </li>
                                );
                            }

                            const openGroup = !!expanded[m.label];
                            return (
                                <li key={m.label}>
                                    <button
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[16px] font-semibold text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                                        onClick={() =>
                                            setExpanded((s) => ({ ...s, [m.label]: !s[m.label] }))
                                        }
                                        aria-expanded={openGroup}
                                    >
                                        {m.label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${openGroup ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    {openGroup && (
                                        <ul className="mt-1 space-y-1 pl-2">
                                            {m.items!.map((i) =>
                                                isGroupItem(i) ? (
                                                    <MobileGroup key={i.label} group={i} onLinkClick={onClose} />
                                                ) : (
                                                    <li key={(i as LinkItem).href}>
                                                        <Link
                                                            href={(i as LinkItem).href}
                                                            onClick={onClose}
                                                            className="block rounded-lg px-3 py-2 text-[15px] text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                                                        >
                                                            {(i as LinkItem).label}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                        {/* Extra links */}
                        <li className="pt-1">
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="block rounded-lg px-3 py-3 text-[16px] font-semibold text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-4 border-t border-[#EDEDED] pt-3">
                        <Link
                            href="/login"
                            onClick={onClose}
                            className="block w-1/2 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40"
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    );
}

function MobileGroup({
    group,
    onLinkClick,
}: {
    group: GroupItem;
    onLinkClick: () => void;
}) {
    const [open, setOpen] = useState(false);
    return (
        <li className="group">
            <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                {group.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <ul className="mt-1 space-y-1 pl-2">
                    {group.items.map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                onClick={onLinkClick}
                                className="block rounded-lg px-3 py-2 text-[15px] text-[#2D2F33] hover:bg-[#F7F2FA] hover:text-[#7F2B38]"
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}
