import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section className="home container-fluid">
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
        <div className="picker-a">
          <button className="picker-a">
            <a href="#button">
              <h5>Search</h5>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
