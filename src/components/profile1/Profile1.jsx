import React from "react";
import "./Profile1.css";
import { IoMdStar } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Profile1 = () => {
  return (
    <div className="profile-container container">
      <div className="agent-profile">
        <div className="agent-name">
          <div className="name-image">
            <img src="./assets/agent1.jpeg" alt="agent" />
          </div>
          <div className="name-text">
            <h2>Amarillo Real Estate Group</h2>
            <h6>Karen Masterson</h6>
            <div className="sats">
              <div className="sats-one">
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
              </div>
              <div className="sat-two">
                <h6>5.0</h6>
                <h5>
                  <BsDot />
                </h5>
                <h6>15 Reviews</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent-about">
          <h3>About Me</h3>
          <h4>
            Specialties: Buyer's agent, Listing agent, Relocation, Foreclosure
          </h4>
          <p>
            Over the past six years, Karen, who has won numerous "Top Agent"
            honors with Amarillo Real Estate Group, has established a solid
            reputation as a devoted, trustworthy, and knowledgeable real estate
            agent. Winston is a skilled communicator and listener who has held
            numerous leadership positions throughout his time as a Department of
            the Army Civilian and active duty military member. He has lived in
            the Augusta region for about 15 years, so his insight and
            understanding of the real estate market are quite outstanding.{" "}
          </p>
        </div>
        <div className="listing-sales">
          <div className="for-sale">
            <h3>For Sale(1)</h3>
            <table className="table-0ne">
              <tr className="joe">
                <th> Address</th>
                <th>Bed</th>
                <th>Bath</th>
                <th>Listing Price</th>
              </tr>
              <tr>
                <td className="anchor">
                  <div className="anchor-img">
                    {" "}
                    <img src="./assets/buffalo1.webp" alt="buffalo-houses" />
                  </div>
                  <div className="ancho-text">
                    <Link to="/House9">
                      <h6>5884 Gudme 5MHV+6Q7 Gudme, Denmark</h6>
                    </Link>
                  </div>
                </td>
                <td>5Bed</td>
                <td> 5Baths</td>
                <td>$8000</td>
              </tr>
            </table>
          </div>
          <div className="for-sold">
            <h4>Sold (15)</h4>
            <table className="table-0ne">
              <tr className="joe">
                <th> Address</th>
                <th>Date Sold</th>
                <th>Price</th>
                <th>Represented</th>
                <th></th>
              </tr>
              <tr>
                <td className="anchor">
                  <div className="anchor-img">
                    {" "}
                    <img src="./assets/buffalo1.webp" alt="buffalo-houses" />
                  </div>
                  <div className="ancho-text">
                    <Link to="/House9">
                      <h6>5884 Gudme 5MHV+6Q7 Gudme, Denmark</h6>
                    </Link>
                  </div>
                </td>
                <td>12/07/2021</td>
                <td> $1500</td>
                <td>Seller</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
