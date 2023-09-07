import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamMember = (props) => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div
      className="flex flex-col items-center justify-center w-[230px] min-h-[330px]  lg:w-[230px] hover:bg-white  group overflow-hidden transition-all duration-500 "
      data-aos="fade-up"
    >
      <img
        className="object-cover w-[100%]   rounded-full  transition-all group-hover:scale-105 overflow-hidden group-hover:p-2 duration-500 "
        src={props.member.photo}
        alt=""
      />

      <div className="  ">
        <h1 className="mt-2 text-xl font-semibold text-blue-gray-900 capitalize   ">
          {props.member.name}
        </h1>

        {/* <p className=" text-slate-800 capitalize text-[18px]  group-hover:text-gray-300">
          {props.member.position}
        </p> */}

        <div className="group-hover:flex justify-center hidden group-hover:transition-all duration-500">
          <a
            href={props.member.twitter}
            target="_blank"
            className="mx-2 text-black  "
            aria-label="Reddit"
          >
            <FaSquareXTwitter size={23} />
          </a>

          <a
            href={props.member.facebook}
            className="mx-2 text-black  "
            aria-label="Facebook"
            target="_blank"
          >
            <BsFacebook size={22} />
          </a>

          <a
            href={props.member.linkedin}
            className="mx-2 text-black  "
            aria-label="Github"
            target={"_blank"}
          >
            <BsLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
