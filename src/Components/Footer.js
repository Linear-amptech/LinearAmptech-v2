import React from "react";
import { NavLink } from "react-router-dom";
import pdf from "../assets/media/PRIVACY-POLICY.pdf";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-tr from-gray-900 to-gray-800 text-slate-100 ">
        <div className="container px-6 py-12 mx-auto">
          {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}

          <div className="flex  justify-between lg:gap-4 gap-8 w-full lg:flex-nowrap flex-wrap">
            <div className="min-w-[300px]">
              <p className="font-semibold text-gray-50 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <NavLink
                  to="/"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/innovations"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  Innovations
                </NavLink>
                <a
                  href={pdf}
                  target="_blank"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="min-w-[300px]">
              <p className="font-semibold text-gray-50 dark:text-white">
                Products
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <NavLink
                  to="/products/ai-qube-data-core"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  AI Qube Data Core
                </NavLink>
                <NavLink
                  to="/products/cyber-physical-system-and-signal-processing"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  WAIT System
                </NavLink>
                <NavLink
                  to="/products/blockchain"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  Private Blockchain Network
                </NavLink>
                <NavLink
                  to="/products/rf-power-amplifiers"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  RF Power Amplifier
                </NavLink>
                <NavLink
                  to="/products/rf-passive-components"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  RF Passive Components
                </NavLink>
                <NavLink
                  to="/products/rf-passive/GaN-MMIC"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  GaN MMIC
                </NavLink>
                <NavLink
                  to="/products/sdr-test-bed"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  SDR Test-Beds
                </NavLink>
              </div>
            </div>

            <div className="min-w-[300px]">
              <p className="font-semibold text-gray-50  dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  +91 89796 17318
                </a>
                <a
                  href="#"
                  className="text-gray-50 transition-colors duration-300    hover:text-[#2196f3]"
                >
                  sales@linearamptech.com
                </a>
                <p className="mt-4 text-md text-gray-50 sm:mt-0 ">
                  Incubation building IHUB DivyaSampark <br /> (Near Wind Tunnel
                  Building) I.I.T Roorkee <br></br> Roorkee, Uttarakhand, India
                  247667
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img
                class="w-auto h-7 sm:h-12"
                src={require("../assets/logo.png")}
                alt=""
              />
            </a>

            <p className="mt-4 text-sm text-gray-50 sm:mt-0 ">
              © Linear Amp-Tech {new Date().getYear() + 1900}. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
