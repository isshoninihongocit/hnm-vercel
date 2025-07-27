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
const events: Event[] = [
  {
    id: 1,
    title: "KARAOKE NIGHT",
    role: "Sing Your Heart Out",
    poster: "/p8.jpg",
    description: "Celebrate the spirit of Japanese pop culture through music! Grab the mic and sing your favorite anime openings, J-pop hits, or classics.",
    rules: [
      "Solo or duet performances only.",
      "Choose songs from the provided karaoke list.",
      "Lyrics display will be available on screen.",
      "No inappropriate language or gestures allowed.",
      "Performance limited to 3–4 minutes per entry.",
    ],
  },
  
  {
    id: 2,
    title: "ANIACT",
    role: "Anime Reenactment (Judged)",
    poster: "/p2.jpg",
    description: "Step into your favorite anime scene! Act out emotional, comedic, or action-packed moments from Japanese anime.",
    rules: [
      "Solo or duo performances only.",
      "Scene must be under 3 minutes.",
      "Judging based on expression, accuracy, and engagement.",
      "No offensive language or content.",
    ],
  },
  
  {
    id: 3,
    title: "OTAKU ARENA",
    role: "Anime Quiz Show",
    poster: "/p1.jpg",
    description: "Team up & prove you’re the ultimate otaku with quizzes on anime & manga!",
    rules: [
      "Teams of 1-3 members.",
      "No phones or cheating during the quiz.",
      "Respect quizmasters & buzzer rounds.",
    ],
  },
  {
    id: 4,
    title: "MANGAMIND",
    role: "Manga Plot Challenge",
    poster: "/1.jpg",
    description: "Write your own manga plot — characters, twists & more. Be the next mangaka!",
    rules: [
      "Solo entry only.",
      "No plagiarism. Original plots only.",
      "Keep content general audience friendly.",
    ],
  },
  {
    id: 5,
    title: "NIHON TRIVIA",
    role: "Japanese Culture Quiz",
    poster: "/p7.jpg",
    description: "Explore the fascinating world of Japan — its festivals, language, food, and pop culture — through this exciting quiz!",
    rules: [
      "Solo or duo teams.",
      "Questions will include visual, audio, and buzzer rounds.",
      "No use of devices or external help.",
      "Respect quizmasters and team members.",
    ],
  },
  
  {
    id: 6,
    title: "ONE PIECE TREASURE HUNT",
    role: "Decode the Mystery",
    poster: "/p3.jpg",
    description: "Race against time to solve Japanese-themed clues and uncover hidden treasures!",
    rules: [
      "Teams of 2-4 members allowed.",
      "Use only provided materials and hints.",
      "No internet search or external help allowed.",
      "Respect campus boundaries and fellow participants.",
    ],
  },
  
  {
    id: 7,
    title: "SPEECH CONTEST",
    role: "Japanese Language Speech",
    poster: "/p2.jpg",
    description: "Showcase your Japanese speaking skills with a short speech on a chosen theme.",
    rules: [
      "Solo participation only.",
      "Speech must be 3–5 minutes long.",
      "Topics should relate to Japanese culture, language, or personal experience.",
      "No reading from paper. Cue cards allowed.",
      "Judging based on fluency, content, and delivery.",
    ],
  },

  {
    id: 8,
    title: "COSPLAY CONTEST",
    role: "Character Parade",
    poster: "/p5.jpg",
    description: "Bring your favorite anime, manga, or game characters to life in our exciting cosplay parade!",
    rules: [
      "Solo or group participation allowed (up to 4 members).",
      "Costumes must be respectful and safe for all audiences.",
      "Original or fan-based characters from Japanese pop culture preferred.",
      "Skits or poses limited to 1 minute per entry.",
      "No harmful props or offensive content permitted.",
    ],
  },

  {
    id: 9,
    title: "HANETSUKI",
    role: "Traditional Paddle Game",
    poster: "/p6.jpg",
    description: "Experience the elegance of Japan’s New Year tradition by playing Hanetsuki — a fun and festive game like badminton, but without a net!",
    rules: [
      "Solo or pairs (1v1 or 2v2) participation allowed.",
      "Shuttle must be hit using wooden paddles (hagoita).",
      "Points scored when opponent misses the shuttle.",
      "No excessive force or smashing allowed — play gently.",
      "Traditional wear encouraged, but not mandatory.",
    ],
  },
  {
    id: 10,
    title: "NIHON DIVE",
    role: "Virtual Japan Booth",
    poster: "/p4.jpg",
    description: "Immerse yourself in the sights and sounds of Japan with VR/AR displays, interactive games, and cultural demos.",
    rules: [
      "Open to all attendees.",
      "Use equipment with care — VR headsets and touchscreens.",
      "Wait your turn and follow the guide's instructions.",
      "No food or drinks inside the booth area.",
    ],
  },
  {
    id: 11,
    title: "ARTIST ALLEY",
    role: "Fan Art & Merch Corner",
    poster: "/p4.jpg",
    description: "Share your passion with fan-made art, crafts, and merch inspired by anime and Japanese culture.",
    rules: [
      "Artists must register their booth in advance.",
      "Only self-created art or prints allowed — no reselling.",
      "All displayed material must be appropriate for all ages.",
      "Setup and cleanup must be handled by the artist.",
    ],
  },
  {
    id: 12,
    title: "ANIFLIX LOUNGE",
    role: "Anime Watch Party",
    poster: "/p5.jpg",
    description: "Relax with fellow fans and enjoy a curated selection of iconic anime episodes and movies.",
    rules: [
      "Open lounge seating — first come, first served.",
      "No talking or distractions during screening.",
      "Food allowed but must be kept clean.",
      "Respect everyone's viewing experience.",
    ],
  },  
  
  
];

export default function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {events.map((event) => (
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

