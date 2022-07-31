import React from "react";
import "./Photo.css";
import Carousel from "react-bootstrap/Carousel";
import { GoSearch } from "react-icons/go";

const Photo = () => {
  return (
    <div className="photo">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/home1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Awesome Family Home</h3>
            <h6>4bed-3baths-347 sq ft</h6>
            <button>View Details </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/home2.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/home3.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="search">
        <select className="picker">
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
          <option value="Sold">Sold</option>
        </select>
        <select className="picker">
          <option value="Apartment">Apartment</option>
          <option value="Offices">Offices</option>
          <option value="Townhome">Townhome</option>
          <option value="Houses">Houses</option>
          <option value="Studio">Studio</option>
        </select>
        <div className="required">
          <input type="search" name="seach" placeholder="Search" required />
        </div>
        <div className="search-button">
          <button>
            <a href="search-a">
              <GoSearch />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
