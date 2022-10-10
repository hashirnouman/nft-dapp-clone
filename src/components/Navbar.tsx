import React from "react";
import logo from "../assets/logo.svg";
import { LoginButton } from "./Button/LoginButton";
import { WalletButton } from "./Button/WalletButton";
type Props = {
  action: any;
  status: any;
};

const Navbar = ({ action, status }: Props) => {
  return (
    <div>
      <div className="flex  justify-around font-extrabold items-baseline px-5">
        <div className=" flex space-x-28 text-white  pt-5 text-1xl items-center lg:space-x-16 ">
          <div>Home</div>
          <div>Marketplace</div>
          <div>How to play</div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>Pay to earn</div>
        </div>
        <div className="flex items-center space-x-3">
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
    </div>
  );
};

export default Navbar;
