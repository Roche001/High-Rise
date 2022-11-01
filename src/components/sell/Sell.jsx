import React from "react";
import "./Sell.css";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div className="sell-block container-fluid nopadding">
      <div className="section-header">
        <h3>Explore Available Selling Options</h3>
        <p>
          Wherever you are in the selling journey, our hassle-free tools and
          guides will help you make the right move.
        </p>
      </div>
      <div className="section-bg">
        <h3>Enter Your Address to Unlock Your Owner Dashboard</h3>
        <div className="section-listing">
          <div className="section-one">
            <div className="sell-image">
              <img src="./assets/sell-one.jpeg" alt="sell" />
            </div>
            <h5>See Your StreetEasy Valuation</h5>
            <p>
              Get an instant, hassle-free estimate of your home’s value, powered
              by the most expansive real estate database in NYC.
            </p>
          </div>
          <div className="section-one">
            <div className="sell-image">
              <img src="./assets/sell-two.jpeg" alt="sell" />
            </div>
            <h5>Get Matched With a Trusted Agent</h5>
            <p>
              Ready to sell? Just have questions? We can recommend listing
              agents who’ve closed on homes just like yours.
            </p>
          </div>
        </div>
        <div className="dragon-dance">
          <div className="header-put-one">
            <input
              className="input-fire"
              type="text"
              placeholder="445 STREET NAME, NAIROBI, NRB 234"
            />
          </div>
          <div className="header-put-two">
            <input
              className="input-fire"
              type="text"
              placeholder="UNIT NUMBER"
            />
          </div>
          <div className="push-on">
            <h6>Get Started</h6>
          </div>{" "}
        </div>{" "}
        <p>
          Are you a returning home owner?{" "}
          <span>
            <Link to="./Profile1"> Log in</Link>
          </span>{" "}
          to view your Owner Dashboard.
        </p>
      </div>
    </div>
  );
};

export default Sell;
