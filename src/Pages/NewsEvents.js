import { useEffect, useState } from "react";

import { Oval } from "react-loader-spinner";

import Header from "../Components/Header";

import Footer from "../Components/Footer";
import newsbg from "../assets/newsbg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsEvents = () => {
  const [newsData, setNewsData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchNews = async () => {
    const response = await fetch("https://api.linear-amptech.com/service/news");
    const responseData = await response.json();
    setIsLoading(false);
    setNewsData(responseData);
    console.log(responseData);
  };
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <Header />

      <div>
        <div
          className="h-[429px]  w-[100%] flex justify-center items-center"
          style={{
            backgroundImage: `url(${newsbg})`,
          }}
        >
          <div className=" ">
            <p
              className="font-bold lg:text-[64px] text-4xl lg:mb-4 text-white text-center"
              data-aos="fade-up"
            >
              News and Events
            </p>
            <p
              className="text-[24px] text-white font-medium text-center"
              data-aos="fade-up"
            >
              Solutions for a smarter, more connected future
            </p>
          </div>
        </div>

        {!isLoading &&
          newsData &&
          newsData.data.map((data) => console.log(data))}
        <section className="bg-[#f5f8fa]  py-16">
          <div className="container flex flex-wrap  mx-auto justify-center  gap-10">
            {isLoading && (
              <Oval
                height={80}
                width={80}
                color="#4169e1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#add8e6"
                strokeWidth={6}
                strokeWidthSecondary={6}
              />
            )}
            {newsData
              ? newsData.data.map(({ content, image }) => {
                  return (
                    <div className="lg:flex border  w-[400px] bg-white">
                      <div className="flex flex-col justify-start  ">
                        <img src={image} className="h-60 w-[100%]" />
                        <p className="lg:text-[20px] lg:font-regular text-md text-blue-gray-800  mt-2 leading-relaxed py-2 px-2 ">
                          {content ? content : "Title"}
                        </p>
                      </div>
                    </div>
                  );
                })
              : "1"}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NewsEvents;
