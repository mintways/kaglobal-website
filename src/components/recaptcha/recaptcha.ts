declare global {
    interface Window {
        grecaptcha: any;
    }
}

export async function getRecaptchaToken(action: string): Promise<string> {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) throw new Error("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
    if (!window.grecaptcha) throw new Error("reCAPTCHA not loaded");

    return await window.grecaptcha.execute(siteKey, { action });
}
