import React from "react";
import "./Rent.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Rent = () => {
  const seeMore = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See More
    </Tooltip>
  );
  return (
    <section id="rent" className="container">
      <div className="rent-townhomes">
        <h3>Townhomes</h3>
      </div>
      <div className="rent-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/York1.jpg" alt="House1" />
          <Card.Body>
            <div className="card-body"></div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Rent;
