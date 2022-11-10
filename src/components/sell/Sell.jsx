import React from "react";
import "./Sell.css";
import { FcFolder } from "react-icons/fc";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Checkbox from "@mui/material/Checkbox";

const label = {
  inputProps: { "aria-label": "Checkbox demo" },
};

const Sell = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />
      </GoogleMap>
    ))
  );
  return (
    <div className="submit-container container">
      <div className="submit-card-bg">
        <h4>Basic Information </h4>
        <p>Type information about your property. Be descriptive. </p>
        <div className="submit-small">
          <div className="small-one">
            <label htmlFor="Title">Title</label>
            <input
              className="input-sup"
              type="text"
              placeholder="Enter House Title/Name"
            />
          </div>
          <div className="small-one">
            <label htmlFor="Title">Price</label>
            <input
              className="input-drag"
              type="text"
              placeholder="Enter Price"
            />
          </div>
        </div>
        <div className="text-area">
          <label htmlFor="Title">Description</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="5"
            placeholder="House Description"
          ></textarea>
        </div>
      </div>
      <div className="house-summary">
        <div className="house-summary-one">
          <h4>Summary</h4>
          <div className="sum-one">
            <label htmlFor="Title">Location</label>
            <input
              className="sum-sm"
              type="text"
              placeholder="Enter Location"
            />
          </div>
          <div className="sum-branch">
            <div className="sum-branch-one">
              <label htmlFor="Title">Property Type</label>
              <select className="sum-small" id="membership">
                <option value="Other" selected>
                  Apartment
                </option>{" "}
                <option value="Sale">Condominium</option>
                <option value="Rent">Cottage</option>
                <option value="Rent">Flat</option>
                <option value="Rent">House</option>
              </select>
            </div>
            <div className="sum-branch-one">
              <label htmlFor="Title">Status</label>
              <select className="membership" id="membership">
                <option value="Other" selected>
                  Rent
                </option>{" "}
                <option value="Sale">Sale</option>
                <option value="Rent">Other</option>
              </select>
            </div>
          </div>
          <div className="sub-root">
            <div className="sum-branch-two">
              <label htmlFor="Title">Beds</label>
              <input
                className="sum-small"
                type="text"
                placeholder="Number of  Bedrooms"
              />
            </div>
            <div className="sum-branch-two">
              <label htmlFor="Title">Baths</label>
              <input
                className="sum-small"
                type="text"
                placeholder="Number of Bathrooms"
              />
            </div>
          </div>
          <div className="sub-stem">
            <div className="sum-branch-two">
              <label htmlFor="Title">Area</label>
              <input className="sum-small" type="text" placeholder="SQ  FT" />
            </div>
            <div className="sum-branch-two">
              <label htmlFor="Title">Garages</label>
              <input
                className="sum-small"
                type="text"
                placeholder="Number of Garages"
              />
            </div>
          </div>
        </div>
        <div className="house-summary-two">
          <h4>Place on Map</h4>{" "}
          <div className="sum-one">
            <label htmlFor="Title">Address</label>
            <input className="sum-sm" type="text" placeholder="Enter Address" />
          </div>
          <div className="map-drag">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `750px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>{" "}
          <div className="lat-long">
            <div className="lat">
              <label htmlFor="Title">Latitude</label>
              <input className="sum-small" type="text" placeholder="Latitude" />
            </div>{" "}
            <div className="lat">
              <label htmlFor="Title">Longitude</label>
              <input
                className="sum-small"
                type="text"
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>
        <div className="gallery">
          <h4>Gallery</h4>
          <div className="lat-gal">
            <div className="gal-photo">
              <h5>
                <FcFolder /> Upload Photos
              </h5>
            </div>
          </div>
        </div>
        <div className="prop-features">
          <h4>Property Features</h4>
          <div className="check-box">
            <h4>
              <Checkbox {...label} /> <span>Air Conditioning</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Internet</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Swimming Pool</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Hi-Fi</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Cable Tv</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Terrace</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Bedding</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Microwave</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Toaster</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Parquett</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Balcony</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Beach</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Heating</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Smoking allowed</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Coffee pot</span>
            </h4>{" "}
            <h4>
              <Checkbox {...label} /> <span>Roof terrace</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Iron</span>
            </h4>
            <h4>
              <Checkbox {...label} /> <span>Garage</span>
            </h4>
          </div>
        </div>
        <div className="pay-sm">
          <div className="pay">
            <h5>Proceed to Payment</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
