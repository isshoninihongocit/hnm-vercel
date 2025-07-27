"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroSlide {
  character: string;
  bgLeft: string;
  bgRight: string;
  imageWidth: string;
}

const slides: HeroSlide[] = [
  {
    character: "/person2.png",
    bgLeft: "bg-red-600",
    bgRight: "bg-black",
    imageWidth: "w-[300px]",
  },
  {
    character: "/person.png",
    bgLeft: "bg-black",
    bgRight: "bg-red-600",
    imageWidth: "w-[550px]",
  },
  {
    character: "/person3.png",
    bgLeft: "bg-red-600",
    bgRight: "bg-black",
    imageWidth: "w-[600px]",
  },
  {
    character: "/char.png",
    bgLeft: "bg-black",
    bgRight: "bg-red-600",
    imageWidth: "w-[800px]",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  const { character, bgLeft, bgRight, imageWidth } = slides[index];

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background transition */}
      <div className="absolute inset-0 flex transition-all duration-700 z-0">
        <div className={`w-1/2 ${bgLeft} transition-colors duration-700`} />
        <div className={`w-1/2 ${bgRight} transition-colors duration-700`} />
      </div>

      {/* Text on top */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
        <motion.h1
          className="flex text-[8vw] uppercase leading-none tracking-tight text-white mix-blend-difference font-hnm"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {"HIKARI No MATSURI".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { y: 0 },
                visible: {
                  y: [0, -30, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.6,
                    delay: i * 0.07,
                  },
                },
              }}
              style={{
                marginRight: char === " " ? "1vw" : 0,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Character Image behind the text */}
      <div className="absolute z-10">
        <img
          src={character}
          alt="Main Hero Character"
          className={`h-auto object-contain ${imageWidth}`}
        />
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-center text-white z-20">
        <span className="mb-2 text-xs tracking-widest uppercase">
          Explore Site
        </span>
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface HeroSlide {
//   character: string;
//   bgLeft: string;
//   bgRight: string;
//   imageWidth: string;
// }

// const slides: HeroSlide[] = [
//   {
//     character: "/person2.png",
//     bgLeft: "bg-red-600",
//     bgRight: "bg-black",
//     imageWidth: "w-[300px]",
//   },
//   {
//     character: "/person.png",
//     bgLeft: "bg-black",
//     bgRight: "bg-red-600",
//     imageWidth: "w-[550px]",
//   },
//   {
//     character: "/person3.png",
//     bgLeft: "bg-red-600",
//     bgRight: "bg-black",
//     imageWidth: "w-[600px]",
//   },
//   {
//     character: "/char.png",
//     bgLeft: "bg-black",
//     bgRight: "bg-red-600",
//     imageWidth: "w-[800px]",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [index]);

//   const { character, bgLeft, bgRight, imageWidth } = slides[index];

//   return (
//     <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 flex transition-all duration-700">
//         <div className={`w-1/2 ${bgLeft} transition-colors duration-700`} />
//         <div className={`w-1/2 ${bgRight} transition-colors duration-700`} />
//       </div>
//       {/* Animated Wavy Text */}
//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <motion.h1
//           className="flex text-[8vw]  uppercase leading-none tracking-tight text-white mix-blend-difference font-hnm"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.08 } },
//           }}
//         >
//           {"HIKARI No MATSURI".split("").map((char, i) => (
//             <motion.span
//               key={i}
//               className="inline-block"
//               variants={{
//                 hidden: { y: 0 },
//                 visible: {
//                   y: [0, -30, 0],
//                   transition: {
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     duration: 1.6,
//                     delay: i * 0.07,
//                   },
//                 },
//               }}
//               style={{
//                 marginRight: char === " " ? "1vw" : 0,
//               }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.h1>
//       </div>
//       {/* Rest as before */}
//       <div className="relative z-10">
//         <img
//           src={character}
//           alt="Main Hero Character"
//           className={`h-auto object-contain ${imageWidth}`}
//         />
//       </div>
//       <div className="absolute bottom-10 right-10 flex flex-col items-center text-white">
//         <span className="mb-2 text-xs tracking-widest uppercase">
//           Explore Site
//         </span>
//         <svg
//           className="w-6 h-6 animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
//
// const slides = [
//   {
//     image: "/person.png",
//     leftBg: "bg-red-600",
//     rightBg: "bg-black",
//   },
//   {
//     image: "/person2.png",
//     leftBg: "bg-blue-600",
//     rightBg: "bg-gray-900",
//   },
//   {
//     image: "/person3.png",
//     leftBg: "bg-yellow-500",
//     rightBg: "bg-purple-800",
//   },
//   // Add more slides as needed
// ];
//
// export default function Hero() {
//   const [index, setIndex] = useState(0);
//
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [index]);
//
//   return (
//     <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 flex transition-all duration-700">
//         <div
//           className={`w-1/2 ${slides[index].leftBg} transition-colors duration-700`}
//         />
//         <div
//           className={`w-1/2 ${slides[index].rightBg} transition-colors duration-700`}
//         />
//       </div>
//       {/* Title */}
//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <h1 className="flex text-[8vw] font-extrabold uppercase leading-none tracking-tight text-white mix-blend-difference">
//           <span className="block -mr-4">HIKARI No </span>
//           <span className="block">MATSURI</span>
//         </h1>
//       </div>
//       {/* Character */}
//       <div
//         key={slides[index].image}
//         className="relative z-10 transition-opacity duration-700"
//       >
//         <img
//           src={slides[index].image}
//           alt="Main Hero Character"
//           className="h-auto w-[900px] object-contain transition-all duration-700"
//         />
//       </div>
//       {/* Scroll */}
//       <div className="absolute bottom-10 right-10 flex flex-col items-center text-white">
//         <span className="mb-2 text-xs tracking-widest uppercase">
//           Explore Site
//         </span>
//         <svg
//           className="w-6 h-6 animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }
//
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { heroSlides } from "../data/heroSlides";
//
// const textVariants = {
//   hidden: { y: -60, opacity: 0 },
//   visible: (i = 1) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: i * 0.1,
//       type: "spring",
//       stiffness: 100,
//       damping: 12,
//     },
//   }),
// };
//
// export default function Hero() {
//   const [index, setIndex] = useState(0);
//
//   useEffect(() => {
//     const timer = setTimeout(
//       () => setIndex((i) => (i + 1) % heroSlides.length),
//       3000
//     );
//     return () => clearTimeout(timer);
//   }, [index]);
//
//   const { character, bgImage, accentParticles } = heroSlides[index];
//
//   return (
//     <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={bgImage}
//           className="absolute inset-0 z-0"
//           style={{ background: bgImage }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, scale: [0.98, 1] }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           {/* Parallax Particles */}
//           <motion.img
//             src={accentParticles}
//             alt="Particle Accent"
//             className="absolute left-8 top-8 w-24 pointer-events-none select-none"
//             animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.div>
//       </AnimatePresence>
//
//       {/* Animated Festival Title */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10">
//         <motion.h1 className="flex text-[8vw] font-extrabold uppercase leading-none tracking-tight text-white mix-blend-difference">
//           {["HIKARI", "No", "MATSURI"].map((word, i) => (
//             <motion.span
//               key={word}
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               className={`block ${i === 1 ? "-mx-4" : ""}`}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.h1>
//       </div>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={character}
//           className="relative z-20"
//           initial={{ opacity: 0, scale: 0.85, y: 60 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             filter: "drop-shadow(0 0 24px rgba(0,0,0,0.24))",
//           }}
//           exit={{ opacity: 0, scale: 1.1, y: 120 }}
//           transition={{ duration: 0.9, type: "spring" }}
//         >
//           <motion.img
//             src={character}
//             alt="Hero Character"
//             className="h-auto w-[900px] object-contain pointer-events-none select-none"
//             animate={{ rotate: [0, 2, -2, 0] }}
//             transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
//           />
//         </motion.div>
//       </AnimatePresence>
//       <motion.div
//         className="absolute bottom-10 right-10 flex flex-col items-center text-white z-30"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//       >
//         <span className="mb-2 text-xs tracking-widest uppercase">
//           Explore Site
//         </span>
//         <motion.svg
//           className="w-6 h-6 animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 9l-7 7-7-7"
//           />
//         </motion.svg>
//       </motion.div>
//     </section>
//   );
// }
