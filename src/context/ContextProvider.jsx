import React, { useState } from "react";
import ContextMaker from "./ContextMaker";
import randomColor from 'randomcolor'

const ContextProvider = ({ children }) => {
  // for theme background and text
  const [theme, setTheme] = useState(true);
  //for sm navbar
  const [smenu, setsmenu] = useState(true);
  // for the notification cebter
  const [noti, setnoti] = useState(false);
  // fot randomBgColor
  const [randomBgColor, setrandomBgColor] = useState(randomColor());
  console.log(randomBgColor)
 
  

  return (
    <ContextMaker.Provider
      value={{ theme, setTheme, smenu, setsmenu, noti, setnoti,randomBgColor }}
    >
      {children}
    </ContextMaker.Provider>
  );
};
export default ContextProvider;
