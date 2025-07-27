// "use client";
// import { useState, useRef, useEffect } from "react";
// export default function AutoplayVideo() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isMuted, setIsMuted] = useState(true);
//
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 1.0; // Set speed here
//       videoRef.current.muted = isMuted;
//       videoRef.current.volume = isMuted ? 0 : 0.7; // Volume only if unmuted
//
//       videoRef.current.play().catch((e) => {
//         console.warn("Autoplay prevented: ", e);
//       });
//     }
//   }, [isMuted]);
//
//   const toggleMute = () => {
//     setIsMuted((m) => !m);
//   };
//
//   return (
//     <section className="relative flex min-h-screen w-full overflow-hidden">
//       <div className="relative w-1/2 h-screen">
//         <video
//           ref={videoRef}
//           src="/visualsmain.mp4"
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           playsInline
//           muted={isMuted}
//           controls={false}
//         />
//         <button
//           onClick={toggleMute}
//           className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-80 transition"
//           aria-label={isMuted ? "Unmute video" : "Mute video"}
//         >
//           {isMuted ? "Unmute 🔊" : "Mute 🔈"}
//         </button>
//       </div>
//       <div className="relative flex w-1/2 flex-col justify-center bg-white p-16 font-bold font-hnm">
//         <h2 className="text-4xl font-bold text-red-600 mb-8">
//           01 / CELEBRATION.
//         </h2>
//         <h2 className="text-4xl font-bold text-black-600 mb-8">02 // UNITY.</h2>
//         <h2 className="text-4xl font-bold text-red-600 mb-8">
//           03 /// ILLUMINATION.
//         </h2>
//         <p className="max-w-xl text-lg leading-relaxed text-gray-700">
//           Hikari no Matsuri is more than just an event — it’s a celebration of
//           light, culture, and togetherness. We invite everyone to gather and
//           share moments under the vibrant glow of lanterns and performances.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AutoplayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.muted = isMuted;
      videoRef.current.volume = isMuted ? 0 : 0.7;

      videoRef.current.play().catch((e) => {
        console.warn("Autoplay prevented: ", e);
      });
    }
  }, [isMuted]);

  const toggleMute = () => setIsMuted((m) => !m);

  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-black text-white font-hnm">
      {/* Left Side: Video */}
      <div className="relative w-1/2 h-screen">
        <video
          ref={videoRef}
          src="/visualsmain.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted={isMuted}
          controls={false}
        />
        <button
          onClick={toggleMute}
          className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-80 transition"
        >
          {isMuted ? "Unmute 🔊" : "Mute 🔈"}
        </button>
      </div>

      {/* Right Side: Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex w-1/2 flex-col justify-center p-10 gap-6"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold text-[#dc2626]"
        >
          光の祭り (Hikari no Matsuri)
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-neutral-200 max-w-xl leading-relaxed"
        >
          Immerse yourself in the beauty of lantern-lit nights and heartfelt
          cultural showcases. Hikari no Matsuri brings together art, anime, and
          tradition to light up your soul.
        </motion.p>

        {/* Anime Image Grid */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 gap-4 mt-4"
        >
          <img
            src="/img11.jpg"
            alt="Anime 1"
            className="rounded-lg object-cover h-32 w-32 shadow-lg"
          />
          <img
            src="/img8.jpg"
            alt="Anime 2"
            className="rounded-lg object-cover h-32 w-32 shadow-lg"
          />
          <img
            src="/img9.jpg"
            alt="Anime 3"
            className="rounded-lg object-cover h-32 w-full shadow-lg"
          />
          <img
            src="/img10.jpg"
            alt="Anime 4"
            className="rounded-lg object-cover h-32 w-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
