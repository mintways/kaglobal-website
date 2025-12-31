"use client";

type Item = { title: string; desc: string };

type Props = {
    eyebrow?: string;
    heading?: string;
    intro?: string;
    items?: Item[];
};

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

export default function TrademarkServicesSplit({
    eyebrow = "End-to-End Trademark Solutions",
    heading = "Navigating the Global IP Landscape with Precision",
    intro = `Secure your brand’s legal foundation through our comprehensive trademark services. From initial discovery to long-term portfolio growth, 
    we provide the strategic framework necessary to protect your identity in any market.`,
    items = [
        {
            title: "Pre-clearance & Risk Assessment",
            desc:
                "Mitigate legal risk with exhaustive availability checks. We ensure your brand name and logo are unique and protectable within your target jurisdictions before investment.",
        },
        {
            title: "Strategic Global Registration",
            desc:
                "Execute coordinated trademark applications across 100+ countries. Our team manages the complexities of local regulations to ensure seamless multi-jurisdictional filing.",
        },
        {
            title: "International Expansion via the Madrid System",
            desc:
                "Leverage the WIPO Madrid System for centralized, cost-effective brand protection. Extend your reach across 130+ member countries through a single, streamlined application",
        },
        {
            title: "Strategic Portfolio Management",
            desc:
                "Maintain absolute control over your global assets. Our proactive oversight includes continuous monitoring for potential infringements and automated management of renewal deadlines    ",
        },
    ],
}: Props) {
    const [first, ...rest] = heading.split(" ");
    const tail = rest.join(" ");

    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8 md:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
                {/* LEFT: sticky header (only sticks on md+) */}
                <div className="md:col-span-5 lg:col-span-5 md:sticky md:top-24 self-start">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-ptsans font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        {eyebrow.toUpperCase()}
                    </div>

                    <h2 className="font-euclid text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight text-[#1F2A44]">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h2>

                    <p className="font-ptsans mt-4 max-w-prose text-[15.5px] sm:text-[16.5px] leading-7 text-[#2B3852]/90">
                        {intro}
                    </p>
                </div>

                {/* RIGHT: service cards */}
                <div className="md:col-span-7 lg:col-span-7">
                    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                        {items.map((it, i) => (
                            <GradientCard key={i} title={it.title} desc={it.desc} index={i + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Subcomponents ---------- */

function GradientCard({ title, desc, index }: { title: string; desc: string; index: number }) {
    return (
        <div className="group rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] p-[1px]">
            <article className="h-full rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(11,19,32,0.06)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="mb-3 flex items-center gap-3">
                    <Badge index={index} />
                    <h3 className="font-euclid text-[18px] sm:text-[20px] leading-snug text-[#1F2A44]">
                        {title}
                    </h3>
                </div>
                <p className="font-ptsans text-[14.5px] sm:text-[15px] leading-relaxed text-[#2B3852]/85">
                    {desc}
                </p>
                {/* spacer to normalize card heights if needed */}
                <div className="mt-2" />
            </article>
        </div>
    );
}

function Badge({ index }: { index: number }) {
    return (
        <div className="relative">
            <span
                className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-sm font-euclid font-semibold text-[#1F2A44]"
                style={{
                    background: `linear-gradient(135deg, ${KA.maroon}1A, ${KA.purple}1A)`,
                    border: "1px solid #E6E8EC",
                }}
            >
                {index}
            </span>
            <span
                className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full"
                style={{
                    background: "radial-gradient(circle at 30% 30%, #7F2B38, #4D1475)",
                    boxShadow: "0 0 0 2px #fff",
                }}
            />
        </div>
    );
}
