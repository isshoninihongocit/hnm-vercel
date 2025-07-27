import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Cancellation & Refund Policy - Hikari no Matsuri" }];
};

export default function Cancellation() {
  return (
    <div className="p-8 text-neutral-100 bg-black font-sans leading-relaxed max-w-3xl mx-auto">
      <h1 className="text-3xl mb-4 font-bold">Cancellation & Refund Policy</h1>
      <p>Please read this policy carefully before purchasing.</p>

      <h2 className="text-xl mt-6 font-semibold">Ticket Cancellation</h2>
      <p>
        Once purchased, tickets are non-cancellable and non-refundable except in
        the case of event cancellation by the organizer.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Event Cancellation</h2>
      <p>
        If the event is cancelled by us, full refunds will be processed
        automatically to the original payment method within 7-10 working days.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Contact</h2>
      <p>
        For any refund requests or questions, contact us at
        japaneseclub@citchennai.net
      </p>
    </div>
  );
}
