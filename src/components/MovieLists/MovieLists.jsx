// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function MovieLists(props) {
  const [isDesk, setIsDesk] = useState(null);

  useEffect(() => {
    if (screen.width > 640) {
      setIsDesk(true);
    } else {
      setIsDesk(false);
    }
  }, [props]);

  window.addEventListener("resize", () => {
    if (screen.width > 640) {
      setIsDesk(true);
    } else {
      setIsDesk(false);
    }
  });

  return (
    <div className="mx-2 my-8 sm:mx-24">
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg sm:text-xl text-[#eee]">
          Trending Movies
        </span>
        <button className="px-3 py-1 sm:px-6 border-2 text-sm sm:text-lg border-white rounded-2xl font-bold">
          View more
        </button>
      </div>
      <div className="mt-3">
        <Swiper
          slidesPerView={isDesk ? 6.5 : 2.5}
          spaceBetween={isDesk ? 15 : 30}
          modules={[Pagination]}
          className=""
        >
          {props.movies.map((movie) => (
            <SwiperSlide key={movie[0]} className="flex flex-col items-start justify-between gap-2">
              <img
                className="rounded-md min-h-[170px] max-h-[170px] sm:min-h-[285px] sm:max-h-[285px] overflow-hidden"
                src={movie[1].poster[1]}
                alt="poster"
              />
              <span className="text-sm">{movie[1].title}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
