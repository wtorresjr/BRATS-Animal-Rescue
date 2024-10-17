import { Header } from "../Header";
import { Footer } from "../Footer";
import { NavMenu } from "../NavMenu";
import { MyContext } from "../../context/MyContext";
import { useContext, useEffect } from "react";

const missionImg = "mission-page-img.jpg";

const MissionPage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div className="genGreyContainer">
        <h1 style={{ textAlign: "center" }}>B.R.A.T.S. Alliance, Inc.</h1>
        <h3 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          “Bringing Rescued Animals to Safety"
        </h3>
        <img src={missionImg} />
        <h3 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          A Florida Non-profit Public Benefit Corporation
        </h3>
        <h5 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          BYLAWS
        </h5>
        <div
          style={{ margin: "10px 0 0 0", borderBottom: "1px solid #d20c09" }}
        ></div>
        <h5 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          ARTICLE I
        </h5>
        <h5 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          NAME
        </h5>
        <div
          style={{ margin: "10px 0 0 0", borderBottom: "1px solid #d20c09" }}
        ></div>

        <h4>1.01 Name</h4>

        <p>
          The name of this corporation shall be B.R.A.T.S. Alliance, Inc. The
          business of the corporation may be conducted as B.R.A.T.S. Alliance,
          Inc.
        </p>
        <div
          style={{ margin: "10px 0 0 0", borderBottom: "1px solid #d20c09" }}
        ></div>
        <h5 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          ARTICLE II
        </h5>
        <h5 style={{ textAlign: "center", margin: "0px", padding: "0px" }}>
          PURPOSES AND POWERS
        </h5>
        <div
          style={{ margin: "10px 0 0 0", borderBottom: "1px solid #d20c09" }}
        ></div>
        <h4>2.01 Purpose</h4>

        <p>
          B.R.A.T.S. Alliance, Inc. is a non-profit corporation and shall be
          operated exclusively for charitable and educational purposes within
          the meaning of Section 501 (c)(3) of the Internal Revenue Code of
          1986, or the corresponding section of any future Federal tax code.
        </p>

        <p>
          The B.R.A.T.S. Alliance’s mission is to protect and advocate for all
          animals in need, search for lost and missing pets, match compatible
          rescue pets with individuals desiring companion animals, and provide a
          better life for discarded and abandoned pets through care, compassion,
          and a safe living environment. This mission will be accomplished by
          implementing the following:
        </p>

        <p>
          (a) Through our free online website, we will educate and inform the
          public about animal cruelty and abuse, animal hoarding, irresponsible
          breeding, and the importance of reporting such acts to bring an end
          the abuse and mistreatment of animals. We will use our website along
          with social media channels to provide information and resources to
          promote the importance of spaying/neutering and reporting abuse.
        </p>

        <p>
          (b) Best Pet & Vets Program. With this program we will strive to match
          local Veterans who are desiring the unconditional love and
          companionship of a pet with the best, most compatible rescue animal
          for their lifestyle, living environment and physical capabilities. It
          has been proven that pet ownership can improve physical and emotional
          health, reduce anxiety, and boost social interaction.
        </p>

        <p>
          This program includes a variety of “Gotcha Day” equipment and supplies
          to assist the Veteran and their new family member with the transition.
          The equipment and supples are tailored for each Veteran and their pet
          based on their personal needs. Items such as crates, kennels, beds,
          toys, ramps, stairs, cat trees, scratching posts, litter boxes, and
          litter will be provided to help reduce the initial cost of bringing a
          new pet into the home. Rescue pets adopted through are program are for
          companionship and emotional support only. They are not service
          animals.
        </p>

        <p>
          (c) We will endeavor to maximize the percentage of the operating
          budget, which will directly benefit rescued animals, including
          assisting with necessary veterinary care and the spaying and neutering
          of the rescued animals. Fundraising to support these efforts will be
          achieved through solicitation and acceptance of contributions and
          donations along with other methods or events as the Board of Directors
          approves.
        </p>

        <p>
          (d) To expand out impact on the community, we will build and maintain
          a network of other educational maximize and charitable animal rescue
          groups to collaborate with on current future efforts. The network of
          rescue groups shall be non-profit organizations which fall under the
          501(c) (3) section of the internal revenue code and are operated
          exclusively for educational and charitable purposes.
        </p>

        <h2>Core Values</h2>
        <h3>Compassion</h3>
        <p>
          We Treat animals, volunteers, and the community with compassion,
          kindness, respect and patience.
        </p>

        <h3>Integrity</h3>
        <p>
          We will operate in an honest, ethical and transparent manner with our
          operations, actions, words and behaviors.
        </p>
        <h3>Service</h3>
        <p>
          We are responsible and accountable to the community and pets we serve
          and to the donors and sponsors who enable our mission.
        </p>
        <h3>Community Cooperation</h3>
        <p>
          We develop and cultivate sustainable and positive community
          relationships by working together and supporting each other to create
          a positive impact, save animals and improve the community we serve.
        </p>

        <div
          style={{ margin: "10px 0 0 0", borderBottom: "1px solid #d20c09" }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default MissionPage;
