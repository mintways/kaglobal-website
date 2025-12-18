// =============================================================
// File: components/blog/MDXProvider.tsx (optional: map MDX -> KA styles)
// =============================================================

"use client";
import { ReactNode } from "react";

type MProps = { children: ReactNode };
export default function MDXProviderKA({ children }: MProps) {
  return <div className="prose max-w-none prose-h2:mt-10 prose-a:text-[#4D1475]">{children}</div>;
}

// =============================================================
// File: notes.txt (Implementation tips)
// =============================================================
// 1) Replace POSTS with a data source:
//    - MDX: place .mdx files in /content/blog and load via next-mdx-remote or contentlayer.
//    - CMS: Sanity/Hygraph/Strapi — fetch in the server component.
// 2) Images: add real assets under /public/images/blog and /public/images/authors.
// 3) SEO: metadata exports included. Add canonical in root layout if needed.
// 4) Accessibility: links have aria-labels; buttons have visible focus. Color contrast uses brand hues.
// 5) Analytics: wrap outbound links with your tracker. Keep SSR‑safe (no Date.now in render).
// 6) Tailwind v4: utilities used are standard — ensure typography plugin is enabled for .prose classes.
// 7) Pagination is static for mock data; wire to your data count when connected.