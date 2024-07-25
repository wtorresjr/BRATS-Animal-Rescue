import React, { useContext, useEffect } from "react";
import AnimalCard from "../AnimalCard/AnimalCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnimalsThunk } from "../../redux/animals";
import { Header } from "../Header";
import { Footer } from "../Footer";

const AdoptionPage = () => {
  const animals = useSelector((state) => state?.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimalsThunk());
  }, [animals.new_animal]);

  return (
    <>
      <Header />
      {animals?.animals?.length > 0 ? (
        animals.animals.map((rescue) => (
          <AnimalCard key={rescue.id} rescue={rescue} />
        ))
      ) : (
        <p>No animals found</p>
      )}
      <Footer />
    </>
  );
};

export default AdoptionPage;
