import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";

// const baseUrl = 'https://cognitech-kappa.vercel.app/api/service'
const baseUrl = 'http://localhost:5000/api/service';

export const useProjectAddStore = create((set, get) => ({

  isLogin: false,
  // backendUrl: "https://cognitech-kappa.vercel.app/api" ,
  backendUrl: "http://localhost:5000/api",
  // http://localhost:5000/api

  allCategories: [],

  setIsLogin: async (data) =>{
    set({isLogin: data})
  },

  addCategory: async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/add-service`, data, {
        headers: {
          'Content-Type': 'application/json', 
        },
        withCredentials: true,
      });
      console.log('Response:', res.data);
      if (res.statusCode === 200 || res.statusCode === 201) {

        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Error adding category:', error.response?.data || error.message);
      toast.error(error.response.data.messages);
    }
  },

  allCategory: async () => {
    try {
      const res = await axios.get(`${baseUrl}/all-category`, {
        headers: {
          'Content-Type': 'application/json', 
        },
        
      });
      console.log('Response:', res.data);
      set({allCategories: res.data.data})

     
      
    } catch (error) {
      console.error('Error adding category:', error.response?.data || error.message);
      toast.error(error.response.data.messages);
    }
  },


  addProjects: async (data) => {
    console.log(data)
    try {
      const res = await axios.post(`${baseUrl}/post-projects`, data ,{
       withCredentials: true,
      });
      console.log('Response:', res.data);
      // set({allCategories: res.data.data})
      if (res.statusCode === 200 || res.statusCode === 201) {

        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
      
    } catch (error) {
      console.error('Error adding category:', error);
      toast.error(error.response.data.messages);
    }
  }




}));
