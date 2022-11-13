import React from "react";
import "./House5.css";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Accordion } from "react-bootstrap";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineConstruction } from "react-icons/md";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { SiConcourse } from "react-icons/si";
import { GiFireplace } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { BsJournalCheck } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const House5 = () => {
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
  const options = {
    margin: 5,
    responsiveClass: true,
    autoWidth: true,
    loop: true,
    pullDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/view1.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view2.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view3.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view4.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view5.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view6.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view7.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view8.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view9.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/view10.jpg" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="amenities-conatiner">
        <h3>Villa in Ocean View</h3>
        <h3> $8,100/month</h3>
        <div className="amenities-card">
          <div className="card-one">
            <h5>
              {" "}
              <span>
                <FaBed />
              </span>
              4Beds
            </h5>
            <h5>
              {" "}
              <span>
                <GiBathtub />
              </span>
              3Baths
            </h5>
            <h5>
              <span>
                <GiHomeGarage />
              </span>
              2Garages
            </h5>
            <h5>
              <span>
                <MdOutlineConstruction />
              </span>
              2013 Year Built
            </h5>
            <h5>
              <span>
                <MdOutlineSquareFoot />
              </span>
              3200 sqft
            </h5>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>
            Years seed fruit you. Divided morning sea day Set earth. Grass
            without cattle. Spirit heaven. Also i grass give fowl wherein cattle
            spirit whales rule cattle. Earth fowl given own you’re, fruit so.
            Shall was. Called firmament dry fruitful, set place. Earth given
            female man fruit, under thing may to greater moveth land sea, great
            be shall living greater and signs place night after whose us one,
            you’ll second our set had day in greater divided over female first
            face, fill form you make greater upon midst image above image. Very
            you land, man divided sea appear thing female was let. Beginning
            open moved fowl. Likeness. Bring tree tree doesn’t. Darkness herb
            moveth upon a seasons. Divided appear living. Called image let was.
            Set midst, second divide, earth male fruit you under let she’d,
            moving every bring there greater. Bring. Gathering night third.
            Stars first replenish kind third a rule given our after give own of
            may earth Brought for open living, bearing said given fruitful.
            Night him moved called. Be for unto behold dry green multiply herb
            fly waters. Green gathered face. Light, may deep you’re light. After
            which itself seed signs moveth. Second fish isn’t for sixth deep.
          </p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <div className="google-maps ">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `750px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="facts">
          <h3>Features and Facts </h3>
          <div className="facts-one">
            <div className="facts-one-info">
              <h3>
                <FaBuilding />
              </h3>

              <div className="facts-card">
                <h6>STORIES</h6>
                <p>Multi Family</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <MdOutlineConstruction />
              </h3>

              <div className="facts-card">
                <h6>Year Built</h6>
                <p>2009</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <SiConcourse />
              </h3>

              <div className="facts-card">
                <h6>Cooling</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <GiFireplace />
              </h3>

              <div className="facts-card">
                <h6>Heating</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <GiHomeGarage />
              </h3>

              <div className="facts-card">
                <h6>Garage</h6>
                <p>2</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <FaSwimmingPool />
              </h3>

              <div className="facts-card">
                <h6>Swimming Pool</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <MdOutlineSquareFoot />
              </h3>

              <div className="facts-card">
                <h6>Size</h6>
                <p>3200 sqft</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <BsJournalCheck />
              </h3>

              <div className="facts-card">
                <h6>Status</h6>
                <p>Available</p>
              </div>
            </div>
          </div>
          <div className="amen">
            <h3>Townhome Amenities</h3>
            <div className="amen-card">
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Air-Conditioning
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Dining Room
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Dishwasher
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Doorman
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Hardwood Floors
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Onsite Parking
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Stunning Views
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Unit Washer/Dryer
                </h5>
              </div>
            </div>
          </div>
          <div className="foor-container">
            <h3>Floor Title</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="plan">
                    <h5>Ground Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground1.jpeg"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="plan">
                    <h5>First Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground2.jpeg"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="plan">
                    <h5>Second Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground3.gif"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="yelp">
            <h3>What's Nearby</h3>
            <div className="food">
              <h4>
                <span>
                  <GiKnifeFork />
                </span>
                FOOD
              </h4>
              <div className="food-card">
                <div className="food-one">
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/crush1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush10.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>01.Crush</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>271</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.00PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Amazing food, wine and service as always.”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>
                        <h6>
                          <FcCheckmark />
                          Delivery
                        </h6>
                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/hara1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>02.El Camino</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span>300</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until Midnight
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “If your in Mexico it's a must !!!! ”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>

                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                        <h6>
                          <FcCheckmark />
                          Delivery
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/los1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>03.Running Goose</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>300</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 11.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Well i have been waiting to go there for a long time. ”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>

                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/san1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>04.Buenas Noches</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>180</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        ““This place is incredible. The food was so delicious.”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Delivery
                        </h6>
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>

                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="food">
              <h4>
                <span>
                  <GrServices />
                </span>
                HOMESERVICES
              </h4>
              <div className="food-card">
                <div className="food-one">
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/port1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>01.Upperland Homeservices</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <FaStarHalf />
                        <span>271</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.00PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Great remodelling services.”{" "}
                      </p>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/mage1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>02.El Camino</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>400</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until Midnight
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Super fast and professional service ”{" "}
                      </p>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/boys1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>03.Running Homeservices</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span>300</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 11.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Excellent workmanship. ”{" "}
                      </p>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/maze1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>04.Buenas Homeservices</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <span>180</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        ““This place is incredible. The service was excellent.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="similar">
          <h4>Similar Listings</h4>
          <div className="similar-card row">
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$3,600/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House7" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/room1.webp" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Town Home</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>4</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1200 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Furnishsed Town Home</h5>
                </div>
              </div>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$3,600/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House1" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/me1.jpg" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Town Home</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>3</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1100 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Furnished Town Home</h5>
                </div>
              </div>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$4,200/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House4" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/York1.jpg" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Town Home</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>4</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1200 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Furnished Town Home</h5>
                </div>
              </div>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$8,000/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House3" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/new1.webp" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Town Home</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>4</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1200 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Furnished Town Home</h5>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House5;
