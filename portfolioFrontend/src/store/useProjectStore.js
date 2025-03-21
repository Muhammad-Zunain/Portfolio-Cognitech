import axios from "axios";

import { create } from "zustand";

const baseUrl = "https://cognitech-kappa.vercel.app/api";

export const useProjectStore = create((set, get) => ({
  projects: {},
  serviceName: "",
  allCategories: [],
  setServiceName: async (name) => {
    set({ serviceName: name });
  },
  setProjects: async (slug) => {
    try {
      
      const res = await axios.get(`${baseUrl}/projects/all-projects`,{
        withCredentials: true
      });
      
      set({ projects: res.data.data });
    } catch (error) {
      console.error("Error fetching projects:", error.response?.data || error.message);
    }
  },

  getAllCategories: async () => {
    const res = await axios.get(`${baseUrl}/category/get-category/`,{
      withCredentials: true
    });
    set({ allCategories: res.data.data });
  },
}));
