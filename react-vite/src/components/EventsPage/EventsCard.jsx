import "../HomeCard/homecard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const EventCard = ({ cssStyle, event }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);
  const dispatch = useDispatch();

  const editEvent = () => {
    // console.log("Animal To Edit", rescue);
    navigate("/admin/event", { state: { editRescue: rescue } });
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
          <p>{`Please confirm you would like to delete ${event.event_title}`}</p>
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
          <div className={`${cssStyle}-img`}>
            <img src={event.event_img}></img>
          </div>
          <div className={`${cssStyle}-adptText`}>
            <h1>{event.event_title}</h1>
            <div>Age: {event.age} Years Old</div>
            <div>Sex: {event.sex}</div>
            <div>Good With Kids? {event.good_w_kids ? "Yes" : "No"}</div>
            <div>Good With Cats? {event.good_w_cats ? "Yes" : "No"}</div>
            <div>Good With Dogs? {event.good_w_dogs ? "Yes" : "No"}</div>
            <div>Spayed/Neutered? {event.fixed ? "Yes" : "No"}</div>
            <div>Potty Trained? {event.potty_trained ? "Yes" : "No"}</div>
          </div>
          <div>
            <div className="adopt-story-contain">
              <div>
                <strong>{`${event.event_title}'s Story`}:</strong> {event.story}
              </div>

              {/* {event.can_adopt ? "CAN ADOPT" : "ADOPTED!"} */}
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "column wrap",
                flexGrow: "1",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              {event.can_adopt ? (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    getInfo(event.event_title);
                  }}
                >{`Learn More About ${event.event_title}`}</Button>
              ) : (
                <Button variant="contained" color="success">
                  {"ADOPTED!"}
                </Button>
              )}
            </div>
            {sessionUser && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
