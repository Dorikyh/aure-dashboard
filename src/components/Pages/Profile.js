// Profile.js
import React, { useState, useEffect } from 'react';
import SideBar from "../SideBar.js";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      fetch('https://api.kotone.tech/user/info', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }
      })
      .then(response => response.json())
      .then(data => setUserInfo(data))
      .catch(error => console.error('Error fetching user info:', error));
    }
  }, []);

  return (
    <div className="dashboard-container">
      <SideBar />
      <main>
        {userInfo ? (
          <div>
            <h2>Welcome, {userInfo.username}.</h2>
            <p>Credits: {userInfo.credits}</p>
            {/* Agrega aquí más información del usuario según lo que devuelva la API */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default Profile;
