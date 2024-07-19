import "./footer.css";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer-contain">
      <div>
        <a href="">DONATE</a>|<a href="">ADOPT A PET</a>|
        <a href="">FOSTER A PET</a>
      </div>
      <div>
        <a href="">EVENTS</a>|<a href="">BECOME A SPONSOR</a>|
        <a href="">VOLUNTEER</a>
      </div>

      <div className="social-div">
        <div>FOLLOW US:</div>
        <div className="social-icons">
          <FacebookIcon fontSize="large" />
          <XIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>
      <span>© 2024 by B.R.A.T.S. Alliance, Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
