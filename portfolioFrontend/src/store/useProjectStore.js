import axios from "axios";

import { create } from "zustand";
import { projects } from "../pages/Service/serviceData";


const baseUrl = "http://localhost:5000/api/service";

export const useProjectStore = create((set, get) => ({
  projects: {},
  serviceName: "",
  allCategories: [],
  setServiceName: async (name) => {
    set({ serviceName: name });
  },
  setProjects: async (slug) => {
    try {
      
      const res = await axios.get(`${baseUrl}/showcase-projects/${slug}`);
      
      set({ projects: res.data.data.frontend });
    } catch (error) {
      console.log(error);
        
    }
  },

  getAllCategories: async () => {
    const res = await axios.get(`${baseUrl}/all-category`);
    
    set({ allCategories: res.data.data });
  },
}));
