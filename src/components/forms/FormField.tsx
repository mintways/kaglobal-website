import React from "react";

type Props = {
    label: string;
    name: string;
    type?: string;
    textarea?: boolean;
    required?: boolean;
    rows?: number;
    placeholder?: string;
};

export default function FormField({
    label,
    name,
    type = "text",
    textarea = false,
    required,
    rows = 4,
    placeholder = "",
}: Props) {
    return (
        <label className="block">
            <span className="font-ptsans text-[13px] text-[#585A5D]">{label}</span>
            {textarea ? (
                <textarea
                    name={name}
                    required={required}
                    rows={rows}
                    className="mt-1 w-full rounded-xl border border-[#E6E8EC] bg-white px-3 py-2.5 text-[15px] text-[#2E2E3B] outline-none placeholder:text-[#9AA3AF] focus:border-[#CBB5D7] focus:ring-2 focus:ring-[#E5D6ED]"
                    placeholder={placeholder || "Write your message…"}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required={required}
                    className="mt-1 w-full rounded-xl border border-[#E6E8EC] bg-white px-3 py-2.5 text-[15px] text-[#2E2E3B] outline-none placeholder:text-[#9AA3AF] focus:border-[#CBB5D7] focus:ring-2 focus:ring-[#E5D6ED]"
                    placeholder={placeholder}
                />
            )}
        </label>
    );
}
