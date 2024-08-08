import { links } from "@/contans/Links";
import Link from "next/link";
import React from "react";

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <ul className="flex flex-col items-center justify-center gap-8 font-primary font-semibold text-xl text-white">
      {links.map(({ herf, name }) => (
        <Link
          key={name}
          href={herf}
          className="hover:text-accent duration-main relative group"
        >
          {name}
          <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-accent-hover transition-all duration-500 group-hover:w-full"></span>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
