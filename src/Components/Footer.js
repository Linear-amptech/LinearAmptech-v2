import React from "react";
import { NavLink } from "react-router-dom";
import pdf from "../assets/media/PRIVACY-POLICY.pdf";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-tr from-gray-900 to-gray-800 text-slate-100 ">
        <div className="container px-6 py-12 mx-auto">
          {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" /> */}

          <div className="flex  justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-100 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <NavLink
                  to="/"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/innovations"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Innovations
                </NavLink>
                <a
                  href={pdf}
                  target="_blank"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="">
              <p className="font-semibold text-gray-100  dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  +91 6354814759
                </a>
                <a
                  href="#"
                  className="text-gray-100 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  hello@linear-amptech.com
                </a>
                <p className="mt-4 text-md text-gray-100 sm:mt-0 dark:text-gray-300">
                  Incubation building IHUB DivyaSampark (Near Wind Tunnel
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

            <p className="mt-4 text-sm text-gray-100 sm:mt-0 dark:text-gray-300">
              © Linear Amp-Tech 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
