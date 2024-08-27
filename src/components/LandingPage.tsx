// src/LandingPage.js

// import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // You can style the page with a separate CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">My Local Ganesh</h1>
          <ul className="nav-links">
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Celebrate Together, Share the Spirit</h2>
          <p>
            Join your community and stay connected during the Ganesh festival.
            Share and discover local Ganesh idol celebrations and activities
            with ease.
          </p>
          <Link to="/download" className="cta-button">
            Download the App
          </Link>
        </div>
        <div className="hero-image">
          <img src="img/festival.png" alt="Ganesh Festival" />
        </div>
      </section>

      <section className="features-section">
        <h3>Why Choose My Local Ganesh?</h3>
        <div className="features">
          <div className="feature-item">
            <img src="img/community.png" alt="Community" />
            <h4>Community Driven</h4>
          </div>
          <div className="feature-item">
            <img src="img/share.png" alt="Share" />
            <h4>Easy Sharing</h4>
          </div>
          <div className="feature-item">
            <img src="img/bell.png" alt="Notifications" />
            <h4>Stay Updated</h4>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 My Local Ganesh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
