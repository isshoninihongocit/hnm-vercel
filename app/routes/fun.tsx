"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@remix-run/react";

type Event = {
  id: number;
  title: string;
  role: string;
  poster: string;
  description: string;
  rules: string[];
};

const funEvents: Event[] = [
  {
    id: 101,
    title: "BRAIN DOJO",
    role: "Shogi (Japanese Chess)",
    poster: "/p2.jpg",
    description: "Challenge your mind with Shogi, Japan’s traditional chess-style game of strategy.",
    rules: [
      "Open to all students.",
      "Respect your opponent.",
      "Handle all pieces with care.",
    ],
  },
  {
    id: 102,
    title: "TAMAGO QUEST",
    role: "Easter Egg Hunt",
    poster: "/p3.jpg",
    description: "Embark on a fun-filled hunt for hidden tamago (eggs) around the venue!",
    rules: [
      "Participants must collect as many eggs as possible within the time limit.",
      "Some eggs contain bonus clues or prizes.",
      "No running or pushing allowed.",
    ],
  },
  {
    id: 103,
    title: "YUME NO HAKO",
    role: "Wish Box – Box of Dreams",
    poster: "/p4.jpg",
    description: "Write your dreams and wishes for the future and drop them into the Dream Box.",
    rules: [
      "One wish per participant.",
      "Write respectfully and thoughtfully.",
      "All messages are private and symbolic.",
    ],
  },
  {
    id: 104,
    title: "SENBONBIKI",
    role: "Thousand Strings – Fortune Pull",
    poster: "/p5.jpg",
    description: "Choose a string and see what surprise or fortune it reveals!",
    rules: [
      "One pull per participant.",
      "Some strings lead to gifts or lucky fortunes!",
      "No peeking or rerolling allowed.",
    ],
  },
  {
    id: 105,
    title: "TAMA TOSS",
    role: "Kendama Challenge",
    poster: "/p6.jpg",
    description: "Test your balance and skill in this traditional Japanese ball-and-cup game!",
    rules: [
      "Kendamas provided at the booth.",
      "Land specific tricks to earn rewards.",
      "Queue up patiently for your turn.",
    ],
  },
  {
    id: 106,
    title: "KAWAII CLICKS",
    role: "Photo Booth & Pikachu Doll",
    poster: "/p7.jpg",
    description: "Snap memories with cute backdrops and our friendly Pikachu mascot!",
    rules: [
      "Respect the line and wait your turn.",
      "No rough handling of props or costumes.",
      "Photos allowed on your device or provided QR download.",
    ],
  },
  {
    id: 107,
    title: "STORY NOOK",
    role: "Manga & Book Reading (Manga Window)",
    poster: "/p8.jpg",
    description: "Relax in a cozy corner filled with manga, storybooks, and Japanese tales.",
    rules: [
      "No removing books from the area.",
      "Keep the reading space quiet.",
      "Respect and return materials carefully.",
    ],
  },
  {
    id: 108,
    title: "CHIBI GALLERY",
    role: "Collection Figures Display",
    poster: "/p9.jpg",
    description: "Admire a curated showcase of anime and manga collectible figures!",
    rules: [
      "Do not touch display figures.",
      "Photography is allowed unless marked otherwise.",
      "Respect all collector contributions.",
    ],
  },
  {
    id: 109,
    title: "SHOOTING GAME",
    role: "Gun Target Booth",
    poster: "/p10.jpg",
    description: "Aim and shoot to knock down Japanese festival-style targets!",
    rules: [
      "Follow safety instructions carefully.",
      "One turn per participant unless requeued.",
      "No real firearms — toy blasters only.",
    ],
  },
  {
    id: 110,
    title: "CHOPSTICKS & CHAIRS",
    role: "Chopsticks + Musical Chair Combo",
    poster: "/p2.jpg",
    description: "A wacky twist on musical chairs — grab items with chopsticks mid-round!",
    rules: [
      "All props handled gently.",
      "Participants rotate as music stops.",
      "No pushing or tripping allowed.",
    ],
  },
  {
    id: 111,
    title: "KINGYO SUKUI",
    role: "Goldfish Scoop Game",
    poster: "/1.jpg",
    description: "Try to scoop up floating toy fish using traditional Japanese nets!",
    rules: [
      "Limited time per turn.",
      "No hands — use the provided scoops only.",
      "Toy fish may be taken home if caught!",
    ],
  },
  {
    id: 112,
    title: "PEAK OR WEAK",
    role: "Strength Challenge",
    poster: "/p2.jpg",
    description: "Ring the bell or break a record — test your strength in a fun, safe setting!",
    rules: [
      "Follow volunteer instructions.",
      "One attempt per participant unless queued.",
      "No unsafe stunts allowed.",
    ],
  },
];

export default function FunEventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {funEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
      className="relative w-full border border-black overflow-hidden rounded-lg"
    >
      <div className="aspect-[3/4] w-full">
        <img
          src={event.poster}
          alt={event.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-center p-4 border-t border-black space-x-2">
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-xl truncate text-white">{event.title}</h2>
          <p className="text-sm text-white">{event.role}</p>
          <p className="text-xs mt-2 text-white">{event.description}</p>
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => setIsOpen(true)}
            aria-label={`View rules for ${event.title}`}
            className="flex h-10 w-10 items-center justify-center border bg-white border-white rounded-full text-xl hover:bg-gray-100"
          >
            +
          </button>
          <Link
            to={`/registration?eventId=${event.id}`}
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
            <h3 className="text-xl font-bold mb-4">{event.title} Rules</h3>
            <p className="mb-6 text-lg leading-relaxed">
              {event.rules.map((rule, idx) => (
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
