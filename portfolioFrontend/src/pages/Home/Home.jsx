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
import ServiceCustomDevelopment from "../../assets/service5.png";
import ServiceMobileDevelopment from "../../assets/service4.png";
import ServiceBackendDevelopment from "../../assets/service3.png";
import ServiceFrontendDevelopment from "../../assets/service2.png";
import ServiceUIDevelopment from "../../assets/service1.png";
import ServiceCigitalMarketing from "../../assets/service6.png";

import "./Technology.css";
import "./Service.css";
import "./Home.css";

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
                Together, We <span> Build</span> and
              Excellence.</h1>
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

          <div className="service-provide">
            <div className="service-main">
              <div className="service-content">
                <img
                  src={ServiceCustomDevelopment}
                  className="service-technology-img"
                  alt=""
                />
                <h3>Custom Development</h3>
                <p>
                  Empowering your projects with expert precision and creativity,
                  we deliver tailored solutions and seamless execution to
                  maximize efficiency and meet your business needs.
                </p>
                <div className="services">
                  <span>Mern</span>
                  <span>Mean</span>
                  <span>Django</span>
                  <span>...</span>
                </div>
              </div>
            </div>
            <div className="service-main">
              <div className="service-content">
                <img
                  src={ServiceUIDevelopment}
                  className="service-technology-img"
                  alt=""
                />
                <h3>UI/UX Design</h3>
                <p>
                  We turn your ideas into eye-catching designs. Our focus is on
                  making designs that users love, with interfaces that are easy
                  to understand. This not only connects with your audience but
                  also enhances how people see your brand.
                </p>
                <div className="services">
                  <span>Figma</span>
                  <span>...</span>
                </div>
              </div>
            </div>
            <div className="service-main">
              <div className="service-content">
                <img
                  src={ServiceMobileDevelopment}
                  className="service-technology-img"
                  alt=""
                />
                <h3>Mobile Development</h3>
                <p>
                  We use Flutter to create high-performance, cross-platform
                  mobile apps that work seamlessly on all devices. Our scalable
                  and flexible solutions cater to industries of all sizes, from
                  startups to enterprises.
                </p>
                <div className="services">
                  <span>Flutter</span>
                  <span>...</span>
                </div>
              </div>
            </div>
            <div className="service-main">
              <div className="service-content">
                <img
                  src={ServiceFrontendDevelopment}
                  className="service-technology-img"
                  alt=""
                />
                <h3>Front-end Development</h3>
                <p>
                  We craft visually stunning, responsive front-end solutions
                  with intuitive interfaces, delivering seamless experiences and
                  flawless performance across all devices.
                </p>
                <div className="services">
                  <span>React js</span>
                  <span>Next js</span>
                  <span>Angular</span>
                  <span>...</span>
                </div>
              </div>
            </div>
            <div className="service-main">
              <div className="service-content">
                <img
                  src={ServiceBackendDevelopment}
                  className="service-technology-img"
                  alt=""
                />
                <h3>Back-end Development</h3>
                <p>
                  We build robust, secure, and scalable back-end systems that
                  ensure seamless performance and data handling, empowering
                  businesses to grow and adapt with the latest technologies.
                </p>
                <div className="services">
                  <span>Node js</span>
                  <span>Python</span>
                  <span>...</span>
                </div>
              </div>
            </div>
            <div className="service-main">
              <div className="service-content">
                <img
                  src={ServiceCigitalMarketing}
                  className="service-technology-img"
                  alt=""
                />
                <h3>Digital Markeing</h3>
                <p>
                  Boost your online presence with our smart digital marketing
                  plans. We enhance visibility and engagement, attracting more
                  customers to your brand and driving business growth in the
                  digital landscape.
                </p>
                <div className="services">
                  <span>SEO</span>
                  <span>...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ChooseUs />
        <Accordion />
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
