"use client";

import Link from "next/link";
import { Phone, Mail, Search, Linkedin, X as XIcon } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Announcement bar"
      className="sticky top-0 z-[60] w-full bg-[#05296B] text-white/95 shadow-sm"
    >
      {/* Fixed height so the header can offset with top-10 md:top-11 */}
      <div className="mx-auto h-10 md:h-11">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 text-[13px]">
          {/* Left: Contacts */}
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <ContactItem
              icon={<Phone className="h-4 w-4" aria-hidden />}
              href="tel:01144122100"
              label="011-44122100"
            />
            <Separator />
            <ContactItem
              icon={<Phone className="h-4 w-4" aria-hidden />}
              href="tel:+18134088782"
              label="+1-813-408-8782"
            />
            <Separator className="hidden md:block" />
            <ContactItem
              className="hidden md:flex"
              icon={<Mail className="h-4 w-4" aria-hidden />}
              href="mailto:business@kaglobalip.com"
              label="business@kaglobalip.com"
            />
          </div>

          {/* Right: Actions / Social */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            {/* <IconLink href="/search" label="Search">
              <Search className="h-4 w-4" aria-hidden />
            </IconLink> */}

            {/* External links should be <a>, not Next <Link> */}
            <ExternalIconLink
              href="https://www.linkedin.com/company/kaglobalip/"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </ExternalIconLink>

            <ExternalIconLink href="#" label="X (Twitter)" pill>
              <XIcon className="h-3.5 w-3.5" aria-hidden />
            </ExternalIconLink>

            {/* Dismiss
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="ml-1 hidden rounded-md p-1 hover:bg-white/10 md:inline-flex"
            >
              <XIcon className="h-4 w-4" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- bits ---------- */

function ContactItem({
  icon,
  href,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const content = (
    <>
      <span className="text-white/90">{icon}</span>
      <span className="truncate">{label}</span>
    </>
  );

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {isExternal ? (
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:underline"
        >
          {content}
        </a>
      ) : (
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:underline"
        >
          {content}
        </Link>
      )}
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
  pill = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  pill?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={[
        "inline-flex items-center justify-center transition",
        pill
          ? "h-6 w-6 rounded-md border border-white/50 hover:bg-white/10"
          : "hover:text-white",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function ExternalIconLink({
  href,
  label,
  children,
  pill = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  pill?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center transition",
        pill
          ? "h-6 w-6 rounded-md border border-white/50 hover:bg-white/10"
          : "hover:text-white",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function Separator({ className = "" }: { className?: string }) {
  return (
    <span className={`hidden h-3 w-px bg-white/30 sm:inline-block ${className}`} />
  );
}
