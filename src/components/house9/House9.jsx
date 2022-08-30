import React from "react";
import "./House9.css";
import Carousel from "react-bootstrap/Carousel";
import { IoIosBed } from "react-icons/io";
import { GiShower } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { AiOutlineApartment } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const House9 = () => {
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
          <img src="./assets/count1.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count2.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count3.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count4.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count5.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count6.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count7.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count8.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count9.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count10.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count11.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count12.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count13.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/count14.jpg" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="overview row">
        <div className="overview-one  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="over-box">
            <h4>
              Condo <span>property Type</span>
            </h4>
          </div>
          <h4>
            <small>
              <IoIosBed />2
            </small>
            <span>Bedrooms</span>
          </h4>
          <h4>
            <small>
              <GiShower />3
            </small>
            <span>Bathrooms</span>
          </h4>
          <h4>
            <small>
              <GiHomeGarage />3
            </small>
            <span>Garages</span>
          </h4>
          <h4>
            <small>
              <AiOutlineApartment />2
            </small>
            <span>Sq ft</span>
          </h4>
          <h4>
            <small>
              <FcCalendar /> 2009
            </small>
            <span>Year Built</span>
          </h4>
        </div>
        <div className="overview-two  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <MapWithAMarker
            className="map"
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, width: "100%" }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default House9;
