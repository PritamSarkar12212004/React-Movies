import React, { useState } from "react";
import ContextMaker from "./ContextMaker";

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  return (
    <ContextMaker.Provider value={{ theme, setTheme }}>
      {children}
    </ContextMaker.Provider>
  );
};
export default ContextProvider;
