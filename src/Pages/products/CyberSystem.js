import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { Footer, Header, OurProduct } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";
import waitSysVideo from "../../assets/video/waitSysVideo.mp4";

const CyberSystem = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />

      <OurProduct />

      <div className="text-[1.3rem] leading-relaxed lg:px-[15%] px-6 text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          data-aos="fade-up"
        >
          Cyber Physical Systems and Signal Processing
        </h2>
        <p className="my-10">
          The Cyber-physical system (CPS) in general refers to an ecosystem of
          sensors, their cyber interface, and the interpretation of data
          collected for exhibiting to the user interface. The primary role of
          CPS, in general, is to monitor and control the physical world. This
          monitoring and control is assisted by incorporating the physical
          device with a cyber-process, which may include sensing, computation,
          and control.
        </p>
        <p>
          This product line primarily focused on solving traffic congestions and
          safety related problems in smart cities, highways and unregulated
          single lane bridges and tunnels. The product line covers the wholestic
          approach of traffic regulations and safety including Dynamic Warning
          signs in the Smart poles activated with sensors such as RADAR etc. as
          well as city traffic regulations using computer vision technology
          assisted by Traffic cameras. Interestingly, our city-centric traffic
          navigation system can plan the traffic management of the whole city
          with our AI/ML platform.
          {/* </p> */}
          {/* <p> */} The company is focusing on innovations related to new CPS
          for many multi-disciplinary applications such as intelligent traffic
          solutions, industry 4.0, and defense situation awareness platforms.
          Accordingly, some sensors which are unique and not readily available
          are also in the wish list of our innovation teams such as Gun-shot
          detection, RF location-finding (LF), and direction- finding (DF)
          applications, correlation interferometry, and pseudo-Doppler methods,
          etc.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>
      <div
        className="w-[100vw] overflow-hidden h-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="w-[200px] absolute origin-center -right-20 -translate-y-[20%]" />
      </div>
      <div className="productContainer  w-[100%] text-[1.2rem] leading-relaxed ">
        <div className="lg:flex  justify-center gap-16 my-36 px-[10%]">
          <div className="lg:w-[400px] lg:h-[400px] md:w-[600px] md:h-[600px] h-[350px] w-[350px] bg-[#F2F2F2] flex justify-center rounded-2xl shadow-md">
            <img
              src={require("../../assets/WaitSystem/wait1.jpeg")}
              className="w-[100%]  "
            ></img>
          </div>
          <div className="lg:w-[800px] max-w-[600px] flex flex-col  justify-between">
            <div>
              <h2
                className="text-[2rem] font-bold mb-5 mt-12 lg:mt-0 "
                data-aos="fade-up"
              >
                WAIT System
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                The WAIT an acronym here for Warning Ahead of Intersection &
                Turns is a product suitable for early warning in blind turns and
                highlyway intersections with rural roads. This early warning
                system is based on RADAR sensing to detect the approaching
                vehicles in the blind turns and highway intersections and warn
                drivers abour approaching vehicles. Such early warnings can save
                accidents in blind turns in mountain regions and highway turns.
                In addition, such asystem can also operate in narrow mountain
                passages, bridges and tunnels for traffic regulations and to
                avoid congestion. The system is assisted with computer vision
                technology to detect the license plates of vihles violating the
                traffic rules and regulations and assist the authorities to
                generate regulatory penalties and tickets.
              </p>
            </div>
            {/* <a className="underline cursor-pointer hover:text-blue-800">more</a> */}
          </div>
        </div>{" "}
        <div className="w-[100vw] ">
          <div data-aos="fade-up" data-aos-duration="1500">
            <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
          </div>
        </div>
        {/* <div className="w-[100vw] h-[100px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
          </div>
        </div> */}
      </div>
      <div className="imgContainer flex flex-col  lg:gap-24 gap-12">
        <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-32 md:gap-12 sm:gap-10 gap-5 flex-col justify-center">
          <div className="max-w-[550px] flex justify-center items-center">
            <img
              src={require("../../assets/WaitSystem/2.png")}
              className="w-[400px]"
            ></img>
          </div>
          <div className="max-w-[550px] flex justify-center items-center">
            <img
              src={require("../../assets/WaitSystem/wait4.png")}
              className="w-[400px]"
            ></img>
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-32 md:gap-12 sm:gap-10 gap-5 flex-col justify-center">
          <div className="max-w-[550px] flex justify-center items-center">
            <img
              src={require("../../assets/WaitSystem/4.png")}
              className="w-[400px]"
            ></img>
          </div>
          <div className="max-w-[550px] flex justify-center items-center">
            <img
              src={require("../../assets/WaitSystem/5.png")}
              className="w-[400px]"
            ></img>
          </div>
        </div>
      </div>
      <div className="lg:flex  justify-center flex-col gap-12 my-40 px-[10%]">
        <h3 className="text-[3rem] font-bold">Video </h3>
        <section className="bg-[#6A6A6A] max-w-[1085px] m-auto max-h-[564px] border ">
          <video
            src={waitSysVideo}
            controls
            className="z-10"
            preload
            poster={require("../../assets/banner.png")}
          />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CyberSystem;
