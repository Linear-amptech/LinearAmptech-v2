import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { homeProduct } from "../data/HomeData";
import "./Styles.css";

const Slider = () => {
  return (
    <Swiper
      centeredSlides={true}
      direction={"vertical"}
      loop={true}
      speed={800}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,

        // dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[500px]"
    >
      {homeProduct.map(({ img, title, tag, content, link }) => {
        return (
          <SwiperSlide>
            <div className="slide bg-[url('https://cdn.pixabay.com/photo/2023/07/19/22/28/amur-tiger-8138017_1280.jpg')] bg-cover bg-center flex flex-col lg:flex-row gap-20 justify-center items-center w-[100%] h-[100%] py-20 mx-auto bg-red-600">
              <div className="lg:h-[400px] h-[100px] max-w-[450px] flex justify-center  items-center ">
                <img src={img} className="min-w-[400px] "></img>
              </div>
              <div className="lg:right lg:max-w-[650px] flex flex-col gap-4">
                <p className="tag text-[#0346B5] text-[1.1rem] font-medium ">
                  {tag}
                </p>
                <h2 className="lg:text-[2.5rem] text-2xl lg:leading-normal font-bold">
                  {title}
                </h2>
                <p className=" text-[0.9rem] leading-loose min-h-[200px] text-justify">
                  {content}
                </p>
                <div>
                  <a
                    className="text-blue-900 underline font-medium cursor-pointer"
                    href={link}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
