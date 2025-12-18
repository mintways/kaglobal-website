import Link from "next/link";

export default function RelatedPosts({
    posts,
    className = "",
}: {
    posts: { slug: string; title: string; excerpt?: string }[];
    className?: string;
}) {
    if (!posts?.length) return null;
    return (
        <section className={className}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related articles</h3>
            <div className="grid gap-4 sm:grid-cols-2">
                {posts.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/insights/blogs/${p.slug}`}
                        className="block rounded-2xl bg-white ring-1 ring-gray-200 p-5 hover:-translate-y-0.5 hover:shadow-md transition"
                    >
                        <div className="font-medium text-[#4D1475]">{p.title}</div>
                        {p.excerpt ? <div className="text-sm text-gray-600 mt-1 line-clamp-2">{p.excerpt}</div> : null}
                    </Link>
                ))}
            </div>
        </section>
    );
}
