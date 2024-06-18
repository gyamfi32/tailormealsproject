import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '../../home';
import LoginRegister from '../../Components/auth/loginRegister/LoginRegister'
import MealPlanning from '../MealPlanning/MealPlanning';
import NutritionalInfo from '../NutritionalInfo/NutritionalInfo';
import RecipeSearch from '../RecipeSearch/RecipeSearch';
import UserProfile from '../UserProfile/UserProfile';

const Header = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login/Register</Nav.Link>
                <Nav.Link as={Link} to="/meal-planning">Meal Planning</Nav.Link>
                <Nav.Link as={Link} to="/nutritional-info">Nutritional Info</Nav.Link>
                <Nav.Link as={Link} to="/recipe-search">Recipe Search</Nav.Link>
                <Nav.Link as={Link} to="/user-profile">User Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/meal-planning" element={<MealPlanning />} />
          <Route path="/nutritional-info" element={<NutritionalInfo />} />
          <Route path="/recipe-search" element={<RecipeSearch />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;

