import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiHome6Line } from "react-icons/ri";
const Top = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <div className="top-logo">
              <RiHome6Line />
            </div>
            <div className="top-text">
              <h3>High-Rise </h3>
              <p>REAL ESTATE COMPANY</p>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Rent" className="link">
                <li>Rent</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Buy" className="link">
                <li>Buy</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contacts" className="link">
                <li>Contacts</li>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
