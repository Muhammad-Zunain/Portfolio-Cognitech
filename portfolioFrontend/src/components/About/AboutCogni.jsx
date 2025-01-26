import React from "react";
import { Link } from "react-router-dom";

import "./AboutCogni.css";

import About1 from "../../assets/about1.png";

const AboutCogni = () => {
  return (
    <>
      <div className="about-main-wrapper">
        <div className="about-wrapper">
          <div className="about-content-wrapper">
            <div className="about-content">
              <div className="about-item">
                <span className="about-line"></span>
                <p>About Congnitech</p>
              </div>
              <h2 style={{ color: "#1e143b" }}>
                Journey leading Software Development Partner
              </h2>
              <div className="about-cognitech">
                <div className="about-exp">
                  <span>
                    <i class="fa-solid fa-arrow-up-long"></i>
                  </span>
                  <h1>4</h1>
                  <p>Years Experience</p>
                </div>

                <p style={{ color: "#1e143b" }}>
                Cognitech Labs is a leading software development company specializing in web and mobile solutions tailored to your business needs. We combine innovation and precision to deliver impactful, scalable, and user-centric digital experiences. Our mission is to empower businesses to thrive in the digital era through cutting-edge technology.
                </p>
              </div>
              <button>
                <span className="top"></span>
                <Link to="" className="primary-button">
                  Learn More About
                </Link>
                <span className="bottom"></span>
              </button>
            </div>
            <img src={About1} alt="" className="about-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCogni;
