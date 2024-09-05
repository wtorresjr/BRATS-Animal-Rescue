import { Header } from "../Header";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HomeCard from "../HomeCard/HomeCard";
import { Footer } from "../Footer";
import { DonationsCard } from "../HomeCard";
import { SmallCard } from "../HomeCard";
import { NavLink } from "react-router-dom";

const volunteerImg = "Cat-n-Dog.jpg";
const sponsorsImg = "sponsor-image.jpg";
const adoptImg = "dog-img1.jpg";
const eventsImg = "special-events.jpg";

//Updated git configuration email

const Homepage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div style={{ margin: "10px 0 0 0" }}></div>
      <NavLink to={"/mission"}>
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
      </NavLink>
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

      <NavLink to={"/events"}>
        <HomeCard
          title={"Special Events"}
          cardText={"View our upcoming events..."}
          callToAction={"COMING SOON!"}
          imgSrc={eventsImg}
          cssStyle={"event"}
        />
      </NavLink>

      <div style={{ margin: "10px 0 0 0" }}></div>

      <NavLink to={"/donate"}>
        <DonationsCard
          mainTitle={"MAKE A DONATION"}
          tagLine={"Your donations save lives"}
          cssStyle={"donation"}
        />
      </NavLink>

      <div style={{ margin: "10px 0 0 0" }}></div>

      <NavLink to={"/volunteer"}>
        <SmallCard
          title={"Ways To Volunteer"}
          cssStyle={"volunteer"}
          cardText={"See how you can help..."}
          callToAction={"VOLUNTEER"}
          imgSrc={volunteerImg}
        />
      </NavLink>

      <div style={{ margin: "10px 0 0 0" }}></div>

      <SmallCard
        title={"OUR SPONSORS"}
        cssStyle={"sponsors"}
        cardText={"Help keep our mission alive..."}
        callToAction={"COMING SOON!"}
        imgSrc={sponsorsImg}
      />
      <div style={{ margin: "10px 0 0 0" }}></div>
      <Footer />
    </>
  );
};

export default Homepage;
