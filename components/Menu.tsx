import React from "react";
import Separator from "./Separator";
import { dataMenu } from "@/contans/dataMenu";
import MenuItem from "./MenuItem";

type Props = {};

const Menu = (props: Props) => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36 bg-red00">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12 xl:mb-24 text-center">
          <h2 className="h2">Our Menu</h2>
          <div className="mt-4">
            <Separator bg="accent" />
          </div>
          <p className="max-w-[620px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            odio animi reiciendis vel. Quae provident obcaecati voluptatum
            assumenda, ratione fugit nulla rem fuga quis aspernatur hic
            veritatis suscipit consequuntur explicabo.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-8 gap-x-16 checkplace-content-center">
            {dataMenu.map((menu, index) => (
              <div key={index}>
                <MenuItem menu={{ ...menu }} />
              </div>
            ))}
          </div>
          <button className="btn font-primary capitalize text-xl">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
