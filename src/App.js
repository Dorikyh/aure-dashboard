// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Crear un contexto para importar todos los archivos de Pages
const pagesContext = require.context('./components/Pages', true, /\.js$/);

// Crear un objeto para mapear los nombres de archivo a componentes y rutas
const pages = pagesContext.keys().reduce((acc, filePath) => {
  const Component = pagesContext(filePath).default;
  const routePath = filePath
    .replace('./', '')
    .replace('.js', '')
    .toLowerCase();
  const route = routePath === 'home' ? '/' : `/${routePath}`;
  acc[route] = Component;
  return acc;
}, {});

const NotFoundPage = pages['/404'];

function App() {
  return (
    <Router>
      <NavBar />
      <div className="dark:bg-gray-900">
        <Analytics id="G-4ZQZQZQZQZ" />
        <SpeedInsights id="G-4ZQZQZQZQZ" />
        <Routes>
          {Object.entries(pages).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {/* Ruta para manejar el error 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;