import React from "react";
import MainNavs from "./components/MainNav/MainNavs";
import SubNavs from "./components/SubNav/SubNavs";
import Movies from "./components/Movie/Movies";
import Studios from "./components/Studio/Studios";

function App() {
  return (
    <div className="w-full h-full bg-black text-white">
      <MainNavs />
      <SubNavs />
      <Movies />
      <Studios />
    </div>
  );
}

export default App;
