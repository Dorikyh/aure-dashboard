import React, { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    document.title = "Login - Kotone";
    
    // Obtener el parámetro 'token' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // Verificar si se ha pasado un token y guardarlo en localStorage
    if(token) {
      localStorage.setItem('jwtToken', token);
    }
  }, []);

  return (
    <div className="dark:bg-gray-900 sm:p-20 sm:px-80">
      <div className="bg-gray-800 p-12 rounded-2xl flex flex-col items-center">
        <h2 className="dark:text-white text-5xl text-center mb-4 font-semibold">Discord Login</h2>
        <p className="dark:text-white text-center mb-8">To continue, you need to login with your Discord account</p>
        <a className="bg-indigo-600 p-4 text-white rounded-2xl font-semibold" href="https://discord.com/oauth2/authorize?client_id=889540062956634164&response_type=code&redirect_uri=https%3A%2F%2Fapi.kotone.tech%2Foauth%2Fcallback&scope=identify+guilds+guilds.join">Login with Discord</a>
      </div>
    </div>
  );
};

export default Login();
