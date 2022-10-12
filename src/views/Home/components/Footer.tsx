import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col space-y-10 bg-foreground p-10 text-white">
      <div className="flex justify-center">
        <div className="flex space-x-8 text-lg font-semibold">
          <div>Roadmap</div>
          <div>Vision</div>
          <div>Tokenomics</div>
          <div>Whitepaper</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 sm:space-x-0 ">
        <FaFacebookF color="#f4f4f4" size={25} />
        <FaInstagram color="#f4f4f4" size={25} />
        <FaTwitter color="#f4f4f4" size={25} />
        <FaDiscord color="#f4f4f4" size={25} />
      </div>
      <div className="flex justify-center ">
        <p>© 2022 Chase2earn. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
