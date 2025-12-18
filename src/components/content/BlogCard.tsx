// /src/components/content/BlogCard.tsx
import Link from "next/link";

export type BlogMeta = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;      // ISO string (YYYY-MM-DD)
    tags: string[];
    author: string;
    readMins: number;
};

function formatDate(iso: string) {
    const dt = new Date(iso);
    return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogCard({ post }: { post: BlogMeta }) {
    return (
        <Link
            href={`/insights/blogs/${post.slug}`}
            className="group block rounded-2xl bg-white ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
            aria-label={`Read: ${post.title}`}
        >
            {/* Left accent + tag row */}
            <div className="flex items-start gap-3 p-5">
                {/* Accent stripe */}
                <div className="mt-0.5 h-10 w-1.5 shrink-0 rounded-full bg-[linear-gradient(180deg,#7F2B38_0%,#4D1475_100%)]" />
                <div className="min-w-0 flex-1">
                    {/* Tags */}
                    <div className="mb-2 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-[#4D1475]/10 px-2.5 py-1 text-[11px] font-medium text-[#4D1475]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-[#4D1475]">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-1 line-clamp-3 text-sm text-gray-600">
                        {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium text-gray-700">{post.author}</span>
                        <span aria-hidden>•</span>
                        <span>{formatDate(post.date)}</span>
                        <span aria-hidden>•</span>
                        <span>{post.readMins} min read</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
