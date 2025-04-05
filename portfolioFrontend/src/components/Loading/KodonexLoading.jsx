import React from "react";
import logo from "../../assets/logo.png";

const KodonexLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-5">
        {/* Logo */}
        <div className="flex items-center space-x-2">
         <img src={logo} alt="Logo" width={150} height={150} />
        </div>

        {/* Loading Spinner */}
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-12 h-12 animate-spin fill-purple-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.9999C100 78.8145 77.6142 100.999 50 100.999C22.3858 100.999 0 78.8145 0 50.9999C0 23.1853 22.3858 0.999939 50 0.999939C77.6142 0.999939 100 23.1853 100 50.9999ZM9.08156 50.9999C9.08156 74.4305 26.5695 91.9184 50 91.9184C73.4305 91.9184 90.9184 74.4305 90.9184 50.9999C90.9184 27.5694 73.4305 10.0815 50 10.0815C26.5695 10.0815 9.08156 27.5694 9.08156 50.9999Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4335 97.8624 35.911 96.8124 33.5995C92.9236 24.2289 86.2084 16.4243 77.5913 11.2727C68.9743 6.12106 58.8174 3.90499 48.576 4.95841C38.3345 6.01183 28.8372 10.2761 21.2415 17.187C13.6457 24.0979 8.40763 33.2292 6.32543 43.1495C5.789 45.659 7.71827 48.0687 10.2871 48.4657C12.856 48.8627 15.2686 46.9744 15.805 44.4649C17.5005 36.5705 21.8776 29.4271 28.2581 24.3242C34.6386 19.2213 42.5564 16.4204 50.7345 16.426C58.9127 16.4316 66.8262 19.2426 73.2041 24.351C79.582 29.4594 83.9496 36.6128 85.6367 44.5082C86.1731 47.0177 88.5818 48.9278 91.1507 48.5308C93.7195 48.1338 95.649 45.7241 95.1126 43.2146C94.4664 39.9334 93.2632 39.6487 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <p className="text-gray-300 text-lg">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default KodonexLoading;
