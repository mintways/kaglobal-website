"use client";
import { Linkedin, Twitter, LinkIcon } from "lucide-react";
import { useState } from "react";

export default function ShareButtons({ slug, title }: { slug: string; title: string }) {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== "undefined" ? window.location.href : `https://kaglobalip.com/insights/blogs/${slug}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="mt-12 flex items-center gap-3 border-t border-gray-200 pt-6 text-sm">
            <span className="text-gray-500">Share:</span>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[#0077b5] hover:underline"
            >
                <Linkedin size={16} /> LinkedIn
            </a>
            <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[#1da1f2] hover:underline"
            >
                <Twitter size={16} /> X
            </a>
            <button onClick={handleCopy} className="inline-flex items-center gap-1.5 text-gray-600 hover:text-[#4D1475]">
                <LinkIcon size={15} /> {copied ? "Copied!" : "Copy Link"}
            </button>
        </div>
    );
}
