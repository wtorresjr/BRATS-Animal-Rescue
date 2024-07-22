import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./navmenu.css";

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
      <ColorButton>Foster A Rescue</ColorButton>
      <ColorButton>Adopt A Rescue</ColorButton>
      <ColorButton>Event Calendar</ColorButton>
      <ColorButton>Make A Donation</ColorButton>
      <ColorButton>Our Sponsors</ColorButton>
      <ColorButton>Ways To Volunteer</ColorButton>
    </div>
  );
};

export default NavMenu;
