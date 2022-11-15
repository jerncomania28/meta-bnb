import React, { Suspense } from "react";

//assets
import { IMAGES } from "../Images";
import { ReactComponent as Setting } from "../assets/setting.svg";
import BeanEater from "../assets/bean-eater.gif";

// component
const Navigation = React.lazy(() => import("../components/Navigation"));
const Footer = React.lazy(() => import("../components/Footer"));
const Card = React.lazy(() => import("../components/Card"));

const PlaceToStay = () => {
  const options = [
    "restaurant",
    "cottage",
    "castle",
    "fantast city",
    "beach",
    "carbins",
    "off-grid",
    "farm",
  ];

  return (
    <div className="w-full relative">
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex justify-center items-center">
            <img src={BeanEater} alt="bean-eater" />
          </div>
        }
      >
        <Navigation />
        <div className=" w-full md:w-[80%] md:mx-auto flex justify-between items-center flex-col md:flex-row relative">
          <ul className=" w-full flex justify-start items-center overflow-scroll no-scrollbar md:justify-center">
            {options.map((option, _idx) => (
              <li className="text-[20px] text-[#434343] mx-3 whitespace-nowrap capitalize">
                {option}
              </li>
            ))}
          </ul>
          <button className="rounded-sm outline-none border-none shadow-md flex justify-center items-center mt-2 ml-2 py-2 self-start  px-4 md:mt-auto md:ml-auto">
            <span className="text-[16px] text-[#333333]">Location</span>
            <Setting />
          </button>
        </div>
        <div className="flex justify-center items-center flex-wrap pb-4">
          {IMAGES.map((img, _idx) => (
            <Card Image={img} key={_idx} />
          ))}
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PlaceToStay;
