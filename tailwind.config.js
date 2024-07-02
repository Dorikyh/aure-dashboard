/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    // Añadir más rutas de archivos o patrones globales aquí si es necesario
  ],
  darkMode: 'class', // Especifica que quieres usar la estrategia de clase para el modo oscuro
  theme: {
    extend: {
      // Agrega tus configuraciones de tema personalizadas aquí si las tienes
    },
  },
  plugins: [
    // Agrega tus plugins adicionales aquí si es necesario
  ],
};
