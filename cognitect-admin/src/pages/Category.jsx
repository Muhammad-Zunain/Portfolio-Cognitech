import React, { useState, useEffect } from "react";
import CategoryModal from "../components/AddCategory.jsx";


import { useToast } from "../context/ToastContext.jsx";
import { getCategories, deleteCategories, deleteCategory } from "../stores/AdminApi.js";

export default function Category() {
  const showToast = useToast();

  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [category, setCategory] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await getCategories();
    if (res.status){
      setCategories(res.data);  
      return;
    }
    showToast(res.type, res.message);
  };

  const openModal = (id=null) =>{
    if(id){
      updateCategory(id);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateCategory = (id)=>{
    const Category = categories.find(category => category._id === id);
    setCategory({ _id: Category._id ,name: Category.name, description: Category.description });
  }

  const handleCheckboxChange = (_id) => {
    console.log(_id)
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(_id)
        ? prevSelected.filter((catId) => catId !== _id)
        : [...prevSelected, _id]
    );

    
  };

  const deleteSelectedCategories = async () => {
    if (selectedCategories.length === 0) return;
  
    let res;
    if (selectedCategories.length === 1) {
      res = await deleteCategory(selectedCategories[0]); 
    } else {
      res = await deleteCategories(selectedCategories);
    }
  
    if (res.status) {
      setCategories(categories.filter((category) => !selectedCategories.includes(category._id)));
      setSelectedCategories([]); 
    }

   
    
    showToast(res.type, res.message);
  }
  

  return (
    <>
      <div className="p-8 sm:ml-64">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between mt-20 pb-4">
            <div className="flex items-center space-x-6">
              <button
                className={`inline-flex items-center text-white focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-fuchsia-600 ${
                  selectedCategories.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#6E1299]"}`}
                type="button"
                onClick={deleteSelectedCategories}
                disabled={selectedCategories.length === 0}
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
              <button
                className="inline-flex items-center text-white focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-fuchsia-600 hover:bg-[#6E1299]"
                type="button"
                onClick={()=>openModal()}
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
                Add New Service
              </button>
            </div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white dark:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 ps-10 text-sm text-white font-medium rounded-lg w-80 dark:bg-fuchsia-600 dark:border-fuchsia-600 dark:placeholder-white dark:text-white "
                placeholder="Search for category"
              />
            </div>
          </div>
          <table className="w-full text-left rtl:text-right mt-4 ">
            <thead className="text-base tracking-wider font-light dark:bg-fuchsia-800 dark:text-white">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setSelectedCategories(
                          e.target.checked ? categories.map((cat) => cat._id) : []
                        )
                      }
                      checked={categories.length > 0 && selectedCategories.length === categories.length}
                      className="w-4 h-4 text-[#4f146b] dark:bg-white rounded-sm"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">Product name</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {categories.map((category) => (
                <tr
                  key={category._id}
                  className="border-b dark:bg-[#1d1f40] dark:border-[#0C0E2B] dark:hover:bg-[#4c4e78]"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category._id)}
                        onChange={() => handleCheckboxChange(category._id)}
                        className="w-4 h-4 text-fuchsia-600 rounded-sm"
                      />
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {category.name}
                  </th>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      onClick={()=>openModal(category._id)}
                      className="font-medium dark:text-fuchsia-600 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CategoryModal isOpen={isModalOpen} closeModal={closeModal} category={category} fetchCategories={fetchCategories} />
    </>
  );
}
