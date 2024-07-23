import React, { useContext } from "react";
import { IoHome } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import ContextMaker from "../../context/ContextMaker";

function Footer() {
  const { theme, smenu, setsmenu, noti, setnoti } = useContext(ContextMaker);
  return (
    <div
      className={`w-full h-14 md:h-12 ${
        theme ? "bg-black" : "bg-white"
      } text-3xl flex justify-between bg-opacity-60 backdrop-blur-sm  px-4 items-center rounded-t-xl`}
    >
      <div className={`${smenu ? "block" : "  opacity-20 "} flex gap-10`}>
        <IoHome />
        <MdSupportAgent />
      </div>
      <span className="text-4xl md:text-5xl  ">
        <button
          onClick={() => {
            setsmenu(!smenu);
          }}
        >
          {smenu ? <RiMenu5Fill /> : <RxCross2 />}
        </button>
      </span>
      <div className={`${smenu ? "block" : "  opacity-20  "} flex gap-10`}>
        <button>
          <CiSquareQuestion />
        </button>
        <button
          onClick={() => {
            setnoti(!noti);
          }}
        >
          <IoMdNotifications />
        </button>
      </div>
    </div>
  );
}

export default Footer;
