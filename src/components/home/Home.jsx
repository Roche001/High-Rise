import React from "react";
import "./Home.css";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import { ImHome3 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { MdOutlineSquareFoot } from "react-icons/md";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const options = {
    margin: 5,
    responsiveClass: true,
    autoWidth: true,
    loop: true,
    pullDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
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
    <section className="home con">
      <div className="home-header">
        <h2>Your Property is Our Priority</h2>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
      </div>
      <div className="search-bar">
        <div className="picker">
          <select className="picker-a">
            <option value="Buy Property"> Buy Property</option>
            <option value="Rent Property">Rent Property</option>
            <option value="Sell Property"> Sell Property</option>
          </select>
        </div>
        <div className="picker">
          <select className="picker-a">
            <option value="Apartments">Apartments</option>
            <option value="Offices"> Offices</option>
            <option value="TownHome"> TownHome</option>
            <option value="Houses">Houses</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
        <div className="picker">
          <select className="picker-a">
            <option value="New York">New York</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Tulum">Tulum</option>
            <option value="Cualican">Cualican</option>
            <option value="San Migel">San Migel</option>
            <option value="San Diego">San Diego</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Moscow">Moscow</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Cairo">Cairo</option>
            <option value="Pretoria">Pretoria</option>
            <option value="Male">Male</option>
            <option value="Kampala">Kampala</option>
            <option value="Dodoma">Dodoma</option>
            <option value="Luanda">Luanda</option>
            <option value="Marrackech">Marrakech</option>
          </select>
        </div>
        <div className="picker-b">
          <button className="picker-a ">
            <a href="#button">
              <h5>Search</h5>
            </a>
          </button>
        </div>
      </div>
      <div className="home-page container-fluid">
        <div className="featured text-center row">
          <h4>Discover Our Featured Listings</h4>
          <p>
            These featured listings contain exclusive real estate opportunities
            within numerous cities
          </p>
        </div>
        <div className="home-box">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/room1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Apartment</h6>
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
                <h5>Family Home</h5>
              </div>
            </div>
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1250</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Buy" className="link">
                    <h6>Buy</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/York1.jpg" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Apartment</h6>
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
                <h5>Family Home</h5>
              </div>
            </div>
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/rancho1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Ranch & Farm</h6>
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
                <h5>Multi-Family Home</h5>
              </div>
            </div>
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/officee1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Office</h6>
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
                <h5>Spacious Office</h5>
              </div>
            </div>{" "}
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/roche1.jpg" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Apartment</h6>
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
                <h5>Family Home</h5>
              </div>
            </div>{" "}
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/malibu1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Home</h6>
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
                <h5>Single-Family Home</h5>
              </div>
            </div>{" "}
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/buffalo1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Ranch & Farm</h6>
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
                <h5>Multi-Family Home</h5>
              </div>
            </div>{" "}
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/officeg1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Furnished Office</h6>
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
                <h5>Luxury Office</h5>
              </div>
            </div>{" "}
            <div className="home-box-container">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="./Rent" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/horse1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Ranch & Farm</h6>
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
                <h5>Multi-Family Home</h5>
              </div>
            </div>{" "}
          </OwlCarousel>
        </div>
      </div>
      <div className="explore">
        <div className="explore-one text-center">
          <h4>Explore Apartment Types</h4>
          <p>
            Explore all the different types of apartments so you can choose the
            best option for you{" "}
          </p>
        </div>
        <div className="part-elements">
          <div className="omera row">
            <div className="roche-img nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <Link to="./House10" className="link">
                  <h4>Apartments</h4>
                  <p>19 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/buffalo14.webp"
                alt="castle"
              />
            </div>
            <div className="roche-one nopadding  col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>{" "}
              <div className="word-one">
                <Link to="./House10" className="link">
                  <h4>Villa</h4>
                  <p>12 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/malibu4.webp"
                alt="roma"
              />
            </div>
            <div className="roche-one nopadding  col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./House10" className="link">
                  <h4>Family Home</h4>
                  <p>15 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/rancho13.webp"
                alt="rancho"
              />
            </div>{" "}
          </div>{" "}
          <div className="omera row">
            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./House10" className="link">
                  <h4>Studio</h4>
                  <p>11 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/room9.webp"
                alt="bufallo"
              />
            </div>

            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./House10" className="link">
                  <h4>Condo</h4>
                  <p>13 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/roche9.jpg"
                alt="bufallo"
              />
            </div>

            <div className="roche-img  nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <Link to="./House10" className="link">
                  <h4>Shop</h4>
                  <p>12 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/bed10.jpg"
                alt="bed001"
              />
            </div>
          </div>{" "}
          <div className="omera row">
            <div className="roche-img nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <Link to="./House10" className="link">
                  <h4>Multi Family Home</h4>
                  <p>19 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/crush1.jpg"
                alt="bed001"
              />
            </div>

            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./House10" className="link">
                  <h4>Lot</h4>
                  <p>14 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/officeh5.webp"
                alt="office"
              />
            </div>
            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./House10" className="link">
                  <h4>Offices</h4>
                  <p>12 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/officef4.webp"
                alt="office"
              />
            </div>
          </div>
        </div>
        <div className="form row">
          <div className="form-one col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Real Estate Inquiry Form</h3>
            <div className="form-input">
              <h6>Inquiry Type</h6>
              <select className="select">
                <option value="Select Value"> Select Value</option>
                <option value="Apartments">Apartments </option>
                <option value="Offices"> Offices</option>
                <option value="Houses"> Houses</option>
                <option value="Studios"> Studios</option>
              </select>
              <h5>Personal Info</h5>
              <div className="personal">
                <select className="select">
                  <option value="Select "> Select </option>
                  <option value="Buyer">Buyer</option>
                  <option value="Agent"> Agent</option>
                </select>
                <h5>Your Name</h5>
                <input
                  className="select-a"
                  type="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <h5>Email</h5>
              <input
                className="select-a"
                type="Email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <h5>How to Address You</h5>
              <select className="select">
                <option value="Select "> Select </option>
                <option value="Mr">Mr</option>
                <option value="Mrs"> Mrs</option>
              </select>
              <h5>Submit Inquiry</h5>
              <button className="button">
                <a href="#button">Submit</a>
              </button>
            </div>
          </div>
          <div className="form-two col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>Why Choose Us</h4>
            <p>
              It’s our job to get you the best price for your home and make sure
              that you get the best possible deal on the property{" "}
            </p>
            <div className="sec-one">
              <span>
                <ImHome3 />
              </span>

              <div className="sec-one-two">
                <h4>Wide Range of Properties</h4>

                <p>
                  With a robust selection of popular properties on hand, as well
                  as leading properties from <br />
                  real estate experts.
                </p>
              </div>
            </div>
            <div className="sec-one">
              <span>
                <AiFillDollarCircle />
              </span>

              <div className="sec-one-two">
                <h4>Financing Made Easy</h4>
                <p>
                  Our stress-free finance department that can find financial
                  solutions to save you money ss.
                </p>
              </div>
            </div>
            <div className="sec-one">
              <span>
                <IoIosContact />
              </span>

              <div className="sec-one-two">
                <h4>Thrusted by Thousands</h4>
                <p>
                  10 new offers every day. 350 offers on site, trusted by a
                  community of thousands of users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="agents row">
          <div className="agent-intro row text-center">
            {" "}
            <h3>Meet Our Agents</h3>
            <p>
              Meet our team of professional agents, who will help you find your
              dream house{" "}
            </p>
          </div>
          <div className="agent-one  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="agent-one-img">
              <div className="over">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsFacebook />
                  </h4>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    {" "}
                    <AiOutlineTwitter />
                  </h4>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <AiFillInstagram />
                  </h4>
                </a>
                <a
                  href="https://www.linkedIn.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsLinkedin />
                  </h4>
                </a>
              </div>
              <img src="./assets/agent1.jpeg" alt="Agent" />
            </div>
            <div className="name">
              <h5>Karen Masterson</h5>
              <p>Chief Legal Officer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
            </div>
            <Link to="./Profile1" className="link">
              <div className="profile">
                <h6>View Profile</h6>
              </div>
            </Link>
          </div>
          <div className="agent-one  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="agent-one-img">
              <div className="over">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsFacebook />
                  </h4>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    {" "}
                    <AiOutlineTwitter />
                  </h4>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <AiFillInstagram />
                  </h4>
                </a>
                <a
                  href="https://www.linkedIn.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsLinkedin />
                  </h4>
                </a>
              </div>
              <img src="./assets/agent2.jpeg" alt="Agent" />
            </div>
            <div className="name">
              <h5>Kathleem Myers</h5>
              <p>Chief Operating Officer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
            </div>
            <Link to="./Profile2" className="link">
              <div className="profile">
                <h6>View Profile</h6>
              </div>
            </Link>
          </div>{" "}
          <div className="agent-one  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="agent-one-img">
              <div className="over">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsFacebook />
                  </h4>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    {" "}
                    <AiOutlineTwitter />
                  </h4>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <AiFillInstagram />
                  </h4>
                </a>
                <a
                  href="https://www.linkedIn.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsLinkedin />
                  </h4>
                </a>
              </div>
              <img src="./assets/agent5.jpeg" alt="Agent" />
            </div>
            <div className="name">
              <h5>John Loyd</h5>
              <p>Cheif Analytics Officer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
            </div>
            <Link to="./Profile3" className="link">
              <div className="profile">
                <h6>View Profile</h6>
              </div>
            </Link>
          </div>{" "}
          <div className="agent-one  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="agent-one-img">
              <div className="over">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsFacebook />
                  </h4>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    {" "}
                    <AiOutlineTwitter />
                  </h4>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <AiFillInstagram />
                  </h4>
                </a>
                <a
                  href="https://www.linkedIn.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <BsLinkedin />
                  </h4>
                </a>
              </div>
              <img src="./assets/agent6.jpeg" alt="Agent" />
            </div>
            <div className="name">
              <h5>Jennifer Barton</h5>
              <p>Vice President, Product</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
            </div>
            <Link to="./Profile4" className="link">
              <div className="profile">
                <h6>View Profile</h6>
              </div>
            </Link>
          </div>
        </div>
        <div className="review">
          <h3>What Our Clients Say</h3>
          <div className="shadow"></div>
          <Carousel slide={false} className="big-review">
            <Carousel.Item>
              <div className="review-card">
                <div className="review-card-img">
                  <img src="./assets/say1.jpeg" alt="Customer" />
                  <div className="text-tree">
                    <h5>Searcy Michael</h5>
                    <p>Author</p>
                  </div>
                </div>
                <p>
                  I have to say how much I love the artistry and creativity that
                  goes into these places. They are all truly unique and I love
                  each and every one of the ideas for all different reasons.
                  Nicely done video. Thanks for posting.{" "}
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="review-card">
                <div className="review-card-img">
                  <img src="./assets/say2.jpeg" alt="Customer" />
                  <div className="text-tree">
                    <h5>Maria Flyn</h5>
                    <p>Manager at Hottubs Inc.</p>
                  </div>
                </div>
                <p>
                  This house looks even more stunning than the one presented at
                  the main channel. What a change does it make for a house when
                  you integrate both architectural style with the furniture and
                  the appliances! It is absolutely marvelous.
                </p>
              </div>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="review-card">
                <div className="review-card-img">
                  <img src="./assets/say3.jpeg" alt="Customer" />
                  <div className="text-tree">
                    <h5>Filman Lamina</h5>
                    <p>Manager at Lawn LTD.</p>
                  </div>
                </div>
                <p>
                  I love how they have hidden all the industrial equipment such
                  as the pool's filtration systems, AC's compressor units, etc.
                  which you usually find on the rooftop. This house is
                  well-thought out, sleek and beautifully designed. A truly home
                  resort feel.
                </p>
              </div>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="review-card">
                <div className="review-card-img">
                  <img src="./assets/say4.jpeg" alt="Customer" />
                  <div className="text-tree">
                    <h5>Andreea Houston</h5>
                    <p>Actress</p>
                  </div>
                </div>
                <p>
                  Out of all the AMAZING natural elements that nature brings to
                  the table, I'm gratified to hear that you and Micky have back
                  problems! Back to the relm of the human...and I say this in
                  the kindest sort of way...love your channel
                </p>
              </div>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="review-card">
                <div className="review-card-img">
                  <img src="./assets/say5.jpeg" alt="Customer" />
                  <div className="text-tree">
                    <h5>Larry Eckerdt</h5>
                    <p>Doctor, Higway Nursing Home.</p>
                  </div>
                </div>
                <p>
                  Beautiful home, great tour and photography! Perfect size in my
                  opinion- some of the largest homes lose their soul. This has
                  the amenities a luxury home requires, without having to make
                  up reasons for excess spaces. My dogs would love the yard!
                </p>
              </div>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="review-card">
                <div className="review-card-img">
                  <img src="./assets/say6.jpeg" alt="Customer" />
                  <div className="text-tree">
                    <h5>Hannah Mae Endaya</h5>
                    <p>HRM, Higway Nursing Home.</p>
                  </div>
                </div>
                <p>
                  It's so gorgeous 🥺 I love the open shelving on the bbq area
                  and the lights are amazing, the house is super nice 😍 good
                  job guys
                </p>
              </div>{" "}
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="course ">
          <h3>Our Partners </h3>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part1.png"
                alt="partners"
              />
            </div>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part5.png"
                alt="partners"
              />
            </div>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part2.png"
                alt="partners"
              />
            </div>{" "}
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part7.png"
                alt="partners"
              />
            </div>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part6.png"
                alt="partners"
              />
            </div>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part3.png"
                alt="partners"
              />
            </div>{" "}
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part8.png"
                alt="partners"
              />
            </div>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part4.png"
                alt="partners"
              />
            </div>
            <div className="item  ">
              <img
                className="d-block w-100"
                src="./assets/part9.png"
                alt="partners"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Home;
