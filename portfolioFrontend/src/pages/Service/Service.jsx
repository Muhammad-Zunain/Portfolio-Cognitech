import { useProjectStore } from "../../store/useProjectStore.js";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import aboutService from "../../assets/service-bg-image1.jpg";
import aboutTech from "../../assets/s1Bg.png";
import Accordion from "../../components/FAQ/Accordion";
import "./Service.css";
import KodonexLoading from "../../components/Loading/KodonexLoading.jsx";

import {
  WebServiceContent,
  WebServices,
  WeballTechIcons,
  WebFAQs,
} from "./WebServiceData.jsx";

import {
  AppServiceContent,
  AppServices,
  AppallTechIcons,
  AppFAQs,
} from "./AppServicesData.jsx";

function Service() {
  const containerStyles = {
    backgroundColor: "#1e143b",
    borderRadius: "8px",
    marginTop: "2rem",
    padding: "8rem 0 8rem 0",
    position: "relative",
    overflow: "hidden",
    marginBottom: "4rem",
  };

  const [ServiceContent, setServiceContent] = useState();
  const [Services, setServices] = useState();
  const [allTechIcons, setAllTechIcons] = useState();
  const [FAQs, setFAQs] = useState();
  const { serviceName, setServiceName } = useProjectStore();
  const { serviceNameUrl } = useParams();

  useEffect(() => {
    if (ServiceContent || Services || allTechIcons || FAQs) {
      AOS.init();
    }
  }, [ServiceContent]);

  useEffect(() => {
    setServiceName(serviceNameUrl);
  }, []);

  useEffect(() => {
    if (serviceName === "web-development") {
      setServiceContent(WebServiceContent);
      setServices(WebServices);
      setAllTechIcons(WeballTechIcons);
      setFAQs(WebFAQs);
    } else if (serviceName === "app-development") {
      setServiceContent(AppServiceContent);
      setServices(AppServices);
      setAllTechIcons(AppallTechIcons);
      setFAQs(AppFAQs);
    }
  }, [serviceName]);

  if (!ServiceContent || !Services || !allTechIcons || !FAQs) {
    return <KodonexLoading />;
  }

  return (
    <>
      <div className="f-header">
        <img src={ServiceContent[4].src} alt={ServiceContent[4].alt} />
        <div className="f-wrapper" data-aos="fade-up" data-aos-duration="1000">
          <h2>{ServiceContent[0].title}</h2>
          <p>{ServiceContent[0].description}</p>
        </div>
      </div>

      <div className="container" style={containerStyles}>
        <div className="service-intro-section">
          <div className="service-intro-content">
            <p className="service-intro-wrapper-1">{ServiceContent[1].title}</p>
            <p className="service-intro-wrapper-2">
              {ServiceContent[1].content1} <br />
              {ServiceContent[1].content2}
            </p>
            <h4>
              <strong>{ServiceContent[2].title}</strong>
            </h4>
            <ul className="service-intro-list">
              {ServiceContent[2].list.map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item.title}:</strong> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-intro-image" data-aos="flip-right">
            <img src={ServiceContent[3].src} alt={ServiceContent[3].alt} />
          </div>
        </div>

        <div className="about-service-section">
          <img
            src={aboutService}
            alt="About Service"
            className="about-service-img"
            data-aos="flip-up"
          />
          <div className="about-service-content">
            <h3>Experience The Difference Of Working With Excellence</h3>
            <p>
              Choose us for custom development solutions that go beyond the
              traditional. Our team of skilled professionals is passionate about
              crafting innovative solutions that are tailored to your unique
              business needs. We pride ourselves on delivering high-quality
              results, providing ongoing support, and ensuring the success of
              every project. With a focus on excellence in every step of the
              process, from concept to execution, we are committed to helping
              you achieve your goals and stand out in the competitive digital
              landscape.
            </p>
          </div>
        </div>

        <div className="main-services-offer">
          <div className="service-offer-wrapper">
            <div className="wrapper-inner">
              <span className="text-[1.5rem] tracking-wide font-semibold text-[#6e1299] md:text-3xl md:-mb-10">
                Our {ServiceContent[0].title} Services
              </span>
              <h2>Enchance your business with custom web solutions</h2>
              <p>
                We offer a wide range of services to help you build, grow, and
                scale your business. From web application development to
                e-commerce solutions, we have the expertise to bring your ideas
                to life and drive results.
              </p>
            </div>
          </div>
          <div className="service-offer">
            {Services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="services-offer-content"
                  data-aos="flip-right"
                >
                  <img src={service.image} alt="" className="service-image" />
                  <h4>{service.title}</h4>

                  <div className="services-offer-inner">
                    <p>{service.description}</p>
                  </div>
                  <button className="hero-button" style={{ zIndex: 9 }}>
                    <span className="top"></span>
                    <Link to="/Contact" className="primary-button">
                      Get In Touch
                    </Link>
                    <span className="bottom"></span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="service-technology-section">
          <div className="service-technology-content">
            <h1>
              Our Technology <br /> Stack
            </h1>
            <p>
              If you can dream it, we can build it. Our comprehensive technology
              stack spans a variety of tools and platforms, giving us the
              flexibility to create custom, high-performance solutions that
              cater to the unique needs of every client.
            </p>
          </div>
          <div className="service-technology-image">
            <img src={aboutTech} alt="" width="100%" />
          </div>
        </div>

        <div className="logo-container">
          <div className="all-logos">
            {allTechIcons?.map((skill, index) => (
              <div key={index} className="skill-icon">
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        <Accordion FAQs={FAQs} />

        <div className="service-wrapper">
          <div class="about-service-wrapper">
            <div className="about-service-inner-wrapper">
              <h2>
                Ready to Craft{" "}
                <span style={{ color: "#6E1299" }}>Digital </span> Brilliance
              </h2>
              <p>
                We deliver tailored, high-quality solutions that blend
                innovation with expertise. From design to development, we ensure
                seamless functionality, exceptional user experiences, and
                measurable impact across all digital platforms.
              </p>
              <button className="hero-button">
                <span className="top"></span>
                <Link to="/Contact" className="primary-button">
                  Contact Now
                </Link>
                <span className="bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
