import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useProjectStore } from "../../store/useProjectStore";
import portfolioBanner from "../../assets/portfolio-banner.jpg";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import KodonexLoading from "../../components/Loading/KodonexLoading";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [categories, setCategories] = useState(["all"]);
  const { projects, setProjects } = useProjectStore();

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
    setProjects("serviceName");
  }, []);

  useEffect(() => {
    if (Array.isArray(projects) && projects.length > 0) {
      setCategories(["all", ...new Set(projects.map((p) => p.category?.name))]);
    }
  }, [projects]);

  const filteredProjects = Array.isArray(projects)
    ? filter === "all"
      ? projects
      : projects.filter((p) => p.category?.name === filter)
    : [];

  if (!Array.isArray(filteredProjects) || filteredProjects.length === 0) {
    return <KodonexLoading />;
  }

  useEffect(() => {
    if (Array.isArray(filteredProjects) || filteredProjects.length === 0) {

      AOS.init()
    }
  }, [filteredProjects])

  return (
    <>
      <div className="f-header">
        <img src={portfolioBanner} alt="" />
        <div className="f-wrapper" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            qui iusto ullam vero possimus laborum voluptatem molestiae odio
            impedit voluptates?
          </p>
        </div>
      </div>

      <div className="p-10 mt-10 container " style={containerStyles}>
        <div className="text-white flex flex-col items-start justify-center min-h-[20vh] px-6 c-px">
          <h2 className="font-bold text-white text-[3.5rem] leading-[45px] ">
            Elevating Businesses with <br />
            <span className="text-[#6f1299]">
              <Typewriter
                words={[
                  "Cutting-Edge Technology.",
                  "Scalable Solutions.",
                  "Future-Ready Software.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="my-4 max-w-5xl">
            Empowering our clients to achieve their full potential by providing
            them with the technology they need to succeed.
          </p>
        </div>

        <div className="flex justify-start space-x-6 font-[500] sm:mt-8 md:mt-8 border-b border-[#838383] overflow-x-auto c-mx mx-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`py-4 capitalize rounded text-[15px] md:text-[16px] ${
                filter === cat ? "text-[#6f1299] " : "text-white "
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 md:px-12 c-px"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </motion.div>

        <div className="w-full mt-10 flex justify-center items-center">
          <button className="hero-button mx-auto">
            <span className="top"></span>
            <Link to="" className="primary-button">
              View More
            </Link>
            <span className="bottom"></span>
          </button>
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ project }) => {
  const [hoverFilter, setHoverFilter] = useState("description");

  return (
    <div className="main-card relative group bg-[#0c0e2b] shadow-lg rounded-lg overflow-hidden h-[18rem] md:h-[24rem] hover:cursor-pointer">
      {/* Project Image */}
      <img
        src={project.images[0]}
        alt={project.title}
        className=" w-full h-full  object-cover transition-transform group-hover:scale-105"
      />

      {/* Project Details */}
      {/* <div className="absolute bottom-4 left-4 pr-title">
        <p className="text-[14px] font-bold">{project.title}</p>
      </div> */}

      {/* Hover Overlay */}
      <div className=" hover-overlay absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        {/* Toggle Buttons
        <div className="flex space-x-4">
          {["description", "tech"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm rounded text-[12px] font-bold ${
                hoverFilter === tab ? "bg-[#fe0094] opacity-70" : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setHoverFilter(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div> */}

        <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 mt-5 h-full flex items-center justify-center">
          <p className="text-[16px] md:text-[20px] font-bold italic">
            {project.title}
          </p>
          {/* <p className="text-center text-[14px] px-2">
            {hoverFilter === "description" ? project.description : project.technologies.join(", ")}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
