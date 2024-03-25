import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="block sm:hidden absolute top-16 right-4 text-gray-300">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className={`bg-gray-800 sm:p-4 text-gray-300 text-2xl text-center font-bold ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <h2 className='text-white text-5xl font-semibold text-center py-4'>Dashboard</h2>
        <div className="p-2 flex">
          <img src='/kotone.png' alt='Profile Picture' className='rounded-full w-10 h-10 ' />
          <p className='p-2'>Dorikyh</p>
        </div>

        
        <ul className='sm:pb-0 pb-4'>
          <NavLink to="/dashboard/profile">
            <li className="dark:bg-gray-700 p-2 sm:m-2 m-4 rounded-lg">Profile</li>
          </NavLink>
          <NavLink to="/dashboard/settings">
            <li className='dark:bg-gray-700 p-2 sm:m-2 m-4 rounded-lg'>Settings</li>
          </NavLink>
          <NavLink to="/dashboard/servers">
            <li className='dark:bg-gray-700 p-2 sm:m-2 m-4 rounded-lg'>Your Servers</li>
          </NavLink>
          <NavLink to="/dashboard/support">
            <li className='dark:bg-gray-700 p-2 sm:m-2 m-4 rounded-lg'>Support</li>
          </NavLink>
          {/* Agregar el enlace de logout con la función de manejo de clic */}
          <li onClick={handleLogout} className='bg-red-900 p-2 sm:m-2 m-4 rounded-lg'>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
