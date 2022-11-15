import { useState } from "react";
import { Link } from "react-router-dom";

// assets
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { ReactComponent as Cancel } from "../assets/cancel.svg";

// components
import Wallet from "../components/Wallet";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const handleIsMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleShowWallet = () => {
    setShowWallet(!showWallet);
  };

  const NavLinks = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "place to stay",
      route: "/place-to-stay",
    },
    {
      name: "NFTs",
      route: "/nfts",
    },
    {
      name: "community",
      route: "/community",
    },
  ];

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
          {NavLinks.map((navLink) => {
            return (
              <Link
                to={navLink.route}
                className="capitalize text-[20px] text-[#434343] mx-2 inline-flex "
                key={navLink.name}
              >
                {navLink.name}
              </Link>
            );
          })}
        </ul>

        <button
          type="button"
          className="px-2 py-2 md:px-6 md:py-3 rounded outline-none border-none bg-gradient-to-r from-[#A02279] to-[#A02279] whitespace-nowrap text-white text-[12px] md:text-[16px]"
          onClick={handleShowWallet}
        >
          connect wallet
        </button>
      </div>
      {isMobile && (
        <div className="w-full h-[100vh] absolute top-0 left-0 z-10 ">
          <ul className="flex items-center justify-center flex-col w-[70%] h-[100vh] bg-white shadow-lg md:hidden">
            {NavLinks.map((navLink) => {
              return (
                <Link
                  to={navLink.route}
                  className="capitalize text-[20px] text-[#434343] my-2 inline-flex "
                  key={navLink.name}
                >
                  {navLink.name}
                </Link>
              );
            })}

            <Cancel className="w-[40px] my-[30px]" onClick={handleIsMobile} />
          </ul>
        </div>
      )}

      {showWallet && (
        <div className="w-full relative">
          <Wallet handleShowWallet={handleShowWallet} />
          <div className="w-[100vw] h-[100vh] fixed bg-black opacity-30 flex justify-center items-center top-0 left-0 z-10"></div>
        </div>
      )}
    </>
  );
};

export default Navigation;
