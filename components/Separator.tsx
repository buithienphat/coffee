import Image from "next/image";
import React from "react";

type Props = {
  bg?: "white" | "accent";
};

const Separator = ({ bg = "white" }: Props) => {
  const imgSrc =
    bg === "accent"
      ? "/assets/separator-accent.svg"
      : "/assets/separator-white.svg";

  return (
    <div className="relative w-[168px] h-[26px]">
      <Image src={imgSrc} fill alt="" className="object-contain" />
    </div>
  );
};

export default Separator;
