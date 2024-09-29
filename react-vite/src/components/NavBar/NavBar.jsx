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
          Administrative Functions
          <div className="nav-bar-contain">
            <Button variant="contained">
              <NavLink to="/">Home</NavLink>
            </Button>
            <Button variant="contained" color="success">
              <NavLink to="/admin">Add New Rescue</NavLink>
            </Button>
            <Button variant="contained" color="secondary">
              <NavLink to="/adopt">Edit / Delete A Rescue</NavLink>
            </Button>
            <Button variant="contained" color="success">
              <NavLink to="/admin/sponsors">Add New Sponsor</NavLink>
            </Button>
            <Button variant="contained" color="secondary">
              <NavLink to="/sponsors">Edit / Delete A Sponsor</NavLink>
            </Button>
            <Button variant="contained" color="success">
              <NavLink to="/admin/events">Add New Event</NavLink>
            </Button>
            <Button variant="contained" color="secondary">
              <NavLink to="/events">Edit / Delete A Event</NavLink>
            </Button>
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
