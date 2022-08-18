import React, { useState } from "react";
import "./Home.css";
import "./style.css";
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";
import { ImHeart } from "react-icons/im";
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
          <button className="picker-a">
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
      </div>
    </section>
  );
};

export default Home;
