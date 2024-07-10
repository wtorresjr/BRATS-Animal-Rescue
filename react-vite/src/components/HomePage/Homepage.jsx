import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import AnimalCard from "../AnimalCard/AnimalCard";

const Homepage = () => {
  const { animals, loading, error } = useContext(AppContext);

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
