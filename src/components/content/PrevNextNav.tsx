import Link from "next/link";

export default function PrevNextNav({
    prev,
    next,
}: {
    prev?: { slug: string; title: string };
    next?: { slug: string; title: string };
}) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-5">
                <div className="text-xs text-gray-500 mb-1">Previous</div>
                {prev ? (
                    <Link href={`/insights/blogs/${prev.slug}`} className="font-medium text-[#4D1475] hover:underline">
                        {prev.title}
                    </Link>
                ) : (
                    <div className="text-gray-400 text-sm">—</div>
                )}
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-5 text-right">
                <div className="text-xs text-gray-500 mb-1">Next</div>
                {next ? (
                    <Link href={`/insights/blogs/${next.slug}`} className="font-medium text-[#4D1475] hover:underline">
                        {next.title}
                    </Link>
                ) : (
                    <div className="text-gray-400 text-sm">—</div>
                )}
            </div>
        </div>
    );
}
