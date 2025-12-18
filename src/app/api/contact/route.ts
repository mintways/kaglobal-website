// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        // 1️⃣ Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        // 2️⃣ Configure SMTP transporter (use your provider or Gmail app password)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for others
            auth: {
                user: process.env.SMTP_USER || "support@kaglobalip.com",
                pass: process.env.SMTP_PASS, // use app-specific password, not your Gmail password
            },
        });

        // 3️⃣ Define email content
        const mailOptions = {
            from: `"KA Global IP Website" <${process.env.SMTP_USER || "support@kaglobalip.com"}>`,
            to: "support@kaglobalip.com", // ✅ all messages go here
            subject: subject
                ? `[Contact Form] ${subject}`
                : "New Contact Form Submission",
            replyTo: email,
            text: `
New contact form submission from the KA Global IP website:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${message}
      `,
        };

        // 4️⃣ Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("❌ Email send failed:", err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
