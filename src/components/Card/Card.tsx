import React from "react";
import card from "../../assets/card-image.webp";
import CardButton from "../Button/CardButton";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="bg-foreground text-2xl w-72 h-96 rounded-lg p-2 space-y-2">
      <div className="text-3xl text-white text-center p-5 font-extrabold">
        Uncommon
      </div>
      <div className="">
        <img src={card} alt="imgae" />
      </div>
      <div>
        <div className="flex justify-center align-middle pt-10">
          <CardButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
