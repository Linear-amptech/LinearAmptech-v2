import React, { useEffect } from "react";
import { Footer, Header } from "../../Components";
import { NavLink } from "react-router-dom";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const RFPassive = () => {
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
            Solutions for a smarter, more connected
          </p>
        </div>

        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%]  "
        ></img>
      </div>
      <div className="text-[1.3rem] leading-relaxed lg:px-[15%] px-6 text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          //   data-aos="fade-up"
        >
          Radio Frequency Passive Components
        </h2>
        <p className="my-10">
          The company has several passive components such as cavity filters,
          waveguide power combiners for high power applications in their product
          line.
        </p>
        <p>
          These RF passive components have unique design topologies enabling low
          loss and high selectivity in case of filters and excellent combining
          efficiency (more than 90%) in the case of power combiners. The company
          also has various UHF components based on transformers as well coaxial
          lines. The in-house R&D is capable of introducing unique features such
          as tunability, reconfigurability etc. to various passive designs as
          per customer requirements. The in-house R&D is also ready to tackle
          customized design based on Microstrip, waveguide and coaxial-line
          technology for various passive components.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>{" "}
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-20">
        <img src={require("../../assets/RFPassive/p1.png")} width={380}></img>
        <img src={require("../../assets/RFPassive/p2.png")} width={380}></img>
        <img src={require("../../assets/RFPassive/p3.png")} width={380}></img>
      </div>{" "}
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
                Insertion loss (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Amplitude imbalance (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Phase imbalance (degree)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Return loss (dB)
              </th>
              <th scope="col" class="px-5 py-3 ">
                Isolation (dB)
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
                Power Divider-KuPD-1
              </td>
              <td class="px-5 py-4">1.7</td>
              <td class="px-6 py-4">1.5</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">15</td>
              <td class="px-6 py-4">-</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-passive/KuPD-1"
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
                5G Base Station Filter : 5GBPF-1
              </td>
              <td class="px-5 py-4"> 0.4</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">60-72</td>
              <td class="px-6 py-4">1.5</td>
              <td class="px-6 py-4">-</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-passive/5GBPF-1"
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
                Power Splitter-UHFPD-1
              </td>
              <td class="px-5 py-4">0.9</td>
              <td class="px-6 py-4">0.01</td>
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4">15</td>
              <td class="px-6 py-4">20</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-passive/UHFPD-1"
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
                Power Splitter-UHFPD-2
              </td>
              <td class="px-5 py-4">1.7</td>
              <td class="px-6 py-4">0.1</td>
              <td class="px-6 py-4">5</td>
              <td class="px-6 py-4">10</td>
              <td class="px-6 py-4">13</td>
              <td class="px-6 py-4">
                <NavLink
                  className="text-blue-800 underline"
                  to="/products/rf-passive/UHFPD-2"
                >
                  link
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default RFPassive;
