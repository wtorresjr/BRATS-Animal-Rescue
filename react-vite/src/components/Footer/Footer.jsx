import "./footer.css";
import { Button, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const gotoUrl = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61563085001124&mibextid=LQQJ4d",
      "_blank"
    );
  };

  return (
    <Stack className="footer-contain" direction="column" spacing={1}>
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

      {/* <div className="social-div"> */}
      <Stack
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        direction="row"
      >
        <div>Join Us On Social Media:</div>
        <Button variant="primary" onClick={gotoUrl}>
          <FacebookIcon fontSize="large" />
        </Button>
        {/* <XIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <YouTubeIcon fontSize="large" /> */}
      </Stack>
      <span style={{ textAlign: "left" }}>
        © 2024 by B.R.A.T.S. Alliance, Inc.
      </span>
    </Stack>
    // </div>
  );
};

export default Footer;
