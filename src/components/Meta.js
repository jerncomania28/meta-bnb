import { ReactComponent as MetaBnb } from "../assets/meta-bnb.svg";

const Meta = () => {
  return (
    <section className="w-full relative bg-[#A02279] py-4">
      <div className="w-[90%] mx-auto relative flex justify-center items-center flex-col md:flex-row">
        <div className="w-full md:w-[45%] md:mr-4 relative">
          <h1 className="text-[40px] text-white font-[700px] mb-2 ">
            Metabnb NFTs
          </h1>
          <p className="text-[18px] text-white font-[400px] mb-2">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button
            type="button"
            className="outline-none border-none bg-white rounded text-[#A02279] text-[16px] px-4 py-2"
          >
            learn more
          </button>
        </div>
        <div className="w-full md:w-[45%] relative">
          <MetaBnb className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Meta;
