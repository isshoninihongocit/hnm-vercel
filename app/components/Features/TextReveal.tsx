"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Hikari no Matsuri"
        revealText="光で繋がる、心の祭り"
      >
        <TextRevealCardTitle>
          Step into a world where tradition meets tomorrow.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover to uncover the spirit of Japan — from vibrant yukatas to glowing
          lanterns, and the magic of community.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
