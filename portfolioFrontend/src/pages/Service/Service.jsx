import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams, Link } from "react-router-dom";
import aboutService from "../../assets/service-bg-image1.jpg";
import aboutTech from "../../assets/s1Bg.png";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./service.css";
import { projects } from "./serviceData";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiCplusplus,
  SiMongodb,
  SiGraphql,
  SiMysql,
  SiGit,
  SiPostgresql,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { FaNodeJs, FaHtml5, FaCss3, FaVuejs } from "react-icons/fa";

const skillList = [
  { icon: <SiHtml5 />, name: "html5" },
  { icon: <SiCss3 />, name: "css3" },
  { icon: <SiJavascript />, name: "javascript" },
  { icon: <SiReact />, name: "react" },
  { icon: <FaNodeJs />, name: "nodejs" },
  { icon: <SiPython />, name: "python" },
  { icon: <SiAngular />, name: "angular" },
  { icon: <FaVuejs />, name: "vuejs" },
  { icon: <SiTailwindcss />, name: "tailwind" },
  { icon: <SiBootstrap />, name: "bootstrap" },
  { icon: <SiFlutter />, name: "flutter" },
  { icon: <SiDart />, name: "dart" },
  { icon: <SiFirebase />, name: "firebase" },
  { icon: <SiNextdotjs />, name: "nextjs" },
  { icon: <SiRedux />, name: "redux" },
  { icon: <SiCplusplus />, name: "cpp" },
  { icon: <SiMongodb />, name: "mongodb" },
  { icon: <SiGraphql />, name: "graphql" },
  { icon: <SiMysql />, name: "mysql" },
  { icon: <SiGit />, name: "git" },
  { icon: <SiPostgresql />, name: "postgresql" },
  { icon: <SiPandas />, name: "pandas" },
  { icon: <SiNumpy />, name: "numpy" },
];

function Service() {
  const { serviceName } = useParams();
  const mainSwiperRef = useRef(null);
  const imageSwiperRefs = useRef([]);

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
    if (!projects.hasOwnProperty(serviceName)) {
      console.log("404");
    }
  }, [serviceName]);

  return (
    <>
      {serviceName && projects[serviceName] ? (
        <>
          <div className="f-service-header">
            <h2>{projects[serviceName].extra[0].name}</h2>
            <p>{projects[serviceName].extra[0].description}</p>
          </div>

          <div className="container" style={containerStyles}>
            <div className="service-technology-section">
              <div className="service-technology-content">
                <h1>
                  Our Technology <br /> Stack
                </h1>
                <p>
                  If you dream it we can build it. We use a wide range of
                  technologies and platforms. Our technology stack enables us to
                  implement any feature for our clients.
                </p>
              </div>
              <div className="service-technology-image">
                <img src={aboutTech} alt="" width="100%" />
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
                  traditional. Witness our work and our dedicated team of
                  experts who are committed to your success and delivering
                  excellence in every project.
                </p>
              </div>
            </div>

            <div className="work-wrapper">
              <Swiper
                ref={mainSwiperRef}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                // style={{ height: '500px' }}
                modules={[Navigation]}
                onSlideChange={() => console.log("slide change")}
              >
                {projects[serviceName].service.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-wrapper">
                      <div className="work-wrapper-content">
                        <h1 className="text-outline">0{index + 1}</h1>
                        <h2>{project.title}</h2>
                        <p style={{ textAlign: "justify" }}>
                          {project.description}
                        </p>
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
            </div>

            <div className="service-wrapper">
              <div class="about-service-wrapper">
                <div className="about-service-inner-wrapper">
                  <h2>
                    Ready to Craft{" "}
                    <span style={{ color: "#6E1299" }}>Front-End</span>{" "}
                    Brilliance
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus reprehenderit tempora rem reiciendis
                    necessitatibus libero adipisci ea quisquam placeat quae
                    suscipit vitae, sapiente nisi expedita .
                  </p>
                  <button className=" hero-button">
                    <span className="top"></span>
                    <Link to="" className="primary-button">
                      Connent Now <span> &rarr;</span>
                    </Link>
                    <span className="bottom"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-container">
            <h2>
               Our <span>Technology</span>
            </h2>
            <div className="all-logos">

            {skillList.map((skillImage) => {
              return (
                <>
                  <div className={`skill-icon ${skillImage.name}`}>
                    {skillImage.icon}
                    {/* <p>{skillImage.name}</p> */}
                  </div>
                </>
              );
            })}

            </div>
          </div>
        </>
      ) : (
        <p>Service not found</p>
      )}
    </>
  );
}

export default Service;
