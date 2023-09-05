import { Carousel, IconButton, Button } from "@material-tailwind/react";
import first from "../assets/first.jpg";
import second from "../assets/second.png";
import third from "../assets/third.png";

export default function Slider2() {
  return (
    <Carousel
      className="rounded-none bg-white  "
      loop={true}
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
      <div>
        <div className="lg:flex bg-blue-gray-50/30 shadow-md">
          <div className="flex items-center justify-center w-full px-6   lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-gray-900  lg:text-[56px] leading-none ">
                Cyber physical system
              </h2>

              <p className="mt-4 text-sm text-blue-gray-600 dark:text-gray-400 lg:text-lg">
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
                <Button size="lg" className="rounded-none shadow-none">
                  Button
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  className="rounded-none shadow-none"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[700px]"
              style={{
                backgroundImage: `url(${first})`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
            {/* <div className="h-[200px] w-full bg-blue-gray-100 px-8 py-2">
              <h3 className=" text-2xl font-semibold text-blue-gray-900">
                Hello Guest
              </h3>

              <p className=" text-gray-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                eum modi incidunt adipisci quod porro et non
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex bg-blue-gray-50 shadow-md">
          <div className="flex items-center justify-center w-full px-6   lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-gray-900  lg:text-[56px] leading-none ">
                Artificial Intelligence and Machine Learning
              </h2>

              <p className="mt-4 text-sm text-blue-gray-600 dark:text-gray-400 lg:text-lg">
                We are committed to evolving as Deep Tech Comapany. Artificial
                Intelligence and Machine Learning is one the innovative areas to
                which we are keen to contribute. Our recent innovation involves
                the development of and ML Pipleline in our own Network-Attached
                Storage (NAS) and computational Platform for executing all the
                background algorithms.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                <Button size="lg" className="rounded-none shadow-none">
                  Button
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  className="rounded-none shadow-none"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[700px]"
              style={{
                backgroundImage: `url(${second})`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
            {/* <div className="h-[200px] w-full bg-blue-gray-100 px-8 py-2">
              <h3 className=" text-2xl font-semibold text-blue-gray-900">
                Hello Guest
              </h3>

              <p className=" text-gray-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                eum modi incidunt adipisci quod porro et non exercitationem
                quasi, maxime culpa ut nemo ab delectus saepe iste nostrum
                explicabo a?
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex bg-blue-gray-50 shadow-md">
          <div className="flex items-center justify-center w-full px-6   lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-gray-900  lg:text-[56px] leading-none ">
                The Radio Frequency Components
              </h2>

              <p className="mt-4 text-sm text-blue-gray-600 dark:text-gray-400 lg:text-lg">
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
                <Button size="lg" className="rounded-none shadow-none">
                  Button
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  className="rounded-none shadow-none"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[700px]"
              style={{
                backgroundImage: `url(${third})`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
            {/* <div className="h-[200px] w-full bg-blue-gray-100 px-8 py-2">
              <h3 className=" text-2xl font-semibold text-blue-gray-900">
                Hello Guest
              </h3>

              <p className=" text-gray-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                eum modi incidunt adipisci quod porro et non exercitationem
                quasi, maxime culpa ut nemo ab delectus saepe iste nostrum
                explicabo a?
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </Carousel>
  );
}
