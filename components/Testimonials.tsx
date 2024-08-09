import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/contans/dataTestimonials";
import { IoMdQuote } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container h-full flex items-center justify-center">
        <Swiper
          speed={800}
          navigation={true}
          modules={[Navigation]}
          className=""
        >
          {dataTestimonials.map(({ message, name, profession }, idx) => (
            <SwiperSlide key={idx} className="w-full h-full">
              <div className="flex justify-center h-full xl:pt-14">
                <div className="max-w-[70%] text-primary">
                  <IoMdQuote className="text-6xl mb-12 mx-auto" />
                  <p className="text-xl sm:text-2xl font-secondary text-center mb-8">
                    {message}
                  </p>
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">{name}</p>
                    <p className="text-secondary">{profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
