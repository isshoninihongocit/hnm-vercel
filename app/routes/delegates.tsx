"use client";

import { motion } from "framer-motion";

type Delegate = {
  name: string;
  title: string;
  photo: string; // Path to photo
  bio: string;
};

const delegates: Delegate[] = [
  {
    name: "Mr. Muneo Takahashi",
    title: "Consul General of Japan, Chennai",
    photo: "csg.jpg",
    bio: "Mr. Tanaka brings over 25 years of experience strengthening Indo-Japanese cultural ties and economic collaboration.",
  },
  {
    name: "Ms. Ayumi Sato",
    title: "Director, Japan Foundation",
    photo: "/ays.jpg",
    bio: "Ms. Sato is dedicated to promoting Japanese language, arts, and cultural exchange programs in South India.",
  },
  {
    name: "Ms.Uma Maheswari Rajagopalan",
    title: "Professor, Shibaura Institute of Technology",
    photo: "/uma.jpg",
    bio: "A leading researcher and advocate for student exchange programs between India and Japan.",
  },

  {
    name: "Mr.Kiran Nandhaan B K ",
    title: "Employee, Sumitomo Mitsui Banking Corporation",
    photo: "/kn.jpg",
    bio: "JLPT N3 Certified | N2 Level Japanese Language Proficiency | A Strong Japanese speaker who intends to live in japan only with japanese wife",
  },
  {
    name: "Mr.Hiro Ishida",
    title: "CEO,  Mosaique Pvt Ltd",
    photo: "/uma.jpg",
    bio: "working in India now · Experience: Mosaique Pvt Ltd · Education: 神奈川工科大学 / Kanagawa Institute of Technology",
  },
  {
    name: "Mr.Aswin Balasubramanian",
    title: "Employee, EmbedUR",
    photo: "/asw.jpg",
    bio: "A person who is passionate about Japanese + Indian culture and language. Currently working in a Japanese company in India. JLPT N2 Certified | N1 Level Japanese Language Proficiency | A Strong Japanese speaker who intends to live in japan only with japanese wife",
  },
  // Add more delegates here...
];

export default function Delegates() {
  return (
    <section className="min-h-screen px-4 py-20 bg-black text-white flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Chief Guests & Japanese Delegates
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {delegates.map((delegate, index) => (
          <motion.div
            key={delegate.name}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={delegate.photo}
              alt={delegate.name}
              className="h-40 w-40 object-cover rounded-full mb-4 border-4 border-red-500"
            />
            <h2 className="text-xl font-bold mb-1">{delegate.name}</h2>
            <h3 className="text-sm uppercase text-red-500 mb-2">
              {delegate.title}
            </h3>
            <p className="text-neutral-300 text-sm">{delegate.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
