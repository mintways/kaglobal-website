export default function AuthorCard({
    name = "KA Global IP Team",
    role = "Attorneys & Engineers",
}: { name?: string; role?: string }) {
    return (
        <aside className="rounded-2xl bg-white ring-1 ring-gray-200 p-5">
            <div className="text-sm text-gray-600">Written by</div>
            <div className="mt-1 font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{role}</div>
        </aside>
    );
}
