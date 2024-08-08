const getInfo = (rescueInfo) => {
  alert(`Rescue info for ${rescueInfo}`);
};
const AdoptionCard = ({ cssStyle, rescue }) => {
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
          <text>
            <strong>{`${rescue.animal_name}'s Story`}:</strong> {rescue.story}
          </text>
          <button
            onClick={() => {
              getInfo(rescue.animal_name);
            }}
          >{`Learn More About ${rescue.animal_name}`}</button>
        </div>
      </div>
    </div>
  );
};

export default AdoptionCard;
