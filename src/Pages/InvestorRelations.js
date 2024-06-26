import { Header } from "../Components";
import Footer from "../Components/Footer";
import employee from "../assets/media/employee.pdf";
import AML from "../assets/media/AML.pdf";
import KYC from "../assets/media/KYC.pdf";
import { SlDocs } from "react-icons/sl";
import { CgFileDocument } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const InvestorRelations = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Header />
      <div className=" mx-auto w-full text-center text-gray-800">
        <div className="flex items-baseline justify-center gap-2">
          {" "}
          <h1 className="text-4xl font-bold pt-8">Investor Relations</h1>
          <SlDocs className="text-3xl " />
        </div>
      </div>
      <div className="container lg:flex lg:px-8 pt-12 mx-auto text-left px-4 h-[400px]">
        <ol>
          {/* <li className="py-1">
            <div className="flex items-start justify-start gap-2">
              <a href={employee} target="_blank" className="hover:underline">
                Employee related
              </a>
              <CgFileDocument className="text-xl  " />
            </div>
          </li> */}
          <li className="py-1">
            <div className="flex items-start justify-start gap-2">
              <NavLink to="/policies/AML" className="hover:underline">
                AML/CFT Policy
              </NavLink>
              <CgFileDocument className="text-xl  " />
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-start justify-start gap-1">
              <NavLink to="/policies/KYC" className="hover:underline ">
                KYC policy
              </NavLink>
              <CgFileDocument className="text-xl  " />
            </div>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default InvestorRelations;
