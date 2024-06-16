'use client'
// Swiper js import statements
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Controller, Mousewheel } from "swiper/modules";
import "swiper/css/effect-fade";

import VideoCard from "../cards/VideoCard";
import { SeriesSummaryListInfo } from "@/types/series";

export default function VideosCardSlider({
  videos,
  sectionTitle
}: {
  videos?: SeriesSummaryListInfo[];
  sectionTitle: string,
}) {
  // Check if videos is an array, if not, set it to an empty array
  // const videoList = Array.isArray(videos) ? videos : [];

  return (
    <>
      <div className="my-5 mx-5 border-b-2 border-yellow-500 w-fit p-2">
        <span className="text-[20px] text-white p-3">{sectionTitle}</span>
      </div>
      <Swiper
        
        modules={[Controller, Mousewheel]}
        mousewheel={true}
        breakpoints={{
          0 : {
            slidesPerView : 2,
            spaceBetween: 60
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
            spaceBetween: 10,
          },
        }}
      >
        {videos?.map((item) => (
          <SwiperSlide key={item.name} className="!w-fit md:w-auto">
            <VideoCard cardInfo={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
