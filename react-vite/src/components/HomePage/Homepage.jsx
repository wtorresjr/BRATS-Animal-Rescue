import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { getAllAnimalsThunk } from "../../redux/animals";
import AnimalCard from "../AnimalCard/AnimalCard";

const Homepage = () => {
  const { animals, loading, error } = useContext(AppContext);

  // const currRescues = animals["animals"];

  // console.log(...currRescues);

  if (loading) {
    <div>LOADING...</div>;
  }
  if (error) {
    <p>{error}</p>;
  }

  return (
    <>
      {animals &&
        animals["animals"]?.map((rescue) => {
          return <AnimalCard key={rescue.id} rescue={rescue} />;
        })}
    </>
  );
};

export default Homepage;
