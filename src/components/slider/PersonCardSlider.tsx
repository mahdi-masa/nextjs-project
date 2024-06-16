"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Controller, Mousewheel } from "swiper/modules";
import "swiper/css/effect-fade";
import Person from "../cards/Person";
import { Actor } from "@/types/general";

export default function PersonCardSlider({
  sectionTitle,
  persons,
}: {
  sectionTitle: string;
  persons: Actor[];
}) {
  return (
    <>
      <div className="my-5 mx-5 border-b-2 border-yellow-500 w-fit p-2">
        <span className="text-[20px] text-white p-3">{sectionTitle}</span>
      </div>
      <Swiper
        slidesPerView={2}
        modules={[Controller, Mousewheel]}
        mousewheel={true}
        breakpoints={{
          0: {
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {persons?.map((item) => (
          <SwiperSlide key={item.name} className="!w-fit md:w-auto">
            <Person
              avatar={item.profile_path}
              fullName={item.name}
              role={item.known_for_department}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
