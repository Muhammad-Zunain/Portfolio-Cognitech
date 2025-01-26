import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

import "./Navbar.css";

// <----------------- Import Images ----------------->
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import hamburgerCross from "../../assets/hamburger-cross.png";

// <----------------- Import Global States ----------------->
import { useProjectStore } from "../../store/useProjectStore";

const Navbar = ({ handleClick, open }) => {
  const [HumOpen, setHumOpen] = useState(false); // Set Hamburger State
  const {
    serviceName,
    setServiceName,
    setProjects,
    getAllCategories,
    allCategories,
  } = useProjectStore();

  const toggleMenu = () => setHumOpen(!HumOpen); // Change Hamburger state

  const handleServiceName = (name) => {
    setServiceName(name);
    const generatedSlug = slugify(name, { lower: true });
    setProjects(generatedSlug);
    
  };

  

  useEffect(() => {
    getAllCategories();
  }, []);

  

  return (
    <>
      <div // Service Overlay Implementation
        className="overlay"
        onClick={() => {
          handleClick();
        }}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "opacity 0.5s, visibility 0.5s",
        }}
      ></div>

      {/* Navbar Wrapper */}
      <nav className="nav__bar container">
        <div className="nav__logo">
          <Link to="">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* hamburger Image */}
        <div className="hamburger" onClick={toggleMenu}>
          <img src={hamburger} alt="Open Menu" width="100%" height="100%" />
        </div>

        {/* Hamburger Implementation */}
        <ul className={`nav__item-v ${HumOpen ? "nav__item--open" : ""}`}>
          <div className="hamburger-cross" onClick={toggleMenu}>
            <img
              src={hamburgerCross}
              alt="Close Menu"
              width="100%"
              height="100%"
            />
          </div>
          <div className="logo">
            <Link to="">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <li className="navLink">
            <span className="navitem_line"></span>
            <span className="Number">01</span>
            <Link to="" className="link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li to="" className="navLink">
            <span className="navitem_line"></span>
            <span className="Number">02</span>
            <Link className="link">Portfolio</Link>
          </li>

          <li className="navLink">
            <span className="navitem_line"></span>
            <span className="Number">04</span>
            <Link
              className="link"
              onClick={() => {
                toggleMenu();
                setTimeout(() => {
                  handleClick();
                }, 500);
              }}
            >
              Service
            </Link>
          </li>
          <li className="navLink">
            <span className="navitem_line"></span>
            <span className="Number">05</span>
            <Link to="/About" className="link" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="navLink">
            <span className="navitem_line"></span>
            <span className="Number">05</span>
            <Link to="/Contact" className="link" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Main Navbar Implementation */}
        <ul className="nav__item">
          <div className="nav__links">
            <Link to="" className="nav-link">
              Home
            </Link>
            <Link to="" className="nav-link">
              Portfolio
            </Link>

            <Link
              className="nav-link"
              onClick={() => {
                handleClick();
              }}
            >
              Service
            </Link>

            <Link to="/About" className="nav-link">
              About Us
            </Link>
          </div>

          <button className="primary-button">
            <span className="top"></span>
            <Link to="/Contact" className="primary-button-text">
              Let's Chat
            </Link>
            <span className="bottom"></span>
          </button>
        </ul>
      </nav>

      {/* Services Implementation */}
      <ul
        onClick={(e) => e.stopPropagation()}
        className="dropdown-menu"
        style={{
          left: open ? "0%" : "-200%",
        }}
      >
        <div className="side__nav__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {allCategories.map((category, index) => (
          <li key={index}>
            <i className="fa-solid fa-diamond"></i>
            <Link
              to={`/service/${slugify(category.extra.name, { lower: true })}`}
              onClick={() => {
                handleClick();
                handleServiceName(category.extra.name);
              }}
            >
              {category.extra.name}
            </Link>
          </li>
        ))}
        
      </ul>
    </>
  );
};

export default Navbar;
