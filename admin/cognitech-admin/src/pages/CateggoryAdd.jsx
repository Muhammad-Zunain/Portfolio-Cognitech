import React, { useState, useEffect } from "react";
import { useProjectAddStore } from "../store/useProjectAddStore";

const CateggoryAdd = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addCategory, allCategory, allCategories } = useProjectAddStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      desc: description,
    };


    addCategory(data)
      .then(() => {
        console.log("Category added successfully!");
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Add Category
        </h2>

        {/* Name Input */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            placeholder="Enter name"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            placeholder="Enter description"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CateggoryAdd;
