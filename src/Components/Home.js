import React from "react";
import { MarqueeSection } from "./MarqueeSection";
import { Carousel } from "./Carousel";
import { AboutSection } from "./AboutSection";
import { VissionCarousel } from "./VissionCarousel";
import { Curriculum } from "./Curriculum";
import { AchivCards } from "./AchivCards";
import { Album } from "./Album";

export const Home = () => {
  return (
    <>
      <MarqueeSection />
      <Carousel />
      <AboutSection />
      <VissionCarousel />
      <Curriculum />
      <AchivCards />
      <Album />
    </>
  );
};
