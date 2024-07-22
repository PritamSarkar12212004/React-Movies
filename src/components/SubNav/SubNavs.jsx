import React from "react";
import SubNav from "./SubNav";

function SubNavs() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden mt-3 h-10 bg-black bg-opacity-30 backdrop-blur-sm sticky top-0 z-50 flex items-center px-5 py-1 ">
      <SubNav />
    </div>
  );
}

export default SubNavs;
