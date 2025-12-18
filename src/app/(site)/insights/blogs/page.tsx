// /src/app/(site)/insights/blogs/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { Metadata } from "next";

// ---------- SEO ----------
export const metadata: Metadata = {
    title: "Insights & Updates — KA Global IP Blog",
    description:
        "Attorney-authored insights on patents, trademarks, renewals, recordals, and IP operations.",
};

// ---------- Types ----------
export type BlogMeta = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;       // ISO (YYYY-MM-DD)
    tags: string[];
    author: string;
    readMins: number;
};

// ---------- Helpers ----------
const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");

function formatDate(iso: string) {
    const dt = new Date(iso);
    return dt.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

function getAllBlogs(): BlogMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        const source = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(source);

        const meta = data as Partial<Omit<BlogMeta, "slug">>;
        return {
            slug: file.replace(/\.mdx$/, ""),
            title: meta.title ?? "Untitled",
            excerpt: meta.excerpt ?? "",
            date: meta.date ?? "1970-01-01",
            tags: Array.isArray(meta.tags) ? meta.tags : [],
            author: meta.author ?? "KA Global IP Team",
            readMins: Number(meta.readMins ?? 5),
        } as BlogMeta;
    });

    // Newest first
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
}

// ---------- Page ----------
export default function BlogsPage() {
    const blogs = getAllBlogs();

    return (
        <div className="bg-[#f3f3f4]">
            {/* Hero */}
            <section className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,#7F2B38_0%,#4D1475_100%)] opacity-95" />
                <div className="mx-auto max-w-7xl px-6 py-16 text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Insights & Updates</h1>
                    <p className="mt-4 text-base md:text-lg text-white/90">
                        Practical IP strategy, fees, prosecution tips, and automation notes.
                    </p>
                    <div className="mt-6">
                        <a
                            href="#latest"
                            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 transition hover:bg-white/15"
                        >
                            Browse latest posts →
                        </a>
                    </div>
                </div>
            </section>

            {/* Blog grid (no images) */}
            <section id="latest" className="mx-auto max-w-7xl px-6 py-12">
                {blogs.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
                        No posts yet. Add <code className="font-mono">.mdx</code> files under
                        {" "}
                        <code className="font-mono">/src/content/blogs</code>.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/insights/blogs/${post.slug}`}
                                className="group block rounded-2xl bg-white ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
                                aria-label={`Read: ${post.title}`}
                            >
                                <div className="flex flex-col justify-between h-full p-5">
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
                                    <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>

                                    {/* Divider */}
                                    <div className="my-4 h-px bg-gray-100" />

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span className="font-medium text-gray-700">{post.author}</span>
                                        <span>
                                            {formatDate(post.date)} • {post.readMins} min read
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
