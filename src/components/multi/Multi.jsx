import React from "react";
import "./Multi.css";
import { BsSearch } from "react-icons/bs";
import { multi } from "../../apartment";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Multi = () => {
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
      <div className="town-home">
        <div className="header-put">
          <input
            className="input-fire"
            type="text"
            placeholder="Enter city, town or neighborhood"
          />
          <h4>
            <BsSearch />
          </h4>
        </div>
      </div>
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
          {multi.map((multi, index) => {
            return (
              <div className="apartment-slide" key={index}>
                <Link to={multi.link} className="link">
                  <div className="apartment-slide-image">
                    <div className="span-ten">
                      <Link to={multi.link} className="link">
                        <h6>{multi.action}</h6>{" "}
                      </Link>
                    </div>
                    <img src={multi.image} alt="featured" loading="lazy" />
                  </div>{" "}
                </Link>
                <div className="box-text">
                  <h6>{multi.boxText}</h6>
                  <div className="box-def">
                    <h6>
                      {multi.iconOne}
                      <span>{multi.bed}</span>
                    </h6>
                    <h6>
                      {multi.iconTwo}
                      <span>{multi.bed}</span>
                    </h6>
                    <h6>
                      {multi.iconThree}
                      <span>{multi.size}</span>
                    </h6>
                  </div>{" "}
                  <h5>{multi.description}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Multi;
