const SmallCard = ({ title, cssStyle, cardText, callToAction, imgSrc }) => {
  return (
    <>
      <div className={`${cssStyle}-card`}>
        <div className={`${cssStyle}-img`}>
          <img src={imgSrc}></img>
        </div>
        <div className={`${cssStyle}-text`}>
          <h1 className={`${cssStyle}-text-title`}>
            {title}
          </h1>
          {cardText}
          <h4>{callToAction}</h4>
        </div>
      </div>
    </>
  );
};
export default SmallCard;
