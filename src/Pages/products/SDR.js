import React from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { Footer, Header } from "../../Components";

const SDR = () => {
  return (
    <div>
      <Header />
      {/* *****************************HERO SECTION***************** */}
      <div className="heroSection z-0 w-[100%]  h-[400px] overflow-hidden flex  ">
        <div className=" absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2  text-white">
          <h2 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-bold font-Roboto ">
            Our Products
          </h2>
          <p className="lg:text-[1.8rem] font-normal mb-4 ">
            Solutions for a smarter, more connected future
          </p>
        </div>

        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%]  "
        ></img>
      </div>
      {/* *****************************CONTENT SECTION***************** */}
      <div className="text-[1.3rem] leading-relaxed lg:px-[15%] px-6 text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          //   data-aos="fade-up"
        >
          SDR Test-Beds
        </h2>
        <p className="my-10">
          With the advent of Software Defined Radio (SDR) the radio hardware
          scaled down to software and most of the features is pushed into
          software. In the scenario of war, the communication significantly
          depends on flexibility, interoperability, accuracy, and promptness.
          SDR having digital control and algorithms developed by us to
          compensate hardware imperfection apart from baseband can effectively
          increase flexibility, interoperability, accuracy, and promptness.
          Therefore in the scenario of conflict it can use as communication
          repeater. Moreover the conventional equipment supports defense
          personnel the ability to adjust only one frequency and single
          protocol. With the help of the SDR, defense personnel are able to
          monitor and communicate over an enormous percentage of the spectrum
          and support multiple protocols.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>

      <div className="lg:flex justify-between items-center mx-[10%]">
        <div className="lg:w-[50%]">
          <h2 className="text-[1.8rem] font-bold mt-5">Key Features</h2>
          <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
            <li>
              Multi-generation (2G, 3G, 4G), multi-standard (GSM, WCDMA, WiMAX,
              LTE) transmission.
            </li>
            <li> Frequency range 300 MHZ to 6 GHz</li>
            <li> SNDR of more than 45dBc up to 250 MHz bandwidth.</li>
            <li>
              Multi-band concurrent transmission. 2×2 and 4×4 MIMO support.
            </li>
            <li> Stand Alone Digitally controlled linearization solution</li>
            <li> Ultrawideband linearization up to 250 MHz</li>
            <li>
              2nd, 3rd and 4th Harmonic cancellation capability up to 6 GHz.
            </li>
            <li>
              Linearization capability for multiband signals with harmonic
              distance.
            </li>
            <li>EVM {"<"}-35 dB</li>
          </ul>
        </div>
        <div className="rightBox h-[500px] lg:w-[50%] flex lg:p-20">
          <div className="fronBox lg:h-[400px] lg:w-[500px] md:h-[300px] md:w-[400px] w-[340px] h-[240px] bg-primary-color"></div>
          <div className="backBox absolute lg:h-[400px] lg:w-[500px] md:h-[300px] md:w-[400px] w-[340px] h-[240px]    bg-[#EFF6FF] lg:translate-x-5 lg:translate-y-5 md:translate-x-3 translate-x-2 translate-y-2 md:translate-y-3 flex justify-center items-center">
            <img
              src={require("../../assets/SDR/4.png")}
              className="w-[90%]"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-16 justify-center items-center my-20">
        {/* <img src={require("../../assets/SDR/4.png")} width={370}></img> */}
        <img src={require("../../assets/SDR/2.png")} className="w-[33%]"></img>
        <img src={require("../../assets/SDR/3.png")} className="w-[33%]"></img>
      </div>
      {/* src={require("../../assets/SDR/1.jpg")} */}
      <Footer />
    </div>
  );
};

export default SDR;
