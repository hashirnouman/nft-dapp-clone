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
    <div className="flex justify-center p-10 rounded-xl space-x-4 lg:flex-col lg:space-y-5 lg:items-center">
      <Card />
      <div className="text-white font-bold ">
        <h1 className="text-4xl lg:text-xl text-center">
          Chase2Earn | Public NFT Sale
        </h1>
        <p className="text-sm text-center p-3">Sale will Start In</p>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-base">Lorem ipsum dolor sit amet.</p>
          <div className={styles.vl}></div>
          <p className="text-base">Rare NFT Total Supply 4500</p>
        </div>
        <form onSubmit={(e) => sendNft(e)}>
          <div className="flex flex-col w-5/5 items-center space-y-5 mt-5">
            <input
              className="w-5/5 bg-foreground p-2 rounded-lg"
              placeholder="Enter Token id"
              onChange={(e) => setTokenId(e.target.value)}
              required
            />
            <input
              className="w-5/5 bg-foreground p-2 rounded-lg"
              placeholder="Enter receiver wallet address"
              onChange={(e) => setAccount(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-sm p-5 text-white bg-foreground rounded-lg w-2/5"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Card />
    </div>
  );
};

export default CountDownSection;
