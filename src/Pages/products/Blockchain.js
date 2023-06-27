import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Header } from "../../Components";
import { BgElement1, BgElement2, BgElement3 } from "../../assets";

const Blockchain = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      <div className="heroSection z-0 w-[100%]  h-[400px] overflow-hidden flex  ">
        <div className=" absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2  text-white">
          <h2 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-bold font-Roboto ">
            Our Products
          </h2>
          <p className="lg:text-[1.8rem] font-normal mb-4 ">
            Solutions for a smarter, more connected
          </p>
        </div>

        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%] "
        ></img>
      </div>
      <div>
        <section className="bg-white  lg:mt-8 mt-4 xl:mt-12 ">
          <h2 className="text-center font-bold text-[2rem] mb-10">
            Blockchain Enabled Smart Contract Based Ammunition Management System
          </h2>
          <div
            className="container lg:flex lg:px-[12%]  lg:justify-between pt-12 mx-auto text-left px-4"
            data-aos="fade-up"
          >
            <div className="lg:w-[50%]">
              <h2 className="font-bold lg:text-[40px]  text-3xl text-black mb-2 ">
                Ammunition Management System
              </h2>

              <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                This innovative solution is designed to transform the way
                ammunition inventory is handled in the military, leveraging
                blockchain technology and smart contracts. Our value proposition
                lies in the ability to provide a secure, private, and efficient
                blockchain solution. Our blockchain network presents a
                significant upgrade over traditional asset tracking systems,
                providing real-time updates and ensuring complete traceability
                of each ammunition within the Indian defense ecosystem.
              </p>

              <li className="max-w-[148.8px] h-[47px] list-none bg-[#0465F8] px-5 py-2 my-4 lg:text-[18.8px] text-center  text-white  hover:scale-110  duration-300 rounded-none lg:w-auto ">
                <a href="#" target="_blank">
                  Live Demo
                </a>
              </li>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center ">
              <img
                src={require("../../assets/blockchain.png")}
                className="lg:w-[auto] object-fill  shadow-md "
              ></img>
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

      <div className="lg:pr-44 lg:pl-44 mt-16" data-aos="fade-up">
        <section className="bg-white ">
          <div className="container px-4 py-12  mx-auto">
            <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   ">
              Problems
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-left border-2 shadow-md border-slate-200  p-8">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Limited Visibility
                </h1>

                <p className="mt-2 text-black ">
                  The current system of ammunition manufacturing, shipment,
                  storage, and issue lacks adequate visibility and transparency
                  among stakeholders.
                </p>
              </div>

              <div className="text-left p-8 border-2 shadow-md border-slate-200 ">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
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
                      d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Ammunition Management Complexity
                </h1>

                <p className="mt-2 text-black ">
                  Ammunition management in the Indian Army involves multiple
                  agencies, from Ordnance Factories/manufacturers to Ammunition
                  Depots and placement in forward areas, leading to complexities
                  in coordination and oversight.
                </p>
              </div>

              <div className="border-2 shadow-md border-slate-200  p-8 ">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
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
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Manual Dependency
                </h1>

                <p className="mt-2 text-black ">
                  Presently, the process is heavily reliant on manual
                  intervention, making it both time-consuming and susceptible to
                  errors
                </p>
              </div>
              <div className="border-2 shadow-md border-slate-200  p-8 ">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Critical Need for Improvement
                </h1>

                <p className="mt-2 text-black ">
                  Efficient ammunition management is vital to defense readiness
                  and operations. Inefficient supply chain management can
                  adversely impact activities like recycling, segregation, and
                  repair of ammunition.
                </p>
              </div>
              <div className="border-2 shadow-md border-slate-200  p-8 ">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
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
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Potential of Distributed Ledger Technology and Smart Contracts
                </h1>

                <p className="mt-2 text-black ">
                  These technologies can provide real-time access to
                  information, increase the efficiency of supply chain
                  management, and provide a solution to the aforementioned
                  issues
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-44 lg:pl-44 mt-16">
        <section className="bg-white ">
          <div className="container px-4 py-12  mx-auto">
            <h1
              className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   "
              data-aos="fade-up"
            >
              We Are Here To Bring You The Solutions
            </h1>

            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              data-aos="fade-up"
            >
              <div className="text-left border-2 shadow-md border-slate-200  p-8">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Decentralization and Transparency
                </h1>

                <p className="mt-2 text-black ">
                  In typical blockchain systems, decentralization implies that
                  data is stored across multiple servers/nodes. However, for our
                  specific use-case involving sensitive defense data, we propose
                  a centralized blockchain network that would be solely operated
                  by Indian Defence. This approach will ensure that all data is
                  transparent and visible only within the confines of Indian
                  Defense, maintaining the utmost confidentiality
                </p>
              </div>

              <div className="text-left p-8 border-2 shadow-md border-slate-200 ">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Immutability:
                </h1>

                <p className="mt-2 text-black ">
                  The intrinsic nature of blockchain's immutability provides a
                  secure, unalterable record of transactions. Consequently, any
                  attempted modification of ownership transfer or ammunition
                  creation data becomes extremely challenging. This will enhance
                  the precision of ammunition tracking and assurance of data
                  integrity
                </p>
              </div>

              <div className="border-2 shadow-md border-slate-200  p-8 ">
                <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Security
                </h1>

                <p className="mt-2 text-black ">
                  Even within the already secure private network of Indian
                  Defence, the blockchain provides an additional layer of
                  protection. Its cryptographic algorithms, combined with the
                  consensus mechanism for transaction validation, make it highly
                  resistant to fraud and cyberattacks. Centralizing the
                  blockchain network within the Indian Defence and ensuring data
                  transparency only within this network would address the
                  existing ammunition management and tracking challenges
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-40 lg:pl-40 mt-16" data-aos="fade-up">
        <section className="bg-white ">
          <div className="container px-4 py-10 mx-auto">
            <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-8   ">
              Features
            </h1>

            <div className="mt-2 lg:flex lg:items-stretch">
              <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2 xl:gap-8 md:grid-cols-2">
                {/* <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                  <span className="inline-block p-3 text-[#0465F8] bg-blue-100   dark:bg-blue-500">
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

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    User Management
                  </h1>

                  <p className="text-black">
                    A feature that allows the creation, editing, and deletion of
                    users in the app. Each user can have their own set of
                    permissions, such as the ability to view, assign, or return
                    products.
                  </p>
                </div> */}

                <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Transparent and Tamper-proof Record Keeping
                  </h1>

                  <p className="text-black">
                    Every transaction made within the system, including
                    procurement, storage, usage, and transfer of ammunition, is
                    recorded on the blockchain. This secure, transparent, and
                    immutable digital ledger provides a trail of each ammunition
                    unit from procurement to usage.
                  </p>
                </div>

                <div className="space-y-2  border-2 shadow-md border-slate-200  p-4">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Automated Transactions through Smart Contracts
                  </h1>

                  <p className="text-black">
                    Smart contracts enable automatic execution of transactions
                    based on predefined rules, thus automating processes such as
                    updating inventory after procurement or usage, setting
                    reorder levels, transferring ammunition between units, and
                    decommissioning expired ammunition.
                  </p>
                </div>

                <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Single Authority Control
                  </h1>

                  <p className="text-black">
                    Our blockchain network operates on a Proof-of-Authority
                    (PoA) consensus model. Since we have setted only a single
                    node, this model assigns Indian defense as the sole
                    validator of the blockchain, leading to efficient
                    transactions eliminating competition for block validation,
                    and reducing computational waste. This ensures that the
                    Indian defense has full control over the blockchain,
                    enhancing security and trust in the system
                  </p>
                </div>
                {/* <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
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

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Reporting
                  </h1>

                  <p className="text-black">
                    A feature that generates reports on product assignments,
                    returns, and inventory levels. Reports can be exported in
                    various formats, such as CSV or PDF, and can be customized
                    to include different metrics and filters.
                  </p>
                </div> */}
                <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    User-Friendly Interface
                  </h1>

                  <p className="text-black">
                    Despite the advanced technology and features, our blockchain
                    network remains accessible through its intuitive and
                    user-friendly interface. This makes it possible for users of
                    varying technical expertise levels to interact seamlessly
                    with the system and the deployed smart contracts.
                  </p>
                </div>
              </div>

              <div className=" lg:flex lg:w-1/2 lg:justify-between lg:ml-8 mt-4 lg:mt-0 shadow-md flex-col ">
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover  "
                  src={require("../../assets/blockchain1.png")}
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover  "
                  src={require("../../assets/blockchain2.png")}
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover  "
                  src={require("../../assets/blockchain3.png")}
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover p-2  "
                  src={require("../../assets/blockchain4.png")}
                  alt=""
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="lg:w-[300px] absolute origin-center lg:-left-36 -translate-y-[30%] w-[180px] -left-20" />
        </div>
      </div>
      <div>
        {/* <section className="bg-white  lg:mt-8 mt-4 xl:mt-12 ">
          <div className="container lg:flex justify-center items-center lg:px-[12%] pt-12 mx-auto text-left px-4">
            <div className="lg:w-[50%]">
              <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-black mb-2 ">
                E2E Machine Learning Platform
              </h2>

              <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                Our solution streamlines the entire deployment process,
                including seamless integration with various data sources
                including hardware sensors or data streams allowing
                organizations to fully harness the power of AI and IoT in their
                operations.
              </p>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center">
              <img
                src={require("../../assets/AIQube/2.png")}
                className="w-[750px]"
              ></img>
            </div>
          </div>
        </section> */}
      </div>
      <div>
        {/* <section className="bg-white  lg:mt-8 mt-4 xl:mt-12 ">
          <div className="container lg:flex justify-center items-center gap-10 lg:px-[12%] pt-12 mx-auto text-left px-4">
            <div className="lg:w-[50%] flex justify-center items-center">
              <img
                src={require("../../assets/AIQube/3.png")}
                className="w-[750px]"
              ></img>
            </div>
            <div className="lg:w-[50%]">
              <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-black mb-2 ">
                Hybrid Cloud Management
              </h2>

              <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                We offer the flexibility of cloud based on premise or hybrid
                deployment options, allowing companies to choose the best
                solution for their unique data security and cost efficiency
                needs. It offers a scalable and adaptable solution that meets
                the evolving needs of organizations.
              </p>
            </div>
          </div>
        </section> */}
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <BgElement3 className="lg:w-[300px] w-[200px] absolute origin-center -right-[340px] -translate-y-[50%]" />
      </div>
      {/* <div className="mb-20">
        <section className="bg-white  lg:mt-8 mt-4 xl:mt-12 ">
          <div className="container lg:flex justify-center items-center gap-10 lg:px-[12%] pt-12 mx-auto text-left px-4">
            <div className="lg:w-[50%]">
              <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-black mb-2 ">
                IoT Data Analytics
              </h2>

              <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                Harness the power of AI-driven analytics to optimize production
                processes, improve predictive maintenance, and gain valuable
                insights into your operations. Leverage AI-generated insights to
                make data-driven decisions, enabling better resource allocation
                and risk mitigation.
              </p>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center">
              <img
                src={require("../../assets/AIQube/4.png")}
                className="w-[750px]"
              ></img>
            </div>
          </div>
        </section>
      </div> */}

      <Footer />
    </div>
  );
};

export default Blockchain;
