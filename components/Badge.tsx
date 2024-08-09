import Image from "next/image";
import React from "react";

type Props = {
  containerStyles?: string;
};

const Badge = ({ containerStyles }: Props) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src={"/assets/badge.svg"}
        fill
        alt="Badge"
        className="object-contain"
      />
    </div>
  );
};

export default Badge;
