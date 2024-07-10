import "./animal-card.css";

const AnimalCard = (rescue) => {
  const resc = rescue.rescue;

  return (
    <div key={resc.id + resc.animal_name} className="animal-card">
      <div>{resc.animal_name}</div>
      <div>Estimated Age: {resc.age}</div>
      <div>Sex: {resc.sex}</div>
      <div>Rescue Date: {resc.resc_date}</div>
      <div>
        {resc.animal_name}'s story: {resc.story}
      </div>
      <div>Good With Kids? {resc.good_w_kids ? "Yes" : "No"}</div>
      <div>Good With Dogs? {resc.good_w_dogs ? "Yes" : "No"}</div>
      <div>Good With Cats? {resc.good_w_cats ? "Yes" : "No"}</div>
      <div>Potty Trained? {resc.potty_trained ? "Yes" : "No"}</div>
      <div>Spayed / Neutered? {resc.fixed ? "Yes" : "No"}</div>
    </div>
  );
};

export default AnimalCard;
