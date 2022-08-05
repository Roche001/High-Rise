import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section className="home container-fluid">
      <div className="photo">
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

          <input
            className="required"
            type="search"
            name="seach"
            placeholder="Search"
            required
          />

          <button className="search-button">
            <a href="#search">
              <h6>
                <span>
                  <GoSearch />
                </span>
                Search
              </h6>
            </a>
          </button>
        </div>
      </div>
      <div className="home-header row text-center">
        <h3>Discover Our Featured Listings</h3>
        <p>
          These featured listings contain exclusive real estate opportunities
          within the city{" "}
        </p>
      </div>
    </section>
  );
};

export default Home;
