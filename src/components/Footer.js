// assets
import { ReactComponent as FooterLogo } from "../assets/footer-logo.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";

const Footer = () => {
  const FooterLinks = {
    0: {
      linkTitle: "community",
      subLinks: ["NFTs", "Tokens", "LandLords", "Discord"],
    },
    1: {
      linkTitle: "Places",
      subLinks: ["Castle", "Farms", "Beach", "Learn more"],
    },
    2: {
      linkTitle: "About Us",
      subLinks: ["Road map", "Creators", "Career", "Contact Us"],
    },
  };

  return (
    <footer className="w-full py-8 relative bg-[#1D1D1E]">
      <div className="flex flex-col justify-center items-center w-[80%] mx-auto relative ">
        <div className="flex justify-between items-start flex-col w-full my-2 md:flex-row">
          <div className="flex justify-between items-start flex-col relative mb-4">
            <FooterLogo />
            <div className="flex justify-between w-[40%] mt-8">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>

          {Object.keys(FooterLinks).map((_idx) => {
            return (
              <ul className="list-type-none text-white my-4 md:my-auto" key={_idx}>
                <h1 className="text-[23px] font-bold mb-2 md:text-[18px]">
                  {FooterLinks[_idx].linkTitle}
                </h1>
                {FooterLinks[_idx].subLinks.map((link) => (
                  <li className="text-[20px] md:[16px]" key={link}>{link}</li>
                ))}
              </ul>
            );
          })}
        </div>
        <p className="text-[16px] text-[#F7F7F7] w-full">&copy; 2022 Metabnb</p>
      </div>
    </footer>
  );
};

export default Footer;
