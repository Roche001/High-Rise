import React, { useState } from "react";
import "./Home.css";
import "./style.css";
import { MdOutlineBed } from "react-icons/md";
import Carousel from "react-bootstrap/Carousel";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";
import { ImHeart } from "react-icons/im";
import { ImHome3 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [iconOneColor, setIconOneColor] = useState("black");
  const redColor = () => {
    setIconOneColor("red");
  };
  const [iconTwoColor, setIconTwoColor] = useState("black");
  const greenColor = () => {
    setIconTwoColor("green");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to View House
    </Tooltip>
  );
  const toolTip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Like House
    </Tooltip>
  );
  const seeMore = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See More
    </Tooltip>
  );

  return (
    <section className="home">
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
          <button className="picker-a button">
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
            within the city
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/room1.webp"
                alt="Featured-House"
              />
              <span className="red"> Buy</span>
              <div className="overlay">
                <div className="image-title">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <h4 onClick={handleOpen}>
                      <FaEye />
                    </h4>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 250, hide: 400 }}
                    overlay={toolTip}
                  >
                    <h4 style={{ color: iconOneColor }} onClick={redColor}>
                      <ImHeart />
                    </h4>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 250, hide: 400 }}
                    overlay={seeMore}
                  >
                    <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                      <Link to="/House1">
                        <li>
                          <RiHome6Fill />
                        </li>
                      </Link>
                    </h4>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <h5>Awesome Family Home </h5>
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  <div className="pap"></div>
                </Typography>
              </Box>
            </Modal>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/me1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Los Angeles</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  5
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/house1.webp"
                alt="Featured-House"
              />
              <span className="red"> Buy</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/York1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/view1.jpg"
                alt="Featured-House"
              />
              <span className="red"> Buy</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/tig1.webp"
                alt="Featured-House"
              />
              <span className="red">Rent</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/roche3.jpg"
                alt="Featured-House"
              />
              <span className="red"> Buy</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="featured-listing-card">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/new1.webp"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="featured-listing-card ">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/new1.webp"
                alt="Featured-House"
              />
              <span className="red"> Rent</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>

                  <h4 style={{ color: iconOneColor }} onClick={redColor}>
                    <ImHeart />
                  </h4>

                  <h4 style={{ color: iconTwoColor }} onClick={greenColor}>
                    <RiHome6Fill />
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h4>Home in Kosovo</h4>
              <div className="icon">
                <h5>
                  <span>
                    <MdOutlineBed />
                  </span>
                  4
                </h5>
                <h5>
                  <span>
                    <FaBath />
                  </span>
                  3
                </h5>
                <h5>
                  <span>
                    <MdOutlineSquareFoot />
                  </span>
                  5200 sq ft
                </h5>
                <h5>$380,000</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="explore">
        <div className="explore-one text-center">
          <h4>Explore Apartment Types</h4>
          <p>
            Explore all the different types of apartments so you can choose the
            best option for you{" "}
          </p>
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
          <div className="hello row ">
            <div className="item col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
              <img
                className="d-block w-100"
                src="./assets/part1.png"
                alt="partners"
              />
            </div>
            <div className="item col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
              <img
                className="d-block w-100"
                src="./assets/part2.png"
                alt="partners"
              />
            </div>
            <div className="item col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
              <img
                className="d-block w-100"
                src="./assets/part3.png"
                alt="partners"
              />
            </div>
            <div className="item col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
              <img
                className="d-block w-100"
                src="./assets/part4.png"
                alt="partners"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
