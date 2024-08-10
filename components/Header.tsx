"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav/Nav";
import { links } from "@/contans/Links";

type Props = {};

const Header = (props: Props) => {
  const [navActive, setNavActive] = useState(false);
  const [_, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute top-5 z-50 left-0 right-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="h-10 w-[100px] relative xl:w-[120px] z-50"
          >
            <Image
              src={"/assets/logo.svg"}
              fill
              alt="Logo"
              className="object-contain"
            />
          </Link>
          <ul className="hidden sm:flex items-center gap-5 text-white font-primary tracking-widest font-semibold text-[20px]">
            {links.map(({ herf, name }) => (
              <Link
                key={name}
                href={herf}
                className="px-2 py-2 cursor-pointer relative group hover:text-accent duration-main"
              >
                {name}
                <span className="block absolute bottom-1 left-0 w-0 h-[2px] bg-accent-hover transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </ul>

          <button
            onClick={() => setNavActive(!navActive)}
            className="w-8 h-5 flex sm:hidden items-center justify-center text-accent hover:text-accent-hover relative outline-none z-50"
          >
            <span
              className={`w-full h-[1.5px] absolute left-0 duration-500 bg-current ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            ></span>
            <span
              className={`w-full h-[1.5px] absolute left-0 duration-500 bg-current ${
                navActive ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-[1.5px] absolute left-0 duration-500 bg-current ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">{navActive && <Nav />}</AnimatePresence>
    </header>
  );
};

export default Header;
