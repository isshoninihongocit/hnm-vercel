import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, name, code, event } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Hikari no Matsuri" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Event Registration Confirmation",
    text: `Hello ${name},

Thank you for registering for ${event} at Hikari no Matsuri!

Your unique code: ${code}

See you at the festival!`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ success: true });
}
