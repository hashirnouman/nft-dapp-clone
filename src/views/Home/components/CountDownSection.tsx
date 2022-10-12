import React from "react";
import Card from "../../../components/Card/Card";
import styles from "./styles/CountDownSection.module.css";
type Props = {
  sendNft: any;
  setAccount: any;
  setTokenId: any;
};
const CountDownSection = ({ sendNft, setAccount, setTokenId }: Props) => {
  return (
    <div className="flex justify-center space-x-12 text-white font-bold lg:flex-col lg:items-center lg:space-y-6">
      <Card />
      <div className="space-y-6">
        <div className="text-4xl text-center">Chase2Earn | Public NFT Sale</div>
        <p className="text-lg text-center">Sale will Start In</p>
        <div className="flex space-x-5">
          <p className="text-lg text-right">
            Uncommon NFT Total Supply <br /> 4500
          </p>
          <div className={styles.vl}></div>
          <p className="text-lg text-left">
            Rare NFT Total Supply <br /> 4500
          </p>
        </div>
        <form
          onSubmit={(e) => sendNft(e)}
          className=" flex flex-col justify-center items-center space-y-8"
        >
          <input
            className="bg-foreground px-6 py-3 rounded-lg"
            placeholder="Enter Token id"
            onChange={(e) => setTokenId(e.target.value)}
            required
          />
          <input
            className=" bg-foreground px-6 py-3 rounded-lg"
            placeholder="Enter receiver wallet address"
            onChange={(e) => setAccount(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-sm p-3 text-white bg-foreground rounded-lg  w-1/2"
          >
            Send
          </button>
        </form>
      </div>
      <Card />
    </div>
  );
};

export default CountDownSection;
