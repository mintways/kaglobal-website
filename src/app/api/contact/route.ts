// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyRecaptcha } from "@/lib/recaptchaServer";

/**
 * Simple in-memory rate limiter:
 * - limit: max requests per window per IP
 * - windowMs: window size in ms
 *
 */
const RATE_LIMIT = {
    limit: 8,          // 8 requests
    windowMs: 60_000,  // per 60 seconds
};

const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request) {
    // Most proxies provide x-forwarded-for. Take the first IP.
    const xff = req.headers.get("x-forwarded-for");
    if (xff) return xff.split(",")[0].trim();

    const realIp = req.headers.get("x-real-ip");
    if (realIp) return realIp.trim();

    return "unknown";
}

function rateLimit(ip: string) {
    const now = Date.now();
    const bucket = ipBuckets.get(ip);

    if (!bucket || now > bucket.resetAt) {
        ipBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
        return { ok: true, remaining: RATE_LIMIT.limit - 1, resetAt: now + RATE_LIMIT.windowMs };
    }

    bucket.count += 1;

    if (bucket.count > RATE_LIMIT.limit) {
        return { ok: false, remaining: 0, resetAt: bucket.resetAt };
    }

    return { ok: true, remaining: RATE_LIMIT.limit - bucket.count, resetAt: bucket.resetAt };
}

export async function POST(req: Request) {
    try {
        // ✅ 0) Rate limit first (before doing any heavy work)
        const ip = getClientIp(req);
        const rl = rateLimit(ip);

        if (!rl.ok) {
            const retryAfterSeconds = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000));
            return NextResponse.json(
                { error: "Too many requests. Please try again shortly." },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(retryAfterSeconds),
                    },
                }
            );
        }

        const { name, email, phone, subject, message, recaptchaToken } = await req.json();

        // 1️⃣ Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        // 2️⃣ reCAPTCHA required
        if (!recaptchaToken) {
            return NextResponse.json({ error: "Missing reCAPTCHA token." }, { status: 400 });
        }

        // 3️⃣ Verify reCAPTCHA (action must match client execute action)
        const v = await verifyRecaptcha(recaptchaToken, "contact_form");
        if (!v.ok) {
            return NextResponse.json(
                { error: "reCAPTCHA verification failed.", score: v.score },
                { status: 403 }
            );
        }

        // 4️⃣ Configure SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER || "support@kaglobalip.com",
                pass: process.env.SMTP_PASS,
            },
        });

        // 5️⃣ Define email content
        const mailOptions = {
            from: `"KA Global IP Website" <${process.env.SMTP_USER || "support@kaglobalip.com"}>`,
            to: "support@kaglobalip.com",
            subject: subject ? `[Contact Form] ${subject}` : "New Contact Form Submission",
            replyTo: email,
            text: `
New contact form submission from the KA Global IP website:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${message}

Meta:
IP: ${ip}
reCAPTCHA score: ${v.score ?? "N/A"}
      `.trim(),
        };

        // 6️⃣ Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("❌ Email send failed:", err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
