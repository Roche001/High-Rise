"react";
import "./Rent.css";

import { RiHome6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import { BsDot } from "react-icons/bs";

const Rent = () => {
  return (
    <section id="rent">
      <div className="town-home">
        <h3>Exclusive Listings</h3>
      </div>
      <div className=" container-fluid rent-townhomes">
        <h3>Townhomes</h3>

        <div className="rent-container row ">
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/me1.jpg"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House1">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House1" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>9631 North Bridle East Bridgewater, MA 02333</h4>
                <h5>$1400</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House1">See More</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/bed1.jpg"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House2">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House2" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>2800 Leverton Cove Road, MA 01069</h4>
                <h5>$2600</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House2">See More</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/new1.webp"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House3">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House3" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>4895 North Drive East Bridgewater, MA 05897</h4>
                <h5>$1250</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House3">See More</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/York1.jpg"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House4">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House4" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>4895 North Drive East Bridgewater, MA 05897</h4>
                <h5>$1250</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House4">See More</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rent-container row">
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/view1.jpg"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House5">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House5" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>8055 Leverton Cove Road, MA 01337</h4>
                <h5>$1550</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House5">See More</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/house1.webp"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House6">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House6" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>8055 Leverton Cove Road, MA 01337</h4>
                <h5>$1550</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House6">See More</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/room1.webp"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House7">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House7" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>8055 Leverton Cove Road, MA 01337</h4>
                <h5>$1550</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House7">See More</Link>
                </a>
              </div>
            </div>
          </div>
          <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card-img">
              <img
                className="d-block w-100"
                src="./assets/tig1.webp"
                alt="House1"
              />

              <div className="overlay">
                <Link to="/House8">
                  <h4>
                    <RiHome6Line />
                  </h4>
                </Link>
              </div>
              <span className="spannito">
                <Link to="/House8" className="link">
                  <h4>Rent</h4>
                </Link>
              </span>
            </div>
            <div className="card-text">
              <div className="card-head">
                <h4>9631 North Bridle East Bridgewater, MA 02333</h4>
                <h5>$2400</h5>
              </div>
              <h6>
                5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                381.9 Acre(s)
              </h6>
              <div className="butt-on">
                <a href="Button">
                  <Link to="/House8">See More</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ranches">
          <h3>Raches and Farms </h3>
        </div>
        <div className="ranches-container">
          <div className="ranch-container row">
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House9">
                  <img
                    className="d-block w-100"
                    src="./assets/buffalo1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House9" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>5884 Gudme</h4>
                <h4>5MHV+6Q7 Gudme, Denmark</h4>
                <h5>$8000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House10">
                  <img
                    className="d-block w-100"
                    src="./assets/castle1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House10" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>1839 Honey Spring Place</h4>
                <h4>Lexington,KY,01511 United States</h4>
                <h5>$25,000</h5>
                <h6>
                  9Bedrooms <BsDot /> 9Bathrooms <BsDot /> 10,558 SQ FT{" "}
                  <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House11">
                  <img
                    className="d-block w-100"
                    src="./assets/horse1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House11" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>5225 Greenwhich Pike</h4>
                <h4>Merna,NE,40511 United States</h4>
                <h5>$32,000</h5>
                <h6>
                  8Bedrooms <BsDot /> 8Bathrooms <BsDot /> 12,558 SQ FT{" "}
                  <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House12">
                  <img
                    className="d-block w-100"
                    src="./assets/malibu1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House12" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>3022 Valley Road</h4>
                <h4>Bodhei,MBS,40511 Kenya</h4>
                <h5>$2000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
          </div>
          <div className="ranch-container row">
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House13">
                  <img
                    className="d-block w-100"
                    src="./assets/ocean1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House13" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>3000 Kajulu Hills</h4>
                <h4>Kisumu,ksm,2330 Kenya</h4>
                <h5>$32,000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House14">
                  <img
                    className="d-block w-100"
                    src="./assets/rancho1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House14" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>39000 Eswatzini Road</h4>
                <h4>Beaufort,BW,4201 South Africa</h4>
                <h5>$29,000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House15">
                  <img
                    className="d-block w-100"
                    src="./assets/roma1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House15" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>9088 Kilamba Road</h4>
                <h4>Yembe,YM,1100 Angola</h4>
                <h5>$18,000</h5>
                <h6>
                  5Bedrooms <BsDot /> 5Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
            <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="card-img">
                <Link to="/House16">
                  <img
                    className="d-block w-100"
                    src="./assets/whity1.webp"
                    alt="House1"
                  />
                </Link>
                <span className="spannito">
                  <Link to="/House16" className="link">
                    <h4>Rent</h4>
                  </Link>
                </span>
              </div>
              <div className="card-text">
                <h4>5088 Al Akrad</h4>
                <h4>Al Akrad,KY,5110 United Egypt</h4>
                <h5>$27,000</h5>
                <h6>
                  9Bedrooms <BsDot /> 9Bathrooms <BsDot /> 4,558 SQ FT <BsDot />
                  381.9 Acre(s)
                </h6>
                <small>Marketed By Vargas Camino's International Realty</small>
              </div>
            </div>
          </div>
        </div>
        <div className="offices">
          <h3>Offices</h3>
        </div>
      </div>
    </section>
  );
};

export default Rent;
