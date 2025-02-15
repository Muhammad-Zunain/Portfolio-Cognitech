import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Category from "../pages/Category.jsx";
import Projects from "../pages/Projects.jsx";
import Addproject from "../pages/Addproject.jsx";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />

        <Route path="project" element={<Projects />}/>
          <Route path="addproject" element={<Addproject />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
