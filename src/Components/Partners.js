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
    <div className="  flex flex-col justify-between gap-2 items-center lg:w-[300px] lg:h-[260px] min-w-[260px] min-h-[260px] nested-div py-[2.5rem]">
      <div className="w-auto h-[120px] flex justify-center items-start">
        <img
          src={logo}
          alt={`partner ${name}`}
          class=" max-h-[120px] max-w-[196px]"
        />
      </div>
      <h3 className="text-[1.6rem] font-medium leading-tight w-[90%] text-center">
        {name}
      </h3>
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

      <div className="max-w-[1536px] bg-[white] mx-auto">
        <div className="container  mx-auto mt-[8rem] mb-[8rem] px-0 flex justify-center divide-x-2">
          {partners.map((partner, index) => (
            <Partner key={index} logo={partner.logo} name={partner.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Partners;
