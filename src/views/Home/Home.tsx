import React from "react";
import { CtaButton } from "../../components/Button/CtaButton";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavItem } from "../../components/Navbar/Navitem";
import styles from "./styles/Home.module.css";
import logo from "../../assets/logo.svg";
import { WalletButton } from "../../components/Button/WalletButton";
import { LoginButton } from "../../components/Button/LoginButton";
import { AiOutlineUser } from "react-icons/ai";
import CardButton from "../../components/Button/CardButton";
import Card from "../../components/Card/Card";
import CountDownSection from "./components/CountDownSection";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk/dist/CoinbaseWalletSDK";
const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "nft-dapp",
      infuraId: "5329145a21fe4e85a2cfa300680d29de",
      theme: "dark",
    },
  },
};

type Props = {};

const Home = (props: Props) => {
  const connectWallet = async () => {
    try {
      let web3modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      const web3ModalInstance = await web3modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(web3ModalInstance);
      console.log(web3Provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-hidden">
      <div className={styles.herosection}>
        <Navbar>
          <NavItem>Home</NavItem>
          <NavItem>Market Place</NavItem>
          <NavItem>How to Play</NavItem>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <NavItem>Play to earn</NavItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <WalletButton onClick={connectWallet}> Connect Wallet</WalletButton>
            <LoginButton>
              <AiOutlineUser color="white" size={30} />
            </LoginButton>
          </div>
        </Navbar>
        <div className="flex justify-center text-white align-center pt-40 ">
          <div className="space-y-4">
            <div className="text-5xl text-center font-extrabold text-white sm:text-2xl ">
              BE THE ULIMATE IBALR AND
              <br /> WINN YOUR DREAM PRIZE
            </div>
            <div className="text-center sm:text-md  ">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ULTRICIES{" "}
              <br />
              VELIT LACUS, NUNC, LOREM LACINIA ALIQUAM VESTIBULUM. IN
              ADIPISCING.
            </div>
            <div className="flex justify-center">
              <CtaButton>Buy Throtel</CtaButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardsection}>
        <div className="p-10">
          <div className={styles.borderTitle}>
            <div className="sm:text-3xl">Uncommon / Rare</div>
          </div>
          <div className="flex space-x-10 mt-5 justify-center">
            <Card />
            <CountDownSection />
            <Card />
          </div>
        </div>
      </div>
      <Aboutus />
      <Footer />
    </div>
  );
};

export default Home;
