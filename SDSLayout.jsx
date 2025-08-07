// components/SDSLayout.jsx
import React from "react";
import SDSHeader from "./SDSHeader";
import SDSSidebar from "./SDSSidebar";
import "./SDSLayout.css";

function SDSLayout({ children }) {
  return (
    <div className="sds-layout">
      <SDSSidebar />
      <SDSHeader />
      <main className="sds-main-content">{children}</main>
    </div>
  );
}

export default SDSLayout;
