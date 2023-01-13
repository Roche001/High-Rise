import React from "react";
import "./Top.css";
import { topper } from "../../nav";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Harmohomes</h1>
        <h5>Real Estate Agency</h5>
      </div>
      <div className="menu-items">
        {topper.map((topper, index) => {
          return (
            <div className="menu-one" key={index}>
              <Link to={topper.navlink}>{topper.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top;
