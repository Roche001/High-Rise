import React from "react";
import "./Footer.css";
import { RiHome6Line } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="rise row">
        <div className="logo  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="rise-logo">
            <RiHome6Line />
          </div>
          <div className="rise-text">
            <h3>High-Rise </h3>
            <p>REAL ESTATE COMPANY</p>
          </div>
        </div>
        <div className="icons  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="icon-a">
            <a
              className="icon icon-facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsFacebook />
            </a>
          </div>
          <div className="icon-a">
            <a
              className="icon icon-instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
          <div className="icon-a">
            <a
              className="icon icon-twitter"
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <BsTwitter />
              </span>
            </a>
          </div>
          <div className="icon-a">
            <a
              className="icon icon-linkedin"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="second-section row">
        <div className="about col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>About</h4>
          <p>
            Founded in 1942, High-Rise is a true third-party property management
            firm with a reputation for excellence in multi-family housing,
            campus housing, and affordable housing, nationwide.
          </p>
        </div>
        <div className="contact col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>Contact Information</h4>
          Call-center:1(245) 978-765
          <li>Fax:1(980) 657-891</li>
          <li>Email:info@highriserealestate.com</li>
          <li>1930 E Garvey Avenue Street</li>
          <li>Westlands, RDA 202020, KYA.</li>
          <li>Monday-Friday:9:00am_9.00pm</li>
        </div>
        <div className="information col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>Information</h4>
          <Link to="/Rent" className="link">
            <li>Apartments for Rent</li>
          </Link>
          <Link to="/Rent" className="link">
            <li>Apartment Low to Hide</li>
          </Link>
          <Link to="/Offices" className="link">
            <li>Offices for Purchase</li>
          </Link>
          <Link to="/Offices" className="link">
            <li>Offices for Rent</li>
          </Link>
          <Link to="/Rent" className="link">
            <li>Townhome to Hide</li>
          </Link>
        </div>
        <div className="makers col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>Real Estate Markers </h4>

          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/Rent" className="link">
            <li>Rent</li>
          </Link>
          <Link to="/Buy" className="link">
            <li>Buy</li>
          </Link>
          <Link to="/Offices" className="link">
            <li>Offices</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
