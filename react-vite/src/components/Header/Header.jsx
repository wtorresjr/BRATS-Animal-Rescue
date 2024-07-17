import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import "./header.css";

const logo = "../src/Assets/Brats-Logo-simple.png";

const Header = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);

  return (
    <div className="header">
      <img src={logo} />
      <p className="header-title">Bringing Rescued Animals To Safety</p>
      <Button
        onClick={() => setOpenMenu(!openMenu)}
        variant="outlined"
        style={{
          color: "#ca0300",
          border: "2px solid #ca0300",
          borderRadius: "10px",
        }}
      >
        {openMenu ? (
          <HighlightOffIcon fontSize={"large"} />
        ) : (
          <MenuRoundedIcon fontSize={"large"} />
        )}
      </Button>
    </div>
  );
};

export default Header;
