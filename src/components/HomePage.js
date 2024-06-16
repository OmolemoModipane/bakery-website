import React from 'react';
import logo from '../images/logo.png';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="page">
      <h1>Welcome to Omo's Cakery!</h1>
      <img src={logo} alt="Bakery Logo" />
      <p><em>"In the heart of our bakery beats a passion for creating moments that matter. Moments that are savored, shared, and remembered. Come indulge in the sweet life, and let us be your guide."</em></p>
    </div>
  );
};

export default HomePage;