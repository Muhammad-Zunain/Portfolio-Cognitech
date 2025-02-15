import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import { ToastProvider } from "./context/ToastContext.jsx"; 
import "./index.css";

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
