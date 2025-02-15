import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Adminsidebar.jsx";


const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />  
      <div className="flex-1 p-5">
        <Outlet />  
      </div>
    </div>
  );
};



export default AdminLayout;
