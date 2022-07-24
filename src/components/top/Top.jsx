import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Top = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Property" className="link">
                <li>Property</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Listing" className="link">
                <li>Listing</li>
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
