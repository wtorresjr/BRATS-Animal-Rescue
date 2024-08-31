import { Header } from "../Header";
import { Footer } from "../Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import { NavMenu } from "../NavMenu";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DonatePage = () => {
  const { openMenu, setOpenMenu } = useContext(MyContext);
  const adoptDogImg = "adopt-dog-img.jpg";

  useEffect(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <Header />
      {openMenu ? <NavMenu /> : null}
      <div className="genGreyContainer">
        <h1 style={{ color: "#d20c09", textAlign: "center" }}>
          Unleash Your Love!!!
        </h1>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          <h2 style={{ width: "50%", margin: "0 0" }}>
            Help us help them. Every donation no matter how big or small is
            crucial to BRATS Alliance.
          </h2>
          <img src={adoptDogImg} style={{ width: "50%" }} />
          <p>
            Every dollar saves lives! BRATS Alliance is a non-profit rescue
            operated entirely by volunteers and relies solely on donations to
            finance veterinary exams, vaccinations, medications and surgeries,
            as well as funding the daily feeding and care for our rescued pets.
          </p>
          <p>
            Thanks to the support of kindhearted, animal loving people like you,
            we will be able to provide shelter and assistance to the animals in
            need, assist Veterans and educate the community.
          </p>
        </div>

        <p style={{ fontSize: "12px", textAlign: "center" }}>
          Florida Non-profit Registration # CH76111 expiration date: July 31,
          2025
        </p>
        <PayPalScriptProvider options={{ "client-id": "sb" }}>
          <PayPalButtons
            style={{
              shape: "rect",
              layout: "vertical",
              color: "gold",
              label: "donate",
            }}
            onClick={() => {
              window.location.href =
                "https://www.paypal.com/ncp/payment/4EKJQKMWY2RW6";
            }}
            createOrder={() => {
              return null;
            }}
          />
        </PayPalScriptProvider>
        <p style={{ textAlign: "justify" }}>
          A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE
          OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE
          (800-435- 7352) WITHIN THE STATE. REGISTRATION DOES NOT IMPLY
          ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default DonatePage;
