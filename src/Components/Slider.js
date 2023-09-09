import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { homeProduct } from "../data/HomeData";
import "./Styles.css";
const heading = ["", ,];
const TEXTS = [""];

const sliderData = [
  {
    title: "Linear Amptech",
    content: "Innovating the Future of Cyber-Physical Systems",
    img: "",
  },
  {
    title: "Empowering Automation",
    content: "Integrating Machine Learning into Real-World Systems",
    img: "",
  },
  {
    title: "Leading in RF Technology",
    content: "Transforming Interactions with our Cyber-Physical System Designs",
    img: "",
  },
  {
    title: "Bridging the Digital and Physical",
    content: "Innovating the Future of Cyber-Physical Systems",
    img: "",
  },
  {
    title: "Your Tech Partner for Tomorrow",
    content: "Linear Amptech - Pioneering Breakthrough Solutions",
    img: "",
  },
];

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
      className="mySwiper h-[500px] flex items-center"
    >
      {sliderData.map(({ img, title, content }) => {
        return (
          <SwiperSlide>
            <div className="bg-[black] w-full h-full">
              <div className="slide container  text-white bg-cover bg-center flex  lg:flex-row gap-20 justify-start items-center w-[100%] h-[100%]  py-20 px-6 mx-auto">
                <div className=" gap-4">
                  <h2 className="lg:text-[3rem] text-2xl lg:leading-normal font-bold">
                    {title}
                  </h2>
                  <p className=" text-[2rem] leading-loose min-h-[200px] text-justify">
                    {content}
                  </p>
                  <div></div>
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
