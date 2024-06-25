import React from "react";
import Footer from '../Components/Footer/Footer';
import './Home.css';


const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1> Welcome to ailor Meals</h1>
          <p>Delicious, Customized Meals to cater for your health needs.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
