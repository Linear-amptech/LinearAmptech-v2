import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import waitSysVideo from "../assets/video/waitSysVideo.mp4";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BgElement1, BgElement2, BgElement3 } from "../assets";
import bgImg from "../assets/video/img1.jpg";
import solutionBg from "../assets/solutionBg.jpg";

import video from "../assets/video/innovation.mp4";

const Innovations = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div className="bg-[#f5f8fa]">
      <Header />
      <div className="z-10">
        <header>
          <div className="w-full lg:h-[620px]  z-0 overflow-hidden  bg-cover py-12 lg:py-0  relative bg-indigo-500">
            <video
              autoPlay
              muted
              loop
              src={video}
              className="absolute top-0 left-0 w-screen h-screen object-cover z-0 "
            />
            <div className=" relative z-10  lg:h-[612px] w-[100%] text-white  flex justify-center items-center flex-col lg:-mt-12 ">
              <h2
                className=" lg:text-[5rem] text-4xl font-bold drop-shadow-2xl  "
                data-aos="fade-up"
              >
                Innovations
              </h2>
              <p
                className="text-[1.5rem] text-2xl font-normal mb-6 lg:mt-8 "
                data-aos="fade-up"
              >
                Innovation that drives progress
              </p>
              <NavLink
                className="align-middle select-none text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3.5 px-7 border-white text-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] rounded-sm font-Poppins capitalize border-2 text-[1.1rem] font-normal"
                to="/about-us"
              >
                Read more
              </NavLink>
            </div>
            {/* <img
              src={require("../assets/video/img1.jpg")}
              className="z-10 -translate-y-40 w-[100%] "
            ></img> */}
          </div>
        </header>
        <div>
          <section className="  lg:mt-8 mt-4 xl:mt-12 ">
            <div className="container lg:flex lg:px-[12%] pt-12 mx-auto text-left px-4">
              <div className="lg:w-[50%]">
                <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-black mb-2 ">
                  Shaping the future with creativity and vision.
                </h2>

                <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem] text-gray-800">
                  Innovations are the lifeblood of progress and have the power
                  to transform the way we live, work, and interact with the
                  world around us. From the wheel to the internet, human beings
                  have been constantly pushing the boundaries of what's
                  possible, seeking new and better ways to solve problems,
                  improve efficiency, and enhance our quality of life.
                  Innovations can take many forms, from breakthrough
                  technologies and scientific discoveries to new business models
                  and social movements.
                </p>
              </div>
              <div className="lg:w-[50%] flex justify-center items-center">
                <img
                  src={require("../assets/AI&ML/1.png")}
                  className="w-[500px]"
                ></img>
              </div>
            </div>
          </section>
        </div>
        {/* <div
          className="absolute w-[100vw] overflow-hidden h-[200px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <BgElement1 className="lg:w-[300px] absolute origin-center w-[180px] -right-20 lg:-right-36 -translate-y-[20%]" />
        </div> */}
        <div className="lg:pr-44 lg:pl-44 mt-16">
          <section className=" ">
            <div className="container py-12 px-4  mx-auto">
              <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   ">
                Problems
              </h1>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                  className="text-left  shadow-sm border-slate-200  bg-white rounded-sm flex flex-col  "
                  data-aos="fade-up"
                >
                  <div className="">
                    <img src="https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>

                  <div className="px-4 py-4">
                    <h1 className="mt-0 text-[20px] font-bold font-Poppins text-blue-gray-900 px-2">
                      Limitations in maintenance process
                    </h1>

                    <p className="mt-2 text-gray-900 px-2">
                      The present maintenance process has following limitations
                    </p>

                    <div className="px-2 py-2 text-gray-700">
                      <ul className="list-square ml-4">
                        <li className="mt-4 ">
                          Skilled operator are required for analyzing thousands
                          of complex components
                        </li>
                        <li className=" mt-4">
                          Phone to mistakes due to human error
                        </li>{" "}
                        <li className="mt-4">
                          Sensor data can be utilized for predective maintenance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="text-left  shadow-sm border-slate-200  bg-white rounded-sm flex flex-col "
                  data-aos="fade-up"
                >
                  <div className="">
                    <img src="https://cdn.pixabay.com/photo/2017/09/11/09/43/industry-2738405_1280.jpg" />
                  </div>

                  <div className="px-4 py-4">
                    <h1 className="mt-0 text-[20px] font-bold font-Poppins text-blue-gray-900 px-2">
                      Increasing number of devices and sensors data
                    </h1>

                    <p className="mt-2 text-gray-900 px-2">
                      The sheer volume of data being generated can be
                    </p>

                    <div className="px-2 py-2 text-gray-700">
                      <ul className="list-square ml-4">
                        <li className="mt-4 ">Overwhelming</li>
                        <li className=" mt-4">
                          Difficult to extract data for meaningful insights
                        </li>{" "}
                        <li className="mt-4">Data is not leveraged</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="text-left  shadow-sm border-slate-200  bg-white rounded-sm flex flex-col "
                  data-aos="fade-up"
                >
                  <div className="">
                    <img src="https://cdn.pixabay.com/photo/2015/12/07/10/55/electric-1080584_1280.jpg" />
                  </div>

                  <div className="px-4 py-4">
                    <h1 className="mt-0 text-[20px] font-bold font-Poppins text-blue-gray-900 px-2">
                      Untimely maintenance can lead to machine failure
                    </h1>

                    <p className="mt-2 text-gray-900 px-2">
                      At present maintenance is done periodically or after the
                      device has been damaged, which leads to unwanted
                    </p>

                    <div className="px-2 py-2 text-gray-700">
                      <ul className="list-square ml-4">
                        <li className="mt-4 ">Downtime additional costs</li>
                        <li className=" mt-4">
                          Negatively affects productivity
                        </li>{" "}
                        <li className="mt-4">Operational efficiency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* solutions */}
        <div className="lg:pr-40 lg:pl-40 mt-16">
          <section className=" ">
            <div className="container px-4 py-10 mx-auto">
              <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-8   ">
                Solutions
              </h1>

              <div className="mt-2 lg:flex lg:items-center">
                <div className="grid w-full grid-cols-1 gap-4 lg:w-full xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div
                    className="space-y-2  shadow-sm border-slate-200  rounded-sm bg-white"
                    data-aos="fade-up"
                  >
                    <div className="inline-block ">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/010/422/007/non_2x/artificial-intelligence-cybernetic-circuit-brain-inside-high-technology-to-create-artificial-intelligence-ai-concept-illustration-free-vector.jpg"
                        className="rounded-t-sm h-[236px]w-[600px] object-cover"
                      />
                    </div>
                    <div className="px-4 pt-0 pb-4">
                      <span className="inline-block p-3  text-cyan-500 bg-cyan-50    ">
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
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                          />
                        </svg>
                      </span>

                      <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                        Machine Learning
                      </h1>

                      <p className="text-gray-700">
                        It is a generalized ML platform to provide personalized
                        solution for defence and industries.
                      </p>
                    </div>
                  </div>
                  <div
                    className="space-y-2  shadow-sm border-slate-200  rounded-sm bg-white"
                    data-aos="fade-up"
                  >
                    <div className="inline-block  ">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/024/928/388/non_2x/modern-computer-equipment-illuminates-dark-office-for-futuristic-research-generated-by-ai-free-photo.jpg"
                        className="rounded-t-sm h-[236px] w-[600px] object-cover"
                      />
                    </div>
                    <div className="px-4 pt-0 pb-4">
                      <span className="inline-block p-3  text-orange-500 bg-orange-50    ">
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
                        Real Time Data
                      </h1>

                      <p className="text-gray-700">
                        Use of real-time data predictive analytics to identify
                        and track potential problems before they occur in our
                        assets.
                      </p>
                    </div>
                  </div>

                  <div
                    className="space-y-2  shadow-sm border-slate-200  rounded-sm bg-white"
                    data-aos="fade-up"
                  >
                    <div className="inline-block ">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/007/126/117/non_2x/businessman-throwing-red-arrow-dart-to-virtual-target-dart-board-setup-objectives-and-target-for-business-investment-concept-free-photo.jpg"
                        className="rounded-t-sm h-[236px] w-[600px] object-cover"
                      />
                    </div>
                    <div className="px-4 pt-0 pb-4">
                      <span className="inline-block p-3  text-deep-orange-500 bg-deep-orange-50    ">
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

                      <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize ">
                        Acuuracy
                      </h1>

                      <p className="text-gray-700">
                        To develop a digital twin of an industrial asset that
                        accurately represents its behavior and performance.
                      </p>
                    </div>
                  </div>

                  <div
                    className="space-y-2  shadow-sm border-slate-200  rounded-sm bg-white"
                    data-aos="fade-up"
                  >
                    <div className="inline-block ">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/017/185/955/non_2x/business-intelligence-and-big-data-analysis-technology-with-chart-and-graph-icons-on-a-digital-screen-interface-innovation-in-statistics-and-analytics-insights-and-predictions-free-photo.jpg"
                        className="rounded-t-sm h-[236px] w-[600px] object-cover"
                      />
                    </div>
                    <div className="px-4 pt-0 pb-4">
                      <span className="inline-block p-3  text-green-500 bg-green-50    ">
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
                        Usefullness
                      </h1>

                      <p className="text-gray-700">
                        To predict remaining useful life (RUL) of Machines.
                      </p>
                    </div>
                  </div>

                  <div
                    className="space-y-2  shadow-sm border-slate-200  rounded-sm bg-white"
                    data-aos="fade-up"
                  >
                    <div className="inline-block ">
                      <img
                        src="https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className="rounded-t-sm h-[236px] w-[600px] object-cover"
                      />
                    </div>
                    <div className="px-4 pt-0 pb-4">
                      <span className="inline-block p-3  text-indigo-500 bg-indigo-50   ">
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
                        Deep Learning
                      </h1>

                      <p className="text-gray-700">
                        Provide research platform where teams can collaborate
                        develop deep learning models and take data driven
                        actions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="space-y-2  shadow-sm border-slate-200  rounded-sm bg-white"
                    data-aos="fade-up"
                  >
                    <div className="inline-block ">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/000/663/811/non_2x/data-security-vector.jpg"
                        className="rounded-t-sm h-[236px] w-[600px] object-cover"
                      />
                    </div>
                    <div className="px-4 pt-0 pb-4">
                      <span className="inline-block p-3  text-purple-500 bg-purple-50    ">
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
                        Premise Solution
                      </h1>

                      <p className="text-gray-700">
                        Provide on premise solution which gives full control of
                        their critical data with security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="lg:w-[300px] absolute origin-center lg:-left-36 -translate-y-[30%] w-[180px] -left-20" />
        </div>
      </div> */}

      <div className="mx-[12%] bg-white px-4 py-12 rounded-sm">
        <h2 className="text-[2.5rem] font-bold ">AI Qube Data Core</h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-[100%] lg:w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5 text-blue-gray-900">
              How it works ?
            </h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1 text-gray-800">
              <li>
                Linear Amptech's Cloud Analytics solution is designed to monitor
                sensors and generate valuable insights from them.
              </li>
              <li>
                The process begins with data ingestion, where data from various
                sensors is collected in real-time and transmitted to our
                cloud-based platform for analysis.
              </li>
              <li>
                Using advanced algorithms and machine learning techniques, we
                process the data and identify patterns and anomalies.
              </li>
              <li>
                A comprehensive analysis report is generated and shown in a user
                friendly dashboard
              </li>
              <li>
                This enables businesses to make informed decisions and take
                action based on real-time data, improving their operational
                efficiency and reducing downtime.
              </li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5 text-blue-gray-900">
              Benefits
            </h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1 text-gray-800">
              <li>
                Reduction of cost for an organisation due to process
                optimization
              </li>
              <li>No code solutions</li>
              <li>
                Reduction in time and cost to develop and deploy the IIoT app
              </li>
              <li>
                Access to advanced techniques to detect issues before the actual
                building
              </li>
            </ul>
          </div>
          <div className="rightBox w-[100%] lg:w-[50%] flex p-5">
            <img
              src={require("../assets/AI&ML/2.png")}
              className="w-[100%] h-auto"
              data-aos="zoom-out"
            ></img>
          </div>
        </div>
        {/* <h2 className="text-[1.8rem] font-bold mt-5">Diagram</h2> */}
        <img
          src={require("../assets/falcon1.png")}
          className="my-[1.5rem] "
          data-aos="zoom-out"
        ></img>
      </div>
      {/* new two big images */}
      <div className="mx-[12%] px-4 py-12 bg-white my-12">
        <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-10  rounded-sm  ">
          WAIT System
        </h1>
        <section className="bg-[#6A6A6A] max-w-[1085px] m-auto max-h-[564px] border ">
          <video
            src={waitSysVideo}
            controls
            className="z-10"
            preload
            poster={require("../assets/banner.png")}
          />
        </section>
        <p className=" leading-relaxed max-w-[1085px] m-auto mt-6 text-[1.1rem] text-justify text-gray-800">
          WAIT System stands for Warning Ahead Of Intersections and Turns.
          <br />
          Driving on rural roads in India can be risky, especially during
          winters when fog reduces visibility. Blind intersections and turns in
          hilly terrain pose a significant danger to drivers who may be slow to
          respond to honking or ignore their lanes. This can result in
          accidents, traffic jams, and road rage. However, Linear Amp Tech has
          developed an innovative solution called the Wait System, which uses
          radar technology to detect approaching vehicles and alert drivers with
          dynamic warning signs. The system can be deployed with road
          infrastructure to automatically manage traffic in remote locations
          prone to traffic jams, making driving safer and more efficient.
        </p>
      </div>
      <div className="py-12 mx-[12%] bg-white my-20 px-4 rounded-sm">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold mb-5 ">LoraWAN</h2>
        <div className="lg:flex justify-between">
          <div className="lg:w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5 text-blue-gray-900">
              Testing Hard Connections
            </h2>
            <ul className=" my-3 ml-8 flex flex-col gap-1 list-square text-gray-800">
              <li>
                Device connected to multiple gateways with varying backhaul
                performance
              </li>
              <li> Adaptive Data Rating </li>
              <li> Rapidly moving devices </li>
              <li> Uncalibrated crystals</li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5 text-blue-gray-900">
              Benefits
            </h2>
            <ul className=" my-3 ml-8 flex flex-col gap-1 list-square text-gray-800">
              <li> Run application in seconds </li>
              <li>
                Full control over gateway parameters (RSSI, gateways within
                reach)
              </li>
              <li>
                Still LoRaWAN: end-to-end encryption, spreading factors, channel
                hopping
              </li>
              <li>No changes required on network side</li>
            </ul>
          </div>
          <div className="rightBox lg:w-[50%] flex">
            <img
              src={require("../assets/lorawan1.png")}
              data-aos="zoom-out-up"
            ></img>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="lg:w-[300px] w-[200px] absolute origin-center -right-[340px] -translate-y-[50%]" />
        </div>

        <div className="imgContainer flex flex-col lg:flex-row md:flex-col justify-between items-center gap-5 mt-9">
          <img
            src={require("../assets/InnovationE.png")}
            className="w-[530px]"
            data-aos="fade-up"
          ></img>
          <img
            src={require("../assets/lorawan2.png")}
            className="w-[530px] lg:h-[376px]"
            data-aos="fade-up"
          ></img>
        </div>
      </div>
      {/* BLUE BOX */}
      <div className="lg:pr-48 lg:pl-48 h-[324px] max-w-[100%] bg-gradient-to-tr from-blue-600 to-blue-400  flex justify-center my-4 px-4 lg:m-0 lg:mt-6 justify-items-center mt-20  items-center content-center">
        <p className="text-center text-white lg:text-[20px] text-base leading-relaxed px-2 lg:px-0">
          We are dedicated to exploring new technologies in our core product
          areas and have established a good ecosystem between academics and
          industry for technology development with innovation. We have a strong
          team with I.I.T background who are continuously innovating new
          technology solutions for the company. We believe in continuous
          innovation for bringing cutting-edge technologies to the market.
        </p>
      </div>
      {/* other featues */}
      <div className="lg:pr-48 lg:pl-48 bg-[#F2F2F2]">
        <section className="bg-[#f2f2f2] ">
          <div className="container px-4 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p space-y-3   bg-white shadow-sm rounded-sm ">
                <img
                  className="object-fill object-center w-full lg:w-[100%] rounded-t-sm h-[248px]"
                  src={require("../assets/first.jpg")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold  text-blue-gray-900 capitalize  px-4 pt-2">
                  Cyber physical system
                </h1>

                <p className="text-gray-700 tracking-wide px-4 pb-6">
                  Refers to a system that integrates physical devices with a
                  cyber interface for monitoring and controlling the physical
                  world. The company is focusing on innovation in CPS for
                  various applications such as
                  <span className="">Traffic Solutions</span>, Industry 4.0, and
                  Defence Platforms, and is seeking unique sensors for
                  innovative solutions such as Gun-Shot Detection, RF
                  Location-Finding, and Correlation Interferometry, amonog
                  others.
                </p>
              </div>

              <div className=" space-y-3    rounded-sm bg-white shadow-sm ">
                <img
                  className="object-fill object-center w-full lg:w-[100%] rounded-t-sm h-[248px] "
                  src={require("../assets/second.png")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize px-4 pt-2 ">
                  AI and ML
                </h1>

                <p className="text-gray-700 px-4 pb-6">
                  We are committed to evolving as Deep Tech Comapany. Artificial
                  Intelligence and Machine Learning is one the innovative areas
                  to which we are keen to contribute. Our recent innovation
                  involves the development of and ML Pipleline in our own
                  Network-Attached Storage (NAS) and computational Platform for
                  executing all the background algorithms.
                </p>
              </div>

              <div className=" space-y-3 shadow-sm bg-white rounded-sm ">
                <img
                  className="object-cover object-center w-full lg:w-[100%] rounded-t-sm h-[248px]"
                  src={require("../assets/third.png")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold font-Poppins  text-blue-gray-900 capitalize px-4 pt-2 ">
                  The Radio Frequency Components
                </h1>

                <p className="text-gray-700 px-4 pb-6">
                  The company has a strong research background, with directors
                  from I.I.T-Roorkee who are working in cutting-edge radio
                  frequency technologies. Their recent R&D focus includes
                  intelligent reflecting surfaces, multi-octave GAN MMICs, and
                  millimeter-wave RFICs in CMOS and SiGe BiCMOS. Overall, the
                  company is dedicated to pushing the boundaries of radio
                  frequency technology and providing innovative solutions to
                  their clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Innovations;
