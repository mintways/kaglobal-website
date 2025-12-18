"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const KA = {
  maroon: "#7F2B38",
  purple: "#4D1475",
  text: "#0B1320",
  muted: "#475467",
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ptsans rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
      {children}
    </span>
  );
}

export default function PortfolioHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}
    >
      {/* --- decorative grid & auras --- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: `radial-gradient(closest-side, ${KA.purple}, transparent)` }}
        />
        <div
          className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: `radial-gradient(closest-side, ${KA.maroon}, transparent)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0B1320 1px, transparent 1px), linear-gradient(to bottom, #0B1320 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <Container>
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="font-ptsans mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" /> Portfolio Management
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl font-bold tracking-tight md:text-6xl"
            >
              <span className="bg-gradient-to-r from-[#7F2B38] via-[#581845] to-[#4B2E83] bg-clip-text text-transparent">
                Maximizing the Value of Your IP Assets
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-ptsans mt-5 max-w-xl text-lg leading-relaxed text-gray-700"
            >
              Strategic intellectual property portfolio oversight designed for sustained business growth—balancing cost, risk, 
              and inherent value to ensure your assets precisely align with overarching corporate objectives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <Pill>Analytics-Driven</Pill>
              <Pill>Cost Optimized</Pill>
              <Pill>Global Coverage</Pill>
              <Pill>Strategic Oversight</Pill>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <Briefcase className="h-85 w-85 text-[#4B2E83]" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
