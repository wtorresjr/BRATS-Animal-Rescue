import { useEffect, useState } from "react";
import { addAnimalThunk, getAllAnimalsThunk } from "../../redux/animals";
import { useDispatch } from "react-redux";
import "./admin-page.css";
import validateData from "./validation";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminPage = () => {
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
    console.log(formErrors, "Errors from useeffect");
  }, [formErrors]);

  const addAnimal = async () => {
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
        const addRescue = await dispatch(addAnimalThunk(data));
        if (addRescue) {
          // alert("Added Rescue Successfully!");
          const loadNew = await dispatch(getAllAnimalsThunk());

          // console.log(loadNew);
          navigate("/adopt");
        }
      } catch (error) {
        console.error("Error Adding Rescue", error);
      }
    } else {
      // console.log(validationResult, "ERRORS from Return");
      setFormErrors(validationResult);
    }
  };

  return (
    <>
      <h1>Admin - Add a Rescue</h1>
      <div className="div-admin dropDown-div">
        <label>Name:</label>
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
        <label>Age:</label>
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
        <label>Rescue Type:</label>
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
        <label>Breed:</label>
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
        <label>Spayed or Neutered:</label>
        <select value={fixed} onChange={(e) => setFixed(e.target.value)}>
          <option value={""}>Spayed or Neutered?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.fixed_error && (
          <span className="errors-red">{formErrors.fixed_error}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Available For Adoption?:</label>
        <select value={canAdopt} onChange={(e) => setCanAdopt(e.target.value)}>
          <option value={""}>Available To Adopt?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.can_adopt && (
          <span className="errors-red">{formErrors.can_adopt}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Good With Cats?</label>
        <select value={gwCats} onChange={(e) => setGWCats(e.target.value)}>
          <option value={""}>Good With Cats?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.good_w_cats && (
          <span className="errors-red">{formErrors.good_w_cats}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Good With Dogs?</label>
        <select value={gwDogs} onChange={(e) => setGWDogs(e.target.value)}>
          <option value={""}>Good With Dogs?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.good_w_dogs && (
          <span className="errors-red">{formErrors.good_w_dogs}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Good With Kids?</label>
        <select value={gwKids} onChange={(e) => setGWKids(e.target.value)}>
          <option value={""}>Good With Kids?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.good_w_kids && (
          <span className="errors-red">{formErrors.good_w_kids}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Potty Trained?</label>
        <select value={trained} onChange={(e) => setTrained(e.target.value)}>
          <option value={""}>Potty Trained?</option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
        {formErrors.potty_trained && (
          <span className="errors-red">{formErrors.potty_trained}</span>
        )}
      </div>

      <div className="div-admin dropDown-div">
        <label>Rescue Date:</label>
        <input
          type="date"
          value={rescueDate}
          onChange={(e) => setRescueDate(e.target.value)}
        />
        {formErrors.rescue_date && (
          <span className="errors-red">{formErrors.rescue_date}</span>
        )}
      </div>

      <div className="dropDown-div">
        <label>Sex:</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value={""}>Rescue's Sex?</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
        {formErrors.sex && <span className="errors-red">{formErrors.sex}</span>}
      </div>

      <div className="div-admin dropDown-div storyInput">
        <label>Story:</label>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
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
        onClick={addAnimal}
      >
        Add New Rescue
      </Button>
    </>
  );
};

export default AdminPage;
