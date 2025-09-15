import React from "react";
import { BgElement1, BgElement2 } from "../../../assets";
import { Footer, Header } from "../../../Components";

const LAMP1 = () => {
  return (
    <div>
      <Header />
      {/* *****************************CONTENT SECTION***************** */}

      <div className="content w-[100%] px-[10%] py-20 text-[1.2rem] leading-relaxed mb-10">
        <div className="w-[100vw] overflow-hidden ">
          <BgElement1 className="w-[200px] absolute origin-center -right-20 " />
        </div>
        <h2 className="text-[3rem] font-bold mb-5">
          Power Amplifier: LAMP-PACF1P9-10W
        </h2>
        <p className="font-semibold text-[1.5rem] text-blue-gray-900">
          50 Ω, Wideband, 1.5 to 2.5 GHz, 7.7-10 W, 28V, SMA.
        </p>
        <div className="lg:flex justify-between">
          <div className="lg:w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5">Key Features</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1 text-blue-gray-700">
              <li>Frequency:1.5-2.5GHz</li>
              <li>Drain efficiency: 60-73%</li>
              <li>Output power: 38.9-40.4dBm</li>
              <li>Gain at saturation:9.9-11.2 dB</li>
              <li>Gain Compression:3-3.5 dB</li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Applications</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1 text-blue-gray-700">
              <li>Cellular</li>
              <li>SDRs</li>
              <li>Radars</li>
            </ul>
          </div>
          <div className="rightBox h-[500px] lg:w-[50%] flex lg:p-20">
            <div className="fronBox lg:h-[400px] lg:w-[500px] md:h-[300px] md:w-[400px] w-[340px] h-[240px] bg-primary-color"></div>
            <div className="backBox absolute lg:h-[400px] lg:w-[500px] md:h-[300px] md:w-[400px] w-[340px] h-[240px]    bg-[#EFF6FF] lg:translate-x-5 lg:translate-y-5 md:translate-x-3 translate-x-2 translate-y-2 md:translate-y-3 flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMC1.png")}></img>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100px]">
          <div>
            <BgElement2 className="w-[300px] absolute origin-center -left-44 -translate-y-[30%]" />
          </div>
        </div>
        <div className="text-[1.8rem] font-bold mt-5 mb-10">Diagrams</div>
        <div className="imgContainer flex flex-col  lg:gap-24 gap-12">
          <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-20 md:gap-12 sm:gap-10 gap-5 flex-col justify-center">
            <div className="max-w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMCD1.png")}></img>
            </div>
            <div className="max-w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMCD4.png")}></img>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-20 md:gap-12 sm:gap-10 gap-5 flex-col justify-center">
            <div className="max-w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMCD2.png")}></img>
            </div>
            <div className="max-w-[550px] flex justify-center items-center">
              <img src={require("../../../assets/rfpower/PAMCD3.png")}></img>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LAMP1;
