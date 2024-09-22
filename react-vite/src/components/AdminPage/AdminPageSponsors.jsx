import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./admin-page.css";
import validateEvents from "./validationEvents";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
// import {
//   addSponsorThunk,
//   editSponsorThunk,
//   getAllEventsThunks,
// } from "../../redux/events";
import { getAllSponsorsThunk } from "../../redux/sponsors";

const AdminPageSponsors = () => {
  const location = useLocation();
  const editSponsor = location.state?.editSponsor;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sponsorName, setSponsorName] = useState("");
  const [sponsorSite, setSponsorSite] = useState("");
  const [sponsorImg, setSponsorImg] = useState("");

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (editSponsor !== undefined) {
      setSponsorName(editSponsor?.sponsor_name);
      setSponsorSite(editSponsor?.sponsor_site);
      setSponsorImg(editSponsor?.sponsor_img);
    } else {
      setSponsorName("");
      setSponsorSite("");
      setSponsorImg("");
    }
  }, [editSponsor]);

  const addEditSponsor = async () => {
    const data = {
      sponsor_name: sponsorName,
      sponsor_site: sponsorSite,
      sponsor_img: sponsorImg,
    };

    const validationResult = await validateEvents(data);

    if (validationResult === true) {
      try {
        let editedSponsor;
        let addSponsor;
        if (editSponsor !== undefined) {
          editedSponsor = await dispatch(
            editSponsorThunk(editSponsor.id, data)
          );
        } else {
          addSponsor = await dispatch(addSponsorThunk(data));
        }
        if (addSponsor || editedSponsor) {
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
      <h1>Admin - {editSponsor ? "Edit An Event" : "Add An Event"}</h1>
      <div className="div-admin dropDown-div">
        <label>Sponsor Name:</label>
        <input
          type="text"
          value={sponsorName}
          onChange={(e) => setSponsorName(e.target.value)}
        />
        {formErrors.title_error && (
          <span className="errors-red">{formErrors.title_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Sponsor Site:</label>
        <input
          value={sponsorSite}
          onChange={(e) => setSponsorSite(e.target.value)}
        />
        {formErrors.date_error && (
          <span className="errors-red">{formErrors.date_error}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Sponsor Image:</label>
        <input
          value={sponsorImg}
          onChange={(e) => setSponsorImg(e.target.value)}
        />
        {formErrors.time_error && (
          <span className="errors-red">{formErrors.time_error}</span>
        )}
      </div>

      <Button
        className="subButton"
        style={{ margin: "10px 0 0 0", width: "100%" }}
        variant="contained"
        onClick={addEditSponsor}
      >
        {editSponsor ? "Save Edits" : "Add New Sponsor"}
      </Button>
    </>
  );
};

export default AdminPageSponsors;
