// import React from "react";
// import {
//   DraggableCardBody,
//   DraggableCardContainer,
// } from "../components/ui/drag-card";
//
// export function DraggableCardDemo() {
//   const items = [
//     {
//       title: "Otaku Onstage",
//       image: "/ps1.jpg",
//       className: "absolute top-10 left-[20%] rotate-[-5deg]",
//     },
//     {
//       title: "Artist Alley",
//       image: "/ps.jpg",
//       className: "absolute top-40 left-[25%] rotate-[-7deg]",
//     },
//     {
//       title: "Cosplay",
//       image: "/ps2.jpg",
//       className: "absolute top-5 left-[40%] rotate-[8deg]",
//     },
//     {
//       title: "Digital Art Workshop",
//       image: "/ps3.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//
//     {
//       title: "Akhibara No Quest",
//       image: "/ps8.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "O Talku Zone",
//       image: "/ps9.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "Watch Party",
//       image: "/ps10.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "Nihon Ninja Run",
//       image: "/ps11.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "Exhibits",
//       image: "/ps12.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "Anime Weeb Shop",
//       image: "/ps13.jpg",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "Hanetsuki",
//       image: "/ps4.jpg",
//       className: "absolute top-20 right-[35%] rotate-[2deg]",
//     },
//     {
//       title: "Strokes of HNM",
//       image: "/ps6.jpg",
//       className: "absolute top-24 left-[45%] rotate-[-7deg]",
//     },
//     {
//       title: "Fly High",
//       image: "/ps7.jpg",
//       className: "absolute top-8 left-[30%] rotate-[4deg]",
//     },
//   ];
//   return (
//     <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
//       <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
//         ✨ “Hikari no Matsuri is back — Chennai’s biggest anime & Japanese
//         cultural festival returns!” ✨.
//       </p>
//       {items.map((item) => (
//         <DraggableCardBody className={item.className}>
//           <img
//             src={item.image}
//             alt={item.title}
//             className="pointer-events-none relative z-10 h-80 w-80 object-cover"
//           />
//           <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
//             {item.title}
//           </h3>
//         </DraggableCardBody>
//       ))}
//     </DraggableCardContainer>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/drag-card";

export function DraggableCardDemo() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-08-22T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("🌸 It’s time for Hikari no Matsuri! 🌸");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft(
          `⏳ ${days}days ${hours}hours ${minutes}minutes until Hikari no Matsuri`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      title: "Otaku Onstage",
      image: "/ps1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Artist Alley",
      image: "/ps.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Cosplay",
      image: "/ps2.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Digital Art Workshop",
      image: "/ps3.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Akhibara No Quest",
      image: "/ps8.jpg",
      className: "absolute top-32 left-[60%] rotate-[-6deg]",
    },
    {
      title: "O Talku Zone",
      image: "/ps9.jpg",
      className: "absolute top-10 left-[65%] rotate-[3deg]",
    },
    {
      title: "Watch Party",
      image: "/ps10.jpg",
      className: "absolute top-44 left-[70%] rotate-[6deg]",
    },
    {
      title: "Nihon Ninja Run",
      image: "/ps11.jpg",
      className: "absolute top-10 left-[75%] rotate-[-4deg]",
    },
    {
      title: "Exhibits",
      image: "/ps12.jpg",
      className: "absolute top-36 left-[80%] rotate-[5deg]",
    },
    {
      title: "Anime Weeb Shop",
      image: "/ps13.jpg",
      className: "absolute top-20 left-[85%] rotate-[-7deg]",
    },
    {
      title: "Hanetsuki",
      image: "/ps4.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Strokes of HNM",
      image: "/ps6.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Fly High",
      image: "/ps7.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 z-10 mx-auto max-w-md -translate-y-3/4 text-center text-xl font-black text-[#dc2626] md:text-3xl font-hnm">
        {timeLeft}
      </p>

      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-[#dc2626]">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
