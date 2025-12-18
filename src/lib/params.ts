// /src/lib/params.ts
export type RouteParams = Record<string, string>;

function isPromise<T>(v: T | Promise<T>): v is Promise<T> {
    return !!v && typeof (v as any).then === "function";
}

/** Unwraps Next.js route params whether they are a plain object or a Promise (Next 15). */
export async function unwrapParams<P extends RouteParams>(
    params: P | Promise<P>
): Promise<P> {
    return isPromise(params) ? await params : params;
}

/**
 * Get a single param as a string (decoded/trimmed by default).
 * Keeps typing simple to avoid T[K] inference issues.
 */
export async function getParam(
    params: RouteParams | Promise<RouteParams>,
    key: string,
    opts: { decode?: boolean; trim?: boolean } = {}
): Promise<string> {
    const { decode = true, trim = true } = opts;
    const p = await unwrapParams(params);
    // Access through a simple index signature to guarantee string
    let value = (p as Record<string, string>)[key] ?? "";
    if (decode) value = decodeURIComponent(value);
    if (trim) value = value.trim();
    return value;
}
