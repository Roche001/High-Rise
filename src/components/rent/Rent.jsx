"react";
import "./Rent.css";

import { RiHome6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Rent = () => {
  return (
    <section id="rent">
      <div className="town-home">
        <h3>Exclusive Listings</h3>
      </div>
      <div className=" container rent-townhomes">
        <h3>Townhomes</h3>

        <div className="rent-container row ">
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>9631 North Bridle East Bridgewater, MA 02333</h4>
                <h5>$1400</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House1">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>2800 Leverton Cove Road, MA 01069</h4>
                <h5>$2600</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House2">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>4895 North Drive East Bridgewater, MA 05897</h4>
                <h5>$1250</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House3">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>3634 East Bridle Drive Bridgewater, MA 01557</h4>
                <h5>$1890</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House4">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="rent-container row">
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>8055 Leverton Cove Road, MA 01337</h4>
                <h5>$1550</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House5">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>4309 Bridle Drive East Bridgewater, MA 01679</h4>
                <h5>$2000</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House6">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>2800 Leverton Cove Road, MA 01069</h4>
                <h5>$2200</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House7">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="skies nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
          >
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
            <Card.Body>
              <div className="card-head">
                <h4>9631 North Bridle East Bridgewater, MA 02333</h4>
                <h5>$2400</h5>
              </div>
              <Button className="butt-on">
                <a href="Button">
                  <Link to="/House8">See More</Link>
                </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="ranches">
          <h3>Raches and Farms </h3>
        </div>
        <div className="ranches-container">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rent;
