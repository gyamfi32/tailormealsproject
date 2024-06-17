
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import LoginRegister from "./Components/auth/loginRegister/LoginRegister.jsx";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./home";

import MealPlanning from "./Components/MealPlanning/MealPlanning.js";
import NutritionalInfo from "./Components/NutritionalInfo/NutritionalInfo";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch.js";
import UserProfile from "./Components/UserProfile/UserProfile";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/login" component={<LoginRegister />} />
          <Route path="/meal-planning" component={<MealPlanning />} />
          <Route path="/nutritional-info" component={<NutritionalInfo />} />
          <Route path="/recipe-search" component={<RecipeSearch />} />
          <Route path="/user-profile" component={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
