import { useState } from "react";
import { Header } from "../Header";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AdoptCard from "../AdoptCard/AdoptCard";

const Homepage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  return (
    <>
      <Header />

      {openMenu ? <NavMenu /> : null}

      <div style={{ margin: "10px 0 0 0" }}></div>

      <Button
        style={{ backgroundColor: "#ca0300", alignItems: "center" }}
        fullWidth={"True"}
        variant="contained"
        endIcon={<ArrowRightIcon />}
      >
        Our Mission
      </Button>

      <div style={{ margin: "10px 0 0 0" }}></div>

      <AdoptCard />
    </>
  );
};

export default Homepage;
