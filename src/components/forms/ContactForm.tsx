"use client";

import { useState } from "react";
import FormField from "./FormField";
import { getRecaptchaToken } from "@/components/recaptcha/recaptcha";

export default function ContactForm() {
    const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [msg, setMsg] = useState<string | null>(null);

    async function onSubmit(formData: FormData) {
        setState("loading");
        setMsg(null);

        // Honeypot
        if ((formData.get("company") as string)?.length) {
            setState("success");
            return;
        }

        try {

            // ✅ get v3 token (action must match server check)
            const recaptchaToken = await getRecaptchaToken("contact_form");
            
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    subject: formData.get("subject"),
                    message: formData.get("message"),
                    recaptchaToken,
                }),
            });

            if (!res.ok) throw new Error(await res.text());
            setState("success");
            setMsg("Thanks! Your message has been sent. We’ll get back to you shortly.");
            (document.getElementById("contact-form") as HTMLFormElement)?.reset();
        } catch {
            setState("error");
            setMsg("Something went wrong. Please email us at support@kaglobalip.com.");
        }
    }

    return (
        <form
            id="contact-form"
            className="space-y-4"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(new FormData(e.currentTarget));
            }}
            noValidate
        >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label="Full name" name="name" required />
                <FormField label="Email" name="email" type="email" required />
                <FormField label="Phone" name="phone" />
                <FormField label="Subject" name="subject" />
            </div>

            <FormField label="Message" name="message" textarea required rows={6} />

            {/* Honeypot (hidden) */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex items-center gap-3 pt-2">
                <button
                    type="submit"
                    disabled={state === "loading"}
                    className="font-ptsans inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/30 disabled:opacity-60"
                >
                    {state === "loading" ? "Sending…" : "Send message"}
                </button>
                <a
                    href="mailto:support@kaglobalip.com"
                    className="font-ptsans inline-flex items-center justify-center rounded-full border border-[#7F2B38] px-6 py-3 text-sm font-semibold text-[#2E2E2E] transition hover:bg-[#7F2B38]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/20"
                >
                    Email us
                </a>
            </div>

            {msg && (
                <p
                    className={`font-ptsans text-sm ${state === "success" ? "text-green-600" : "text-red-600"
                        }`}
                >
                    {msg}
                </p>
            )}
        </form>
    );
}
