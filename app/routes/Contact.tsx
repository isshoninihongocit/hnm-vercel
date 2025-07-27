import { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Contact - Hikari no Matsuri" },
    { name: "description", content: "Contact Hikari no Matsuri (HNM)" },
  ];
};

export default function Contact() {
  return (
    <div className="bg-black text-white font-mono flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border-b border-[#dc2626]">
        {/* Contact Info */}
        <div>
          <p className="text-3xl font-bold font-hnm text-[#dc2626]">
            // CONTACT US AT
          </p>
          <p className="text-gray-400 mt-4">japaneseclub@citchennai.net</p>
        </div>
        <div>
          <p className="text-3xl font-semibold font-hnm text-[#dc2626]">
            // OUR SOCIALS
          </p>
          <div className="space-x-6 text-gray-400 mt-4">
            <a
              href="https://www.instagram.com/_isshoni_nihongo_?igsh=MmE2bWZ5eXJvOWs0"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              href="https://discord.gg/hnmfestival"
              target="_blank"
              rel="noreferrer"
            >
              DISCORD
            </a>
          </div>
        </div>
      </div>
      <footer className="text-xs flex flex-col  md:flex-row md:justify-between items-center px-4 py-6 border-t border-neutral-800 gap-4">
        <div className="flex flex-wrap justify-center gap-4 text-gray-400">
          <a href="/terms" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/shipping" className="hover:underline">
            Shipping Policy
          </a>
          <a href="/cancellation" className="hover:underline">
            Cancellation & Refunds
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-neutral-500">
          <p>© HIKARI NO MATSURI 2025</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}
