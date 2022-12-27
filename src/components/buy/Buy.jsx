import React from "react";
import "./Buy.css";
import { buy } from "../../buy";

import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const Buy = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.046861, lng: 37.103682 }}
      >
        <Marker position={{ lat: -1.046861, lng: 37.103682 }} />
        <Marker position={{ lat: -1.070361, lng: 37.098296 }} />{" "}
        <Marker position={{ lat: -1.32249, lng: 36.884941 }} />
      </GoogleMap>
    ))
  );
  return (
    <section id="rent">
      <div className="town-home-one">
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

      <div className="rent-townhomes">
        <div className="maps-google">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            strokeColor={<div style={{ color: "white" }} />}
          />
        </div>
        <div className="google-rent">
          <div className="float-one">
            <h4>Maps</h4>
          </div>
          <div className="correction-box row ">
            {" "}
            {buy.map((buy, index) => {
              return (
                <div
                  className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12"
                  key={index}
                >
                  <div className="card-img">
                    <Link to={buy.link}>
                      <img
                        className="d-block w-100"
                        src={buy.image}
                        alt="House1"
                        loading="lazy"
                      />
                    </Link>
                    <span className="spannito">
                      <Link to={buy.link} className="link">
                        <h4>{buy.form}</h4>
                      </Link>
                    </span>
                  </div>
                  <div className="card-text">
                    <h4>{buy.name}</h4>
                    <h5>{buy.price}</h5>
                    <h6>
                      {buy.bed}
                      {buy.iconOne} {buy.bath} {buy.iconOne}
                      {buy.size}
                    </h6>
                    <small>{buy.small}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
