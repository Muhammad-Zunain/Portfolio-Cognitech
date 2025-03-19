import React, { useRef, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import aboutService from "../../assets/service-bg-image1.jpg";
import aboutService1 from "../../assets/image2.jpeg";
import aboutTech from "../../assets/s1Bg.png";
import "swiper/css";
import "swiper/css/navigation";
import "./service.css";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

import { useProjectStore } from "../../store/useProjectStore";

import webBanner from "../../assets/webBanner.webp";
import { webServices, allTechIcons } from "./WebServiceData.jsx";

function Service() {
  const { serviceName } = useParams();
  const mainSwiperRef = useRef(null);
  const imageSwiperRefs = useRef([]);
  const { projects, setServiceName, setProjects } = useProjectStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  const containerStyles = {
    backgroundColor: "#1e143b",
    borderRadius: "8px",
    marginTop: "2rem",
    padding: "8rem 0 8rem 0",
    position: "relative",
    overflow: "hidden",
    marginBottom: "4rem",
  };

  useEffect(() => {
    setProjects(serviceName);
  }, []);

  useEffect(() => {
    setServiceName(serviceName);
    setProjects(serviceName);
  }, [serviceName]);

  if (!projects || Object.keys(projects).length === 0) {
    return "Loading...";
  }

  return (
    <>
      {projects ? (
        <>
          <div className="f-service-header">
            <img src={webBanner} alt="" />
            {/* <h2>{projects[0].skill.name}</h2> */}
            {/* <p style={{ textAlign: "center" }}>
              {projects[0].category.description}
            </p> */}
            <div className="f-service-wrapper">
              <h2>Web Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id tempore fugit incidunt repudiandae modi ab nemo fuga quibusdam consequatur!</p>
            </div>
          </div>

          <div className="container" style={containerStyles}>
            <div className="service-intro-section">
              <div className="service-intro-content">
                <p className="service-intro-wrapper-1">Overview</p>
                <p className="service-intro-wrapper-2">
                  Every app we build is engineered to drive measurable business
                  outcomes. <br />
                  With expertise spanning cutting-edge native development,
                  cross-platform solutions, and enterprise-grade systems, our
                  engineers transform bold ideas into dynamic mobile
                  experiences.
                </p>
                <h4>
                  <strong>What we are good at:</strong>
                </h4>
                <ul className="service-intro-list">
                  <li>
                    <p>
                      <strong>Mobile-First Architecture:</strong> Developing
                      robust, secure applications to streamline operations and
                      enhance productivity for businesses of all sizes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mobile-First Architecture:</strong> Ensuring apps
                      are fast, lightweight, and responsive, even under heavy
                      user loads.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mobile-First Architecture:</strong> Building
                      tailored apps to address specific business challenges and
                      deliver measurable results.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mobile-First Architecture:</strong> Leveraging
                      agile methodologies to build scalable, responsive
                      solutions that align with mobile-first strategies.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Integration Expertise: </strong> Seamlessly
                      connecting mobile apps with third-party services, APIs,
                      and backend systems.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="service-intro-image">
                <img src={aboutService1} alt="" />
              </div>
            </div>

            <div className="about-service-section">
              <img
                src={aboutService}
                alt="About Service"
                className="about-service-img"
              />
              <div className="about-service-content">
                <h3>Experience The Difference Of Working With Excellence</h3>
                <p>
                  Choose us for custom development solutions that go beyond the
                  traditional. Our team of skilled professionals is passionate
                  about crafting innovative solutions that are tailored to your
                  unique business needs. We pride ourselves on delivering
                  high-quality results, providing ongoing support, and ensuring
                  the success of every project. With a focus on excellence in
                  every step of the process, from concept to execution, we are
                  committed to helping you achieve your goals and stand out in
                  the competitive digital landscape.
                </p>
              </div>
            </div>

            {/* <div className="work-wrapper">
              <Swiper
                ref={mainSwiperRef}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-wrapper">
                      <div className="work-wrapper-content">
                        <h1 className="text-outline">0{index + 1}</h1>
                        <h2>{project.title}</h2>
                        <p style={{ textAlign: "justify" }}>
                          {isExpanded || project.description.length <= maxLength
                            ? project.description
                            : `${project.description.slice(0, maxLength)}...`}
                        </p>
                        {project.description.length > maxLength && (
                          <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="read-more-btn"
                          >
                            {isExpanded ? "Read Less <<" : "Read More >>"}
                          </button>
                        )}
                        <div className="tech-div">
                          {project.technologies.map((tech, idx) => (
                            <p key={idx}>
                              {tech}
                              {idx < project.technologies.length - 1
                                ? ", "
                                : ""}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="work-wrapper-images">
                        <Swiper
                          ref={(el) => (imageSwiperRefs.current[index] = el)}
                          spaceBetween={10}
                          slidesPerView={1}
                          navigation={{
                            nextEl: `.inner-swiper-button-next-${index}`,
                            prevEl: `.inner-swiper-button-prev-${index}`,
                          }}
                          modules={[Navigation]}
                          className="project-images-swiper"
                        >
                          {project.images.map((image, imgIdx) => (
                            <SwiperSlide key={imgIdx}>
                              <img
                                className="swiper-image"
                                src={image}
                                alt={`${project.alt} ${imgIdx + 1}`}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className="image-nav">
                          <div
                            className={`inner-swiper-button-prev inner-swiper-button-prev-${index}`}
                          >
                            <i className="bx bx-chevron-left"></i>
                          </div>
                          <div
                            className={`inner-swiper-button-next inner-swiper-button-next-${index}`}
                          >
                            <i className="bx bx-chevron-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-prev swiper-button-prev"></div>
              <div className="swiper-button-next swiper-button-next"></div>
            </div> */}

            <div className="main-services-offer">
              <div className="service-offer-wrapper">
                <div className="wrapper-inner">
                  <h2>Enchance your business with custom web solutions</h2>
                  <p>
                    We offer a wide range of services to help you build, grow,
                    and scale your business. From web application development to
                    e-commerce solutions, we have the expertise to bring your
                    ideas to life and drive results.
                  </p>
                </div>
              </div>
              <div className="service-offer">
                {webServices.map((service) => {
                  return (
                    <div key={service.id} className="services-offer-content">
                      <img
                        src={service.image}
                        alt=""
                        className="service-image"
                      />
                      <h4>{service.title}</h4>

                      <div className="services-offer-inner">
                        <p>{service.description}</p>
                      </div>
                      <button className="hero-button" style={{ zIndex: 9 }}>
                        <span className="top"></span>
                        <Link to="/" className="primary-button">
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
                  If you can dream it, we can build it. Our comprehensive
                  technology stack spans a variety of tools and platforms,
                  giving us the flexibility to create custom, high-performance
                  solutions that cater to the unique needs of every client.
                </p>
              </div>
              <div className="service-technology-image">
                <img src={aboutTech} alt="" width="100%" />
              </div>
            </div>

            <div className="logo-container">
            <div className="all-logos">
                {allTechIcons.map((skill, index) => {
                  return (
                    <>
                      <div key={index} className="skill-icon">
                        {skill.icon}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="service-wrapper">
              <div class="about-service-wrapper">
                <div className="about-service-inner-wrapper">
                  <h2>
                    Ready to Craft{" "}
                    <span style={{ color: "#6E1299" }}>Digital </span>{" "}
                    Brilliance
                  </h2>
                  <p>
                    We are dedicated to delivering exceptional solutions
                    tailored to your unique business needs. From front-end
                    design to back-end development, our team combines innovation
                    and expertise to ensure seamless functionality, outstanding
                    user experiences, and impactful results across all digital
                    platforms. Let us help you transform your ideas into reality
                    with excellence at every step.
                  </p>
                  <button className="hero-button">
                    <span className="top"></span>
                    <Link to="" className="primary-button">
                      Contact Now
                    </Link>
                    <span className="bottom"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="not-found-tag">Service not found</h1>
      )}
    </>
  );
}

export default Service;
