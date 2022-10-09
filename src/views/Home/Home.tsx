import React, { useState } from "react";
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
import { useWeb3React } from "@web3-react/core";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk/dist/CoinbaseWalletSDK";
import abi from "../../utils/abi.json";
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
const contractAddress = "0x2159AaE2D2C93a9C2201599cd72A3A31FdB33e73";
const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/5329145a21fe4e85a2cfa300680d29de"
);
const privatekey = "";
const wallet = new ethers.Wallet(privatekey, provider);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);
type Props = {};

const Home = (props: Props) => {
  const { active, account } = useWeb3React();
  const [web3provider, setWeb3Provider] = useState();
  const connectWallet = async () => {
    try {
      let web3modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      const web3ModalInstance = await web3modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(web3ModalInstance);
      console.log(web3Provider);
      if (web3Provider) {
        setWeb3Provider(web3Provider);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const mint = async () => {
    const connection = contract.connect(signer);
    const constractWithWallet = contract.connect(wallet);
    const address = connection.address;
    const tx = await contract.safeMint({
      gasLimit: 10000,
    });
    await tx.wait();
    if (tx) {
      alert("Success");
    }
  };
  const sendDaiTo = async (to: any, amountInEther: string) => {
    const providerz = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const mintContract = new ethers.Contract(contractAddress, abi, providerz);

    const tokenUnits = await mintContract.safeMint();
    const tokenAmountInEther = ethers.utils.parseUnits(
      amountInEther,
      tokenUnits
    );

    const daiContractWithSigner = mintContract.connect(signer);
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
            {web3provider ? (
              <WalletButton>
                <div className="whitespace-no-wrap overflow-hidden text-ellipsis">
                  {web3provider.provider.selectedAddress}
                </div>
              </WalletButton>
            ) : (
              <WalletButton onClick={connectWallet}>Connect</WalletButton>
            )}
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
              <CtaButton
                onClick={() => {
                  mint();
                }}
              >
                Buy Throtel
              </CtaButton>
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
