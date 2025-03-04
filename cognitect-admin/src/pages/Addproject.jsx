import React, { useEffect, useState, useMemo } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useToast } from "../context/ToastContext.jsx";
import { addProject, updateProject,getCategories } from "../stores/AdminApi.js";

export default function AddProject() {
  const showToast = useToast();
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = async () => {
      const res = await getCategories();
      if (res.status){
        setCategories(res.data);  
        return;
      }
      // showToast(res.type," res.message");
    };
  const location = useLocation();

  // const [primaryImage, setPrimaryImage] = useState(null);
  const [images, setImages] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [technologies, setTechnologies] = useState([]);

  const [techInput, setTechInput] = useState("");
  const [description, setDescription] = useState("");
  const projectData = location.state || {};  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showImages, setShowImages] = useState([])
  
  useEffect(() => {
    if (projectData && Object.keys(projectData).length > 0) {
      // setPrimaryImage(projectData.image || null);
      setImages(Array.isArray(projectData.image) ? [...projectData.image] : []);
      setProjectName(projectData.title || "");
      setDescription(projectData.description || "")
      setCategory(projectData.category.name || "Select Category");
      setTechnologies(Array.isArray(projectData.technologies) ? [...projectData.technologies] : []);
    }
  }, [projectData]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, files]);
    setShowImages([...showImages, ...files.map((file) => URL.createObjectURL(file))]);
};


  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    if (index === 0 && primaryImage) {
      setPrimaryImage(images.length > 1 ? images[1] : null);
    }
  };

  const addTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput)) {
      setTechnologies([...technologies, techInput]);
      setTechInput("");
    }
  };

  const removeTechnology = (index) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    images.forEach((image) => {
        formData.append("images", image[0]); 
    });

    formData.append("projectName", projectName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("technologies", JSON.stringify(technologies)); 
    let res;
    if (projectData?._id) {
        res = await updateProject(projectData._id, formData);
    } else {
        res = await addProject(formData);
    }

    if (res.status) {
        setImages([]);
        setShowImages([])
        setProjectName("");
        setCategory("Select Category");
        setTechnologies([]);
        setDescription("");
        showToast(res.type, res.message);
    }
};

  return (
    <div className="p-8 sm:ml-72">
      <div className="mt-20">
        <form className="space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer dark:bg-[#1d1f40] dark:border-gray-500 dark:text-gray-500 dark:hover:border-white dark:hover:text-white"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                <svg
                  className="w-8 h-8 mb-4 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {/* {primaryImage && (
            <img
              src={primaryImage}
              alt="Primary"
              className="w-full h-40 object-cover rounded-lg mt-3"
            />
          )} */}
          <div className="grid grid-cols-3 gap-2">
            {showImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-[#0C0E2B] text-white p-1 rounded-full opacity-75 hover:opacity-100"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project Name"
              className="w-1/2 text-md font-medium rounded-lg border block px-5 py-4 dark:bg-[#1d1f40] border-[#6E1299] dark:placeholder-gray-400 dark:text-white"
              required
            />

            <div className="relative w-1/2 border border-[#6E1299] rounded-lg ">
              <button
                data-dropdown-toggle="dropdown"
                className="relative dark:bg-[#1d1f40] dark:text-gray-400 font-medium rounded-lg text-md px-5 py-4 w-full text-center inline-flex items-center justify-between"
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {category || "Select Category"}
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
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                className={`${isDropdownOpen ? "block" : "hidden"} z-10  absolute divide-y shadow-sm w-full mt-2 dark:bg-[#0C0E2B] rounded-lg`}
              >
                <ul className="py-2 text-md dark:text-white ">
                  {categories.map((option) => (
                    <li key={option._id}>
                      <button
                        type="button"
                        onClick={() => {
                          setCategory(option.name);
                        }}
                        className="block w-full text-left px-4 py-2 dark:hover:bg-[#4c4e78]"
                      >
                        {option.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Add Technology"
              className="text-md font-medium border px-5 py-4 w-full rounded-lg focus:outline-none dark:placeholder-gray-400 dark:text-white dark:bg-[#1d1f40] border-[#6E1299]"
            />
            <button
              type="button"
              onClick={addTechnology}
              className=" text-white px-6 py-4 rounded-lg flex items-center gap-1 dark:bg-fuchsia-600 hover:bg-[#6E1299] "
            >
              <FaPlus /> Add
            </button>
          </div>
          <div
            className={`${
              technologies.length > 0 ? "flex" : "hidden"
            } flex-wrap gap-4 `}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-[#0C0E2B] px-4 py-3 rounded-3xl"
              >
                <span className="bg-[#1d1f40] text-white px-4 py-2 rounded-full text-sm flex items-center">
                  {tech}
                </span>
                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className=" text-fuchsia-600 "
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project Description"
            className="text-white text-md border px-5 py-4 w-full rounded-lg focus:outline-none dark:placeholder-gray-400 dark:bg-[#1d1f40] border-[#6E1299]"
            rows={8}
            required
          />

          <button
            type="submit"
            className="text-white inline-flex items-center  font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-fuchsia-600 hover:bg-[#6E1299]"
            onClick={handleSubmit}
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add new project
          </button>
        </form>
      </div>
    </div>
  );
}
