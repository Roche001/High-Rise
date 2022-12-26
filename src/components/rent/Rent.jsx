import React from "react";
import "./Rent.css";
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

const Rent = () => {
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
    <section id="rent" className="rent-dib-bg container-fluid nopadding">
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

      <div className="rent-townhomes">
        <div className="maps-google">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="google-rent">
          <div className="float">
            <h4>Maps</h4>
          </div>
          <div className="correction-box row "></div>

          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House9">
                  <img
                    className="d-block w-100"
                    src="./assets/buffalo1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House9" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Gudme, Denmark</h4>
                <h5>$8000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
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
                <span className="spannito">
                  <Link to="/House10" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Lexington, United States</h4>
                <h5>$25,000</h5>
                <h6>
                  9Bedrooms <BsDot /> 9Bathrooms <BsDot /> 1558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>{" "}
          </div>
          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <Link to="/House11">
                  <img
                    className="d-block w-100"
                    src="./assets/horse1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House11" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Merna,United States</h4>
                <h5>$32,000</h5>
                <h6>
                  8Bedrooms <BsDot /> 8Bathrooms <BsDot /> 4558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
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
                <span className="spannito">
                  <Link to="/House12" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Bodhei,MBS,40511 Kenya</h4>
                <h5>$2000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
          </div>

          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <Link to="/House13">
                  <img
                    className="d-block w-100"
                    src="./assets/ocean1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House13" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Kisumu,ksm, Kenya</h4>
                <h5>$32,000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House14">
                  <img
                    className="d-block w-100"
                    src="./assets/rancho1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House14" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Beaufort,BW,4201 South Africa</h4>
                <h5>$29,000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>{" "}
          </div>
          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House15">
                  <img
                    className="d-block w-100"
                    src="./assets/roma1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House15" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Yembe,YM,1100 Angola</h4>
                <h5>$18,000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
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
                <span className="spannito">
                  <Link to="/House16" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>Al Akrad,KY,5110 United Egypt</h4>
                <h5>$27,000</h5>
                <h6>
                  9Bedrooms <BsDot /> 9Bathrooms <BsDot /> 4,558 SQ FT{" "}
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
          </div>

          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House17">
                  <img
                    className="d-block w-100"
                    src="./assets/officea1.jpg"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House17" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>10013, New York City</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
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
                <span className="spannito">
                  <Link to="/House18" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>40900, Bogota</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
                  Fixed Cost
                </h6>
              </div>
            </div>{" "}
          </div>
          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <Link to="/House19">
                  <img
                    className="d-block w-100"
                    src="./assets/officec1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House19" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>8900, Guadalajara</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
                  Fixed Cost
                </h6>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <Link to="/House20">
                  <img
                    className="d-block w-100"
                    src="./assets/officed1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House20" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>9008, Houston</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
                  Fixed Cost
                </h6>
              </div>
            </div>
          </div>

          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House21">
                  <img
                    className="d-block w-100"
                    src="./assets/officee1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House21" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>4009, Moscow</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
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
                <span className="spannito">
                  <Link to="/House22" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>4059, Lisbon</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
                  Fixed Cost
                </h6>
              </div>
            </div>{" "}
          </div>
          <div className="correction-box row">
            <div className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12 ">
              <div className="card-img">
                <Link to="/House23">
                  <img
                    className="d-block w-100"
                    src="./assets/officeg1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House23" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>30044, Nairobi</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
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
                <span className="spannito">
                  <Link to="/House24" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>10013, Madrid</h4>
                <h5>$7,000</h5>
                <h6>
                  Private Workspace <BsDot /> Flexible Terms <BsDot /> Fast Move
                  In <BsDot />
                  Fixed Cost
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rent;
