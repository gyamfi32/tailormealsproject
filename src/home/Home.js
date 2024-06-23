import React from "react";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './Home.css';


const Home = () => {
  return (
    <div className="home-page">
      <main className="main-content">
      <h1>Welcome to Tailor Meals</h1>
      <p>
        This is the homepage. Use the navigation bar to explore other sections.
      </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
