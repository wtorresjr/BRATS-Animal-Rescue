import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { thunkLogout } from "../../redux/session";
import { Button } from "@mui/material";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const logOutNow = (e) => {
    dispatch(thunkLogout());
  };

  return (
    <>
      {sessionUser && (
        <>
          <div className="nav-bar-contain">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin">Add New Rescue</NavLink>
            <NavLink to="/admin">Edit Rescue Info</NavLink>
            <Button onClick={logOutNow} color="error" variant="contained">
              Log Out
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
