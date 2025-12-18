"use client";

import { useCallback, useRef, useState } from "react";
import { Playfair_Display, PT_Sans } from "next/font/google";
import { UploadCloud, PieChart, Search, PiggyBank, Lightbulb } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const inputBase =
    "w-full rounded-xl border border-[#D0D5DD] bg-[#F9FAFB] px-4 py-3 text-[15px] text-[#0B1320] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#900C3F] focus:border-[#900C3F]";

function Field({
    label,
    required,
    children,
    hint,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
    hint?: string;
}) {
    return (
        <label className="block">
            <div className="mb-1.5 flex items-center gap-1.5">
                <span className={`${ptsans.className} text-sm font-medium text-[#101828]`}>{label}</span>
                {required && <span className="text-[#E11D48]">*</span>}
            </div>
            <div className="relative">{children}</div>
            {hint && <p className={`${ptsans.className} mt-1 text-xs text-[#667085]`}>{hint}</p>}
        </label>
    );
}

export default function CalculatorPage() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const [email, setEmail] = useState("");
    const [fileName, setFileName] = useState<string | null>(null); // ✅ NEW
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [msg, setMsg] = useState<string | null>(null);

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files?.length && fileInputRef.current) {
            fileInputRef.current.files = files;
            setFileName(files[0].name); // ✅ show filename when dropped
        }
    }, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setMsg(null);

        const fileEl = fileInputRef.current;
        const file = fileEl?.files?.[0];

        if (!email) {
            setMsg("Please enter email.");
            return;
        }

        if (!file) {
            setMsg("Please upload a file.");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("file", file);

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/send-renewal-estimate", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Failed to send");

            setMsg("Uploaded and sent to KA Global IP. You will get the estimate.");
            setFileName(null); // reset filename
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch {
            setMsg("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="w-full bg-white">
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-12 md:gap-16 md:py-16">
                {/* LEFT COLUMN */}
                <div className="md:col-span-6">
                    <h1 className={`${playfair.className} text-4xl leading-tight text-[#0B1320] md:text-5xl`}>
                        <span className="bg-gradient-to-r from-[#900C3F] to-[#0B1320] bg-clip-text font-bold text-transparent">
                            Free
                        </span>{" "}
                        IP Renewal Cost Calculator
                    </h1>

                    <p className={`${ptsans.className} mt-6 text-[17px] leading-7 text-[#334155]`}>
                        Get a clear, accurate view of patent renewal costs and benchmark your current spend—powered by
                        KA&nbsp;Global&nbsp;IP’s global annuity expertise.
                    </p>
                    <p className={`${ptsans.className} mt-3 text-[17px] leading-7 text-[#334155]`}>
                        Works for any portfolio size, in any jurisdiction.
                    </p>

                    <ul className="mt-10 space-y-6">
                        {[
                            { text: "Get an overview of optimal IP renewal costs", Icon: PieChart },
                            { text: "Spot inefficiencies or unnecessary fees in your current setup", Icon: Search },
                            { text: "Support internal budgeting & forecasting", Icon: PiggyBank },
                            { text: "Make informed IP decisions without commitment", Icon: Lightbulb },
                        ].map(({ text, Icon }) => (
                            <li key={text} className="flex items-center gap-4">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C4B5FD] to-[#A78BFA]">
                                    <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                                </span>
                                <p className={`${ptsans.className} text-[16px] font-semibold leading-6 text-[#0B1320]`}>{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-6">
                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <h2 className={`${ptsans.className} mb-4 text-lg font-semibold text-[#0B1320]`}>
                            Upload for Multiple Estimates
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <Field label="Email" required>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className={inputBase}
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Field>

                            <p className={`${ptsans.className} -mt-2 text-sm text-[#6B7280]`}>
                                We will send the calculated renewal estimates to this email.
                            </p>

                            {/* Upload box */}
                            <div
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setDragOver(true);
                                }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={onDrop}
                                className={`rounded-xl border p-10 text-center transition ${dragOver ? "border-[#900C3F] bg-[#FFF7F9]" : "border-[#E5E7EB] bg-[#FAFBFC]"
                                    }`}
                            >
                                <UploadCloud className="mx-auto h-10 w-10 text-[#9CA3AF]" />
                                <p className={`${ptsans.className} mt-3 text-[#6B7280]`}>
                                    Drag file here or{" "}
                                    <button
                                        type="button"
                                        className="font-semibold text-[#900C3F] underline-offset-2 hover:underline"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        upload
                                    </button>
                                </p>
                                <p className={`${ptsans.className} mt-1 text-xs text-[#94A3B8]`}>
                                    Accepted: .csv, .xlsx, .xls
                                </p>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".csv,.xlsx,.xls"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        setFileName(file ? file.name : null); // ✅ show filename when selected
                                    }}
                                />
                                {/* ✅ Show uploaded filename */}
                                {fileName && (
                                    <p className={`${ptsans.className} mt-4 text-sm font-medium text-[#0B1320]`}>
                                        Uploaded file: <span className="text-[#900C3F]">{fileName}</span>
                                    </p>
                                )}
                            </div>

                            <div className="mt-4 flex items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-md bg-[#900C3F] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#900C3F] focus-visible:ring-offset-2 disabled:opacity-60"
                                >
                                    {isSubmitting ? "Sending..." : "Get Estimate"}
                                </button>
                            </div>

                            {msg && <p className={`${ptsans.className} text-sm text-[#0F172A]`}>{msg}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
