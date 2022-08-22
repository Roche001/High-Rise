import React from "react";
import "./House1.css";
import Carousel from "react-bootstrap/Carousel";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineConstruction } from "react-icons/md";
import { MdOutlineSquareFoot } from "react-icons/md";
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
        </div>
      </div>
    </div>
  );
};

export default House1;
