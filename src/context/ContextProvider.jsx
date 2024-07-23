import React, { useState } from "react";
import ContextMaker from "./ContextMaker";

const ContextProvider = ({ children }) => {
  // for theme background and text
  const [theme, setTheme] = useState(true);
  //for sm navbar
  const [smenu, setsmenu] = useState(true);
  const [noti, setnoti] = useState(false);

  return (
    <ContextMaker.Provider
      value={{ theme, setTheme, smenu, setsmenu, noti, setnoti }}
    >
      {children}
    </ContextMaker.Provider>
  );
};
export default ContextProvider;
