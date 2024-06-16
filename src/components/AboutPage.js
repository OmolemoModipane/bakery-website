import React from 'react';
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="about-us-container">
        <div style={{ width: '60%' }}>
          <div className="about-us-text">
            <p>In a world where every bite tells a story, we're writing a new chapter. One that's filled with the warmth of freshly baked goods, the comfort of familiar flavors, and the joy of sharing moments with the ones you love.</p>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <h2>Our Vision</h2>
              <p>At Omo's Cakery, our vision is to become the sweetest destination in town, where every bite is a delight and every moment is a celebration. We envision a future where our bakery is a warm and welcoming hub, where friends and family gather to share laughter, love, and of course, delicious treats. In the next year, we aim to continue perfecting our craft, innovating new flavors, and building a community that feels like family. We dream of being the go-to bakery for life's special moments, from birthdays to weddings, and everything in between. With passion, dedication, and a pinch of sugar, we're writing a recipe for success that will make our customers feel like they're part of something truly special.</p>
            </div>
            <div className="grid-item">
              <h2>Our Mission</h2>
              <p>To craft delicious treats that bring people together, and to provide exceptional customer service that makes every moment a little more special.</p>
            </div>
          </div>
        </div>
        <div style={{ width: '40%' }}>
          <div className="image-container">
            <img src="https://i.pinimg.com/564x/31/26/d8/3126d86acd7975b2a4628b214279d440.jpg" alt="" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;