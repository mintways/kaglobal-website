// "use client";

// import React from "react";

// const KA = {
//     maroon: "#7F2B38",
//     purple: "#4D1475",
//     text: "#1F2A44",
//     muted: "#2B3852",
// };

// const LEADERS = [
//     {
//         n: "Nilanshu Shekhar",
//         r: "Founding Partner",
//         b: "IP researcher-turned-attorney leading global strategy and client success.",
//         img: "", // add /images/team/nilanshu.jpg
//         badges: ["Strategy", "Client Success"],
//     },
//     {
//         n: "Ashutosh",
//         r: "Attorney & Patent Agent",
//         b: "Corporate & commercial specialist—agreements, compliance, and governance.",
//         img: "", // add /images/team/ashutosh.jpg
//         badges: ["Corp & Commercial", "Patent Agent"],
//     },
//     {
//         n: "Global Counsel",
//         r: "Of Counsel",
//         b: "Network of domain experts supporting cross-border matters and appeals.",
//         img: "", // placeholder or group image
//         badges: ["Cross-Border", "Appeals"],
//     },
// ];

// // fallback initials avatar
// const Initials = ({ name }: { name: string }) => {
//     const initials = name
//         .split(" ")
//         .map((p) => p[0])
//         .slice(0, 2)
//         .join("")
//         .toUpperCase();
//     return (
//         <div className="flex h-full w-full items-center justify-center text-white">
//             <span className="text-xl font-semibold tracking-wide">{initials}</span>
//         </div>
//     );
// };

// export default function Leadership() {
//     return (
//         <section className="relative overflow-hidden bg-white">
//             {/* soft brand glows */}
//             {/* <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#7F2B38]/10 blur-3xl" /> */}
//             {/* <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4D1475]/10 blur-3xl" /> */}

//             <div className="relative mx-auto max-w-7xl px-6 py-16">
//                 {/* header */}
//                 <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
//                     <div>
//                         <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm">
//                             <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
//                             LEADERSHIP
//                         </div>
//                         <h2 className="mt-3 text-3xl font-euclid font-semibold leading-tight md:text-4xl">
//                             <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
//                                 People Who Lead the Work
//                             </span>
//                         </h2>
//                     </div>
//                     <a
//                         href="/about/team"
//                         className="rounded-2xl border border-[#4D1475] px-4 py-2 text-sm font-medium text-[#4D1475] transition hover:bg-[#4D1475] hover:text-white"
//                     >
//                         Meet the team
//                     </a>
//                 </div>

//                 {/* cards */}
//                 <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
//                     {LEADERS.map((m) => (
//                         <article
//                             key={m.n}
//                             className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
//                         >
//                             {/* gradient edge on hover */}
//                             <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(180deg,rgba(127,43,56,0.12),rgba(77,20,117,0.12))]" />

//                             {/* media */}
//                             <div className="relative h-44 w-full overflow-hidden rounded-2xl">
//                                 {/* gradient frame */}
//                                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7F2B38]/20 via-white to-[#4D1475]/20" />
//                                 <div className="relative z-10 h-full w-full rounded-2xl bg-gray-100">
//                                     {m.img ? (
//                                         <img
//                                             src={m.img}
//                                             alt={m.n}
//                                             className="h-full w-full object-cover"
//                                             loading="lazy"
//                                         />
//                                     ) : (
//                                         <Initials name={m.n} />
//                                     )}
//                                 </div>
//                                 {/* subtle top glow */}
//                                 <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/60 blur-2xl" />
//                             </div>

//                             {/* content */}
//                             <div className="relative z-10 mt-4">
//                                 <h3 className="text-lg font-euclid font-semibold text-gray-900">{m.n}</h3>
//                                 <p className="text-sm font-euclid font-medium text-[#4D1475]">{m.r}</p>
//                                 <p className="mt-2 text-sm font-ptsans text-[#2B3852]">{m.b}</p>

//                                 {/* badges */}
//                                 <div className="mt-4 flex flex-wrap gap-2">
//                                     {m.badges?.map((t) => (
//                                         <span
//                                             key={t}
//                                             className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-ptsans text-gray-700 shadow-sm"
//                                         >
//                                             {t}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {/* bottom ribbon */}
//                                 <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
//                             </div>

//                             {/* shimmer sweep */}
//                             <span
//                                 aria-hidden
//                                 className="pointer-events-none absolute -top-8 left-1/3 h-20 w-2/3 -translate-x-1/2 rotate-[25deg] rounded-full bg-white/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
//                             />
//                         </article>
//                     ))}
//                 </div>
//             </div>

//             {/* reduced-motion safety */}
//             <style jsx global>{`
//         @media (prefers-reduced-motion: reduce) {
//           .hover\\:-translate-y-0\\.5:hover {
//             transform: none !important;
//           }
//         }
//       `}</style>
//         </section>
//     );
// }
