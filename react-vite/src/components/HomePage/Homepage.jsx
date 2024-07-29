import { Header } from "../Header";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HomeCard from "../HomeCard/HomeCard";
import { Footer } from "../Footer";
import { DonationsCard } from "../HomeCard";
import { SmallCard } from "../HomeCard";
import { NavLink } from "react-router-dom";

const volunteerImg = "../src/Assets/Cat-n-Dog.jpg";
const sponsorsImg = "../src/Assets/sponsor-image.jpg";
const adoptImg = "../dist/assets/dog-img1.jpg";
const eventsImg = "../src/Assets/special-events.jpg";

const Homepage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div style={{ margin: "10px 0 0 0" }}></div>
      <Button
        style={{
          backgroundColor: "#ca0300",
          alignItems: "center",
          borderRadius: "10px",
        }}
        fullWidth={"True"}
        variant="contained"
        endIcon={<ArrowRightIcon />}
      >
        Our Mission
      </Button>
      <div style={{ margin: "10px 0 0 0" }}></div>
      <NavLink to={"/adopt"}>
        <HomeCard
          title={"Adopt Today"}
          cardText={
            "Find the perfect companion. Browse rescue animals in need of a home..."
          }
          callToAction={"SEARCH"}
          imgSrc={adoptImg}
          cssStyle={"adopt"}
        />
      </NavLink>
      <div style={{ margin: "10px 0 0 0" }}></div>
      <HomeCard
        title={"Special Events"}
        cardText={"View our upcoming events..."}
        callToAction={"VIEW CALENDAR"}
        imgSrc={eventsImg}
        cssStyle={"event"}
      />
      <div style={{ margin: "10px 0 0 0" }}></div>

      <DonationsCard
        mainTitle={"MAKE A DONATION"}
        tagLine={"Your donations save lives"}
        cssStyle={"donation"}
      />

      <div style={{ margin: "10px 0 0 0" }}></div>

      <SmallCard
        title={"Ways To Volunteer"}
        cssStyle={"volunteer"}
        cardText={"See how you can help..."}
        callToAction={"VOLUNTEER"}
        imgSrc={volunteerImg}
      />

      <div style={{ margin: "10px 0 0 0" }}></div>

      <SmallCard
        title={"OUR SPONSORS"}
        cssStyle={"sponsors"}
        cardText={"Help keep our mission alive..."}
        callToAction={"SPONSORS"}
        imgSrc={sponsorsImg}
      />
      <div style={{ margin: "10px 0 0 0" }}></div>
      <Footer />
    </>
  );
};

export default Homepage;
