import { ReactComponent as Stars } from "../assets/stars.svg";

const Card = ({ Image }) => {
  return (
    <div className="w-[292px] h-[372px] m-3 p-3 relative shadow-lg flex flex-col justify-between items-center rounded-xl">
      <img src={Image} alt="card-img" />

      <div className="w-full flex flex-col mb-1">
        <div className="flex justify-between items-center my-1">
          <p className="text-[#434343] text-[12px] font-[400]">Desert King</p>
          <p className="text-[#434343] text-[12px] font-bold">1MBT per night</p>
        </div>
        <div className="flex justify-between items-center my-1">
          <p className="text-[#434343] text-[12px] font-[400]">2345km away</p>
          <p className="text-[#434343] text-[12px] font-[400]">
            available for 2weeks stay
          </p>
        </div>
        <Stars className="mt-2" />
      </div>
    </div>
  );
};

export default Card;
