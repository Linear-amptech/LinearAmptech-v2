import React, { useEffect } from "react";
import { Footer, Header, OurProduct } from "../../Components";
import { NavLink } from "react-router-dom";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const RFPowerAmp = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      <OurProduct />
      <div className="text-[1.3rem] leading-relaxed lg:px-[15%] px-6 text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          //   data-aos="fade-up"
        >
          Radio Frequency Power Amplifier
        </h2>
        <p className="my-10">
          The company has varieties of Radio Frequency Power Amplifiers for L, S
          and C band in their product line. These Amplifiers are power stages as
          well as complete unit with DC/DC converters.
        </p>
        <p>
          These amplifiers powered by Gallium Nitride device technology presents
          high efficiency (more than 60%) upto 100 W CW output power. Some of
          these involves most advanced Power Amplifiers design techniques such
          as continuum of classes (Class B/J, continuum of Class E/F ) enabling
          very high efficiency operation over the octave and even multi-octave
          frequency range. Such wideband designs with single discrete device and
          high efficiency operations together provides a reliable operation with
          small form factor. The company in-house R&D is also capable of
          customized design of the entire power amplifier units with VSWR
          monitoring, high Gain stages and supply cards for biasing. The company
          also provides the power amplifiers for Wireless communication such as
          Doherty Power Amplifiers.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>{" "}
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-20">
        <img src={require("../../assets/RFPowerAmp/p1.png")} width={550}></img>
        <img src={require("../../assets/RFPowerAmp/p2.png")} width={550}></img>
        <img src={require("../../assets/RFPowerAmp/p3.png")} width={550}></img>
        <img src={require("../../assets/RFPowerAmp/p4.png")} width={550}></img>
      </div>
      <div className="w-[100vw] ">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>
      </div>
      <div class="overflow-x-auto sm:rounded-lg font-medium my-3  mx-[5rem] mb-20">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3 ">
                Part Number
              </th>
              <th scope="col" class="px-6 py-3 ">
                Center Frequency (Ghz)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Output Power (W)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Efficiency
              </th>
              <th scope="col" class="px-5 py-3 ">
                Gain (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Type Mode of Operation
              </th>
              <th scope="col" class="px-5 py-3 ">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PAMOCBJ"
                >
                  LAMP-PAMOCBJ-10W
                </NavLink>
              </td>
              <td class="px-5 py-4">0.55-3.5</td>
              <td class="px-6 py-4">8-10</td>
              <td class="px-6 py-4">60-70</td>
              <td class="px-6 py-4">9.1-11.5</td>
              <td class="px-6 py-4">Extended Continuous Class B/J</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PAMOCBJ"
                >
                  link
                </NavLink>
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PAMOCCE"
                >
                  LAMP-PAMOCCE-10W
                </NavLink>
              </td>
              <td class="px-5 py-4">0.49-2.9</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">60-72</td>
              <td class="px-6 py-4">8.6-10.7</td>
              <td class="px-6 py-4">Extended Continuous Class E</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PAMOCCE"
                >
                  link
                </NavLink>
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PAMOCCF"
                >
                  LAMP-PAMOCCF-10W
                </NavLink>
              </td>
              <td class="px-5 py-4">0.5-2.2</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">60-71</td>
              <td class="px-6 py-4">8-9.4</td>
              <td class="px-6 py-4">Extended Continuous Class F</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PAMOCCF"
                >
                  link
                </NavLink>
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PACF1P9"
                >
                  LAMP-PACF1P9-10W
                </NavLink>
              </td>
              <td class="px-5 py-4">1.5-2.5</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">9.9-11.2</td>
              <td class="px-6 py-4">60-73</td>
              <td class="px-6 py-4">Extended Continuous Class F</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-amplifier/lamp-PACF1P9"
                >
                  link
                </NavLink>
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                *LAMP-PACF1P9-10W-HG
              </td>
              <td class="px-5 py-4">1.5-2.4</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">47</td>
              <td class="px-6 py-4">50-55*</td>
              <td class="px-6 py-4">Extended Continuous Class F</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                LAMP-DPA1P8-50W
              </td>
              <td class="px-5 py-4">1.85</td>
              <td class="px-6 py-4">
                50 (sat.) <br />5 (av.)
              </td>
              <td class="px-6 py-4">
                45 (sat.) <br />
                35 (av.)
              </td>
              <td class="px-6 py-4">50-55</td>
              <td class="px-6 py-4">Doherty</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white border-b ">
              <td
                scope="row"
                class="px-6 py-4  text-gray-900 whitespace-nowrap"
              >
                LAMP-DPA0P75-50W
              </td>
              <td class="px-5 py-4">750</td>
              <td class="px-6 py-4">
                50 (sat.) <br />
                3.1-10 (av.)
              </td>
              <td class="px-6 py-4">
                45 (sat.) <br />
                35 (av.)
              </td>
              <td class="px-6 py-4">50-55</td>
              <td class="px-6 py-4">Doherty</td>
              <td class="px-6 py-4">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default RFPowerAmp;
