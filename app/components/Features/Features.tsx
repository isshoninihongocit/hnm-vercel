import React from "react";
import CardStackDemo from "./CardStackDemo";
import EvervaultCardDemo from "./EvervaultCardDemo";
import { TracingBeam } from "../ui/tracing-beam";
import { TextRevealCardPreview } from "./TextReveal";
import Title from "./Title";
const Features: React.FC = () => {
  return (
    <div>
        <Title />
      <TracingBeam>
        <CardStackDemo />
        <EvervaultCardDemo />
        <TextRevealCardPreview />
      </TracingBeam>
    </div>
  );
};

export default Features;
