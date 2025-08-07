// components/DepartmentTable.jsx
import React from "react";
import "./DepartmentTable.css";

function DepartmentTable({ searchTerm, onEdit, onDelete, departments }) {
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    const department = departments.find((dept) => dept.id === id);
    if (department) onEdit(department);
  };

  const handleDelete = (id) => {
    const department = departments.find((dept) => dept.id === id);
    if (department) onDelete(department);
  };

  return (
    <div className="table-wrapper">
      <table className="department-table">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department Type</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredDepartments.map((department) => (
            <tr key={department.id}>
              <td>{department.name}</td>
              <td>{department.type}</td>
              <td className="text-center">
                <button
                  className="icon-btn edit"
                  onClick={() => handleEdit(department.id)}
                >
                  ✏️
                </button>
                <button
                  className="icon-btn delete"
                  onClick={() => handleDelete(department.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentTable;
