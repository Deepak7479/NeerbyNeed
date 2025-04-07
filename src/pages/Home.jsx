import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to MyLocalBazar</h1>
        <p>Your one-stop shop for all local needs.</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
