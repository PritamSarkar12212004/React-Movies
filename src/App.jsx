import React, { useContext, useEffect, useState } from "react";
import MainNavs from "./components/MainNav/MainNavs";
import SubNavs from "./components/SubNav/SubNavs";
import Movies from "./components/Movie/Movies";
import Studios from "./components/Studio/Studios";
import SemiContants from "./components/SemiContents/SemiContants";
import ProductsCointener from "./components/ProductContainer/ProductsCointener";
import Footers from "./components/Footer/Footers";
import ContextMaker from "./context/ContextMaker";
import Smenus from "./components/Menu/Smenu/Smenus";
function App() {
  const { theme, smenu } = useContext(ContextMaker);

  return (
    <div
      className={`w-full h-full ${theme ? "bg-black" : "bg-white"} ${
        theme ? "text-white" : "text-black"
      } `}
    >
      <MainNavs />
      <div className={`${smenu ? "block" : " hidden "}`}>
        <SubNavs />
        <Movies />
        <Studios />
        <SemiContants />
        <ProductsCointener />
      </div>
      <Footers />
      <div className={` ${smenu ? "hidden" : " flex "}`}>
        <Smenus />
      </div>
    </div>
  );
}

export default App;
