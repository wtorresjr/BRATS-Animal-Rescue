import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnimalsThunk } from "../../redux/animals";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MyContext } from "../../context/MyContext";
import { NavMenu } from "../NavMenu";
import { AdoptionCard } from "../HomeCard";

const AdoptionPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  const animals = useSelector((state) => state?.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimalsThunk());
  }, [animals.new_animal]);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      {animals?.animals?.length > 0 ? (
        animals.animals.map((rescue) => (
          <AdoptionCard key={rescue.id} rescue={rescue} cssStyle={"adopt-detail"}/>
        ))
      ) : (
        <p>No animals found</p>
      )}
      <Footer />
    </>
  );
};

export default AdoptionPage;
