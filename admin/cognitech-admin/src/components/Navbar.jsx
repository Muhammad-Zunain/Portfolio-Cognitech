import React from "react";
import { Link } from "react-router-dom";
import { useProjectAddStore } from "../store/useProjectAddStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import brainLogo from '../assets/brainlogo.png'

const Navbar = () => {
  const { isLogin, setIsLogin } = useProjectAddStore();
  const navigate = useNavigate();

  // Function to handle Logout
  const handleLogout = async () => {
    try {
      
      const response = await fetch(
        "https://cognitech-kappa.vercel.app/api/admin/admin-logout",
        {
          method: "GET",
          credentials: "include",
        }
      );

      
      if (response.ok) {
        
        setIsLogin(false); 
        toast.success("Logout successful");
        navigate('/login')
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      toast.error("Error during logout:", error);
    }
  };

  return (
    <>
      <nav className="bg-black">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src={brainLogo}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Add Projects
                  </Link>
                  <Link
                    to="/add-category"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Add Category
                  </Link>
                  <Link
                    to="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  {isLogin ? (
                    <button
                      onClick={handleLogout}
                      className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login" // Change this path as per your login route
                      className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Add Projects
            </Link>
            <Link
              to="/add-category"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add Category
            </Link>
            <Link
              to="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
