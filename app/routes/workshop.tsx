"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@remix-run/react";

type Workshop = {
  id: number;
  title: string;
  role: string;
  poster: string;
  description: string;
  rules: string[];
};

const workshops: Workshop[] = [
  {
    id: 1,
    title: "KAMICRAFT",
    role: "Origami Workshop",
    poster: "/p9.jpg",
    description: "Unfold the magic of Japanese paper folding. Learn cranes, blossoms & more.",
    rules: [
      "Open to all students with valid College ID.",
      "Materials provided, handle with care.",
      "Maintain silence & respect during instruction.",
    ],
  },
  {
    id: 2,
    title: "KENDO WORKSHOP",
    role: "Way of the Sword",
    poster: "/p7.jpg",
    description: "Step into the world of Kendo — the Japanese art of swordsmanship. Learn basic stances, strikes, and discipline from trained practitioners.",
    rules: [
      "Open to all participants with valid ID.",
      "All equipment will be provided. Handle with care.",
      "Wear comfortable clothing suitable for physical activity.",
      "Follow the instructor’s safety instructions at all times.",
      "No sparring allowed during the workshop — this is a beginner-level session.",
    ],
  },
  {
    id: 3,
    title: "SHODO SPIRIT",
    role: "Japanese Calligraphy",
    poster: "/p4.jpg",
    description: "Experience the art of brush, ink & balance. Write beautiful kanji & proverbs.",
    rules: [
      "Open to all students with valid College ID.",
      "Brushes & ink provided, clean up after use.",
      "Maintain a quiet and mindful environment.",
    ],
  },
  // Add more workshops if needed
];

export default function WorkshopGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {workshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} />
      ))}
    </div>
  );
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
      className="relative w-full border border-black overflow-hidden rounded-lg"
    >
      <div className="aspect-[3/4] w-full">
        <img
          src={workshop.poster}
          alt={workshop.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-center p-4 border-t border-black space-x-2">
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-xl truncate text-white">{workshop.title}</h2>
          <p className="text-sm text-white">{workshop.role}</p>
          <p className="text-xs mt-2 text-white">{workshop.description}</p>
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => setIsOpen(true)}
            aria-label={`View rules for ${workshop.title}`}
            className="flex h-10 w-10 items-center justify-center border bg-white border-white rounded-full text-xl hover:bg-gray-100"
          >
            +
          </button>
          <Link
            to={`/registration?eventId=${workshop.id}`}
            className="flex items-center px-3 py-1 border bg-white rounded-full text-sm font-semibold transition-colors hover:bg-red-600"
          >
            Register
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col justify-center p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">{workshop.title} Rules</h3>
            <p className="mb-6 text-lg leading-relaxed">
              {workshop.rules.map((rule, idx) => (
                <span key={idx} className="block mb-2">
                  • {rule}
                </span>
              ))}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="self-end flex h-10 w-10 items-center justify-center border border-black rounded-full text-xl hover:bg-gray-200"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
