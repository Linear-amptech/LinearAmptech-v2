import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Header } from "../../Components";
import { BgElement1, BgElement2, BgElement3 } from "../../assets";

const InventorySystem = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      <div className="heroSection z-0 w-[100%]  h-[400px] overflow-hidden flex  ">
        <div className=" absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2  text-white">
          <h2 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-bold  ">
            Our Products
          </h2>
          <p className="lg:text-[1.8rem] font-normal mb-4 ">
            Solutions for a smarter, more connected future
          </p>
        </div>

        <img
          src={require("../../assets/video/bg-product.jpg")}
          className="w-[100%] "
        ></img>
      </div>
      <div>
        <section
          className="bg-white  lg:mt-8 mt-4 xl:mt-12 "
          data-aos="fade-up"
        >
          <h2 className="text-center font-bold text-[2rem] mb-10">
            Inventory System
          </h2>
          <div className="container lg:flex lg:px-[12%] pt-12 mx-auto text-left px-4">
            <div className="lg:w-[50%]">
              <h2 className="font-bold lg:text-[40px]  text-3xl text-black mb-2 ">
                Revolutionizing Inventory Management System
              </h2>

              <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                An inventory management app that can send email is a useful tool
                for businesses looking to streamline their operations. With this
                app, users can manage their inventory levels, track product
                movements, and receive real-time alerts. The email feature also
                allows businesses to automate their inventory management
                process, reducing the amount of time and effort required to
                manually track inventory items.
              </p>

              <li className="max-w-[148.8px] h-[47px] list-none bg-[#0465F8] px-5 py-2 my-4 lg:text-[18.8px] text-center  text-white  hover:scale-110  duration-300 rounded-none lg:w-auto ">
                <a href="https://inventory.linear-amptech.com/" target="_blank">
                  Live Demo
                </a>
              </li>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center">
              <img
                src={require("../../assets/inventory1.png")}
                className="w-[auto]  shadow-md "
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
              What Problems in traditional inventory system
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Inaccuracy
                </h1>

                <p className="mt-2 text-black ">
                  Traditional inventory systems often rely on manual tracking
                  methods, which can be prone to errors and inaccuracies.
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Lack of real-time data
                </h1>

                <p className="mt-2 text-black ">
                  Inventory data is often only updated periodically, such as at
                  the end of the day or week. This means that businesses may not
                  have an accurate picture of their inventory levels.
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
                      d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Difficulty in tracking multiple items
                </h1>

                <p className="mt-2 text-black ">
                  Traditional inventory systems can struggle to track inventory
                  across multiple products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-44 lg:pl-44 mt-16" data-aos="fade-up">
        <section className="bg-white ">
          <div className="container px-4 py-12  mx-auto">
            <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   ">
              We Are Here To Bring You The Solutions
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Increased Efficiency
                </h1>

                <p className="mt-2 text-black ">
                  By automating email notifications for inventory-related
                  events, your app can help increase efficiency by reducing the
                  need for manual data entry and tracking. This can save time
                  and reduce errors.
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Real-time Notifications
                </h1>

                <p className="mt-2 text-black ">
                  With an inventory app that can send emails, you can receive
                  real-time notifications about changes in inventory levels,
                  such as assign product alerts, product return by user or when
                  inventory is replenished
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Customizable Alerts
                </h1>

                <p className="mt-2 text-black ">
                  An inventory app that can send emails can be customized to
                  send alerts based on specific criteria, such as low inventory
                  levels for certain products , product out of stock or when a
                  assign product is not returned in specific time.
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
                    Product Management
                  </h1>

                  <p className="text-black">
                    A feature that allows the creation, editing, and deletion of
                    products in the app. Products can be assigned to users, and
                    users can return products to the inventory.
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Email Notification
                  </h1>

                  <p className="text-black">
                    A feature that sends email notifications to users and
                    administrators when a product is assigned or returned. The
                    email can include details such as the product name, user
                    name, date and time of the assignment or return, and any
                    other relevant information.
                  </p>
                </div>

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
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Dashboard
                  </h1>

                  <p className="text-black">
                    A feature that displays key inventory metrics, such as the
                    number of products in stock, and the number of products out
                    of stock, and number of product categories in the inventory.
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
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Audit Trail
                  </h1>

                  <p className="text-black">
                    A feature that logs all product assignments, returns, and
                    inventory changes in an audit trail. The audit trail
                    provides a complete history of all inventory movements,
                    allowing administrators to track product movements and
                    identify any discrepancies or errors.
                  </p>
                </div>
              </div>

              <div className=" lg:flex lg:w-1/2 lg:justify-around lg:ml-8 mt-4 lg:mt-0 shadow-md ">
                <img
                  className="w-[auto]  flex-shrink-0 lg:flex-shrink-0 object-cover xl:w-[34rem] xl:h-[760px] "
                  src={require("../../assets/inventory2.png")}
                  alt=""
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

export default InventorySystem;
