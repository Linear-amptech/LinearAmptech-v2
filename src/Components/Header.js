import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiRadio } from "react-icons/fi";
import { VscRadioTower } from "react-icons/vsc";
import {
  SiPytest,
  SiGoogleanalytics,
  SiBlockchaindotcom,
} from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import {
  MdDesignServices,
  MdOutlineInventory2,
  MdSystemUpdateAlt,
  MdMicrowave,
  MdClear,
  MdClose,
  MdMenu,
} from "react-icons/md";
import { RiScan2Line } from "react-icons/ri";

import { AiCube } from "../assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isRFPowerAmp, setIsRFPowerAmp] = useState(false);
  const [isRFPassive, setIsRFPassive] = useState(false);

  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  // console.log(window.innerWidth);
  // }, [window.innerWidth]);

  return (
    <div
      onMouseLeave={() => setIsDropDownOpen(false)}
      className={`z-50 bg-white sticky opacity-0 transition-opacity ${
        visible ? "top-0  duration-500 opacity-100" : ""
      } `}
    >
      <nav className="relative   ">
        <div className="container px-6 py-1 mx-auto xl:flex xl:justify-between xl:items-center ">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img
                className="md:w-[110px] h-auto w-[88px]"
                src={require("../assets/logo.png")}
                alt="linear-amptec-logo"
              />
            </NavLink>

            <div className="flex xl:hidden">
              <button
                onClick={() => handleClick()}
                type="button"
                className="text-gray-500 focus:outline-none duration-300  "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <MdClose className="text-[1.5rem] text-gray-900" />
                ) : (
                  <MdMenu className="text-[1.5rem] text-gray-900" />
                )}
              </button>
            </div>
          </div>

          <div
            className={` absolute inset-x-0 z-20 w-full px-6 py-0 transition-all duration-300 ease-in-out  bg-white  xl:mt-0 xl:p-0 xl:top-0 xl:relative xl:bg-transparent xl:w-auto xl:opacity-100 xl:translate-x-0 xl:flex xl:items-center ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col xl:flex-row xl:mx-6 xl:my-0 my-8  xl:text-[16px] text-base  xl:gap-4 gap-2">
              <NavLink
                className="my-1 text-blue-gray-900  transition-colors duration-300 transform  hover:text-[#2196f3]  md:mx-4 md:my-0"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="my-1 text-blue-gray-900  transition-colors duration-300 transform  hover:text-[#2196f3]  md:mx-4 md:my-0"
                to="/innovations"
              >
                Innovations
              </NavLink>

              <div
                onMouseEnter={() => setIsDropDownOpen(true)}
                // onMouseLeave={() => setIsDropDownOpen(false)}
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                className="my-1 text-blue-gray-900 transition-colors duration-300 z-10 transform md:mx-4 md:my-0 cursor-pointer hover:text-[#2196f3]"
                // to="/products"
              >
                Products
                {isDropDownOpen && (
                  <div className=" ease-in duration-1000 border lg:w-[90vw] 2xl:max-w-[1180px] xl:max-w-[1180px] flex flex-wrap items-start lg:justify-between justify-start gap-6 lg:gap-0 text-[#929292] absolute md:min-w-[768px] overflow-auto    lg:left-64 md:left-[75%] left-[75%] -translate-x-[80%] translate-y-6 bg-white list-none shadow-md  px-10 py-12 rounded-md">
                    <div className="absolute w-[20px] right-4 top-4">
                      <MdClear
                        onClick={() => setIsDropDownOpen(false)}
                        className="text-[1.5rem]"
                      />
                    </div>
                    <div className="lg:min-w-[250px] min-w-[250px]  flex flex-col gap-6 ">
                      <h2 className="text-[1.2rem]  font-bold text-[#2196f3]">
                        Linear Amptech
                      </h2>
                      <p className="text-blue-gray-700">
                        Creating Difference With <br /> Technology
                      </p>
                      <div>
                        <NavLink
                          to="/about-us"
                          className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-700 text-white shadow-md shadow-gray-900/10  hover:shadow-blue-900/20 active:opacity-[0.85] rounded-sm  hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300 uppercase "
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                    <div className="lg:min-w-[250px] max-w-[300px]">
                      <NavLink to="/products/rf-design-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-blue-gray-900 mb-6 hover:text-[#616161]">
                          Radio Frequency Design <br />
                          and Signal Processing
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <li
                          className="flex flex-col gap-4   items-start text-[0.95rem]"
                          onMouseLeave={() => setIsRFPowerAmp(false)}
                        >
                          <NavLink
                            to="/products/rf-power-amplifiers"
                            onMouseEnter={() => setIsRFPowerAmp(true)}
                          >
                            <div className="flex gap-4 items-center justify-start w-[100%] hover:text-[#616161">
                              <div className="w-12  h-12 flex justify-center items-center text-teal-500 bg-teal-50 rounded-none p-3">
                                <MdMicrowave className="text-[2rem] " />
                              </div>
                              <p className="hover:text-[#616161] text-blue-gray-700">
                                Radio Frequency Power <br /> Amplifier
                              </p>
                            </div>
                          </NavLink>
                          {isRFPowerAmp && (
                            <ul className="ml-14 text-[0.8rem]">
                              <NavLink to="/products/rf-amplifier/lamp-PACF1P9">
                                <li className="hover:text-[#616161]">
                                  LAMP-PACF1P9-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCBJ">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCBJ-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCCE">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCCE-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCCF">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCCF-10W
                                </li>
                              </NavLink>
                            </ul>
                          )}
                        </li>
                        <li
                          className="flex flex-col gap-4   items-start text-[0.95rem]"
                          onMouseLeave={() => setIsRFPassive(false)}
                        >
                          <NavLink
                            to="/products/rf-passive-components"
                            onMouseEnter={() => setIsRFPassive(true)}
                          >
                            <div className="flex gap-4 items-center justify-start w-[100%] hover:text-[#616161]">
                              <div className="w-12 h-12 flex justify-center items-center text-deep-purple-500 bg-deep-purple-50 p-3 ">
                                <MdMicrowave className="text-[2rem]" />
                              </div>
                              <p className="hover:text-[#616161] text-blue-gray-700">
                                Radio Frequency Passive <br /> Components
                              </p>
                            </div>
                          </NavLink>
                          {isRFPassive && (
                            <ul className="ml-14 text-[0.8rem]">
                              <NavLink to="/products/rf-passive/KuPD-1">
                                <li className="hover:text-[#616161]">
                                  Power Divider-KuPD-1
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-passive/5GBPF-1">
                                <li className="hover:text-[#616161]">
                                  5G Base Station Filter : 5GBPF-1
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-passive/UHFPD-1">
                                <li className="hover:text-[#616161]">
                                  Power Splitter-UHFPD-1
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-passive/UHFPD-2">
                                <li className="hover:text-[#616161]">
                                  Power Splitter-UHFPD-2
                                </li>
                              </NavLink>
                            </ul>
                          )}
                        </li>
                        <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                          <div className="w-12  h-12 flex justify-center items-center text-green-500 bg-green-50 p-3 ">
                            <MdDesignServices className="text-[2rem]" />
                          </div>
                          <NavLink to="/products/rf-passive/GaN-MMIC">
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              GaN MMIC Designs
                            </p>
                          </NavLink>
                        </li>
                        <NavLink to="/products/sdr-test-bed">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12 p-3  h-12 flex justify-center items-center text-light-blue-500 bg-light-blue-50 ">
                              <SiPytest className="text-[2rem]" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              SDR Test-Beds
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12  h-12 p-3 flex justify-center items-center text-orange-500 bg-orange-50 ">
                              <SiGoogleanalytics className="text-[2rem]" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              Transmitter Linearization & Antenna Solutions
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="lg:min-w-[250px]  max-w-[300px]">
                      <NavLink to="/products/cyber-physical-system-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-blue-gray-900 mb-6 hover:text-[#616161]">
                          Cyber Physical Systems <br />
                          and Artificial Intelligence
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/wait-system">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12 p-3  h-12 flex justify-center items-center text-red-500 bg-red-50 ">
                              <MdSystemUpdateAlt className="text-[2rem]" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              WAIT System
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/ai-qube-data-core">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12  h-12 p-3 flex justify-center items-center  bg-blue-50">
                              <AiCube className="text-[2rem] " />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              AI Qube Data Core
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/shotscope">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12  h-12 p-3 flex justify-center items-center  bg-blue-gray-50">
                              <RiScan2Line className="text-[2rem] text-blue-gray-900" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              ShotScope
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="lg:min-w-[250px] max-w-[300px]">
                      <h2 className="text-[1.1rem] font-bold text-blue-gray-900 mb-6 ">
                        Enterprise Software
                        <br />
                      </h2>

                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/blockchain">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12 h-12 p-3 flex justify-center items-center text-indigo-500 bg-indigo-50 ">
                              <SiBlockchaindotcom className="text-[2rem]" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              Private Blockchain Network
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/inventory-system">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12 h-12 p-3 flex justify-center items-center text-purple-500 bg-purple-50 ">
                              <MdOutlineInventory2 className="text-[2rem]" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              Inventory System
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/hrms">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-12 h-12 p-3 flex justify-center items-center text-pink-500 bg-pink-50 ">
                              <GiHumanPyramid className="text-[2rem]" />
                            </div>
                            <p className="hover:text-[#616161] text-blue-gray-700">
                              HRMS
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                className="my-1 text-blue-gray-900 -z-1 transition-colors duration-300 transform  hover:text-[#2196f3]  md:mx-4 md:my-0"
                to="/news-and-events"
              >
                News & Events
              </NavLink>
              <NavLink
                className="my-1 text-blue-gray-900 transition-colors duration-300 transform  hover:text-[#2196f3]  md:mx-4 md:my-0"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="my-1 text-blue-gray-900 transition-colors duration-300 transform  hover:text-[#2196f3]  md:mx-4 md:my-0"
                to="/about-us"
              >
                About us
              </NavLink>
              <NavLink
                className="my-1 relative text-blue-gray-900 transition-colors duration-300 transform  hover:text-[#2196f3]  md:mx-4 md:my-0"
                to="/careers"
              >
                Careers
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
