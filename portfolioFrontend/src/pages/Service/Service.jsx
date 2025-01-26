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
import { useProjectStore } from "../../store/useProjectStore";

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
  const {projects, setServiceName, setProjects} = useProjectStore()

  

  const containerStyles = {
    backgroundColor: "#1e143b",
    borderRadius: "8px",
    marginTop: "2rem",
    padding: "8rem 0 8rem 0",
    position: "relative",
    overflow: "hidden",
    marginBottom: "4rem",
  };
  
  useEffect(()=>{
    setProjects(serviceName)
  },[])

  

  useEffect(() => {
    if (!projects.hasOwnProperty(serviceName)) {
      console.log("404");
    }
  }, [serviceName]);

  useEffect(() => {
    setServiceName(serviceName);
    setProjects(serviceName);
  }, [serviceName]);
  

  if (Object.keys(projects).length === 0) {
    return "Loading..."
  }

  return (
    <>
      {projects  ? (
        <>
          <div className="f-service-header">
            <h2>{projects.extra.name}</h2>
            <p style={{ textAlign: "center" }}>{projects.extra.description}</p>
          </div>

          <div className="container" style={containerStyles}>
            <div className="service-technology-section">
              <div className="service-technology-content">
                <h1>
                  Our Technology <br /> Stack
                </h1>
                <p>
                If you can dream it, we can build it. Our comprehensive technology stack spans a variety of tools and platforms, giving us the flexibility to create custom, high-performance solutions that cater to the unique needs of every client.


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
                Choose us for custom development solutions that go beyond the traditional. Our team of skilled professionals is passionate about crafting innovative solutions that are tailored to your unique business needs. We pride ourselves on delivering high-quality results, providing ongoing support, and ensuring the success of every project. With a focus on excellence in every step of the process, from concept to execution, we are committed to helping you achieve your goals and stand out in the competitive digital landscape.
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
                modules={[Navigation]}
              >
                {projects.service.map((project, index) => (
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
                {/* Ready to Craft Digital Brilliance */}
                  <h2>
                    Ready to Craft{" "}
                    <span style={{ color: "#6E1299" }}>Digital </span>{" "}
                    Brilliance
                  </h2>
                  <p>
                  We are dedicated to delivering exceptional solutions tailored to your unique business needs. From front-end design to back-end development, our team combines innovation and expertise to ensure seamless functionality, outstanding user experiences, and impactful results across all digital platforms. Let us help you transform your ideas into reality with excellence at every step.
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
                    
                  </div>
                </>
              );
            })}

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
