import {
  json,
  type LoaderFunction,
  type ActionFunction,
} from "@remix-run/node";
import { useLoaderData, Form, useNavigation } from "@remix-run/react";
import nodemailer from "nodemailer";
import { useAuth } from "~/context/AuthContext";

// Mock event data
const events = {
  hikari: {
    id: "hikari",
    title: "Hikari no Matsuri",
    rules: [
      "Bring your college ID card",
      "No outside food allowed",
      "Follow dress code: traditional or semi-formal",
    ],
    payment: "₹200 registration fee. Pay via UPI: hikari@upi",
  },
  cosplay: {
    id: "cosplay",
    title: "Cosplay Contest",
    rules: [
      "Costume must be original or handmade",
      "Time limit: 3 min stage walk",
      "No harmful props allowed",
    ],
    payment: "₹100 entry fee. Pay via UPI: cosplay@upi",
  },
};

export const loader: LoaderFunction = async ({ params }) => {
  const event = events[params.eventId || ""];
  if (!event) throw new Response("Event not found", { status: 404 });
  return json(event);
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const eventName = formData.get("eventName");

  if (!email || !eventName) {
    return json({ ok: false, message: "Missing data" }, { status: 400 });
  }

  // ⚡️ Example: Send mail using Nodemailer
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Hikari Club" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Registration Confirmation for ${eventName}`,
    html: `<h1>Thank you for registering!</h1>
           <p>You are registered for <strong>${eventName}</strong>.</p>
           <p>Please pay the fee as mentioned on the event page to confirm your spot.</p>`,
  });

  return json({ ok: true });
};

export default function EventDetails() {
  const { user } = useAuth();
  const { title, rules, payment } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <main className="px-8 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <h2 className="text-xl font-semibold mb-2">Rules:</h2>
      <ul className="mb-4 list-disc list-inside">
        {rules.map((rule: string, i: number) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Payment:</h2>
      <p className="mb-6">{payment}</p>

      {user ? (
        <Form method="post">
          <input type="hidden" name="email" value={user.email || ""} />
          <input type="hidden" name="eventName" value={title} />
          <button
            type="submit"
            disabled={navigation.state === "submitting"}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full uppercase font-mono"
          >
            {navigation.state === "submitting"
              ? "Registering..."
              : "Register Now"}
          </button>
        </Form>
      ) : (
        <p className="text-red-500">Please login to register.</p>
      )}
    </main>
  );
}
