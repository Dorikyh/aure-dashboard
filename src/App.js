import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const pagesContext = require.context('./components/Pages', true, /\.(js|jsx)$/);

const pages = pagesContext.keys().reduce((acc, filePath) => {
  const Component = pagesContext(filePath).default;
  const routePath = filePath.replace('./', '').replace('.js', '').toLowerCase();
  const route = routePath === 'home' ? '/' : `/${routePath}`;
  acc[route] = Component;
  return acc;
}, {});

const NotFoundPage = pages['/404'];

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-800 flex flex-col min-h-screen">
        <NavBar />
        <div className="dark:bg-gray-900 flex flex-col md:flex-row md:justify-center md:space-x-8 px-4">
          {/* Columna izquierda vacía para pantalla grande */}
          <div className="hidden md:w-1/6"></div>
          {/* Primera columna vacía */}
          <div className="hidden md:w-1/6"></div>
          {/* Contenedor central */}
          <div className="w-full md:w-2/3 px-4">
            <div className="py-9">
              <Analytics />
              <SpeedInsights />
              <Routes>
                {Object.entries(pages).map(([path, Component]) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
                {/* Ruta para manejar el error 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
          {/* Segunda columna vacía */}
          <div className="hidden md:w-1/6"></div>
          {/* Columna derecha vacía para pantalla grande */}
          <div className="hidden md:w-1/6"></div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;