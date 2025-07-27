import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Terms and Conditions - Hikari no Matsuri" }];
};

export default function Terms() {
  return (
    <div className="p-8 text-neutral-100 bg-black font-sans leading-relaxed max-w-3xl mx-auto">
      <h1 className="text-3xl mb-4 font-bold">Terms and Conditions</h1>
      <p>
        Welcome to Hikari no Matsuri. By registering, attending, or
        participating in our event, you agree to abide by these Terms and
        Conditions.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Event Rules</h2>
      <p>
        Attendees must follow all instructions provided by the organizers.
        Disruptive or inappropriate behavior will not be tolerated and may
        result in removal from the event without refund.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Tickets & Payments</h2>
      <p>
        All payments are final. Tickets are non-transferable without prior
        approval. Ensure your registration details are accurate.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Liability</h2>
      <p>
        Hikari no Matsuri is not responsible for personal items lost or damaged
        during the event. Attendees participate at their own risk.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Changes to Event</h2>
      <p>
        We reserve the right to modify event schedules or details. Significant
        changes will be communicated via email.
      </p>

      <h2 className="text-xl mt-6 font-semibold">Contact</h2>
      <p>For any questions, contact us at japaneseclub@citchennai.net</p>
    </div>
  );
}
