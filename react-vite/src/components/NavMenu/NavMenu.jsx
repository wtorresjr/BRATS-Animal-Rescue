import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./navmenu.css";
import { Link, NavLink } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: "#00275e",
  "&:hover": {
    backgroundColor: "#ca0300",
    color: "#FFF",
  },
}));

const NavMenu = () => {
  return (
    <div className="navmenu">
      <ColorButton>
        <NavLink>Foster A Rescue</NavLink>
      </ColorButton>
      <ColorButton>
        <NavLink to={"/adopt"}>Adopt A Rescue</NavLink>
      </ColorButton>
      <ColorButton>
        <NavLink>Event Calendar</NavLink>
      </ColorButton>
      <ColorButton>
        <NavLink to={"/donate"}>Make A Donation</NavLink>
      </ColorButton>
      <ColorButton>
        <NavLink>Our Sponsors</NavLink>
      </ColorButton>
      <ColorButton>
        <NavLink to={"/volunteer"}>Ways To Volunteer</NavLink>
      </ColorButton>
    </div>
  );
};

export default NavMenu;
