import React, { useEffect, useState } from "react";
import ContextMaker from "./ContextMaker";
import randomColor from "randomcolor";

const ContextProvider = ({ children }) => {
  // for theme background and text
  //for sm navbar
  const [smenu, setsmenu] = useState(true);
  // for the notification cebter
  const [noti, setnoti] = useState(false);
  // fot randomBgColor
  const [randomBgColor, setrandomBgColor] = useState(randomColor());
  console.log(randomBgColor);

  const [theme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ContextMaker.Provider
      value={{
        theme,
        setIsDarkTheme,
        smenu,
        setsmenu,
        noti,
        setnoti,
        randomBgColor,
      }}
    >
      {children}
    </ContextMaker.Provider>
  );
};
export default ContextProvider;
