import React from "react";
import "./Apartment.css";
import { partment } from "../../apartment";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Apartment = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />

        <Marker position={{ lat: -1.250349, lng: 36.641401 }} />

        <Marker position={{ lat: -1.32249, lng: 36.884941 }} />
      </GoogleMap>
    ))
  );
  return (
    <div className="apartment-head">
      <div className="photo-sec"></div>
      <div className="apartment-home">
        <div className="apartment-map">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="apartment-container">
          {partment.map((partment, index) => {
            return (
              <div className="home-box-container" key={index}>
                <Link to={partment.link} className="link">
                  <div className="box-image">
                    <div className="laydown-one">
                      {" "}
                      <h5>{partment.price}</h5>
                    </div>
                    <div className="span-ten">
                      <Link to={partment.link} className="link">
                        <h6>{partment.action}</h6>{" "}
                      </Link>
                    </div>
                    <img src={partment.image} alt="featured" />
                  </div>{" "}
                </Link>
                <div className="box-text">
                  <h6>{partment.boxText}</h6>
                  <div className="box-def">
                    <h6>
                      {partment.iconOne}
                      <span>{partment.bed}</span>
                    </h6>
                    <h6>
                      {partment.iconTwo}
                      <span>{partment.bed}</span>
                    </h6>
                    <h6>
                      {partment.iconThree}
                      <span>{partment.size}</span>
                    </h6>
                  </div>{" "}
                  <h5>{partment.description}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
