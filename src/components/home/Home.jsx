import React from "react";
import "./Home.css";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import { ImHome3 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { owl } from "../../apartment";
import { agent } from "../../apartment";
import { partners } from "../../apartment";
import { review } from "../../apartment";
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

const Home = () => {
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
      </div>

      <div className="home-page container-fluid">
        <div className="featured text-center row">
          <h4>Discover Our Featured Listings</h4>
        </div>
        <div className="home-box">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {owl.map((owl, index) => {
              return (
                <div className="home-box-container" key={index}>
                  <div className="box-image">
                    <div className="laydown-one">
                      {" "}
                      <h5>{owl.price}</h5>
                    </div>
                    <div className="span-ten">
                      <h6>{owl.boxText}</h6>
                      <Link to={owl.link} className="link">
                        <h6>{owl.action}</h6>{" "}
                      </Link>
                    </div>
                    <img src={owl.image} alt="featured" loading="lazy" />
                  </div>
                  <div className="box-text">
                    <h6>{owl.name}</h6>
                    <div className="box-def">
                      <h6>
                        {owl.iconOne}
                        <span>{owl.bed}</span>
                      </h6>
                      <h6>
                        {owl.iconTwo}
                        <span>{owl.bath}</span>
                      </h6>
                      <h6>
                        {owl.iconThree}
                        <span>{owl.size}</span>
                      </h6>
                    </div>{" "}
                    <h5>{owl.type}</h5>
                  </div>
                </div>
              );
            })}
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
                <Link to="./Apartment" className="link">
                  <h4>Apartments</h4>
                  <p>19 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/buffalo14.webp"
                alt="castle"
                loading="lazy"
              />
            </div>
            <div className="roche-one nopadding  col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>{" "}
              <div className="word-one">
                <Link to="./Villa" className="link">
                  <h4>Villa</h4>
                  <p>12 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/malibu4.webp"
                alt="roma"
                loading="lazy"
              />
            </div>
            <div className="roche-one nopadding  col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./Family" className="link">
                  <h4>Family Home</h4>
                  <p>15 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/rancho13.webp"
                alt="rancho"
                loading="lazy"
              />
            </div>{" "}
          </div>{" "}
          <div className="omera row">
            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./Studio" className="link">
                  <h4>Studio</h4>
                  <p>11 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/room9.webp"
                alt="bufallo"
                loading="lazy"
              />
            </div>

            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./Condo" className="link">
                  <h4>Condo</h4>
                  <p>13 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/roche9.jpg"
                alt="bufallo"
                loading="lazy"
              />
            </div>

            <div className="roche-img  nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <Link to="./Shop" className="link">
                  <h4>Shop</h4>
                  <p>12 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/bed10.jpg"
                alt="bed001"
                loading="lazy"
              />
            </div>
          </div>{" "}
          <div className="omera row">
            <div className="roche-img nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <Link to="./Multi" className="link">
                  <h4>Multi Family Home</h4>
                  <p>19 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/crush1.jpg"
                alt="bed001"
                loading="lazy"
              />
            </div>

            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./Lot" className="link">
                  <h4>Lot</h4>
                  <p>14 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/officeh5.webp"
                alt="office"
                loading="lazy"
              />
            </div>
            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <Link to="./Offices" className="link">
                  <h4>Offices</h4>
                  <p>12 Properties</p>
                </Link>
              </div>
              <img
                className="d-block w-100"
                src="./assets/officef4.webp"
                alt="office"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="form row">
          <div className="form-one col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-query">
              {" "}
              <h4>Real Estate Inquiry Form</h4>{" "}
              <form>
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
                <button className="easy">
                  <h5>Submit</h5>
                </button>
                <div></div>
              </form>
            </div>{" "}
          </div>

          <div className="form-two col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>Why Choose Us</h4>
            <p>
              It is our job to get you the best price for your home and make
              sure that you get the best possible deal on the property{" "}
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
          {agent.map((agent, index) => {
            return (
              <div
                className="agent-one col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
                key={index}
              >
                <div className="agent-one-img">
                  <div className="over">
                    <a href={agent.socialOne} target="_blank" rel="noreferrer">
                      <h4>{agent.iconOne}</h4>
                    </a>
                    <a href={agent.socialTwo} target="_blank" rel="noreferrer">
                      <h4> {agent.iconTwo}</h4>
                    </a>
                    <a
                      href={agent.socialThree}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h4>{agent.iconThree}</h4>
                    </a>
                    <a href={agent.socialFour} target="_blank" rel="noreferrer">
                      <h4>{agent.iconFour}</h4>
                    </a>
                  </div>
                  <img src={agent.image} alt="Agent" loading="lazy" />
                </div>
                <div className="name">
                  <h5>{agent.name}</h5>
                  <p>{agent.position}</p>
                  <p>{agent.description}</p>
                </div>
                <Link to={agent.link} className="link">
                  <div className="profile">
                    <h6>{agent.action}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="review">
          <h3>What Our Clients Say</h3>
          <div className="shadow"></div>
          <Carousel slide={false} className="big-review">
            {review.map((review, index) => {
              return (
                <Carousel.Item key={index}>
                  <div className="review-card">
                    <div className="review-card-img">
                      <img src={review.image} alt="Customer" loading="lazy" />
                      <div className="text-tree">
                        <h5>{review.name}</h5>
                        <p>{review.position}</p>
                      </div>
                    </div>
                    <div className="paragraph">
                      <p>{review.description}</p>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        <div className="slider-container">
          <div className="course ">
            <h3>Our Partners </h3>{" "}
          </div>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {partners.map((partners, index) => {
              return (
                <div className="item" key={index}>
                  <img
                    className={partners.className}
                    src={partners.image}
                    alt="partners"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Home;
