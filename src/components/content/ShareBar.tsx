"use client";
import { useState } from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";

export default function ShareBar({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== "undefined" ? window.location.href : "";

    async function copy() {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    }

    async function webShare() {
        try {
            if (navigator.share) await navigator.share({ title, url });
            else copy();
        } catch { }
    }

    return (
        <div className="flex flex-wrap items-center gap-3 text-sm">
            <button
                onClick={webShare}
                className="inline-flex items-center gap-2 rounded-xl bg-[#4D1475] px-3 py-2 text-white hover:opacity-95"
            >
                <Share2 className="size-4" /> Share
            </button>
            <button
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
            >
                {copied ? <Check className="size-4" /> : <LinkIcon className="size-4" />}
                {copied ? "Copied" : "Copy link"}
            </button>
        </div>
    );
}
