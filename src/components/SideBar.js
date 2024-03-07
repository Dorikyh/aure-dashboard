// Sidebar.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

function Sidebar() {

  useEffect(() => {
    // Verificar el token JWT al cargar el componente Sidebar
    const verifyToken = async () => {
      try {
        const response = await fetch('https://api.kotone.tech/user/info', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });

        if (response.status === 401 || response.status === 403) {
          // Si la respuesta es 401 o 403, redirige al usuario a la página de inicio de sesión
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Error al verificar el token:', error);
      }
    };

    verifyToken();
  }, []);

  const handleLogout = () => {
    // Eliminar el token JWT del almacenamiento
    localStorage.removeItem('jwtToken');
    // Redirigir al usuario a la página de inicio de sesión u otra página relevante
    window.location.href = '/login'; // Cambia '/login' por la ruta de la página que desees
  };

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
        {/* Agregar el enlace de logout con la función de manejo de clic */}
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
