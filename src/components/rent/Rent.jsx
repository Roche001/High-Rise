import React from "react";
import "./Rent.css";

import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { TbArrowBearLeft } from "react-icons/tb";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

const Rent = () => {
  const seeMore = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See More
    </Tooltip>
  );
  return (
    <div>
      <section id="rent" className="container">
        <h3 className="tony">Townhomes </h3>
        <div className="townhome-one row">
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/me1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House1">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
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
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/bed1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House2">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Nairobi</h4>
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
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12  ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/new1.webp"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House3">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Nairobi</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  2
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  1200 sq ft
                </h5>
                <h5>$8,000/Mnth</h5>
              </div>
            </div>
          </div>
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/York1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House4">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Cape Town</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  2
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  1200 sq ft
                </h5>
                <h5>$4,200/Mnth</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="town-two row">
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/view1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House5">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Guadalajara</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  2
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  1200 sq ft
                </h5>
                <h5>$8,100/Mnth</h5>
              </div>
            </div>
          </div>
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/house1.webp"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House6">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Cairo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  2
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  1200 sq ft
                </h5>
                <h5>$2,100/Mnth</h5>
              </div>
            </div>
          </div>
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/room1.webp"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House7">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Amarilo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  2
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  1200 sq ft
                </h5>
                <h5>$3,330/Mnth</h5>
              </div>
            </div>
          </div>
          <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/tig1.webp"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={seeMore}
                >
                  <Link to="/House8">
                    <li className="home-fill">
                      <RiHome6Fill />
                    </li>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kisumu</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  2
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  1200 sq ft
                </h5>
                <h5>$5,310/Mnth</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="Country container">
          <div className="country-head">
            <h3>Country Homes </h3>
          </div>
        </div>
        <div className="country-container row">
          <div className="country-card">
            <div className="country-card-img">
              <img
                className="d-block w-100"
                src="./assets/count1.jpg"
                alt="country homes"
              />
            </div>
            <table></table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rent;
