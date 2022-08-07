import React, { useState } from "react";
import "./Home.css";
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";

const Home = () => {
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
        <div className="">
          <div className="featured-listing-card">
            <div className="card-two">
              <img
                className="d-block w-100"
                src="./assets/room1.webp"
                alt="Featured-House"
              />
              <span className="red"> Buy</span>
              <div className="overlay">
                <div className="image-title">
                  <h4>
                    <FaEye />
                  </h4>
                  <h4 className="button">
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
          <div className="featured-listing-card">
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
                  <h4>
                    <RiHeart3Line />
                  </h4>
                  <h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
