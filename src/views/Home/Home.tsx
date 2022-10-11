import React, { useState } from "react";
import { CtaButton } from "../../components/Button/CtaButton";
import styles from "./styles/Home.module.css";
import Card from "../../components/Card/Card";
import CountDownSection from "./components/CountDownSection";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk/dist/CoinbaseWalletSDK";
import abi from "../../utils/abi.json";
import Navbar from "../../components/Navbar";
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
  const [web3provider, setWeb3Provider] = useState<React.SetStateAction<{}>>();

  const [signerValue, setSignerValue] = useState({
    signer: "",
  });
  const [approved, setApproved] = useState(false);
  const [account2, setAccount2] = useState();
  const [tokenId, setTokenId] = useState(0);
  const contractAddress = "0xe1ad5D0a574A5B2909dDf82c30BCEAd80fAE8a7e";
  const connectWallet = async () => {
    try {
      let web3modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      const web3ModalInstance = await web3modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      let signer: any = web3ModalProvider.getSigner();
      setSignerValue({
        signer: signer,
      });
      console.log(web3ModalProvider);
      if (web3ModalProvider) {
        setWeb3Provider(web3ModalProvider);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const startMint = async () => {
    const signer: any = signerValue.signer;
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    const writeContract = contractInstance.connect(signer);
    await writeContract.safeMint();
  };
  const sendNft = async (e: any) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let accounts = await provider.send("eth_requestAccounts", []);
    let account1 = accounts[0];
    const signer: any = signerValue.signer;
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    const writeContract = contractInstance.connect(signer);
    try {
      await writeContract["safeTransferFrom(address,address,uint256)"](
        account1,
        account2,
        tokenId
      );
    } catch (error) {
      alert("Transaction failed");
    }
  };
  const checkTokenId = async (token_id: number) => {
    const provider: any =
      "https://goerli.infura.io/v3/5329145a21fe4e85a2cfa300680d29de";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.getApproved(token_id);
    if (tx) {
      setApproved(true);
      setTokenId(token_id);
    } else {
      alert("Invalid token id");
    }
  };
  return (
    <div className="overflow-hidden sm:overflow-x-scroll">
      <div className={styles.herosection} id={styles.overlay}>
        <Navbar action={connectWallet} status={web3provider} />
        <div className="flex justify-center text-white align-center pt-40">
          <div className="space-y-4">
            <div className="text-5xl text-center font-extrabold text-white sm:text-2xl">
              BE THE ULIMATE IBALR AND
              <br /> WINN YOUR DREAM PRIZE
            </div>
            <div className="text-center sm:text-md">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ULTRICIES
              <br />
              VELIT LACUS, NUNC, LOREM LACINIA ALIQUAM VESTIBULUM. IN
              ADIPISCING.
            </div>
            <div className="flex justify-center">
              <CtaButton onClick={startMint}>Buy Throtel</CtaButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <fieldset className="border border-red-500 w-4/5">
          <legend className="border border-red-500 text-center rounded-full text-white px-20 py-7 text-3xl font-extrabold lg:px-10 lg:text-2xl md:text-xl md:px-8">
            UNCOMMON/RARE
          </legend>

          <CountDownSection
            sendNft={sendNft}
            setAccount={setAccount2}
            setTokenId={setTokenId}
          />
        </fieldset>
      </div>

      <Aboutus />
      <Footer />
    </div>
  );
};

export default Home;
