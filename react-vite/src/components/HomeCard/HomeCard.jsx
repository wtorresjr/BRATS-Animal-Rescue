import "./adoptcard.css";

const HomeCard = ({ title, cardText, callToAction, imgSrc }) => {
  return (
    <div className="adopt-card">
      <div className="adopt-img">
        <img src={imgSrc}></img>
      </div>
      <div className="adopt-text">
        <div className="adopt-text-title">
          <h1>{title}</h1>
          {cardText}
        </div>
        <h4>{callToAction}</h4>
      </div>
    </div>
  );
};

export default HomeCard;
