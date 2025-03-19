import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useProjectStore } from "../../store/useProjectStore";
import "./Portfolio.css";
import { Link } from "react-router-dom";

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
    setProjects("serviceName"); // Ensure this function sets an array
  }, []);

  // Dynamically extract categories when projects change
  useEffect(() => {
    if (Array.isArray(projects) && projects.length > 0) {
      setCategories(["all", ...new Set(projects.map((p) => p.category?.name))]);
    }
  }, [projects]);

  // ✅ Ensure projects is always an array before applying .map()
  const filteredProjects = Array.isArray(projects)
    ? filter === "all"
      ? projects
      : projects.filter((p) => p.category?.name === filter)
    : [];

  // ✅ Prevent error: Ensure filteredProjects is an array before rendering
  if (!Array.isArray(filteredProjects) || filteredProjects.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-10 mt-10 container " style={containerStyles}>
      {/* 🔥 Animated Heading */}
      <div className="text-white flex flex-col items-start justify-center min-h-[20vh] px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
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
        </h1>
        <p className="text-white text-lg mt-4 max-w-2xl">
          Empowering our clients to achieve their full potential by providing
          them with the technology they need to succeed.
        </p>
      </div>

      {/* 🎯 Dynamic Filter Buttons */}
      <div className="flex justify-start space-x-6 text-lg font-semibold mt-0 md:mt-10 border-b-2 border-white w-fit mx-12 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded text-[13px] md:text-[16px] font-bold ${
              filter === cat
                ? "text-[#6f1299] border-b-2 border-[#fe0094]"
                : "text-white hover:text-gray-300"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🖼️ Portfolio Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 md:px-12"
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
