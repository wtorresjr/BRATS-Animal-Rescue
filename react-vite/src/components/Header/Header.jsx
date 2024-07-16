import "./header.css";

const logo = "../src/Assets/Brats-Logo-simple.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <p className="header-title">Bringing Rescued Animals To Safety</p>
    </div>
  );
};

export default Header;
