import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const DonationsCard = ({ mainTitle, tagLine, cssStyle }) => {
  return (
    <>
      <div className={`${cssStyle}-card`}>
        <div>
          <h2>{mainTitle}</h2>
          <div className={`${cssStyle}-tag`}>{tagLine}</div>
        </div>
        <div>
          <div className={`${cssStyle}-img`}>
            <DoubleArrowIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationsCard;
