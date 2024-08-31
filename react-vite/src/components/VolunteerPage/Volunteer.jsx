import { Header } from "../Header";
import { Footer } from "../Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import { NavMenu } from "../NavMenu";

const volunteerImg = "volunteer-img.jpg";

const VolunteerPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);

  useEffect(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div className="genGreyContainer">
        <h1 style={{ color: "#ca0300" }}>Ways To Volunteer</h1>
        <img src={volunteerImg} />
        Volunteers are awesome champions of our mission to rescue pets in need.
        Not only do they help save the lives of these precious babies, they help
        educate others in the community about our most lovable companions.
        <h4 style={{ color: "#ca0300" }}>
          You can help our mission to rescue & save lives by volunteering to:
        </h4>
        <ul>
          <li>Transport</li>
          <li>Fundraise</li>
          <li>Home Checks</li>
          <li>Administrative Support</li>
        </ul>
        <h4 style={{ color: "#ca0300" }}>Transport</h4>
        Do you have reliable transportation that is pet friendly and/or pet
        proof? Then you can help transport! Transport volunteers may help pick
        up pets from shelters, other volunteer transporters or fosters. Taking
        babies from to their furever home or taking them to vet appointments.
        <h4>Fundraising, Help Us Help Help Them!</h4>
        As a non-profit, B.R.A.T.S. Alliance is completely driven by compassionate,
        dedicated and fun-loving volunteers. You can volunteer to support our
        cause in many ways, from big jobs to little projects, we always are in
        need of helping hands. The more volunteers we have, the more babies we
        can save!
        <h4 style={{ color: "#ca0300" }}>Home Checks</h4>
        Conduct home visits for potential adoptive families and fosters, and
        help them understand the benefits of becoming a foster or rescue
        owner/parent. Ensure that the living environment will be compatible with
        the potential foster or adoptee. Confirm the fur baby being adopted or
        fostered will be in a safe and loving environment.
        <h4 style={{ color: "#ca0300" }}>Sign up to become a volunteer</h4>
        Anything you can do to help us help them is greatly appreciated.
        <p>
          For more information on any of these opportunities, please contact us
          at brats_alliance@outlook.com. We urge you to get involved today. The
          fur babies need you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default VolunteerPage;
