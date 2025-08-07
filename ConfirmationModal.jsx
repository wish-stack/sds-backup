// components/ConfirmationModal.jsx
import React from "react";
import "./ConfirmationModal.css";

function ConfirmationModal({ open, onOpenChange, onConfirm, title, message }) {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <p>Please confirm your action.</p>
        </div>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-actions">
          <button className="btn cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn confirm" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
