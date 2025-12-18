// src/config/menus.ts
export type MenuItem = {
    label: string;
    href?: string;
    children?: { label: string; href: string }[];
};

export const MAIN_MENU: MenuItem[] = [
    {
        label: "About Us",
        href: "/about",
        children: [
            { label: "Who We Are", href: "/about" },
            { label: "Global Reach", href: "/about/global" },
            { label: "Our Team", href: "/about/team" },
            { label: "Careers", href: "/about/careers" },
        ],
    },
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "Patent", href: "/services/patent" },
            { label: "Trademark", href: "/services/trademark" },
            { label: "Design", href: "/services/design" },
            { label: "Copyright", href: "/services/copyright" },
        ],
    },
    {
        label: "Solutions",
        href: "/solutions",
        children: [
            { label: "Trademark Filing", href: "/solutions/trademark-filing" },
            { label: "Patent Renewals", href: "/solutions/patent-renewals" },
            { label: "Recordals", href: "/solutions/recordals" },
        ],
    },
    {
        label: "Expertise",
        href: "/expertise",
        children: [
            { label: "Strategic Advisory", href: "/expertise/strategic-advisory" },
            { label: "Research & Analytics", href: "/expertise/research-analytics" },
            { label: "Portfolio Management", href: "/expertise/portfolio-management" },
            { label: "Protection & Enforcement", href: "/expertise/protection-enforcement" },
            { label: "Monetisation & Licensing", href: "/expertise/monetisation-licensing" },
            { label: "Litigation Support", href: "/expertise/litigation-support" },
        ],
    },
    {
        label: "Insights",
        href: "/insights",
        children: [
            { label: "Blogs & Updates", href: "/insights/blogs" },
            { label: "Case Studies", href: "/insights/case-studies" },
            { label: "News & Recognition", href: "/insights/news" },
        ],
    },
    { label: "Contact Us", href: "/contact" },
];
