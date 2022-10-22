import React from "react";
import "./Sell.css";
const Sell = () => {
  return (
    <div className="sell-header container-fluid">
      <h3>Why Sell Your House with High-Rise</h3>
      <div className="sell-container">
        <div className="sell-card nopadding col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="sell-card-img">
            <img
              className="d-block w-100"
              src="./assets/sell1.jpeg"
              alt="welcome"
            />
          </div>
          <div className="sell-card-text">
            <h5>Personalised Real-estate Service</h5>
            <p>
              Our agents have the expertise to earn you top dollar and ensure
              that the entire sale process—from valuation to closure-goes
              without a hitch.
            </p>
          </div>
        </div>
        <div className="sell-card nopadding col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="sell-card-img">
            <img
              className="d-block w-100"
              src="./assets/sell2.jpeg"
              alt="welcome"
            />
          </div>
          <div className="sell-card-text">
            <h5>Access to a wide range of customers</h5>
            <p>
              The firm's listings receive 50% more views from potential buyers
              thanks to targeted marketing across our website, mobile
              application and emails.
            </p>
          </div>
        </div>
        <div className="sell-card nopadding col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="sell-card-img">
            <img
              className="d-block w-100"
              src="./assets/sell3.jpeg"
              alt="welcome"
            />
          </div>
          <div className="sell-card-text">
            <h5>Pay 2% fee when you buy or sell</h5>
            <p>
              Our clients sell for more money on average, and when you sell and
              buy with us, you pay a 2% listing fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
