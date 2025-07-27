import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Shipping Policy - Hikari no Matsuri" }];
};

export default function Shipping() {
  return (
    <div className="p-8 text-neutral-100 bg-black font-sans leading-relaxed max-w-3xl mx-auto">
      <h1 className="text-3xl mb-4 font-bold">Shipping Policy</h1>
      <p>
        Hikari no Matsuri primarily delivers tickets and confirmations
        digitally.
      </p>

      <h2 className="text-xl mt-6 font-semibold">E-Tickets</h2>
      <p>
        All tickets and registration confirmations are sent via email after
        payment confirmation.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Physical Merchandise</h2>
      <p>
        If any physical merchandise is purchased, it will be shipped within 7
        working days. Shipping costs will be borne by the customer and notified
        during checkout.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Contact</h2>
      <p>For shipping inquiries, email japaneseclub@citchennai.net</p>
    </div>
  );
}
