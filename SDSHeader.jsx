// components/SDSHeader.jsx
import React, { useState } from "react";
import "./SDSHeader.css";

function SDSHeader() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleItemClick = (item) => {
    alert(`Clicked: ${item}`);
    setOpen(false);
  };

  return (
    <header className="sds-header">
      <div className="sds-header-content">
        <button className="dropdown-trigger" onClick={toggleDropdown}>
          OSA <span className="chevron">▼</span>
        </button>

        {open && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => handleItemClick("Profile")}>
              Profile
            </div>
            <div className="dropdown-item" onClick={() => handleItemClick("Settings")}>
              Settings
            </div>
            <div className="dropdown-item" onClick={() => handleItemClick("Logout")}>
              Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default SDSHeader;
