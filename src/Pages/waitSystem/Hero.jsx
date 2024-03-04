import wait2 from "../../assets/WaitSystem/wait2.png";
import wait3 from "../../assets/WaitSystem/wait3.png";
import wait4 from "../../assets/WaitSystem/wait4.png";
export default function Hero() {
  return (
    <div id="about">
      <div className="bg-[#E5F0FD] select-none">
        <div className=" container  flex mx-auto justify-between  gap-4 items-center py-12 lg:flex-row flex-col  xl:px-12 2xl:px-36 md:px-8 px-4 group ">
          <div className="lg:max-w-[550px] lg:min-h-[400px] w-full shrink">
            <h1 className="text-[#0A093D] text-4xl font-bold ">
              Warning Ahead of Intersection and Turns
            </h1>
            <p className="text-base text-[#656464] leading-relaxed pt-12 tracking-wider">
              This early warning system is based on RADAR sensing to detect the
              approaching vehicles in the blind turns and highway intersections
              and warn drivers about approaching vehicles. Such early warnings
              can save accidents in blind turns in mountain regions and highway
              turns. In addition, such a system can also operate in narrow
              mountain passages, bridges and tunnels for traffic regulations and
              to avoid congestion. The system assisted with computer vision
              technology to detect the license plates of vehicles violating the
              traffic rules and regulations and assist the authorities to
              generate regulatory penalties and tickets.
            </p>
          </div>
          <div className="lg:max-w-[520px] lg:max-h-[375px] w-full shrink overflow-hidden">
            <img
              src={wait2}
              className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] mx-auto">
        <div className=" container mx-auto flex justify-between gap-4 items-center  lg:flex-row flex-col-reverse   xl:px-12 2xl:px-36 md:px-8 px-4 py-12 group">
          <div className="lg:max-w-[520px] lg:max-h-[375px] w-full overflow-hidden shrink">
            <img
              src={wait3}
              className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="lg:max-w-[520px] lg:min-h-[400px] w-full shrink select-none">
            <h1 className="text-[#0A093D] text-4xl font-bold">
              Innovation for the Future
            </h1>
            <p className="text-base text-[#656464] leading-relaxed pt-12 tracking-wider">
              With the integration of camera based computer vision system the
              system will be able to detect license plates of vehicles violating
              traffic rules and regulations which can also help reduce accidents
              by promoting safer driving practices and deterring reckless
              behavior on the road. <br />
              Controlling traffic flow with WAIT system: by using a bi-color
              light we can use the WAIT system to stop vehicles coming in a
              region where traffic congestion is already high. By using LoRa
              nodes for communication in the WAIT system, a LoRaWAN network can
              be used as a base layer for smart city communications among the
              different IoT devices
            </p>
          </div>
        </div>
      </div>
      <div className="container  xl:px-12 2xl:px-36 md:px-8 px-4 mx-auto py-20 ">
        <img src={wait4} className="bg-white" />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold text-[#0A093D] leading-none container  xl:px-12 2xl:px-36 md:px-8 px-4 mx-auto py-12">
          See full explanation
        </h1>
        <div className="bg-transparent">
          <div className=" mb-12 container xl:px-12 2xl:px-36 md:px-8 px-0 mx-auto ">
            <iframe
              width="100%"
              height="100%"
              className="aspect-video"
              src="https://www.youtube.com/embed/mWcWUGnSosk"
              title="WAIT System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
