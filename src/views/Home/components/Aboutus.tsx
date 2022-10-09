import React from "react";
import styles from "./styles/Aboutus.module.css";
import ecllipse from "../../../assets/Ellipse.svg";
import avatar from "../../../assets/avatar.svg";
type Props = {};

const Aboutus = (props: Props) => {
  return (
    <div className="bg-background flex justify-center ">
      <div className="p-20 bg-foreground w-4/5 rounded-2xl mb-28">
        <img
          src={ecllipse}
          alt="eclipse"
          className={styles.bg}
          width="500"
          height="540"
        />
        <div className=" text-white">
          <div className="flex space-x-16">
            <div className="flex flex-col space-y-5 w-2/5 ">
              <div className="font-medium">About us</div>
              <div className="text-4xl font-extrabold">
                BE THE ULIMATE IBALR AND <br /> WINN YOUR DREAM PRIZEV
              </div>
              <p className="">
                vLorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies velit lacus, nunc, lorem lacinia aliquam vestibulum.
                In adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Ultricies velit lacus, nunc, lorem lacinia aliquam
                vestibulum. In adipiscing.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ultricies velit lacus, nunc, lorem
                lacinia
              </p>
            </div>
            <div className="w-100">
              <img src={avatar} alt="avatar" width={220} />
            </div>
            <div className="flex flex-col space-y-5 w-1/5">
              <div className="font-bold text-lg">6 000</div>
              <div>Total NFT's</div>
              <hr />
              <div className="font-bold text-lg">6 000</div>
              <div>Total NFT's</div>
              <hr />
              <div className="font-bold text-lg">6 000</div>
              <div>Total NFT's</div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
