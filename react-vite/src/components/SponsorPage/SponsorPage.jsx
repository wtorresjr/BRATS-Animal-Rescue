import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import { SponsorCard } from "./SponsorCard";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { getAllEventsThunks } from "../../redux/events";
import NavMenu from "../NavMenu/NavMenu";
import "../HomeCard/homecard.css";

const SponsorPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  const events = useSelector((state) => state?.events);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getAllEventsThunks());
  }, [events.new_event]);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <h1 style={{ color: "#00275e", textAlign: "center" }}>Become A Sponsor</h1>
      {events?.events?.length > 0 ? (
        events.events.map((event) => (
          <SponsorCard
            key={event.id}
            event={event}
            cssStyle={"genGreyContainer"}
          />
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <p style={{ width: "100%" }}>
            No events found, Please check back again later for updates.
          </p>
        </div>
      )}
      <Footer />
    </>
  );
};

export { SponsorPage };
