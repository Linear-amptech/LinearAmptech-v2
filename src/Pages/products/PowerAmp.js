import React from "react";
import { Footer, Header } from "../../Components";

const PowerAmp = () => {
  return (
    <div>
      <Header />
      {/* *****************************HERO SECTION***************** */}

      <div className="heroSection z-0  h-[400px] overflow-hidden ">
        <div className="absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2 text-white">
          <h2 className="text-[4rem] font-bold ">Our Products</h2>
          <p className="text-[1.5rem] font-mnormal mb-4">
            Solutions for a smarter, more connected
          </p>
        </div>
        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%] -translate-y-64"
        ></img>
      </div>

      {/* *****************************CONTENT SECTION***************** */}
      <div className="content w-[100%] px-[10%] py-20 text-[1.2rem] leading-relaxed">
        <h2 className="text-[2rem] font-bold mb-10">
          Wideband Analog Predistortion Solutions for Linearized Amplifiers
        </h2>
        <p>
          The analog predistortion (APD) is a compact solution for RF high power
          amplifier and Traveling wave tube linearization. The APD is easier to
          integrate inthe base station, repeaters due to the advantage of
          simplecircuitry, as well as when bandwidth increases the APD hasan
          advantage over DPD in terms of cost and power overhead. Therefore
          these features makes it a suitable candidate for upcoming 5G
          communication and satellite communication.
        </p>
        <div className="imgContainer flex my-10 gap-8">
          <div>
            <img
              src={require("../../assets/PowerAmp/1.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center mt-2">Analog predistorter linearizer</p>
          </div>
          <div>
            <img
              src={require("../../assets/PowerAmp/2.png")}
              className="border-2 border-black"
            ></img>
            <p className="text-center mt-2">
              APD linearization results for a two LTE (5 MHz) signal with
              spacing of 100 MHz
            </p>
          </div>
        </div>
        <h2 className="text-[2rem] font-bold  mb-7">
          Digital Predistortion based Linearized Transmitters
        </h2>
        <p>
          {/* We have developed and deployed distortion correction algorithm for RF
          High power amplifiers (SSPA/TWTA). This predistortion method requires
          the baseband access of the I/Q signals for modeling and distortion
          correction. The advantage of this method lies in terms of no extra
          hardware required at the user end, the performance can be achieved by
          just modifying the baseband algorithm which can be incorporated at the
          user end. Our method works upto 500 MHz bandwidth and distortion
          reduction >20 dB. Moreover we have also achieved good performance in
          the case of multiple-input and multiple-output (MIMO) DPD
          transmitters. */}
        </p>
        <div className="flex gap-10 justify-around my-10">
          <img
            src={require("../../assets/PowerAmp/3.png")}
            className="w-[400px]"
          ></img>
          <img
            src={require("../../assets/PowerAmp/4.jpg")}
            className="w-[400px]"
          ></img>
          <img
            src={require("../../assets/PowerAmp/5.png")}
            className="w-[400px]"
          ></img>
        </div>
        <p className="text-center">
          Spectrum of power amplifier before and after linearization
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PowerAmp;
