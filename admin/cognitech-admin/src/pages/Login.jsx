import React, { useState } from "react";
import "../components/styles/sign.css";
import toast from "react-hot-toast";
import { useProjectAddStore } from "../store/useProjectAddStore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Sign() {
  const [email, setEmail] = useState("cognitechlabz@gmail.com");
  const [password, setPassword] = useState("cognitechlabz");
  const [error, setError] = useState("");
  const { backendUrl, setIsLogin } = useProjectAddStore();
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    setError(""); // Clear any previous errors

    const data = { email, password };
    console.log("Data:", data);

    try {
      const res = await fetch(`${backendUrl}/admin/admin-login`, {
        method: "POST", // Use POST for login
        headers: {
          "Content-Type": "application/json", // Indicate JSON payload
        },
        body: JSON.stringify(data), // Stringify data for the request
        credentials: "include",
      });

      if (!res.ok) {
        
        const errorData = await res.json();
        setIsLogin(false)
        throw new Error(errorData.message || "Login failed");
      }

      const responseData = await res.json();
      console.log("Login Successful:", responseData);
      toast.success("Login successful!");
      setIsLogin(true)

      
      navigate("/"); 

    } catch (err) {
      console.error("Error during login:", err);
      setIsLogin(false)
      setError(err.message || "Something went wrong during login.");
      toast.error(err.message || "Login failed. Please try again.");
    }
  };

  

  return (
    <div className="Container h-screen">
      <div className="form-wrapper">
        <h1 className="form-title">
          Admin Login <span className="line"></span>{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Submit Button */}
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
