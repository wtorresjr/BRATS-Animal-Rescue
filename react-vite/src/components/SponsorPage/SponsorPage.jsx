import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { SponsorCard } from "./SponsorCard";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { getAllEventsThunks } from "../../redux/events";
import NavMenu from "../NavMenu/NavMenu";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import "../HomeCard/homecard.css";

const SponsorPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  const events = useSelector((state) => state?.events);
  const dispatch = useDispatch();
  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getAllEventsThunks());
  }, [events.new_event]);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div className="sponsor-page">
        <h1 style={{ color: "#00275e", textAlign: "center" }}>
          Become A Sponsor
        </h1>
        <div style={{ margin: "10px 0" }}>
          <Accordion expanded={openAcc1}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              onClick={() => setOpenAcc1(!openAcc1)}
            >
              <h3>Partner with BRATS Alliance and Help Us Help Them!</h3>
              <div
                style={{
                  margin: "10px 0 0 0",
                  borderBottom: "1px solid #d20c09",
                }}
              ></div>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                We would be honored to have you or your business be associated
                with BRATS Alliance as a partner, and we hope that you feel the
                same. Businesses and individuals who share our beliefs and core
                values can give back to the community through sponsoring our
                nonprofit.
              </p>
              <p>
                Business and Individual sponsorships are critical to our
                mission. We absolutely depend on business and individual
                philanthropic support to continue our mission to Bring Rescued
                Animals To Safety.
              </p>
              <p>
                BRATS’ partners provide sponsorship funding to support our pet
                saving initiatives and rescue programs, pet projects, and
                fundraising events.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={openAcc2}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              onClick={() => setOpenAcc2(!openAcc2)}
            >
              <h3>Benefits to Sponsorships</h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  Getting your business name and/or logo out to a passionate and
                  compassionate audience
                </li>
                <li>
                  Demonstrating your shared values with employees, customers and
                  the community
                </li>
                <li>
                  Heart-felt satisfaction of helping rescued animals find
                  safety, love and their fur-ever home
                </li>
              </ul>
              If you would like to explore ways you or your business could enter
              into a charitable partnership with BRATS Alliance, please contact
              us at brats_alliance@outlook.com
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={openAcc3}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ backgroundColor: "white !important" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              onClick={() => setOpenAcc3(!openAcc3)}
            >
              <h3>Sponsorship Packages</h3>
            </AccordionSummary>
            <AccordionDetails>
              <h3>Monthly or One Time Sponsorships:</h3>
              <p>
                Choose from 3 sponsorship levels, and receive exclusive deals
                based on your level.
              </p>

              <Accordion sx={{ backgroundColor: "#00275e", color: "white" }}>
                <AccordionSummary
                  expandIcon={
                    <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h4>Top Dog Level</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <i>
                    $500 per month for one year (or $6,000 one-time donation)
                    provides:
                  </i>
                  <ul>
                    <li>
                      Business logo/weblink on our website sponsor page for one
                      year
                    </li>
                    <li>
                      Business name and/or logo displayed on BRATS fundraising
                      t-shirts for one year
                    </li>
                    <li>
                      Business name and/or logo displayed on the BRATS event
                      banner for one year
                    </li>
                    <li>
                      Business name and/or logo prominently displayed in the
                      BRATS event booth for one year
                    </li>
                    <li>
                      A shout-out to your business on our social media page(s)
                      twice a month for a year
                    </li>
                    <li>
                      10 free swag bags with available BRATS merchandise
                      (t-shirts, decals, etc)
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ backgroundColor: "#00275e", color: "white" }}>
                <AccordionSummary
                  expandIcon={
                    <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h4>Wagging Tails Level</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <i>
                    $250 per month for one year (or $3,000 one-time donation)
                  </i>
                  <ul>
                    <li>
                      Business logo/weblink on our website sponsor page for one
                      year
                    </li>
                    <li>
                      A shout-out to your business on our social media page(s)
                      twice a month for a year
                    </li>
                    <li>
                      Business name and/or logo displayed on BRATS fundraising
                      t-shirts for 6 months
                    </li>
                    <li>
                      Business name and/or logo displayed on the BRATS event
                      booth sponsorship wall for 6 months
                    </li>
                    <li>
                      5 free swag bags with available BRATS merchandise
                      (t-shirts, decals, etc)
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ backgroundColor: "#00275e", color: "white" }}>
                <AccordionSummary
                  expandIcon={
                    <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h4>Pawsative Difference Level</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <i>
                    $125 per month for one year (or $1,500 one-time donation)
                  </i>
                  <ul>
                    <li>
                      Business logo/weblink on our website sponsor page for one
                      year
                    </li>
                    <li>
                      A shout-out to your business on our social media page(s)
                      twice a month for a year
                    </li>
                    <li>
                      Business name and/or logo displayed on BRATS fundraising
                      t-shirts for 3 months
                    </li>
                    <li>
                      Business name and/or logo on the BRATS event booth
                      sponsorship wall for 3 months
                    </li>
                    <li>
                      2 free swag bags with available BRATS merchandise
                      (t-shirts, decals, etc)
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ backgroundColor: "#00275e", color: "white" }}>
                <AccordionSummary
                  expandIcon={
                    <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h4>One-Time Business Sponsorships</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>$1000 Donation</h4>
                  <ul>
                    <li>
                      Business logo/weblink on our website sponsor page for one
                      year
                    </li>

                    <li>
                      Business name and/or logo displayed on the BRATS event
                      booth sponsorship wall for 3 events
                    </li>

                    <li>
                      A shout-out on social media twice before each event.
                    </li>

                    <li>
                      3 swag bags with available BRATS merchandise (t-shirts,
                      decals, etc)
                    </li>
                  </ul>
                  <h4>$500 Donation</h4>
                  <ul>
                    <li>
                      Business name and/or logo displayed on the BRATS event
                      booth sponsorship wall for 2 events
                    </li>
                    <li>
                      A shout-out on social media twice before each event.
                    </li>

                    <li>
                      2 swag bags with available BRATS merchandise (t-shirts,
                      decals, etc)
                    </li>
                  </ul>
                  <h4>$250 Donation</h4>
                  <ul>
                    <li>
                      Business name and/or logo displayed on the BRATS event
                      booth sponsorship wall for 1 event
                    </li>
                    <li>A shout-out on social media twice before the event.</li>

                    <li>
                      1 swag bag with available BRATS merchandise (t-shirts,
                      decals, etc)
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <h1 style={{ color: "#00275e", textAlign: "center" }}>Our Sponsors</h1>
      {events?.events?.length > 0 ? (
        events.events.map((event) => (
          <SponsorCard
            key={event.id}
            event={event}
            cssStyle={"genGreyContainer"}
          />
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <p style={{ width: "100%" }}>No sponsors yet be the first!</p>
        </div>
      )}
      <Footer />
    </>
  );
};

export { SponsorPage };
