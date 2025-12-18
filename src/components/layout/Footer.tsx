"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full bg-white">
            {/* subtle top hairline */}
            <div className="h-px w-full bg-gray-200" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Top: brand + blurb + social */}
                <div className="grid grid-cols-1 items-start gap-8 py-10 md:grid-cols-12">
                    {/* Brand */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <Link href="/" aria-label="KA Global IP Home" className="inline-flex items-center gap-3">
                            <Image
                                src="/images/logos/kaglobalip.png"
                                alt="KA Global IP"
                                width={220}
                                height={64}
                                className="h-12 w-auto md:h-14"
                                priority
                            />
                        </Link>
                        <p className="font-ptsans mt-4 max-w-md text-sm leading-6 text-gray-600">
                            Global IP strategy, filings, renewals, and enforcement—built for speed, scale, and compliance
                            across 90+ jurisdictions.
                        </p>

                        {/* Socials */}
                        <div className="mt-4 flex items-center gap-3">
                            <SocialIcon
                                href="https://www.linkedin.com/company/kaglobalip"
                                label="LinkedIn"
                                Icon={Linkedin}
                            />
                            <SocialIcon href="https://twitter.com/kaglobalip" label="Twitter" Icon={Twitter} />
                            <a
                                href="mailto:support@kaglobalip.com"
                                className="font-ptsans inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50"
                            >
                                <Mail className="h-4 w-4 text-[#4D1475]" />
                                support@kaglobalip.com
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <nav className="md:col-span-7 lg:col-span-8">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            <LinkGroup
                                title="Services"
                                links={[
                                    { label: "Patents", href: "/services/patents" },
                                    { label: "Trademarks", href: "/services/trademarks" },
                                    { label: "Designs", href: "/services/designs" },
                                    { label: "Copyrights", href: "/services/copyrights" },
                                    { label: "Strategic Advisory", href: "/services/strategic-advisory" },
                                ]}
                            />
                            <LinkGroup
                                title="Company"
                                links={[
                                    { label: "About", href: "/about" },
                                    // { label: "Leadership", href: "/about#leadership" },
                                    { label: "Careers", href: "/careers" },
                                    { label: "Contact", href: "/contact" },
                                ]}
                            />
                            <LinkGroup
                                title="Resources"
                                links={[
                                    { label: "Insights", href: "/insights" },
                                    { label: "Renewal Calculator", href: "/calculator" },
                                    { label: "FAQs", href: "/faq" },
                                    { label: "Support", href: "/support" },
                                ]}
                            />
                        </div>
                    </nav>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200" />

                {/* Bottom: legal row */}
                <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-600 md:flex-row">
                    <p className="font-ptsans">
                        © {new Date().getFullYear()}, <span className="font-medium">KA Global IP</span>. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link className="hover:text-gray-900" href="/privacy">
                            Privacy Policy
                        </Link>
                        <span className="hidden h-3 w-px bg-gray-300 md:inline-block" />
                        <Link className="hover:text-gray-900" href="/terms">
                            Terms of Use
                        </Link>
                        <span className="hidden h-3 w-px bg-gray-300 md:inline-block" />
                        <Link className="hover:text-gray-900" href="/cookies">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ---------- subcomponents ---------- */

function LinkGroup({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div>
            <h3 className="font-playfair text-[15px] font-semibold text-[#1F2A44]">{title}</h3>
            <ul className="font-ptsans mt-3 space-y-2 text-sm">
                {links.map((l) => (
                    <li key={l.label}>
                        <Link href={l.href} className="text-gray-600 transition hover:text-gray-900">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SocialIcon({
    href,
    label,
    Icon,
}: {
    href: string;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-300 text-[#4D1475] transition hover:bg-gray-50"
        >
            <Icon className="h-4 w-4" />
        </Link>
    );
}
