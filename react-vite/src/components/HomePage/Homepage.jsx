import React, { useContext, useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
import AnimalCard from "../AnimalCard/AnimalCard";
import { useDispatch, useSelector } from "react-redux";
import { addAnimalThunk, getAllAnimalsThunk } from "../../redux/animals";

const Homepage = () => {
  const animals = useSelector((state) => state?.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimalsThunk());
  }, [animals.new_animal]);

  const addAnimal = async () => {
    const data = {
      animal_name: "From Site",
      age: 41,
      breed: "From Site",
      fixed: true,
      good_w_cats: true,
      good_w_dogs: true,
      good_w_kids: true,
      potty_trained: true,
      rescue_date: "2001-01-01",
      sex: "Male",
      story: "This is my story, hip hop storyyyyyyyy",
      thumbnail_img: "THUMBNAIL URLLLLLL",
      type: "Dog",
    };

    try {
      const addRescue = await dispatch(addAnimalThunk(data));
      if (addRescue) {
        alert("BUTTON CLICKED");
      }
    } catch (error) {
      console.error("Error Adding Rescue", error);
    }
  };

  return (
    <>
      <button onClick={addAnimal}>Add New Animal</button>
      {animals?.animals?.length > 0 ? (
        animals.animals.map((rescue) => (
          <AnimalCard key={rescue.id} rescue={rescue} />
        ))
      ) : (
        <p>No animals found</p>
      )}
    </>
  );
};

export default Homepage;
