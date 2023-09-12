import { Carousel, IconButton, Button } from "@material-tailwind/react";
import first from "../assets/first.jpg";
import second from "../assets/second.png";
import third from "../assets/third.png";
import { NavLink } from "react-router-dom";

export default function Slider2() {
  return (
    <Carousel
      className="rounded-none bg-white  "
      loop={true}
      autoplay={true}
      autoplayDelay={"9000"}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 left-[55%] z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1  rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "w-2 h-2 rounded-full bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handlePrev}
          className="!absolute bottom-1 right-16 rounded-full bg-white/10  -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handleNext}
          className="!absolute bottom-1 !right-4 rounded-full bg-white/10 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="bg-white">
        <div className="lg:flex  shadow-md">
          <div className="flex items-center justify-center w-full px-6   lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-gray-900  lg:text-[56px] leading-snug ">
                Cyber physical system
              </h2>

              <p className="mt-4 text-sm text-blue-gray-600  lg:text-lg">
                Refers to a system that integrates physical devices with a cyber
                interface for monitoring and controlling the physical world. The
                company is focusing on innovation in CPS for various
                applications such as
                <span className="">Traffic Solutions</span>, Industry 4.0, and
                Defence Platforms, and is seeking unique sensors for innovative
                solutions such as Gun-Shot Detection, RF Location-Finding, and
                Correlation Interferometry, amonog others.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                <NavLink
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-blue-900/10 hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm shadow-none hover:shadow-none"
                  to="/innovations"
                >
                  Discover
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[700px]"
              style={{
                backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/027/187/520/non_2x/reinventing-industry-3d-insights-into-industrial-iot-s-data-revolution-ai-generated-free-photo.jpg")`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex  shadow-md">
          <div className="flex items-center justify-center w-full px-6   lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-gray-900  lg:text-[56px] leading-snug ">
                Artificial Intelligence and Machine Learning
              </h2>

              <p className="mt-4 text-sm text-blue-gray-600  lg:text-lg">
                We are committed to evolving as Deep Tech Comapany. Artificial
                Intelligence and Machine Learning is one the innovative areas to
                which we are keen to contribute. Our recent innovation involves
                the development of and ML Pipleline in our own Network-Attached
                Storage (NAS) and computational Platform for executing all the
                background algorithms.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                <NavLink
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/10 hover:shadow-blue-900/20 active:opacity-[0.85] rounded-sm shadow-none hover:shadow-none"
                  to="/innovations"
                >
                  Discover
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[700px]"
              style={{
                backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/001/255/052/non_2x/artificial-intelligence-chip-and-network-connection-lines-vector.jpg")`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex  shadow-md">
          <div className="flex items-center justify-center w-full px-6   lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-gray-900  lg:text-[56px] leading-snug ">
                The Radio Frequency Components
              </h2>

              <p className="mt-4 text-sm text-blue-gray-600  lg:text-lg">
                The company has a strong research background, with directors
                from I.I.T-Roorkee who are working in cutting-edge radio
                frequency technologies. Their recent R&D focus includes
                intelligent reflecting surfaces, multi-octave GAN MMICs, and
                millimeter-wave RFICs in CMOS and SiGe BiCMOS. Overall, the
                company is dedicated to pushing the boundaries of radio
                frequency technology and providing innovative solutions to their
                clients.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                <NavLink
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/10 hover:shadow-blue-900/20 active:opacity-[0.85] rounded-sm shadow-none hover:shadow-none"
                  to="/innovations"
                >
                  Discover
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[700px]"
              style={{
                backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/011/557/896/non_2x/satellite-dish-background-free-photo.jpg")`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
