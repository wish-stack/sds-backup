// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DepartmentManagement from "./pages/DepartmentManagement";
import SDSLayout from "./components/SDSLayout";
import SDSHeader from "./components/SDSHeader";
import SDSSidebar from "./components/SDSSidebar";
import AddDepartmentModal from "./components/AddDepartmentModal";
import EditDepartmentModal from "./components/EditDepartmentModal";
import ConfirmationModal from "./components/ConfirmationModal";
import DepartmentTable from "./components/DepartmentTable";
import './App.css';

function App() {
  return (
    <Router>
      <SDSLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/department" />} />
          <Route path="/department" element={<DepartmentManagement />} />
          <Route path="*" element={<div style={{ padding: '2rem' }}>404 - Page Not Found</div>} />
        </Routes>
      </SDSLayout>
    </Router>
  );
}

export default App;