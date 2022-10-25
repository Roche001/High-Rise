import React from "react";
import "./Buy.css";
import { RiHome6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
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
          <div className="rent-container row ">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/me1.jpg"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House1">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House1" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>9631 North Bridle </h4>
                  <h5>$1400</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/bed1.jpg"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House2">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House2" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>Leverton Cove Road, MA 01069</h4>
                  <h5>$2600</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
          </div>
          <div className="rent-container row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/new1.webp"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House3">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House3" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>North Drive East Bridgewater, MA 05897</h4>
                  <h5>$1250</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/York1.jpg"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House4">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House4" className="link">
                    <h4> Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>North Drive East Bridgewater, MA 05897</h4>
                  <h5>$1250</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
          </div>

          <div className="rent-container row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/view1.jpg"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House5">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House5" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>Leverton Cove Road, MA 01337</h4>
                  <h5>$1550</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/house1.webp"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House6">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House6" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>Leverton Cove Road, MA 01337</h4>
                  <h5>$1550</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
          </div>
          <div className="rent-container row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/room1.webp"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House7">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House7" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>Leverton Cove Road, MA 01337</h4>
                  <h5>$1550</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <img
                  className="d-block w-100"
                  src="./assets/tig1.webp"
                  alt="House1"
                />

                <div className="overlay">
                  <Link to="/House8">
                    <h4>
                      <RiHome6Line />
                    </h4>
                  </Link>
                </div>
                <span className="spannito-one">
                  <Link to="/House8" className="link">
                    <h4>Buy</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <div className="card-head">
                  <h4>North Bridle East Bridgewater, MA 02333</h4>
                  <h5>$2400</h5>
                </div>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
              </div>
            </div>
          </div>

          <div className="ranches"></div>
          <div className="ranches-container">
            <div className="ranch-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House9">
                    <img
                      className="d-block w-100"
                      src="./assets/buffalo1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House9" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Gudme, Denmark</h4>
                  <h5>$8000</h5>
                  <h6>
                    5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House10">
                    <img
                      className="d-block w-100"
                      src="./assets/castle1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House10" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Lexington, United States</h4>
                  <h5>$25,000</h5>
                  <h6>
                    9Bedrooms <BsDot /> 9Bathrooms <BsDot /> 1558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>{" "}
            </div>
            <div className="ranch-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House11">
                    <img
                      className="d-block w-100"
                      src="./assets/horse1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House11" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Merna,United States</h4>
                  <h5>$32,000</h5>
                  <h6>
                    8Bedrooms <BsDot /> 8Bathrooms <BsDot /> 4558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House12">
                    <img
                      className="d-block w-100"
                      src="./assets/malibu1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House12" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Bodhei,MBS,40511 Kenya</h4>
                  <h5>$2000</h5>
                  <h6>
                    5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>
            </div>

            <div className="ranch-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
                <div className="card-img">
                  <Link to="/House13">
                    <img
                      className="d-block w-100"
                      src="./assets/ocean1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House13" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Kisumu,ksm, Kenya</h4>
                  <h5>$32,000</h5>
                  <h6>
                    5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
                <div className="card-img">
                  <Link to="/House14">
                    <img
                      className="d-block w-100"
                      src="./assets/rancho1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House14" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Beaufort,BW,4201 South Africa</h4>
                  <h5>$29,000</h5>
                  <h6>
                    5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>{" "}
            </div>
            <div className="ranch-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House15">
                    <img
                      className="d-block w-100"
                      src="./assets/roma1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House15" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Yembe,YM,1100 Angola</h4>
                  <h5>$18,000</h5>
                  <h6>
                    5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House16">
                    <img
                      className="d-block w-100"
                      src="./assets/whity1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House16" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>Al Akrad,KY,5110 United Egypt</h4>
                  <h5>$27,000</h5>
                  <h6>
                    9Bedrooms <BsDot /> 9Bathrooms <BsDot /> 4,558 SQ FT{" "}
                  </h6>
                  <small>
                    Marketed By Vargas Camino's International Realty
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="offices">
            <div className="offices-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House17">
                    <img
                      className="d-block w-100"
                      src="./assets/officea1.jpg"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House17" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>10013, New York City</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House18">
                    <img
                      className="d-block w-100"
                      src="./assets/officeb1.jpg"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House18" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>40900, Bogota</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>{" "}
            </div>
            <div className="offices-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House19">
                    <img
                      className="d-block w-100"
                      src="./assets/officec1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House19" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>8900, Guadalajara</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House20">
                    <img
                      className="d-block w-100"
                      src="./assets/officed1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House20" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>9008, Houston</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>
            </div>

            <div className="offices-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House21">
                    <img
                      className="d-block w-100"
                      src="./assets/officee1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House21" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>4009, Moscow</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="card-img">
                  <Link to="/House22">
                    <img
                      className="d-block w-100"
                      src="./assets/officef1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House22" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>4059, Lisbon</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>{" "}
            </div>
            <div className="offices-container row">
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
                <div className="card-img">
                  <Link to="/House23">
                    <img
                      className="d-block w-100"
                      src="./assets/officeg1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House23" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>30044, Nairobi</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>
              <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
                <div className="card-img">
                  <Link to="/House24">
                    <img
                      className="d-block w-100"
                      src="./assets/officeh1.webp"
                      alt="House1"
                    />
                  </Link>
                  <span className="spannito-one">
                    <Link to="/House24" className="link">
                      <h4>Buy</h4>
                    </Link>
                  </span>
                </div>
                <div className="card-text">
                  <h4>10013, Madrid</h4>
                  <h5>$7,000</h5>
                  <h6>
                    Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast
                    Move In <BsDot />
                    Fixed Cost
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
