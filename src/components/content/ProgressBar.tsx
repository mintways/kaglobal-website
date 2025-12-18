"use client";
import { useState, useEffect } from "react";

export default function ProgressBar() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scroll = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            setWidth((scroll / height) * 100);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
            <div
                className="h-1 bg-gradient-to-r from-[#7F2B38] to-[#4D1475] transition-all duration-150"
                style={{ width: `${width}%` }}
            />
        </div>
    );
}
