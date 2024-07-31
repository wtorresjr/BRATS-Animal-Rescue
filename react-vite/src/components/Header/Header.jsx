import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import "./header.css";
import { useNavigate } from "react-router-dom";

const logo = "../../public/imgs/Brats-Logo-simple.png";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const { openMenu, setOpenMenu } = useContext(MyContext);

  return (
    <>
      <div className="header">
        <img src={logo} onClick={goHome} />

        <div className="header-title">Bringing Rescued Animals To Safety</div>
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
    </>
  );
};

export default Header;
