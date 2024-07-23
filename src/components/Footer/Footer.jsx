import React, { useContext } from "react";
import { IoHome } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import ContextMaker from "../../context/ContextMaker";

function Footer() {
  const { theme } = useContext(ContextMaker);
  return (
    <div
      className={`w-full h-14 ${
        theme ? "bg-black" : "bg-white"
      } text-3xl flex justify-between bg-opacity-60 backdrop-blur-sm  px-4 items-center rounded-t-xl`}
    >
      <IoHome />
      <MdSupportAgent />
      <span className="text-6xl ">
        <IoIosAdd />
      </span>
      <CiSquareQuestion />
      <IoMdNotifications />
    </div>
  );
}

export default Footer;
