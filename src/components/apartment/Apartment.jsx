import React from "react";
import { partment } from "../../apartment";
import { Link } from "react-router-dom";

const Apartment = () => {
  return (
    <div className="sugar-class">
      {partment.map((partment, index) => {
        return (
          <div className="home-box-container" key={index}>
            <Link to={partment.link} className="link">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>{partment.price}</h5>
                </div>
                <div className="span-ten">
                  <Link to={partment.link} className="link">
                    <h6>{partment.action}</h6>{" "}
                  </Link>
                </div>
                <img src={partment.image} alt="featured" />
              </div>{" "}
            </Link>
            <div className="box-text">
              <h6>{partment.boxText}</h6>
              <div className="box-def">
                <h6>
                  {partment.iconOne}
                  <span>{partment.bed}</span>
                </h6>
                <h6>
                  {partment.iconTwo}
                  <span>{partment.bed}</span>
                </h6>
                <h6>
                  {partment.iconThree}
                  <span>{partment.size}</span>
                </h6>
              </div>{" "}
              <h5>{partment.description}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Apartment;
