import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BoardMember from "../Components/BoardMember";
import TeamMember from "../Components/TeamMember";
import teambg from "../assets/teambg.jpg";

import { boardMember } from "../data/BoardMemberData";
import { coreTeam } from "../data/CoreTeamData";
import { softwareTeam } from "../data/SoftwareTeamData";
import { hardwareTeam } from "../data/HardwareTeamData";

const Team = () => {
  return (
    <div className="bg-[#f5f8fa]">
      <Header />

      <div
        className="h-[429px] w-[100%] flex justify-center items-center"
        style={{
          backgroundImage: `url(${teambg})`,
        }}
      >
        <div className=" ">
          <p className="font-bold lg:text-[64px] text-4xl text-white text-center">
            Meet Our Team
          </p>
          <p className="text-[24px] lg:mt-6 text-white font-medium text-center">
            Solutions for a smarter, more connected future
          </p>
        </div>
      </div>

      <div>
        <section className="bg-[#f5f8fa] ">
          <div className="container px-6 py-10 mx-auto mt-12">
            <div class="lineStyle h-[6px] w-[111px] bg-[#2196f3] relative top-7 left-72"></div>
            <h1 className="lg:text-[40px]  text-4xl font-semibold mx-auto  text-gray-900 capitalize max-w-6xl">
              Our Team
            </h1>

            <p className="max-w-6xl text-[20px] mx-auto my-6  text-blue-gray-800 ">
              Our team is a diverse and talented group of individuals, each
              bringing their unique strengths and perspectives to the table.
              Together, we form a cohesive unit that thrives on innovation and
              creativity. We are committed to continuous growth and learning,
              always striving to exceed expectations and tackle challenges
              head-on. Our strong communication and teamwork ensure that we can
              tackle even the most complex projects with ease. With a shared
              vision and a passion for excellence, our team is poised for
              success in every endeavor we undertake. Together, we are
              unstoppable.
            </p>

            <div className="flex flex-wrap gap-12 justify-center mt-2 xl:mt-12 ">
              {boardMember.map((member) => {
                return <TeamMember member={member} />;
              })}
              {coreTeam.map((member) => {
                return <TeamMember member={member} />;
              })}
              {softwareTeam.map((member) => {
                return <TeamMember member={member} />;
              })}
              {hardwareTeam.map((member) => {
                return <TeamMember member={member} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* core team  */}
      {/* <div className="mt-2">
        <div>
          <section className="bg-[#f5f8fa] ">
            <div className="container px-4 py-10 mx-auto">
              <h1 className="lg:text-[40px] text-4xl font-semibold text-center text-gray-900 capitalize ">
                Core Team
              </h1>
              <p className="max-w-6xl text-[20px] mx-auto my-3 text-center text-blue-gray-800 ">
                Our core team comprises talented individuals with diverse
                backgrounds and experiences. Our members hail from some of the
                largest software companies in the world, including JPMC,
                Enphase, Oracle, Citrix Systems, Sprinklr, Intuit, IHC, and
                Sears. With their extensive expertise in various domains, our
                team is well-equipped to deliver innovative solutions and
                exceptional outcomes to our clients.
              </p>

              <div className="flex flex-wrap gap-2 justify-center mt-2 xl:mt-12">
                {coreTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div> */}
      {/* Software team */}
      {/* <div className="mt-8">
        <div>
          <section className="bg-[#f5f8fa]  ">
            <div className="container px-6 py-2 mx-auto">
              <h1 className="lg:text-[40px] text-4xl mb-4 font-semibold text-center text-gray-900 capitalize ">
                Software Team
              </h1>

              <div className="flex flex-wrap gap-2 justify-center mt-2 xl:mt-12">
                {softwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div> */}
      {/* hardware team */}
      {/* <div className="mt-12 mb-8">
        <div>
          <section className="bg-[#f5f8fa]  ">
            <div className="container px-6 py-2  mx-auto">
              <h1 className="lg:text-[40px] text-4xl mb-4 font-semibold text-center text-gray-900 capitalize ">
                Hardware Team
              </h1>

              <div className="flex flex-wrap gap-2 justify-center mt-2 xl:mt-12">
                {hardwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Team;
