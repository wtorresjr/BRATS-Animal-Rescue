import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { HomeCard } from "../HomeCard";
import { DonationsCard } from "../HomeCard";
import { SmallCard } from "../HomeCard";

const volunteerImg = "Cat-n-Dog.jpg";
const sponsorsImg = "sponsor-image.jpg";
const adoptImg = "dog-img1.jpg";
const eventsImg = "special-events.jpg";

const HomePageCards = () => {
  return (
    <>
      <div style={{ margin: "10px 0 0 0" }}></div>
      <NavLink to={"/mission"}>
        <Button
          style={{
            backgroundColor: "#ca0300",
            alignItems: "center",
            borderRadius: "10px",
          }}
          fullWidth={true}
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
      <NavLink to={"/sponsors"}>
        <SmallCard
          title={"OUR SPONSORS"}
          cssStyle={"sponsors"}
          cardText={"Help keep our mission alive..."}
          callToAction={"VIEW SPONSORS or BECOME ONE..."}
          imgSrc={sponsorsImg}
        />
      </NavLink>
      <div style={{ margin: "10px 0 0 0" }}></div>
    </>
  );
};

export default HomePageCards;
