import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/brainlogo.png';
import aboutBanner from "../../assets/about-banner.jpg";
import "./About.css";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Accordion from "../../components/FAQ/Accordion";

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="f-header">
        <img src={aboutBanner} alt="" />
        <div className="f-wrapper" data-aos="fade-up">
          <h2>About Us</h2>
          <p>Kodonex specializes in delivering innovative, scalable, and user-centric software solutions to empower businesses in the digital era</p>
        </div>
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

              We empower businesses with innovative technology to lead their industries. By collaborating with forward-thinking tech teams, we deliver tailored solutions from project management to software development, ensuring constant growth. Our global network fosters talent and provides affordable, customized IT solutions, keeping our clients at the forefront of innovation.
            <br /> We leverage skilled talent to deliver affordable, tailored IT solutions that drive innovation and keep our clients ahead of the competition.
          </p>
        </div>

        <div className="about-cognitech-main" data-aos="flip-down">
          <div className="about-item">
            <span className="about-line"></span>
            <p style={{ fontWeight: "500" }}>About Congnitech</p>
          </div>
          <p>
            With over 4 years of proven expertise, we are a leading partner for
            businesses seeking to excel in today's digital landscape.
            Kodonex is a leading software development company specializing in web and mobile solutions tailored to your business needs. We combine innovation and precision to deliver impactful, scalable, and user-centric digital experiences. Our mission is to empower businesses to thrive in the digital era through cutting-edge technology.
          </p>
        </div>

        <ChooseUs/>
        {/* <Accordion/> */}

      </div>



      <div class="about__contact__box">
        <div class="about__box1 container">
          <h2>
            Contact us for further information. We specialize in development
            and are here to assist you anytime.
          </h2>

          <div class="cont-left">
            <i class="fa-solid fa-phone"></i>
            <p class="call">CONTACT US NOW</p>
            <h2 class="ph-no">+92 306 2860258</h2>
            <button>
              <span className="top"></span>
              <Link to="/Contact" className="primary-button">
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
