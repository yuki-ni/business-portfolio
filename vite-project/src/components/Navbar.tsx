import React from "react";
import "./Navbar.css";
import Logo from "../assets/pinedalogo.jpg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Pineda Music Logo" className="logo" />
        <h1>Pineda Music Tutorial</h1>
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
