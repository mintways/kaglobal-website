import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const email = formData.get("email");
        const file = formData.get("file") as File | null;

        if (!email) {
            return NextResponse.json({ error: "Email missing" }, { status: 400 });
        }

        if (!file) {
            return NextResponse.json({ error: "File missing" }, { status: 400 });
        }

        // convert File -> Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.RENEWAL_SMTP_HOST,
            port: Number(process.env.RENEWAL_SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.RENEWAL_SMTP_USER, // full email
                pass: process.env.RENEWAL_SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"KA Global IP Form" <${process.env.RENEWAL_SMTP_USER}>`,
            to: "file@kaglobalip.com",
            subject: "New Renewal Estimate Upload",
            text: `A user submitted a renewal estimate request.\n\nUser email: ${email}`,
            html: `<p>A user submitted a renewal estimate request.</p>
             <p><strong>User email:</strong> ${email}</p>`,
            attachments: [
                {
                    filename: file.name,
                    content: buffer,
                },
            ],
        });

        return NextResponse.json({ ok: true, messageId: info.messageId });
    } catch (err: any) {
        console.error("Email send error:", err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
