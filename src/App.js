import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Status } from "./components/Pages/Status";
import Commands from "./components/Pages/Commands";
import { Dashboard } from "./components/Pages/DashboardPage";
import Profile from './components/Pages/Profile';
import Footer from "./components/Footer";
import NotFoundPage from './components/Pages/NotFoundPage';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jwtToken, setJwtToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('jwtToken');
    if (tokenFromLocalStorage) {
      setJwtToken(tokenFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://api.kotone.tech/user/info', {
          headers: {
            'Authorization': `Bearer ${jwtToken}`
          }
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };

    if (jwtToken) {
      fetchUserInfo();
    }
  }, [jwtToken]);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setJwtToken('');
    setUserInfo(null);
  };

  return (
    <>
      <Router>
        <NavBar isLoggedIn={!!jwtToken} handleLogout={handleLogout} />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/status" element={<Status />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/profile"
              element={jwtToken ? <Profile userInfo={userInfo} /> : <Navigate to="/login" />}
            />
            {/* Ruta para manejar el error 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
