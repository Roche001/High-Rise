import React from "react";
import "./House9.css";
import Carousel from "react-bootstrap/Carousel";
import { GrStar } from "react-icons/gr";
import { MdOutlineStarHalf } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { GiCooler } from "react-icons/gi";
import { TiInputChecked } from "react-icons/ti";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { GiWoodenCrate } from "react-icons/gi";
import { GiHanger } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { RiFridgeFill } from "react-icons/ri";
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
        defaultZoom={13}
        defaultCenter={{ lat: 55.178044, lng: 10.694409 }}
      >
        <Marker position={{ lat: 55.178044, lng: 10.694409 }} />
      </GoogleMap>
    ))
  );
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/buffalo1.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo2.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo3.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo4.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo5.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo6.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo7.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo8.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo9.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo10.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo11.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo12.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo13.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/buffalo15.webp" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="farm-one">
        <h2>5884 Gudme</h2>
        <h5>5MHV+6Q7 Gudme, Denmark</h5>
        <div className="farm-stars">
          <h5>
            <GrStar />
          </h5>
          <h5>
            <GrStar />
          </h5>
          <h5>
            <GrStar />
          </h5>
          <h5>
            <GrStar />
          </h5>
          <h5>
            <MdOutlineStarHalf />
          </h5>
          (<small>8 reviews</small>)
        </div>
        <div className="ranch-form">
          <h4>
            Monthly Rent <span>$8000</span>
          </h4>

          <h4>
            Bedrooms<span>5Bedrooms</span>
          </h4>

          <h4>
            Bathrooms <span>5Bathrooms</span>
          </h4>

          <h4>
            Square Feet <span>4,558 SQ FT</span>
          </h4>
        </div>
        <div className="form-about">
          <h4>About The Residences at Georgetown Road</h4>
          <p>
            This property is managed by Beztak, 2022 recipient of the US Best
            Managed Companies for the third year in a row, sponsored by Deloitte
            Private and The Wall Street Journal. Call and let us tell you why!
            ENJOY THE LIFE OF LUXURY Located in Chicago, Illinois The Residences
            at NewCity offers studio, one-, and two- bedroom apartments and
            features a door attendant, covered parking, swimming pool with
            expansive sundeck, bike racks, BBQ/picnic area, and more!With
            convenient access to shopping, dining, and entertainment, The
            Residences at NewCity is the perfect place to call your new home!
            Virtual and Contact-Free Leasing and Move-In Available - Self-Guided
            Tours with Lockboxes- FaceTime/Skype Tours- Apply & Sign Online
          </p>
          <h5>Unique Features</h5>
          <div className="order-list">
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              WiFi Available
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              24-Hour Door Attendant
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              After Hours Tours
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Bike Parking Station
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Outdoor Grilling Area
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Lounge with Fire Pit
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Quartz Countertops
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Theatre Room
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Washer/Dryer
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Plank Flooring
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Energy Efficient Appliances
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Recycling on Every Floor
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Stylish Lobby Entrance
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Contemporary Espresso Cabinets
            </li>
          </div>
        </div>
        <div className="contat">
          <h4>Agent</h4>

          <img src="./assets/agent1.jpeg" alt="Agent" />
          <h5>Name: Agent Karen Masterson</h5>
          <h5>Contact:(708) 919-2291</h5>
          <h5>Language:English, Arabic</h5>
          <h5>Open:Monday-Friday, 6.00am -5.30pm </h5>
        </div>
        <div className="part-features">
          <h4>Home Features</h4>
          <div className="omera row">
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiWashingMachine />
              </h3>
              <span>In Unit Washer & Dryer</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiCooler />
              </h3>
              <span>Air Conditioning</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <CgSmartHomeWashMachine />
              </h3>
              <span>Dishwasher</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <FaWifi />
              </h3>
              <span>High Speed Internet Access</span>
            </div>
          </div>
          <div className="omera row">
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiWoodenCrate />
              </h3>
              <span>Hardwood Floor</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiHanger />
              </h3>
              <span>Walk-in Closet</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <MdOutlineMicrowave />
              </h3>
              <span>Microwave</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <RiFridgeFill />
              </h3>
              <span>Refridgirator</span>
            </div>
          </div>
        </div>
        <div className="outline">
          <h3>Highlights</h3>
          <div className="order-list">
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              High Speed Internet Access
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Wi-Fi
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Unit Washer & Dryer
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Air Conditioning
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Heating
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Smoke Free
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Cable Ready
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Storage Units
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Double Vanities
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Tub/Shower
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Sprinkler System
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Wheelchair Accessible
            </li>
          </div>
          <h3>Kitchen Appliances</h3>
          <div className="order-list">
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Dishwasher
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Stainless Steel Appliances
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Oven
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Disposal
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Kitchen
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Range
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Ice Maker
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Microwave
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Refrigerator
            </li>
          </div>
        </div>
        <div className="location">
          <h3>Location</h3>
          <p>5MHV+6Q7 Gudme, Denmark</p>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `750px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="neibor">
          <h3>Neighborhood</h3>
          <p>
            The historic neighborhood of Lexington is located in Kentucky,
            adjacent to Lincoln Park. Its buildings date back to the Victorian
            era, but the pace is anything but old-fashioned. Old Town is lively
            both day and night – residents enjoy the cool, eclectic shops as
            well as rustic taverns along Wells Street. When you first step into
            the community, you’ll probably notice the iron “Old Town” sign.
            You’ll also discover the diversity here, both in food and culture.
            The comedy zone is a great place to go for a good laugh – check out
            the Second City or Zanies Comedy Club for weekly shows. In addition
            to the eclectic shops along Wells Street, residents find comfort in
            the local market where they can purchase fragrant spices, imported
            oils, and blended wines. Many family-owned restaurants reside here -
            from pizza parlors to steakhouses and sushi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default House9;
