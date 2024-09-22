import "../HomeCard/homecard.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { deleteSponsorThunk } from "../../redux/sponsors";

const SponsorCard = ({ cssStyle, sponsor }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);
  const dispatch = useDispatch();

  const deleteSponsor = async () => {
    console.log(sponsor.id);
    dispatch(deleteSponsorThunk(sponsor.id));
  };

  const editSponsor = () => {
    navigate("/admin/sponsors", { state: { editSponsor: sponsor } });
  };

  return (
    <div className={`${cssStyle}-card`}>
      {deleting ? (
        <div
          className="errorsPtag"
          style={{
            display: "flex",
            flexFlow: "column wrap",
            gap: "10px",
            width: "100%",
          }}
        >
          <p>{`Please confirm you would like to delete the ${sponsor.sponsor_name} event?`}</p>
          <Button variant="contained" color="error" onClick={deleteSponsor}>
            DELETE
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setDeleting(false)}
          >
            CANCEL
          </Button>
        </div>
      ) : (
        <>
          <div className={`${cssStyle}-adptText`}>
            <h1 style={{ color: "#ca0300" }}>{sponsor.sponsor_name}</h1>
          </div>
          {sponsor.sponsor_img && (
            <div className={`${cssStyle}-img`}>
              <img src={sponsor.sponsor_img}></img>
            </div>
          )}
          <div>
            <div className="adopt-story-contain">
              <div>
                Website:{" "}
                {
                  <NavLink style={{ color: "#ca0300" }}>
                    {sponsor.sponsor_site}
                  </NavLink>
                }
              </div>
            </div>
            {sessionUser && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Button variant="contained" onClick={() => setDeleting(true)}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={editSponsor}
                >
                  Edit
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export { SponsorCard };
