// Elegant, readable prose tuned for KA brand
export default function ProseKA({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={[
                "prose max-w-none",
                // Base text rhythm
                "prose-p:text-[17px] prose-p:leading-8 prose-p:text-gray-800",
                "prose-li:leading-8",
                // Headings
                "prose-h2:mt-10 prose-h2:text-[#4D1475] prose-h2:font-semibold prose-h2:text-2xl",
                "prose-h3:mt-8 prose-h3:text-[#4D1475] prose-h3:font-medium",
                // Links, code, quotes
                "prose-a:text-[#4D1475] hover:prose-a:underline",
                "prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md",
                "prose-blockquote:border-l-[#4D1475] prose-blockquote:text-gray-700",
                "prose-hr:my-10",
            ].join(" ")}
        >
            {children}
        </div>
    );
}
