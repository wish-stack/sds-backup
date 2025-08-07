// DepartmentManagement.jsx
import { useState } from "react";
import { Plus, Upload, Download, FileDown } from "lucide-react";
import DepartmentTable from "../components/DepartmentTable";
import AddDepartmentModal from "../components/AddDepartmentModal";
import EditDepartmentModal from "../components/EditDepartmentModal";
import ConfirmationModal from "../components/ConfirmationModal";
import './DepartmentManagement.css';

function DepartmentManagement() {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);

  const handleAdd = () => setIsAddModalOpen(true);
  const handleEdit = (department) => {
    setSelectedDepartment(department);
    setIsEditModalOpen(true);
  };
  const handleDelete = (department) => {
    setDepartmentToDelete(department);
    setIsDeleteConfirmOpen(true);
  };

  const handleSaveDepartment = (department) => {
    setDepartments([...departments, { ...department, id: Date.now().toString() }]);
    setIsAddModalOpen(false);
  };

  const handleUpdateDepartment = (updated) => {
    setDepartments(
      departments.map((dept) => (dept.id === updated.id ? updated : dept))
    );
    setIsEditModalOpen(false);
    setSelectedDepartment(null);
  };

  const handleConfirmDelete = () => {
    setDepartments(
      departments.filter((dept) => dept.id !== departmentToDelete.id)
    );
    setIsDeleteConfirmOpen(false);
    setDepartmentToDelete(null);
  };

  return (
    <div className="department-page">
      <h1 className="page-title">Department Management</h1>

      <div className="action-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="button-group">
          <button className="btn primary" onClick={handleAdd}>
            <Plus className="icon" /> Add
          </button>
          <button className="btn outline">
            <Upload className="icon" /> Bulk Upload
          </button>
          <button className="btn outline">
            <Download className="icon" /> Export
          </button>
        </div>
      </div>

      <DepartmentTable
        departments={departments}
        searchTerm={searchTerm}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <div className="template-button">
        <button className="btn outline">
          <FileDown className="icon" /> Download Template
        </button>
      </div>

      <AddDepartmentModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSave={handleSaveDepartment}
      />

      <EditDepartmentModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        onSave={handleUpdateDepartment}
        department={selectedDepartment}
      />

      <ConfirmationModal
        open={isDeleteConfirmOpen}
        onOpenChange={setIsDeleteConfirmOpen}
        onConfirm={handleConfirmDelete}
        title="Delete Department"
        message="Are you sure you want to delete this department?"
      />
    </div>
  );
}

export default DepartmentManagement;