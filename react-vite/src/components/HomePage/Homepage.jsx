import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Homepage = () => {
  const { data, loading, error } = useContext(AppContext);

  console.log(data);

  if (loading) {
    <div>Home page</div>;
  }
  if (error) {
    <p>{error}</p>;
  }

  return (
    <>
      <p>HOMEPAGE</p>
    </>
  );
};

export default Homepage;
