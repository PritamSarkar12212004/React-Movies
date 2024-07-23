import React, { useState } from "react";
import ContextMaker from "./ContextMaker";

const ContextProvider = ({ children }) => {
  // for theme background and text
  const [theme, setTheme] = useState(true);
  //for sm navbar
  const [smenu, setsmenu] = useState(true);

  return (
    <ContextMaker.Provider value={{ theme, setTheme,smenu, setsmenu}}>
      {children}
    </ContextMaker.Provider>
  );
};
export default ContextProvider;
