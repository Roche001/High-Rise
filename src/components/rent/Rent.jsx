import React from "react";
import "./Rent.css";

import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { BiBed } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Rent = () => {
  const seeMore = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See More
    </Tooltip>
  );
  return (
    <section id="rent" className="container">
      <h3 className="tony">Townhomes </h3>
      <div className="townhome-one row">
        {/* <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12  ">
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
        </div> */}
        {/* testing card */}
        <div className="row">
          <Card
            style={{
              width: "18rem",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <Card.Img
              className="img"
              variant="top"
              src="./assets/new1.webp"
              alt="Featured-House"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, id quas. Nihil qui ab recusandae.
              </Card.Text>
              <Button variant="primary">See More</Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <Card.Img
              className="img"
              variant="top"
              src="./assets/new1.webp"
              alt="Featured-House"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, id quas. Nihil qui ab recusandae.
              </Card.Text>
              <Button variant="primary">See More</Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <Card.Img
              className="img"
              variant="top"
              src="./assets/new1.webp"
              alt="Featured-House"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, id quas. Nihil qui ab recusandae.
              </Card.Text>
              <Button variant="primary">See More</Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <Card.Img
              className="img"
              variant="top"
              src="./assets/new1.webp"
              alt="Featured-House"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, id quas. Nihil qui ab recusandae.
              </Card.Text>
              <Button variant="primary">See More</Button>
            </Card.Body>
          </Card>
        </div>
        {/* <div className="featured-listing-card col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
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
        </div> */}
      </div>
      <div className="country-homes">
        <h3>Country Homes </h3>
      </div>
      {/* <div className="countryside-container row">
        <div className="country-container-card">
          <div className="country-container-img">
            <Link to="/House9">
              <img
                className="d-block w-100"
                src="./assets/count1.jpg"
                alt="Featured-House"
              />
            </Link>
          </div>
          <div className="country-container-text">
            <h4>Big country house </h4>
            <small>Nassau St, New York, NY,USA.</small>
            <div className="icon-one">
              <h6>
                <BiBed />3
              </h6>
              <h6>
                {" "}
                <FaBath />2
              </h6>
              <h6>
                <MdOutlineSquareFoot /> 2300 Sq Ft
              </h6>
            </div>
            <div className="icon-two">
              <h6>
                <CgProfile /> Sam Wundanyi
              </h6>
              <h6>
                <GrAttachment />
                3yrs ago
              </h6>
            </div>
            <div className="btn-country">
              <Link to="/House9">
                <a href="">View More</a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Rent;
