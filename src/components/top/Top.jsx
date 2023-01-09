import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Top = () => {
  return (
    <Navbar expand="lg" className="nav py-0" fixed="top">
      <Container className="nav-one">
        <Link to="/" className="link-one">
          <Navbar.Brand className="logo">
            <img src="./assets/logo.png" alt="logo" loading="lazy" />
          </Navbar.Brand>{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link-one">
                <h6>Home he</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Rent" className="link-one link">
                <h6>Rent</h6>{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Buy" className="link-one">
                <h6>Buy</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Submit" className="link-one">
                <h6>Submit</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Rent" className="link-one">
                <h6>Airbnb</h6>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
