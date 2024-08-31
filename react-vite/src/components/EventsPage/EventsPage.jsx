import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import { EventCard } from "./EventsCard";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { getAllEventsThunks } from "../../redux/events";
import NavMenu from "../NavMenu/NavMenu";
import "../HomeCard/homecard.css";

const EventsPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  const events = useSelector((state) => state?.events);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpenMenu(false);
  }, []);

  useEffect(() => {
    dispatch(getAllEventsThunks());
  }, [events.new_event]);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <h1 style={{ color: "#00275e", textAlign: "center" }}>Upcoming Events</h1>
      {events?.events?.length > 0 ? (
        events.events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            cssStyle={"genGreyContainer"}
          />
        ))
      ) : (
        <p style={{ width: "100%" }}>No events found</p>
      )}
      <Footer />
    </>
  );
};

export { EventsPage };
