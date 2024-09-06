import { Header } from "../Header";
import { Footer } from "../Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import { NavMenu } from "../NavMenu";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const fosterImage = "foster-img.jpg";

const FosterPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, []);

  const copyEmail = () => {
    const textToCopy = "brats_alliance@outlook.com";

    alert("Email Address Copied");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true); // Set copied state to true
        setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div className="genGreyContainer">
        <h1 style={{ color: "#ca0300" }}>Foster A Rescue</h1>
        <img src={fosterImage} />
        When you foster, you agree to take a homeless pet into your home and
        give them love, care and attention, either for a set time frame or until
        the fur baby is adopted. You provide a safe place for them to stay or
        sometimes recuperate after surgery or illness until they are healthy and
        ready to move on to their forever home. Some pets might need to learn
        how to live in a home or in a family environment to develop the social
        skills needed before being adopted.
        <h4 style={{ color: "#ca0300" }}>
          By being a fur baby foster you are:
        </h4>
        <ul>
          <li>Helping us to be able to rescue another pet in need.</li>
          <li>
            Giving your foster baby the time they need to heal before being
            ready for adoption.
          </li>
          <li>
            Helping us learn the most about the pet so that they are adopted to
            the best possible home.
          </li>
          <li>
            Socializing and teaching the baby to learn to trust and feel the
            love they deserve.
          </li>
          <li>
            Fostering is one of the most rewarding experiences you can have.
          </li>
        </ul>
        <p>
          If you are interested in opening your home and your heart to foster,
          please download and review the Foster Application Form
          <a
            href="/BRATS-Adoption-Form.pdf"
            download="BRATS-Adoption-Form.pdf"
            style={{ color: "#ca0300" }}
          >
            {" here "}
          </a>
          Once you fill it out send it to
          <NavLink onClick={copyEmail} style={{ color: "#ca0300" }}>
            {" brats_alliance@outlook.com. "}
          </NavLink>{" "}
          in the subject please state: COMPLETED FOSTER APPLICATION.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FosterPage;
