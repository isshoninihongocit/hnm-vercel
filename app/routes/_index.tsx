import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import HeroSplitSection from "~/components/HeroSplitSection";
import { HighlightsCarousel } from "~/components/HighlightsCarousel";
import Features from "~/components/Features/Features";
import { DraggableCardDemo } from "~/components/DragDemo";
import { LayoutGridDemo } from "~/components/layout-grid";
import Contact from "~/routes/Contact";
export default function Index() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <HeroSplitSection />
      <HighlightsCarousel />
      <Features />
      <DraggableCardDemo />
      <LayoutGridDemo />
      <Contact />
    </main>
  );
}
