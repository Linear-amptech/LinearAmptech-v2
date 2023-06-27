import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { Footer, Header } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";
import foucusImg from "../../assets/product-focus-bg.png";

const AIandML = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      {/* <div className="w-[100%] h-[100%]">
        <div className="absolute w-[100%] h-[100%] lg:top-[35%] md:top-[30%]   sm:top-[25%] top-[15%]">
          <h2
            className="lg:text-[5rem] md:text-6xl text-4xl font-bold font-Roboto drop-shadow-2xl text-center text-white "
            data-aos="fade"
            data-aos-duration="1000"
          >
            Elevate Your Life with <br />
            Our Products
          </h2>
        </div>
        <img src={require("../../assets/bg.png")} className="w-[100%]"></img>
      </div> */}
      <div className="heroSection z-0 w-[100%]  h-[400px] overflow-hidden flex  ">
        <div className=" absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2  text-white">
          <h2 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-bold font-Roboto ">
            Our Products
          </h2>
          <p className="lg:text-[1.8rem] font-normal mb-4 ">
            Solutions for a smarter, more connected future
          </p>
        </div>

        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%]  "
        ></img>
      </div>
      <div className="text-[1.3rem] leading-relaxed px-[15%] text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          data-aos="fade-up"
        >
          Artificial Intelligence & Machine Learning
        </h2>
        <p className="my-10">
          The company has a strong research background in various RF components
          including Radio Frequency Power Amplifier Design, MMICs, Transmitter
          Linearization, SDR test beds and Radio frequency passive components.
        </p>
        <p>
          Linear Amptech has been making remarkable strides in the field of
          Artificial Intelligence and Machine Learning. Our company has been
          dedicated to developing cutting-edge solutions that utilize the latest
          advancements in AI and ML to help businesses make better decisions,
          improve their operations, and achieve their goals. We specialize in
          four key areas:
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
      <div className="productContainer  w-[100%] text-[1.2rem] leading-relaxed">
        <div className="lg:flex  justify-center gap-16 my-36 px-[10%]">
          {/* <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl shadow-md"> */}
          <img
            src={require("../../assets/AI&ML/1.png")}
            className="w-[500px]"
          ></img>
          {/* </div> */}
          <div className="lg:w-[800px] max-w-[500px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Analytics
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                At Linear Amptech, we understand the importance of data
                analytics for businesses. Our analytics solutions use advanced
                algorithms to extract meaningful insights from complex data
                sets, helping businesses make informed decisions. Our team of
                experts helps clients identify key performance indicators (KPIs)
                and design dashboards that provide real-time insights into
                business performance.
              </p>
            </div>
            {/* <a className="underline cursor-pointer hover:text-blue-800">more</a> */}
          </div>
        </div>

        <div className="lg:flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="lg:w-[800px] max-w-[500px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Observability
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                Observability is crucial to identifying and resolving issues
                that can impact the performance of a system. Our observability
                solutions provide real-time monitoring of key performance
                metrics, giving businesses the ability to identify and resolve
                issues before they become critical. We use advanced analytics
                and machine learning algorithms to identify anomalies and
                provide actionable insights.
              </p>
            </div>
            {/* <a className="underline cursor-pointer hover:text-blue-800">more</a> */}
          </div>
          {/* <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl"> */}
          <img
            src={require("../../assets/AI&ML/2.png")}
            className="w-[500px]"
          ></img>
          {/* </div> */}
        </div>

        <div className="w-[100vw] h-[100px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
          </div>
        </div>

        <div className="lg:flex  justify-center gap-16 my-40 px-[10%]">
          <img
            src={require("../../assets/AI&ML/3.png")}
            className="w-[500px]"
          ></img>

          <div className="lg:w-[800px] max-w-[500px] lg:flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Predictive Maintenance
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                Predictive maintenance is a critical aspect of modern
                manufacturing processes. Our predictive maintenance solutions
                utilize advanced machine learning algorithms to predict
                equipment failures before they occur, allowing businesses to
                schedule maintenance and minimize downtime. Our solutions can
                help businesses reduce maintenance costs, improve equipment
                reliability, and increase productivity
              </p>
            </div>
            {/* <a className="underline cursor-pointer hover:text-blue-800">more</a> */}
          </div>
        </div>
      </div>
      <div className="w-[100vw] ">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>
      </div>
      <div
        className="text-white text-[1.3rem] leading-relaxed"
        style={{ backgroundImage: `url(${foucusImg})` }}
      >
        <div className=" py-10 px-[12%] ">
          <h2
            className="text-[3rem] font-bold text-center mb-10"
            data-aos="fade-up"
          >
            What we focus
          </h2>
          <p className="">
            Linear Amplifier Technology & Services private ltd (Linear Amp-tech)
            is a company formed and driven by innovative minds of Indian I.I.T
            Roorkee. The company is Incubated in I.I.T Roorkee and includes
            students and professors on the board of directors.
            <br />
            <br /> The company is focused on innovation to cater to various
            technical challenges in the area of Electronics and Software
            Engineering. The company is geared up to take on new technology
            development projects in the relevant areas. The company is primarily
            focusing on various aspects of cyber-physical system design
            including radio-frequency sensors development and addressing the
            cyber domain with Artificial intelligence and Machine Learning. The
            company also envisages the requirement for the specialized
            technology areas such as Radio-frequency design and hence is
            committed to the development of radios and related components to
            address the immediate needs of country’s self-reliance drive.
            <br />
            <br /> The vision is to foster R&D into product design and
            development competing with cutting-edge technologies for the
            national and international market. The R&D is backed by the know-how
            generated from academics and is therefore capable of embarking new
            and advanced technology into products. <br />
            <br />
            We are dedicated to exploring new technologies in our core product
            areas and have established a good ecosystem between academics and
            industry for technology development with innovation. We have a
            strong team with I.I.T background who are continuously innovating
            new technology solutions for the company. We believe in continuous
            innovation for bringing cutting-edge technologies to the market.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIandML;
