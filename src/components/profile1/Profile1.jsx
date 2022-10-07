import React from "react";
import "./Profile1.css";
import { FiCircle } from "react-icons/fi";
const Profile1 = () => {
  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-image">
          <img
            className="d-block w-100 nopadding"
            src="./assets/agent1.jpeg"
            alt="agent"
          />
        </div>
        <div className="profile-text">
          <h3>Karen Masterson</h3>
          <p>Chief Legal Officer</p>
          <h5>
            Agent License: <span>090-0348-8346</span>
          </h5>
          <h5>
            Tax Number: <span> HGT-92384-3434 </span>
          </h5>
          <h5>
            Service Areas:{" "}
            <span> Chicago, Los Angeles, Miami Beach, New York </span>
          </h5>
          <h5>
            Specialties:{" "}
            <span>
              {" "}
              Property management, Real estate development, Real estate
              appraising, Retail leasing, Apartment brokerage{" "}
            </span>
          </h5>
          <div className="press">
            <div className="press-one">
              <a href="#send mail">Send Mail</a>
            </div>
            <div className="press-one">
              <a href="#send mail">Call</a>
            </div>
          </div>
        </div>
      </div>
      <div className="property">
        {" "}
        <div className="property1">
          {" "}
          <div className="property1-one">
            {" "}
            <h6>
              Property
              <span> Types</span>
            </h6>
            <img src="./assets/prop1.png" alt="prop" />
          </div>
          <div className="property1-two">
            <h5>
              <span>
                <FiCircle />
              </span>
              36% Apartment
            </h5>
            <h5>
              <tt>
                <FiCircle />
              </tt>
              17% Villa
            </h5>
            <h5>
              <var>
                {" "}
                <FiCircle />
              </var>{" "}
              17% Family Home
            </h5>
            <h5>
              <s>
                <FiCircle />
              </s>
              31% Other
            </h5>
          </div>
        </div>
        <div className="property1">
          {" "}
          <div className="property1-one">
            {" "}
            <h6>
              Property
              <span> Status</span>
            </h6>
            <img src="./assets/prop2.png" alt="prop" />
          </div>
          <div className="property1-two">
            <h5>
              <span>
                <FiCircle />
              </span>
              56% For Sale
            </h5>
            <h5>
              <tt>
                <FiCircle />
              </tt>
              44% For Rent
            </h5>
          </div>
        </div>
        <div className="property1">
          {" "}
          <div className="property1-one">
            {" "}
            <h6>
              Property
              <span> Types</span>
            </h6>
            <img src="./assets/prop1.png" alt="prop" />
          </div>
          <div className="property1-two">
            <h5>
              <span>
                <FiCircle />
              </span>
              39% Chicago
            </h5>
            <h5>
              <tt>
                <FiCircle />
              </tt>
              39% Los Angeles
            </h5>
            <h5>
              <var>
                {" "}
                <FiCircle />
              </var>{" "}
              11% New York
            </h5>
            <h5>
              <s>
                <FiCircle />
              </s>
              11% Other
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
