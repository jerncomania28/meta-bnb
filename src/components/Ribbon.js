import { ReactComponent as Mbtoken } from "../assets/mbtoken.svg";
import { ReactComponent as OpenSea } from "../assets/opensea.svg";
import { ReactComponent as MetaMask } from "../assets/metamask.svg";

const Ribbon = () => {
  return (
    <div className="py-2 my-6 bg-[#A02279] flex justify-around items-center overflow-hidden">
      <Mbtoken className="mx-2" />
      <MetaMask className="mx-2" />
      <OpenSea className="mx-2" />
    </div>
  );
};

export default Ribbon;
