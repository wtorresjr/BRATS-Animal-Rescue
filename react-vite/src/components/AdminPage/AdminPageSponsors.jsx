import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./admin-page.css";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import validateSponsor from "../AdminPage/validateSponsors";

import { getAllSponsorsThunk, addNewSponsorThunk, editSponsorThunk } from "../../redux/sponsors";

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

  // useEffect(() => {
  //   console.log("Form Errors", formErrors);
  // }, [formErrors]);

  const addEditSponsor = async () => {
    const data = {
      sponsor_name: sponsorName,
      sponsor_site: sponsorSite,
      sponsor_img: sponsorImg,
    };

    const validationResult = await validateSponsor(data);

    if (validationResult === true) {
      try {
        let editedSponsor;
        let addSponsor;
        if (editSponsor !== undefined) {
          editedSponsor = await dispatch(
            editSponsorThunk(editSponsor.id, data)
          );
        } else {
          addSponsor = await dispatch(addNewSponsorThunk(data));
        }
        if (addSponsor || editedSponsor) {
          const loadNew = await dispatch(getAllSponsorsThunk());
          navigate("/sponsors");
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
      <h1>Admin - {editSponsor ? "Edit A Sponsor" : "Add An Sponsor"}</h1>
      <div className="div-admin dropDown-div">
        <label>Sponsor Name:</label>
        <input
          type="text"
          value={sponsorName}
          onChange={(e) => setSponsorName(e.target.value)}
        />
        {formErrors.sponsor_name_error && (
          <span className="errors-red">{formErrors.sponsor_name_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Sponsor Site:</label>
        <input
          value={sponsorSite}
          onChange={(e) => setSponsorSite(e.target.value)}
        />{" "}
      </div>

      <div className="dropDown-div">
        <label>Sponsor Image:</label>
        <input
          value={sponsorImg}
          onChange={(e) => setSponsorImg(e.target.value)}
        />
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
