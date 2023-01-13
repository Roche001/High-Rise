import React from "react";
import "./Top.css";
import { topper } from "../../nav";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src="./assets/logo.png" alt="logo" />{" "}
        </Link>
      </div>

      <div className="menu-items">
        {topper.map((topper, index) => {
          return (
            <div key={index}>
              <Link to={topper.navlink} className="menu-one">
                {topper.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top;
