// components/SDSSidebar.jsx
import React from "react";
import {
  Home,
  Users,
  AlertTriangle,
  Scale,
  Building,
  GraduationCap,
  BookOpen,
  DollarSign,
  User,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "./SDSSidebar.css";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Student/Incident Management", icon: Users, path: "/student-incident" },
  { title: "Violation Management", icon: AlertTriangle, path: "/violation" },
  { title: "Disciplinary Management", icon: Scale, path: "/disciplinary" },
  { title: "Department Management", icon: Building, path: "/department" },
  { title: "Grade Management", icon: GraduationCap, path: "/grade" },
  { title: "Section Management", icon: BookOpen, path: "/section" },
  { title: "Strand Management", icon: DollarSign, path: "/spend" },
  { title: "User Management", icon: User, path: "/user" },
  { title: "Report Management", icon: BarChart3, path: "/report" },
];

function SDSSidebar() {
  return (
    <aside className="sds-sidebar">
      {/* Logo/Header */}
      <div className="sidebar-header">
        <div className="logo-box">
          <GraduationCap size={20} color="#fff" />
        </div>
        <div>
          <h1 className="sidebar-title">Student</h1>
          <p className="sidebar-subtitle">Discipline System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={16} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default SDSSidebar;
