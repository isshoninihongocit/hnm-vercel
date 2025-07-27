import { MetaFunction } from "@remix-run/node";
import { Timeline } from "../components/ui/timeline";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Isshoni Nihongo Club" },
    {
      name: "description",
      content:
        "Learn about Isshoni Nihongo, our Japanese language club dedicated to cultural exchange, fun events, and Japanese learning for all levels!",
    },
  ];
};

export default function About() {
  const data = [
    {
      title: "2022 - Our Beginning",
      content: (
        <div>
          <p className="mb-4 text-sm text-white dark:text-white">
            _Isshoni Nihongo_ was born with a vision to connect students who
            love Japanese language & culture. Our Instagram handle{" "}
            <a
              href="https://instagram.com/isshoni_nihongo_"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              @isshoni_nihongo_
            </a>{" "}
            started to share daily phrases, kanji tips, and club updates.
          </p>
          <img
            src="/ingo.png"
            alt="Isshoni Nihongo Club Start"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      ),
    },
    {
      title: "2023 - Cultural Events",
      content: (
        <div>
          <p className="mb-4 text-sm text-white">
            We organized our first Japanese Festival event with language
            workshops, anime quizzes, and traditional games. The community kept
            growing with new members joining every month!
          </p>
          <img
            src="/nns.png"
            alt="2023 Event"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      ),
    },
    {
      title: "2024 - Event ",
      content: (
        <div>
          <p className="mb-4 text-sm text-white">
            Today, Isshoni Nihongo is more than just an Instagram page — it’s a
            close-knit family learning together through meetups, online lessons,
            and big cultural festivals like <strong>Hikari no Matsuri</strong>.
          </p>
          <img
            src="/hnmmain.jpg"
            alt="Hikari no Matsuri"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      ),
    },
    {
      title: "2025 - Expanding Horizons",
      content: (
        <div>
          <p className="mb-4 text-sm text-white">
            Today, Isshoni Nihongo is more than just an Instagram page — it’s a
            close-knit family learning together through meetups, online lessons,
            and big cultural festivals like <strong>Hikari no Matsuri</strong>.
          </p>
          <img
            src="/hnm2.png"
            alt="Hikari no Matsuri"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-12 font-hnm dark:bg-[#dc2626] dark:text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold uppercase tracking-wider text-[#dc2626]">
          About Us
        </h1>
        <p className="mb-8 text-2xl max-w-2xl text-white">
          _Isshoni Nihongo_ is your friendly Japanese language club. We share
          daily learning tips, organize cultural events, and build a community
          where everyone learns together — one word at a time. Follow us on{" "}
          <a
            href="https://instagram.com/isshoni_nihongo_"
            target="_blank"
            rel="noreferrer"
            className="text-blue-900 underline"
          >
            Instagram
          </a>{" "}
          for updates!
        </p>

        <Timeline data={data} />
      </div>
    </section>
  );
}
