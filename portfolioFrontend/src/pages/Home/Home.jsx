import React from "react";
import { Link } from "react-router-dom";

import AboutCogni from "../../components/About/AboutCogni";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Accordion from "../../components/FAQ/Accordion";

import react from "../../assets/react-logo.png";
import python from "../../assets/python-logo.png";
import mongo from "../../assets/mongo-logo.png";
import sql from "../../assets/sql-logo.png";
import flutter from "../../assets/flutter-logo.png";
import node from "../../assets/node-logo.png";
import tailwind from "../../assets/tailwind-logo.png";
import wordpress from "../../assets/wordpress-logo.png";
import django from "../../assets/django-logo.png";

import "./Technology.css";
import "./Home.css";
import ServicesOffer from "../../components/ServicesOffer/ServicesOffer";

const Home = () => {
  const Logo = [
    react,
    python,
    mongo,
    sql,
    flutter,
    node,
    tailwind,
    wordpress,
    django,
  ];
  return (
    <>
      <div className="container home-wrapper">
        <div className="hero-container">
          <p className="hero-title">
            TRANSFORMING IDEAS INTO SCALABLE SOFTWARE SOLUTIONS
          </p>

          <div className="hero-body">
            <div className="main-body-header">
              <h1>
                Your <span> Concept,</span>
                Our <span> Innovation </span>
                Together, We <span> Build</span> and Excellence.
              </h1>
            </div>
            <div className="main-body-content">
              <p>
                Empowering your vision with our all-encompassing software
                development and scaling services.
              </p>
            </div>
          </div>

          <button className=" hero-button">
            <span className="top"></span>
            <Link to="/" className="primary-button">
              See My Work <span> &rarr;</span>
            </Link>
            <span className="bottom"></span>
          </button>
        </div>

        <AboutCogni />
        <div className="main-service-wrapper">
          <div className="service-header">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
              Explore a diverse range of services designed to bring your ideas
              to life and empower your business with cutting-edge solutions.
            </p>
          </div>
          <ServicesOffer />
        </div>

        <ChooseUs />

        {/* <Accordion /> */}
      </div>
      
      <div className="tech-wrapper">
        <div className="tech-header">
          <h2>
            <span>Technologies</span> We Work With{" "}
          </h2>
        </div>
        <div className="marquee__about__tech">
          <div className="marquee">
            <div className="marquee__inner">
              {Logo.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="marquee__item">
                    <img className="tech-logo" src={item} alt="Logo" />
                  </div>
                  <div className="marquee__line"></div>
                </React.Fragment>
              ))}
              {Logo.map((val, index) => (
                <React.Fragment key={`dup-${index}`}>
                  <div className="marquee__item">
                    <img className="tech-logo" src={val} alt="Logo" />
                  </div>
                  <div className="marquee__line"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
