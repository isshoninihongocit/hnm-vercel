import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Privacy Policy - Hikari no Matsuri" }];
};

export default function Privacy() {
  return (
    <div className="p-8 text-neutral-100 bg-black font-sans leading-relaxed max-w-3xl mx-auto">
      <h1 className="text-3xl mb-4 font-bold">Privacy Policy</h1>
      <p>
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your information.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Information We Collect</h2>
      <p>
        We may collect your name, email, phone number, and payment details when
        you register.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Use of Information</h2>
      <p>
        We use your information to process registrations, send event updates,
        and deliver tickets.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Data Security</h2>
      <p>
        We implement reasonable security measures to protect your data. Payments
        are securely processed through trusted gateways like Razorpay.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Third Parties</h2>
      <p>
        We do not sell your data. We may share it with partners strictly for
        event operations.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Contact</h2>
      <p>For privacy questions, email us at japaneseclub@citchennai.net</p>
    </div>
  );
}
