import { useSelector } from "react-redux";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {sessionUser && (
        <ButtonComponent
          buttonText={"Logout"}
          bgColor={"black"}
          size={["50px", "200px"]}
          textColor={"white"}
          btnRadius={"5px"}
        />
      )}
    </>
  );
};

export default NavBar;
