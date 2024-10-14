"use client";

import About from "@/components/About";
import Explorer from "@/components/Explorer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonials from "@/components/Testimonials";
import { useEffect, useRef } from "react";

type Props = {};

const Home = (props: Props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (scrollRef.current) {
        new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
      }
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden" ref={scrollRef}>
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
