import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./Components/Navbar/Navbar.js";
import Home from "./home/Home.js";
import MealPlanning from "./Components/MealPlanning/MealPlanning.js";
import NutritionalInfo from "./Components/NutritionalInfo/NutritionalInfo.js";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch.js";
import UserProfile from "./Components/UserProfile/UserProfile.js";
import LoginRegister from "./Components/auth/loginRegister/LoginRegister.jsx";


function App() {
  return (
    <div className="App">
        <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MealPlanning" element={<MealPlanning />} />
        <Route path="/NutritionalInfo" element={<NutritionalInfo />} />
        <Route path="/RecipeSearch" element={<RecipeSearch />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
