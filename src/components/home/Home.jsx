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
import { FiSearch } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useForm } from "@formspree/react";

const Home = () => {
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
  const [state, handleSubmit] = useForm("mjvzdwod");
  if (state.succeeded) {
    return;
  }
  return (
    <section className="home ">
      <div className="home-header">
        <div className="lay-easy"></div>

        <h2>Turn your real-estate dreams into a reality </h2>
        <div className="header-put">
          <input
            className="input-fire"
            type="text"
            placeholder="Enter city, town or neighborhood"
          />
          <h3>
            <FiSearch />
          </h3>
        </div>
        <div className="drop">
          <label for="register">
            <h4>
              <RiAccountCircleLine />
            </h4>
          </label>

          <select classsName="drop-down">
            <option value="volvo"> Agent</option>
            <option value="volvo">Home-Owner</option>
          </select>
        </div>
      </div>

      <div className="home-page container-fluid">
        <div className="featured text-center row">
          <h4>Discover Our Featured Listings</h4>
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
            <div className="form-query">
              {" "}
              <h4>Real Estate Inquiry Form</h4>{" "}
              <form onSubmit={handleSubmit}>
                <div className="query-one">
                  <label htmlFor="type">Inquiry Type</label>
                  <select className="query-one-one">
                    <option value="Select Value"> Select Value</option>
                    <option value="Apartments">Apartments </option>
                    <option value="Offices"> Offices</option>
                    <option value="Houses"> Houses</option>
                    <option value="Studios"> Studios</option>
                  </select>
                </div>
                <div className="query-one">
                  <label htmlFor="personal">Personal Info</label>
                  <select className="query-one-one">
                    <option value="Select "> Select </option>
                    <option value="Buyer">Buyer</option>
                    <option value="Agent"> Agent</option>
                  </select>
                </div>
                <div className="query-one">
                  <label htmlFor="">Name</label>
                  <input
                    type="name"
                    name="name"
                    className="query-one-one"
                    required
                  />
                </div>
                <div className="query-one">
                  <label htmlFor="">phone</label>
                  <input
                    type="phone"
                    name="phone"
                    className="query-one-one"
                    required
                  />
                </div>{" "}
                <div className="query-one">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="query-one-one"
                    required
                  />
                </div>
                <div className="query-one">
                  <label htmlFor="">Message</label>
                  <textarea
                    className="query-one-two"
                    id="message"
                    name="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="easy"
                >
                  <h5>Submit</h5>
                </button>
                <div></div>
              </form>
            </div>{" "}
          </div>

          <div className="form-two col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>Why Choose Us</h4>
            <p>
              It’s our job to get you the best price for your home and make sure
              that you get the best possible deal on the property{" "}
            </p>
            <div className="form-special">
              <div className="sec-one">
                <span>
                  <ImHome3 />
                </span>

                <div className="sec-one-two">
                  <h4>Wide Range of Properties</h4>

                  <p>
                    A robust selection of popular properties on hand, as well as
                    leading properties from real estate experts.
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
                    solutions to save you money.
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
                <div className="paragraph">
                  <p>
                    I have to say how much I love the artistry and creativity
                    that goes into these places. They are all truly unique and I
                    love each and every one of the ideas for all different
                    reasons. Nicely done video. Thanks for posting.{" "}
                  </p>
                </div>
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
                <div className="paragraph">
                  <p>
                    This house looks even more stunning than the one presented
                    at the main channel. What a change does it make for a house
                    when you integrate both architectural style with the
                    furniture and the appliances! It is absolutely marvelous.
                  </p>
                </div>
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
                <div className="paragraph">
                  <p>
                    I love how they have hidden all the industrial equipment
                    such as the pool's filtration systems, AC's compressor
                    units, etc. which you usually find on the rooftop. This
                    house is well-thought out, sleek and beautifully designed. A
                    truly home resort feel.
                  </p>
                </div>
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
                <div className="paragraph">
                  <p>
                    Out of all the AMAZING natural elements that nature brings
                    to the table, I'm gratified to hear that you and Micky have
                    back problems! Back to the relm of the human...and I say
                    this in the kindest sort of way...love your channel
                  </p>
                </div>
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
                <div className="paragraph">
                  <p>
                    Beautiful home, great tour and photography! Perfect size in
                    my opinion- some of the largest homes lose their soul. This
                    has the amenities a luxury home requires, without having to
                    make up reasons for excess spaces. My dogs would love the
                    yard!
                  </p>
                </div>
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
                <div className="paragraph">
                  <p>
                    It's so gorgeous 🥺 I love the open shelving on the bbq area
                    and the lights are amazing, the house is super nice 😍 good
                    job guys
                  </p>
                </div>
              </div>{" "}
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="slider-container">
          <div className="course ">
            <h3>Our Partners </h3>{" "}
          </div>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part1.png"
                alt="partners"
              />
            </div>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part2.png"
                alt="partners"
              />
            </div>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part3.png"
                alt="partners"
              />
            </div>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part4.png"
                alt="partners"
              />
            </div>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part5.png"
                alt="partners"
              />
            </div>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part6.png"
                alt="partners"
              />
            </div>{" "}
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part7.png"
                alt="partners"
              />
            </div>
            <div className="item">
              <img
                className="d-block w-100"
                src="./assets/part8.png"
                alt="partners"
              />
            </div>
            <div className="item">
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
