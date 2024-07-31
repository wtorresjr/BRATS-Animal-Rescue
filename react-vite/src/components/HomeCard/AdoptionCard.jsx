const AdoptionCard = ({ cssStyle }) => {
  return (
    <div className={`${cssStyle}-card`}>
      <div className={`${cssStyle}-img`}>
        <img src="dog-img1.jpg"></img>Test
      </div>
    </div>
  );
};

export default AdoptionCard;
