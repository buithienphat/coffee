"use client";

import { dataAbout } from "@/contans/dataAbout";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import Badge from "./Badge";
import Separator from "./Separator";

type Props = {};

const About = (props: Props) => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {dataAbout.map(({ imgSrc, title, desc }) => (
            <div
              key={title}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4">
                        {title.split(" ")[0]}{" "}
                        <span className="text-accent">
                          {title.split(" ")[1]}
                        </span>
                      </h2>
                      <div className="flex items-center justify-center mb-8">
                        <Separator />
                      </div>
                      <p className="leading-relaxed mb-14 xl:px-0 text-white/70">
                        {desc}
                      </p>
                      <button className="btn shadow-2xl">See more</button>
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={imgSrc}
                      fill
                      quality={100}
                      alt=""
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
