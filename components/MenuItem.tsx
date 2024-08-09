import Image from "next/image";
import React from "react";

type Props = {
  menu: {
    desc: string;
    imgSrc: string;
    price: number;
    title: string;
  };
};

const MenuItem = ({ menu }: Props) => {
  const { desc, price, imgSrc, title } = menu;

  return (
    <div className="flex items-center gap-4">
      <div className="relative size-[60px] xl:size-[72px] rounded-full">
        <Image
          src={imgSrc}
          fill
          alt=""
          priority
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2 justify-between items-baseline text-primary">
          <p className="uppercase font-primary font-bold text-[22px] leading-none text-primary">
            {title}
          </p>
          <div className="flex-1 border-b border-dashed border-primary"> </div>
          <p className="leading-none font-primary font-semibold">
            <span className=" text-[30px]">${price.toFixed(3)} </span>
            <span className="font-primary font-bold">vnđ</span>{" "}
          </p>
        </div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default MenuItem;
