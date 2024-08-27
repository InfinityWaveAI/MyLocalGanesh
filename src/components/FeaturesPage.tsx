// src/FeaturesPage.js

// import React from 'react';
import "./FeaturesPage.css"; // You can style the page with a separate CSS file

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <header className="features-header">
        <h1>App Features</h1>
        <p>
          Discover what makes My Local Ganesh the perfect companion for the
          Ganesh festival.
        </p>
      </header>

      <section className="feature-item">
        <div className="feature-content">
          <h2>Share Local Ganesh Festival Information</h2>
          <p>
            Our app allows you to easily share detailed information about your
            local Ganesh festival. Whether it's the details of the idol, the
            location, events and pujas, or donations made, you can share it all
            with the community.
          </p>
        </div>
        <div className="feature-image">
          <img src="img/ganeshtaking.png" alt="Share Festival Information" />
        </div>
      </section>

      <section className="feature-item">
        <div className="feature-content">
          <h2>Like and Discover Top Trending Idols</h2>
          <p>
            Engage with the community by liking your favorite Ganesh idols. Our
            app showcases the top trending Ganesh idols in your locality based
            on community interactions, making it easy to discover the most
            popular ones.
          </p>
        </div>
        <div className="feature-image">
          <img src="img/trending.png" alt="Trending Ganesh Idols" />
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
