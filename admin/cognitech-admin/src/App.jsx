import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import CateggoryAdd from "./pages/CateggoryAdd";
import ProjectsAdd from "./pages/ProjectsAdd";
import Sign from "./pages/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { useProjectAddStore } from "./store/useProjectAddStore";
import { Loader } from 'lucide-react';

function App() {
  const { backendUrl, setIsLogin, isLogin } = useProjectAddStore();
  
  


  return (
    <>
      <Router>
        <AuthCheck backendUrl={backendUrl} setIsLogin={setIsLogin} isLogin={isLogin}>
          <div className="w-full h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<ProjectsAdd />} />
              <Route path="/add-category" element={<CateggoryAdd />} />
              <Route path="/login" element={<Sign />} />
            </Routes>
          </div>
        </AuthCheck>
      </Router>
      <Toaster />
    </>
  );
}

function AuthCheck({ backendUrl, children, setIsLogin, isLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginLoc, setLoginLoc] = useState(false)

  useEffect(()=> {
    console.log(location.pathname);
  }, [loginLoc])

  useEffect(() => {
    const fetchAdminAuth = async () => {
      try {
        const res = await fetch(`${backendUrl}/admin/admin-auth`, {
          credentials: "include", // Ensures cookies are sent with the request
        });
        if (!res.ok) {
          setIsLogin(false)
          setLoginLoc(true)
          navigate("/login");
        }

        else {
          setIsLogin(true)
          setLoginLoc(false)
        }
      } catch (error) {
        console.error("Error fetching admin auth:", error);
        navigate("/login"); // Navigate to login in case of an error
      }
    };

    fetchAdminAuth();
  }, [backendUrl, navigate]);


  if (!isLogin && location.pathname !== '/login') {
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader className="h-10 w-10 animate-spin" />
        </div>
    );
}

  return <>{children}</>;
}

export default App;
