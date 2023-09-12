import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Header, OurProduct } from "../../Components";
import { BgElement1, BgElement2, BgElement3, Blockchain5 } from "../../assets";
import blockchainVideo from "../../assets/video/final4.mp4";

const Blockchain = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div className="bg-[#f5f8fa]">
      <Header />
      <OurProduct />

      <div>
        <div className="container mx-auto lg:mt-16 mt-4 xl:mt-20">
          <h2 className="text-center font-bold text-[2rem] mb-10">
            Private Blockchain Enabled Smart Contract Based Management System
          </h2>
          <div className="lg:flex lg:mt-16 mt-4 xl:mt-20" data-aos="fade-up">
            <div className="flex items-center justify-center w-full px-6  lg:w-1/2">
              <div className="max-w-xl ">
                <h2 className="font-bold lg:text-[40px]  text-3xl text-blue-gray-900 mb-2 ">
                  Private Blockchain Network
                </h2>

                <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem] text-gray-700">
                  The blockchain-based management system offers a range of
                  applications across various industries. In the military and
                  defense sector, it ensures accurate tracking and efficient
                  management of ammunition, weapons, and critical assets. For
                  supply chain management, the system enables real-time tracking
                  of inventory, improving efficiency and trust among
                  stakeholders. In healthcare, it facilitates the efficient
                  management of medical supplies, pharmaceuticals, and
                  equipment. Government agencies benefit from accurate tracking
                  and transparent information for managing public infrastructure
                  and assets. In the energy and utilities sector, the system
                  supports effective management of equipment, spare parts, and
                  maintenance schedules. These applications demonstrate the
                  broad potential and advantages of implementing the
                  blockchain-based management system in various industries.
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-1/2 lg:h-auto lg:mt-0 mt-4  ">
              <img
                src={require("../../assets/blockchain.png")}
                className="w-full h-full shadow-md"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[auto] h-[auto] mt-10" data-aos="zoom-out">
        <div className="flex justify-center">
          <Blockchain5 />
        </div>
      </div>

      <div className="lg:pr-44 lg:pl-44 mt-16 " data-aos="fade-up">
        <section className="bg-transparent ">
          <div className="container px-4 py-12  mx-auto">
            <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   ">
              Problems
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Limited Visibility
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    The current system of asset manufacturing, shipment,
                    storage, and issue lacks adequate visibility and
                    transparency among stakeholders.
                  </p>
                </div>
              </div>

              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Asset Management Complexity
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Asset management across many industries involves multiple
                    agencies, from manufacturers to storage facilities and
                    deployment in various locations, leading to complexities in
                    coordination and oversight.
                  </p>
                </div>
              </div>

              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Manual Dependency
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Presently, the process is heavily reliant on manual
                    intervention, making it both time-consuming and susceptible
                    to errors
                  </p>
                </div>
              </div>
              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Critical Need for Improvement
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Efficient asset management is vital to defense readiness and
                    operations. Inefficient supply chain management can
                    adversely impact activities like recycling, segregation, and
                    repair of assets.
                  </p>
                </div>
              </div>

              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Potential of Distributed Ledger Technology and Smart
                    Contracts
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    These technologies can provide real-time access to
                    information, increase the efficiency of supply chain
                    management, and provide a solution to the aforementioned
                    issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-44 lg:pl-44 mt-16">
        <section className=" ">
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
              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Decentralization and Transparency
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    In typical blockchain systems, decentralization implies that
                    data is stored across multiple servers/nodes. However, for
                    our specific use-case involving sensitive data, we propose a
                    centralized blockchain network that would be solely operated
                    by the designated organization. This approach will ensure
                    that all data is transparent and visible only within the
                    organization, maintaining the utmost confidentiality.
                  </p>
                </div>
              </div>

              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Immutability
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    The intrinsic nature of blockchain's immutability provides a
                    secure and unalterable record of transactions. Consequently,
                    any attempted modification of ownership transfer or asset
                    creation data becomes extremely challenging. This will
                    enhance the precision of asset tracking and assure the
                    integrity of data.
                  </p>
                </div>
              </div>

              <div className="text-left shadow-sm rounded-sm bg-white">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/024/701/non_2x/technology-artificial-intelligence-mechanical-free-vector.jpg"
                  className="h-[236px] object-cover rounded-t-sm"
                />
                <div className="p-4">
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

                  <h1 className=" text-[20px] font-bold font-Poppins text-blue-gray-900 ">
                    Security
                  </h1>

                  <p className="mt-2 text-gray-700 ">
                    Even within the already secure private network of the
                    designated organization, the blockchain provides an
                    additional layer of protection. Its cryptographic
                    algorithms, combined with the consensus mechanism for
                    transaction validation, make it highly resistant to fraud
                    and cyberattacks. Centralizing the blockchain network within
                    the organization and ensuring data transparency only within
                    this network would address the existing asset management and
                    tracking challenges effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className=" container py-12 mx-auto mt-12 flex justify-center  ">
        <iframe
          data-aos="zoom-out"
          width="1005"
          height="565"
          src="https://www.youtube.com/embed/1xNVw2x04WA"
          title="Supply chain using private blockchain network: Linear Amptech"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>

      <div className="lg:pr-40 lg:pl-40 mt-16" data-aos="fade-up">
        <section className=" ">
          <div className="container px-4 py-10 mx-auto">
            <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-8   ">
              Features
            </h1>

            <div className="mt-2 lg:flex lg:items-stretch">
              <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2 xl:gap-8 md:grid-cols-2">
                <div className="space-y-2 shadow-sm rounded-sm bg-white  p-4">
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
                    procurement, storage, usage, and transfer of assets, is
                    recorded on the blockchain. This secure, transparent, and
                    immutable digital ledger provides a trail of each asset unit
                    from procurement to usage.
                  </p>
                </div>

                <div className="space-y-2  shadow-sm rounded-sm bg-white  p-4">
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
                    Smart contracts enable the automatic execution of
                    transactions based on predefined rules, thus automating
                    processes such as updating inventory after procurement or
                    usage, setting reorder levels, transferring assets between
                    units, and decommissioning expired assets.
                  </p>
                </div>

                <div className="space-y-2 shadow-sm rounded-sm bg-white  p-4">
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
                    (PoA) consensus model. Since we have set up only a single
                    node, this model assigns the designated organization as the
                    sole validator of the blockchain, leading to efficient
                    transactions, eliminating competition for block validation,
                    and reducing computational waste. This ensures that the
                    organization has full control over the blockchain, enhancing
                    security and trust in the system.
                  </p>
                </div>

                <div className="space-y-2 shadow-sm rounded-sm bg-white  p-4">
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
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover rounded-t-sm  "
                  src={require("../../assets/blockchain1.png")}
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover rounded-t-sm  "
                  src={require("../../assets/blockchain2.png")}
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover rounded-t-sm  "
                  src={require("../../assets/blockchain3.png")}
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="  flex-shrink-0 lg:flex-shrink-0 object-cover rounded-t-sm p-2  "
                  src={require("../../assets/blockchain4.png")}
                  alt=""
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blockchain;
