import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: ["./src/**/*.{ts,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['var(--font-playfair)'],
                ptsans: ["var(--font-pt-sans)"],
            },
        },
    },
    plugins: [ typography ],
};
export default config;
