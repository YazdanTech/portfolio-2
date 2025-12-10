import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "Missing fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            replyTo: email,
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return Response.json({ error: "Email failed" }, { status: 500 });
    }
}