import "./footer.css";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const alertSoon = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="footer-contain">
      <div className="link-div">
        <div>
          <NavLink to={"/donate"}>DONATE</NavLink>|
          <NavLink to={"/adopt"}>ADOPT A PET</NavLink>|
          <NavLink to={"/foster"}>FOSTER A RESCUE</NavLink>
        </div>
        <div>
          <NavLink to={"/events"}>EVENTS</NavLink>|
          <NavLink to={"/sponsors"}>BECOME A SPONSOR</NavLink>|
          <NavLink to={"/volunteer"}>VOLUNTEER</NavLink>
        </div>
      </div>

      <div className="social-div">
        <div>FOLLOW US:</div>
        <div className="social-icons">
          <FacebookIcon fontSize="large" />
          <XIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>
        <span style={{ textAlign: "right" }}>
          © 2024 by B.R.A.T.S. Alliance, Inc.
        </span>
      </div>
    </div>
  );
};

export default Footer;
