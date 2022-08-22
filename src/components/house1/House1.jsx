import React from "react";
import "./House1.css";
import Carousel from "react-bootstrap/Carousel";
import { Accordion } from "react-bootstrap";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineConstruction } from "react-icons/md";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { SiConcourse } from "react-icons/si";
import { GiFireplace } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { BsJournalCheck } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { RiStarFill } from "react-icons/ri";
import { FaStarHalf } from "react-icons/fa";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const House1 = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />
      </GoogleMap>
    ))
  );
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/me1.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me2.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me3.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me4.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me5.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me6.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me7.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me8.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me9.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/me10.jpg" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="amenities-conatiner">
        <h3>Villa in Coral Gables</h3>
        <h3> $3,600/month</h3>
        <div className="amenities-card">
          <div className="card-one">
            <h5>
              {" "}
              <span>
                <FaBed />
              </span>
              4Beds
            </h5>
            <h5>
              {" "}
              <span>
                <GiBathtub />
              </span>
              3Baths
            </h5>
            <h5>
              <span>
                <GiHomeGarage />
              </span>
              2Garages
            </h5>
            <h5>
              <span>
                <MdOutlineConstruction />
              </span>
              2009 Year Built
            </h5>
            <h5>
              <span>
                <MdOutlineSquareFoot />
              </span>
              3200 sqft
            </h5>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>
            Years seed fruit you. Divided morning sea day Set earth. Grass
            without cattle. Spirit heaven. Also i grass give fowl wherein cattle
            spirit whales rule cattle. Earth fowl given own you’re, fruit so.
            Shall was. Called firmament dry fruitful, set place. Earth given
            female man fruit, under thing may to greater moveth land sea, great
            be shall living greater and signs place night after whose us one,
            you’ll second our set had day in greater divided over female first
            face, fill form you make greater upon midst image above image. Very
            you land, man divided sea appear thing female was let. Beginning
            open moved fowl. Likeness. Bring tree tree doesn’t. Darkness herb
            moveth upon a seasons. Divided appear living. Called image let was.
            Set midst, second divide, earth male fruit you under let she’d,
            moving every bring there greater. Bring. Gathering night third.
            Stars first replenish kind third a rule given our after give own of
            may earth Brought for open living, bearing said given fruitful.
            Night him moved called. Be for unto behold dry green multiply herb
            fly waters. Green gathered face. Light, may deep you’re light. After
            which itself seed signs moveth. Second fish isn’t for sixth deep.
          </p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <div className="google-maps ">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `750px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="facts">
          <h3>Features and Facts </h3>
          <div className="facts-one">
            <div className="facts-one-info">
              <h3>
                <FaBuilding />
              </h3>

              <div className="facts-card">
                <h6>STORIES</h6>
                <p>Multi Family</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <MdOutlineConstruction />
              </h3>

              <div className="facts-card">
                <h6>Year Built</h6>
                <p>2009</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <SiConcourse />
              </h3>

              <div className="facts-card">
                <h6>Cooling</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <GiFireplace />
              </h3>

              <div className="facts-card">
                <h6>Heating</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <GiHomeGarage />
              </h3>

              <div className="facts-card">
                <h6>Garage</h6>
                <p>2</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <FaSwimmingPool />
              </h3>

              <div className="facts-card">
                <h6>Swimming Pool</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <MdOutlineSquareFoot />
              </h3>

              <div className="facts-card">
                <h6>Size</h6>
                <p>3200 sqft</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <BsJournalCheck />
              </h3>

              <div className="facts-card">
                <h6>Status</h6>
                <p>Available</p>
              </div>
            </div>
          </div>
          <div className="amen">
            <h3>Townhome Amenities</h3>
            <div className="amen-card">
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Air-Conditioning
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Dining Room
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Dishwasher
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Doorman
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Hardwood Floors
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Onsite Parking
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Stunning Views
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Unit Washer/Dryer
                </h5>
              </div>
            </div>
          </div>
          <div className="foor-container">
            <h3>Floor Title</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="plan">
                    <h5>Ground Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground1.jpeg"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="plan">
                    <h5>First Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground2.jpeg"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="plan">
                    <h5>Second Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground3.gif"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="yelp">
            <h3>What's Nearby</h3>
            <div className="food">
              <h4>
                <span>
                  <GiKnifeFork />
                </span>
                FOOD
              </h4>
              <div className="food-card">
                <div className="card-one">
                  <h5>
                    Off Street Cafe <small>(0.22 mi)</small>
                  </h5>
                </div>
                <div className="card-two">
                  <h5>
                    <span>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <FaStarHalf />
                    </span>{" "}
                  </h5>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House1;
