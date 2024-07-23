import React, { useContext, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import ContextMaker from "../../context/ContextMaker";

function MainNav() {
  const { theme, setTheme } = useContext(ContextMaker);
  const setWebTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  return (
    <div className={ `h-14  flex justify-between items-center border-b-[1px] ${theme? "border-gray-800":" border-gray-300 "}`}>
      <div className="flex items-center justify-center">
        <div className="h-full w-12 rounded-full bg-black ">
          <img
            src="MainLogo/Logo.png"
            className="h-full  place-content-center "
            alt=""
          />
        </div>
        <h1 className="  pl-2">
          <span className="text-red-500 opacity-100 font-bold  text-lg">A</span>
          lpha
          <span className="text-blue-500 opacity-100 font-bold  text-lg">
            {" "}
            m
          </span>
          ovies
        </h1>
      </div>
      <div className="flex gap-4 text-3xl ">
        <button onClick={(e) => setWebTheme(e)}>
          <CiLight />
        </button>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
        </Stack>
      </div>
    </div>
  );
}

export default MainNav;
