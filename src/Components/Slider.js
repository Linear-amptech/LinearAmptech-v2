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
    img: "https://static.vecteezy.com/system/resources/previews/005/301/851/non_2x/businessman-success-with-his-board-room-free-photo.jpg",
  },
  {
    title: "Empowering Automation",
    content: "Integrating Machine Learning into Real-World Systems",
    img: "https://static.vecteezy.com/system/resources/previews/017/075/645/non_2x/digital-transformation-technology-strategy-digitization-and-digitalization-of-business-processes-and-data-optimize-and-automate-operations-customer-service-management-internet-and-cloud-computing-free-photo.jpg",
  },
  {
    title: "Leading in RF Technology",
    content: "Transforming Interactions with our Cyber-Physical System Designs",
    img: "https://static.vecteezy.com/system/resources/previews/004/656/020/non_2x/transmitting-signals-through-communications-satellites-in-the-sky-and-the-capital-city-with-tall-buildings-free-photo.jpg",
  },
  {
    title: "Bridging the Digital and Physical",
    content: "Innovating the Future of Cyber-Physical Systems",
    img: "https://static.vecteezy.com/system/resources/previews/027/100/018/non_2x/the-idea-of-a-global-social-network-and-business-connection-is-a-concept-that-combines-the-future-free-photo.jpg",
  },
  {
    title: "Your Tech Partner for Tomorrow",
    content: "Linear Amptech - Pioneering Breakthrough Solutions",
    img: "https://static.vecteezy.com/system/resources/previews/007/252/575/non_2x/businessman-holding-global-internet-connection-technology-business-and-digital-marketing-free-photo.jpg",
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
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,

        // dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[600px] flex items-center relative"
    >
      {sliderData.map(({ title, content, img }) => {
        return (
          <SwiperSlide>
            <div
              className={` h-full w-full bg-cover bg-black`}
              style={{
                backgroundImage: `url("${img}")`,
              }}
            >
              <div className="h-full w-full absolute bg-black/50"></div>
              <div className="slide container  text-white bg-cover bg-center flex  lg:flex-row gap-20 justify-start items-center w-[100%] h-[100%]  py-20 px-6 mx-auto">
                <div className=" gap-4 relative z-50">
                  <h2 className="lg:text-[3rem] text-4xl lg:leading-normal ">
                    {title}
                  </h2>
                  <p className=" text-[2rem]  min-h-[200px] ">{content}</p>
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
