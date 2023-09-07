import React, { useEffect } from "react";
import { Footer, Header } from "../Components";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import aboutbg from "../assets/aboutbg.jpg";
import rf from "../assets/rfpower/0.png";
import sdr from "../assets/SDR/1.jpg";
import poweramp from "../assets/PowerAmp/1.png";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

import BoardMember from "../Components/BoardMember";

import { boardMember } from "../data/BoardMemberData";
import TeamMember from "../Components/TeamMember";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div className="bg-[#f5f8fa]">
      <Header />
      {/* firt section */}

      <div className="heroSection   ">
        <div
          className="  w-[100%] min-h-[400px] flex flex-col justify-center items-center gap-2 text-white"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1676676701269-65de47175adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80")`,
          }}
        >
          <h2 className="lg:text-[4rem] md:text-5xl text-4xl font-bold  drop-shadow-2xl text-center">
            Get to Know Us
          </h2>
          <h2 className="lg:text-[4rem] md:text-5xl text-4xl font-bold  drop-shadow-2xl text-center lg:mt-8 p-1">
            Our Passion, Purpose, and People
          </h2>
        </div>
      </div>

      {/* middle */}
      <div className="mt-10  ">
        <section className="  lg:pt-12 pb-0 lg:flex lg:justify-center">
          <div className="overflow-hidden  md:mx-4  lg:mx-8 md:flex md:max-w-6xl md:w-full lg:shadow-none ">
            <div className="md:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full lg:max-w-[588px] lg:h[480px] md:max-w-[480px] md:h-[500px]"
                style={{
                  backgroundImage: `url(${aboutbg})`,
                }}
              ></div>
            </div>

            <div className="md:max-w-lg sm:w-full px-4 lg:pl-12 py-12 lg:max-w-5xl lg:w-1/2">
              <div class="lineStyle h-[6px] w-[111px] bg-[#2196f3] relative top-7 left-1/2"></div>
              <h2 className="lg:text-[40px] md:text-4xl text-3xl font-semibold text-blue-gray-900  ">
                About us
              </h2>

              <p className="mt-4 lg:text-[20px] md:text-[18px] text-base text-blue-gray-800 leading-loose pb-10 ">
                Linear Amplifier Technology & Services private ltd (Linear
                Amp-tech) is a company formed and driven by innovative minds of
                Indian I.I.T Roorkee. The company is Incubated in I.I.T Roorkee
                and includes students and professors on the board of directors.
                The company is focused on innovation to cater to various
                technical challenges in the area of Electronics and Software
                Engineering.
              </p>

              <a
                href="#moretag"
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 bg-gradient-to-tr from-blue-600 to-blue-300 text-white   active:opacity-[0.85] rounded-sm font-Poppins mt-20   hover:cursor-pointer"
              >
                Read More
              </a>
            </div>
          </div>
        </section>
        <section className="  lg:pb-12 pt-0 lg:flex lg:justify-center px-4">
          <div className="overflow-hidden   lg:mx-auto lg:flex lg:max-w-6xl lg:w-full lg:shadow-none ">
            <div className=" px-0 lg:py-12 ">
              <p
                className="mt-0 md:mt-8  text-blue-gray-800  lg:text-[20px] md:text-[18px] text-base leading-loose "
                id="moretag"
              >
                The company is geared up to take on new technology development
                projects in the relevant areas. The company is primarily
                focusing on various aspects of cyber-physical system design
                including radio-frequency sensors development and addressing the
                cyber domain with Artificial intelligence and Machine Learning.
                The company is geared up to take on new technology development
                projects in the relevant areas. The company is primarily
                focusing on various aspects of cyber-physical system design
                including radio-frequency sensors development and addressing the
                cyber domain with Artificial intelligence and Machine Learning.
              </p>
              <p className="mt-4 text-blue-gray-800  lg:text-[20px] md:text-[18px] leading-loose text-base">
                The company also envisages the requirement for the specialized
                technology areas such as Radio-frequency design and hence is
                committed to the development of radios and related components to
                address the immediate needs of country’s self-reliance drive.
                The vision is to foster R&D into product design and development
                competing with cutting-edge technologies for the national and
                international market. The R&D is backed by the know-how
                generated from academics and is therefore capable of embarking
                new and advanced technology into products.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* fetuses area */}

      {/* we build awesome products */}
      <div className="lg:h-[893px] bg-gradient-to-tr from-gray-700 to-gray-900 text-slate-100  flex justify-center flex-col align-end items-center mt-12 ">
        <div className="py-16 lg:mt-32">
          <h1 className="text-white lg:text-[48px] text-3xl  font-semibold text-center">
            We build awesome products
          </h1>
        </div>

        <div
          className="lg:flex lg:flex-row flex flex-col-reverse  "
          data-aos="fade-up"
        >
          <div className="lg:h-[282px] lg:w-[477px] max-w-[477px] min-h-[282px] bg-gradient-to-tr from-gray-900 to-gray-700 text-white px-8 lg:pt-8 pt-4 pb-4 lg:pb-0 flex gap-3 flex-col">
            <h1 className="text-[20px] font-semibold">RF Power Amplifiers</h1>
            <p className="">
              Linear Amptech provides excellent indigenous power amplifier
              solution for Cellular application and variety of military and
              space applications. We provide vast range of high performance
              power amplifiers with frequency coverage from Dc to 18 GHz.
            </p>
            <div>
              <NavLink
                to={"/products/software-defined-radio"}
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-white text-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] font-Poppins rounded-sm "
              >
                Read more
              </NavLink>
            </div>
            {/* <Button
              size="md"
              className="font-Poppins rounded-sm"
              variant="outlined"
              color="white"
            >
              {" "}
              Read More
            </Button> */}
          </div>
          <div className="h-[282px] lg:w-[477px] max-w-[477px] sm-max-w-[350px] bg-white ">
            <img src={rf} className="h-[100%]" />
          </div>
        </div>

        <div className="lg:flex  " data-aos="fade-up">
          <div className="h-[282px] lg:w-[477px] max-w-[477px] ">
            <img src={sdr} className="h-[100%] " />
          </div>
          <div className="lg:h-[282px] lg:w-[477px] max-w-[477px] min-h-[282px] bg-gradient-to-tr from-blue-600 to-blue-400 text-white px-8 lg:pt-4 pt-2 pb-4 lg:pb-0 flex flex-col gap-3 ">
            <h1 className="text-[20px] font-semibold">
              Software Defined Point to Point Radio Applications
            </h1>
            <p className="">
              With the advent of Software Defined Radio (SDR) the radio hardware
              scaled down to software and most of the features is pushed into
              software. In the scenario of war, the communication significantly
              depends on flexibility, interoperability, accuracy, and
              promptness.
            </p>
            <div>
              <NavLink
                to={"/products/software-defined-radio"}
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-white text-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] font-Poppins rounded-sm "
              >
                Read more
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className="lg:flex lg:flex-row flex flex-col-reverse "
          data-aos="fade-up"
        >
          <div className="lg:h-[282px] lg:w-[477px] max-w-[477px] min-h-[282px] bg-gradient-to-tr from-gray-900 to-gray-700 text-white px-8 lg:pt-8 pt-4 pb-4 lg:pb-0 flex flex-col gap-3 ">
            <h1 className="text-[20px] font-semibold">
              RF linear and nonlinear characterization
            </h1>
            <p className="">
              Our capabilities lies in the generation of single and multiple
              Tone, modulated signals like QAM, OFDM, LTE, pulse shaping in
              baseband and transmission in analog domain. The testbed designed
              is capable of performing the measurement of active devices as well
              as passive devices.
            </p>
            <div>
              <NavLink
                to={"/products/software-defined-radio"}
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-white text-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] font-Poppins rounded-sm "
              >
                Read more
              </NavLink>
            </div>
          </div>
          <div className="h-[282px] max-w-[477px]  border-b border-r border-gray-300">
            <img src={poweramp} className="h-[100%]" />
          </div>
        </div>
      </div>
      {/* BOARD of Directors */}
      <div className="lg:mt-64 mb-20">
        <section className=" ">
          <div className="container px-6 py-10 mx-auto mt-12">
            <h1 className="lg:text-[40px] text-4xl font-semibold text-center text-black capitalize ">
              Board Of Directors
            </h1>

            <p className="max-w-6xl text-[20px] mx-auto my-6 text-center text-black ">
              Our board of directors comprises seasoned professionals who
              possess a wealth of knowledge and expertise in various fields. We
              are honored to have a world-renowned power amplifier expert Dr.
              Karun Rawat, a professor from IIT Roorkee, and an experienced
              member in the field of electronics communication on our board.
              With their diverse skill sets and leadership, we are well-equipped
              to steer our organization towards success and deliver outstanding
              outcomes to our stakeholders
            </p>

            <div className="flex flex-wrap gap-12 justify-center mt-2 xl:mt-12 ">
              {boardMember.map((member) => {
                return <TeamMember member={member} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* GET to know */}
      <hr />
      <section className=" bg-gradient-to-tr from-blue-600 to-blue-400">
        <div className="container px-4 lg:py-16 py-8 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="lg:text-4xl text-3xl  font-medium tracking-tight  text-white">
            Get to know today!
          </h2>

          <div className="mt-8 lg:mt-0 ">
            <div className="flex  flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <NavLink
                to={
                  "https://www.linkedin.com/company/linear-amptech/?originalSubdomain=in"
                }
                className="align-middle select-none  text-base text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3.5 px-7 bg-gradient-to-tr from-gray-900 to-gray-700 text-white shadow-md  active:opacity-[0.85] rounded-sm uppercase"
                target="_blank"
              >
                Read more
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
