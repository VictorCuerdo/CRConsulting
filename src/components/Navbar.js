import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#products">Products</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#enterprise">Enterprise</a></li>
        <li><a href="#doc">Doc</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><button className="contact-btn">Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
