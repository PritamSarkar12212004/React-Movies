import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full h-14 bg-black text-3xl flex justify-between px-4 items-center">
      <IoHome />
      <MdSupportAgent />
      <span className="text-6xl">
        <IoIosAdd />
      </span>
      <CiSquareQuestion />
      <IoMdNotifications />
    </div>
  );
}

export default Footer;
