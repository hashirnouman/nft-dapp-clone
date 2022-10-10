import React from "react";
import styles from "./styles/Aboutus.module.css";
import ecllipse from "../../../assets/Ellipse.svg";
import avatar from "../../../assets/avatar.svg";
type Props = {};

const Aboutus = (props: Props) => {
  return (
    <div className="bg-background flex justify-center w-full">
      <div className="p-20 bg-foreground text-white w-4/5 rounded-2xl mb-28 lg:w-5/5 lg:p-5  ">
        <div className="flex space-x-16  lg:flex-col lg:space-y-20 lg:align-middle">
          <div className="flex-col space-y-5 w-2/5 lg:w-4/5">
            <div>About us</div>
            <div className="text-4xl font-extrabold lg:3xl">
              BE THE ULIMATE IBALR AND <br /> WINN YOUR DREAM PRIZEV
            </div>
            <p>
              vLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ultricies velit lacus, nunc, lorem lacinia aliquam vestibulum. In
              adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ultricies velit lacus, nunc, lorem lacinia aliquam
              vestibulum. In adipiscing.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ultricies velit lacus, nunc, lorem lacinia
            </p>
          </div>
          <div className="w-100 lg:w-50 flex justify-center">
            <img src={avatar} alt="avatar" width={220} />
          </div>
          <div className="flex-col space-y-5 w-1/5 lg:flex lg:w-4/5  sm:w-5/5">
            <div className="font-bold text-lg">6 000</div>
            <div>Total NFT's</div>
            <hr />
            <div className="font-bold text-lg">8</div>
            <div>Total active cars</div>
            <hr />
            <div className="font-bold text-lg">20</div>
            <div>Upcoming NFT's</div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
