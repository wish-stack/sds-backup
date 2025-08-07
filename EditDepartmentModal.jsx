// components/EditDepartmentModal.jsx
import React, { useState, useEffect } from "react";
import "./EditDepartmentModal.css";

function EditDepartmentModal({ open, onOpenChange, onSave, department }) {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentType, setDepartmentType] = useState("");

  useEffect(() => {
    if (department) {
      setDepartmentName(department.name);
      setDepartmentType(department.type);
    }
  }, [department]);

  const handleSave = () => {
    if (!department || !departmentName.trim() || !departmentType) return;

    onSave({
      id: department.id,
      name: departmentName.trim(),
      type: departmentType,
    });

    handleCancel();
  };

  const handleCancel = () => {
    if (department) {
      setDepartmentName(department.name);
      setDepartmentType(department.type);
    }
    onOpenChange(false);
  };

  if (!open || !department) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Department</h2>
          <p>Update the department details below.</p>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="edit-department-name">Department Name</label>
            <input
              id="edit-department-name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-department-type">Department Type</label>
            <select
              id="edit-department-type"
              value={departmentType}
              onChange={(e) => setDepartmentType(e.target.value)}
              className="select"
            >
              <option value="">Select Type</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="btn save"
            onClick={handleSave}
            disabled={!departmentName.trim() || !departmentType}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDepartmentModal;
