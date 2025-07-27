import React from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
];

export function LayoutGridDemo() {
  return (
    <section className="bg-black py-16 px-4">
      <h2 className="text-5xl font-bold text-center text-[#dc2626] font-hnm mb-10">
        ✨ 光の祭り(Hikari no Matsuri) Vol1 Gallery ✨
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="aspect-[4/3] overflow-hidden rounded-lg border border-neutral-800 shadow-md"
          >
            <img
              src={src}
              alt={`Delegate ${i + 1}`}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
