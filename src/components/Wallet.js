import { ReactComponent as Fox } from "../assets/fox.svg";
import { ReactComponent as Forward } from "../assets/forward.svg";
import WalletConnect from "../assets/wallet.svg";
import { ReactComponent as Cancel } from "../assets/cancel.svg";

const Wallet = ({ handleShowWallet }) => {
  return (
    <div className="min-w-[300px] w-[50%] max-w-[600px] rounded-lg shadow-sm bg-white absolute  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[5%] z-20 ">
      <div className="flex justify-between items-center border-b-[1px] border-gray px-3 py-4">
        <p className=" text-[18px] md:text-[24px] text-[#333333] font-[700px]">
          Connect Wallet
        </p>
        <Cancel className="w-[20px]" onClick={handleShowWallet} />
      </div>
      <p className="text-[14px] md:text-[16px] text-[#333333] w-[90%] mx-auto mt-2">
        Choose your preferred wallet:
      </p>
      <div className="flex justify-center items-center flex-col w-full relative py-6 px-2">
        <div className="py-2 w-[95%] mx-auto rounded shadow-lg flex justify-between items-center my-3">
          <div className="flex justify-center items-center mx-4">
            <Fox className="mx-2" />
            <span className="text-[18px] font-[600px] capitalize">
              Metamask
            </span>
          </div>
          <Forward className="mx-4" />
        </div>

        <div className="py-2 w-[95%] mx-auto rounded shadow-lg flex justify-between items-center my-3">
          <div className="flex justify-center items-center mx-4">
            <img src={WalletConnect} alt="wallet-connect" className="mx-2" />
            <span className="text-[18px] font-[600px] capitalize">
              WalletConnect
            </span>
          </div>
          <Forward className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
