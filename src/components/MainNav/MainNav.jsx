import React from "react";
import { CiLight } from "react-icons/ci";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";

function MainNav() {
  return (
    <div className="h-14  flex justify-between items-center border-b-[1px] border-gray-800">
      <div className="flex items-center justify-center">
        <div className="h-full w-14 rounded-full ">
          <img src="MainLogo/Logo.png" className="h-full  " alt="" />
        </div>
        <h1 className="  ">
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
        <CiLight />
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
        </Stack>
      </div>
    </div>
  );
}

export default MainNav;
