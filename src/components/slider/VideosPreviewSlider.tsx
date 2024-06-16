'use client'
// swiper js 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";

import VideoPreview from "../section/VideoPreview";
import { SeriesCompleteInformation } from "@/types/series";


export default function VideosPreviewSlider({ videos }: { videos: SeriesCompleteInformation[]}) {
  
  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Navigation, EffectFade]}
        effect={"fade"}
        pagination={true}
        navigation={true}
      >
        {videos.map((item) => (
          <SwiperSlide key={item.name}>
            <VideoPreview information={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
