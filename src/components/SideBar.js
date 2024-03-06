// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa NavLink para la navegación
import './SideBar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <NavLink to="/dashboard/profile" activeClassName="active">
          <li>Profile</li>
        </NavLink>
        <NavLink to="/dashboard/settings" activeClassName="active">
          <li>Settings</li>
        </NavLink>
        <NavLink to="/dashboard/likes" activeClassName="active">
          <li>Your Likes</li>
        </NavLink>
        <NavLink to="/dashboard/support" activeClassName="active">
          <li>Support</li>
        </NavLink>
        <NavLink to="/dashboard/logout" activeClassName="active">
          <li>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
