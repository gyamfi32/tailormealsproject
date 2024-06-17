import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo (1).png";
import { Link } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar
      className="navbar"
      expand="expand-lg"
      bg="body-tertiary"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Tailor Meals"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />{" "}
          Tailor Meals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-link active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              Meal Planning
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              Nutritional Info
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              Recipe Search
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              User Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              Login / Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
