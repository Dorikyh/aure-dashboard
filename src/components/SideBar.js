// Sidebar.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
    <div className='bg-gray-800 sm:p-4 text-gray-300 text-2xl text-center font-bold'>
      <h2 className='text-white sm:text-5xl font-semibold text-center my-4'>Dashboard</h2>
      <div className='flex p-2'>
        <img src='/src/kotone.png' alt='Profile Picture' className='rounded-full w-10 h-10 ' />
        <p className='p-2'>Dorikyh</p>
      </div>

      
      <ul>
        <NavLink to="/dashboard/profile">
          <li className="dark:bg-gray-700 p-2 m-2 rounded-lg">Profile</li>
        </NavLink>
        <NavLink to="/dashboard/settings">
          <li className='dark:bg-gray-700 p-2 m-2 rounded-lg'>Settings</li>
        </NavLink>
        <NavLink to="/dashboard/servers">
          <li className='dark:bg-gray-700 p-2 m-2 rounded-lg'>Your Servers</li>
        </NavLink>
        <NavLink to="/dashboard/support">
          <li className='dark:bg-gray-700 p-2 m-2 rounded-lg'>Support</li>
        </NavLink>
        {/* Agregar el enlace de logout con la función de manejo de clic */}
        <li onClick={handleLogout} className='bg-red-900 p-2 m-2 rounded-lg'>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
