import React from "react";
import styles from "./styles/CountDownSection.module.css";
type Props = {
  sendNft: any;
  setAccount: any;
  setTokenId: any;
};
const CountDownSection = ({ sendNft, setAccount, setTokenId }: Props) => {
  return (
    <div className=" flex items-center justify-items-center">
      <div className="text-4xl text-white font-bold  lg:text-xl text-center">
        Chase2Earn | Public NFT Sale
        <p className="text-sm text-center p-3">Sale will Start In</p>
        <div className="flex"></div>
        <div className="flex justify-center items-center space-x-4">
          <div className="text-base">Lorem ipsum dolor sit amet.</div>
          <div className={styles.vl}></div>
          <div className="text-base">Rare NFT Total Supply 4500</div>
        </div>
        <>
          <form onSubmit={(e) => sendNft(e)}>
            <div className="flex-col m-5 text-black">
              <input
                className="w-4/5 text-lg rounded-lg"
                placeholder="Enter Token id"
                onChange={(e) => setTokenId(e.target.value)}
              />
              <input
                className="w-4/5 text-lg rounded-lg"
                placeholder="Enter receiver wallet address"
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-sm p-5 text-white bg-foreground rounded-lg "
            >
              Send
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default CountDownSection;
