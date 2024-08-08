import React from "react";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

type Props = {};

const heightAnimation = {
  initial: {
    height: 0,
  },
  open: {
    height: "85vh",
    transition: {
      duration: 1,
      ease: [0.75, 0, 0.23, 1],
    },
  },
  close: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.75, 0, 0.23, 1],
    },
  },
};

const Nav = (props: Props) => {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-40 -top-full w-full"
    >
      <div className="container h-full flex items-center justify-center">
        <NavLinks />
      </div>
    </motion.nav>
  );
};

export default Nav;
