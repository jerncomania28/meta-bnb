import { useState } from "react";
import { Link } from "react-router-dom";

// assets
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { ReactComponent as Cancel } from "../assets/cancel.svg";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = () => {
    setIsMobile(!isMobile);
  };

  const NavLinks = {
    home: "/",
    "place to stay": "/place-to-stay",
    NFTs: "/nfts",
    community: "/community",
  };

  return (
    <>
      <div className="flex items-center justify-around py-6 mb-4 ">
        <div className="flex items-center">
          <Hamburger
            className="inline-flex md:hidden w-[40px]"
            onClick={handleIsMobile}
          />
          <Logo className="w-[150px]  md:w-auto" />
        </div>
        <ul className="items-baseline justify-center hidden md:flex">
          {Object.keys(NavLinks).map((link, _idx) => {
            return (
              <li className="mx-2 inline-flex" key={_idx}>
                <Link
                  path={NavLinks[link]}
                  className="capitalize text-[20px] text-[#434343] "
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="px-2 py-2 md:px-6 md:py-3 rounded outline-none border-none bg-gradient-to-r from-[#A02279] to-[#A02279] whitespace-nowrap text-white text-[12px] md:text-[16px]"
        >
          connect wallet
        </button>
      </div>
      {isMobile && (
        <div className="w-full h-[100vh] absolute top-0 left-0 z-10 ">
          <ul className="flex items-center justify-center flex-col w-[70%] h-[100vh] bg-white shadow-lg md:hidden">
            {Object.keys(NavLinks).map((link, _idx) => {
              return (
                <li className="my-3 block" key={_idx}>
                  <Link
                    path={NavLinks[link]}
                    className="capitalize text-[20px] text-[#434343] "
                  >
                    {link}
                  </Link>
                </li>
              );
            })}

            <Cancel className="w-[40px] my-[30px]" onClick={handleIsMobile} />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
