import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MyContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
