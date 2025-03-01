import axios from "axios";

import { create } from "zustand";
import { projects } from "../pages/Service/serviceData";


// const baseUrl = "https://cognitech-kappa.vercel.app/api/service";
const baseUrl = "http://localhost:5000/api"

export const useProjectStore = create((set, get) => ({
  projects: {},
  serviceName: "",
  allCategories: [],
  setServiceName: async (name) => {
    set({ serviceName: name });
  },
  setProjects: async (slug) => {
    try {
      
      const res = await axios.get(`${baseUrl}/projects/showcase-projects/${slug}`);
      console.log(res)
      
      set({ projects: res.data.data.frontend });
    } catch (error) {
      console.log(error);
      console.error("Error fetching projects:", error.response?.data || error.message);
    }
  },

  getAllCategories: async () => {
    const res = await axios.get(`${baseUrl}/category/get-category/`,{
      withCredentials: true
    });
    console.log(res)
    
    set({ allCategories: res.data.data });
  },
}));
