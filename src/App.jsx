import React, { useContext, useEffect } from "react";
import MainNavs from "./components/MainNav/MainNavs";
import SubNavs from "./components/SubNav/SubNavs";
import Movies from "./components/Movie/Movies";
import Studios from "./components/Studio/Studios";
import SemiContants from "./components/SemiContents/SemiContants";
import ProductsCointener from "./components/ProductContainer/ProductsCointener";
import Footers from "./components/Footer/Footers";
import ContextMaker from "./context/ContextMaker";
function App() {
  const { theme, setTheme } = useContext(ContextMaker);

  return (
    <div
      className={`w-full h-full ${theme ? "bg-black" : "bg-white"} ${
        theme ? "text-white" : "text-black"
      }`}
    >
      <MainNavs />
      <SubNavs />
      <Movies />
      <Studios />
      <SemiContants />
      <ProductsCointener />
      <Footers />
    </div>
  );
}

export default App;
