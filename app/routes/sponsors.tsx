"use client";

import { motion } from "framer-motion";

type Sponsor = {
  category: string;
  name: string;
  logo: string;
};

const sponsors: Sponsor[] = [
  {
    category: "Title Sponsor",
    name: "BAKA STORE.",
    logo: "/baka.jpg",
  },
  {
    category: "Platinum Sponsor",
    name: "Platinum Inc.",
    logo: "/sponsors/platinum.png",
  },
  {
    category: "Gold Sponsor",
    name: "Gold & Co.",
    logo: "/sponsors/gold.png",
  },
  {
    category: "Silver Sponsor",
    name: "Silver Partners",
    logo: "/sponsors/silver.png",
  },
  {
    category: "Refreshment Sponsor",
    name: "Cool Drinks",
    logo: "/sponsors/refreshment.png",
  },
  {
    category: "Food Truck Sponsor",
    name: "Yummy Trucks",
    logo: "/sponsors/foodtruck.png",
  },
  {
    category: "Certificate Sponsor",
    name: "Poorvika",
    logo: "/poor.png",
  },
];

export default function Sponsors() {
  return (
    <section className="min-h-screen px-4 py-20 bg-black text-white flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Sponsors
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-24 w-auto object-contain mb-4"
            />
            <h2 className="text-lg font-semibold uppercase text-red-500 mb-1">
              {sponsor.category}
            </h2>
            <p className="text-xl font-bold">{sponsor.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
