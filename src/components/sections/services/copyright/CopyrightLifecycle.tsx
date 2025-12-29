"use client";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

type Step = {
    title: string;
    desc: string;
    points?: string[];
};

const steps: Step[] = [
    {
        title: "Streamlined Registration Process",
        desc:
            "End-to-end guidance to register your works with the right authority, quickly and correctly.",
        points: ["Eligibility screening & work classification", "Specimen/metadata prep & formatting"],
    },
    {
        title: "Proactive Renewal Management",
        desc:
            "Always-on tracking and reminders so your registrations stay valid and in force globally.",
        points: ["Jurisdiction-specific term monitoring", "Centralized renewals & proof archiving"],
    },
    {
        title: "Strategic Enforcement Support",
        desc:
            "Measure, detect, and act on misuse with pragmatic, business-aligned enforcement.",
        points: ["Online takedowns & notices", "Licensing, settlements, and escalation"],
    },
];

export default function CopyrightLifecycle() {
    const title = "Comprehensive Copyright Lifecycle Management";
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section className="relative w-full bg-white">
            {/* subtle brand auras */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${KA.purple}33, transparent 70%)` }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${KA.maroon}33, transparent 70%)` }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
                {/* Header */}
                <div className="text-center">
                    <span className="font-ptsans inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        MANAGEMENT
                    </span>

                    <h2 className="font-playfair mt-3 text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-tight text-[#1F2A44]">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h2>

                    <p className="font-ptsans mx-auto mt-4 max-w-3xl text-[15.5px] sm:text-[16px] leading-relaxed text-[#2B3852]/90">
                        From first filing to global enforcement, we make copyright management clear,
                        fast, and reliable.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative mt-12">
                    {/* connector */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
                    >
                        <div
                            className="h-full w-px"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(127,43,56,0.25), rgba(77,20,117,0.25))",
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3">
                        {steps.map((s, i) => (
                            <StepCard
                                key={s.title}
                                index={i + 1}
                                title={s.title}
                                desc={s.desc}
                                points={s.points}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Step Card ---------- */

function StepCard({
    index,
    title,
    desc,
    points,
}: {
    index: number;
    title: string;
    desc: string;
    points?: string[];
}) {
    return (
        <div className="rounded-2xl bg-gradient-to-tr from-[#7F2B38]/35 via-transparent to-[#4D1475]/35 p-[1px]">
            <div className="h-full rounded-2xl bg-white p-6 md:p-7">
                {/* index */}
                <span className="inline-flex rounded-xl bg-gradient-to-br from-[#7F2B38] to-[#4D1475] p-[1px]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-sm font-semibold text-[#1F2A44]">
                        {index}
                    </span>
                </span>

                <h3 className="font-playfair mt-4 text-[20px] font-semibold leading-snug text-[#1F2A44]">
                    {title}
                </h3>

                <p className="font-ptsans mt-2 text-[14.5px] leading-relaxed text-[#2B3852]/85">
                    {desc}
                </p>

                {points && (
                    <ul className="font-ptsans mt-4 space-y-2 text-[14px] text-[#1F2A44]/90">
                        {points.map((p, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span
                                    className="mt-[7px] inline-block h-2.5 w-2.5 rounded-full"
                                    style={{ background: "linear-gradient(90deg, #7F2B38, #4D1475)" }}
                                />
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
