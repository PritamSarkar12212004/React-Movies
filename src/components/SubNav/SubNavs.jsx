import React, { useContext } from "react";
import SubNav from "./SubNav";
import ContextMaker from "../../context/ContextMaker";
function SubNavs() {
  const { theme } = useContext(ContextMaker);
  return (
    <div
      className={`w-full overflow-x-auto overflow-y-hidden mt-3 h-10 md:h-14 ${
        theme ? "bg-blac" : "bg-white"
      }k bg-opacity-30 backdrop-blur-sm sticky top-0 z-10 flex items-center px-5 py-1 `}
    >
      <SubNav />
    </div>
  );
}

export default SubNavs;
