import { dataTestimonials } from "@/contans/dataTestimonials";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="h-[60vh] xl:h-[60vh] bg-white-smoke">
      <div className="container h-full flex items-center justify-center">
        <Swiper
          speed={800}
          navigation={true}
          modules={[Navigation]}
          className=""
        >
          {dataTestimonials.map(
            ({ message, name, profession, rated: rating }, idx) => (
              <SwiperSlide key={idx} className="w-full h-full">
                <div className="flex justify-center h-full">
                  <div className="max-w-[70%] text-primary">
                    <IoMdQuote className="text-6xl mb-12 mx-auto" />
                    <p className="text-xl sm:text-2xl font-secondary text-center mb-8">
                      {message}
                    </p>
                    {/* 
                  <div className="p-4">
                    <div className="flex">
                      {[...Array(5)].map((_, index) => {
                        const starIndex = index + 1;
                        return (
                          <span
                            key={starIndex}
                            className={`text-2xl ${
                              starIndex <= rated
                                ? "text-yellow-500"
                                : "text-gray-400"
                            }`}
                          >
                            <FaStar />
                          </span>
                        );
                      })}
                    </div>
                  </div> */}

                    <div className="flex items-center justify-center mb-5">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => {
                          const starIndex = index + 1;
                          if (rating >= starIndex) {
                            // Full star
                            return (
                              <FaStar
                                key={starIndex}
                                className="text-accent text-2xl"
                              />
                            );
                          } else if (rating >= starIndex - 0.5) {
                            // Half star
                            return (
                              <FaStarHalfAlt
                                key={starIndex}
                                className="text-accent text-2xl"
                              />
                            );
                          } else {
                            // Empty star
                            return (
                              <FaRegStar
                                key={starIndex}
                                className="text-accent text-2xl"
                              />
                            );
                          }
                        })}
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xl font-bold mb-1">{name}</p>
                      <p className="text-secondary">{profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
