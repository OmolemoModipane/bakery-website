import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <img src={logo} alt="Bakery Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;