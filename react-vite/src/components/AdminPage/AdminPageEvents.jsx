import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./admin-page.css";
import validateEvents from "./validationEvents";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  addEventThunk,
  editEventThunk,
  getAllEventsThunks,
} from "../../redux/events";

const AdminPageEvents = () => {
  const location = useLocation();
  const editEvent = location.state?.editEvent;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImg, setEventImg] = useState("");

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (editEvent !== undefined) {
      setEventTitle(editEvent?.event_title);
      setEventDate(editEvent?.event_date);
      setEventTime(editEvent?.event_time);
      setEventLocation(editEvent?.event_location);
      setEventDesc(editEvent?.event_desc);
      setEventImg(editEvent?.event_img);
    } else {
      setEventTitle("");
      setEventDate("");
      setEventTime("");
      setEventLocation("");
      setEventDesc("");
      setEventImg("");
    }
  }, [editEvent]);

  const addEditEvent = async () => {

    const data = {
      event_title: eventTitle,
      event_location: eventLocation,
      event_date: eventDate,
      event_time: eventTime,
      event_desc: eventDesc,
      event_img: eventImg,
    };

    const validationResult = await validateEvents(data);

    if (validationResult === true) {
      try {
        let editedEvent;
        let addEvent;
        if (editEvent !== undefined) {
          editedEvent = await dispatch(editEventThunk(editEvent.id, data));
        } else {
          addEvent = await dispatch(addEventThunk(data));
        }
        if (addEvent || editedEvent) {
          const loadNew = await dispatch(getAllEventsThunks());
          navigate("/events");
        }
      } catch (error) {
        console.error("Error Adding Event", error);
      }
    } else {
      setFormErrors(validationResult);
    }
  };

  return (
    <>
      <h1>Admin - {editEvent ? "Edit An Event" : "Add An Event"}</h1>
      <div className="div-admin dropDown-div">
        <label>Event Title:</label>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        {formErrors.title_error && (
          <span className="errors-red">{formErrors.title_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        {formErrors.date_error && (
          <span className="errors-red">{formErrors.date_error}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Event Time:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        {formErrors.time_error && (
          <span className="errors-red">{formErrors.time_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Location:</label>
        <input
          type="text"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
        {formErrors.location_error && (
          <span className="errors-red">{formErrors.location_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div storyInput">
        <label>Event Description:</label>
        <textarea
          value={eventDesc}
          onChange={(e) => setEventDesc(e.target.value)}
        />
        {formErrors.desc_error && (
          <span className="errors-red">{formErrors.desc_error}</span>
        )}
      </div>

      <div className="div-admin url-input">
        <label>Thumbnail Image URL:</label>
        <input
          type="text"
          value={eventImg}
          onChange={(e) => setEventImg(e.target.value)}
        />
        {formErrors.event_img_error && (
          <span className="errors-red">{formErrors.event_img_error}</span>
        )}
      </div>

      <Button
        className="subButton"
        style={{ margin: "10px 0 0 0", width: "100%" }}
        variant="contained"
        onClick={addEditEvent}
      >
        {editEvent ? "Save Edits" : "Add New Event"}
      </Button>
    </>
  );
};

export default AdminPageEvents;
