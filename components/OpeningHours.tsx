import React from "react";
import Badge from "./Badge";
import Image from "next/image";
import Separator from "./Separator";

type Props = {};

const OpeningHours = (props: Props) => {
  return (
    <section className="flex flex-col sm:flex-row bg-primary h-[60vh] xl:h-[80vh] relative bg-opening_hours bg-fixed bg-center bg-no-repeat bg-cover">
      <div className="flex-1 flex justify-center items-center relative">
        <div className="absolute inset-0 bg-white/10 z-20"></div>
        <Badge containerStyles="size-[320px] z-40" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="z-20 flex flex-col justify-center items-center">
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
          <Separator />
          <div className="relative mt-12 w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src={"/assets/opening-hours/program-badge.svg"}
              fill
              alt=""
              quality={100}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
    // <section className="flex bg-primary h-[60vh] xl:h-[80vh] relative">
    //   <div className="hidden relative lg:flex flex-1 justify-center items-center">
    //     <div className="absolute inset-0 bg-black/50 z-30"></div>
    //     <Image
    //       src={"/assets/opening-hours/img.png"}
    //       fill
    //       alt=""
    //       quality={100}
    //       priority
    //       className="object-cover"
    //     />
    //     <Badge containerStyles="size-[320px] z-40" />
    //   </div>
    //   <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
    //     <div className="absolute inset-0 bg-black/50 z-10"></div>
    //     <div className="z-20 flex flex-col justify-center items-center">
    //       <h2 className="h2 text-white mb-4">Opening Hours</h2>
    //       <Separator />
    //       <div className="relative mt-12 w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
    //         <Image
    //           src={"/assets/opening-hours/program-badge.svg"}
    //           fill
    //           alt=""
    //           quality={100}
    //           priority
    //           className="object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <section className=" bg-primary h-[50vh] xl:h-[80vh]">
    //   <div className="size-full relative bg-slate-400">
    //     <div className="bg-opening_hours absolute inset-0 bg-fixed bg-center bg-cover"></div>
    //     <div className="absolute inset-0 bg-black/70"></div>
    //   </div>
    // </section>
  );
};

export default OpeningHours;
