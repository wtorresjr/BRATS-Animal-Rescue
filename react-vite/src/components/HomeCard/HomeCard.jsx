import DonationsCard from "./DonationsCard";
import "./homecard.css";

const HomeCard = ({ title, cardText, callToAction, imgSrc, cssStyle }) => {
  const [title1, title2] = title.split(" ");

  return (
    <div className={`${cssStyle}-card`}>
      <div className={`${cssStyle}-img`}>
        <img src={imgSrc}></img>
      </div>
      <div className={`${cssStyle}-text`}>
        <div className={`${cssStyle}-text-title`}>
          {title1}
          <div className="regular-weight"> {title2}</div>
        </div>
        {cardText}
        <h4>{callToAction}</h4>
      </div>
    </div>
  );
};

export default HomeCard;
