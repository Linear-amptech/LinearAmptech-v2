import React, { useEffect } from "react";
import { Footer, Slider } from "../Components";
import { Button } from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import Slider2 from "../Components/Slider2";
import video1 from "../assets/video/2.mp4";
import {
  BgElement1,
  BgElement2,
  BgElement3,
  BgElement4,
  Element1,
  Element2,
  Element3,
} from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

import TextTransition, { presets } from "react-text-transition";
import Products from "../Components/Products";
const heading = [
  "Linear Amptech",
  "Empowering Automation",
  "Leading in RF Technology",
  "Bridging the Digital and Physical",
  "Your Tech Partner for Tomorrow",
];
const TEXTS = [
  "Innovating the Future of Cyber-Physical Systems",
  "Integrating Machine Learning into Real-World Systems",
  "Advanced Radio Frequency Sensors for Precision Applications",
  "Transforming Interactions with our Cyber-Physical System Designs",
  "Linear Amptech - Pioneering Breakthrough Solutions",
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className=" relative bg-[#f5f8fa]">
      {/* <div className="sticky top-0 right-0 z-20"> */}
      <Header />
      {/* </div> */}
      {/* *********************Hero Section ****************************** */}

      <div className="heroSection gap-2   relative ">
        <Slider />
      </div>

      {/* *********************Intro Section****************************** */}

      <div className="introSection gap-16    lg:flex justify-center items-end pt-20 mt-20   lg:pb-16 ">
        <div className="flex justify-center items-center">
          <Slider2 />
        </div>
      </div>

      {/* *********************Intro ****************************** */}

      <div className="slider lg:w-[98.9vw] max-w-[98.9vw] lg:px-[7%] px-4 py-14  mt-28">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold text-center mb-12 text-blue-gray-900">
          Our Products
        </h2>
        <Products />
      </div>
      {/* *********************Innovation ****************************** */}

      {/* *********************AboutUs ****************************** */}
      <div className="aboutUs w-[100%] px-[10%] flex flex-col justify-center items-center gap-5 py-14 bg-gradient-to-tr from-blue-600 to-blue-400 text-white">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold text-center">
          About Us
        </h2>
        <p className="text-[1.1rem] leading-loose text-center">
          A technology service company that provides innovative solutions to
          help businesses stay ahead of the curve. We specialize in [list your
          main services], and our team of experts is dedicated to providing the
          best possible service to our clients. We believe in the power of
          technology to transform businesses and industries. We are passionate
          about using our skills and knowledge to help our clients harness the
          full potential of technology to achieve their goals.
        </p>
        <NavLink
          to="/about-us"
          className="align-middle select-none font-Poppins text-base text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3.5 px-7 bg-gradient-to-tr from-gray-900 to-gray-700 text-white shadow-md shadow-gray-900/10  hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm uppercase"
        >
          Read more
        </NavLink>
      </div>
      {/* *********************Footer ****************************** */}
      <Footer />
    </div>
  );
};

export default Home;
