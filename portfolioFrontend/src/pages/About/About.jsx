import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/brainlogo.png';

import "./About.css";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Accordion from "../../components/FAQ/Accordion";
const About = () => {
  return (
    <>
      <div className="f-about-header">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nulla
          nihil ea quia iste nesciunt maiores numquam at aut est?
        </p>
      </div>

      <div className="container about-wrapper">
        <div className="brain-cogni-logo">
          <img src={logo} alt="" />
        </div>

        <div className="about-cogi-vision">
          <div>
            <h3>Our Vision</h3>
            <div className="about-cogi-head">
              <h2>Shaping Your Future with,</h2>
              <h2 className="text-outline-aboutCogni">
                Cutting-Edge Technological Solutions
              </h2>
            </div>
          </div>
          <p>
            Our mission is to empower businesses with innovative technology,
            helping them lead their industries. We collaborate with
            forward-thinking tech teams to offer tailored solutions, from
            project management to software development and implementation,
            ensuring constant growth and evolution.
            <br /> Our global network fosters talent and provides affordable,
            customized IT solutions, keeping our clients at the cutting edge of
            innovation.
          </p>
        </div>

        <div className="about-cognitech-main">
          <div className="about-item">
            <span className="about-line"></span>
            <p style={{ fontWeight: "500" }}>About Congnitech</p>
          </div>
          <p>
            With over 6 years of proven expertise, we are a leading partner for
            businesses seeking to excel in today's digital landscape.
            Specializing in front-end and back-end development, app development,
            SEO, and digital marketing, we craft innovative, tailored solutions
            that elevate our clients to industry leaders. Our skilled team
            seamlessly integrates technology and strategy, from building dynamic
            web platforms and high-performance apps to driving impactful digital
            growth. We empower your business to stay ahead of the curve,
            ensuring success in an ever-evolving digital world.
          </p>
        </div>

        <ChooseUs/>
        <Accordion/>

      </div>



      <div class="about__contact__box">
        <div class="about__box1 container">
          <h2>
            Contact us for further information. We specialize in development
            abouts and are here to assist you anytime.
          </h2>

          <div class="cont-left">
            <i class="fa-solid fa-phone"></i>
            <p class="call">CONTACT US NOW</p>
            <h2 class="ph-no">1 200 333 800</h2>
            <button>
              <span className="top"></span>
              <Link to="" className="primary-button">
                Contact Us
              </Link>
              <span className="bottom"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
