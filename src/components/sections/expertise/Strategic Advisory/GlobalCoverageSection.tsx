"use client";

import * as React from "react";
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur font-ptsans">
      {children}
    </span>
  );
}

function StatDark({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15 shadow-sm">
      <div className="font-playfair text-3xl font-semibold text-white">{value}</div>
      <div className="mt-1 font-ptsans text-white/85">{label}</div>
    </div>
  );
}

function SectionHeading({
  title,
  subtitle,
  Icon,
}: {
  title: string;
  subtitle?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
          {Icon ? <Icon className="h-5 w-5 text-white" strokeWidth={1.75} /> : null}
        </span>
        <h2 className="font-playfair text-2xl font-semibold md:text-3xl">{title}</h2>
      </div>
      {subtitle ? (
        <p className="font-ptsans max-w-3xl text-base text-white/90 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function GlobalCoverageSection() {
  return (
    <section
      id="coverage"
      className="relative bg-gradient-to-r from-[#4B2E83] to-[#6E44AB] py-20 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Global Coverage & Frameworks"
          subtitle="Strategic utilization of international treaty systems and regional IP offices—precisely sequenced to align with your commercialization roadmap."
          Icon={Globe2} // <-- actually renders
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatDark value="PCT" label="Patent Cooperation Treaty" />
          <StatDark value="Madrid" label="International Trademarks" />
          <StatDark value="Hague" label="International Designs" />
          <StatDark value="EP · CN · JP · US" label="Priority Jurisdictions" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>ASEAN · GCC · AU · CA</Pill>
          <Pill>LATAM · EAC · ARIPO</Pill>
          <Pill>Custom Phasing</Pill>
          <Pill>Local Counsel Network</Pill>
        </div>
      </div>
    </section>
  );
}
