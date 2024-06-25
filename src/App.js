import React from "react";
import "./App.css";
import MyNavbar from "./Components/Navbar/Navbar.js";
import Home from "./home/Home.js";
import Footer from "./Components/Footer/Footer.js";
import MealPlanning from "./Components/MealPlanning/MealPlanning.js";
import NutritionalInfo from "./Components/NutritionalInfo/NutritionalInfo.js";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch.js";
import UserProfile from "./Components/UserProfile/UserProfile.js";
import LoginRegister from "./Components/auth/loginRegister/LoginRegister.jsx";


function App() {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className="App">
      <MyNavbar onLinkClick={handleLinkClick} />
      <div className="content">
         <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
