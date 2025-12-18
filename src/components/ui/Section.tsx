"use client";
import * as React from "react";

type SectionProps<E extends React.ElementType = "section"> = {
    as?: E;
    className?: string;
    padded?: boolean;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className" | "children">;

// tiny className joiner (avoids clsx)
function cx(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

export default function Section<E extends React.ElementType = "section">(
    props: SectionProps<E>
) {
    const {
        as,
        className,
        padded = true,
        children,
        ...rest
    } = props;

    const Component = (as ?? "section") as React.ElementType;

    return (
        <Component className={cx("w-full", className)} {...rest}>
            <div className={cx("mx-auto max-w-7xl", padded && "px-6 py-16 sm:py-20")}>
                {children}
            </div>
        </Component>
    );
}
