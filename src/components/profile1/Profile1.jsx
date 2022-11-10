import React from "react";
import "./Profile1.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { MdOutlineSquareFoot } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const Profile1 = () => {
  return (
    <div className="container">
      <div className="prof-box">
        <h4>Karen Masterson</h4>
        <div className="prof-card-one">
          <div className="prof-sum">
            <div className="prof-img">
              <img src="./assets/agent1.jpeg" alt="agent" />
            </div>
          </div>
          <div className="prof-calc">
            <div className="calc one">
              <h5>About Me</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut
                adipiscing gravida tincidunt. Duis euismod placerat rhoncus.
                Phasellus mollis imperdiet placer
              </p>
            </div>
            <div className="calc-social">
              <h6>My social Profiles</h6>
              <div className="social-profile">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6>
                    <BsFacebook />
                  </h6>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6>
                    {" "}
                    <AiOutlineTwitter />
                  </h6>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6>
                    <AiFillInstagram />
                  </h6>
                </a>
                <a
                  href="https://www.linkedIn.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6>
                    <BsLinkedin />
                  </h6>
                </a>
              </div>
            </div>
            <div className="agency">
              <img src="./assets/part1.png" alt="agency" />
            </div>
          </div>
        </div>
        <div className="agent-prop">
          <h5>My Properties</h5>
          <div className="agent-prop-one row">
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
                <img src="./assets/York1.jpg" alt="featured" />
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
                <img src="./assets/whity1.webp" alt="featured" />
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
          </div>
          <div className="agent-prop-one row">
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
                <img src="./assets/horse1.webp" alt="featured" />
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
          </div>
        </div>
        <div className="hello-one row">
          <div className="mess-one">
            <div className="submit-small">
              <div className="small-one">
                <label htmlFor="Title">Name</label>
                <input
                  className="input-prof"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="small-one">
                <label htmlFor="Title">Email</label>
                <input
                  className="input-prof"
                  type="text"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="text-area">
              <label htmlFor="Title">Message</label>
              <textarea
                name="textarea"
                id="areatext"
                cols="30"
                rows="2"
                placeholder="Leave Message"
                required
              ></textarea>
            </div>
          </div>
          <div className="mess-two">
            <div className="small-one">
              <label htmlFor="Title">Name</label>
              <input
                className="input-rev"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="text-area">
              <label htmlFor="Title">Message</label>
              <textarea
                name="textarea"
                id="rev-are"
                cols="30"
                rows="2"
                placeholder="Leave Message"
                required
              ></textarea>
            </div>
            <div className="rate">
              <Stack spacing={2}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
