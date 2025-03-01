import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';

// Get category
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/category/get-category`);
    const res = response.data
    if (res.statusCode == 200){
      return { status: true, data : res.data}
    }
    return {status: false, message : 'No Category Found', type : "Failed"};

  } catch (error) {
    return {status: false, message : 'Error fetching categories', type : "Failed"};
  }
};

// Add Category
export const addCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${BASE_URL}/category/add-category`, categoryData, {
      headers: {
        'Content-Type': 'application/json', 
      },
      withCredentials: true,
    });

    const res = response.data;
    if (res.statusCode == 200){
      return { status: true, message : 'Category Added successfully!', type: "Success"};
    }
    return {status: false, message : res.message, type : "Failed"};

  } catch (error) {
    return {status: false, message : 'Error adding category', type : "Failed"};
  }
};

// Update Category
export const updateCategory = async (categoryId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/category/update-category/${categoryId}`, updatedData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    const res = response.data;
    if (res.statusCode == 200){
      return { status: true, message: "Category updated successfully!", type: "Success" };
    }
    return { status: false, message: res.message, type: "Failed" };

  } catch (error) {
    return { status: false, message: "Error updating category", type: "Failed" };
  }
};

// Delete Single Category
export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/category/delete-category/${categoryId}`, {
      data: { categoryIds: categoryId },
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const res = response.data
    if (res.statusCode == 200){
      return { status: true, message: "Category deleted successfully!", type: "Success" };
    }
    return {status: false, message : res.message, type : "Failed"};
  } catch (error) {
    return { status: false, message: "Error deleting category", type: "Failed" };
  }
};

// Delete Multiple Categories
export const deleteCategories = async (categoryIds) => {
  try {

    const response = await axios.post(
      `${BASE_URL}/category/delete-categories`,
      { categoryIds },  
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return { status: true, message: "Categories deleted successfully!", type: "Success" };
  } catch (error) {
    return { status: false, message: "Error deleting categories", type: "Failed" };
  }
};

// Get projects
export const getProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/get-project`);
    const res = response.data
    if (res.statusCode == 200){
      return { status: true, data : res.data}
    }
    return {status: false, message : 'No Projects Found', type : "Failed"};

  } catch (error) {
    return {status: false, message : 'Error deleting projects', type : "Failed"};
  }
};

// Add projects
export const addProject = async (projectData) => {
  try {
    const response = await axios.post(`${BASE_URL}/projects/add-project`, projectData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
      withCredentials: true,
    });
    return { status: true, message : 'Project has been Added successfully!', type: "Success"};
  } catch (error) {
    return {status: false, message : 'Error adding project', type : "Failed"};
  }
};

// Update Project
export const updateProject = async (projectId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/projects/update-project/${projectId}`, updatedData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return { status: true, message: "Project has been updated successfully!", type: "Success" };
  } catch (error) {
    return { status: false, message: "Error updating project", type: "Failed" };
  }
};

// Delete Single Project
export const deleteProject = async (projectIds) => {
  try {
    const response = await axios.delete(`${BASE_URL}/projects/delete-project/${projectIds}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { projectIds },
    });

    return { status: true, message: "Project deleted successfully!", type: "Success" };
  } catch (error) {
    return { status: false, message: "Error deleting project", type: "Failed" };
  }
};

// Delete Projects
export const deleteProjects = async (projectIds) => {
  try {
    const response = await axios.post(`${BASE_URL}/projects/delete-projects`, 
       { projectIds },{
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    con

    return { status: true, message : 'Project has been Deleted successfully!', type: "Success"};
  } catch (error) {
    return {status: false, message : 'Error Deleting project', type : "Failed"};
  }
}