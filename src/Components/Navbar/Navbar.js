import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo (1).png";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavbar  ()  {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Navbar
      className="navbar"
      expand="expand-lg"
      bg="body-tertiary"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Tailor Meals"
            width="30"
            height="24"
            className="d-inline-block align-top"
          />{" "}
          Tailor Meals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="">
          <Nav className="navbar-nav">
            <Nav.Link href="/" reloadDocument className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link 
            onClick={() => handleLinkClick("/MealPlanning")} className="nav-item">
              Meal Planning
            </Nav.Link>
            <Nav.Link 
            onClick={() => handleLinkClick("/NutritionalInfo")} className="nav-item">
              Nutritional Info
            </Nav.Link>
            <Nav.Link 
            conClicjto="/RecipeSearch" reloadDocument className="nav-item">
              Recipe Search
            </Nav.Link>
            <Link to="/UserProfile" reloadDocument className="nav-item">
              User Profile
            </Link>
            <Nav.Link href="/LoginRegister/" reloadDocument className="nav-item">
              Login / Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};

export default MyNavbar;
