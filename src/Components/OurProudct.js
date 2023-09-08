import bg from "../assets/ourproduct.jpg";

const OurProduct = () => {
  return (
    <div className="heroSection z-0 w-[100%]  h-[400px] overflow-hidden flex  ">
      <div className=" absolute z-10 w-[100%] h-[400px] flex flex-col justify-center items-center gap-2  text-white">
        <h2 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-bold  ">
          Our Products
        </h2>
        <p className="lg:text-[1.8rem] font-normal mb-4 ">
          Solutions for a smarter, more connected future
        </p>
      </div>

      <img src={bg} className="w-[100%] "></img>
    </div>
  );
};

export default OurProduct;
