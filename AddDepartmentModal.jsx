// AddDepartmentModal.jsx
import React, { useState } from "react";
import "./AddDepartmentModal.css";

function AddDepartmentModal({ open, onOpenChange, onSave }) {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentType, setDepartmentType] = useState("");

  const handleSave = () => {
    if (!departmentName.trim() || !departmentType) return;

    onSave({ name: departmentName.trim(), type: departmentType });
    setDepartmentName("");
    setDepartmentType("");
    onOpenChange(false);
  };

  const handleCancel = () => {
    setDepartmentName("");
    setDepartmentType("");
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Department</h2>
          <p>Enter the department details below.</p>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="department-name">Department Name</label>
            <input
              id="department-name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              className="input"
              placeholder=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="department-type">Department Type</label>
            <select
              id="department-type"
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDepartmentModal;
