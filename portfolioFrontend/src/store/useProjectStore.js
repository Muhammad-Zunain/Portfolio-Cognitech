import axios from "axios";

import { create } from "zustand";
import { projects } from "../pages/Service/serviceData";


const baseUrl = 'http://localhost:5000/api/service'


export const useProjectStore = create((set, get) => ({
    projects: {},
    serviceName: "",
    allCategories: [],
    setServiceName: async (name) => {
        set({serviceName: name})
    },
    setProjects: async (slug) => {
        
        slug = 'test11'
        const res = await axios.get(`${baseUrl}/showcase-projects/${slug}`);
        console.log(res.data.data[0].frontend)
        set({projects: res.data.data[0].frontend})
    },

    getAllCategories: async () => {
        const res = await axios.get(`${baseUrl}/all-category`);
        console.log(res.data.data)
        set({allCategories:res.data.data})
    }
}))