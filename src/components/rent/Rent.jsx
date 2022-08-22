import React from "react";
import "./Rent.css";
import { FaEye } from "react-icons/fa";
import { ImHeart } from "react-icons/im";
import { RiHome6Fill } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";

const Rent = () => {
  return (
    <div>
      <section id="rent" className="container">
        <h3 className="tony">Townhomes </h3>
        <div className="townhome">
          <div className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/me1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay"></div>
            </div>
            <div className="card-text">
              <h4>Home in Los Angeles</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  5
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rent;
