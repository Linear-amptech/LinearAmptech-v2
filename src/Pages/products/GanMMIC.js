import React, { useEffect } from "react";
import { Footer, Header } from "../../Components";
import { NavLink } from "react-router-dom";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const GanMMIC = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
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

      <div className="text-[1.3rem] leading-relaxed lg:px-[15%] px-6 text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10 text-blue-gray-900"
          //   data-aos="fade-up"
        >
          GaN MMIC for T/R Modules
        </h2>
        <p className="my-10 text-blue-gray-600">
          The company has a strong research background in various RF components
          including Radio Frequency Power Amplifier Design, MMICs, Transmitter
          Linearization, SDR test beds and Radio frequency passive components.
        </p>
        <p className="text-blue-gray-600">
          We are dedicated to innovating in the area of many active and passive
          radio frequency components. These include broadband high-power
          amplifiers, waveguide-based combining, cavity filters, etc. Some
          innovations are also added in terms of soft IPs to mitigate
          impairments in software-defined radios. We have a strong research
          background of some of our directors who are from I.I.T-Roorkee and
          working in cutting-edge technologies related to radio frequency
          components. Recent R&D includes intelligent reflecting surfaces,
          multi-octave GaN MMICs, and millimeter-wave RFICs in CMOS and SiGe
          BiCMOS.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-20">
        <img src={require("../../assets/Gan-MMIC/p1.png")} height={200}></img>
        <img src={require("../../assets/Gan-MMIC/p2.png")} width={380}></img>
        <img src={require("../../assets/Gan-MMIC/p3.png")} height={120}></img>
      </div>
      <div class="overflow-x-auto sm:rounded-lg font-medium my-3  mx-[5rem] mb-20">
        <h2 className="my-4 font-bold text-[1.3rem]">
          C-Ku Band (5-18 GHz) GaN MMIC LNA Results
        </h2>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-blue-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3 ">
                Input Return Loss (dB)
              </th>
              <th scope="col" class="px-6 py-3 ">
                Output Return Loss (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Gain (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Noise Figure
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-5 py-4">9.8-20</td>
              <td class="px-6 py-4">9.9-25</td>
              <td class="px-6 py-4">18-25</td>
              <td class="px-6 py-4">2.5-3.8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-x-auto sm:rounded-lg font-medium my-3  mx-[5rem] mb-20">
        <h2 className="my-4 font-bold text-[1.3rem]">
          C-Ku Band (5-18 GHz) GaN MMIC SWITCH Results
        </h2>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3 ">
                Bias-V Tx
              </th>
              <th scope="col" class="px-6 py-3 ">
                Bias-V Rx
              </th>
              <th scope="col" class="px-5 py-3 ">
                ON/OFF
              </th>
              <th scope="col" class="px-5 py-3 ">
                Input Return Loss (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Output Return Loss (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Isolation (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Insertion loss (dB)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="px-5 py-4">-2.8V</td>
              <td class="px-6 py-4">0V</td>
              <td class="px-6 py-4">RX/TX</td>
              <td class="px-6 py-4">9-33</td>
              <td class="px-6 py-4">9.7-21</td>
              <td class="px-6 py-4">35.6-43.7</td>
              <td class="px-6 py-4">1.66-2.51</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="px-6 py-4">0V</td>
              <td class="px-5 py-4">-2.8V</td>
              <td class="px-6 py-4">TX/RX</td>
              <td class="px-6 py-4">8.6-28.2</td>
              <td class="px-6 py-4">10-22.7</td>
              <td class="px-6 py-4">39.8-49.8</td>
              <td class="px-6 py-4">1.71-2.61</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default GanMMIC;
