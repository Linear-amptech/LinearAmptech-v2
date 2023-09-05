import { Carousel, IconButton, Button } from "@material-tailwind/react";

export default function Slider2() {
  return (
    <Carousel
      className="rounded-none bg-blue-gray-900 h-[700px]"
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 left-[55%] z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1  rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "w-2 h-2 rounded-full bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handlePrev}
          className="!absolute bottom-1 right-16 rounded-full bg-blue-gray-100  -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handleNext}
          className="!absolute bottom-1 !right-4 rounded-full bg-blue-gray-100 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div>
        <div className="lg:flex bg-blue-gray-50 shadow-md">
          <div className="flex items-center justify-center w-full px-6  lg:h-[700px] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-black  lg:text-[56px] leading-none ">
                Medium length hero headline goes here
              </h2>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row gap-2">
                <Button size="lg" className="rounded-none shadow-none">
                  Button
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  className="rounded-none shadow-none"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-full">
            <div
              className="w-full  bg-cover h-[500px]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)",
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
            <div className="h-[200px] w-full bg-blue-gray-100 px-8 py-2">
              <h3 className=" text-2xl font-semibold text-black">
                Hello Guest
              </h3>

              <p className=" text-gray-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                eum modi incidunt adipisci quod porro et non exercitationem
                quasi, maxime culpa ut nemo ab delectus saepe iste nostrum
                explicabo a?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-[700px] w-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-[700px] w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
