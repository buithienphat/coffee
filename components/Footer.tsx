"use client";

import { links } from "@/contans/Links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "./Overlay";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  const scrollToSection = (e: any, targetId: string) => {
    e.preventDefault();
    const targetEle = document.getElementById(targetId);
    if (targetEle) {
      window.scrollTo({
        top: targetEle.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-footer bg-no-repeat bg-cover relative pt-16">
      <Overlay />
      <div className="container z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href={"/"} className="h-[50px] w-[120px] relative mx-auto">
            <Image
              src={"/assets/logo.svg"}
              fill
              alt="Logo"
              className="object-contain"
            />
          </Link>

          <nav className="flex flex-col sm:flex-row items-center gap-5 text-white font-primary tracking-widest font-semibold text-[20px] italic">
            {links.map(({ herf, name }) => (
              <Link
                key={name}
                href={herf}
                onClick={(e) => scrollToSection(e, herf)}
                className="px-2 py-2 cursor-pointer relative group hover:text-accent duration-main"
              >
                {name}
                <span className="block absolute bottom-1 left-0 w-0 h-[2px] bg-accent-hover transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <ul className="flex text-white text-xl gap-4">
            <Link
              href={"/"}
              className="size-12 border border-white rounded-full flex items-center justify-center hover:text-accent hover:border-accent duration-main text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="size-12 border border-white rounded-full flex items-center justify-center hover:text-accent hover:border-accent duration-main text-white"
            >
              <FaYoutube />
            </Link>
            <Link
              href={"/"}
              className="size-12 border border-white rounded-full flex items-center justify-center hover:text-accent hover:border-accent duration-main text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="size-12 border border-white rounded-full flex items-center justify-center hover:text-accent hover:border-accent duration-main text-white"
            >
              <FaTwitter />
            </Link>
          </ul>

          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; Copyright 2024 - Zenbrew. All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
