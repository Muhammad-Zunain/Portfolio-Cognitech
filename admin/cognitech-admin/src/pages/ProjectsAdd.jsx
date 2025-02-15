import React, { useState, useEffect } from "react";
import { useProjectAddStore } from "../store/useProjectAddStore";

const ProjectsAdd = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [technologies, setTechnologies] = useState([""]);
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescChange = (e) => setDesc(e.target.value);

  const { addProjects, allCategory, allCategories } = useProjectAddStore();

  useEffect(() => {
    allCategory();
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log(selectedFiles);
    // Append the new files to the existing files
    const newFiles = [...files, ...selectedFiles];
    setFiles(newFiles);

    // Generate previews for the new files and append them
    const newUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newUrls]);
  };

  const handleTechChange = (e, index) => {
    const newTechnologies = [...technologies];
    if (e.target.value) {
      newTechnologies[index] = e.target.value;
    }
    setTechnologies(newTechnologies);
  };

  const addTechnologyField = () => {
    setTechnologies([...technologies, ""]);
  };

  const handleSubmit = (e) => {

    // Remove the last item from the technologies array
    technologies.splice(technologies.length - 1, 1);

    e.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("desc", desc);

    // Append remaining technologies
    technologies.forEach((tech, idx) =>
      formData.append(`technologies[${idx}]`, tech)
    );

    files.forEach((file) => formData.append("files", file));

    // Send to backend (e.g., using axios or fetch)
    addProjects(formData);
    console.log(files)

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    setCategory(""); // Reset category
    setTitle(""); // Reset title
    setDesc(""); // Reset description
    setTechnologies([""]); // Clear technologies array
    setFiles([]);
    setPreviewUrls([]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Project Form
        </h2>

        {/* Category Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="">Select Category</option>
            {allCategories.map((category) => (
              <option key={category.extra.slug} value={category.extra.slug}>
                {category.extra.name}
              </option>
            ))}
          </select>
        </div>

        {/* Title Input */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            placeholder="Enter title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="desc"
            value={desc}
            onChange={handleDescChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            placeholder="Enter description"
          />
        </div>

        {/* Technologies Inputs */}
        <div className="mb-6">
          <label
            htmlFor="technologies"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Technologies
          </label>
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="text"
                value={tech}
                onChange={(e) => handleTechChange(e, index)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                placeholder="Enter technology"
              />
              {index === technologies.length - 1 && (
                <button
                  type="button"
                  onClick={addTechnologyField}
                  className="ml-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label
            htmlFor="files"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="files"
            multiple
            onChange={handleFileChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Previews */}
        {previewUrls.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Image Previews
            </h3>
            <div className="flex flex-wrap gap-4 mt-2">
              {previewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectsAdd;
