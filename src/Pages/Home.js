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
    <div className=" relative">
      {/* <div className="sticky top-0 right-0 z-20"> */}
      <Header />
      {/* </div> */}
      {/* *********************Hero Section ****************************** */}

      <div className="heroSection gap-2  h-[calc(100vh-71.98px)] flex flex-col justify-center items-center text-white bg-black z-0 overflow-hidden relative ">
        {/* <div className=" bg-slate-600 z-10"></div> */}
        <video
          autoPlay
          muted
          loop
          src={video1}
          className="absolute top-0 left-0 w-screen h-screen object-cover z-0 "
        />
        <div
          className="relative z-50 w-[100%]   gap-4  overflow-hidden flex flex-col justify-center items-center leading-none px-6"
          data-aos="fade-up"
        >
          <h2 className=" lg:text-[5rem] md:text-5xl text-4xl font-bold drop-shadow-2xl bg-transparent text-center">
            <TextTransition springConfig={presets.gentle}>
              {heading[index % heading.length]}
            </TextTransition>
          </h2>
          <h2 className="lg:text-[3rem] md:text-3xl text-2xl font-bold drop-shadow-2xl bg-transparent  leading-none pb-10  text-center">
            <TextTransition springConfig={presets.gentle}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h2>
        </div>
      </div>

      {/* *********************Intro Section****************************** */}

      <div className="introSection gap-16    lg:flex justify-center items-end pt-20 mt-20   lg:pb-16 ">
        <div className="flex justify-center items-center">
          <Slider2 />
        </div>
      </div>

      {/* <div className="introSection gap-16   lg:flex justify-center items-end px-[10%] lg:h-[100vh] lg:pb-16 pt-20">
        <div className="flex justify-center items-center">
          <div className="lg:flex flex-col gap-10">
            <h2 className="lg:text-[2.5rem] md:text-[2.10rem] text-[1.6rem] font-bold text-center lg:text-left leading-relaxed">
              We're Delivering Only
              <br /> Exceptinal Quality Work
            </h2>
            <Element3 className="lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px] h-[300px] w-[300px] m-auto" />
          </div>
        </div>
        <div className=" lg:w-[40%] mb-20">
          <p className=" lg:text-[1.1rem] text-[1rem] font-medium leading-loose mb-2 ">
            The linearized amplifier technologies and services private limited
            (linear-amptech) is a start-up company formed by faculty and
            students of IIT Roorkee. The company is dedicated towards indigenous
            development of radio frequency front end and wireless solutions. The
            primary goal is to develop tangible product from in-house R&D and
            bring it to national as well as international market.
          </p>
          <NavLink
            to="/about-us"
            className="font-semibold lg:text-[1.1rem] text-[1rem] "
          >
            Read more
          </NavLink>
        </div>
      </div> */}
      {/* <div
        className="w-[100vw] absolute overflow-hidden h-[200px] -translate-y-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="lg:w-[200px] w-[150px] absolute origin-center -right-20 -translate-y-[20%]" />
      </div> */}
      {/* *********************Intro ****************************** */}

      <div className="slider lg:w-[98.9vw] max-w-[98.9vw] lg:px-[7%] px-4 py-14 bg-[#f5f8fa] mt-28">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold text-center mb-12 text-blue-gray-900">
          Our Products
        </h2>
        <Products />
      </div>
      {/* *********************Innovation ****************************** */}

      {/* <div className="innovation w-[100%] px-[10%] py-32 lg:flex xl:flex justify-center gap-20">
        <div className="max-w-[650px] lg:flex lg:flex-col gap-5 px-4">
          <p className="tag text-[#0346B5] text-[1.1rem] font-semibold">
            INNOVATIONS
          </p>
          <h2 className="lg:text-[2.5rem] text-3xl font-bold">Cloud Project</h2>
          <p className=" lg:text-[1.1rem] text-base leading-loose min-h-[200px] min-w-[200px] ">
            We focus on the use of IOT data to provide companies with real-time
            observability to increase efiiciency, reduce costs predict possible
            faults and analyse the root of faults.
          </p>
          <NavLink
            to="/innovations"
            className="text-blue-700 underline font-medium cursor-pointer"
          >
            Discover more
          </NavLink>
        </div>
        <div className="flex justify-center">
          <Element1 className="lg:h-[450px] h-[320px] m-auto" />
        </div>
      </div> */}
      {/* <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="lg:w-[300px] w-[200px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div> */}

      {/* *********************Service ****************************** */}
      {/* <div className="lg:flex max-w-[100%] lg:px-[10%] py-32 gap-20 bg-[#F2F2F2] px-4">
        <div className="lg:left lg:w-1/2 mt-10">
          <div className="upperPart flex">
            <div className="serviceHeading lg:text-[2.5rem] text-3xl font-bold w-[300px] mb-14">
              Services We’re
              <br /> Offering
            </div>

            <div className="lineStyle h-[6px] lg:w-[335px] w-[100px]  bg-primary-color relative top-7"></div>
          </div>
          <div className="flex justify-center">
            <Element2 className="lg:h-[450px] md:max-w-[400px] max-w-[350px]  " />
          </div>
        </div>
        <div className="right lg:w-1/2 lg:flex flex-col gap-7 px-4">
          <div className="imgLower h-[400px] w-[100%] flex justify-center items-center  overflow-hidden">
            <BgElement4 className="lg:h-[450px] md:max-w-[400px] max-w-[350px]  " />
          </div>
          <div className="text-[1.1rem] flex flex-col gap-4 leading-loose ">
            <p>
              We provide services in various areas of technology, including
              power amplifier design, radio frequency engineering and signal
              processing, IoT and cloud analytics, and cyber-physical systems
              development.We design advanced power amplifiers and sensors which
              can be deployed in different areas ,say,Traffic monitoring ,
              equipment analysis etc.
              <br /> we are committed to providing our clients with innovative
              solutions that meet their unique needs.
            </p>
          </div>
          <NavLink
            to="/innovations"
            className="bg-primary-color text-white text-[1.1rem] py-3 px-5 w-44 flex justify-center items-center hover:scale-110 duration-200 mt-4 lg:mt-0"
          >
            Discover more
          </NavLink>
        </div>
      </div> */}
      {/* <div className="max-w-[100vw]  ">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="lg:w-[300px] w-[200px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>
      </div> */}

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
