const AdoptionCard = ({ cssStyle, rescue }) => {
  console.log(rescue);
  const r_date = rescue.rescue_date.split(" ");

  return (
    <div className={`${cssStyle}-card`}>
      <div className={`${cssStyle}-img`}>
        <img src="dog-img1.jpg"></img>
      </div>

      <div className={`${cssStyle}-adptText`}>
        <h1>{rescue.animal_name}</h1>
        <div>{`Rescue Date: ${r_date[2]}-${r_date[1]}-${r_date[3]}`}</div>
        <div>Age: {rescue.age}</div>
        <div>Sex: {rescue.sex}</div>
        <div>Good With Kids? {rescue.good_w_kids ? "Yes" : "No"}</div>
        <div>Good With Cats? {rescue.good_w_cats ? "Yes" : "No"}</div>
        <div>Good With Dogs? {rescue.good_w_dogs ? "Yes" : "No"}</div>
        <div>Spayed/Neutered? {rescue.fixed ? "Yes" : "No"}</div>
        <div>Potty Trained? {rescue.potty_trained ? "Yes" : "No"}</div>
      </div>
        <div>
          {`${rescue.animal_name}'s Story`}: {rescue.story}
        </div>
    </div>
  );
};

export default AdoptionCard;
