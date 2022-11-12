// assets
import { ReactComponent as HeroImage } from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <section className="w-full relative px-6 flex flex-col justify-center items-center md:w-[90%] md:mx-auto md:flex-row">
      {/* hero section text  --start*/}
      <div className="flex flex-col justify-center w-full relative mb-4 md:w-[50%] md:mr-4 md:mb-auto">
        <h1 className="text-[50px] font-[700] text-[#434343] mb-3">
          Rent a <span className="text-[#A02279]">Place</span> away from{" "}
          <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>
        </h1>
        <p className="text-[24px] text-[#434343] text-left leading-[35px] mb-3">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="flex items-center justify-center w-full relative my-2 rounded">
          <input
            type="search"
            placeholder="search for location"
            className="w-[70%] py-4 rounded-tl rounded-bl outline-none border-[1px] border-[#A3A3A3] indent-3"
          />
          <button className="outline-none border-none w-[30%] bg-[#A02279] text-white text-[16px] py-[18px] rounded-tr rounded-br">
            Search
          </button>
        </div>
      </div>

      {/* hero section text --end */}

      {/* hero section image --start */}
      <div className="w-full relative md:w-[50%] ">
        <HeroImage className="w-full" />
      </div>
      {/* hero section image --end */}
    </section>
  );
};

export default HeroSection;
