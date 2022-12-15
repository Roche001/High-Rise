import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Top = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="nav">
      <Container className="navbar">
        <Navbar.Brand>
          <Link to="/">
            <div className="logo">
              <img src="./assets/logo.png" alt="Company-logo" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle"
        />

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
              <Link to="/Sell" className="link">
                <li>Submit</li>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
