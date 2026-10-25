import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="app-footer">
        Employee Dashboard <span>•</span> React Assignment 2
      </footer>
    </div>
  );
}
