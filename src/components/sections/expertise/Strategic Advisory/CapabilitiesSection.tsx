"use client";

import { Lightbulb, Globe2, ShieldCheck, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function IconTitle({
  title,
  subtitle,
  Icon,
}: {
  title: string;
  subtitle?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#efeafd] ring-1 ring-[#7b61c3]/20">
          {Icon ? <Icon className="h-5 w-5 text-[#4B2E83]" strokeWidth={1.75} /> : null}
        </span>
        <h2 className="font-playfair text-2xl font-semibold text-gray-900 md:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="font-ptsans max-w-3xl text-base text-gray-700 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

function FeatureCard({
  Icon,
  title,
  desc,
  delay = 0,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
      className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#efeafd] ring-1 ring-[#7b61c3]/20">
        <Icon className="h-5 w-5 text-[#4B2E83]" strokeWidth={1.75} />
      </div>
      <h3 className="font-playfair text-xl font-semibold text-gray-900">{title}</h3>
      <p className="font-ptsans mt-2 leading-relaxed text-gray-700">{desc}</p>
    </motion.div>
  );
}

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-[#f7f7f8] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <IconTitle
          title="Capabilities"
          subtitle="A modular suite of offerings designed for seamless, end-to-end integration or precise à la carte deployment."
          Icon={Lightbulb} // <-- actually render a header icon
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            Icon={Lightbulb}
            title="IP Strategy Development"
            desc="Strategic positioning, claim architecture design, optimized filing cadence, and competitive signaling—all precisely mapped to your product lifecycles and Go-To-Market (GTM) timelines."
          />
          <FeatureCard
            Icon={Globe2}
            title="International Expansion"
            desc="Expert sequencing of PCT, Madrid, and Hague filings, alongside regional tracks (EP, CN, JP, US), balanced for budget optimization, risk mitigation, and market timing."
            delay={0.05}
          />
          <FeatureCard
            Icon={ShieldCheck}
            title="Risk & FTO"
            desc="Comprehensive FTO opinions, proactive design-around planning, continuous watch services, and robust dispute readiness protocols to effectively contain exposure."
            delay={0.1}
          />
          <FeatureCard
            Icon={Calculator}
            title="DD & Valuation"
            desc="Rigorous assessment of validity, enforceability, market comparables, and cash-flow outlooks to facilitate informed M&A, Joint Venture (JV), or licensing decisions."
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
