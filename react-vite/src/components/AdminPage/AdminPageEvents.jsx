import { useEffect, useState } from "react";
import {
  addAnimalThunk,
  editAnimalThunk,
  getAllAnimalsThunk,
} from "../../redux/animals";
import { useDispatch } from "react-redux";
import "./admin-page.css";
import validateData from "./validation";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const AdminPageEvents = () => {
  const location = useLocation();
  const editRescue = location.state?.editRescue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [fixed, setFixed] = useState("");
  const [gwCats, setGWCats] = useState("");
  const [gwDogs, setGWDogs] = useState("");
  const [gwKids, setGWKids] = useState("");
  const [trained, setTrained] = useState("");
  const [rescueDate, setRescueDate] = useState("");
  const [sex, setSex] = useState("");
  const [story, setStory] = useState("");
  const [canAdopt, setCanAdopt] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [rescueType, setRescueType] = useState("");

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (editRescue !== undefined) {
      const date = new Date(editRescue.rescue_date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      setAge(editRescue?.age);
      setName(editRescue?.animal_name);
      setBreed(editRescue?.breed);
      setFixed(editRescue?.fixed ? 1 : 0);
      setGWCats(editRescue?.good_w_cats ? 1 : 0);
      setGWDogs(editRescue?.good_w_dogs ? 1 : 0);
      setGWKids(editRescue?.good_w_kids ? 1 : 0);
      setTrained(editRescue?.potty_trained ? 1 : 0);
      setRescueDate(formattedDate);
      setRescueType(editRescue?.type);
      setSex(editRescue?.sex);
      setStory(editRescue?.story);
      setCanAdopt(editRescue?.can_adopt ? 1 : 0);
      setThumbnail(editRescue?.thumbnail_img);
    } else {
      setAge("");
      setName("");
      setBreed("");
      setFixed("");
      setGWCats("");
      setGWDogs("");
      setGWKids("");
      setTrained("");
      setRescueDate("");
      setRescueType("");
      setSex("");
      setStory("");
      setCanAdopt("");
      setThumbnail("");
    }
  }, [editRescue]);

  const addEditEvent = async (actionType) => {
    const data = {
      animal_name: name,
      age: parseInt(age),
      breed: breed,
      fixed: parseInt(fixed),
      good_w_cats: parseInt(gwCats),
      good_w_dogs: parseInt(gwDogs),
      good_w_kids: parseInt(gwKids),
      potty_trained: parseInt(trained),
      can_adopt: parseInt(canAdopt),
      rescue_date: rescueDate,
      sex: sex,
      story: story,
      thumbnail_img: thumbnail,
      type: rescueType,
    };

    const validationResult = await validateData(data);

    if (validationResult === true) {
      try {
        let editedEvent;
        let addEvent;
        if (editRescue !== undefined) {
          editedEvent = await dispatch(editAnimalThunk(editRescue.id, data));
        } else {
          addEvent = await dispatch(addAnimalThunk(data));
        }
        if (addEvent || editedEvent) {
          const loadNew = await dispatch(getAllAnimalsThunk());
          navigate("/events");
        }
      } catch (error) {
        console.error("Error Adding Rescue", error);
      }
    } else {
      setFormErrors(validationResult);
    }
  };

  return (
    <>
      <h1>Admin - {editRescue ? "Edit An Event" : "Add An Event"}</h1>
      <div className="div-admin dropDown-div">
        <label>Event Title:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formErrors.name_error && (
          <span className="errors-red">{formErrors.name_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Event Date:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {formErrors.age_error && (
          <span className="errors-red">{formErrors.age_error}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Event Time:</label>
        <select
          value={rescueType}
          onChange={(e) => setRescueType(e.target.value)}
        >
          <option value={""}>Choose Rescue Type</option>
          <option value={"Dog"}>Dog</option>
          <option value={"Cat"}>Cat</option>
        </select>
        {formErrors.rescueType && (
          <span className="errors-red">{formErrors.rescueType}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Location:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        {formErrors.breed_error && (
          <span className="errors-red">{formErrors.breed_error}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Event Description:</label>
        <select value={fixed} onChange={(e) => setFixed(e.target.value)}>
          <option value={""}>Spayed or Neutered?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.fixed_error && (
          <span className="errors-red">{formErrors.fixed_error}</span>
        )}
      </div>

      <div className="div-admin dropDown-div storyInput">
        <label>Event Description:</label>
        <textarea value={story} onChange={(e) => setStory(e.target.value)} />
        {formErrors.story && (
          <span className="errors-red">{formErrors.story}</span>
        )}
      </div>

      <div className="div-admin url-input">
        <label>Thumbnail Image URL:</label>
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        {formErrors.thumbnail_img && (
          <span className="errors-red">{formErrors.thumbnail_img}</span>
        )}
      </div>

      <Button
        className="subButton"
        style={{ margin: "10px 0 0 0", width: "100%" }}
        variant="contained"
        onClick={addEditEvent}
      >
        {editRescue ? "Save Edits" : "Add New Event"}
      </Button>
    </>
  );
};

export default AdminPageEvents;
