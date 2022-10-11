import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { LoginButton } from "./Button/LoginButton";
import { WalletButton } from "./Button/WalletButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
type Props = {
  action: any;
  status: any;
};

const Navbar = ({ action, status }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-between px-10 py-5 text-white font-extrabold items-center lg:flex-col w-full ">
        <div className="cursor-pointer lg:hidden">Home</div>
        <div className=" cursor-pointer lg:hidden">Marketplace</div>
        <div className="cursor-pointer lg:hidden">How to play</div>
        <div className="cursor-pointer lg:absolute left-1 top-4">
          <img src={logo} alt="logo" />
        </div>
        <div className=" cursor-pointer lg:hidden">Pay to earn</div>
        <div className="flex items-center space-x-3 lg:hidden">
          {status ? (
            <WalletButton>
              <div className="text-md whitespace-no-wrap overflow-hidden text-ellipsis">
                Connected
              </div>
            </WalletButton>
          ) : (
            <WalletButton onClick={action}>
              <div className="text-md">Connect Wallet</div>
            </WalletButton>
          )}
          <LoginButton>
            <AiOutlineUser color="white" size={25} />
          </LoginButton>
        </div>
      </div>
      <div className=" hidden lg:visible lg:block lg:absolute lg:right-0 lg:cursor-pointer">
        <GiHamburgerMenu
          color="white"
          size={25}
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      <div>
        {show && (
          <div className="hidden lg:visible lg:bg-black lg:absolute lg:bottom-0 lg:w-full lg:h-4/5 lg:text-white lg:bg-opacity-70 lg:flex justify-center items-center">
            <div className=" flex-col space-y-28 text-center font-extrabold text-lg">
              <div className="cursor-pointer">Home</div>
              <div className=" cursor-pointer">Marketplace</div>
              <div className="cursor-pointer">How to play</div>
              <div className=" cursor-pointer lg:hidden">Pay to earn</div>
              {status ? (
                <WalletButton>
                  <div className="text-md whitespace-no-wrap overflow-hidden text-ellipsis">
                    Connected
                  </div>
                </WalletButton>
              ) : (
                <WalletButton onClick={action}>
                  <div className="text-md">Connect Wallet</div>
                </WalletButton>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
