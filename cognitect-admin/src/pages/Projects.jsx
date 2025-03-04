import React from "react";
import p1 from "../assets/y.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext.jsx";
import {
  getCategories,
  getProjects,
  deleteProjects,
  deleteProject,
} from "../stores/AdminApi.js";

export default function Projects() {
  const navigate = useNavigate();
  const showToast = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdownIndex, setDropdownIndex] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProjects();
  }, []);

  const handleDropdownToggle = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  const fetchCategories = async () => {
    const res = await getCategories();
    if (res.status) {
      setCategories(res.data);
      return;
    }
    showToast(res.type, res.message);
  };

  const fetchProjects = async () => {
    const res = await getProjects();
    if (res.status) {
      setProjects(res.data);
      return;
    }
    showToast(res.type, res.message);
  };

  const updatedProject = (id) => {
    const selectedProject = projects.find((project) => project._id === id);
    setTimeout(() => {
      navigate("/admin/addproject", { state: selectedProject });
    }, 100);
  };

  const handleCheckboxChange = (id) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((projectId) => projectId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedProjects.length === projects.length) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(projects.map((project) => project._id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedProjects.length === 0) return;
    let res;
    if (selectedProjects.length === 1) {
      res = await deleteProject(selectedProjects[0]);
    } else {
      res = await deleteProjects(selectedProjects);
    }
    console.log(res.status)
    if (res.status) {
      setProjects((prevProjects) =>
        prevProjects.filter(
          (project) => !selectedProjects.includes(project._id)
        )
      );
      setSelectedProjects([]);
    }
    showToast(res.type, res.message);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAll = () => {
    setSelectedCategory("");
  };

  const filteredProjects =
    selectedCategory === ""
      ? projects
      : projects.filter((project) => project.category.name === selectedCategory);


  return (
    <>
      <div className="p-8 sm:ml-64">
        <div className="relative shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 mt-20 pb-4 bg-inherit ">
            <div>
              <button
                className={`inline-flex items-center text-white focus:outline-none  font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-fuchsia-600 hover:bg-[#6E1299]  mx-2${
                  selectedProjects.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-red-700"
                }`}
                onClick={handleDeleteSelected}
                disabled={selectedProjects.length === 0}
                type="button"
              >
                <svg
                  className="w-3 h-3 text-white dark:text-white me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                </svg>
                Delete
              </button>
              {/* <button
                className="inline-flex items-center text-white focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-fuchsia-600 hover:bg-[#6E1299] mx-2"
                type="button"
                onClick={()=> updatedProject()}
              >
                <svg
                  className="w-3 h-3 text-white dark:text-white me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                </svg>
                Add New Project
              </button> */}
            </div>
            <div className="relative">
              <button
                id="dropdownActionButton"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center focus:outline-none mx-2 font-medium rounded-lg text-sm px-3 py-1.5 dark:text-white dark:bg-fuchsia-600 hover:bg-[#6E1299]"
                type="button"
              >
                <span className="sr-only">Action button</span>
                Action
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute left-[-90px] top-10 z-10 divide-y rounded-lg shadow-sm w-56 dark:bg-[#0C0E2B]">
                  <ul className="py-2 text-[15px] dark:text-white">
                    <li>
                      <a
                        
                        className="border-b block px-4 py-2 dark:hover:bg-[#4c4e78] dark:hover:text-white"
                        onClick={() => {
                          handleShowAll();
                          setIsOpen(false);
                        }}
                      >
                        Show All
                      </a>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-[#4c4e78] dark:hover:text-white"
                          onClick={() => {
                            handleFilterChange(category.name);
                            setIsOpen(false);
                          }}
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <table className="w-full text-left rtl:text-right dark:text-white mt-4">
            <thead className="tracking-wider dark:bg-fuchsia-800  ">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        selectedProjects.length === projects.length &&
                        projects.length > 0
                      }
                      onChange={handleSelectAll}
                      className="w-4 h-4 dark:bg-white text-[#4f146b]"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Project Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Project Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Technology
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr
                  key={project._id}
                  className="border-b dark:bg-[#1d1f40] dark:border-[#0C0E2B] dark:hover:bg-[#4c4e78]"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedProjects.includes(project._id)}
                        onChange={() => handleCheckboxChange(project._id)}
                        className="w-4 h-4  rounded-sm dark:bg-white text-fuchsia-600 "
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4">
                    <img
                      src={project.images[0]}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="project image"
                    />
                  </td>
                  <td className="px-6 py-4">{project.title}</td>
                  <td className="px-6 py-4">{project.category.name}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="dark:text-white  dark:bg-fuchsia-600 hover:bg-[#6E1299] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                      type="button"
                    >
                      Tech Used
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      className={`z-10 ${
                        dropdownIndex === index ? "block" : "hidden"
                      } absolute divide-y mt-2 rounded-lg shadow-sm w-44 dark:bg-[#0C0E2B]`}
                    >
                      <ul
                        className="py-2 text-sm dark:text-white"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        {project.technologies.map((tech, index) => (
                          <li key={index}>
                            <a href="#" className="block px-4 py-2 cursor-text">
                              {tech}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-target="editUserModal"
                      data-modal-show="editUserModal"
                      className="font-medium dark:text-fuchsia-600 hover:underline"
                      onClick={() => updatedProject(project._id)}
                    >
                      Edit Project
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
