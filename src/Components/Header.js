import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiRadio } from "react-icons/fi";
import { VscRadioTower } from "react-icons/vsc";
import { SiPytest, SiGoogleanalytics } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import {
  MdDesignServices,
  MdOutlineInventory2,
  MdAnalytics,
  MdSystemUpdateAlt,
  MdTrackChanges,
  MdSettingsSystemDaydream,
  MdMicrowave,
  MdClear,
} from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiCube } from "../assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isRFPowerAmp, setIsRFPowerAmp] = useState(false);
  const [isRFPassive, setIsRFPassive] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  console.log(window.innerWidth);
  // }, [window.innerWidth]);

  return (
    <div
      onMouseLeave={() => setIsDropDownOpen(false)}
      className="z-50 bg-white sticky top-0 "
    >
      <nav className="relative shadow  ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img
                className="w-auto h-10 sm:h-16 sm:w-auto"
                src={require("../assets/logo.png")}
                alt="linear-amptec-logo"
              />
            </NavLink>

            <div className="flex lg:hidden">
              <button
                onClick={() => handleClick()}
                type="button"
                className="text-gray-500 focus:outline-none duration-300  "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={` absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-6 font-semibold gap-4">
              <NavLink
                className="my-2 text-gray-700  transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="my-2 text-gray-700  transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/innovations"
              >
                Innovations
              </NavLink>

              <div
                onMouseEnter={() => setIsDropDownOpen(true)}
                // onMouseLeave={() => setIsDropDownOpen(false)}
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                className="my-2 text-gray-700 transition-colors duration-300 z-10 transform md:mx-4 md:my-0 cursor-pointer hover:text-blue-500"
                // to="/products"
              >
                Products
                {isDropDownOpen && (
                  <div className="container ease-in duration-1000 border   flex flex-wrap justify-center gap-10 text-[#929292] absolute lg:min-w-[950px] md:min-w-[768px] overflow-auto max-h-[600px] lg:left-36 md:left-[75%] left-[75%] -translate-x-[80%] translate-y-9 bg-white list-none shadow-xl rounded-xl px-10 py-12 ">
                    <div className="absolute right-4 top-4">
                      <MdClear
                        onClick={() => setIsDropDownOpen(false)}
                        className="text-[1.5rem]"
                      />
                    </div>
                    <div className="lg:w-[20%] min-w-[250px]  flex flex-col gap-6 ">
                      <h2 className="text-[1.2rem]  font-bold text-[#0346B5]">
                        Linear Amptech
                      </h2>
                      <p>
                        Creating Difference With <br /> Technology
                      </p>
                      <button className=" border-[2px] border-primary-color text-primary-color py-2 px-3 w-32  duration-300">
                        Learn more
                      </button>
                    </div>
                    <div className="lg:w-[30%] max-w-[300px]">
                      <NavLink to="/products/rf-design-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
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
                              <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                                <MdMicrowave className="text-[1.5rem]" />
                              </div>
                              <p className="hover:text-[#616161">
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
                            <div className="flex gap-4 items-center justify-start w-[100%] hover:text-[#616161">
                              <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                                <MdMicrowave className="text-[1.5rem]" />
                              </div>
                              <p className="hover:text-[#616161">
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
                          <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                            <MdDesignServices className="text-[1.5rem]" />
                          </div>
                          <NavLink to="/products/rf-passive/GaN-MMIC">
                            <p className="hover:text-[#616161]">
                              GaN MMIC Designs
                            </p>
                          </NavLink>
                        </li>
                        <NavLink to="/products/sdr-test-bed">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiPytest className="text-[1.2rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              SDR Test-Beds
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiGoogleanalytics className="text-[1.2rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Transmitter Linearization & Antenna Solutions
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="lg:w-[30%] max-w-[300px]">
                      <NavLink to="/products/cyber-physical-system-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Cyber Physical Systems <br />
                          and Artificial Intelligence
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/cyber-physical-system-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdSystemUpdateAlt className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">WAIT System</p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/ai-qube-data-core">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <AiCube className="w-5 h-5" />
                            </div>
                            <p className="hover:text-[#616161]">
                              AI Qube Data Core
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="lg:w-[30%] max-w-[300px]">
                      <NavLink to="/products/cyber-physical-system-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Enterprise Software
                          <br />
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/inventory-system">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdOutlineInventory2 className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Inventory System
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/ai-qube-data-core">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <GiHumanPyramid className="w-5 h-5" />
                            </div>
                            <p className="hover:text-[#616161]">HRMS</p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                className="my-2 text-gray-700 -z-1 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/news-and-events"
              >
                News & Events
              </NavLink>
              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/about-us"
              >
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
