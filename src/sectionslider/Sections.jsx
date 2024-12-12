// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Sections.css";

// import required modules
// import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper slider sliddder-wrapppper "
        loop={true}
      >
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center bg-zinc-700  rounded   overflow-hidden ">
            <img
              src="../../public/image/slider.1.png"
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Programming</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700  rounded overflow-hidden">
            <img
              src="../../public/image/slider.3.png"
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Graphic Design</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700 rounded overflow-hidden ">
            <img
              src="../../public/image/slider.2.png"
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Blogging</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700 rounded overflow-hidden ">
            <img
              src="../../public/image/slider.3.png"
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Programming</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700 rounded overflow-hidden">
            <img
              src="../../public/image/slider.4.png"
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Marketing</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
