import React from "react";
import styles from "./styles/CountDownSection.module.css";
const CountDownSection = () => {
  return (
    <div className=" flex items-center justify-items-center">
      <div className="text-4xl text-white font-bold ">
        Chase2Earn | Public NFT Sale
        <p className="text-sm text-center p-3">Sale will Start In</p>
        <div className="flex"></div>
        <div className="flex justify-center items-center space-x-4">
          <div className="text-base">Lorem ipsum dolor sit amet.</div>
          <div className={styles.vl}></div>
          <div className="text-base">Rare NFT Total Supply 4500</div>
        </div>
      </div>
    </div>
  );
};

export default CountDownSection;
