import React, { useContext, useEffect } from "react";
import AnimalCard from "../AnimalCard/AnimalCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnimalsThunk } from "../../redux/animals";

const AdoptionPage = () => {
  const animals = useSelector((state) => state?.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimalsThunk());
  }, [animals.new_animal]);

  return (
    <>
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

export default AdoptionPage;
