import React from "react";
import logo from "../assets/logo.svg";
import { LoginButton } from "./Button/LoginButton";
import { WalletButton } from "./Button/WalletButton";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {
  action: any;
  status: any;
};

const Navbar = ({ action, status }: Props) => {
  return (
    <>
      <div className="flex justify-between p-5 text-white font-extrabold items-center lg:flex-col w-full">
        <div className="cursor-pointer lg:hidden">Home</div>
        <div className=" cursor-pointer lg:hidden">Marketplace</div>
        <div className="cursor-pointer lg:hidden">How to play</div>
        <div className="cursor-pointer lg:absolute left-1 top-4">
          <img src={logo} alt="logo" />
        </div>

        <div className="lg:visible lg:bg-black lg:absolute lg:bottom-0 lg:w-full lg:h-4/5">
          hello
        </div>
        <div className="lg:hidden">Pay to earn</div>
        <div className="flex items-center space-x-3 lg:hidden">
          {status ? (
            <WalletButton>
              <div className="text-md whitespace-no-wrap overflow-hidden text-ellipsis">
                {status.provider.selectedAddress}
              </div>
            </WalletButton>
          ) : (
            <WalletButton onClick={action}>
              <div className="text-md">Connect Wallet</div>
            </WalletButton>
          )}
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
