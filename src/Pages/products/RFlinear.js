import React from "react";
import { Footer, Header, OurProduct } from "../../Components";

const RFlinear = () => {
  return (
    <div>
      <Header />
      {/* *****************************HERO SECTION***************** */}

      <OurProduct />

      {/* *****************************CONTENT SECTION***************** */}
      <div className="content w-[100%] px-[10%] py-20 text-[1.2rem] leading-relaxed">
        <h2 className="text-[2rem] font-bold mb-10">
          RF linear and nonlinear characterization
        </h2>
        <ul className="list-decimal ml-10 leading-relaxed my-5">
          <li>
            Low cost network analyzer for reflection coefficient measurement and
            material characterization.
          </li>
          <li>
            Vector signal generation and analysis for RF modulated measurement.
          </li>
        </ul>
        <p>
          Our capabilities lies in the generation of single and multiple Tone,
          modulated signals like QAM, OFDM, LTE, pulse shaping in baseband and
          transmission in analog domain. The testbed designed is capable of
          performing the measurement of active devices as well as passive
          devices.
        </p>
        <div className="productFeautre my-10">
          <h2 className="font-semibold text-[1.5rem]">Product Features:</h2>
          <p>
            Multitione and modulated signal generation
            <br /> RF frequency 300 MHz to 4.8 GHz
            <br /> Fully automatic control
            <br /> LTE, 1.4 MHz, 3 MHz, 5 MHz, 10 MHz, 15 MHz bandwidth support
          </p>
        </div>
        <div className="flex gap-14">
          <div>
            <img
              src={require("../../assets/RFlinear/1.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center">a</p>
          </div>
          <div>
            <img
              src={require("../../assets/RFlinear/2.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center">b</p>
          </div>
        </div>

        <h2 className="font-semibold mt-20 mb-10">
          (a) AM-PM characteristics (b) AM-AM characteristics of the measurement
          setup which shows high degree of linearity in measurement
        </h2>

        <div className="flex gap-14">
          <div>
            <img
              src={require("../../assets/RFlinear/3.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center">a</p>
          </div>
          <div>
            <img
              src={require("../../assets/RFlinear/4.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center">b</p>
          </div>
          <div>
            <img
              src={require("../../assets/RFlinear/5.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center">c</p>
          </div>
        </div>
        <h2 className="font-semibold mt-20 mb-10">
          (a) 64 QAM constellation showing impact of Hardware imperfections (b)
          64 QAM constellation imperfections cancellation using digital
          algorithm (c) 256 QAM constellation imperfections cancellation using
          digital algorithm
        </h2>
        <div className="flex gap-14">
          <div className="w-1/2">
            <img
              src={require("../../assets/RFlinear/6.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center mt-3">Developed measurement setup</p>
          </div>
          <div className="w-1/2">
            <img
              src={require("../../assets/RFlinear/7.jpg")}
              className="border-2 border-black"
            ></img>
            <p className="text-center mt-3">
              Digital control of 100 MHz bandwidth signal for different
              applications
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RFlinear;
