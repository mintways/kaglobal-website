export async function verifyRecaptcha(token: string, expectedAction: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) throw new Error("Missing RECAPTCHA_SECRET_KEY");

    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", token);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
    });

    const data: any = await res.json();

    const score = typeof data?.score === "number" ? data.score : null;

    const ok =
        data?.success === true &&
        data?.action === expectedAction &&
        score !== null &&
        score >= 0.5; // start here; tune later

    return { ok, score, raw: data };
}
