import React, { useEffect, useState } from "react";
import { useToast } from "../context/ToastContext.jsx";
import { addCategory, updateCategory } from "../stores/AdminApi.js";

export default function ({ isOpen, closeModal, category,fetchCategories }) {
  if (!isOpen) return null;
  const showToast = useToast();
  const [newCategory, setNewCategory] = useState({ 
    name: category?.name || "", 
    description: category?.description || "" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newCategory.name || !newCategory.description) {
        showToast("Failed", "Both fields are required!");
        return;
    }

    let res;
    if (category?._id) {
        res = await updateCategory(category._id, newCategory);
    } else {
        res = await addCategory(newCategory);
    }

    if (res.status) {
        closeModal();
        fetchCategories();
    }

    setTimeout(() => {
        showToast(res.type, res.message);
    }, 1000);
};


  return (
    <>
      <div
        aria-hidden="true"
        className={`${
          isOpen ? "" : "hidden"
        } modal-overlay overflow-y-auto overflow-x-hidden  
          absolute flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative rounded-lg shadow-sm dark:bg-[#1E143B]">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-white">
              <h3 className="text-lg font-semibold  dark:text-white">
                Create New Product
              </h3>
              <button
                type="button"
                className="text-[#fff] bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-fuchsia-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  onClick={closeModal}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-md font-medium dark:text-white"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-md rounded-lg border focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1d1f40] dark:border-[#6E1299]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type service name"
                    value={newCategory.name}
                    onChange={handleChange}
                    required="true"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Service Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={8}
                    className="block p-2.5 w-full text-md rounded-lg border  dark:bg-[#1d1f40] dark:border-[#6E1299] dark:placeholder-gray-400 dark:text-white"
                    placeholder="Write description here"
                    value={newCategory.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 hover:bg-[#6E1299]"
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
                Add new service
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
