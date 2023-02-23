// import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
         clickable: true,
       }}
        modules={[Autoplay,Pagination]}
        className="mySwiper brand_slider py-6 px-6 rounded-xl dark:bg-black"
      >
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src="/images/slide-item-1.png" alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src="/images/slide-item-2.png" alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src="/images/slide-item-3.png" alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src="/images/slide-item-4.png" alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src="/images/slide-item-1.png" alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_item py-4 px-8 rounded-md">
            <img src="/images/slide-item-2.png" alt="slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
