import React from "react";
import "./Footer.css";
import { RiHome6Line } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="rise">
        <div className="rise-logo">
          <RiHome6Line />
        </div>
        <div className="rise-text">
          <h3>High-Rise </h3>
          <p>REAL ESTATE COMPANY</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
