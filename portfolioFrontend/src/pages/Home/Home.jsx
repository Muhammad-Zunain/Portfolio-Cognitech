import React from "react";
import { Link } from "react-router-dom";

import AboutCogni from "../../components/About/AboutCogni";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
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
import Accordion from "../../components/FAQ/Accordion";

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

          <p className="hero-title">TRANSFORMING IDEAS INTO SCALABLE SOFTWARE SOLUTIONS</p>

          <div className="hero-body">
            <div className="main-body-header">
              <h1>
              {/* Your Concept, Our Innovation – Together, We Build Excellence. */}
                Your <span>Concept,</span> <br style={{ display: "none" }} />{" "}
                Our <span>Innovation</span>
              </h1>
              <h1>
              Together, We <span> Build</span>
                <br style={{ display: "none" }} /> and
              </h1>
              <h1>Excellence.</h1>
            </div>
            <div className="main-body-content">
              <p>
              Empowering your vision with our all-encompassing software development and scaling services.
              </p>
            </div>
          </div>

          <button className=" hero-button">
            <span className="top"></span>
            <Link to="" className="primary-button">
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
            Explore a diverse range of services designed to bring your ideas to life and empower your business with cutting-edge solutions.
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
                <p style={{ textAlign: "justify" }}>
                Empowering your projects with a team of experts who bring precision and creativity to the table. We ensure seamless integration of ideas and execution, maximizing efficiency and delivering tailored solutions for your business needs.
                </p>
                <div className="services">
                  <span>Mern</span>
                  <span>Mean</span>
                  <span>Django</span>
                  <span>...</span>
                </div>

                <button className=" hero-button">
                  <span className="top"></span>
                  <Link to="" className="primary-button">
                    Read More <span> &rarr;</span>
                  </Link>
                  <span className="bottom"></span>
                </button>
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
                <p style={{ textAlign: "justify" }}>
                  We turn your ideas into eye-catching designs. Our focus is on
                  making designs that users love, with interfaces that are easy
                  to understand. This not only connects with your audience but
                  also enhances how people see your brand.
                </p>
                <div className="services">
                  <span>Figma</span>
                  <span>...</span>
                </div>

                <button className=" hero-button">
                  <span className="top"></span>
                  <Link to="" className="primary-button">
                    Read More <span> &rarr;</span>
                  </Link>
                  <span className="bottom"></span>
                </button>
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
                We leverage Flutter to develop high-performance, cross-platform mobile applications that work seamlessly across devices. From startups to enterprises, our mobile solutions are designed to cater to a variety of industries, ensuring scalability, flexibility, and superior performance.
                </p>
                <div className="services">
                  <span>Flutter</span>
                  <span>...</span>
                </div>

                <button className=" hero-button">
                  <span className="top"></span>
                  <Link to="" className="primary-button">
                    Read More <span> &rarr;</span>
                  </Link>
                  <span className="bottom"></span>
                </button>
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
                We create visually stunning and user-friendly front-end solutions that deliver seamless experiences across all devices. Our team focuses on responsive design, intuitive interfaces, and high performance, ensuring your website or app looks great and functions flawlessly.{" "}
                </p>
                <div className="services">
                  <span>React js</span>
                  <span>Next js</span>
                  <span>Angular</span>
                  <span>...</span>
                </div>

                <button className=" hero-button">
                  <span className="top"></span>
                  <Link to="" className="primary-button">
                    Read More <span> &rarr;</span>
                  </Link>
                  <span className="bottom"></span>
                </button>
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
                We build robust back-end systems that drive your digital solutions with speed, security, and scalability. Using the latest technologies, we ensure seamless data handling and top performance, enabling your operations to grow and adapt, whether you're a small business or a global enterprise.
                </p>
                <div className="services">
                  <span>Node js</span>
                  <span>Python</span>
                  <span>...</span>
                </div>

                <button className=" hero-button">
                  <span className="top"></span>
                  <Link to="" className="primary-button">
                    Read More <span> &rarr;</span>
                  </Link>
                  <span className="bottom"></span>
                </button>
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
                  Time to make sure more people notice you online. Our smart
                  digital marketing plans improve how visible and engaging you
                  are, leading to more people choosing your brand. This helps
                  your business grow and stay competitive in the digital world.
                </p>
                <div className="services">
                  <span>SEO</span>
                  <span>...</span>
                </div>

                <button className=" hero-button">
                  <span className="top"></span>
                  <Link to="" className="primary-button">
                    Read More <span> &rarr;</span>
                  </Link>
                  <span className="bottom"></span>
                </button>
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
