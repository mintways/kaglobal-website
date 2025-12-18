import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import ProseKA from "@/components/content/ProseKA";
import Toc from "@/components/content/Toc";
import ShareBar from "@/components/content/ShareBar";
import AuthorCard from "@/components/content/AuthorCard";
import PrevNextNav from "@/components/content/PrevNextNav";
import RelatedPosts from "@/components/content/RelatedPosts";
import ProgressBar from "@/components/content/ProgressBar";

// --- utils ---
const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");
function formatDate(iso?: string) {
    if (!iso) return "";
    const dt = new Date(iso);
    return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

// Next 15: params may be a Promise — unwrap safely
async function getSlug(params: { slug: string } | Promise<{ slug: string }>) {
    const p = typeof (params as any).then === "function" ? await params : (params as any);
    return decodeURIComponent((p?.slug || "").trim());
}

type Meta = {
    title: string;
    excerpt?: string;
    date?: string;
    tags?: string[];
    author?: string;
    readMins?: number;
};

export async function generateStaticParams() {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string } | Promise<{ slug: string }>;
}) {
    const slug = await getSlug(params);
    const fp = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(fp)) return {};
    const { data } = matter(fs.readFileSync(fp, "utf-8"));
    const m = data as Meta;
    return {
        title: `${m.title} — KA Global IP Blog`,
        description: m.excerpt,
    };
}

export default async function BlogPost({
    params,
}: {
    params: { slug: string } | Promise<{ slug: string }>;
}) {
    const slug = await getSlug(params);
    if (!slug) return notFound();

    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return notFound();

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);
    const meta = data as Meta;

    // Load all posts for prev/next + related
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    const all = files
        .map((f) => {
            const s = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
            const { data: d } = matter(s);
            return {
                slug: f.replace(/\.mdx$/, ""),
                title: (d as any).title ?? "Untitled",
                date: (d as any).date ?? "1970-01-01",
                tags: ((d as any).tags ?? []) as string[],
                excerpt: (d as any).excerpt ?? "",
            };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    const idx = all.findIndex((p) => p.slug === slug);
    const prev = all[idx + 1] ? { slug: all[idx + 1].slug, title: all[idx + 1].title } : undefined;
    const next = all[idx - 1] ? { slug: all[idx - 1].slug, title: all[idx - 1].title } : undefined;

    const myTags = new Set((meta.tags ?? []).map(String));
    const related = all.filter((p) => p.slug !== slug && p.tags.some((t) => myTags.has(t))).slice(0, 4);

    return (
        <article className="bg-[#f3f3f4] min-h-screen">
            {/* Reading progress */}
            <ProgressBar />

            {/* Gradient hero */}
            <header className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,#7F2B38_0%,#4D1475_100%)]" />
                <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-white">
                    <nav className="mb-5 text-sm text-white/80">
                        <a href="/insights/blogs" className="hover:underline">Insights</a>
                        <span className="mx-2">/</span>
                        <span className="text-white/90 line-clamp-1">{meta.title}</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">{meta.title}</h1>
                    {meta.excerpt && (
                        <p className="mt-4 text-white/90 text-lg leading-8">{meta.excerpt}</p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
                        {meta.date && <span>{formatDate(meta.date)}</span>}
                        {meta.readMins ? <span>• {meta.readMins} min read</span> : null}
                        {meta.tags?.length ? (
                            <span className="hidden md:inline-flex gap-1">
                                {meta.tags.map((t) => (
                                    <span key={t} className="rounded-full bg-white/15 px-2 py-0.5 text-xs">{t}</span>
                                ))}
                            </span>
                        ) : null}
                    </div>
                </div>
            </header>

            {/* Content layout */}
            <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(260px,300px)] gap-8">
                {/* Main column */}
                <div>
                    {/* Glass card */}
                    <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm">
                        <div className="p-6 md:p-8">
                            <ProseKA>
                                <MDXRemote
                                    source={content}
                                    options={{
                                        mdxOptions: {
                                            remarkPlugins: [remarkGfm],
                                            rehypePlugins: [
                                                rehypeSlug,
                                                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                                            ],
                                        },
                                    }}
                                />
                            </ProseKA>

                            {/* Share */}
                            <div className="mt-10">
                                <ShareBar title={meta.title} />
                            </div>
                        </div>
                    </div>

                    {/* Author + Prev/Next */}
                    <div className="mt-8 grid gap-6 md:grid-cols-[320px_1fr]">
                        <AuthorCard
                            name={meta.author || "KA Global IP Team"}
                            role="Attorneys & Engineers"
                        />
                        <PrevNextNav prev={prev} next={next} />
                    </div>

                    {/* Related */}
                    <RelatedPosts posts={related} className="mt-10" />
                </div>

                {/* Sidebar: TOC */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24 space-y-4">
                        <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-5">
                            <div className="text-xs font-semibold text-gray-500 mb-2">On this page</div>
                            <Toc />
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}
