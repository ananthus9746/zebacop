import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './project.css'
// import required modules

import Card from '../Card/Card'

export default function App() {
  const [isMobile, setIsMobile] = useState(0)

  const [width, setWidth] = useState(window.innerWidth);


  const updateDimensions = () => {
    setWidth(window.innerWidth);

  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  console.log("width..", width)

  useEffect(() => {
    if (width < 700) {
      console.log("width lessthan 700")
      setIsMobile(1)
    }
    else if (width < 900) {
      setIsMobile(2)
    }
    else {
      setIsMobile(3)

    }
  }, [width])





  return (
    <>
      <Swiper
        slidesPerView={isMobile}
        spaceBetween={30}

      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}



      modules={[Autoplay, Pagination,]}
      className="mySwiper"
      >
        <SwiperSlide>

          <Card />

        </SwiperSlide>

        <SwiperSlide>

          <Card />
        </SwiperSlide> <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
