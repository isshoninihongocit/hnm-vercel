"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GraffitiScrollGenesis() {
  const containerRef = useRef(null);

  // Scroll Y
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // The mural slides horizontally
  const muralX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Characters with different speeds (parallax)
  const char1X = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const char2X = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const char3X = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const char4X = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const char5X = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] overflow-hidden">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        {/* Mural background pans horizontally */}
        <motion.div
          style={{ x: muralX }}
          className="absolute top-0 left-0 h-full w-[200vw]"
        >
          <img
            src="/big.jpg"
            alt="Graffiti Mural"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Characters in front */}
        <motion.img
          src="/person.png"
          alt="Character 1"
          style={{ x: char1X }}
          className="absolute bottom-10 left-1/4 w-32 md:w-48"
        />
        <motion.img
          src="/person2.png"
          alt="Character 2"
          style={{ x: char2X }}
          className="absolute bottom-20 left-1/3 w-32 md:w-48"
        />
        <motion.img
          src="/person3.png"
          alt="Character 3"
          style={{ x: char3X }}
          className="absolute bottom-32 left-1/2 w-32 md:w-48"
        />
        <motion.img
          src="/person4.png"
          alt="Character 4"
          style={{ x: char4X }}
          className="absolute bottom-44 left-2/3 w-32 md:w-48"
        />
        <motion.img
          src="/person5.png"
          alt="Character 5"
          style={{ x: char5X }}
          className="absolute bottom-56 left-3/4 w-32 md:w-48"
        />
      </div>
    </section>
  );
}
