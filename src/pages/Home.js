import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("visible");
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section text-center" style={{ 
        backgroundImage: `url('/images/supermarket.jpg')`
      }}>
        <div className="hero-overlay">
          <h1 className="fade-in">Welcome to SuperMarket</h1>
          <p className="fade-in">Your one-stop shop for all your daily needs!</p>
          <p className="fade-in">Explore our wide range of products and enjoy seamless shopping.</p>
          <a href="/products" className="btn btn-primary btn-lg fade-in">
            Shop Now
          </a>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 fade-in">
            <h2>Fresh Produce</h2>
            <p>We offer the freshest fruits and vegetables sourced directly from local farms.</p>
          </div>
          <div className="col-md-4 fade-in">
            <h2>Great Deals</h2>
            <p>Enjoy exclusive discounts and deals on your favorite products every week.</p>
          </div>
          <div className="col-md-4 fade-in">
            <h2>Fast Delivery</h2>
            <p>Get your groceries delivered to your doorstep in no time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;