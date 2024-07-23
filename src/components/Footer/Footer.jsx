import React, { useContext } from "react";
import { IoHome } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import ContextMaker from "../../context/ContextMaker";

function Footer() {
  const { theme, smenu, setsmenu } = useContext(ContextMaker);
  return (
    <div
      className={`w-full h-14 md:h-12 ${
        theme ? "bg-black" : "bg-white"
      } text-3xl flex justify-between bg-opacity-60 backdrop-blur-sm  px-4 items-center rounded-t-xl`}
    >
      <IoHome />
      <MdSupportAgent />
      <span className="text-4xl md:text-5xl ">
        <button
          onClick={() => {
            setsmenu(!smenu);
          }}
        >
          {smenu ? <RiMenu5Fill /> : <RxCross2 />}
        </button>
      </span>
      <CiSquareQuestion />
      <IoMdNotifications />
    </div>
  );
}

export default Footer;
