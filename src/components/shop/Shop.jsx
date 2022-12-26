import React from "react";
import "./Shop.css";
import { BsSearch } from "react-icons/bs";
import { shop } from "../../apartment";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Shop = () => {
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
          {shop.map((shop, index) => {
            return (
              <div className="apartment-slide" key={index}>
                <Link to={shop.link} className="link">
                  <div className="apartment-slide-image">
                    <div className="span-ten">
                      <Link to={shop.link} className="link">
                        <h6>{shop.action}</h6>{" "}
                      </Link>
                    </div>
                    <img src={shop.image} alt="featured" loading="lazy" />
                  </div>{" "}
                </Link>
                <div className="box-text">
                  <h6>{shop.boxText}</h6>
                  <div className="box-def">
                    <h6>
                      {shop.iconOne}
                      <span>{shop.bed}</span>
                    </h6>
                    <h6>
                      {shop.iconTwo}
                      <span>{shop.bed}</span>
                    </h6>
                    <h6>
                      {shop.iconThree}
                      <span>{shop.size}</span>
                    </h6>
                  </div>{" "}
                  <h5>{shop.description}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
