// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./components/Pages/Home";
import { Status } from "./components/Pages/Status";
import Commands from "./components/Pages/Commands";
import Profile from './components/Pages/Profile';
import Footer from "./components/Footer";
import NotFoundPage from './components/Pages/NotFoundPage';
import { Login } from './components/Pages/Login'
import Terms from './components/Pages/Terms'
import Premium from './components/Pages/Premium'
import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pages">
        <Analytics id="G-4ZQZQZQZQZ" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard"element={<Profile />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/terms" element={<Terms />} />
          {/* Ruta para manejar el error 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;