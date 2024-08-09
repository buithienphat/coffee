"use client";

import About from "@/components/About";
import Explorer from "@/components/Explorer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LoadLocomotiveScroll = (await import("locomotive-scroll")).default;
      new LoadLocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explorer />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  );
};

export default Home;
