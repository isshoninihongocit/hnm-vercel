"use client";

import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";

type FestivalContentProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const FestivalContent = ({
  title,
  description,
  imageUrl,
}: FestivalContentProps) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-2xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100 font-hnm">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-hnm max-w-3xl mx-auto mb-6">
        {description}
      </p>
      <img
        src={imageUrl}
        alt={title}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl"
      />
    </div>
  );
};

const data = [
  {
    category: "Cultural",
    title: "Lantern Parade",
    src: "/lantern.jpg",
    content: (
      <FestivalContent
        title="Lantern Parade"
        description="Experience the magic of hundreds of glowing lanterns lighting up the night sky as the parade weaves through the festival grounds. A beautiful tradition that symbolizes hope and togetherness."
        imageUrl="/lantern.jpg"
      />
    ),
  },
  {
    category: "Performance",
    title: "Traditional Dance",
    src: "/dance.jpg",
    content: (
      <FestivalContent
        title="Traditional Dance"
        description="Be mesmerized by graceful dancers performing authentic Japanese folk dances, blending vibrant costumes and rhythmic movements to tell timeless stories."
        imageUrl="/dance.jpg"
      />
    ),
  },
  {
    category: "Workshop",
    title: "Origami Workshop",
    src: "/origami.png",
    content: (
      <FestivalContent
        title="Origami Workshop"
        description="Learn the ancient art of paper folding from master instructors. Create your own cranes, flowers, and animals to take home as keepsakes!"
        imageUrl="/origami.png"
      />
    ),
  },
  {
    category: "Food",
    title: "Street Food Stalls",
    src: "/ramen.jpg",
    content: (
      <FestivalContent
        title="Street Food Stalls"
        description="Taste delicious Japanese street food: from piping hot ramen bowls to crispy takoyaki and sweet mochi desserts. A foodie's paradise!"
        imageUrl="/ramen.jpg"
      />
    ),
  },
  {
    category: "Art",
    title: "Calligraphy Showcase",
    src: "/cal.jpg",
    content: (
      <FestivalContent
        title="Calligraphy Showcase"
        description="Watch skilled calligraphy artists bring kanji to life with beautiful brushstrokes. Try your hand at writing your name in Japanese too!"
        imageUrl="/cal.jpg"
      />
    ),
  },
  {
    category: "Anime",
    title: "AniAct",
    src: "/r1.jpg",
    content: (
      <FestivalContent
        title="AniAct"
        description="Step into your favorite anime scene! Perform iconic dialogues and scenes with fellow fans and win exciting prizes for the best performances."
        imageUrl="/r1.jpg"
      />
    ),
  },
  {
    category: "Entertainment",
    title: "Anime Watch Party",
    src: "/r2.jpg",
    content: (
      <FestivalContent
        title="Anime Watch Party"
        description="Join a cozy group screening of classic and new anime episodes on a big screen. Bring your friends, snacks, and enjoy!"
        imageUrl="/r2.jpg"
      />
    ),
  },
  {
    category: "Art",
    title: "Manga Plot",
    src: "/r3.jpg",
    content: (
      <FestivalContent
        title="Manga Plot"
        description="Unleash your creativity! Collaborate with others to craft unique manga plots, characters, and scenes. Pitch your story for a chance to win!"
        imageUrl="/r3.jpg"
      />
    ),
  },
  {
    category: "Stall",
    title: "Anime Weeb Shop",
    src: "/r4.jpg",
    content: (
      <FestivalContent
        title="Anime Weeb Shop"
        description="Shop exclusive anime merchandise, collectibles, and fan art. Grab limited edition posters, keychains, and more to remember Hikari no Matsuri!"
        imageUrl="/r4.jpg"
      />
    ),
  },
  {
    category: "Workshops",
    title: "Kendo",
    src: "/r5.jpg",
    content: (
      <FestivalContent
        title="Kendo Workshop"
        description="Learn the basics of Kendo, the Japanese art of sword fighting, from experienced practitioners. Protective gear and bamboo swords provided!"
        imageUrl="/r5.jpg"
      />
    ),
  },
  {
    category: "Fun",
    title: "Kingyo Sukui",
    src: "/r6.jpg",
    content: (
      <FestivalContent
        title="Kingyo Sukui"
        description="A fun, classic festival game! Try to scoop goldfish with delicate paper scoops — test your skill and win prizes."
        imageUrl="/r6.jpg"
      />
    ),
  },
];

export function HighlightsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[#dc2626] font-hnm">
        Festival Highlights
      </h2>
      <Carousel items={cards} />
    </section>
  );
}
