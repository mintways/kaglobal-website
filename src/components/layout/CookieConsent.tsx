"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [showPrefs, setShowPrefs] = useState(false);
    const STORAGE_KEY = "ka-cookie-consent";

    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: true, marketing: true }));
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: false, marketing: false }));
        setVisible(false);
    };

    const handleSavePrefs = (prefs: Record<string, boolean>) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t border-[#eee] font-ptsans">
            <div className="mx-auto max-w-7xl px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="sm:max-w-2xl text-[15px] leading-relaxed text-[#374151]">
                    <p>
                        We use cookies to enhance your browsing experience, analyze site traffic, and assist in
                        our marketing efforts. You can manage your preferences or accept all cookies.
                        For more info, see our{" "}
                        <a href="/cookies" className="underline underline-offset-2 text-[#7F2B38] hover:text-[#4D1475]">
                            Cookie Policy
                        </a>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                        onClick={handleReject}
                        className="rounded-full border border-[#7F2B38] px-4 py-2 text-sm font-semibold text-[#7F2B38] transition hover:bg-[#7F2B38] hover:text-white"
                    >
                        Reject Non-Essential
                    </button>
                    <button
                        onClick={() => setShowPrefs(true)}
                        className="rounded-full border border-[#4D1475] px-4 py-2 text-sm font-semibold text-[#4D1475] transition hover:bg-[#4D1475] hover:text-white"
                    >
                        Manage Preferences
                    </button>
                    <button
                        onClick={handleAccept}
                        className="rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
                    >
                        Accept All
                    </button>
                </div>
            </div>

            {showPrefs && <CookiePreferences onSave={handleSavePrefs} onClose={() => setShowPrefs(false)} />}
        </div>
    );
}

/* ---------- Preferences Modal ---------- */
function CookiePreferences({
    onSave,
    onClose,
}: {
    onSave: (prefs: Record<string, boolean>) => void;
    onClose: () => void;
}) {
    const [analytics, setAnalytics] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4 font-ptsans">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                <h2 className="font-playfair text-xl font-bold text-[#2E2E3B]">Cookie Preferences</h2>
                <p className="mt-2 text-[15px] text-[#555]">
                    Select which types of cookies you allow. You can update these preferences anytime.
                </p>

                <div className="mt-4 space-y-3">
                    <PreferenceToggle
                        label="Essential Cookies"
                        description="Required for basic site functionality and security."
                        checked={true}
                        disabled
                    />
                    <PreferenceToggle
                        label="Analytics Cookies"
                        description="Help us understand site usage to improve performance."
                        checked={analytics}
                        onChange={() => setAnalytics(!analytics)}
                    />
                    <PreferenceToggle
                        label="Marketing Cookies"
                        description="Used to deliver personalized ads and track campaigns."
                        checked={marketing}
                        onChange={() => setMarketing(!marketing)}
                    />
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave({ analytics, marketing })}
                        className="rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
}

function PreferenceToggle({
    label,
    description,
    checked,
    onChange,
    disabled = false,
}: {
    label: string;
    description: string;
    checked: boolean;
    onChange?: () => void;
    disabled?: boolean;
}) {
    return (
        <label
            className={`flex items-start gap-3 rounded-xl border p-3 transition ${disabled ? "bg-gray-50 border-gray-200 cursor-not-allowed" : "border-[#EAEAEA]"
                }`}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="mt-1 h-4 w-4 accent-[#7F2B38]"
            />
            <div>
                <p className="font-ptsans text-[15px] font-semibold text-[#2E2E3B]">{label}</p>
                <p className="text-[14px] text-[#555]">{description}</p>
            </div>
        </label>
    );
}
