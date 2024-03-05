import logo from "../../assets/WaitSystem/logo.png";
import wait1 from "../../assets/WaitSystem/wait1.jpeg";
import broucher from "../../assets/WaitSystem/broucher.pdf";

export default function Header() {
  return (
    <>
      <div
        className=""
        style={{
          background:
            " linear-gradient(-20deg, rgb(255, 184, 76) 0.51%, rgb(255, 255, 255) 77.19%)",
          /* Add other styles if needed */
        }}
      >
        <div className="container  mx-auto xl:px-12 2xl:px-36 md:px-8 px-4  flex flex-col justify-between lg:gap-40 gap-20 ">
          <div className="logo w-[146px] pt-8">
            <a href="https://waitsystem.vercel.app/">
              <img src={logo} />{" "}
            </a>
          </div>

          <div className="  ">
            <div className="content flex justify-between  group lg:flex-row flex-col select-none">
              <div className="lg:max-w-[515px] w-full ">
                <h1 className="text-[3.5rem] font-bold text-[#0A093D] leading-none">
                  Warning Ahead of Intersection and Turns
                </h1>
                <p className="font-mono text-[#30366F] text-base mt-5">
                  This early warning system is based on RADAR sensing to detect
                  the approaching vehicles in the blind turns and highway
                  intersections and warn drivers about approaching vehicles.
                  Such early warnings can save accidents in blind turns in
                  mountain regions and highway turns.
                </p>
                <div className="flex py-12 lg:gap-0 gap-4 justify-start">
                  <a
                    href="#about"
                    className="flex justify-center items-center font-semibold text-base w-[162px] h-[62px]   tracking-wider text-center text-white transition-colors duration-300 transform bg-[#38354B]  hover:bg-white hover:text-[#0A093D]"
                  >
                    About More
                  </a>
                  <div>
                    <a
                      href={broucher}
                      className="flex justify-center items-center font-semibold text-base w-[240px] h-[62px] tracking-wider transition-colors duration-300 transform bg-transparent lg:mx-4 hover:bg-[#38354B] border border-[#555174] text-[#5F5F5F] hover:border-none hover:text-white relative group/btn box-border"
                      target="_blank"
                    >
                      Download Broucher
                      <span className=" absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/btn:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[510px]  overflow-hidden">
                <img
                  src={wait1}
                  className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
