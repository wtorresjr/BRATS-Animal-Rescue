import "../HomeCard/homecard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { deleteEventThunk } from "../../redux/events";

const EventCard = ({ cssStyle, event }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);
  const dispatch = useDispatch();

  const calcTime = (time) => {
    const convertTime = time.split(":");
    if (convertTime[0] > 12) {
      const newTime = convertTime[0] - 12 + ":" + convertTime[1] + " " + "PM";
      return newTime;
    } else {
      const newTime = time + " " + "AM";
      return newTime;
    }
  };

  const deleteEvent = async () => {
    dispatch(deleteEventThunk(event.id));
  };

  const editEvent = () => {
    navigate("/admin/events", { state: { editEvent: event } });
  };

  return (
    <div className={`${cssStyle}-card`}>
      {deleting ? (
        <div
          className="errorsPtag"
          style={{
            display: "flex",
            flexFlow: "column wrap",
            gap: "10px",
            width: "100%",
          }}
        >
          <p>{`Please confirm you would like to delete the ${event.event_title} event?`}</p>
          <Button variant="contained" color="error" onClick={deleteEvent}>
            DELETE
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setDeleting(false)}
          >
            CANCEL
          </Button>
        </div>
      ) : (
        <>
          {event.event_img && (
            <div className={`${cssStyle}-img`}>
              <img src={event.event_img}></img>
            </div>
          )}
          <div className={`${cssStyle}-adptText`}>
            <h1 style={{ color: "#ca0300" }}>{event.event_title}</h1>
          </div>
          <div>
            <div>
              <strong>When: </strong>
              {event.event_date} at {calcTime(event.event_time)}
            </div>
            <div>
              <strong>Where: </strong>
              {event.event_location}
            </div>
            <div className="adopt-story-contain">
              <div>{event.event_desc}</div>

              {/* {event.can_adopt ? "CAN ADOPT" : "ADOPTED!"} */}
            </div>
            {sessionUser && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Button variant="contained" onClick={() => setDeleting(true)}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={editEvent}
                >
                  Edit
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export { EventCard };
