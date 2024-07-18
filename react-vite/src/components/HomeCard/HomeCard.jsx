import "./homecard.css";

const HomeCard = ({ title, cardText, callToAction, imgSrc, cssStyle }) => {
  return (
    <div className={`${cssStyle}-card`}>
      <div className={`${cssStyle}-img`}>
        <img src={imgSrc}></img>
      </div>
      <div className={`${cssStyle}-text`}>
        <div className={`${cssStyle}-text-title`}>
          <h1>{title}</h1>
          {cardText}
        </div>
        <h4>{callToAction}</h4>
      </div>
    </div>
  );
};

export default HomeCard;
