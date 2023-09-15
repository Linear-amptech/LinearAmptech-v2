import analog from "../assets/partners/analog.png";
import ihub from "../assets/partners/ihub.png";
import lekha from "../assets/partners/lekha.png";

const partners = [
  { logo: lekha, name: "Lekha wireless Solution" },
  { logo: analog, name: "Analog Devices" },
  { logo: ihub, name: "TIH IIT Roorkee" },

  // Add more partners as needed
];

const Partner = ({ logo, name }) => {
  return (
    <div className="  flex  justify-center  items-center lg:w-[300px] lg:h-[260px] md:w-[260px] md:h-[260px] w-[120px] h-[auto] nested-div py-[2.5rem]">
      <div className="w-auto h-[120px] flex justify-center items-center">
        <img
          src={logo}
          alt={`partner ${name}`}
          class=" max-h-[120px] max-w-[196px]"
        />
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div id="partnerAndCustormer">
      <div className="container lg:px-2 px-4 pt-[4rem]  mx-auto ">
        <h2 className="lg:text-[2.5rem] text-3xl font-bold text-center mb-12 text-blue-gray-900">
          Our Partners and Customers
        </h2>
      </div>

      <div className=" bg-[white] mx-auto">
        <div className="container  mx-auto mt-[2rem] mb-[6rem] px-0 flex justify-center items-center divide-x">
          {partners.map((partner, index) => (
            <Partner key={index} logo={partner.logo} name={partner.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Partners;
