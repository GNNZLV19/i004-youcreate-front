import React from "react";
import logo from "../../assets/logo.svg";
import vectorfooter from "../../assets/imagesLanding/Vector.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#2B2829] h-56 flex flex-col justify-between">
      {/* Logo */}
      <img src={logo} alt="Logo" className="mt-11 ml-5 h-24 w-24" />
      {/* Vector */}
      <div className="flex space-x-2 p-2 ml-5">
        <img src={vectorfooter} alt="Vector" />
        <p className="text-white text-xl">YouCreate copyright 2024</p>
      </div>
    </div>
  );
};

export default Footer;