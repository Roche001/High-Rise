import React from "react";
import "./House17.css";
import Carousel from "react-bootstrap/Carousel";
import { MdLocationOn } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
const House17 = () => {
  return (
    <div className="offices-house container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/officea1.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea2.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea3.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea4.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea5.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea6.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea7.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea8.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea9.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea10.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea11.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea12.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea13.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officea14.jpg" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="office-features">
        <h4>
          <small>
            <MdLocationOn />
          </small>
          <span>Address: Avinguda Diagonal, B 08018 Barcelona</span>
        </h4>
        <h4>
          <small>
            <GiResize />
          </small>
          <span>Office size: 8.457 Sq Ft</span>
        </h4>
        <h4>
          <small>
            <BsFillPeopleFill />
          </small>
          <span>Meeting size: 2 to 24 persons </span>
        </h4>
      </div>
    </div>
  );
};

export default House17;
