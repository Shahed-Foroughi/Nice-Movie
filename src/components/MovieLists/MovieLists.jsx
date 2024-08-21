// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function MovieLists() {
  const [isDesk , setIsDesk] = useState(null)
  useEffect(() => {
    if (screen.width > 640) {
      setIsDesk(true)
    }else{
      setIsDesk(false)
    }
  } , [])
  // console.log(screen);

  window.addEventListener('resize' , () => {
    if (screen.width > 640) {
      setIsDesk(true)
    }else{
      setIsDesk(false)
    }
  })
  
  return (
    <div className="mx-2 my-8 sm:mx-24">
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm sm:text-xl">Trending Movies</span>
        <button className="px-3 sm:px-6 border-2 text-xs sm:text-lg border-white rounded-xl sm:rounded-2xl font-bold">
          View more
        </button>
      </div>
      <div className="mt-3">
        <Swiper
          slidesPerView={isDesk ? 6 : 2}
          spaceBetween={isDesk ? 15 : 30}
          modules={[Pagination]}
          className=""
        >
          <SwiperSlide className="flex flex-col items-start justify-between gap-2">
            <img
              className="rounded-md"
              src="./image/pulpFiction.webp"
              alt=""
            />
            <span className="text-sm">Pulp Fiction</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start gap-2">
            <img className="rounded-md" src="./image/shawshank3.jpg" alt="" />
            <span className="text-sm">Shawshank Redemption</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start justify-between gap-2">
            <img
              className="rounded-md"
              src="./image/pulpFiction.webp"
              alt=""
            />
            <span className="text-sm">Pulp Fiction</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start gap-2">
            <img className="rounded-md" src="./image/shawshank3.jpg" alt="" />
            <span className="text-sm">Shawshank Redemption</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start justify-between gap-2">
            <img
              className="rounded-md"
              src="./image/pulpFiction.webp"
              alt=""
            />
            <span className="text-sm">Pulp Fiction</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start gap-2">
            <img className="rounded-md" src="./image/shawshank3.jpg" alt="" />
            <span className="text-sm">Shawshank Redemption</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start justify-between gap-2">
            <img
              className="rounded-md"
              src="./image/pulpFiction.webp"
              alt=""
            />
            <span className="text-sm">Pulp Fiction</span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start gap-2">
            <img className="rounded-md" src="./image/shawshank3.jpg" alt="" />
            <span className="text-sm">Shawshank Redemption</span>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}
