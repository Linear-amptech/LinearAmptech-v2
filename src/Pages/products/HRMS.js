import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Header } from "../../Components";
import { BgElement1, BgElement2, BgElement3 } from "../../assets";

const Hrms = () => {
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
            Human Resource Management System
          </h2>
          <div className="container lg:flex lg:px-[12%] pt-12 mx-auto text-left px-4">
            <div className="lg:w-[50%]">
              <h2 className="font-bold lg:text-[40px]  text-3xl text-black mb-2 ">
                Revolutionize Your HR Management with HRM Software
              </h2>

              <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                HRM software can be the key to transforming your human resource
                management processes. By leveraging the power of technology, HRM
                software can streamline many of the time-consuming
                administrative tasks involved in managing employees, from record
                keeping and payroll management to benefits administration and
                performance evaluations. So why not explore the benefits of HRM
                software today and see how it can help your business succeed.
              </p>

              <li className="max-w-[148.8px] h-[47px] list-none bg-[#0465F8] px-5 py-2 my-4 lg:text-[18.8px] text-center  text-white  hover:scale-110  duration-300 rounded-none lg:w-auto ">
                <a href="https://hrms.linear-amptech.com/" target="_blank">
                  Live Demo
                </a>
              </li>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center">
              <img
                src={require("../../assets/hrms1.png")}
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

      <div className="lg:pr-44 lg:pl-44 mt-16">
        <section className="bg-white ">
          <div className="container px-4 py-12  mx-auto">
            <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   ">
              Problems in traditional HRM Software
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
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Limited accessibility
                </h1>

                <p className="mt-2 text-black ">
                  Traditional HRM software is often installed on a single
                  computer or server, making it difficult for remote employees
                  or those working from different locations to access HR
                  information.
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
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  High costs
                </h1>

                <p className="mt-2 text-black ">
                  Traditional HRM software can be expensive, particularly for
                  small and medium-sized businesses that may not have the
                  resources to invest in costly HRM solutions. This can limit
                  the accessibility of the software and prevent some businesses
                  from being able to take advantage of its benefits.
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
                  Security risks
                </h1>

                <p className="mt-2 text-black ">
                  Traditional HRM software can also pose potential security
                  risks if not properly secured, particularly if the software
                  contains sensitive employee data. This can be a significant
                  drawback for businesses that prioritize data privacy and
                  security, as a data breach could lead to significant
                  reputational and financial damage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-44 lg:pl-44 mt-16">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>

                <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                  Accessibility
                </h1>

                <p className="mt-2 text-black ">
                  Cloud-based HRM software can be accessed from anywhere with an
                  internet connection, making it easy for employees and managers
                  to access HR information and complete tasks from any device.
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
                  Advanced functionality
                </h1>

                <p className="mt-2 text-black ">
                  Cloud-based HRM software offers a wide range of advanced
                  features, including automated workflows, performance
                  management, and analytics and reporting.
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
                  Data security
                </h1>

                <p className="mt-2 text-black ">
                  Cloud-based HRM software is hosted on secure servers, with
                  data encryption and other security measures to protect
                  sensitive HR data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pr-40 lg:pl-40 mt-16">
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
                    Employee data management
                  </h1>

                  <p className="text-black">
                    This feature allows HR staff to store and manage employee
                    data such as personal information, contact details,
                    employment history, and performance reviews.
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
                    Payroll management
                  </h1>

                  <p className="text-black">
                    HRM software can automate payroll processing, including
                    calculating pay, deductions, and taxes.
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
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Communication and collaboration
                  </h1>

                  <p className="text-black">
                    HRM software can facilitate communication and collaboration
                    between HR staff, managers, and employees.
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                    Email integration
                  </h1>

                  <p className="text-black">
                    "Email notification for leave and salary credit" is a
                    feature of HRM software that sends automated email
                    notifications to HR staff or managers when an employee
                    submits a request for time off or salary credit through the
                    software.
                  </p>
                </div>
              </div>

              <div className=" lg:flex lg:w-1/2 lg:justify-around lg:ml-8 mt-4 lg:mt-0 shadow-md ">
                <img
                  className=" flex-shrink-0 lg:flex-shrink-0 object-cover xl:w-[34rem] xl:h-[760px] "
                  src={
                    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                  }
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

export default Hrms;
