import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const getInfo = (rescueInfo) => {
  alert(`Rescue info for ${rescueInfo}`);
};
const AdoptionCard = ({ cssStyle, rescue }) => {
  const dispatch = useDispatch();

  const deleteRescue = async () => {
    alert(rescue.id);
  };

  const sessionUser = useSelector((state) => state.session.user);
  const r_date = rescue.rescue_date.split(" ");

  return (
    <div className={`${cssStyle}-card`}>
      <div className={`${cssStyle}-img`}>
        <img src={rescue.thumbnail_img}></img>
      </div>

      <div className={`${cssStyle}-adptText`}>
        <h1>{rescue.animal_name}</h1>
        <div>{`Rescue Date: ${r_date[2]}-${r_date[1]}-${r_date[3]}`}</div>
        <div>Age: {rescue.age} Years Old</div>
        <div>Sex: {rescue.sex}</div>
        <div>Good With Kids? {rescue.good_w_kids ? "Yes" : "No"}</div>
        <div>Good With Cats? {rescue.good_w_cats ? "Yes" : "No"}</div>
        <div>Good With Dogs? {rescue.good_w_dogs ? "Yes" : "No"}</div>
        <div>Spayed/Neutered? {rescue.fixed ? "Yes" : "No"}</div>
        <div>Potty Trained? {rescue.potty_trained ? "Yes" : "No"}</div>
      </div>
      <div>
        <div className="adopt-story-contain">
          <div>
            <strong>{`${rescue.animal_name}'s Story`}:</strong> {rescue.story}
          </div>

          {/* {rescue.can_adopt ? "CAN ADOPT" : "ADOPTED!"} */}
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "column wrap",
            flexGrow: "1",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {rescue.can_adopt ? (
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                getInfo(rescue.animal_name);
              }}
            >{`Learn More About ${rescue.animal_name}`}</Button>
          ) : (
            <Button variant="contained" color="success">
              {"ADOPTED!"}
            </Button>
          )}
        </div>
        {sessionUser && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={deleteRescue}>
              Delete
            </Button>
            <Button variant="contained" color="secondary">
              Edit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdoptionCard;
