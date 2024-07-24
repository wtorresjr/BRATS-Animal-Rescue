import "./footer.css";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-contain">
      <div className="link-div">
        <div>
          <NavLink>DONATE</NavLink>|<NavLink to={"/adopt"}>ADOPT A PET</NavLink>|
          <NavLink>FOSTER A PET</NavLink>
        </div>
        <div>
          <NavLink>EVENTS</NavLink>|<NavLink>BECOME A SPONSOR</NavLink>|
          <NavLink>VOLUNTEER</NavLink>
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
