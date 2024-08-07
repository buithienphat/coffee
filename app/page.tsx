"use client";

import Hero from "@/components/Hero";
import React, { useEffect } from "react";

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
    <main>
      <Hero />
      <div className="h-[4000px]"></div>
    </main>
  );
};

export default Home;
