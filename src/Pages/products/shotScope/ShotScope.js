import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import AOS from "aos";
import { FaPlayCircle } from "react-icons/fa";
import "aos/dist/aos.css";
import "../../../../node_modules/react-modal-video/css/modal-video.css";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import { Footer, Header, OurProduct } from "../../../Components";
import { BgElement1, BgElement2, BgElement3 } from "../../../assets";
import poster from "../../../assets/shotscope/banner_last.webp";
import "./shotScope.css";

const ShotScope = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div className="bg-[#f5f8fa]">
      <Header />
      <OurProduct />

      <div>
        <section className="  lg:pt-8 pt-4 xl:pt-12 ">
          <h2 className="text-center font-bold text-[2rem] mb-10 text-gray-900">
            ShotScope
          </h2>
          <div className="">
            <div className="container lg:flex lg:px-[12%] pt-12 mx-auto text-left px-4">
              <div className="lg:w-full relative">
                <Player
                  playsInline
                  poster={poster}
                  src="https://videos.pexels.com/video-files/4440937/4440937-hd_1920_1080_25fps.mp4"
                >
                  <BigPlayButton position="center" />
                </Player>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="absolute w-[100vw] overflow-hidden h-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="lg:w-[300px] absolute origin-center w-[180px] -right-20 lg:-right-36 -translate-y-[20%]" />
      </div>

      <div className="lg:pr-44 lg:pl-44 mt-16">
        <section className="">
          <div className="container px-4 py-12  mx-auto">
            <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-gray-900 capitalize   ">
              Problems
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-left bg-white rounded-sm shadow-sm   ">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/028/216/746/small/night-vision-sniper-on-rooftop-futuristic-warfare-game-illustration-with-shooting-character-ai-generated-photo.jpg"
                  className="h-[236px] w-full object-cover"
                />
                <div className="px-4 py-4">
                  <span className="inline-block p-3  text-[#451952] bg-[#451952]/10   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </span>

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Hidden Threat
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Rising number of concealed terrorist camps near Indian
                    borders pose a critical security threat.
                  </p>
                </div>
              </div>

              <div className="text-left  bg-white rounded-sm shadow-sm  ">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/008/925/188/large_2x/9mm-bullets-and-9mm-bullet-case-on-shooting-target-paper-soft-and-selective-focus-free-photo.jpg"
                  className="h-[236px] w-full object-cover"
                />
                <div className="p-4">
                  <span className="inline-block p-3  text-[#0F2C59] bg-[#0F2C59]/10   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                      />
                    </svg>
                  </span>

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Ineffective Surveillance
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Existing visual detection systems suffer from slow and
                    inaccurate responses.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-sm shadow-sm   ">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/305/004/non_2x/3d-render-object-the-concept-of-sale-promotion-and-online-marketing-with-clipping-path-the-main-object-free-photo.jpg"
                  className="h-[236px] w-full object-cover"
                />
                <div className="p-4">
                  <span className="inline-block p-3  text-[#57375D] bg-[#57375D]/10   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                      />
                    </svg>
                  </span>

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Low Accuracy and limited scope
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Current systems focus solely on ground-level threats,
                    leaving high-rise shooter undetected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-40 lg:pl-40 mt-16">
        <section className="">
          <div className="container px-4 py-10 mx-auto">
            <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-8   ">
              Our Product Features
            </h1>

            <div className="mt-2 lg:flex lg:items-center">
              <div className="grid w-full grid-cols-1 gap-8  xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2 bg-white rounded-sm  shadow-sm   ">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/011/376/717/non_2x/isometric-technology-3d-design-abstract-futuristic-cubes-design-and-different-geometric-shapes-digital-and-artificial-intelligence-blockchain-tech-illustration-free-vector.jpg"
                    className="h-[236px] w-full object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block p-3 text-[#27005D] bg-[#27005D]/10  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                      Central control of gunshot incidents and their locations
                      for critical areas is crucial for national security
                    </h1>
                  </div>
                </div>

                <div className="space-y-2 bg-white rounded-sm shadow-sm ">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/041/445/949/small/ai-generated-a-single-bullet-in-motion-with-a-trail-of-smoke-and-fire-against-a-dark-background-photo.jpg"
                    className="h-[236px] w-full object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block p-3  text-[#1D5D9B] bg-[#1D5D9B]/10   ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                      In combat situations, identifying the source of gunfire is
                      essential for the safety and success of military
                      operations.
                    </h1>
                  </div>
                </div>

                <div className="space-y-2  bg-white rounded-sm shadow-sm   ">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/885/063/small/3d-rendering-flow-dot-with-gradient-background-photo.jpg"
                    className="h-[236px] w-full object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block p-3  text-[#016A70] bg-[#016A70]/10   ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Empowering human ears with advanced technology to swiftly
                      detect and locate hidden snipers.
                    </h1>
                  </div>
                </div>

                {/* <div className="space-y-2 bg-white rounded-sm shadow-sm   ">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/025/503/471/non_2x/cloud-storage-for-downloading-digital-service-or-application-with-data-transmission-network-computing-technologies-futuristic-server-digital-space-data-storage-generative-ai-illustration-free-photo.jpg"
                    className="h-[236px] w-full object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block p-3  text-[#176B87] bg-[#176B87]/10   ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                      ETL/ELT Pipeline
                    </h1>
                  </div>
                </div>
                <div className="space-y-2 bg-white rounded-sm shadow-sm ">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/011/885/186/non_2x/big-data-analytics-bi-intelligence-business-concept-with-chart-and-graph-icons-on-interface-and-businessman-holding-pen-touching-virtual-screen-free-photo.jpg"
                    className="h-[236px] w-full object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block p-3  text-[#E25E3E] bg-[#E25E3E]/10   ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                      Data Analytics
                    </h1>
                  </div>
                </div>
                <div className="space-y-2 bg-white rounded-sm  shadow-sm">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/022/819/862/non_2x/artificial-intelligence-server-free-photo.JPG"
                    className="h-[236px] w-full object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block p-3  text-[#435334] bg-[#435334]/10   ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                      Plug and Play your Machine Learing and Deep Learning
                      models
                    </h1>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white  mx-[12%]">
        <div>
          <section className=" lg:mt-8 mt-4 xl:mt-12 ">
            <div className="container lg:flex justify-center items-center  pt-12 mx-auto text-left px-4">
              <div className="lg:w-[50%]">
                <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-blue-gray-900 mb-2 ">
                  Enhanced Surveillance During Cross-Border Operations
                </h2>

                <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem] text-gray-700">
                  In the chaos of cross-border firing, our system's array of
                  acoustic sensors springs into action, offering a comprehensive
                  auditory landscape of the battlefield. Strategically
                  positioned along the border, these sensors serve as vigilant
                  guardians, detecting the telltale sounds of gunfire amidst the
                  cacophony of the environment.
                </p>
              </div>
              <div className="lg:w-[50%] flex justify-center items-center">
                <img
                  src={require("../../../assets/shotscope/shotscope2.png")}
                  className="w-[750px] h-auto  rounded-md shadow-lg"
                ></img>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className=" lg:mt-8 mt-4 xl:mt-12 mb-12 pb-12">
            <div className="container lg:flex justify-center items-center gap-10  pt-12 mx-auto text-left px-4">
              <div className="lg:w-[50%]  flex justify-center items-center">
                <img
                  src={require("../../../assets/shotscope/shotscope.png")}
                  className="w-[400px] h-auto lg:px-20 px-4 shadow-md rounded-md"
                ></img>
              </div>
              <div className="lg:w-[50%]">
                <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-blue-gray-900 mb-2 ">
                  Next-Gen Gunshot Detection Integration
                </h2>

                <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem] text-gray-700">
                  Experience the future of security with our cutting-edge
                  Gunshot Detection System. Seamlessly connecting to central
                  control via LoRA technology, this system revolutionizes threat
                  response. Upon detection, it instantly pinpoints shooter
                  locations on an intuitive map GUI, providing immediate
                  situational awareness.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* <div className="mb-20">
          <section className=" lg:mt-8 mt-4 xl:mt-12 ">
            <div className="container lg:flex justify-center items-center gap-10  pt-12 mx-auto text-left px-4">
              <div className="lg:w-[50%]">
                <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-blue-gray-900 mb-2 ">
                  IoT Data Analytics
                </h2>

                <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem] text-gray-700">
                  Harness the power of AI-driven analytics to optimize
                  production processes, improve predictive maintenance, and gain
                  valuable insights into your operations. Leverage AI-generated
                  insights to make data-driven decisions, enabling better
                  resource allocation and risk mitigation.
                </p>
              </div>
              <div className="lg:w-[50%] flex justify-center items-center">
                <img
                  src={require("../../../assets/AIQube/4.png")}
                  className="w-[750px]"
                ></img>
              </div>
            </div>
          </section>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ShotScope;
