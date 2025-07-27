"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
import { TiFlowSwitch } from "react-icons/ti";
export function CardStackDemo() {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="flex flex-col lg:flex-row items-center justify-between w-full 
    space-x-4 space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-8 py-12 md:text-left text-center"
    >
      <div className="flex flex-col items-center sm:items-start md:justify-center justify-between md:w-[60%]">
        <div className="text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center">
          <h1 className="text-white font-hnm">Seamless Experience</h1>
          <TiFlowSwitch style={{ color: "[#dc2626]" }} />
        </div>{" "}
        <p className="text-white font-hnm dark:text-neutral-300 text-md md:text-lg lg:text-2xl mt-8 max-w-xl text-justify">
          We offer an intuitive and user-friendly journey, ensuring every moment
          at
          <Highlight>Hikari no Matsuri</Highlight> is smooth, memorable, and
          magical.
        </p>
      </div>

      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-red-400 text-red-900 dark:bg-red-500/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Kenji Saito",
    designation: "Cultural Ambassador",
    content: (
      <p>
        Our festival honors centuries-old Japanese traditions while embracing,{" "}
        <Highlight>modern expressions</Highlight>
        Attendees experience everything from traditional
        <Highlight>Bon Odori dances</Highlight> to immersive anime art
        installations — blending <Highlight>heritage</Highlight> with{" "}
        <Highlight>innovation</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Yumi Tanaka",
    designation: "Festival Volunteer",
    content: (
      <p>
        <Highlight>Hikari no Matsuri</Highlight> brings people together.
        Visitors connect through activities, share moments under lanterns, wear
        yukatas, and feel the <Highlight>community spirit</Highlight> that makes
        our festival so special.
      </p>
    ),
  },
  {
    id: 2,
    name: "Aiko Yamashita",
    designation: "Head of Experience",
    content: (
      <p>
        What makes <Highlight>Hikari no Matsuri</Highlight> truly special is the{" "}
        <Highlight>community spirit</Highlight>. Every visitor is invited to
        participate — lighting lanterns, wearing yukatas, enjoying authentic
        cuisine, and connecting in an atmosphere full of warmth and unity.
      </p>
    ),
  },
];

export default CardStackDemo;
