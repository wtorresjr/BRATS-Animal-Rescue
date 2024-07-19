import { useState } from "react";
import { Header } from "../Header";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HomeCard from "../HomeCard/HomeCard";

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

      <HomeCard
        title={"Adopt Today"}
        cardText={
          "  Find the perfect companion. Browse rescue animals in need of a home..."
        }
        callToAction={"SEARCH"}
        imgSrc={"./"}
        cssStyle={"adopt"}
      />

      <div style={{ margin: "10px 0 0 0" }}></div>

      <HomeCard
        title={"Special Events"}
        cardText={"View our upcoming events..."}
        callToAction={"VIEW CALENDAR"}
        imgSrc={"./"}
        cssStyle={"event"}
      />

      <div style={{ margin: "10px 0 0 0" }}></div>

      

    </>
  );
};

export default Homepage;
