import React from "react";
import MainNavs from "./components/MainNav/MainNavs";
import SubNavs from "./components/SubNav/SubNavs";
import Movies from "./components/Movie/Movies";
import Studios from "./components/Studio/Studios";
import SemiContants from "./components/SemiContents/SemiContants";

function App() {
  return (
    <div className="w-full h-full bg-black text-white">
      <MainNavs />
      <SubNavs />
      <Movies />
      <Studios />
      <SemiContants/>
    </div>
  );
}

export default App;
