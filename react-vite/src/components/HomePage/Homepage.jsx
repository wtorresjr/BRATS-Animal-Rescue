import { useState } from "react";
import { Header } from "../Header";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";

const Homepage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
    </>
  );
};

export default Homepage;
