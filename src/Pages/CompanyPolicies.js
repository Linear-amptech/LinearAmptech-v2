import { Header } from "../Components";
import Footer from "../Components/Footer";
import employee from "../assets/media/employee.pdf";
import AML from "../assets/media/AML.pdf";
import KYC from "../assets/media/KYC.pdf";
const CompanyPolicies = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Header />
      <div className=" mx-auto w-full text-center text-gray-800">
        <h1 className="text-4xl font-bold pt-8">Company Policies</h1>
      </div>
      <div className="container lg:flex lg:px-8 pt-12 mx-auto text-left px-4 h-[400px]">
        <ol>
          <li className="py-1">
            <a href={employee} target="_blank" className="hover:underline">
              Employee related
            </a>
          </li>
          <li className="py-1">
            <a href={AML} target="_blank" className="hover:underline">
              Anti Money Laundering (AML)
            </a>
          </li>
          <li className="py-1">
            <a href={KYC} target="_blank" className="hover:underline">
              ⁠Know your customer (KyC) policy related to AML
            </a>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyPolicies;
