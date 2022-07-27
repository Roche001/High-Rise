import React from "react";
import "./Footer.css";
import { RiHome6Line } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
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
          <li>Apartments for Rent</li>
          <li>Apartment Low to Hide</li>
          <li>Offices for Purchase</li>
          <li>Offices for Rent</li>
          <li>Townhome to Hide</li>
        </div>
        <div className="makers col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>Real Estate Markers </h4>

          <li>Home</li>
          <li>Property</li>
          <li>Listing</li>
          <li>Contacts</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
