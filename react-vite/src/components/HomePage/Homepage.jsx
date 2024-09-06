import { Header } from "../Header";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext, useEffect } from "react";
import { Footer } from "../Footer";
import HomePageCards from "./HomepageCards";


const Homepage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <HomePageCards />
      <Footer />
    </>
  );
};

export default Homepage;
